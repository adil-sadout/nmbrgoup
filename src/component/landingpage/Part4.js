import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Part4() {
    const colorBorder="#abc2ed";
    const color1="#275DAD";
    const color2="#0B6E4F";
    const color3="#721817";
    const color4="#FA9F42"
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
                    iconStyle={{ backgroundColor: color1}}
                    contentStyle={{ background:  color1, borderRadius:"20px", boxShadow:"none"}}
                    contentArrowStyle={{ borderRight: `7px solid ${color1}`, margin:"-1px"}}
                    
                >
                    <h3>Creative Director</h3>
                    <h4>Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="Presale"
                    iconStyle={{ background:  color1, color: '#fff' }}
                    contentStyle={{ background:  color1, borderRadius:"20px", boxShadow:"none" }}
                    contentArrowStyle={{ borderRight: `7px solid ${color1}`, margin:"-1px"}}
                >
                    <h3>Art Director</h3>
                    <h4>San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="Post sale"
                    iconStyle={{ background:  color2, color: '#fff' }}
                    contentStyle={{ background:  color2, borderRadius:"20px", boxShadow:"none" }}
                    contentArrowStyle={{ borderRight: `7px solid ${color2}`, margin:"-1px"}}
                >
                    <h3>Web Designer</h3>
                    <h4>Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="yo mama sale"
                    iconStyle={{ background:  color2, color: '#fff' }}
                    contentStyle={{ background:  color2, borderRadius:"20px", boxShadow:"none" }}
                    contentArrowStyle={{ borderRight: `7px solid ${color2}`, margin:"-1px"}}
                >
                    <h3>Web Designer</h3>
                    <h4>San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="dez"
                    iconStyle={{ background:  color3, color: '#fff' }}
                    contentStyle={{ background:  color3, borderRadius:"20px", boxShadow:"none" }}
                    contentArrowStyle={{ borderRight: `7px solid ${color3}`, margin:"-1px"}}
                >
                    <h3>Content Marketing for Web, Mobile and Social Media</h3>
                    <h4>Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    
                    date="nuts"
                    iconStyle={{ background:  color3, color: '#fff' }}
                    contentStyle={{ background:  color3, borderRadius:"20px", boxShadow:"none" }}
                    contentArrowStyle={{ borderRight: `7px solid ${color3}`, margin:"-1px"}}
                >
                    <h3>Agile Development Scrum Master</h3>
                    <h4>Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: color4, color: '#fff' }}
                    contentStyle={{ background:  color4, borderRadius:"20px", boxShadow:"none" }}
                    contentArrowStyle={{ borderRight: `7px solid darkgray`, margin:"-1px"}}
                    date="gottem"
                >

                    <h3>Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4>Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>

                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    iconStyle={{ background: color4, color: '#fff', borderRadius:"20px" }}
                    
                    date="And more to come..."
                />
            </VerticalTimeline>
        </div>
    </>
  )
}

export default Part4