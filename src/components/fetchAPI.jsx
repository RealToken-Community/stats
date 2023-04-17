import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const AsyncAwait = () => {
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
      const filteredData = rawData.filter(token => !token.fullName.startsWith("OLD-") && !token.fullName.startsWith("D "));
      const dFilteredData = rawData.filter(token => token.fullName.startsWith("D "));
      const oldFilteredData = rawData.filter(token => token.fullName.startsWith("OLD-"));

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
      {/*<p>City {new Set(sTokens.map(v => (v.fullName).filter(v)))}</p>*/}

      {<p>Total RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.totalTokens, 0))}</p>}
      {<p>Price for 1 each RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.tokenPrice, 0)).toFixed(2))}$</p>}
      {<p>Total Price RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.totalInvestment, 0)).toFixed(2))}$</p>}
      {<p>Average Yield RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.annualPercentageYield, 0)/sTokens.length).toFixed(2))}%</p>}
      {<p>Total Gross Rent Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.grossRentMonth, 0)).toFixed(2))}$</p>}
      {<p>Total Gross Rent Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.grossRentYear, 0)).toFixed(2))}$</p>}
      {<p>Total Net Rent Day RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.netRentDay, 0).toFixed(2))}$</p>}
      {<p>Total Net Rent Month RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.netRentMonth, 0).toFixed(2))}$</p>}
      {<p>Total Net Rent Year RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.netRentYear, 0).toFixed(2))}$</p>}
      {<p>Net Rent Day Per RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.netRentDayPerToken, 0).toFixed(2))}$</p>}
      {<p>Net Rent Month Per RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.netRentMonthPerToken, 0).toFixed(2))}$</p>}
      {<p>Net Rent Year Per RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.netRentYearPerToken, 0).toFixed(2))}$</p>}
      {<p>Average Gross Rent Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.grossRentMonth, 0)/sTokens.length).toFixed(2))}$</p>}
      {<p>Average Gross Rent Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.grossRentYear, 0)/sTokens.length).toFixed(2))}$</p>}
      {<p>Average Net Rent Day RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.netRentDay, 0)/sTokens.length).toFixed(2))}$</p>}
      {<p>Average Net Rent Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.netRentMonth, 0)/sTokens.length).toFixed(2))}$</p>}
      {<p>Average Net Rent Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.netRentYear, 0)/sTokens.length).toFixed(2))}$</p>}
      {<p>Total Cost Property Management Per Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.propertyManagement, 0).toFixed(2)))}$</p>}
      {<p>Total Cost Property Management Per Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.propertyManagement, 0)*12).toFixed(2))}$</p>}
      {<p>Total Fees RealT Platorm Per Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.realtPlatform, 0).toFixed(2)))}$</p>}
      {<p>Total Fees RealT Platorm Per Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.realtPlatform, 0)*12).toFixed(2))}$</p>}
      {<p>Total Cost Insurance Per Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.insurance, 0).toFixed(2)))}$</p>}
      {<p>Total Cost Insurance Per Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.insurance, 0)*12).toFixed(2))}$</p>}
      {<p>Total Cost Property Taxes Per Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.propertyTaxes, 0)).toFixed(2))}$</p>}
      {<p>Total Cost Property Taxes Per Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.propertyTaxes, 0)*12).toFixed(2))}$</p>}
      {<p>Total Cost Utilities Per Month RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.utilities, 0)).toFixed(2))}$</p>}
      {<p>Total Cost Utilities Per Year RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.utilities, 0)*12).toFixed(2))}$</p>}
      {<p>Total Initial Maintenance Reserve RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.initialMaintenanceReserve, 0)).toFixed(2))}$</p>}
      {<p>Total Interior Size RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.squareFeet, 0))} ft²</p>}
      {<p>Total Lot Size RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.lotSize, 0))} ft²</p>}
      {<p>Total Units RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.totalUnits, 0))}</p>}
      {<p>Total Rented Units RealTokens-S: {new Intl.NumberFormat('us-US').format(sTokens.reduce((a,v) => a = a + v.rentedUnits, 0))}</p>}
      {<p>Total Vacant Units RealTokens-S: {new Intl.NumberFormat('us-US').format((sTokens.reduce((a,v) => a = a + v.totalUnits, 0))-(sTokens.reduce((a,v) => a = a + v.rentedUnits, 0)))}</p>}
     
      {/*sTokens.map((token) => (
        <ol key={token.uuid}>token: {token.fullName}</ol>
      ))*/}

    </div>
  );
};

export default AsyncAwait;
