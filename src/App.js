import React, {useState, useEffect} from 'react'
import './App.css'
import Bar from "./components/bar";

function App() {
  const [gamificacao, setGamificacao] = useState([{}]);
  const [data, setData] = useState('')
  
  useEffect( () => {
    const getGamificacao = async () => {
      const endpoint = 'https://spreadsheets.google.com/feeds/list/1AJt6VNVS0Qa4X3EP2KKcVJNpmrENHiYakFxx6u8bvQ8/oxlfih8/public/values?alt=json'
      const {feed: {entry}} = await fetch(endpoint).then(resp => resp.json())
      const lastUpdate = entry.pop();
      let {content: {$t}} = lastUpdate;

      const str = $t.split(',')

      const result = str.map(obj => {
        let rest = obj.split(':')
        return {valor: rest.pop(), nome: rest.pop()}
      })

      setGamificacao(result)

      setData(lastUpdate.title.$t);
    }
    getGamificacao()
  }, [])

  return (
    <div class='body'>
      {
        console.log(gamificacao)
      }

      <span class='heading'>Ranking</span>
      <span style={{float: 'right'}}>Último update: {data}</span>
      <p><i>A escala de pontos vai até 100 pontos</i></p>
      <hr/>

      <div class='row'>
        {
          gamificacao.map( (item, index )=> {
            return (
              item.index = index,
              <Bar {...item}/>
            )
          })
        }
      </div>
      

    </div>
  );
}

export default App;
