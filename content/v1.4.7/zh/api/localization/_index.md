---
title: "Localization — 文本与本地化"
description: "TaleWorlds.Localization 所在的目录：游戏里每一段显示文本的取值、变量替换与按语言分派的语法处理。目前 9 页。"
---
# Localization — 文本与本地化

这个桶装的是 `TaleWorlds.Localization` **这个命名空间本身**：游戏里每一段显示文本怎么存、怎么取值、怎么把 `{=key}` 之类的变量换掉，以及不同语言各自的语法处理。1.4.7 里这个命名空间下共有 **21 个公开类型**，分在三个命名空间：

| 命名空间 | 类型数 | 装的是什么 |
| --- | ---: | --- |
| `TaleWorlds.Localization` | 8 | 文本对象本体（`TextObject`）、文本管理器（`MBTextManager`、`LocalizedTextManager`）、语音（`VoiceObject`、`LocalizedVoiceManager`）与异常 |
| `TaleWorlds.Localization.TextProcessor` | 5 | 文本表达式的解析与上下文（`TextProcessingContext`、`MBTextModel`、`TextGrammarProcessor`、`LanguageSpecificTextProcessor`） |
| `TaleWorlds.Localization.TextProcessor.LanguageProcessors` | 8 | 各语言自己的语法处理器（英语、德语、法语、意大利语、西班牙语、土耳其语、波兰语、俄语） |

对模组作者来说，这个桶是**最容易撞上、也最容易写错**的一层：你在代码里写 `new TextObject("{=myKey}Hello")` 拿到的不是一个字符串，而是一个**延迟求值**的对象 —— 真正的文本要等 `ToString()` 时才按当前语言去查表、按当前上下文替换变量。判断一段文本该不该在这里处理，看的是这条线：**会随语言变化、或者需要变量替换的，走这里**；纯调试输出或固定英文的日志可以不走。

`TextObject` 的取值不是「取一次就固定」的：同一个对象在不同语言、不同变量设置下可以给出不同结果，所以**缓存它的 `ToString()` 结果**通常是个 bug，而不是优化。

## 本区页面（9）

| 页面 | 讲的是什么 |
| --- | --- |
| [TextObject](./TextObject) | 一段可本地化文本的载体：键、变量替换、按语言求值与相等比较 |
| [MBTextManager](./MBTextManager) | 本地化文本的静态门面：按 id 取文本、设置全局变量、语言与文本处理器入口 |
| [LocalizedTextManager](./LocalizedTextManager) | 文本表本身的管理者：语言切换、按语言取串、日期等按语言格式化的入口 |
| [LanguageSpecificTextProcessor](./LanguageSpecificTextProcessor) | 单语言语法处理的基类：各语言处理器要覆写的那组钩子 |
| [TextProcessingContext](./TextProcessingContext) | 文本表达式的求值上下文：函数体与参数的查找、临时数据 |
| [TextGrammarProcessor](./TextGrammarProcessor) | 把表达式语法树按语言处理器渲染成最终字符串 |
| [VoiceObject](./VoiceObject) | 一组语音文件的路径容器：一个语音 id 对应多个模块的音频路径 |
| [LocalizedVoiceManager](./LocalizedVoiceManager) | 语音对象的全局表：按 id 查语音、装载与查询语音路径 |
| [LocalizationException](./LocalizationException) | 本地化子系统的异常类型：文本表缺失或格式错误时抛出 |

这 9 页分成三层读：**用文本**从 [TextObject](./TextObject) 开始（它决定你拿到什么）；**配文本**看 [MBTextManager](./MBTextManager) 与 [LocalizedTextManager](./LocalizedTextManager)（它们决定文本从哪来）；**扩语言**看 [LanguageSpecificTextProcessor](./LanguageSpecificTextProcessor) 与 [TextProcessingContext](./TextProcessingContext)（它们决定表达式怎么按语言求值）。

## 尚未收录

这个桶按命名空间规则应覆盖 **21** 个类型，现在有页面的是 **9** 个，其余 **12** 个没有页面：

| 子命名空间 | 待写 |
| --- | --- |
| `TaleWorlds.Localization` | `DateRange` · `SaveableLocalizationTypeDefiner` |
| `TaleWorlds.Localization.TextProcessor` | `DefaultTextProcessor` · `MBTextModel` |
| `TaleWorlds.Localization.TextProcessor.LanguageProcessors` | `EnglishTextProcessor` · `FrenchTextProcessor` · `GermanTextProcessor` · `ItalianTextProcessor` · `SpanishTextProcessor` · `TurkishTextProcessor` · `PolishTextProcessor` · `RussianTextProcessor` |

八个语言处理器里 `GermanTextProcessor`、`PolishTextProcessor`、`RussianTextProcessor` 都是两千行以上的大文件 —— 它们是「新增一门语言」时才需要读的那一层，优先级低于本页已列的 9 页。

量它的命令（在仓库根跑）：

```bash
node -e "const t=require('./tools/_verify/types-1.4.7.json').types,fs=require('fs');
const loc=t.filter(x=>/^TaleWorlds\.Localization/.test(x.namespace||''));
const pages=new Set(fs.readdirSync('content/v1.4.7/zh/api/localization').filter(f=>f.endsWith('.md')&&f!=='_index.md').map(f=>f.replace('.md','')));
console.log(loc.length, pages.size, loc.filter(x=>!pages.has(x.name)).length);"
```

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)
