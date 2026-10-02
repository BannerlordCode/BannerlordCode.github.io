---
title: "HighlightsController"
description: "HighlightsController：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 20 个（方法 14、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade/HighlightsController.cs。"
---
# HighlightsController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class HighlightsController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## 概述

HighlightsController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/HighlightsController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 HighlightsController → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 20 个：14 方法、4 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HighlightsController 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 HighlightsController → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 14/20，属性 4/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/HighlightsController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized` | 属性 |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved` | 属性 |
| `RemoveHighlights` | `public static void RemoveHighlights()` | 方法 |
| `GetHighlightTypeWithId` | `public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `AddHighlightType` | `public static void AddHighlightType(HighlightsController.HighlightType highlightType)` | 方法 |
| `SaveHighlight` | `public void SaveHighlight(HighlightsController.Highlight highlight)` | 方法 |
| `SaveHighlight` | `public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)` | 方法 |
| `CanSaveHighlight` | `public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)` | 方法 |
| `GetPlayerIsLookingAtPositionScore` | `public float GetPlayerIsLookingAtPositionScore(Vec3 position)` | 方法 |
| `CanSeePosition` | `public bool CanSeePosition(Vec3 position)` | 方法 |
| `ShowSummary` | `public void ShowSummary()` | 方法 |
| `HighlightType` | `public struct HighlightType` | 属性 |
| `Highlight` | `public struct Highlight` | 属性 |
| `HighlightType` | `public struct HighlightType` | 嵌套类型 |
| `Highlight` | `public struct Highlight` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionLogic](../MissionLogic)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
