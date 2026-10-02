---
title: "PolishTextProcessor"
description: "PolishTextProcessor：TaleWorlds.Localization.TextProcessor.LanguageProcessors 的 public 类，继承 LanguageSpecificTextProcessor；公开成员 5 个（方法 4、属性 1、字段 0）。canonical 桶 localization。源文件 TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PolishTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`
**Module:** `TaleWorlds.Localization`
**Type:** `public class PolishTextProcessor : LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## 概述

PolishTextProcessor 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs。它是一个 public 类，实现/继承 LanguageSpecificTextProcessor，继承链为 PolishTextProcessor → LanguageSpecificTextProcessor。public/protected 成员共 5 个：4 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PolishTextProcessor 落在 canonical 桶 `localization`（命中规则 `rule:TaleWorlds.Localization`），命名空间 `TaleWorlds.Localization.TextProcessor.LanguageProcessors`，继承链 PolishTextProcessor → LanguageSpecificTextProcessor。成员构成以方法为主（方法 4/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/TextProcessor/LanguageProcessors/PolishTextProcessor.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage` | 属性 |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | 方法 |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | 方法 |
| `string[]GetProcessedNouns` | `public static string[]GetProcessedNouns(string str, string gender, string[]tokens = null)` | 方法 |
| `string[]GetProcessedAdjectives` | `public static string[]GetProcessedAdjectives(string str, string gender, string[]tokens = null)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/)
- [同命名空间 EnglishTextProcessor](../EnglishTextProcessor/)
- [同命名空间 FrenchTextProcessor](../FrenchTextProcessor/)
- [同命名空间 GermanTextProcessor](../GermanTextProcessor/)
- [同命名空间 ItalianTextProcessor](../ItalianTextProcessor/)
