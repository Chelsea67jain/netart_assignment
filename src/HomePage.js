import { Grid, Divider } from "@mui/material";
import logoImage from "./assets/logo.png";
import trophyImage from "./assets/1.png";
import awardImage from "./assets/2.png";
import instrumentImage from "./assets/3.png";
import Footer from "./Components/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div style={{height:'100vh'}}>
      {matches ? (
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={`${logoImage}`} width="400" height="200" />
          </Grid>

          <Grid item xs={5} style={{ display: "flex" }}>
            <img src={`${trophyImage}`} width="80%" />
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                width: "100%",
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 14,
                marginRight: 400,
              }}
            >
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  width: 780,
                  fontFamily: "Open sans",
                }}
              >
                <ul>
                  <li>
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </li>
                  <li>
                    {" "}
                    C.R.I. is the highest contributor in the country for the
                    projects of EESL (Energy Efficiency Services Limited) to
                    replace the old inefficient pumps with 5 Star rated energy
                    efficient smart pumps with IoT enabled control panel.
                  </li>
                </ul>
              </div>
              <img src={`${awardImage}`} width="780" />
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  width: 780,
                  fontFamily: "Open sans",
                  marginTop: 10,
                }}
              >
                Government of India has awarded the "National Energy
                Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                Director of C.R.I. Group received the award from Smt. Sumitra
                Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
              </div>
            </div>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 40, textAlign: "center" }}>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={`${instrumentImage}`} width="90%" />
            <div style={{ textAlign: "center", marginTop: 20 }}>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ textAlign: "center", marginTop: 20, fontWeight: "bold" }}
          >
            <Divider sx={{ background: "red" }} />
            <div style={{ marginTop: 20 }}>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </div>
            <p style={{ fontWeight: 500, fontSize: 13 }}>
              CHEMICALS & PROCESS | POWER WATER | WASTE WATER OILS | GAS PHARMA
              | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL
              & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR |
              BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
            </p>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img src={`${logoImage}`} width="400" height="200" />
            </Grid>

            <Grid item xs={12}>
              <div
                style={{
                  marginTop: 10,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginLeft:10
                }}
              >
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: 14,
                    width: 300,
                    fontFamily: "Open sans",
                  }}
                >
                  <ul>
                    <li>
                      C.R.I.'s energy efficient products are well recognized by
                      various Government Institutions, as trustworthy products
                      for various projects across the globe to save energy.
                    </li>
                    <li>
                      {" "}
                      C.R.I. is the highest contributor in the country for the
                      projects of EESL (Energy Efficiency Services Limited) to
                      replace the old inefficient pumps with 5 Star rated energy
                      efficient smart pumps with IoT enabled control panel.
                    </li>
                  </ul>
                </div>
                <img src={`${awardImage}`} width="300" />
                <div
                  style={{
                    fontWeight: 400,
                    fontSize: 14,
                    width: 300,
                    fontFamily: "Open sans",
                    marginTop: 10,
                  }}
                >
                  Government of India has awarded the "National Energy
                  Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                  Director of C.R.I. Group received the award from Smt. Sumitra
                  Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
                  Honorable Minister of State.
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginTop: 40, textAlign: "left" }}
            >
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={`${instrumentImage}`} width="90%" />
              <div style={{ textAlign: "left", marginTop: 20 }}>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires &
                Cables - Solar Systems - Motors
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                textAlign: "center",
                marginTop: 20,
                fontWeight: "bold",
                width: 500,
              }}
            >
              <Divider variant="middle" sx={{ background: "red" }} />
              <div style={{ marginTop: 20 }}>
                C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
              </div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 13,
                  
                  width: 300,
                  textAlign:'left'
                }}
              >
                CHEMICALS & PROCESS | POWER WATER | WASTE WATER OILS | GAS
                PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE
                | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES
                | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE &
                RESIDENTIAL
              </p>
            </Grid>
          </Grid>
        </>
      )}
      <Footer />
    </div>
  );
}
