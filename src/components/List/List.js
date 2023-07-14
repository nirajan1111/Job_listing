import React, { useState, useEffect } from "react";
import Card from "./card";
import "./style.css";

const List = () => {
    const [jobs, setJobs] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchBarStatus, setSearchBarStatus] = useState(false);

    const addKeyword = (e) => {
        const keyword = e.target.textContent;
        if (!keywords.includes(keyword)) {
            setKeywords((prevKeywords) => [...prevKeywords, keyword]);
        }
    };

    const removeKeyword = (keyword) => {
        setKeywords((prevKeywords) =>
            prevKeywords.filter((kw) => kw !== keyword)
        );
    };

    const filteringjobs = (keyword_of_job) => {
        return (keywords.every((element) => keyword_of_job.includes(element)))

    }
    const clearallkeywords = () => {
        setKeywords([]);
    }
    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json`
                );
                const data = await res.json();
                setJobs(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="container">
                    {!(keywords.length === 0) && (
                        <div className="searchbar">

                            {keywords.map((keyword, index) => (
                                <div key={index} className="keyword">
                                    {keyword}

                                    <button id="Xbutton" onClick={() => removeKeyword(keyword)}>x</button>
                                </div>
                            ))}
                            {!(keywords.length === 0) &&
                                <div onClick={clearallkeywords} className="clear">clear</div>}
                        </div>
                    )}

                    {jobs.map((job) =>
                        (filteringjobs(job.keywords) || keywords.length === 0) ? (
                            <Card
                                key={job.posted_on} // Using  job.posted_on as the unique key
                                job={job}
                                keywords={keywords}
                                addKeyword={addKeyword}
                                removeKeyword={removeKeyword}
                            />
                        ) :
                            <div></div>
                    )}
                </div>
            )}
        </div>
    );
};

export default List;
