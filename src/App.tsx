import { useDisclosure } from "@mantine/hooks";
import {
	AppShell,
	Burger,
	Group,
	MantineProvider,
	UnstyledButton,
} from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./App.module.css";

export default function App() {
	const [opened, { toggle }] = useDisclosure();
	return (
		<MantineProvider>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { desktop: true, mobile: !opened },
				}}
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group ml="xl" gap={20} visibleFrom="sm">
							<UnstyledButton className={classes.control}>
								Home
							</UnstyledButton>
							<UnstyledButton className={classes.control}>
								Blog
							</UnstyledButton>
							<UnstyledButton className={classes.control}>
								Contacts
							</UnstyledButton>
							<UnstyledButton className={classes.control}>
								Support
							</UnstyledButton>
						</Group>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar py="md" px={4}>
					<UnstyledButton className={classes.control}>Home</UnstyledButton>
					<UnstyledButton className={classes.control}>Blog</UnstyledButton>
					<UnstyledButton className={classes.control}>
						Contacts
					</UnstyledButton>
					<UnstyledButton className={classes.control}>
						Support
					</UnstyledButton>
				</AppShell.Navbar>

				<AppShell.Main>
					Navbar is only visible on mobile, links that are rendered in the
					header on desktop are hidden on mobile in header and rendered in
					navbar instead.
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}
