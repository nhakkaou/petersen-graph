import "./App.css";
import { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  margin-top: 50%;
  padding: 15px;
  border-radius: 10px;
  border: 4px solid #333;
  color: #fff;
  background: #000;

  outline: none;
  width: 60%;
  min-width: 300px;
  font-size: 24px;
`;
const Btn = styled.input`
  margin-top: 50%;
  padding: 15px;
  border-radius: 10px;
  border: 4px solid #333;
  color: #fff;
  background: #000;
  outline: none;
  width: 10%;
  font-size: 24px;
  font-size: calc(1px + 2vmin);
  align-items: center;
`;
function App() {
  const [inp, setInp] = useState("");
  function ascii(a) {
    return a.charCodeAt(0);
  }
  var arr = new Array(10);
  for (var i = 0; i < 10; i++) {
    arr[i] = new Array(10);
  }
  arr[0][1] =
    arr[1][2] =
    arr[2][3] =
    arr[3][4] =
    arr[4][0] =
    arr[0][5] =
    arr[1][6] =
    arr[2][7] =
    arr[3][8] =
    arr[4][9] =
    arr[5][7] =
    arr[7][9] =
    arr[9][6] =
    arr[6][8] =
    arr[8][5] =
      true;
  let result = [];
  const findthepath = (S, v) => {
    console.log(S, v);
    result = [];

    for (let i = 0; i < S.length; i++) {
      if (arr[v][ascii(S[i]) - ascii("A")] || arr[ascii(S[i]) - ascii("A")][v])
        v = ascii(S[i]) - ascii("A");
      else if (
        arr[v][ascii(S[i]) - ascii("A") + 5] ||
        arr[ascii(S[i]) - ascii("A") + 5][v]
      )
        v = ascii(S[i]) - ascii("A") + 5;
      else return false;
      result.push(v);
    }
    return true;
  };
  const submit = () => {
    let i = 0;
    if (inp) {
      while (i < inp.length) {
        if (ascii(inp[i]) < 65 || ascii(inp[i]) > 69) break;
        i++;
      }

      if (i === inp.length) {
        if (
          findthepath(inp, ascii(inp[0]) - ascii("A")) ||
          findthepath(inp, ascii(inp[0]) - ascii("A") + 5)
        )
          console.log(result);
        else alert(-1);
      } else alert("Invalid Input");
    }
  };
  return (
    <div className="App">
      <Input
        className="txt"
        type="text"
        onChange={(e) => setInp(e.target.value.toUpperCase())}
        value={inp}
        required
      />
      <Btn type="submit" onClick={submit} />
    </div>
  );
}

export default App;
