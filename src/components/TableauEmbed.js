import React, { useRef, useEffect } from 'react'
import './tableauEmbed.scss'
import LossImg from './../assets/loss.png'
import Loss1Img from './../assets/loss1.png'
import Loss1FirstImg from './../assets/loss1first.png'

import ModelImg from './../assets/model.png'
const { tableau } = window

const TableauEmbed = () => {
  const options = {
    device: 'desktop',
  }
  const ref = useRef(null)
  const url =
    'https://public.tableau.com/views/promovsnopromoitems/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link'

  const initViz = () => {
    new tableau.Viz(ref.current, url, options)
  }

  const refTimeSeries = useRef(null)

  const urlTimeSeries =
    'https://public.tableau.com/views/promo-timeseries/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link'
  const initVizTimeSeries = () => {
    new tableau.Viz(refTimeSeries.current, urlTimeSeries, options)
  }

  const refClass = useRef(null)

  const urlClass =
    'https://public.tableau.com/views/classvspromo/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link'
  const initVizClass = () => {
    new tableau.Viz(refClass.current, urlClass, options)
  }
  const refGeo = useRef(null)

  const urlGeo =
    'https://public.tableau.com/views/geo_coded/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link'
  const initVizGeo = () => {
    new tableau.Viz(refGeo.current, urlGeo, options)
  }

  useEffect(() => {
    initViz()
    initVizTimeSeries()
    initVizClass()
    initVizGeo()
  }, [])
  return (
    <div className="insightsContainer">
      <h1>Problem Statement</h1>
      <div className="sectionContainer">
        <p>
          Forecast product sales as accurately as possible between 2017-08-16 &
          2017-08-31 given product ID and Store ID. We are looking to leverage
          datasets from previous sales given product ID and Store ID and some
          supplementary datasets
        </p>
      </div>
      <h1>Discussion on NWRMSLE</h1>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div>
            <img src={LossImg} alt="Loss" />
          </div>
        </div>
        <div className="descContainer">
          {/* <h3>Overall</h3> */}
          <ul>
            <li>Suitable when predicting values across a large range</li>
            <li>Avoids penalizing large differences</li>
            <li>
              Without the weights!
              <p>{'Ypred = 500 / Ytrue = 550 -> 0.095'}</p>
              <p>{'Ypred = 100 / Ytrue = 150 -> 0.402'}</p>
            </li>
            <li>Penalize more for underestimation</li>
          </ul>
        </div>
      </div>
      <h1>The Data</h1>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refTimeSeries}></div>
          <div>
            <ul>
              <li>
                Sales data schema
                <p>
                  <table className="greyGridTable">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>date</th>
                        <th>store_number</th>
                        <th>item_nbr</th>
                        <th>unit_sales</th>
                        <th>onpromotion</th>
                      </tr>
                    </thead>
                  </table>
                </p>
              </li>
              <li>
                Supplementary datasets
                <p>- stores</p> <p>- items</p> <p>- transactions</p>
                <p>- oil</p> <p>- holidays_events</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="descContainer">
          <ul>
            <li>125M training / 33M testing points</li>
            <li>
              {
                'item_nbr & store_nbr are categorical -> useful to embed these values'
              }
            </li>
            <li>
              {
                'onpromotion -> 17% missing in training 0% missing in testing -> starts recording from April 2014'
              }
            </li>
            <li>There are items that are not in training and are in testing</li>
          </ul>
        </div>
      </div>
      <h1>On/Off Promotion</h1>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={ref}></div>
        </div>
        <div className="descContainer">
          <h3>Promotion effect on each item sales</h3>
          <ul>
            <li>Log transform median sales</li>
            <li>Promotion sales tend to be above the reference line</li>
          </ul>
        </div>
      </div>
      <h1>Promotion Effect on Class</h1>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refClass}></div>
        </div>
        <div className="descContainer">
          <ul>
            <li>Slope of lines represent class promo relationship</li>
          </ul>
        </div>
      </div>
      <h1>Store location and sales volume per family and product</h1>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refGeo}></div>
        </div>
      </div>
      <h1>Features</h1>
      <div className="sectionContainer">
        <table className="greyGridTable">
          <thead>
            <tr>
              <th>Features</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>last</td>
              <td>sales value of day prior given store_nbr & item_nbr pair</td>
            </tr>
            <tr>
              <td>mean_3</td>
              <td>
                mean sales value of the last 3 days given store_nbr & item_nbr
                pair
              </td>
            </tr>
            <tr>
              <td>mean_7</td>
              <td>
                mean sales value of the last 7 days given store_nbr & item_nbr
                pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_14</td>
              <td>
                mean sales value of the last 14 days given store_nbr & item_nbr
                pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_28</td>
              <td>
                mean sales value of the last 28 days given store_nbr & item_nbr
                pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_60</td>
              <td>
                mean sales value of the last 60 days given store_nbr & item_nbr
                pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_90</td>
              <td>
                mean sales value of the last 90 days given store_nbr & item_nbr
                pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_365</td>
              <td>
                mean sales value of the last 365 days given store_nbr & item_nbr
                pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_diff_7_28</td>
              <td>variance of mean 7 - 28 given store_nbr & item_nbr pair</td>
            </tr>{' '}
            <tr>
              <td>mean_diff_14_60</td>
              <td>variance of mean 14 - 60 given store_nbr & item_nbr pair</td>
            </tr>{' '}
            <tr>
              <td>mean_diff_28_90</td>
              <td>variance of mean 28 - 90 given store_nbr & item_nbr pair</td>
            </tr>{' '}
            <tr>
              <td>mean_no_sale_in_7</td>
              <td>
                no sale mean count - 7 days given store_nbr & item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_no_sale_in_28</td>
              <td>
                no sale mean count - 28 days given store_nbr & item_nbr pair
              </td>
            </tr>
            <tr>
              <td>mean_no_sale_in_90</td>
              <td>
                no sale mean count - 90 days given store_nbr & item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_no_sale_diff_7_28</td>
              <td>
                variance of no sale mean count - 7 - 28 days given store_nbr &
                item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>mean_no_sale_diff_28_90</td>
              <td>
                variance of no sale mean count - 28 - 90 days given store_nbr &
                item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>avg_promo_7</td>
              <td>
                avg number of days an item was on promo in the last 7 days given
                store_nbr & item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>avg_promo_14</td>
              <td>
                avg number of days an item was on promo in the last 14 days
                given store_nbr & item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>avg_promo_28</td>
              <td>
                avg number of days an item was on promo in the last 28 days
                given store_nbr & item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>avg_promo_90</td>
              <td>
                avg number of days an item was on promo in the last 90 days
                given store_nbr & item_nbr pair
              </td>
            </tr>{' '}
            <tr>
              <td>avg_promo_365</td>
              <td>
                avg number of days an item was on promo in the last 365 days
                given store_nbr & item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>mean_day_of_week_7</td>
              <td>
                mean sales for day of the wk in last 7 days given store_nbr &
                item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>mean_day_of_week_14</td>
              <td>
                mean sales for day of the wk in last 14 days given store_nbr &
                item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>mean_day_of_week_21</td>
              <td>
                mean sales for day of the wk in last 21 days given store_nbr &
                item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>mean_day_of_week_28</td>
              <td>
                mean sales for day of the wk in last 28 days given store_nbr &
                item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>mean_day_in_90</td>
              <td>
                mean sales for day of the month in last 90 days given store_nbr
                & item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>mean_day_in_365</td>
              <td>
                mean sales for day of the month in last 365 days given store_nbr
                & item_nbr pair{' '}
              </td>
            </tr>{' '}
            <tr>
              <td>promo</td>
              <td>
                {
                  'looking forward -> promo states of next 16 given store_nbr & item_nbr pair '
                }
              </td>
            </tr>{' '}
            <tr>
              <td>promo_mean</td>
              <td>avg of forward 16days promo figures </td>
            </tr>
            <tr>
              <td>family</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>
            <tr>
              <td>class</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>{' '}
            <tr>
              <td>perishable</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>{' '}
            <tr>
              <td>city</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>{' '}
            <tr>
              <td>state</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>{' '}
            <tr>
              <td>type</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>{' '}
            <tr>
              <td>cluster</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>
            <tr>
              <td>day_of_week</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>
            <tr>
              <td>day</td>
              <td>categorical metadata that is to be embedded</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>Model</h1>
      <div className="sectionContainer">
        <div>
          <img src={ModelImg} alt="Model" />
        </div>
      </div>
      <h1>Evaluations - Training</h1>
      <div className="sectionContainer imageandpots">
        <div>
          <div className="images">
            <div>
              <h3>Training with 16 different datasets</h3>
              <img src={Loss1Img} alt="Loss1" />
            </div>
            <div>
              <h3>Training with single dataset(first day)</h3>
              <img src={Loss1FirstImg} alt="Loss1first" />
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>Training in 16 rounds for 16 targets.</li>
            <li>Extracting feature specific for the target label </li>
            <li>16 epochs for large batches of 512 w/ mse minimum</li>
            <li>Input Array (X) of 30 & 10 Embedding Layers</li>
            <li>notebook runtime 10:30 AM - 1:20 PM</li>
            <li> {'Validation NWRMSLE -> 0.59'}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TableauEmbed
