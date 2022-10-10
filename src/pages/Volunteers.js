import React from "react";
import './Volunteers.css';
import Table from 'react-bootstrap/Table'
import { Candidates } from "./VolunteersList";
export const Volunteers = () => {
    return(
        <>
            <h1 className="head-vol">VOLUNTEERS</h1>
             <div className="Teams"> 
                <p>Volunteers here at ACM are friendly and ready to help any of the member at any instant. Volunteers literally 
                shoulder all the events conducted by ACM and that too with a lot of determination.</p>
                <p className="Team-desc"><b>Technical Team: </b>Tech team deals with all the technical functionalities of ACM. Be it creating barcodes for the id cards and
                 an app for its scanning, which is first ever in VNRVJIET, creating this website or creating simple excel sheets, 
                 it's all taken care by the tech team.
                </p>
                <p className="Team-desc"><b>Events & PR Team: </b>Events and PR team deals with all the events ACM conducts. They plan various events which would 
                be helpful to all the students out there and also might enhance in boosting their confidence in technologies. They even 
                handle PR for all the events making sure that the word reaches out to everyone.
                </p>
                <p className="Team-desc"><b>Design Team: </b>Design Team adds color to ACM. They deal with designing things for ACM and how to make them 
                look beautiful. They design all the posters, our templates and even our id cards. They fill everyone with their creative 
                and colorful ideas.
                </p>
                <p className="Team-desc"><b>Social Media Team: </b>Social Media Team handles all the ACM accounts in various social media platforms. They conduct interesting 
                and simple week contests to magnify the interest in technologies for all the followers. They even give many latest technical 
                developments info. They combine fun and knowledge together to give the best.
                </p>
                <p className="Team-desc"><b>Coding Team: </b>Coding Team imparts knowledge into the coding enthusiasts out there. Its motive is to spread the knowledge
                 about the role of coding in one's life. It conducts upto 4 sessions in a month and coding contests will be held to better 
                 understand the willigness and interest of students and how far they are able to implement their logical thinking into the tests.
                </p>
                <p className="">Whichever team the volunteers are in at the end of the day they help each other support each other and share their workload. 
                Volunteers of ACM are versatile, whatever is the work they do it with utmost dedication. They always look out to each other 
                and are there for each other.
                </p>
            </div>
            <div className="cand-table">
                <Table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Domain</th>
                            <th>Batch</th>
                            <th>Email ID</th>
                        </tr>
                    </thead>
                    <tbody>{
                        Candidates.map((Candidates,index)=>{
                            return(
                                <>
                                <tr className="table-data">
                                        <td>{index+1}</td>
                                        <td>{Candidates.Name}</td>
                                        <td>{Candidates.domain}</td>
                                        <td>{Candidates.batch}</td>
                                        <td>{Candidates.emailid}</td>
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
