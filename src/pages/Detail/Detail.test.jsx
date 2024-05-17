
import { getAllByTestId, getByTestId, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Detail from '.';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { storeData } from '../../constants';

const mockStore = configureStore([thunk]);

it('yüklenm durumunda dogru bileşenler ekrana basılır', ()=> {

    //storun yüklenme durumundaki halini sümüle et
    const store= mockStore({
        isLoading:true,
        error:null,
        data:null,
    })
    render(
         <Provider store={store}>
         <BrowserRouter>
         <Detail/>
         </BrowserRouter>
         </Provider>
        
        );
        //loaderler ekrana geliyor mu kontrol et
        screen.getAllByTestId("card-loader");
        screen.getByTestId("header-loader");



})

it("hata durumunda hata bileşeni ekrana basılır", ()=> {
    //store ın hata durumundaki verileri simüle et
    const store= mockStore({
        isLoading:false,
        error:'server responden with status code of 404 (undefined)',
        data:null,
    })
    //test edilecek bilşeni renderle
    render(
        <Provider store={store}>
        <BrowserRouter>
        <Detail/>
        </BrowserRouter>
        </Provider>
       
       );
       //hata mesajını içeren  bileşen ekrana basıldı mı
       screen.getByText(/server responden with/i);


})

it("veri gelme durumunda kart bileşenleri ekrana basılır", ()=> {

    const store=mockStore(storeData);
    render(
        <Provider store={store}>
        <BrowserRouter>
        <Detail/>
        </BrowserRouter>
        </Provider>
       
       );
       //ülke detayları ekrana geliyor mu
//ekrandaki resmi al
const img= screen.getByRole('img');

//resim kaynagı dogru mu
expect(img).toHaveProperty("src", storeData.data.country.flags.png)

//ülke ismi ekrana geliyor mu
const title= screen.getByTestId("country-title")

//ülke ismi dogru mu
 expect(title).toHaveTextContent(storeData.data.country.altSpellings[1]);

       //kartlar ekrana geliyor mu

//nesneyi diziye cevir
const covidArr= Object.entries(storeData.data.covid);

//dizideki her bir eleman için key ve value degeri ekrana geliyor mu

covidArr.forEach(item=> {

    screen.getAllByText(item[0].split('_').join(' '));

screen.getAllByText(item[1]);


})


})