import style from './ControleItem.module.css'


export function ControleItem({ title, Icon, value }) {
  return (
    <div className={style.resume}>
      <header className={style.resumeCabecalho}>
        <p>{title}</p>
        <Icon />
      </header>
      <span>R$ {value}</span>
    </div>

  )
}