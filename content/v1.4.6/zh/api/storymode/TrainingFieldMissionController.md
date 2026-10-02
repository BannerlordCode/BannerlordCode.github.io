---
title: "TrainingFieldMissionController"
description: "TrainingFieldMissionController：StoryMode 的 public 类，继承 MissionLogic；公开成员 17 个（方法 8、属性 5、字段 0）。源文件 StoryMode/Missions/TrainingFieldMissionController.cs。"
---
# TrainingFieldMissionController

**Namespace:** `StoryMode.Missions`
**Module:** `StoryMode`
**Type:** `public class TrainingFieldMissionController : MissionLogic`
**File:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## 概述

TrainingFieldMissionController 位于 StoryMode 模块，源文件 StoryMode/Missions/TrainingFieldMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 TrainingFieldMissionController → MissionLogic。public/protected 成员共 17 个：8 方法、5 属性、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TrainingFieldMissionController 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.Missions），继承链 TrainingFieldMissionController → MissionLogic。成员构成以方法为主（方法 8/17，属性 5/17），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/Missions/TrainingFieldMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialCurrentObjective` | `public TextObject InitialCurrentObjective` | 属性 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `LoadCrossbowForStarting` | `public void LoadCrossbowForStarting()` | 方法 |
| `OnAgentShootMissile` | `public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `TutorialObjective` | `public class TutorialObjective` | 属性 |
| `DelayedAction` | `public readonly struct DelayedAction` | 属性 |
| `MouseObjectives` | `public enum MouseObjectives` | 属性 |
| `ObjectivePerformingType` | `public enum ObjectivePerformingType` | 属性 |
| `TutorialObjective` | `public class TutorialObjective` | 嵌套类型 |
| `DelayedAction` | `public readonly struct DelayedAction` | 嵌套类型 |
| `MouseObjectives` | `public enum MouseObjectives` | 嵌套类型 |
| `ObjectivePerformingType` | `public enum ObjectivePerformingType` | 嵌套类型 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 StoryModeMissions](../StoryModeMissions)
