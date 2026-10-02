---
title: "CheckpointUsePoint"
description: "CheckpointUsePoint：SandBox 的 public 类，继承 UsableMachine；公开成员 7 个（方法 5、属性 1、字段 1）。源文件 SandBox/Objects/Usables/CheckpointUsePoint.cs。"
---
# CheckpointUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class CheckpointUsePoint : UsableMachine`
**File:** `SandBox/Objects/Usables/CheckpointUsePoint.cs`

## 概述

CheckpointUsePoint 位于 SandBox 模块，源文件 SandBox/Objects/Usables/CheckpointUsePoint.cs。它是一个 public 类，实现/继承 UsableMachine，继承链为 CheckpointUsePoint → UsableMachine。public/protected 成员共 7 个：5 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CheckpointUsePoint 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects.Usables），继承链 CheckpointUsePoint → UsableMachine。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。继承链上的 UsableMachine 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/Usables/CheckpointUsePoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnPoint` | `public GameEntity SpawnPoint` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `CheckpointSpawnPointTag` | `public const string CheckpointSpawnPointTag` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 Chair](../Chair)
- [同命名空间 DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [同命名空间 MusicianGroup](../MusicianGroup)
- [同命名空间 Passage](../Passage)
