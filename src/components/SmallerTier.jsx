import React, { Component } from 'react';
import Page from './Page';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './Chart'
import ColumnChart from './GoogleChart'
import Data from './smaller-tier.js'
import logo from '../assets/images/Intersect.png';

const linkEarned = []

const getFormatedDateArray = (date) => {

  const date1 = new Date(date)
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date1)
  return `${day} ${month} ${year}`
}

const getMonthName = (date) => {
  const date1 = new Date(date)
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date1)
  console.log(`${month}`)
  switch (`${month}`) {
    case 'Jan':
      return 'January'
    case 'Feb':
      return 'Febuary'
    case 'Mar':
      return 'March'
    case 'Apr':
      return 'April'
    case 'May':
      return 'May'
    case 'Jun':
      return 'Jun'
    case 'Jul':
      return 'July'
    case 'Aug':
      return 'August'
    case 'Sep':
      return 'September'
    case 'Oct':
      return 'October'
    case 'Nov':
      return 'November'
    case 'Dec':
      return 'December'
  }
}

const MultiPage = ({ id }) => (<Page id={id}>
  <div class="top-border"></div>
  <div className="container">
    <div className="row mt-4">
      <div className=" col-lg-offset-2 col-lg-10">
      </div>
      {/* <div className="row"> */}
      <div className="col-6 text-align">
        <div className='title'>{Data.data.profile.name}</div>
        <div className='number'>{Data.data.profile.oracle_address}</div>
        {/* <div className='mt-5'>Select Data link</div> */}
        <div className='mt-4 font-size-12'>{Data.data.date}</div>
        <div className='font-size-12 mt-2'>Report of fy</div>
        <div className="row mt-4 link-earned-total-title">
          <div className="col-6 ">
            <div className=''>
              Total Revenau
                 </div>
          </div>
          <div className="col-6 ">
            <div>
              {Data.data.currency} {Data.data.summary.link_earned}
            </div>
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Total Cost
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.summary.total_revenue}
          </div>
          <div class="about-border"></div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Net Profit
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.summary.total_cost}
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='row'>
          <img src={logo} />
        </div>
        <div className='row'>
          <span className='before-logo-text'>{Data.data.profile.email}</span>
        </div>
        <div className='row'>
          <span className='before-logo-text'>{Data.data.profile.phone}</span>
        </div>
        <div className='row'>
          <span className='before-logo-text'>{Data.data.profile.website}</span>
        </div>
      </div>
      {/* </div>  */}
    </div>
    {Data.data.monthly_reports.map((value, index) => {
      return <div>
        <div className='row mt-5'>

          <div className="col-6 text-align">
            <div className='title'>{getMonthName(value.month)} Report</div>
            {/* <div className='mt-5'>Select Data link</div> */}
            <div className="row mt-4 link-earned-total-title">
              <div className="col-6 ">
                <div className=''>
                  Net Profit:
                 </div>
              </div>
              <div className="col-6 ">
                <div>
                  {Data.data.currency} {value.net_profit}
                </div>
              </div>
            </div>
            <div className="row mt-1 link-earned-total-title">
              <div className="col-6">
                Growth Rate?
               </div>
              <div className="col-6">

              </div>
            </div>
            <div className="row mt-1 link-earned-total-title">
              <div className="col-6">
                Change Still Last Month?
               </div>
              <div className="col-6">
              </div>
            </div>
          </div>
        </div>
        <div className='row m-0 mt-5'>
          <table>
            <tr>
              <th>Date</th>
              <th>Transcation Details</th>
              <th>Money In</th>
              <th>Money Out</th>
            </tr>
            <tr>
              <td>{getFormatedDateArray(value.month)}</td>
              <td>Trancastion Expense(Gas)</td>
              <td>{Data.data.currency} {value.transactionFees}</td>
              <td>{Data.data.currency} {value.transactionFees}</td>
            </tr>
            <tr>
              <td>{getFormatedDateArray(value.month)}</td>
              <td>Revenue from link earned</td>
              <td>{Data.data.currency} {value.linkEarned}</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    })}
    <div className='row m-0 mt-5'>
      <div className='title'>For Complete Financial View of how your node operates</div>
    </div>
    <div className='row m-0'>
      <div className='title ml-auto mr-auto text-align-center'>Upgrade your subscription
            <div class="subscription-border"></div>
      </div>
    </div>
  </div>
</Page>);

export default MultiPage;