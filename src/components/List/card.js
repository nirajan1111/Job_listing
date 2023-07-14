import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import en from "dayjs/locale/en";

const Card = (props) => {
    dayjs.extend(relativeTime);
    dayjs.locale(en);
    const date = dayjs(props.job.posted_on).fromNow();

    return (
        <div className="cardcontainer">
            <div className="company_logo">
                <img src={props.job.company_logo} alt="" width={80} />
            </div>
            <div className="innercardcontainer">
                <div className="firstcontent">
                    <div className="company_name">{props.job.company}</div>
                    <div className="new">NEW</div>
                    <div className="featured">FEATURED</div>
                </div>
                <div className="second_content">
                    <div className="post">{props.job.position}</div>
                    <div className="techstack">
                        {props.job.keywords?.map((keyword, index) => (
                            <button className="keyword">
                                <div key={index} onClick={props.addKeyword}>
                                    {keyword}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="thirdcontent">
                    <ul>
                        &emsp;•&emsp;  {date}
                        &emsp;•&emsp;  {props.job.location}
                        &emsp;•&emsp; {props.job.timing}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
