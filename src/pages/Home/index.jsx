import { useState } from 'react';
import { ControleItem } from '../../components/ControleItem'
import style from './Styled.module.css'
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { Header } from '../../components/Header';
import { Historico } from '../../components/Historico';


export function Home() {
  const [entradas, setEntradas] = useState(500);
  const [saidas, setSaidas] = useState(650);
  const [total, setTotal] = useState(500);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState();
  return (
    <div>
      <Header />
      <div className={style.container}>
        <ControleItem title="Entradas" Icon={BsArrowUpCircle} value={entradas} />
        <ControleItem title="Saidas" Icon={BsArrowDownCircle} value={saidas} />
        <ControleItem title="Total" Icon={BsCurrencyDollar} value={total} />
      </div>
      <div className={style.descricao}>
        <div className={style.field}>
          <label htmlFor="name1">Descrição</label>
          <input
            type="text"
            id="name1"
            value={descricao}
          />
        </div>
        <div>
          <label htmlFor="name2">Valor</label>
          <input
            type="number"
            id='name2'
            value={valor}
          />
        </div>
        <div className={style.selected}>
          <div>
            <input type="radio" id="1E" name="Entradas" value="Entradas"></input>
            <label for="1E">Entradas</label>
          </div>
          <div>
            <input type="radio" id="2S" name="Entradas" value="Saidas"></input>
            <label for="2S">Saidas</label>
          </div>
        </div>
        <div className={style.btnAdd}>
          <button type="submit">ADICIONAR</button>
        </div>
      </div>
    </div>
  )
}