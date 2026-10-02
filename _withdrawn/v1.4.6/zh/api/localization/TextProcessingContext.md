---
title: "TextProcessingContext"
description: "TextProcessingContext：TaleWorlds.Localization.TextProcessor 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 localization。源文件 TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextProcessingContext

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `public class TextProcessingContext`
**File:** `TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## 概述

TextProcessingContext 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs。它是一个 public 类，继承链为 TextProcessingContext。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextProcessingContext 落在 canonical 桶 `localization`（命中规则 `rule:TaleWorlds.Localization`），命名空间 `TaleWorlds.Localization.TextProcessor`，继承链 TextProcessingContext。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetFunction` | `public void SetFunction(string functionName, MBTextModel functionBody)` | 方法 |
| `ResetFunctions` | `public void ResetFunctions()` | 方法 |
| `GetFunctionBody` | `public MBTextModel GetFunctionBody(string functionName)` | 方法 |
| `GetFunctionParam` | `public TextObject GetFunctionParam(string rawValue)` | 方法 |
| `GetFunctionParamWithoutEvaluate` | `public TextObject GetFunctionParamWithoutEvaluate(string rawValue)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DefaultTextProcessor](../DefaultTextProcessor/)
- [同命名空间 LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/)
- [同命名空间 MBTextModel](../MBTextModel/)
- [同命名空间 TextGrammarProcessor](../TextGrammarProcessor/)
