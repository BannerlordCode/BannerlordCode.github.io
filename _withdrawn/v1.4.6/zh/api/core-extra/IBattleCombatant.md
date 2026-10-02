---
title: "IBattleCombatant"
description: "IBattleCombatant：TaleWorlds.Core 的 public 接口；公开成员 8 个（方法 2、属性 6、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/IBattleCombatant.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBattleCombatant

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IBattleCombatant`
**File:** `TaleWorlds.Core/IBattleCombatant.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

IBattleCombatant 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IBattleCombatant.cs。它是一个 public 接口，继承链为 IBattleCombatant。public/protected 成员共 8 个：2 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IBattleCombatant 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 IBattleCombatant。成员构成以属性为主（属性 6/8，方法 2/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IBattleCombatant.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `TextObject Name` | 属性 |
| `Side` | `BattleSideEnum Side` | 属性 |
| `BasicCulture` | `BasicCultureObject BasicCulture` | 属性 |
| `General` | `BasicCharacterObject General` | 属性 |
| `uint>PrimaryColorPair` | `Tuple<uint, uint>PrimaryColorPair` | 属性 |
| `Banner` | `Banner Banner` | 属性 |
| `GetTacticsSkillAmount` | `int GetTacticsSkillAmount();` | 方法 |
| `IsUnderPlayersCommand` | `bool IsUnderPlayersCommand(BattleSideEnum playerSide);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
