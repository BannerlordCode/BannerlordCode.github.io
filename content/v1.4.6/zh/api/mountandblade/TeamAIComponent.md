---
title: "TeamAIComponent"
description: "TeamAIComponent：TaleWorlds.MountAndBlade 的 public 类；公开成员 32 个（方法 23、属性 5、字段 1）。源文件 TaleWorlds.MountAndBlade/TeamAIComponent.cs。"
---
# TeamAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## 概述

TeamAIComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TeamAIComponent.cs。它是一个 public 类（abstract），继承链为 TeamAIComponent。public/protected 成员共 32 个：23 方法、5 属性、1 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TeamAIComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TeamAIComponent。成员构成以方法为主（方法 23/32，属性 5/32），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TeamAIComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<StrategicArea>StrategicAreas` | 属性 |
| `HasStrategicAreas` | `public bool HasStrategicAreas` | 属性 |
| `IsDefenseApplicable` | `public bool IsDefenseApplicable` | 属性 |
| `GetIsFirstTacticChosen` | `public bool GetIsFirstTacticChosen` | 属性 |
| `TeamAIComponent` | `protected TeamAIComponent(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime)` | 构造函数 |
| `AddStrategicArea` | `public void AddStrategicArea(StrategicArea strategicArea)` | 方法 |
| `RemoveStrategicArea` | `public void RemoveStrategicArea(StrategicArea strategicArea)` | 方法 |
| `RemoveAllStrategicAreas` | `public void RemoveAllStrategicAreas()` | 方法 |
| `AddTacticOption` | `public void AddTacticOption(TacticComponent tacticOption)` | 方法 |
| `RemoveTacticOption` | `public void RemoveTacticOption(Type tacticType)` | 方法 |
| `ClearTacticOptions` | `public void ClearTacticOptions()` | 方法 |
| `AssertTeam` | `public void AssertTeam(Team team)` | 方法 |
| `NotifyTacticalDecision` | `public void NotifyTacticalDecision(in TacticalDecision decision)` | 方法 |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | 方法 |
| `OnFormationFrameChanged` | `public virtual void OnFormationFrameChanged(Agent agent, bool isFrameEnabled, WorldPosition frame)` | 方法 |
| `OnMissionEnded` | `public virtual void OnMissionEnded()` | 方法 |
| `ResetTacticalPositions` | `public void ResetTacticalPositions()` | 方法 |
| `ResetTactic` | `public void ResetTactic(bool keepCurrentTactic = true)` | 方法 |
| `Tick` | `protected internal virtual void Tick(float dt)` | 方法 |
| `CheckIsDefenseApplicable` | `public void CheckIsDefenseApplicable()` | 方法 |
| `OnTacticAppliedForFirstTime` | `public void OnTacticAppliedForFirstTime()` | 方法 |
| `TickOccasionally` | `public virtual void TickOccasionally()` | 方法 |
| `IsCurrentTactic` | `public bool IsCurrentTactic(TacticComponent tactic)` | 方法 |
| `DebugTick` | `protected virtual void DebugTick(float dt)` | 方法 |
| `OnUnitAddedToFormationForTheFirstTime` | `public abstract void OnUnitAddedToFormationForTheFirstTime(Formation formation);` | 方法 |
| `CreateMissionSpecificBehaviors` | `protected internal virtual void CreateMissionSpecificBehaviors()` | 方法 |
| `InitializeDetachments` | `protected internal virtual void InitializeDetachments(Mission mission)` | 方法 |
| `BattleTokenForceSize` | `public const int BattleTokenForceSize` | 字段 |
| `TacticOption` | `protected class TacticOption` | 属性 |
| `TacticalDecisionDelegate` | `public delegate void TacticalDecisionDelegate(in TacticalDecision decision);` | 方法 |
| `TacticOption` | `protected class TacticOption` | 嵌套类型 |
| `TacticalDecisionDelegate` | `public delegate void TacticalDecisionDelegate(in TacticalDecision decision)` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
