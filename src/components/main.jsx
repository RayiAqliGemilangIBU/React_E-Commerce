import React from "react";
import Typography from '@mui/material/Typography'; // change to material UI

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://m.tabungamal.id/_next/image?url=https%3A%2F%2Ftabungamal.id%2Fassets%2Ffrontend%2Fimg%2Fberita%2FMembantu-Palestina-Solidaritas-dalam-Masa-Penderitaan1698976705.jpg&w=3840&q=75"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">

              <Typography variant="h3"         sx={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
>
                LET'S HELP OUR BROTHERS AND SISTERS IN PALESTINE
              </Typography> 
              
              <Typography variant="h7"         sx={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
>
                30 percent of the profits obtained from every transaction you make at this shop will be donated to the people of Palestine
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
