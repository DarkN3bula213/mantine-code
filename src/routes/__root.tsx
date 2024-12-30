import {
	AppShell,
	Burger,
	Group,
	Skeleton,
	Text,
	Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	Link,
	Outlet,
	createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: Home,
})

export function Home() {
	const [mobileOpened, { toggle: toggleMobile }] =
		useDisclosure()
	const [desktopOpened, { toggle: toggleDesktop }] =
		useDisclosure(true)

	return (
		<AppShell
			header={{ height: 60 }}
			transitionDuration={500}
			transitionTimingFunction='ease'
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: {
					mobile: !mobileOpened,
					desktop: !desktopOpened,
				},
			}}
			padding='md'
		>
			<AppShell.Header>
				<Group h='100%' px='md'>
					<Burger
						opened={mobileOpened}
						onClick={toggleMobile}
						hiddenFrom='sm'
						size='sm'
					/>
					<Burger
						opened={desktopOpened}
						onClick={toggleDesktop}
						visibleFrom='sm'
						size='sm'
					/>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p='md'>
				Navbar
				{Array(15)
					.fill(0)
					.map((_, index) => (
						<Skeleton
							key={index}
							h={28}
							mt='sm'
							animate={false}
						/>
					))}
				<div className='flex gap-2 p-2'>
					<Link to='/' className='[&.active]:font-bold'>
						Home
					</Link>{' '}
					<Link
						to='/about'
						className='[&.active]:font-bold'
					>
						About
					</Link>
				</div>
			</AppShell.Navbar>
			<AppShell.Main>
				<Outlet />
				<Title className='mt-20 text-center'>
					Welcome to{' '}
					<Text
						inherit
						variant='gradient'
						component='span'
						gradient={{ from: 'pink', to: 'yellow' }}
					>
						Mantine
					</Text>{' '}
					+
					<Text
						inherit
						variant='gradient'
						component='span'
						gradient={{ from: 'blue', to: 'green' }}
					>
						TailwindCSS
					</Text>
				</Title>
				<Text
					className='mx-auto mt-xl max-w-[500px] text-center text-gray-700 dark:text-gray-300'
					ta='center'
					size='lg'
					maw={580}
					mx='auto'
					mt='xl'
				>
					This starter Next.js project includes a minimal
					setup for Mantine with TailwindCSS. To get started
					edit page.tsx file.
				</Text>
			</AppShell.Main>
			<TanStackRouterDevtools />
		</AppShell>
	)
}
