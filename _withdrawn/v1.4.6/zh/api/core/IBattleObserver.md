---
title: "IBattleObserver"
description: "IBattleObserver：TaleWorlds.Core 的 public 接口；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.Core/IBattleObserver.cs。"
---
# IBattleObserver

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IBattleObserver`
**File:** `TaleWorlds.Core/IBattleObserver.cs`

## 概述

IBattleObserver 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IBattleObserver.cs。它是一个 public 接口，继承链为 IBattleObserver。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IBattleObserver 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 IBattleObserver。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IBattleObserver.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TroopNumberChanged` | `void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0);` | 方法 |
| `TroopSideChanged` | `void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character);` | 方法 |
| `HeroSkillIncreased` | `void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill);` | 方法 |
| `BattleResultsReady` | `void BattleResultsReady();` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
