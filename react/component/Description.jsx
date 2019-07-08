import React from 'react';

class Description extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // showreadmorediv: true,
            showmoredesc: false,
            linkdecoration: false
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
    addUnderLine(){
        this.setState({
            linkdecoration: true
        })
    }
    removeUnderLine(){
        this.setState({
            linkdecoration: false
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
            var bath = detail.gathrmnum;
        }
        // console.log('test',br)
        var arrgs= []
        for(var i=1; i<=br; i++){
            arrgs.push(
                <div id='brarrg'>
                    bedroom {i}
                </div>
            )
        }
        var displaydesc = {display: this.state.showmoredesc ? 'block': 'none'}
        var displayunderline = {textDecoration: this.state.linkdecoration ? 'underline' : 'none'}
        return(
            <div>
                <div id='summary'>
                    <div id='tilo'>
                        <div id='title'>{title}</div>
                        <div id='location'>{location}</div>
                    </div>
                    <div id='host'> 
                        { host &&
                            <div >
                                <img src={host.pic}></img>
                                <div>{host.name}</div>   
                            </div>
                        } 
                    </div>
                    
                </div>
                <div id='hls'>
                    { highlights &&
                        <div>
                            {Object.keys(highlights).map(hl=>
                                <div id='hltitle'>
                                    {hl}
                                    <div id='hlcontent'>{highlights[hl]}</div>
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
                        <div id='readmore' onClick={e=>this.readmoredesc()} onMouseEnter={e=>this.addUnderLine()} onMouseLeave={e=>this.removeUnderLine()}>
                            <div style={displayunderline}>Read more about this space</div>
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
                            <div id='fakedesclink' onMouseEnter={e=>this.addUnderLine()} onMouseLeave={e=>this.removeUnderLine()} >
                                <div style={displayunderline}>Learn about this number</div>
                            </div>
                            <div id='readless' onClick={e=>this.readlessdesc()} onMouseEnter={e=>this.addUnderLine()} onMouseLeave={e=>this.removeUnderLine()}>
                                <div style={displayunderline}>Hide</div>
                            </div>
                            <div id='fakedesclink' onMouseEnter={e=>this.addUnderLine()} onMouseLeave={e=>this.removeUnderLine()} >
                                <div style={displayunderline}>Contact host</div>
                            </div>
                        </div>   
                    </div>
                }
                </div>
                <div id='roomarrg'>
                    <h2>Sleeping arrangements</h2>
                    <div id='arrgarea'>
                        {arrgs}
                    </div>
                </div>
               
            </div>

        )
    }
}


export default Description;