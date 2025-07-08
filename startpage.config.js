const defaultConfig = {
	username: "sekiratte",
theme: {
    "backgroundColor": "#231e1c",   // base
    "windowColor": "#1a1614",       // mantle
    "glowColor": "#5a5149",         // overlay1
    "white": "#e3d8c9",             // text
    "gray": "#a09585",              // subtext0
    "black": "#0f0d0c",             // crust
    "red": "#9a2a2a",               // red
    "green": "#5c7c46",             // green
    "blue": "#3a5a7a",              // blue
    "yellow": "#d4af37",            // yellow
    "cyan": "#4a8a8a",              // teal
    "magenta": "#d4875d",           // mauve
    "violet": "#e7c8a9",            // rosewater (soft highlight)
    "orange": "#d4875d"             // peach
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
		hoverColor: "orange"
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
