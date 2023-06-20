import { createElement, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { EmailAuthProvider, signOut } from "firebase/auth";
import { ButtonLoadContent } from "./Buttons";

const querySnapshotContacts = await getDocs(collection(db, "contacts"));
const querySnapshotOrders = await getDocs(collection(db, "orders"));

let docsContacts = [];
querySnapshotContacts.docs.forEach((elem, i) => {
  docsContacts[i] = elem.data();
});

function renderDataTable(docs, table) {
  console.log("docs", docs)

  for (let i = 0; i < docs.length; i++) {
    let container = document.createElement("div");

    let doc = [];
    let j = 0;
    for(let field of docs[i]) {
      doc[j] = field;
    }
    console.log("doc", doc)

    for (let field of doc) {
      let p = document.createElement("p");
      p.innerHTML = field;

      container.appendChild(p);
    }

    table.appendChild(container);
  }
}

async function relocate(timeSec) {
  setTimeout(() => {
    window.location.href = "login";
  }, timeSec * 1000);
}

function EntryRejected() {
  relocate(5);
  console.log("ifhdb");
  return (
    <>
      <p>Вход отклонен</p>
    </>
  );
}

function Contacts() {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Контакты</h1>

      <div className="table">
        <ButtonLoadContent
          data-loadFn={() => renderDataTable(docsContacts, document.querySelector("[name='contacts']"))}
        />

        {/* шапка */}
        <div>
          <p>Email</p>
          <p>number</p>
          <p>name</p>
          <p>message</p>
        </div>

        <div name="contacts" data-table="contacts"></div>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div>
      <h1>ЗАЯВКИ</h1>

      <div className="cursor-pointer" onClick={(event) => {}}>
        нажми, чтобы раскрыть
      </div>
    </div>
  );
}

function Blog() {
  return (
    <>
      <h1>Блог</h1>
    </>
  );
}

function Portfolio() {
  return (
    <>
      <h1>Портфолио</h1>
    </>
  );
}

function Page() {
  const [page, setPage] = useState();
  let content = page;
  return (
    <div id="admin" className="w-full">
      <nav>
        <ul className="flex flex-row space-x-4">
          <li onClick={() => setPage(<Orders />)}>Заявки</li>
          <li onClick={() => setPage(<Contacts />)}>Контакты</li>
          <li onClick={() => setPage(<Blog />)}>Создать запись в блог</li>
          <li onClick={() => setPage(<Portfolio />)}>
            Создать запись в портфолио
          </li>
        </ul>
      </nav>

      {content}
    </div>
  );
}

export default function Admin() {
  let user = true;
  return <>{user ? <Page /> : <EntryRejected />}</>;
}
