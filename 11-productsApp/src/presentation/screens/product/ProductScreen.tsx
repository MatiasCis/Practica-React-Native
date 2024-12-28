import { useRef } from "react"
import { Button, ButtonGroup, Input, Layout, Text, useTheme } from "@ui-kitten/components"
import { Formik } from 'formik';

import { MainLayout } from "../../layouts/MainLayout"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../../navigation/StackNavigator"

import { getProductById, updateCreateProduct } from "../../../actions/products/";

import { ScrollView } from "react-native-gesture-handler"
import { Product } from "../../../domain/entities/product"
import { MyIcon } from "../../components/ui/MyIcon"

import { ProductImages } from "../../components/products/ProductImages"
import { genders, sizes } from "../../../config/constants/constants"
import { CameraAdapter } from "../../../config/adapters/camera-adapter";


interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'>{}


export const ProductScreen = ({ route}:Props) => {

  const productIdRef = useRef(route.params.productId);
  // // const {productId} = route.params;
  const theme = useTheme();
  const queryClient = useQueryClient();

  const { data:product} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current)
  })

  const mutation = useMutation({
    mutationFn: ( data: Product) => updateCreateProduct({...data, id: productIdRef.current}),
    onSuccess(data: Product){
      productIdRef.current = data.id // creacion

      queryClient.invalidateQueries({ queryKey: ['products', 'infinite']})
      queryClient.invalidateQueries({ queryKey: ['product', data.id]})
      // queryClient.setQueryData(['product', data.id], data);
      
    },
  })

  if ( !product){
    return (<MainLayout title="cargando..."/>)
  }

  return (
    <Formik initialValues={product} onSubmit={ mutation.mutate}>
      {({ handleChange, handleSubmit, values, errors, setFieldValue}) => (
          <MainLayout
              title={values.title}
              subTitle={`Precio: ${values.price}`}
              rightAction={ async() => {

                const photos = await CameraAdapter.getPicturesFromLibrary();
                console.log({photos})
                setFieldValue('images', [...values.images, ...photos])
              }}
              rightActionIcon="image-outline"
              >

                <ScrollView style={{flex: 1}}>
                  {/* Imagenes del Producto */}

                  <Layout style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center'}}>

                    <ProductImages images= {values.images} />

                  </Layout>

                  {/* Formulario */}

                  <Layout>
                      <Input
                        label="Titulo"
                        style={{marginVertical: 5}}
                        value={values.title}
                        onChangeText={handleChange('title')}
                      />
                      <Input
                        label="Slug"
                        style={{marginVertical: 5}}
                        value={values.slug}
                        onChangeText={handleChange('slug')}
                        />
                      <Input
                        label="Descripcion"
                        multiline
                        numberOfLines={5}
                        value={values.description}
                        onChangeText={handleChange('description')}
                        style={{marginVertical: 5}}
                      />
                  </Layout>

                  <Layout style={{marginVertical: 5, marginHorizontal: 15, flexDirection:'row', gap: 10  }}>
                    <Input
                      label="Precio"
                      value={values.price.toString()}
                      onChangeText={handleChange('price')}
                      keyboardType="numeric"
                      style={{ flex: 1}}
                    />
                    <Input
                      label="Inventario"
                      value={values.stock.toString()}
                      onChangeText={handleChange('stock')}
                      keyboardType="numeric" 
                      style={{ flex: 1}}

                    />
                  </Layout>

                      {/* Selectores */}
                  <ButtonGroup 
                  style={{margin: 2, marginTop: 30, marginHorizontal: 15}}
                  size="small"
                  >
                    {sizes.map(size => (
                        <Button
                          onPress={ () => setFieldValue(
                            'sizes',
                             values.sizes.includes(size)
                              ? values.sizes.filter( s => s !== size)
                               : [...values.sizes, size]
                              )}
                          key={size}
                          style={{
                            flex: 1,
                            backgroundColor: values.sizes.includes(size)
                             ? theme['color-primary-400'] : 'lightblue'
                          }}
                        >{size}</Button>
                      ))
                    }
                  </ButtonGroup>

                  <ButtonGroup 
                  style={{margin: 2, marginTop: 30, marginHorizontal: 15}}
                  size="small"
                  >
                      {
                        genders.map((gender) => (
                          <Button
                            onPress={() => setFieldValue('gender', gender)}
                            key={gender}
                            style={{
                              flex: 1,
                              backgroundColor: values.gender.startsWith(gender) ? theme['color-primary-400'] : 'lightblue',
                            }}
                          >{gender}</Button>
                        ))
                      }
                  </ButtonGroup>

                      {/* Boton de guardar */}
                      <Button
                      accessoryLeft={<MyIcon name="save-outline" white/>}
                      onPress={() => handleSubmit()}
                      disabled={mutation.isPending}
                      style={{margin: 15}}
                      >
                        Guardar
                      </Button>

                      <Text>{JSON.stringify(values, null, 2)}</Text>

                  <Layout style={{height: 250}}/>
                </ScrollView>
          </MainLayout>
        )
      }

    </Formik>
  )
}