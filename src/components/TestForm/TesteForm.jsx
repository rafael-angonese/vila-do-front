import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserContext from "../../contexts/userContext";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required(),
    senha: yup.string().min(8).required(),
  })
  .required();

function TestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const { name, onSaveName, remove } = useContext(UserContext);

  const onSubmit = (data) => {
    // console.log(data);

    onSaveName(data.name)
    reset()
    toast.success('Nome salvo com sucesso!')
  };

  return (
    <>
      <Container maxW="container.md" marginTop="1.7rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Nome</FormLabel>
            <Input {...register("name")} />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.senha}>
            <FormLabel>Senha</FormLabel>
            <Input {...register("senha")} />
            <FormErrorMessage>{errors?.senha?.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit">Enviar</Button>

          <Button onClick={remove} m={4}>Remover Nome</Button>
          {name}
        </form>
      </Container>
    </>
  );
}

export default TestForm;
