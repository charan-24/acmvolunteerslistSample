import React from "react";
import './Volunteers.css';
import Table from 'react-bootstrap/Table'
import { Candidates } from "./VolunteersList";
export const Volunteers = () => {
    return(
        <>
            <h1 className="head-vol">VOLUNTEERS</h1>
            <div className="cand-table">
                <Table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Domain</th>
                            <th>Email ID</th>
                        </tr>
                    </thead>
                    <tbody>{
                        Candidates.map((Candidates,index)=>{
                            return(
                                <>
                                <tr className="table-data" key={index}>
                                        <td>{index+1}</td>
                                        <td>{Candidates.Name}</td>
                                        <td>{Candidates.domain}</td>
                                        <td><a className="text-dark" href={"mailto:" + Candidates.emailid}>{Candidates.emailid}</a></td>
                                </tr>
                                </>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </>
    )
};
