import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import PersonalView from '@/views/PersonalView.vue'
import PersonalizeView from '@/views/PersonalizeView.vue'
import ShopView from '@/views/ShopView.vue'
import FunnyView from '@/views/FunnyView.vue'
import GamesView from '@/views/GamesView.vue'
import VideosView from '@/views/VideosView.vue'
import MemoryGame from '@/components/games/memoryGame/MemoryGame.vue'
import QuizGame from '@/components/games/quizGame/QuizGame.vue'
import HangManGame from '@/components/games/hangManGame/hangManGame.vue'
import DueGame from '@/components/games/dueGame/dueGame.vue'
import MinesweeperGame from '@/components/games/minesweeper/MinesweeperGame.vue'
import ticTacToeGame from '@/components/games/ticTacToeGame/ticTacToeGame.vue'
import { GameDueRoute, GameHangManRoute, GameMemoryRoute, GameMinesweeperRoute, GameQuizRoute, GameTicTacToeRoute } from '@/oth/games'

export const HomeRoute = '/'

export const LoginRoute = '/login'

export const ShopRoute = "/shop"

export const PersonalRoute = '/personal'
export const PersonalizeRoute = '/personal/personalize'

export const FunnyRoute = '/funny'
export const FunnyVideosRoute = '/funny/videos'
export const FunnyGamesRoute = '/funny/games'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HomeRoute,
      name: 'home',
      component: HomeView,
    },
    {
      path: LoginRoute,
      name: 'login',
      component: LoginView,
    },
    {
      path: ShopRoute,
      name: 'shop',
      component: ShopView
    },
    {
      path: PersonalRoute,
      name: 'personal',
      component: PersonalView,
    },
    {
      path: PersonalizeRoute,
      name: 'personalize',
      component: PersonalizeView,
    },
    {
      path: FunnyRoute,
      name: 'funny',
      component: FunnyView,
    },
    {
      path: GameMemoryRoute,
      name: 'memory',
      component: MemoryGame,
    },
    {
      path: GameQuizRoute,
      name: 'quiz',
      component: QuizGame,
    },
    {
      path: GameHangManRoute,
      name: 'HangMan',
      component: HangManGame,
    },
    {
      path: GameDueRoute,
      name: 'due48',
      component: DueGame,
    },
    {
      path: GameMinesweeperRoute,
      name: 'MinesweeperGame',
      component: MinesweeperGame,
    },
    {
      path: GameTicTacToeRoute,
      name: 'ticTacToeGame',
      component: ticTacToeGame,
    },
    {
      path: FunnyVideosRoute,
      name: 'video',
      component: VideosView,
    },
    {
      path: FunnyGamesRoute,
      name: 'video',
      component: GamesView,
    },
  ],
})

export const redirect = (path: string, frontoffice = false) => {
  if (import.meta.env.NODE_ENV === 'localhost')
    window.location.href = path
  else if (frontoffice)
    window.location.href = `/frontoffice${path}`
  else
    window.location.href = `${import.meta.env.BASE_URL}${path}`
}

export default router
