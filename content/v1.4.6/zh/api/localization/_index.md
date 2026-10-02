---
title: "localization 桶 — 本地化文本"
description: "v1.4.6 的 localization 桶对应 TaleWorlds.Localization 程序集：目前只有 TextObject 一张手写页，MBTextManager、各语言文本处理器与语音管理共 20 个公开类型尚未撰页。"
---
# localization 桶：本地化文本

这个桶对应 `TaleWorlds.Localization` 程序集，全部 54 个 `.cs` 里导出 21 个公开类型。它在 v1.4.6 里是一个**纯文本管线**：语言文件 → 语言专属的文本处理器 → `TextObject` 解析 → 界面上的一行字。程序集里唯一没有对应文档覆盖的，是这条管线的**后两段**（解析与分发）。

**mod 作者在什么场景碰到它**：写出第一个面向玩家的字符串时就会碰到——物品描述、菜单项、提示消息、自定义界面上的所有文字。[TextObject](./TextObject) 是这条线上唯一必须直接用的类型：它的 `Value` 字段装的是**未解析原文**，形态是 `{=MyKey}默认文本`；`ToString()` 才去语言文件里查 `MyKey`，查不到就用 `}` 后面那段兜底。（`MyKey` 只是示例键名，不是类型；真键名由你自己定。）这个「查不到就显示原文」的行为是 mod 文本不掉链子的原因，也是为什么 `{=Key}原文` 里的原文部分不能写空。

第二个场景是**读语言文件**：想知道游戏里已有的 `{=Key}` 有哪些、某个键在中文里实际显示成什么、或者自己的物品描述为什么在德语下串行了，这时候需要 `MBTextManager` 与语言文件本身，而不是改代码。

## 已手写的页面

- [TextObject](./TextObject) — 带参数的本地化字符串容器：`Value` 是 `{=key}原文`，`Attributes` 存 `{key?}` 位置的替换变量，`ToString()` 走 `MBTextManager` 解析成可显示字符串。

它是本桶目前唯一的手写页，但它也是全站被引用最多的类之一：[campaign](../campaign/Hero) / [Settlement](../campaign/Settlement) 的显示名、[core-extra](../core-extra/Game) 里的文本管理器、`InformationManager` 的消息参数类型，走的都是 `TextObject`。

## 尚未撰写的部分

程序集里 21 个公开类型，只有 `TextObject` 有页面，**还有 20 个没有页面**。按职责分三组：

- **解析入口（最该先补）**：`MBTextManager` —— `TextObject.ToString()` 最终调到的那个类，键查询、变量替换、语言切换都在这里；`MBTextModel` 与 `SaveableLocalizationTypeDefiner` —— 前者是语言文件的内存表示，后者把它登记进存档定义表。
- **各语言文本处理器**：`LanguageSpecificTextProcessor`、`TextProcessingContext`、`TextGrammarProcessor`、`DefaultTextProcessor`、`EnglishTextProcessor`、`FrenchTextProcessor`、`GermanTextProcessor`、`ItalianTextProcessor`、`PolishTextProcessor`、`RussianTextProcessor`、`SpanishTextProcessor`、`TurkishTextProcessor`。这些是按语言分支的语法后处理（比如土耳其语的大小写与 i 问题），只在排查「某个语言下文本变形不对」时才需要读。
- **时间与语音**：`DateRange` —— 复数/日期区间的语法规则载体，`{plural}...{plural:one}...{plural:other}` 这类写法由它驱动；`VoiceObject`、`LocalizedVoiceManager`、`LocalizedTextManager` —— 语音线路径，一般用不上。
- **杂项**：`LocalizationException` —— 语言文件或键格式出错时抛的异常。

要确认某个类型实际落在哪个桶，见 [模块地图](../../architecture/module-map)。

## 导航

- ↑ 上一级：[API 参考](../)
- ↑↑ 语言根：[zh](../../)
- ↑↑↑ 版本首页：v1.4.6
- ↔ 兄弟桶：[save-system](../save-system/SaveManager)（`TextObject` 也参与存档） · [core-extra](../core-extra/InformationManager)（消息通道）
- ↔ 跨版本：[版本总览](../../../../versions/)