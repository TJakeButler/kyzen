import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import {UpperAndLowerLimits} from './UpperAndLowerLimits/UpperAndLowerLimits.js'
import {DataTable} from './dataTables/dataTables.js'
import { LineChart } from "react-chartkick"
import 'chart.js'



export const Kyzen = () => (
    <>
        <NavBar></NavBar>
        <UpperAndLowerLimits></UpperAndLowerLimits>
        <DataTable></DataTable>
        <LineChart data={{"2017-05-13": 2, "2017-05-14": 5,"2017-05-15": 3,"2017-05-16": 5,"2017-05-17": 7,"2017-05-18": 4,"2017-05-19": 9,"2017-05-20": 4,"2017-05-21": 3, }} />

        
        
        
        
    </>
)