---
title: "UsablePlace"
description: "UsablePlace：SandBox 的 public 类，继承 UsableMachine；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 SandBox/Objects/Usables/UsablePlace.cs。"
---
# UsablePlace

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class UsablePlace : UsableMachine`
**File:** `SandBox/Objects/Usables/UsablePlace.cs`

## 概述

UsablePlace 位于 SandBox 模块，源文件 SandBox/Objects/Usables/UsablePlace.cs。它是一个 public 类，实现/继承 UsableMachine，继承链为 UsablePlace → UsableMachine。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UsablePlace 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects.Usables），继承链 UsablePlace → UsableMachine。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 UsableMachine 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/Usables/UsablePlace.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | 方法 |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 Chair](../Chair)
- [同命名空间 CheckpointUsePoint](../CheckpointUsePoint)
- [同命名空间 DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [同命名空间 MusicianGroup](../MusicianGroup)
