import React from 'react'
import { Redirect } from 'react-router'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Login, Protected,  } from './Components'
import fakeAuth from './Auth'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/BasicRouting',
    'component': BasicRouting
  },
  {
    'path':'/Blocking',
    'component': Blocking
  },
  {
    'path':'/Miss',
    'component': Miss
  },
  {
    'path':'/QueryParams',
    'component': QueryParams
  },
  {
    'path':'/Recursive',
    'component': Recursive
  },
  {
    'path':'/login',
    'component': Login
  },
  {
    'path':'/Protected',
    'component': () => (fakeAuth.isAuthenticated ? (<Protected/>) : (<Redirect to={{pathname: '/Login',state: { from: '/Protected'}
    }}/>))
  }
];

export default routes;
