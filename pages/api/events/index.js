import {events} from '../../../data/events'



export default function handler(req, res) {

    if(req.method === 'GET') {
        res.status(200).json(events)
    } else {
        res.status(405).json({message: `${req.method} is not allowed`})
    }
    
    
  }