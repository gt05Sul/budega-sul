import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./product-form.css";

// Schema de validação usando Yup
const ProductSchema = Yup.object().shape({
  product: Yup.string().required("Nome do produto é obrigatório"),
  price: Yup.number()
    .required("Preço é obrigatório")
    .positive("Preço deve ser positivo"),
  stock: Yup.number()
    .required("Estoque é obrigatório")
    .integer("Estoque deve ser um número inteiro")
    .min(0, "Estoque não pode ser negativo"),
  description: Yup.string().required("Descrição é obrigatória"),
  category: Yup.string().required("Categoria é obrigatória"),
  discount: Yup.number()
    .min(0, "Desconto não pode ser negativo")
    .max(100, "Desconto não pode ser maior que 100"),
  images: Yup.array()
    .of(Yup.string().url("Deve ser uma URL válida"))
    .min(1, "Pelo menos uma imagem é necessária"),
});

const ProductForm = () => {
  const initialValues = {
    product: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    discount: 0,
    images: [""],
  };

  const handleSubmit = (values) => {
    console.log("Dados do Produto:", values);
    // Aqui você pode fazer o envio dos dados para a API
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="product">Produto</label>
            <Field type="text" name="product" />
            <ErrorMessage name="product" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="price">Preço</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="stock">Estoque</label>
            <Field type="number" name="stock" />
            <ErrorMessage name="stock" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <Field type="text" name="description" />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <Field type="text" name="category" />
            <ErrorMessage name="category" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="discount">Desconto (%)</label>
            <Field type="number" name="discount" />
            <ErrorMessage name="discount" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="images">Imagens (URLs)</label>
            {values.images.map((image, index) => (
              <div key={index}>
                <Field
                  type="text"
                  name={`images[${index}]`}
                  placeholder="URL da imagem"
                />
                <button
                  type="button"
                  onClick={() => {
                    const updatedImages = [...values.images];
                    updatedImages.splice(index, 1);
                    setFieldValue("images", updatedImages);
                  }}
                >
                  Remover
                </button>
                <ErrorMessage
                  name={`images[${index}]`}
                  component="div"
                  className="error"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFieldValue("images", [...values.images, ""])}
            >
              Adicionar Imagem
            </button>
          </div>

          <button type="submit">Cadastrar Produto</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
