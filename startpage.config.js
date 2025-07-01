const defaultConfig = {
	username: "l6174",

theme: {
        "backgroundColor": "#191724",
        "windowColor": "#1f1d2e",
        "glowColor": "#464c79",
        "white": "#e0def4",
        "gray": "#908caa",
        "black": "#191724",
        "red": "#eb6f92",
        "green": "#31748f",
        "blue": "#9ccfd8",
        "yellow": "#f6c177",
        "cyan": "#ebbcba",
        "magenta": "#c4a7e7",
        "violet": "#ffffff",
        "orange": "#ea9a97"
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
		selectionBg: "magenta",
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
    default: "https://duckduckgo.com/?q=",
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
              alias: "gpt",
              name: "Chat GPT Query",
              url: "https://chatgpt.com/?q={}"
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
						"name": "GitHub",
						"url": "https://sekiryl.is-a.dev/github",
						"icon": "fa-brands:github"
					},
					{
						"name": "GitLab",
						"url": "https://gitlab.com",
						"icon": "fa-brands:gitlab"
					},
					{
						"name": "Vercel",
						"url": "https://vercel.com",
						"icon": "simple-icons:vercel"
					},
					{
						"name": "Cloudflare",
						"url": "https://dash.cloudflare.com",
						"icon": "fa-brands:cloudflare"
					}
				]
			},
			{
				"title": "Productivity",
				"color": "violet",
				"align": "left",
				"links": [
          {
                  "name": "Deep Seek",
                  "url": "https://chat.deepseek.com/",
                  "icon": "icon-park-solid:whale"
          },
					{
						"name": "Chat GPT",
						"url": "https://chatgpt.com/",
						"icon": "simple-icons:openai"
					},
					{
						"name": "Monkey Type",
						"url": "https://monkeytype.com",
						"icon": "simple-icons:monkeytype"
					},
					{
						"name": "Mail",
						"url": "https://mail.proton.me",
						"icon": "simple-icons:protonmail"
					}
				]
			},
			{
				"title": "Leisure",
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
						"url": "https://netflix.com",
						"icon": "mdi:netflix"
					},
					{
						"name": "Disney",
						"url": "https://hotstar.com/in",
						"icon": "cbi:disney-plus"
					},
					{
						"name": "Chess",
						"url": "https://chess.com/",
						"icon": "mdi:chess-pawn"
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
						"icon": "mdi:package-variant"
					},
					{
						"name": "Rose Pine",
						"url": "https://rosepinetheme.com/palette/ingredients/",
						"icon": "mdi:palette"
					},
					{
						"name": "Hyprland Wiki",
						"url": "https://wiki.hyprland.org/",
						"icon": "simple-icons:hyprland"
					}
				]
			}
		]
	}
}

export default defaultConfig
