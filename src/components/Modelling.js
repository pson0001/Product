import React from 'react'
import './tableauEmbed.scss'
import Img1 from './../assets/image 1.png'
import Img2 from './../assets/image 2.png'
import Img3 from './../assets/image 3.png'
import Img4 from './../assets/image 4.png'
import Graph1 from './../assets/graph1.png'

import Img5 from './../assets/image 5.png'
import Img6 from './../assets/image 6.png'
import Graph2 from './../assets/graph2.png'

import Img7 from './../assets/image 7.png'
import Graph3 from './../assets/graph3.png'

import Img8 from './../assets/image 8.png'

import JupViewer from './jupView/JupView'

const Modelling = () => {
  return (
    <div>
      {/* <JupViewer file="https://raw.githubusercontent.com/pson0001/CaseStudy/main/src/assets/anz.ipynb" /> */}
      <div className="insightsContainer">
        <h1>Influenza Modeling</h1>
        <p style={{ marginBottom: '60px' }}>View code at</p>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img1} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Curation</h3>
            <ul>
              <li>Modeling data starting from 2010 - 2017 (2009 anomaly)</li>
              <li>
                Each state has a different number of entries between 2010 - 2017
              </li>
              <li>
                Getting a baseline for the series (52 x 8 ~ 416-week slots).
              </li>
              <li>Replacing dates with sequence order</li>
            </ul>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img2} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Curation</h3>
            <ul>
              <li>Interpolate missing slots for each state</li>
              <li>
                Aggregate signals and re-apply dates (timestamps for each month)
              </li>
              <li>Result in an 8 year National Influenza signal</li>
            </ul>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img3} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Decomposition of signal</h3>
            <ul>
              <li>Clear seasonality </li>
              <li>Trending after 2014 ~ Could be a spike like 2009</li>
              <li>Residuals suggest problems for short-term models</li>
            </ul>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img4} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Stationary signal</h3>
            <img src={Graph1} alt="Image" width="400px" />
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img5} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Autocorrelations</h3>
            <ul>
              <li>ACF with ~sine wave diminishing</li>
              <li>Strong cut off after lag one</li>
            </ul>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="descContainer">
            <h3>SARIMA</h3>
            <p>Short Term</p>
            <ul>
              <li>
                Seasonal ARIMA is a good fit for short term modeling this data
              </li>
              <li>
                Benchmark SARIMA with original signal and SARIMA with stationary
                signal
              </li>
              <li>
                Residuals suggest that AR MA models might have difficulty
                forecasting long term data points
              </li>
              <li>Benchmark with a Seasonal Random Walk</li>
            </ul>
          </div>
          <div className="descContainer">
            <h3>RNN</h3>
            <p>Long Term</p>
            <ul>
              <li>
                LSTM cells will be a good fit for being aware of past signals{' '}
              </li>
              <li>Benchmark against short term models with rsme</li>
              <li>Low number of parameters are ideal</li>
              <li>
                Step by step validation + stationary signals (will need to
                revert back)
              </li>
            </ul>
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img6} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Short Term Models</h3>
            <p>Validation set</p>
            <img src={Graph2} alt="Image" width="500px" />
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img7} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Long Term Model</h3>
            <p>Validation set</p>
            <img src={Graph3} alt="Image" width="250px" />
          </div>
        </div>
        <div className="sectionContainer">
          <div className="vizContainer">
            <img src={Img8} alt="Image" width="100%" />
          </div>
          <div className="descContainer">
            <h3>Predictions for 6 months</h3>
            <p>Long term models are 5x better in RSME then the best SARIMA</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modelling
