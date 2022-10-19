import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [formFlow, setFormFlow] = useState(2); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [genero, setGenero] = useState(" ");
  const [etnia, setEtnia] = useState(" ");
  const [course, setCourse] = useState(false);
  const [course2, setCourse2] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeGenero = (event) => {
    setGenero(event.target.value);
  };

  const onChangeEtnia = (event) => {
    setEtnia(event.target.value);
  };

  const onChangeCourse = (event) => {
    setCourse(!course);
  };

  const onChangeCourse2 = (event) => {
    setCourse2(!course2);
  };

  const onChangeCheckbox = (event) => {
    setCheckbox(!checkbox);
  };

  const onChangeCheckbox2 = (event) => {
    setCheckbox2(!checkbox2);
  };

  const sendData = (event) => {
    event.preventDefault();
    if (name.length === 0 || age.length === 0 || email.length === 0) {
      alert("Todos os campos são obrigatórios");
    } else if (name.length < 10 || name.length > 30) {
      alert("Nome precisa ter no mínimo 10 caracteres e no máximo 30");
    } else if (age < 18) {
      alert("O estudante precisa ser maior de idade");
    } else if (!email.includes("@") && !email.includes(".")) {
      alert("Email incorreto");
    } else {
      setFormFlow(2);
    }
  };

  const sendData2 = (event) => {
    if (date.length !== 10) {
      alert("Data de nascimento não preenchida");
    } else if (phone.length !== 11) {
      alert("Telefone não preenchido");
    } else if (genero === "") {
      alert("Escolha um gênero");
    } else if (etnia === "") {
      alert("Escolha um etnia");
    } else if (course === false && course2 === false) {
      alert("Selecione uma opção de curso");
    } else if (checkbox === false || checkbox2 === false) {
      alert("Selecione as duas caixas");
    } else {
      alert("Inscrição aprovada");
      setDate("");
      setPhone("");
      setGenero("");
      setEtnia("");
      setCourse();
      setCourse2();
      setCheckbox();
      setCheckbox2();
    }
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          name={name}
          age={age}
          email={email}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          onChangeName={onChangeName}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm
          date={date}
          phone={phone}
          genero={genero}
          etnia={etnia}
          course={course}
          course2={course2}
          checkbox={checkbox}
          checkbox2={checkbox2}
          onChangeDate={onChangeDate}
          onChangePhone={onChangePhone}
          onChangeGenero={onChangeGenero}
          onChangeEtnia={onChangeEtnia}
          onChangeCourse={onChangeCourse}
          onChangeCourse2={onChangeCourse2}
          onChangeCheckbox={onChangeCheckbox}
          onChangeCheckbox2={onChangeCheckbox2}
          sendData2={sendData2}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
