import React from "react";
import logo from "../logo.svg";
import "./patientList.css";

function patientList() {
  return (
    <section>
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
    </section>
  );
}

const PatientCard = () => {
  return (
    <div>
      <Image/>
      <UserName />
      <button>parvande</button>
      <button>noskhe</button>
    </div>
  );
};

const Image = () => {
  return <img className="patientPic" src={logo} alt=""></img>;
};

const UserName = () => {
  return <article>ahmad ahmadi</article>;
};

export default patientList;
