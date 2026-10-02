---
title: "DefaultTextProcessor"
description: "DefaultTextProcessor：TaleWorlds.Localization 的 public 类，继承 LanguageSpecificTextProcessor；公开成员 3 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs。"
---
# DefaultTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `public class DefaultTextProcessor : LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs`

## 概述

DefaultTextProcessor 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs。它是一个 public 类，实现/继承 LanguageSpecificTextProcessor，继承链为 DefaultTextProcessor → LanguageSpecificTextProcessor。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultTextProcessor 是 TaleWorlds.Localization 的顶层类型，命名空间与模块目录不同（TaleWorlds.Localization.TextProcessor），继承链 DefaultTextProcessor → LanguageSpecificTextProcessor。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/TextProcessor/DefaultTextProcessor.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | 方法 |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage` | 属性 |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | 方法 |

## 参见

- [↑ localization 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor)
- [同命名空间 LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor)
- [同命名空间 MBTextModel](../MBTextModel)
- [同命名空间 TextGrammarProcessor](../TextGrammarProcessor)
- [同命名空间 TextProcessingContext](../TextProcessingContext)
