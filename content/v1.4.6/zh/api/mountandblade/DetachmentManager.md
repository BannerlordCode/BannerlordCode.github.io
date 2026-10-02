---
title: "DetachmentManager"
description: "DetachmentManager：TaleWorlds.MountAndBlade 的 public 类；公开成员 18 个（方法 16、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/DetachmentManager.cs。"
---
# DetachmentManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DetachmentManager`
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## 概述

DetachmentManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DetachmentManager.cs。它是一个 public 类，继承链为 DetachmentManager。public/protected 成员共 18 个：16 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DetachmentManager 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DetachmentManager。成员构成以方法为主（方法 16/18，属性 1/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DetachmentManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DetachmentData>>Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>>Detachments` | 属性 |
| `DetachmentManager` | `public DetachmentManager(Team team)` | 构造函数 |
| `Clear` | `public void Clear()` | 方法 |
| `ContainsDetachment` | `public bool ContainsDetachment(IDetachment detachment)` | 方法 |
| `MakeDetachment` | `public void MakeDetachment(IDetachment detachment)` | 方法 |
| `DestroyDetachment` | `public void DestroyDetachment(IDetachment destroyedDetachment)` | 方法 |
| `OnFormationJoinDetachment` | `public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)` | 方法 |
| `OnFormationLeaveDetachment` | `public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)` | 方法 |
| `TickDetachments` | `public void TickDetachments()` | 方法 |
| `TickAgent` | `public void TickAgent(Agent agent)` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `RemoveScoresOfAgentFromDetachments` | `public void RemoveScoresOfAgentFromDetachments(Agent agent)` | 方法 |
| `RemoveScoresOfAgentFromDetachment` | `public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)` | 方法 |
| `AddAgentAsMovingToDetachment` | `public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)` | 方法 |
| `RemoveAgentAsMovingToDetachment` | `public void RemoveAgentAsMovingToDetachment(Agent agent)` | 方法 |
| `AddAgentAsDefendingToDetachment` | `public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)` | 方法 |
| `RemoveAgentAsDefendingToDetachment` | `public void RemoveAgentAsDefendingToDetachment(Agent agent)` | 方法 |
| `AssertDetachment` | `public void AssertDetachment(Team team, IDetachment detachment)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
