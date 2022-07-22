import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { FacilityList } from "./facility/FacilityList";
import { FacilityCreate } from "./facility/FacilityCreate";
import { FacilityEdit } from "./facility/FacilityEdit";
import { FacilityShow } from "./facility/FacilityShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { TestDatumList } from "./testDatum/TestDatumList";
import { TestDatumCreate } from "./testDatum/TestDatumCreate";
import { TestDatumEdit } from "./testDatum/TestDatumEdit";
import { TestDatumShow } from "./testDatum/TestDatumShow";
import { TankDatumList } from "./tankDatum/TankDatumList";
import { TankDatumCreate } from "./tankDatum/TankDatumCreate";
import { TankDatumEdit } from "./tankDatum/TankDatumEdit";
import { TankDatumShow } from "./tankDatum/TankDatumShow";
import { TestResultList } from "./testResult/TestResultList";
import { TestResultCreate } from "./testResult/TestResultCreate";
import { TestResultEdit } from "./testResult/TestResultEdit";
import { TestResultShow } from "./testResult/TestResultShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { QuoteList } from "./quote/QuoteList";
import { QuoteCreate } from "./quote/QuoteCreate";
import { QuoteEdit } from "./quote/QuoteEdit";
import { QuoteShow } from "./quote/QuoteShow";
import { TechnicianList } from "./technician/TechnicianList";
import { TechnicianCreate } from "./technician/TechnicianCreate";
import { TechnicianEdit } from "./technician/TechnicianEdit";
import { TechnicianShow } from "./technician/TechnicianShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MTC Test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Facility"
          list={FacilityList}
          edit={FacilityEdit}
          create={FacilityCreate}
          show={FacilityShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="TestDatum"
          list={TestDatumList}
          edit={TestDatumEdit}
          create={TestDatumCreate}
          show={TestDatumShow}
        />
        <Resource
          name="TankDatum"
          list={TankDatumList}
          edit={TankDatumEdit}
          create={TankDatumCreate}
          show={TankDatumShow}
        />
        <Resource
          name="TestResult"
          list={TestResultList}
          edit={TestResultEdit}
          create={TestResultCreate}
          show={TestResultShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="Quote"
          list={QuoteList}
          edit={QuoteEdit}
          create={QuoteCreate}
          show={QuoteShow}
        />
        <Resource
          name="Technician"
          list={TechnicianList}
          edit={TechnicianEdit}
          create={TechnicianCreate}
          show={TechnicianShow}
        />
      </Admin>
    </div>
  );
};

export default App;
