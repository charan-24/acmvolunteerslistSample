import React from "react";
import './Volunteers.css';
import Table from 'react-bootstrap/Table'
import { Candidates } from "./VolunteersList";
export const Volunteers = () => {
    function getCandidates(Candidate,index){
        return(
            <tr className="table-data" key={Candidate.id}>
                    <td>{index+1}</td>
                    <td>{Candidate.Name}</td>
                    <td>{Candidate.domain}</td>
                    <td><a className="text-dark" href={"mailto:" + Candidate.emailid}>{Candidate.emailid}</a></td>
            </tr>
        )
    }
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
                    <tbody>
                        {Candidates.map(getCandidates)}  
                    </tbody>
                </Table>
            </div>
        </>
    )
};
