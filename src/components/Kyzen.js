import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import {UpperAndLowerLimits} from './UpperAndLowerLimits/UpperAndLowerLimits.js'
import {DataTable} from './dataTables/dataTables.js'



export const Kyzen = () => (
    <>
        <NavBar></NavBar>
        <UpperAndLowerLimits></UpperAndLowerLimits>
        <DataTable></DataTable>
        
        
    </>
)