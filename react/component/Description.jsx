import React from 'react';
const path = require('path');
class Description extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // showreadmorediv: true,
            showmoredesc: false,   
            showscrolltonext: false,
            move: 0,   
        }
    }
    readmoredesc(){
        this.setState({
            showmoredesc: true
        })
    }
    readlessdesc(){
        this.setState({
            showmoredesc: false
        })
    }   
    getnext(){
        this.setState({
            move: this.state.move-(100/3)
        })
    }
    getpre(){
        this.setState({
            move: this.state.move+(100/3)
        })
    }
    render(){
        // console.log('location',this.props.location);
        var title = this.props.title;
        var location = this.props.location;
        var host = this.props.host;
        var highlights = this.props.highlights;
        var desc = this.props.desc;
        var detail = this.props.detail;
        if(detail){
            var br = detail.bedrmnum;
            var bed = detail.bednum;
            var guest = detail.guestmax;
        }
        // console.log('test',br)
        var bedoptions = ['1 queen bed','1 single bed','1 king bed']
        var arrgs= [];
        var bedicon;
        for(var i=1; i<=br; i++){
            var bedoption = bedoptions[Math.floor(Math.random()*bedoptions.length)]
            if(bedoption==='1 queen bed' || bedoption==='1 king bed'){
                bedicon = 'm23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z'
            } else if(bedoption==='1 single bed'){
                bedicon = 'm20.99 15.39-1.99-8.45v-5.44c0-.83-.68-1.5-1.5-1.5h-10a1.5 1.5 0 0 0 -1.5 1.5v5.44l-1.99 8.44-.01.12v5.01c0 .66.43 1.2 1.02 1.4-.01.03-.02.06-.02.09v1.5a.5.5 0 0 0 1 0v-1.5h13v1.5a.5.5 0 0 0 1 0v-1.5c0-.03-.01-.06-.02-.09a1.49 1.49 0 0 0 1.02-1.4v-5.01l-.01-.12zm-13.99-13.89a.5.5 0 0 1 .5-.5h9.99c.27 0 .5.23.5.5v4.5h-2v-2.51c.01-.82-.66-1.49-1.48-1.49h-4.02c-.82 0-1.49.67-1.49 1.49v2.51h-2zm8 1.99v4.02a.5.5 0 0 1 -.49.49h-4.02a.5.5 0 0 1 -.49-.49v-4.02c0-.27.22-.49.49-.49h4.02c.27 0 .49.22.49.49zm-8.01 3.63.01-.12h2v .51c0 .82.67 1.49 1.49 1.49h4.02c.82 0 1.49-.67 1.49-1.49v-.51h2l .01.12 1.86 7.88h-14.74l1.86-7.89zm13.01 13.39a.5.5 0 0 1 -.5.49h-14c-.28 0-.5-.22-.5-.49v-4.51h15z'
            }
            arrgs.push(
                <div id='brarrg'>
                    <svg viewBox={'0 0 24 24'} role={'presentation'} focusable={'false'}  >
                        <path d={bedicon} fill-rule={"evenodd"} ></path>
                    </svg>
                    <div>
                        <p id='brtext'>bedroom {i}</p>
                        <p id='bedinroom'>{bedoption}</p>
                    </div>
                </div>
            )
        }
        var displaydesc = {display: this.state.showmoredesc ? 'block': 'none'}
        var displayshowmore = {display: this.state.showmoredesc ? 'none': 'flex'}
        // var displaynextarr = {display:this.state.showscrolltonext? 'block':'none'}
        var arrow = 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z'
        var movestyle = {transform: `translateX(${this.state.move}%)`}
        
        return(
            <div id='main'>
                <div id='summary'>
                    <div id='tilo'>
                        <div id='title'>{title}</div>
                        <div id='location'>{location}</div>
                    </div>
                    <div id='host'> 
                        { host &&
                            <div >
                                <img src={host.pic}></img>
                                <div id='hostname'>{host.name}</div>   
                            </div>
                        } 
                    </div>                  
                </div>
                <div id='hls'>
                    { highlights &&
                        <div>
                            {Object.keys(highlights).map(hl=>
                                <div id='hl'>
                                    <div id='hlicon'>
                                        {(hl.includes('house')||hl.includes('room')||hl.includes('apartment')) && 
                                            <img src={"./house.png"}></img>
                                        }    
                                        {hl.includes('Self') && 
                                            <img src={"./easy-chkin.png"}></img>
                                        }   
                                        {hl.includes('experience') && 
                                            <img src={"./gt-chkin.png"}></img>
                                        }       
                                        {hl.includes('Superhost') && 
                                            <img src={"./superhost.png"}></img>
                                        } 
                                        {hl.includes('clean') && 
                                            <img src={"./clean.png"}></img>
                                        } 
                                        {hl.includes('location') && 
                                            <img src={"./location.png"}></img>
                                        }                    
                                    </div>
                                    <div id='hltitle'>
                                        {hl}
                                        <div id='hlcontent'>{highlights[hl]}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }                   
                </div>
                <div id='linemg'>
                        <div id='line'></div>
                </div>
                <div id='descs'>                    
                { desc &&
                    <div>
                        <div id='generaldesc'>
                             <p id='desccontent'>{desc['General']}</p>
                        </div>
                        <div id='readmore' onClick={e=>this.readmoredesc()} style={displayshowmore}>
                            <div >Read more about this space</div>
                            <svg viewBox={'0 0 18 18'} role={'presentation'} focusable={'false'}  >
                                <path d={arrow} fill-rule={"evenodd"} ></path>
                            </svg>
                        </div>
                        <div id='readmorearea' style={displaydesc}>
                            <div>
                                {Object.keys(desc).slice(1).map(de=>
                                <div id='desctitle'>
                                    {de}
                                        <p id='desccontent'>{desc[de]}</p>
                                    </div>
                                    )}
                            </div>
                            <div id='fakedesclink' >
                                <div >Learn about this number</div>
                            </div>
                            <div id='readless' onClick={e=>this.readlessdesc()} >
                                <div >Hide</div>
                                <svg viewBox={'0 0 18 18'} role={'presentation'} focusable={'false'} >
                                    <path d={arrow} fill-rule={"evenodd"} ></path>
                                </svg>
                            </div>                           
                        </div>   
                        <div id='fakedesclink' >
                            <div >Contact host</div>
                        </div>
                    </div>
                }
                </div>
                <div id='linemg'>
                    <div id='line'></div>
                </div>
                <div id='roomarrg'>
                    <h2>Sleeping arrangements</h2>
                    <div id='arrgline'>
                        <div id='btn-pre' onClick={e=>this.getpre()}>
                            <span>
                                <button type={"button"}>
                                    <svg viewBox={'0 0 18 18'} role={'presentation'} focusable={'false'}  >
                                        <path d={arrow} fill-rule={"evenodd"} ></path>
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div id='arrg'>
                            <div id='arrgarea' style={movestyle}>
                                {arrgs}
                            </div>
                        </div>
                        <div id='btn-next' onClick={e=>this.getnext()}>
                            <span>
                                <button type={"button"}>
                                    <svg viewBox={'0 0 18 18'} role={'presentation'} focusable={'false'}  >
                                        <path d={arrow} fill-rule={"evenodd"} ></path>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
               
            </div>

        )
    }
}


export default Description;