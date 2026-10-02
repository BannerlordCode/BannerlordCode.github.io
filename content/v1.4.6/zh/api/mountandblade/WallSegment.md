---
title: "WallSegment"
description: "WallSegment：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject、IPointDefendable；公开成员 17 个（方法 6、属性 10、字段 0）。源文件 TaleWorlds.MountAndBlade/WallSegment.cs。"
---
# WallSegment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WallSegment : SynchedMissionObject, IPointDefendable, ICastleKeyPosition`
**File:** `TaleWorlds.MountAndBlade/WallSegment.cs`

## 概述

WallSegment 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/WallSegment.cs。它是一个 public 类，实现/继承 SynchedMissionObject、IPointDefendable、ICastleKeyPosition，继承链为 WallSegment → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 17 个：6 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WallSegment 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 WallSegment → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以属性为主（属性 10/17，方法 6/17），对外主要以状态读取接口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/WallSegment.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MiddlePosition` | `public TacticalPosition MiddlePosition` | 属性 |
| `WaitPosition` | `public TacticalPosition WaitPosition` | 属性 |
| `AttackerWaitPosition` | `public TacticalPosition AttackerWaitPosition` | 属性 |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon` | 属性 |
| `IEnumerable` | `public IEnumerable<DefencePoint>DefencePoints` | 属性 |
| `IsBreachedWall` | `public bool IsBreachedWall` | 属性 |
| `MiddleFrame` | `public WorldFrame MiddleFrame` | 属性 |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame` | 属性 |
| `AttackerWaitFrame` | `public WorldFrame AttackerWaitFrame` | 属性 |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide` | 属性 |
| `GetPosition` | `public Vec3 GetPosition()` | 方法 |
| `WallSegment` | `public WallSegment()` | 构造函数 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `MovesEntity` | `protected internal override bool MovesEntity()` | 方法 |
| `OnChooseUsedWallSegment` | `public void OnChooseUsedWallSegment(bool isBroken)` | 方法 |
| `OnEditorValidate` | `protected internal override void OnEditorValidate()` | 方法 |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject)
- [基类/接口 IPointDefendable](../IPointDefendable)
- [基类/接口 ICastleKeyPosition](../ICastleKeyPosition)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
