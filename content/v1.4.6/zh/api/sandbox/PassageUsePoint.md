---
title: "PassageUsePoint"
description: "PassageUsePoint：SandBox 的 public 类，继承 StandingPoint；公开成员 19 个（方法 11、属性 6、字段 1）。源文件 SandBox/Objects/PassageUsePoint.cs。"
---
# PassageUsePoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class PassageUsePoint : StandingPoint`
**File:** `SandBox/Objects/PassageUsePoint.cs`

## 概述

PassageUsePoint 位于 SandBox 模块，源文件 SandBox/Objects/PassageUsePoint.cs。它是一个 public 类，实现/继承 StandingPoint，继承链为 PassageUsePoint → StandingPoint。public/protected 成员共 19 个：11 方法、6 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PassageUsePoint 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects），继承链 PassageUsePoint → StandingPoint。成员构成以方法为主（方法 11/19，属性 6/19），对外主要以操作入口暴露。继承链上的 StandingPoint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/PassageUsePoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>MovingAgents` | 属性 |
| `MovingAgent` | `public override Agent MovingAgent` | 属性 |
| `PassageUsePoint` | `public PassageUsePoint()` | 构造函数 |
| `ToLocation` | `public Location ToLocation` | 属性 |
| `HasAIMovingTo` | `public override bool HasAIMovingTo` | 属性 |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType` | 属性 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | 方法 |
| `GetMovingAgentCount` | `public override int GetMovingAgentCount()` | 方法 |
| `GetMovingAgentWithIndex` | `public override Agent GetMovingAgentWithIndex(int index)` | 方法 |
| `AddMovingAgent` | `public override void AddMovingAgent(Agent movingAgent)` | 方法 |
| `RemoveMovingAgent` | `public override void RemoveMovingAgent(Agent movingAgent)` | 方法 |
| `IsAIMovingTo` | `public override bool IsAIMovingTo(Agent agent)` | 方法 |
| `ToLocationId` | `public string ToLocationId` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheckpointArea](../CheckpointArea)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox)
