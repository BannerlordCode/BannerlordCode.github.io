---
title: "MissionPathGenerationLogic"
description: "MissionPathGenerationLogic：SandBox 的 public 类，继承 MissionLogic；公开成员 39 个（方法 6、属性 9、字段 14）。源文件 SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs。"
---
# MissionPathGenerationLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## 概述

MissionPathGenerationLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionPathGenerationLogic → MissionLogic。public/protected 成员共 39 个：6 方法、9 属性、14 字段、1 构造函数、9 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionPathGenerationLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 MissionPathGenerationLogic → MissionLogic。成员构成以属性为主（属性 9/39，方法 6/39），对外主要以状态读取接口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionPathGenerationLogic` | `public MissionPathGenerationLogic(CharacterObject defaultDisguiseCharacter)` | 构造函数 |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `InitializeBehavior` | `public void InitializeBehavior()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `List` | `public List<MissionPathGenerationLogic.PointOfInterestScorePair>GetAllPossiblePaths()` | 方法 |
| `IsOnLeftSide` | `public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)` | 方法 |
| `MinimumPathDistance` | `public static int MinimumPathDistance` | 字段 |
| `MaximumPathDistance` | `public static int MaximumPathDistance` | 字段 |
| `MinimumDistanceToBlendPointToVisitPoint` | `public float MinimumDistanceToBlendPointToVisitPoint` | 字段 |
| `MinimumVisitPointCountInPath` | `public static int MinimumVisitPointCountInPath` | 字段 |
| `MaximumVisitPointCountInPath` | `public static int MaximumVisitPointCountInPath` | 字段 |
| `MinimumCrossRoadCountInPath` | `public static int MinimumCrossRoadCountInPath` | 字段 |
| `MaximumCrossRoadCountInPath` | `public static int MaximumCrossRoadCountInPath` | 字段 |
| `MinimumStandingGuardCountInPath` | `public static int MinimumStandingGuardCountInPath` | 字段 |
| `MaximumStandingGuardCountInPath` | `public static int MaximumStandingGuardCountInPath` | 字段 |
| `MinimumGuardSpawnPathRatio` | `public static float MinimumGuardSpawnPathRatio` | 字段 |
| `CrossRoadMaximumDistance` | `public int CrossRoadMaximumDistance` | 字段 |
| `CrossRoadMinimumDistance` | `public int CrossRoadMinimumDistance` | 字段 |
| `MinimumVisitPointDistance` | `public int MinimumVisitPointDistance` | 字段 |
| `MaximumVisitPointDistance` | `public int MaximumVisitPointDistance` | 字段 |
| `PointOfInterests` | `public enum PointOfInterests` | 属性 |
| `UsableMachineData` | `public class UsableMachineData` | 属性 |
| `NavigationPathData` | `public class NavigationPathData` | 属性 |
| `PointOfInterestBaseData` | `public abstract class PointOfInterestBaseData` | 属性 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class LookBackPointData : MissionPathGenerationLogic.PointOfInterestBaseData` | 属性 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class VisitPointNodeScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | 属性 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class CrossRoadScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | 属性 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class StandingGuardSpawnData : MissionPathGenerationLogic.PointOfInterestBaseData` | 属性 |
| `PointOfInterestScorePair` | `public class PointOfInterestScorePair` | 属性 |
| `PointOfInterests` | `public enum PointOfInterests` | 嵌套类型 |
| `UsableMachineData` | `public class UsableMachineData` | 嵌套类型 |
| `NavigationPathData` | `public class NavigationPathData` | 嵌套类型 |
| `PointOfInterestBaseData` | `public abstract class PointOfInterestBaseData` | 嵌套类型 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class LookBackPointData : MissionPathGenerationLogic.PointOfInterestBaseData` | 嵌套类型 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class VisitPointNodeScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | 嵌套类型 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class CrossRoadScoreData : MissionPathGenerationLogic.PointOfInterestBaseData` | 嵌套类型 |
| `MissionPathGenerationLogic.PointOfInterestBaseData` | `public class StandingGuardSpawnData : MissionPathGenerationLogic.PointOfInterestBaseData` | 嵌套类型 |
| `PointOfInterestScorePair` | `public class PointOfInterestScorePair` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
