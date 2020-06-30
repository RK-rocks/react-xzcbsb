import React, { Component } from 'react';
import Page from './Page';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './Chart'
import ColumnChart from './GoogleChart'
import Data from './higher-tier.js'
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
  console.warn('warn');
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
        <div className='title'>
          b{Data.data.profile.name}</div>
        <div className='number'>{Data.data.profile.oracle_address}</div>
        {/* <div className='mt-5'>Select Data link</div> */}
        <div className='mt-4 font-size-12'>{Data.data.date}</div>
        <div className='font-size-12 mt-2'>Report of fy</div>
        <div className="row mt-4 link-earned-total-title">
          <div className="col-6 ">
            <div className=''>
              Link earned
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
            Total revenue
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.summary.total_revenue}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Gas expense
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.summary.gas_expenses}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title position-relative">
          <div className="col-6">
            Total cost
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.summary.total_cost}
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
    <div className='row mt-5'>

      <div className="col-6 text-align">
        <div className='title'>Link Earned</div>
        {/* <div className='mt-5'>Select Data link</div> */}
        <div className="row mt-4 link-earned-total-title">
          <div className="col-6 ">
            <div className=''>
              Total link earned
                 </div>
          </div>
          <div className="col-6 ">
            <div>
              {Data.data.currency} {Data.data.link_earned.total}
            </div>
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Average Revenua Earned:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.link_earned.average}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Maximum Revenua Earned:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.link_earned.max}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title position-relative">
          <div className="col-6">
            Minimum Revenua Earned:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.link_earned.min}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Revenua Variance:
               </div>
          <div className="col-6">
            {Data.data.link_earned.variance}%
               </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Average Monthly Growth Rate:
               </div>
          <div className="col-6">
            {Data.data.link_earned.variance}%
               </div>
        </div>
      </div>
    </div>
    <div className='row mt-5  m-0 chartbox-background'>
      <ColumnChart data={Data.data.link_earned}></ColumnChart>
    </div>
    <div className='row m-0 mt-5'>
      <table>
        <tr>
          <th>Date</th>
          <th className='text-align-center'>Link Earned</th>
          <th className='text-align-center'>Percentage Change (%)</th>
        </tr>
        {Data.data.link_earned.monthly_reports.map((value, index) => {
          return <tr>
            <td>{getFormatedDateArray(value.date)}</td>
            <td className='text-align-center'>{value.link_earned}</td>
            <td className='text-align-center'>{value.percentage_change}</td>
          </tr>
        })}
      </table>
    </div>
    <div className='row mt-5'>

      <div className="col-6 text-align">
        <div className='title'>Gas Expense</div>
        {/* <div className='mt-5'>Select Data link</div> */}
        <div className="row mt-4 link-earned-total-title">
          <div className="col-6 ">
            <div className=''>
              Total Gas Expense
                 </div>
          </div>
          <div className="col-6 ">
            <div>
              {Data.data.currency} {Data.data.gas_expenses.total}
            </div>
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Average Gas Earned:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.gas_expenses.average}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Maximum Gas Earned:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.gas_expenses.max}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title position-relative">
          <div className="col-6">
            Minimum Gas Earned:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.gas_expenses.min}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Variance:
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.gas_expenses.variance}
          </div>
        </div>
        <div className="row mt-1 link-earned-total-title">
          <div className="col-6">
            Average Monthly Growth Rate
               </div>
          <div className="col-6">
            {Data.data.currency} {Data.data.gas_expenses.avg_growth_rate}
          </div>
        </div>
      </div>
    </div>
    <div className='row mt-5  m-0 chartbox-background'>
      <ColumnChart data={Data.data.link_earned}></ColumnChart>
    </div>
    <div className='row m-0 mt-5'>
      <table>
        <tr>
          <th>Date</th>
          <th className='text-align-center'>Transaction Fee($)</th>
          <th className='text-align-center'>Percentage Change (%)</th>
        </tr>
        {Data.data.gas_expenses.monthly_reports.map((value, index) => {
          return <tr>
            <td>{getFormatedDateArray(value.date)}</td>
            <td className='text-align-center'>{value.gas_expenses}</td>
            <td className='text-align-center'>{value.percentage_change}</td>
          </tr>
        })}
      </table>
    </div>
    <div className='row m-0 mt-5'>
      <div className="title text-align">
        Net Profit
              {/* <div className='mt-5'>Select Data link</div> */}
      </div>
    </div>
    <div className='row mt-5  m-0   chartbox-background'>
      <ColumnChart data={Data.data.link_earned}></ColumnChart>
    </div>
    <div className='row m-0 mt-5'>
      <table>
        <tr>
          <th>Date</th>
          <th className='text-align-center'>Net Profit($)</th>
          <th className='text-align-center'>Profit Margin(%)</th>
          <th className='text-align-center'>Monthly Growth Rate(%)</th>
        </tr>
        {Data.data.net_profit.monthly_reports.map((value, index) => {
          return <tr>
            <td>{getFormatedDateArray(value.date)}</td>
            <td className='text-align-center'>{value.net_profit}</td>
            <td className='text-align-center'>{value.profit_margin}</td>
            <td className='text-align-center'>{value.percentage_change}</td>
          </tr>
        })}
      </table>
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
  </div>
</Page>);

export default MultiPage;