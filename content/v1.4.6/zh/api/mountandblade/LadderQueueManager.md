---
title: "LadderQueueManager"
description: "LadderQueueManager：TaleWorlds.MountAndBlade 的 public 类，继承 MissionObject；公开成员 13 个（方法 12、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/LadderQueueManager.cs。"
---
# LadderQueueManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class LadderQueueManager : MissionObject`
**File:** `TaleWorlds.MountAndBlade/LadderQueueManager.cs`

## 概述

LadderQueueManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/LadderQueueManager.cs。它是一个 public 类，实现/继承 MissionObject，继承链为 LadderQueueManager → MissionObject → ScriptComponentBehavior。public/protected 成员共 13 个：12 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LadderQueueManager 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 LadderQueueManager → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 12/13，属性 1/13），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/LadderQueueManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDeactivated` | `public bool IsDeactivated` | 属性 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `DeactivateImmediate` | `public void DeactivateImmediate()` | 方法 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `Activate` | `public void Activate()` | 方法 |
| `Initialize` | `public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `FlushQueueManager` | `public void FlushQueueManager()` | 方法 |
| `AssignNeighborQueueManager` | `public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)` | 方法 |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionObject](../MissionObject)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
