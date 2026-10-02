---
title: "KillingBlow"
description: "KillingBlow：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 2 个（方法 1、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/KillingBlow.cs。"
---
# KillingBlow

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct KillingBlow`
**File:** `TaleWorlds.MountAndBlade/KillingBlow.cs`

## 概述

KillingBlow 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/KillingBlow.cs。它是一个 public 结构体，继承链为 KillingBlow。public/protected 成员共 2 个：1 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KillingBlow 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 KillingBlow。成员构成以方法为主（方法 1/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/KillingBlow.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KillingBlow` | `public KillingBlow(Blow b, Vec3 ragdollImpulsePoint, Vec3 ragdollImpulseAmount, int deathAction, int weaponItemKind, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)` | 构造函数 |
| `IsHeadShot` | `public bool IsHeadShot()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
