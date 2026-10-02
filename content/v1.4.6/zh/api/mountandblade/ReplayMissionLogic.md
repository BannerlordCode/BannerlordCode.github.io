---
title: "ReplayMissionLogic"
description: "ReplayMissionLogic：TaleWorlds.MountAndBlade 的 public 类，继承 MissionLogic；公开成员 4 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/ReplayMissionLogic.cs。"
---
# ReplayMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ReplayMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`

## 概述

ReplayMissionLogic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ReplayMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 ReplayMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 4 个：2 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ReplayMissionLogic 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ReplayMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ReplayMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FileName` | `public string FileName` | 属性 |
| `ReplayMissionLogic` | `public ReplayMissionLogic(bool isMultiplayer, string fileName = "")` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionLogic](../MissionLogic)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
