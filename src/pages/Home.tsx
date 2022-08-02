import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `https://localhost:44397/student`
      const data = await fetch(url);
      const json = await data.json();
      setData(json);
      console.log(json);
    };
    loadData();

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Students</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          { data && data.length > 0 && data.map((item: any, index) => (
          <IonItem key ={index} routerLink={`details/${item.studentID}`}>
          <IonLabel>{item.fullName}</IonLabel>
        </IonItem>

          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
