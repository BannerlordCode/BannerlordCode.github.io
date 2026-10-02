---
title: "GameTextManager"
description: "GameTextManager：TaleWorlds.Core 的 public 类；公开成员 10 个（方法 7、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/GameTextManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTextManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class GameTextManager`
**File:** `TaleWorlds.Core/GameTextManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

GameTextManager 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/GameTextManager.cs。它是一个 public 类，继承链为 GameTextManager。public/protected 成员共 10 个：7 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameTextManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 GameTextManager。成员构成以方法为主（方法 7/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/GameTextManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameTextManager` | `public GameTextManager()` | 构造函数 |
| `GetGameText` | `public GameText GetGameText(string id)` | 方法 |
| `AddGameText` | `public GameText AddGameText(string id)` | 方法 |
| `TryGetText` | `public bool TryGetText(string id, string variation, out TextObject text)` | 方法 |
| `FindText` | `public TextObject FindText(string id, string variation = null)` | 方法 |
| `IEnumerable` | `public IEnumerable<TextObject>FindAllTextVariations(string id)` | 方法 |
| `LoadGameTexts` | `public void LoadGameTexts()` | 方法 |
| `LoadDefaultTexts` | `public void LoadDefaultTexts()` | 方法 |
| `ChoiceTag` | `public struct ChoiceTag` | 属性 |
| `ChoiceTag` | `public struct ChoiceTag` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
