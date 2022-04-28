import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillBrightnessAltLowFill, BsFillBrightnessAltHighFill, BsFillBrightnessLowFill, BsFillBrightnessHighFill, BsBrightnessHigh, BsCheckLg, BsFillAlarmFill, BsReception4 } from "react-icons/bs";

function Part4() {
    const colorBorder="#abc2ed";
    const color1="black";
    const color2="#0B6E4F";
    const color3="#721817";
    const color4="#FA9F42";
    const color5="#275DAD"
    const bgcolor1="linear-gradient(to right, #144257, #275DAD)";
    const bgcolor2="linear-gradient(to right, #164b63, #275DAD)";
    const bgcolor3="linear-gradient(to left, #06dfc2, #0575e6)";
    const bgcolor4="linear-gradient(to right, #06dfc2, #0575e6)";
    
  return (
    <>
        <div className="p-md-5 p-2 mt-5" >
            <div className='text-center p-5'>
                <p className='display-1 fw-bold border-top border-bottom'>ROADMAP</p>
            </div>
            
        
            <VerticalTimeline
            lineColor={colorBorder}
            className="my-5"
            >

                <VerticalTimelineElement
                    
                    date="Private sale"
                    iconStyle={{ background: color1}}
                    contentStyle={{ background: bgcolor1, borderRadius:"20px", boxShadow:"none", opacity:"90%"}}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    icon={<BsFillAlarmFill />}
                    
                >
                    <h3>Creative Director</h3>
                    <h4>Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="Presale"
                    iconStyle={{ background: color1, color: '#fff' }}
                    contentStyle={{ background: bgcolor2, borderRadius:"20px", boxShadow:"none", opacity:"90%"}}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    icon={<BsFillBrightnessAltLowFill />}
                >
                    <h3>Art Director</h3>
                    <h4>San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="Post sale"
                    iconStyle={{ background: color1, color: '#fff' }}
                    contentStyle={{ background: bgcolor1, borderRadius:"20px", boxShadow:"none", opacity:"90%" }}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    icon={<BsFillBrightnessAltHighFill />}
                >
                    <h3>Web Designer</h3>
                    <h4>Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="yo mama sale"
                    iconStyle={{ background: color1, color: '#fff' }}
                    contentStyle={{ background: bgcolor2, borderRadius:"20px", boxShadow:"none", opacity:"90%" }}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    icon={<BsFillBrightnessLowFill />}
                >
                    <h3>Web Designer</h3>
                    <h4>San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="dez"
                    iconStyle={{ background: color1, color: '#fff' }}
                    contentStyle={{ background: bgcolor1, borderRadius:"20px", boxShadow:"none", opacity:"90%" }}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    icon={<BsFillBrightnessHighFill />}
                >
                    <h3>Content Marketing for Web, Mobile and Social Media</h3>
                    <h4>Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="nuts"
                    iconStyle={{ background:  color1, color: '#fff' }}
                    contentStyle={{ background:  bgcolor2, borderRadius:"20px", boxShadow:"none", opacity:"90%" }}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    icon={<BsBrightnessHigh />}
                >
                    <h3>Agile Development Scrum Master</h3>
                    <h4>Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: color1, color: '#fff' }}
                    contentStyle={{ background:  bgcolor1, borderRadius:"20px", boxShadow:"none", opacity:"90%" }}
                    contentArrowStyle={{ borderRight: `none`, margin:"-1px"}}
                    date="gottem"
                    icon={<BsCheckLg />}
                >

                    <h3>Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4>Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>

                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    iconStyle={{ background: color1, color: "white" }}
                    
                    date="And more to come..."
                    icon={<BsReception4 />}
                    
                />
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Part4