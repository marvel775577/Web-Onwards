import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StoppingDriving from './views/StoppingDriving'
import CostOfTransport from './views/CostOfTransport'
import PlanYourTravel from './views/PlanYourTravel'
import Article from './views/Article'
import Page from './views/Page'
import DriversChecklist from './views/DriversChecklist'
import DriversChecklistFinal from './views/DriversChecklistFinal'
import CostCalculator from './views/CostCalculator'
import HowToGuides from './views/HowToGuides'
import FamilyAndCarerSupport from './views/FamilyAndCarerSupport'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumb: [
          { name: 'Home' }
        ]
      }
    },
    {
      path: '/stopping-driving',
      component: Page,
      children: [
        {
          path: '',
          name: 'stopping-driving',
          component: StoppingDriving,
          meta: {
            breadcrumb: [
              { name: 'Stopping Driving' }
            ]
          }
        },
        {
          path: 'driver-checklist',
          name: 'driver-checklist',
          component: DriversChecklist,
          meta: {
            breadcrumb: [
              { name: 'Stopping Driving', link: '/stopping-driving' },
              { name: 'Driver Checklist', link: '/driver-checklist' }
            ]
          }
        },
        {
          path: 'driver-checklist-form-final',
          name: 'driver-checklist-form-final',
          component: DriversChecklistFinal,
          meta: {
            breadcrumb: [
              { name: 'Stopping Driving', link: '/stopping-driving' },
              { name: 'Driver Checklist', link: '/stopping-driving/driver-checklist' },
              { name: 'Driver Checklist Result' }
            ]
          }
        },
        {
          path: ':id',
          name: 'stopping-driving-article',
          component: Article,
          meta: {
            breadcrumb: [
              { name: 'Stopping Driving', link: '/stopping-driving' }
            ]
          }
        }
      ]
    },
    {
      path: '/cost-of-transport',
      component: Page,
      children: [
        {
          path: '',
          component: CostOfTransport,
          name: 'cost-of-transport',
          meta: {
            breadcrumb: [
              { name: 'Costs of Transport' }
            ]
          }
        },
        {
          path: 'cost-calculator',
          name: 'cost-calculator',
          component: CostCalculator,
          meta: {
            breadcrumb: [
              { name: 'Costs of Transport', link: '/cost-of-transport' },
              { name: 'Cost Calculator' }
            ]
          }
        },
        {
          path: ':id',
          name: 'cost-of-transport-article',
          component: Article,
          meta: {
            breadcrumb: [
              { name: 'Costs of Transport', link: '/cost-of-transport' }
            ]
          }
        }
      ]
    },
    {
      path: '/plan-your-travel',
      component: Page,
      children: [
        {
          path: '',
          name: 'plan-your-travel',
          component: PlanYourTravel,
          meta: {
            breadcrumb: [
              { name: 'Plan Your Travel' }
            ]
          }
        },
        {
          path: ':id',
          name: 'plan-your-travel-article',
          component: Article,
          meta: {
            breadcrumb: [
              { name: 'Plan Your Travel', link: '/plan-your-travel' }
            ]
          }
        }
      ]
    },
    {
      path: '/how-to-guides',
      component: Page,
      children: [
        {
          path: '',
          name: 'how-to-guides',
          component: HowToGuides,
          meta: {
            breadcrumb: [
              { name: 'How to Guides' }
            ]
          }
        },
        {
          path: ':id',
          name: 'how-to-guides-article',
          component: Article,
          meta: {
            breadcrumb: [
              { name: 'How to Guides', link: '/how-to-guides' }
            ]
          }
        }
      ]
    },
    {
      path: '/family-and-carer-support',
      component: Page,
      children: [
        {
          path: '',
          name: 'family-and-carer-support',
          component: FamilyAndCarerSupport,
          meta: {
            breadcrumb: [
              { name: 'Family & Carer Support' }
            ]
          }
        },
        {
          path: ':id',
          name: 'family-and-carer-support-article',
          component: Article,
          meta: {
            breadcrumb: [
              { name: 'Family & Carer Support', link: '/family-and-carer-support' }
            ]
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.params.id) {
    to.meta.breadcrumb = to.meta.breadcrumb.filter(e => e.link)
    if (to.meta.breadcrumb.filter(e => e.name === (to.query.breadcrumb || to.params.id)).length === 0) {
      to.meta.breadcrumb.push({ name: (to.query.breadcrumb || to.params.id) })
    }
  }
  next()
})

export default router
