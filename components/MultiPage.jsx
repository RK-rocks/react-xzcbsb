import React,{Component} from 'react';
import Page from './Page';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './Chart'
import ColumnChart from './GoogleChart'
import Data from './higher-tier.js'

const linkEarned = []

const getFormatedDateArray = (date) => {
  
    const date = new Date(date)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 
    return `${day} ${month} ${year }`
}

const MultiPage = ({id}) => (<Page id={id}>
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
              <img src='https://agora-file-storage-prod.s3.us-west-1.amazonaws.com/workplace/attachment/5872246629113134721?response-content-disposition=inline%3B%20filename%3D%22Intersect.png%22%3B%20filename%2A%3Dutf-8%27%27Intersect.png&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQDD1yMG5SJlrd%2Bs%2FZlx7%2Bi1phLb57%2FjyolSwmUFQZIswgIgdF46KiLLP4S7MBjaIyP2UfsmFuPXviBzSgI7ndsHiZoqkAQILxAAGgw3Mzk5MzkxNzM4MTkiDNrxR1qmx3XrBYDndCrtAy9vEhZiB0q32Q64zcQhpTiq4h0SzvmkRFANGK2Odv%2BQOvxMC%2FZnhmYAXLBkDjwm4hAswBiW%2BjW0Knzg7TGRyoWe5oEPuBfBWO6Jwfm%2FFU2vEBT8TIkpfWZqNhwmRhJTTlKsYu9zepd8qtFMtUBPDgKFkKNUhYWfqERgMbEg6I%2BT1iY6SZR1oIL63dWkiZZaDl0sRqW2ErdsywhQ9wI7MzfjKLIXCjCz%2Bx%2Fw3O23mc4OB4QDS4Q6dOPDq2LuUKG6qsr1XGBPQvSUYG3NgTQYn5IAA%2F4%2FPxfpX73I4%2BszPYwXnhv2mgW0xVK9iGf0hdyP4ir1dOLMnZCHvrq1XzhCNV6f%2FEdSWbl%2B9X5RcqFDYp8sXEq1e4ROH%2FQhmRPHuQmP%2B0mYAfo8IAE4b1%2Bi9ldl1Xbjt40n%2FlTBjaDU2uk%2F7XXpWcxs9jMegiZhcRvjMGc8QLnbbiszc64q6fLq4ORxGlYVwq74S%2F9FnrjckU6Fv1Z2P43KAor0QNiv%2FvIL%2FL8C7OGdyNs0nF1k2svUIaAskv2Lx0x56rlbdu2A13hPSVFomHs8nlXtDUpHvrPuJAt35BGNtdGZ5UThMkUsFM%2BzCuRVqX%2BdNnflsJhoKWZ00NwGo3as9BDTO1Fksdpf%2FnPl9GzR28%2B5dJOuQog7b8Iwrra49wU67wHNKJ6tyQRtxGMym8WGHNYKzLkfzMe%2BxOQEcNLk6EpSpmGb%2B5FbJyGh97tV%2BIHO%2Ffqzf%2B0APl0XgRNCtW0yRxzfkgFvLLeWOso5bwsXXQx9rwZ2iGRAGBxxhoeuH3tTrVWnc1RKfl8r8z4RblIUjVVtHQxJA1nhBHXVOC2qBlxPnzIjEErF92FlHTMcR8iPC%2Fi8oD90CAB5EPkRQutNkAzI2A9PpTuVpLIgQKreDLgZctSFE1i0QvlJy3fvX28bDKxFMA5QU%2BAz0dD6lvxAEySeqXr2ZMqaUDJP8IJubXxuxBoOLWECe8N8fwLCZBuBRg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200620T163906Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW5T57JMJQ5%2F20200620%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=44312029ffb5767a99d05a39ec78396cfaae799e61843e5a88f2439cad4b27d4' />
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
                <th>Link Earned</th>
                <th>Percentage Change (%)</th>
              </tr>
              {Data.data.link_earned.monthly_reports.map((value,index)=>{
                return <tr>
                  <td>{getFormatedDateArray(value.date)}</td>
                  <td>{value.link_earned}</td>
                  <td>{value.percentage_change}</td>
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
            <ColumnChart  data={Data.data.link_earned}></ColumnChart>
          </div>
          <div className='row m-0 mt-5'>
            <table>
              <tr>
                <th>Date</th>
                <th>Transaction Fee($)</th>
                <th>Percentage Change (%)</th>
              </tr>
              {Data.data.gas_expenses.monthly_reports.map((value,index)=>{
                return <tr>
                  <td>{getFormatedDateArray(value.date)}</td>
                  <td>{value.gas_expenses}</td>
                  <td>{value.percentage_change}</td>
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
            <ColumnChart  data={Data.data.link_earned}></ColumnChart>
          </div>
          <div className='row m-0 mt-5'>
            <table>
              <tr>
                <th>Date</th>
                <th>Net Profit($)</th>
                <th>Profit Margin(%)</th>
                <th>Monthly Growth Rate(%)</th>
              </tr>
              {Data.data.net_profit.monthly_reports.map((value,index)=>{
                return <tr>
                  <td>{getFormatedDateArray(value.date)}</td>
                  <td>{value.net_profit}</td>
                  <td>{value.profit_margin}</td>
                  <td>{value.percentage_change}</td>
                </tr>
              })}
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>August Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>August Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>Suptember Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>October Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>November Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>December Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>January Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>Febuary Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>March Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>April Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>May Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <div className='row mt-5'>

            <div className="col-6 text-align">
              <div className='title'>Jun Report</div>
              {/* <div className='mt-5'>Select Data link</div> */}
              <div className="row mt-4 link-earned-total-title">
                <div className="col-6 ">
                  <div className=''>
                    Net Profit:
                 </div>
                </div>
                <div className="col-6 ">
                  <div>
                    $ 3333
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
                <td>31 july 2019</td>
                <td>Trancastion Expense(Gas)</td>
                <td></td>
                <td>$400</td>
              </tr>
              <tr>
                <td>31 Aug 2019</td>
                <td>Cloud Expense</td>
                <td>3.11</td>
                <td>$6000</td>
              </tr>
              <tr>
                <td>31 Sept 2019</td>
                <td>Revenue from link earned</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
</Page>);

export default MultiPage;