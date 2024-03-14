import { useEffect, useState } from 'react'
import styles from "./styles.module.scss";

export default function SidebarCategories({ lists }) {
  const [data, setData] = useState([]);
  const [objData, setObjData] = useState({
    name: "Barış",
    age: 24
  });
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState('');

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log("Bir hata oluştu : ", error);
        setData([]);
      }).finally(() => setLoading(false))
  }

  function onChangeInput(e) {
    setInputData(e.target.value);
  }

  function changeObjData() {
    setObjData({ name: "ahmet", age: 30 });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return console.log(objData);
  }, [objData])
  

  return (
    <div className="container">
      <div className={styles.sidebar}>
        <div>SidebarCategories</div>
        {loading && <div>Yükleniyor...</div>}
        {!loading &&
          <div>
            <ul>
              {data.map((user, index) => (
                <li key={index}>{user.name}</li>
              ))}
            </ul>
          </div>
        }
        <div>
          <ul>
            {lists?.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="input-container">
            <input type="text" name="test" id="test" onChange={onChangeInput} />
            input-text: {inputData}
          </div>
        </div>
        <div>
          <button onClick={changeObjData}>değiştir</button>
          {objData.name}
        </div>

      </div>
    </div>

  )
}
