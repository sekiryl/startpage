const defaultConfig = {
	username: "llawliet",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: false,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://searx.be/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "y",
				name: "YouTube Search",
				url: "https://youtube.com/search?q={}"
			}
		]
	},
		"sections": {
		"list": [
			{
				"title": "Game Dev",
				"color": "green",
				"align": "left",
				"links": [
					{
						"name": "Textures",
						"url": "https://ambientcg.com/list",
						"icon": "mdi:texture"
					},
					{
						"name": "Asset Store",
						"url": "https://unityassets4free.com/",
						"icon": "mdi:store"
					},
					{
						"name": "Mixamo",
						"url": "https://www.mixamo.com/#/?page=1&type=Motion%2CMotionPack",
						"icon": "mdi:animation"
					},
					{
						"name": "Poly Pizza",
						"url": "https://poly.pizza",
						"icon": "mdi:pizza"
					}
				]
			},
			{
				"title": "Dev",
				"color": "magenta",
				"align": "left",
				"links": [
					{
						"name": "GitLab",
						"url": "https://gitlab.com",
						"icon": "fa-brands:gitlab"
					},
					{
						"name": "Replit",
						"url": "https://replit.com",
						"icon": "mdi:code-braces"
					},
					{
						"name": "Vercel",
						"url": "https://vercel.com",
						"icon": "mdi:triangle"
					},
					{
						"name": "Chat GPT",
						"url": "https://chat.openai.com/chat",
						"icon": "simpleicons:openai"
					}
				]
			},
			{
				"title": "Productivity",
				"color": "violet",
				"align": "left",
				"links": [
					{
						"name": "Milanote",
						"url": "https://app.milanote.com",
						"icon": "fa:align-center"
					},
					{
						"name": "Study Material",
						"url": "https://drive.google.com/drive/folders/1d624w1PQiRkvQ2Tp16MCJtpilDBnSsii?usp=share_link",
						"icon": "fa:book"
					},
					{
						"name": "Monkey Type",
						"url": "https://monkeytype.com",
						"icon": "mdi:keyboard"
					},
					{
						"name": "Classes",
						"url": "https://www.pw.live/study/batches/study",
						"icon": "fa:school"
					}
				]
			},
			{
				"title": "Media",
				"color": "cyan",
				"align": "left",
				"links": [
					{
						"name": "YouTube",
						"url": "https://youtube.com",
						"icon": "fa-brands:youtube"
					},
					{
						"name": "Netflix",
						"url": "https://hotstar.com/in",
						"icon": "mdi:netflix"
					},
					{
						"name": "Cartoon Way",
						"url": "https://cartoonway.tk/",
						"icon": "mdi:ghost"
					},
					{
						"name": "Disney",
						"url": "https://hotstar.com/in",
						"icon": "fa:star"
					}
				]
			},
			{
				"title": "Social",
				"color": "blue",
				"align": "left",
				"links": [
					{
						"name": "Reddit",
						"url": "https://reddit.com/",
						"icon": "fa-brands:reddit"
					},
					{
						"name": "WhatsApp",
						"url": "https://web.whatsapp.com",
						"icon": "fa-brands:whatsapp"
					},
					{
						"name": "Quora",
						"url": "https://quora.com/",
						"icon": "fa-brands:quora"
					},
					{
						"name": "Instagram",
						"url": "https://instagram.com/",
						"icon": "fa-brands:instagram"
					}
				]
			},
			{
				"title": "Linux",
				"color": "yellow",
				"align": "left",
				"links": [
					{
						"name": "Arch Wiki",
						"url": "https://wiki.archlinux.org/",
						"icon": "mdi:arch"
					},
					{
						"name": "AUR",
						"url": "https://aur.archlinux.org/",
						"icon": "mdi:apps"
					},
					{
						"name": "9To5 Linux",
						"url": "https://9to5linux.com/",
						"icon": "fa-brands:linux"
					},
					{
						"name": "Kernel",
						"url": "https://kernel.org/",
						"icon": "fa:microchip"
					}
				]
			}
		]
	}
}

export default defaultConfig
