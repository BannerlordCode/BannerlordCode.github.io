---
title: "StringHelpers"
description: "字符串形态变换与对话文本变量写入的静态工具集：驼峰/蛇形转换、变音符号剥离、把游戏对象写进 ConversationSentence 变量。"
---

# StringHelpers

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class StringHelpers`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/StringHelpers.cs`

## 概述

本类分两族——「字符串形态变换」（`SplitCamelCase` / `CamelCaseToSnakeCase` / `RemoveDiacritics`，纯文本、与游戏无关）和「把对象写进对话文本变量」（其余 5 个，服务于 `ConversationSentence` 与 `MBTextManager` 的文本变量机制）。后者是「把游戏对象翻译成对话能用的变量」，不是通用的字符串工具。

## 心智模型

把 StringHelpers 想成对话系统的「变量填充器」：`ConversationSentence` 和 `MBTextManager` 维护一套文本变量表，本类负责把 `Settlement`、`CharacterObject`、`EffectIncrementType` 等游戏对象翻译成这套表里的变量。关键设计决策是**三条写入路径的优先级**——`isRepeatable` > `parent` > 全局——这意味着同时传 `parent` 与 `isRepeatable: true` 时 `parent` 被**静默忽略**。`SetCharacterProperties` 与 `SetSettlementProperties` 的签名不对称（一个返回 `TextObject`、一个返回 `void`；一个有 `isRepeatable` 分支、一个没有），选错会拿不到返回值或漏掉 repeatable 路径。

## 怎么用

### 怎么拿到它

静态类，直接 `StringHelpers.方法名(...)` 调用。

### 典型用法

- 要把驼峰命名转成可读文本时，用 `SplitCamelCase(text)`。
- 要把驼峰命名转成蛇形命名时，用 `CamelCaseToSnakeCase(text)`。
- 要剥离变音符号时，用 `RemoveDiacritics(text)`。
- 要把聚落写进对话文本变量时，用 `SetSettlementProperties(tag, settlement, parent, isRepeatable)`。
- 要把角色写进对话文本变量时，用 `SetCharacterProperties(tag, character, parent, includeDetails)`。
- 要把加成值格式化后写进 `TextObject` 时，用 `SetEffectIncrementTypeTextVariable(tag, description, bonus, effectIncrementType)`。

### 最容易踩的坑

- `SetSettlementProperties` 的三条路**优先级是 `isRepeatable` > `parent` > 全局** ⇒ 同时传 `parent` 与 `isRepeatable: true` 时 `parent` 被**静默忽略**。
- `SetCharacterProperties` 与 `SetSettlementProperties` **签名不对称**：前者**返回 `TextObject`**、**没有 `isRepeatable` 分支**；后者**返回 `void`**、**有 `isRepeatable` 分支**。选错会拿不到返回值或漏掉 repeatable 路径。
- `SetEffectIncrementTypeTextVariable` 的 `bonus == 0` 时既不加 `+` 也不加 `-`；`text` 来自 `string.Format` **永远非 null** ⇒ 第 123 行的 `?? ""` 是**死代码**。
- `CamelCaseToSnakeCase` 每次调用都 `new Regex(...)`，**没有缓存也没有 `RegexOptions.Compiled`** ⇒ 在循环里调用会有可观开销。

## 关键成员

- `public static string SplitCamelCase(string text)` —— 在小写字母后的大写、或「非开头的大写+小写」前插入空格，把 `CamelCase` 拆成 `Camel Case`。`StringHelpers.cs:18`
- `public static string CamelCaseToSnakeCase(string camelCaseString)` —— 用正则把驼峰命名转成蛇形命名再 `.ToLower()`。每次调用都 `new Regex`，没有缓存。`StringHelpers.cs:24`
- `public static void SetSettlementProperties(string tag, Settlement settlement, TextObject parent = null, bool isRepeatable = false)` —— 造空 `TextObject` 写入 `NAME` 与 `LINK`，按 `isRepeatable` > `parent` > 全局三条路之一写变量。`StringHelpers.cs:32`
- `public static void SetRepeatableCharacterProperties(string tag, CharacterObject character, bool includeDetails = false)` —— `GetCharacterProperties` 后写进 `ConversationSentence.SelectedRepeatLine`。**只有** repeatable 一条路，没有 `parent` 参数。`StringHelpers.cs:51`
- `private static TextObject GetCharacterProperties(CharacterObject character, bool includeDetails)` —— 私有，不对外。造带 `NAME` / `GENDER` / `LINK` 的 `TextObject`；`IsHero` 时写 `FIRSTNAME`；`includeDetails` 时写 `AGE` / `FACTION` / `CLAN`。`StringHelpers.cs:58`
- `public static TextObject SetCharacterProperties(string tag, CharacterObject character, TextObject parent = null, bool includeDetails = false)` —— 只有两条路（`parent != null` → `parent.SetTextVariable`；否则 `MBTextManager.SetTextVariable`），并且**返回**那个 `TextObject`。`StringHelpers.cs:99`
- `public static void SetEffectIncrementTypeTextVariable(string tag, TextObject description, float bonus, EffectIncrementType effectIncrementType)` —— 把加成值格式化后写进 `description` 的 `tag`：`AddFactor` 时 `bonus * 100f`；`bonus > 0f` 时写 `"+" + text`。`StringHelpers.cs:114`
- `public static string RemoveDiacritics(string originalText)` —— 标准 NFD → 去组合记号 → NFC 的变音符号剥离。`StringHelpers.cs:127`

## 真实示例

```csharp
// 把驼峰命名转成蛇形命名
string snake = StringHelpers.CamelCaseToSnakeCase("MyHeroName");
// 把英雄对象写进对话文本变量
StringHelpers.SetCharacterProperties("hero", Hero.MainHero.CharacterObject);
Debug.Print($"snake={snake}");
```

## 参见

- ↔ [TextObject](../../localization/TextObject) —— 本类好几个方法就是在造/改写 `TextObject` 的变量
- ↔ [LocalizedTextManager](../../localization/LocalizedTextManager) —— `MBTextManager.SetTextVariable` 那套文本变量是怎么被翻成当前语言的

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
