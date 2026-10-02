---
title: "UsableMissionObjectComponent"
description: "UsableMissionObjectComponent：TaleWorlds.MountAndBlade 的 public 类；公开成员 12 个（方法 12、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs。"
---
# UsableMissionObjectComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## 概述

UsableMissionObjectComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs。它是一个 public 类（abstract），继承链为 UsableMissionObjectComponent。public/protected 成员共 12 个：12 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UsableMissionObjectComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 UsableMissionObjectComponent。成员构成以方法为主（方法 12/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAdded` | `protected internal virtual void OnAdded(Scene scene)` | 方法 |
| `OnRemoved` | `protected internal virtual void OnRemoved()` | 方法 |
| `OnFocusGain` | `protected internal virtual void OnFocusGain(Agent userAgent)` | 方法 |
| `OnFocusLose` | `protected internal virtual void OnFocusLose(Agent userAgent)` | 方法 |
| `IsOnTickRequired` | `public virtual bool IsOnTickRequired()` | 方法 |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | 方法 |
| `OnEditorTick` | `protected internal virtual void OnEditorTick(float dt)` | 方法 |
| `OnEditorValidate` | `protected internal virtual void OnEditorValidate()` | 方法 |
| `OnUse` | `protected internal virtual void OnUse(Agent userAgent)` | 方法 |
| `OnUseStopped` | `protected internal virtual void OnUseStopped(Agent userAgent, bool isSuccessful = true)` | 方法 |
| `OnMissionReset` | `protected internal virtual void OnMissionReset()` | 方法 |
| `OnMissionObjectDisabled` | `protected internal virtual void OnMissionObjectDisabled()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
