type buildingList = {
  buildings:Array<string>
}
type building = {
  building:string
}

export type RootStackParamList = {
    Home: undefined, 
    Tutorial1: undefined; 
    Tutorial2: undefined; 
    Tutorial3: undefined; 
    Tutorial4: buildingList; 
    Tutorial5: buildingList; 
    SelectBuilding:buildingList;
    NavigationPage:building;
  };