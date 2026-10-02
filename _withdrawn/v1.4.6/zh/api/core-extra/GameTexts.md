---
title: "GameTexts"
description: "GameTexts：TaleWorlds.Core 的 public 类；公开成员 12 个（方法 10、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/GameTexts.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTexts

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class GameTexts`
**File:** `TaleWorlds.Core/GameTexts.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

GameTexts 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameTexts.cs。它是一个 public 类，继承链为 GameTexts。public/protected 成员共 12 个：10 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameTexts 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 GameTexts。成员构成以方法为主（方法 10/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameTexts.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public static void Initialize(GameTextManager gameTextManager)` | 方法 |
| `FindText` | `public static TextObject FindText(string id, string variation = null)` | 方法 |
| `TryGetText` | `public static bool TryGetText(string id, out TextObject textObject, string variation = null)` | 方法 |
| `IEnumerable` | `public static IEnumerable<TextObject>FindAllTextVariations(string id)` | 方法 |
| `SetVariable` | `public static void SetVariable(string variableName, string content)` | 方法 |
| `SetVariable` | `public static void SetVariable(string variableName, float content)` | 方法 |
| `SetVariable` | `public static void SetVariable(string variableName, int content)` | 方法 |
| `SetVariable` | `public static void SetVariable(string variableName, TextObject content)` | 方法 |
| `ClearInstance` | `public static void ClearInstance()` | 方法 |
| `AddGameTextWithVariation` | `public static GameTexts.GameTextHelper AddGameTextWithVariation(string id)` | 方法 |
| `GameTextHelper` | `public class GameTextHelper` | 属性 |
| `GameTextHelper` | `public class GameTextHelper` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
