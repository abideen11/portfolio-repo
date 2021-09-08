import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Contact from './Contact'
import Introduction from './Introduction'
import PortfolioProjects from './PortfolioProjects'
import Resume from './Resume'

import ReactGA from 'react-ga'

ReactGA.event({
    category: 'User',
    action: 'Browsing website'
})

export default function Home() {
    return(
        <div className="div-hme">
            <div className="hme-div" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><FontAwesomeIcon icon={faAngleUp} /></div>
            <Introduction />
            <PortfolioProjects />
            <Resume />
            <Contact />
        </div>
    )
}