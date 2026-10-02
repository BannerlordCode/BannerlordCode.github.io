---
title: "GameText"
description: "GameText：TaleWorlds.Core 的 public 类；公开成员 8 个（方法 3、属性 4、字段 0）。源文件 TaleWorlds.Core/GameText.cs。"
---
# GameText

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class GameText`
**File:** `TaleWorlds.Core/GameText.cs`

## 概述

GameText 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameText.cs。它是一个 public 类，继承链为 GameText。public/protected 成员共 8 个：3 方法、4 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameText 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 GameText。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameText.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | 属性 |
| `IEnumerable` | `public IEnumerable<GameText.GameTextVariation>Variations` | 属性 |
| `DefaultText` | `public TextObject DefaultText` | 属性 |
| `AddVariationWithId` | `public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag>choiceTags)` | 方法 |
| `SetVariationWithId` | `public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag>choiceTags)` | 方法 |
| `AddVariation` | `public void AddVariation(string text, params object[]propertiesAndWeights)` | 方法 |
| `GameTextVariation` | `public struct GameTextVariation` | 属性 |
| `GameTextVariation` | `public struct GameTextVariation` | 嵌套类型 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
