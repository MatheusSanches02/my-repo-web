import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, CreateForm, InputText, Buttons } from "./styles.js";

import Requests from "../../services/requests.js";
import toast, { Toaster } from "react-hot-toast";

import { Dots } from "react-activity";
import "react-activity/dist/library.css";

const FormCadastro = ({ token }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [owner, setOwner] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    console.clear();
    e.preventDefault();
    const obj = {
      name: name,
      description: description,
      language: language,
      owner: owner,
    };

    Requests.createRepo(obj)
      .then((res) => {
        if (!res) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Repositório Cadastrado!");
          setLoading(false);
          setTimeout(() => {
            let path = "/repositories";
            navigate(path);
          }, 750);
        }
      })
      .catch((res, err) => {
        console.log(res, err);
      });
  };

  return (
    <Container>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <p>Cadastro de Repositórios</p>
        <CreateForm>
          <label>
            Nome
            <InputText
              type="text"
              placeholder="Digite o nome do repositório"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Descrição
            <InputText
              type="text"
              placeholder="Descreva o repositório"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <label>
            Linguagem
            <InputText
              type="text"
              placeholder="Linguagem utilizada"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            ></InputText>
          </label>
          <label>
            Dono do repositório
            <InputText
              type="text"
              placeholder="Nome do responsável pelo repositório"
              value={owner}
              onChange={(e) => {
                setOwner(e.target.value);
              }}
            ></InputText>
          </label>
          <Buttons>
            {!loading ? <button type="submit">Cadastrar</button> : <Dots />}
          </Buttons>
        </CreateForm>
      </form>
    </Container>
  );
};

export default FormCadastro;
