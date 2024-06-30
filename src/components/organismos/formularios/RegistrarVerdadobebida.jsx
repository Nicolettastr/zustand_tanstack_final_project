import { useEffect, useState } from "react";
import styled from "styled-components";
import { v } from "../../../styles/variables";
import {
  InputText,
  Btnsave,
  Selector,
  ListaGenerica,
  useNivelesStore,
  usePreguntasVerdadBebida,
} from "../../../index";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";

export function RegistrarVerdadobebida({ onClose, dataSelect, accion }) {
  //#region HOOKS REACT
  const [stateniveles, setStateniveles] = useState(false);
  //#endregion
  //#region LIBRERIAS
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { mostrarNiveles, nivelesItemSelect, selectNiveles, dataniveles } =
    useNivelesStore();
  const { insertarPreguntas, editarpreguntas, itemPreguntaSelect } =
    usePreguntasVerdadBebida();

  const mutatacion = useMutation({
    mutationKey: "insertando preguntas",
    mutationFn: async (data) => {
      if (accion === "Editar") {
        const p = {
          id: itemPreguntaSelect.id,
          pregunta: data.pregunta,
          id_nivel: nivelesItemSelect.id,
        };
        await editarpreguntas(p);
        onClose();
      } else {
        const p = {
          pregunta: data.pregunta,
          id_nivel: nivelesItemSelect.id,
        };
        await insertarPreguntas(p);

        onClose();
      }
    },
  });
  //#endregion
  //#region FUNCIONES

  //#endregion
  return (
    <Container>
      {mutatacion.isPending ? (
        <span>Agregando datos...</span>
      ) : (
        <div className="sub-contenedor">
          {mutatacion.isError && (
            <span>error...{mutatacion.error.message}</span>
          )}
          <div className="headers">
            <section>
              <h1>
                {accion == "Editar"
                  ? "Editar marca"
                  : "Registrar nueva pregunta"}
              </h1>
            </section>

            <section>
              <span onClick={onClose}>x</span>
            </section>
          </div>

          <form
            className="formulario"
            onSubmit={handleSubmit(mutatacion.mutateAsync)}
          >
            <section>
              <article>
                <InputText icono={<v.iconomarca />}>
                  <textarea
                    className="form__field"
                    defaultValue={dataSelect.pregunta}
                    type="text"
                    placeholder=""
                    {...register("pregunta", {
                      required: true,
                    })}
                  />
                  <label className="form__label">pregunta</label>
                  {errors.pregunta?.type === "required" && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>
              <ContainerCategoria>
                <label>Nivel: </label>
              </ContainerCategoria>

              <Selector
                texto1={nivelesItemSelect?.nombre}
                funcion={() => setStateniveles(!stateniveles)}
                color="#19e152"
              />
              {stateniveles && (
                <ListaGenerica
                  funcion={selectNiveles}
                  data={dataniveles}
                  setState={() => setStateniveles(!stateniveles)}
                />
              )}

              <div className="btnguardarContent">
                <Btnsave titulo="Guardar" bgcolor="#ffffff" />
              </div>
            </section>
          </form>
        </div>
      )}
    </Container>
  );
}
const ContainerCategoria = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-contenedor {
    width: 600px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 25px;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 40px;
    font-size: 28px;
  }
`;
const ContainerEmojiPicker = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
