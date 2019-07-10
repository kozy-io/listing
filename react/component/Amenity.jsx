import React from 'react';
class Amenity extends React.Component{
    constructor(props){
        super(props)
    }
    showamenlist(){
        this.props.showamenitylist()
    }
    render(){ 
        // console.log('props in Amenity',this.props)  
        if(this.props.amenity){
            var basicitems = this.props.amenity.Basic
        }
        if(basicitems){
            var amenitems = Object.keys(basicitems)
            var amenlength = amenitems.length
        }
        // console.log('items',amenitems);
        // console.log('length',amenlength)
        return(
            <div id='amenityarea' >                
                <div id='amenhead'>Amenities</div>
                <div id='amenarea'>
                {amenitems &&
                    <div id='amenarealeft'>             
                        <div className='amenitem'>{amenitems[0]}</div>
                        <div className='amenitem'>{amenitems[1]}</div>
                    </div>
                }
                 {amenitems &&
                    <div id='amenarearight'>             
                        <div className='amenitem'>{amenitems[2]}</div>
                        <div className='amenitem'>{amenitems[3]}</div>
                    </div>
                }      
                </div>
                <div id='moreamen'>
                    <button id='btn-moreamen' onClick={e=>this.showamenlist()}>
                        Show all {amenlength} amenities
                    </button>
                </div>
            </div>
        )
    }
}
export default Amenity;