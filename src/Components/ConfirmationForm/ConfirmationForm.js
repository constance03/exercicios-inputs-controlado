import React from "react";
import { Form, Input } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  return (
    <Form>
      <label>
        Data de nascimento:
        <Input
          type="date"
          placeholder="01/01/2001"
          value={props.date}
          onChange={props.onChangeDate}
        />
      </label>

      <label>
        Insira seu número de celular:
        <Input
          type="phone"
          placeholder="(00) 90000-0000"
          value={props.phone}
          onChange={props.onChangePhone}
        />
      </label>

      <label>
        Selecione uma opção:
        <select value={props.genero} onChange={props.onChangeGenero}>
          <option> </option>
          <option>Homem cisgênero</option>
          <option>Mulher Cisgênero</option>
          <option>Homen Trans</option>
          <option>Mulher Trans</option>
          <option>Pessoa não binária</option>
          <option>Prefiro não responder</option>
        </select>
      </label>

      <label>
        Selecione uma opção:
        <select value={props.etnia} onChange={props.onChangeEtnia}>
          <option> </option>
          <option>Negro</option>
          <option>Branco</option>
          <option>Pardo</option>
          <option>Amarelo</option>
          <option>Indígena</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>

      <label>
        Curso integral web fullstack
        <Input
          type="radio"
          name="turma"
          checked={props.course}
          onChange={props.onChangeCourse}
        />
      </label>

      <label>
        Curso noturno web fullstack
        <Input
          type="radio"
          name="turma"
          checked={props.course2}
          onChange={props.onChangeCourse2}
        />
      </label>

      <label>
        Tem ensino médio completo
        <Input
          type="checkbox"
          checked={props.checkbox}
          onChange={props.onChangeCheckbox}
        />
      </label>

      <label>
        Tem disponibilidade para participar das atividades
        <Input
          type="checkbox"
          checked={props.checkbox2}
          onChange={props.onChangeCheckbox2}
        />
      </label>

      <button onClick={props.sendData2}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;
