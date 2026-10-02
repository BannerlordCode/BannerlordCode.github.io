---
title: "ClimbingMachine"
description: "ClimbingMachine：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMachine；公开成员 8 个（方法 7、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs。"
---
# ClimbingMachine

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClimbingMachine : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs`

## 概述

ClimbingMachine 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs。它是一个 public 类，实现/继承 UsableMachine，继承链为 ClimbingMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 8 个：7 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClimbingMachine 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Objects.Usables），继承链 ClimbingMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 7/8，属性 1/8），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SinkingReferenceOffset` | `public override float SinkingReferenceOffset` | 属性 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnMissionEnded` | `public override void OnMissionEnded()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMachine](../UsableMachine)
- [同命名空间 AmmoBarrelBase](../AmmoBarrelBase)
- [同命名空间 ArrowBarrel](../ArrowBarrel)
- [同命名空间 EventTriggeringUsableMachine](../EventTriggeringUsableMachine)
- [同命名空间 JavelinBarrel](../JavelinBarrel)
