---
title: "DetachmentData"
description: "DetachmentData：TaleWorlds.MountAndBlade 的 public 类；公开成员 6 个（方法 2、属性 1、字段 2）。源文件 TaleWorlds.MountAndBlade/DetachmentData.cs。"
---
# DetachmentData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DetachmentData`
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## 概述

DetachmentData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DetachmentData.cs。它是一个 public 类，继承链为 DetachmentData。public/protected 成员共 6 个：2 方法、1 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DetachmentData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DetachmentData。成员构成以方法为主（方法 2/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DetachmentData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentCount` | `public int AgentCount` | 属性 |
| `IsPrecalculated` | `public bool IsPrecalculated()` | 方法 |
| `DetachmentData` | `public DetachmentData()` | 构造函数 |
| `RemoveScoreOfAgent` | `public void RemoveScoreOfAgent(Agent agent)` | 方法 |
| `List` | `public List<Formation>joinedFormations` | 字段 |
| `List` | `public List<ValueTuple<Agent, List<float>>>agentScores` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
