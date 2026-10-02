---
title: "TacticComponent"
description: "TacticComponent：TaleWorlds.MountAndBlade 的 public 类；公开成员 30 个（方法 22、属性 4、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/TacticComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

TacticComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TacticComponent.cs。它是一个 public 类（abstract），继承链为 TacticComponent。public/protected 成员共 30 个：22 方法、4 属性、3 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TacticComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 TacticComponent。成员构成以方法为主（方法 22/30，属性 4/30），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TacticComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Team` | `public Team Team` | 属性 |
| `MBList` | `protected MBList<Formation>FormationsIncludingSpecialAndEmpty` | 属性 |
| `MBList` | `protected MBList<Formation>FormationsIncludingEmpty` | 属性 |
| `TacticComponent` | `protected TacticComponent(Team team)` | 构造函数 |
| `OnCancel` | `protected internal virtual void OnCancel()` | 方法 |
| `OnApply` | `protected internal virtual void OnApply()` | 方法 |
| `TickOccasionally` | `public virtual void TickOccasionally()` | 方法 |
| `GetFormationGroupEffectivenessOverOrder` | `protected static float GetFormationGroupEffectivenessOverOrder(IEnumerable<Formation>formationGroup, OrderType orderType, IOrderable targetObject = null)` | 方法 |
| `GetFormationEffectivenessOverOrder` | `protected static float GetFormationEffectivenessOverOrder(Formation formation, OrderType orderType, IOrderable targetObject = null)` | 方法 |
| `DebugTick` | `protected internal virtual void DebugTick(float dt)` | 方法 |
| `List` | `protected List<Formation>ConsolidateFormations(List<Formation>formationsToBeConsolidated, int neededCount)` | 方法 |
| `CalculateNotEngagingTacticalAdvantage` | `protected static float CalculateNotEngagingTacticalAdvantage(TeamQuerySystem team)` | 方法 |
| `SplitFormationClassIntoGivenNumber` | `protected void SplitFormationClassIntoGivenNumber(Func<Formation, bool>formationClass, int count)` | 方法 |
| `CheckAndSetAvailableFormationsChanged` | `protected virtual bool CheckAndSetAvailableFormationsChanged()` | 方法 |
| `AreFormationsCreated` | `protected bool AreFormationsCreated` | 属性 |
| `ResetTactic` | `public void ResetTactic()` | 方法 |
| `AssignTacticFormations1121` | `protected void AssignTacticFormations1121()` | 方法 |
| `List` | `protected static List<Formation>ChooseAndSortByPriority(IEnumerable<Formation>formations, Func<Formation, bool>isEligible, Func<Formation, bool>isPrioritized, Func<Formation, float>score)` | 方法 |
| `ManageFormationCounts` | `protected virtual void ManageFormationCounts()` | 方法 |
| `ManageFormationCounts` | `protected void ManageFormationCounts(int infantryCount, int rangedCount, int cavalryCount, int rangedCavalryCount)` | 方法 |
| `StopUsingAllMachines` | `protected virtual void StopUsingAllMachines()` | 方法 |
| `StopUsingAllRangedSiegeWeapons` | `protected void StopUsingAllRangedSiegeWeapons()` | 方法 |
| `SoundTacticalHorn` | `protected void SoundTacticalHorn(int soundCode)` | 方法 |
| `SetDefaultBehaviorWeights` | `public static void SetDefaultBehaviorWeights(Formation f)` | 方法 |
| `GetTacticWeight` | `protected internal virtual float GetTacticWeight()` | 方法 |
| `CheckAndDetermineFormation` | `protected bool CheckAndDetermineFormation(ref Formation formation, Func<Formation, bool>isEligible)` | 方法 |
| `ResetTacticalPositions` | `protected internal virtual bool ResetTacticalPositions()` | 方法 |
| `MoveHornSoundIndex` | `public static readonly int MoveHornSoundIndex` | 字段 |
| `AttackHornSoundIndex` | `public static readonly int AttackHornSoundIndex` | 字段 |
| `RetreatHornSoundIndex` | `public static readonly int RetreatHornSoundIndex` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
