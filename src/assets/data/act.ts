export type TagType =
  | "favorite"
  | "mind"
  | "write"
  | "article"
  | "text"
  | "seo"
  | "comments"
  | "code"
  | "ai"
  | "life"
  | "living"
  | "interesting"
  | "speech"
  | "social"
  | "philosophy"
  | "pedagogy"
  | "academic"
  | "interpreter"
  | "games"
  | "tool"
  | "language"
  | "company"
  | "doctor"
  | "finance"
  | "music"
  | "professional"
  | "contribute"
  | "personal";

  export type TypeOfTag = {
    label: string,
    description: {
        message:string,
        id:string
    },
    color: string,
    isselect?:boolean
  };



export const Tags:{[type in TagType]: TypeOfTag} = {
    favorite: {
        label: "常用",
        description: {
            message: "常用/收藏",
            id: "showcase.tag.favorite.description",
        },
        color: "#e9669e",
    },

    mind: {
        label: "发散思维",
        description: {
            message: "质疑、思考、联想、归纳",
            id: "showcase.tag.mind.description",
        },
        color: "#86699e",
    },

    write: {
        label: "写作辅助",
        description: {
            message: "对文章的语法和风格进行润色，以帮助你完成写作",
            id: "showcase.tag.write.description",
        },
        color: "#75581e",
    },

    article: {
        label: "文章/故事",
        description: {
            message: "小说、论文、新闻、剧本等有一定样式的文章",
            id: "showcase.tag.article.description",
        },
        color: "#dfd545",
    },

    comments: {
        label: "点评/评鉴",
        description: {
            message: "点评/评鉴",
            id: "showcase.tag.comments.description",
        },
        color: "#eeef99",
    },

    text: {
        label: "文本/词语",
        description: {
            message: "文本/词语",
            id: "showcase.tag.text.description",
        },
        color: "#554236",
    },

    seo: {
        label: "SEO",
        description: {
            message: "文本/关键词拓展生成",
            id: "showcase.tag.seo.description",
        },
        color: "#BC9F77",
    },

    code: {
        label: "IT/编程",
        description: {
            message:
                "虽然说是编程，但 ChatGPT 是按照要求给出编程步骤的建议或简单的样例代码，这些代码只能作为测试，仍然需要程序员来修改。",
            id: "showcase.tag.code.description",
        },
        color: "#8c2f00",
    },

    ai: {
        label: "AI",
        description: {
            message: "AI",
            id: "showcase.tag.ai.description",
        },
        color: "#ff6100", // Facebook blue
    },

    life: {
        label: "自助百科",
        description: {
            message: "生活知识/自助百科",
            id: "showcase.tag.life.description",
        },
        color: "#a44fb7",
    },

    living: {
        label: "生活质量",
        description: {
            message: "健身、营养、厨师、化妆、造型",
            id: "showcase.tag.living.description",
        },
        color: "#cf92e0",
    },

    interesting: {
        label: "趣味知识",
        description: {
            message: "趣味知识",
            id: "showcase.tag.interesting.description",
        },
        color: "#127f82",
    },

    speech: {
        label: "辩论/演讲",
        description: {
            message: "辩论/演讲",
            id: "showcase.tag.speech.description",
        },
        color: "#9c1d10",
    },

    social: {
        label: "心理/社交",
        description: {
            message: "心理/社交",
            id: "showcase.tag.social.description",
        },
        color: "#ee3308",
    },

    philosophy: {
        label: "哲学/宗教",
        description: {
            message: "哲学/宗教",
            id: "showcase.tag.philosophy.description",
        },
        color: "#ffcaa9",
    },

    pedagogy: {
        label: "教育/学生",
        description: {
            message: "与学生教育相关的内容",
            id: "showcase.tag.pedagogy.description",
        },
        color: "#fe0999",
    },

    academic: {
        label: "学术/教师",
        description: {
            message: "与学术或学校相关的人和事物",
            id: "showcase.tag.academic.description",
        },
        color: "#fe6829",
    },

    games: {
        label: "游戏",
        description: {
            message: "游戏",
            id: "showcase.tag.games.description",
        },
        color: "#574C57",
    },

    tool: {
        label: "工具",
        description: {
            message: "工具",
            id: "showcase.tag.tool.description",
        },
        color: "#4267b2", // Facebook blue
    },

    interpreter: {
        label: "终端/解释器",
        description: {
            message: "终端/解释器",
            id: "showcase.tag.interpreter.description",
        },
        color: "#ffa11c", // Facebook blue
    },

    language: {
        label: "语言/翻译",
        description: {
            message: "语言生成、转换、翻译、识别等多种工具",
            id: "showcase.tag.language.description",
        },
        color: "#39ca30",
    },

    company: {
        label: "企业职位",
        description: {
            message: "一般企业内的岗位",
            id: "showcase.tag.company.description",
        },
        color: "#124f4e",
    },

    doctor: {
        label: "医生",
        description: {
            message: "医生",
            id: "showcase.tag.doctor.description",
        },
        color: "#0e7774",
    },

    finance: {
        label: "金融顾问",
        description: {
            message: "金融行业的岗位",
            id: "showcase.tag.finance.description",
        },
        color: "#14cfc3",
    },

    music: {
        label: "音乐",
        description: {
            message: "音乐",
            id: "showcase.tag.music.description",
        },
        color: "#5cecdc",
    },

    professional: {
        label: "行业顾问",
        description: {
            message: "律师、茶艺师等需要专业知识的岗位",
            id: "showcase.tag.professional.description",
        },
        color: "#ffcfc3",
    },

    contribute: {
        label: "投稿",
        description: {
            message: "来自大家的投稿作品，能帮助我们开拓思路",
            id: "showcase.tag.contribute.description",
        },
        color: "#cecd21",
    },

    personal: {
        label: "Personal",
        description: {
            message: "个人非生产力使用，仅作参考",
            id: "showcase.tag.personal.description",
        },
        color: "#ebcb63",
    },
};

export const TagList = Object.keys(Tags) as TagType[];