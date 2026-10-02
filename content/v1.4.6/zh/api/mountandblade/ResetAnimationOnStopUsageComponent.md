---
title: "ResetAnimationOnStopUsageComponent"
description: "ResetAnimationOnStopUsageComponent：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMissionObjectComponent；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs。"
---
# ResetAnimationOnStopUsageComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## 概述

ResetAnimationOnStopUsageComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs。它是一个 public 类，实现/继承 UsableMissionObjectComponent，继承链为 ResetAnimationOnStopUsageComponent → UsableMissionObjectComponent。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ResetAnimationOnStopUsageComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ResetAnimationOnStopUsageComponent → UsableMissionObjectComponent。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResetAnimationOnStopUsageComponent` | `public ResetAnimationOnStopUsageComponent(ActionIndexCache successfulResetActionCode, bool alwaysResetWithAction)` | 构造函数 |
| `UpdateSuccessfulResetAction` | `public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)` | 方法 |
| `OnUseStopped` | `protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMissionObjectComponent](../UsableMissionObjectComponent)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
