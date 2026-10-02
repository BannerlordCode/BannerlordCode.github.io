---
title: "TurkishTextProcessor"
description: "TurkishTextProcessor：TaleWorlds.Localization 的 public 类，继承 LanguageSpecificTextProcessor；公开成员 4 个（方法 2、属性 2、字段 0）。源文件 TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs。"
---
# TurkishTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`
**Module:** `TaleWorlds.Localization`
**Type:** `public class TurkishTextProcessor : LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs`

## 概述

TurkishTextProcessor 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs。它是一个 public 类，实现/继承 LanguageSpecificTextProcessor，继承链为 TurkishTextProcessor → LanguageSpecificTextProcessor。public/protected 成员共 4 个：2 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TurkishTextProcessor 是 TaleWorlds.Localization 的顶层类型，命名空间与模块目录不同（TaleWorlds.Localization.TextProcessor.LanguageProcessors），继承链 TurkishTextProcessor → LanguageSpecificTextProcessor。成员构成以方法为主（方法 2/4，属性 2/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<string>LinkList` | 属性 |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | 方法 |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage` | 属性 |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | 方法 |

## 参见

- [↑ localization 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor)
- [同命名空间 EnglishTextProcessor](../EnglishTextProcessor)
- [同命名空间 FrenchTextProcessor](../FrenchTextProcessor)
- [同命名空间 GermanTextProcessor](../GermanTextProcessor)
- [同命名空间 ItalianTextProcessor](../ItalianTextProcessor)
