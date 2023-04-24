import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const AsyncAwait = () => {
  const [uniqueProperties, setUniqueProperties] = useState([]);
  const [sTokens, setsTokens] = useState([]);
  const [dTokens, setdTokens] = useState([]);
  const [oldTokens, setoldTokens] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setError("");
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "accept": "*/*",
          "X-AUTH-REALT-TOKEN": API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const rawData = await response.json();
      const uniquePropertiesData = rawData.filter((objet, index, self) => index === self.findIndex((t) => ( t.coordinate.lat === objet.coordinate.lat && t.coordinate.lng === objet.coordinate.lng)) && objet.canal === "release");
      const filteredData = rawData.filter(token => !token.fullName.startsWith("OLD-") && !token.fullName.startsWith("D "));
      const dFilteredData = rawData.filter(token => token.fullName.startsWith("D "));
      const oldFilteredData = rawData.filter(token => token.fullName.startsWith("OLD-"));

      setUniqueProperties(uniquePropertiesData);
      setsTokens(filteredData);
      setdTokens(dFilteredData);
      setoldTokens(oldFilteredData);

    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div style={{ height: 300, width: 500 }}>
      {error && <p>{error}</p>}
      {<p>RealTokens-S: {sTokens.length}, RealTokens-D: {dTokens.length}, OLD-RealTokens: {oldTokens.length}</p>}
      {<p>Total RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.totalTokens, 0))}</p>}
      {<p>Price for 1 each RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.tokenPrice, 0)).toFixed(2))}$</p>}
      {<p>Total Price RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.totalInvestment, 0)).toFixed(2))}$</p>}
      {<p>Average Yield RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.annualPercentageYield, 0)/uniqueProperties.length).toFixed(2))}%</p>}
      {<p>Total Gross Rent Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.grossRentMonth, 0)).toFixed(2))}$</p>}
      {<p>Total Gross Rent Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.grossRentYear, 0)).toFixed(2))}$</p>}
      {<p>Total Net Rent Day RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.netRentDay, 0).toFixed(2))}$</p>}
      {<p>Total Net Rent Month RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.netRentMonth, 0).toFixed(2))}$</p>}
      {<p>Total Net Rent Year RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.netRentYear, 0).toFixed(2))}$</p>}
      {<p>Net Rent Day Per RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.netRentDayPerToken, 0).toFixed(2))}$</p>}
      {<p>Net Rent Month Per RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.netRentMonthPerToken, 0).toFixed(2))}$</p>}
      {<p>Net Rent Year Per RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.netRentYearPerToken, 0).toFixed(2))}$</p>}
      {<p>Average Gross Rent Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.grossRentMonth, 0)/uniqueProperties.length).toFixed(2))}$</p>}
      {<p>Average Gross Rent Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.grossRentYear, 0)/uniqueProperties.length).toFixed(2))}$</p>}
      {<p>Average Net Rent Day RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.netRentDay, 0)/uniqueProperties.length).toFixed(2))}$</p>}
      {<p>Average Net Rent Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.netRentMonth, 0)/uniqueProperties.length).toFixed(2))}$</p>}
      {<p>Average Net Rent Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.netRentYear, 0)/uniqueProperties.length).toFixed(2))}$</p>}
      {<p>Total Cost Property Management Per Month RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.propertyManagement, 0).toFixed(2))}$</p>}
      {<p>Total Cost Property Management Per Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.propertyManagement, 0)*12).toFixed(2))}$</p>}
      {<p>Total Fees RealT Platorm Per Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.realtPlatform, 0).toFixed(2)))}$</p>}
      {<p>Total Fees RealT Platorm Per Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.realtPlatform, 0)*12).toFixed(2))}$</p>}
      {<p>Total Cost Insurance Per Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.insurance, 0).toFixed(2)))}$</p>}
      {<p>Total Cost Insurance Per Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.insurance, 0)*12).toFixed(2))}$</p>}
      {<p>Total Cost Property Taxes Per Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.propertyTaxes, 0)).toFixed(2))}$</p>}
      {<p>Total Cost Property Taxes Per Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.propertyTaxes, 0)*12).toFixed(2))}$</p>}
      {<p>Total Cost Utilities Per Month RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.utilities, 0)).toFixed(2))}$</p>}
      {<p>Total Cost Utilities Per Year RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.utilities, 0)*12).toFixed(2))}$</p>}
      {<p>Total Initial Maintenance Reserve RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.initialMaintenanceReserve, 0)).toFixed(2))}$</p>}
      {<p>Total Interior Size RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.squareFeet, 0))} ft²</p>}
      {<p>Total Lot Size RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.lotSize, 0))} ft²</p>}
      {<p>Total Units RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.totalUnits, 0))}</p>}
      {<p>Total Rented Units RealTokens: {new Intl.NumberFormat('us-US').format(uniqueProperties.reduce((a,v) => a = a + v.rentedUnits, 0))}</p>}
      {<p>Total Vacant Units RealTokens: {new Intl.NumberFormat('us-US').format((uniqueProperties.reduce((a,v) => a = a + v.totalUnits, 0))-(uniqueProperties.reduce((a,v) => a = a + v.rentedUnits, 0)))}</p>}
     
      {/*sTokens.map((token) => (
        <ol key={token.uuid}>token: {token.fullName}</ol>
      ))*/}

    </div>
  );
};

export default AsyncAwait;
