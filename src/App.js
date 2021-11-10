import React from "react";
// import Text2 from "./col/Text";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HotelPage from "./RegisterAll/HotelPage";
import Hotels from "./RegisterAll/Hotels";
import SignPage from "./RegisterAll/SignPage";
import Register from "./col/Register";
import Header from "./RegisterAll/Olorunda/Header/Header";
import Room from "./RegisterAll/confidence/Room";
import Booking from "./RegisterAll/Ebuka/Booking";
import Forms from "./RegisterAll/confidence/Forms";
import Receipt from "./RegisterAll/confidence/Receipt";
import Home from "./RegisterAll/Olorunda/Home/Home";
import Footer from "./RegisterAll/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/sign" component={SignPage} />
        <Route exact path="/registerHotel" component={HotelPage} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/form" component={Forms} />
        <Route exact path="/form/:id" component={Receipt} />
        {/* <Route exact path="/stats" component={Stats} /> */}
        <Route exact path="/hotel" component={Hotels} />
        <Route exact path="/hotel/:id" component={Room} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
