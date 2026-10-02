---
title: "ExplainedNumber"
description: "ExplainedNumber：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 19 个（方法 9、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/ExplainedNumber.cs。"
---
# ExplainedNumber

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct ExplainedNumber`
**File:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## 概述

ExplainedNumber 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ExplainedNumber.cs。它是一个 public 结构体，继承链为 ExplainedNumber。public/protected 成员共 19 个：9 方法、7 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ExplainedNumber 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 ExplainedNumber。成员构成以方法为主（方法 9/19，属性 7/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ExplainedNumber.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResultNumber` | `public float ResultNumber` | 属性 |
| `RoundedResultNumber` | `public int RoundedResultNumber` | 属性 |
| `BaseNumber` | `public float BaseNumber` | 属性 |
| `IncludeDescriptions` | `public bool IncludeDescriptions` | 属性 |
| `LimitMinValue` | `public float LimitMinValue` | 属性 |
| `LimitMaxValue` | `public float LimitMaxValue` | 属性 |
| `SumOfFactors` | `public float SumOfFactors` | 属性 |
| `ExplainedNumber` | `public ExplainedNumber(float baseNumber = 0f, bool includeDescriptions = false, TextObject baseText = null)` | 构造函数 |
| `GetExplanations` | `public string GetExplanations()` | 方法 |
| `float>>GetLines` | `public List<ValueTuple<string, float>>GetLines()` | 方法 |
| `AddFromExplainedNumber` | `public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)` | 方法 |
| `SubtractFromExplainedNumber` | `public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)` | 方法 |
| `Add` | `public void Add(float value, TextObject description = null, TextObject variable = null)` | 方法 |
| `AddFactor` | `public void AddFactor(float value, TextObject description = null)` | 方法 |
| `LimitMin` | `public void LimitMin(float minValue)` | 方法 |
| `LimitMax` | `public void LimitMax(float maxValue, TextObject description = null)` | 方法 |
| `Clamp` | `public void Clamp(float minValue, float maxValue)` | 方法 |
| `OperationType` | `public enum OperationType` | 嵌套类型 |
| `ExplanationLine` | `public readonly struct ExplanationLine` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
