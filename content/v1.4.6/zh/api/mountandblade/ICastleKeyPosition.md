---
title: "ICastleKeyPosition"
description: "ICastleKeyPosition：TaleWorlds.MountAndBlade 的 public 接口；公开成员 7 个（方法 1、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade/ICastleKeyPosition.cs。"
---
# ICastleKeyPosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ICastleKeyPosition`
**File:** `TaleWorlds.MountAndBlade/ICastleKeyPosition.cs`

## 概述

ICastleKeyPosition 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ICastleKeyPosition.cs。它是一个 public 接口，继承链为 ICastleKeyPosition。public/protected 成员共 7 个：1 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICastleKeyPosition 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ICastleKeyPosition。成员构成以属性为主（属性 6/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ICastleKeyPosition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttackerSiegeWeapon` | `IPrimarySiegeWeapon AttackerSiegeWeapon` | 属性 |
| `MiddlePosition` | `TacticalPosition MiddlePosition` | 属性 |
| `WaitPosition` | `TacticalPosition WaitPosition` | 属性 |
| `MiddleFrame` | `WorldFrame MiddleFrame` | 属性 |
| `DefenseWaitFrame` | `WorldFrame DefenseWaitFrame` | 属性 |
| `DefenseSide` | `FormationAI.BehaviorSide DefenseSide` | 属性 |
| `GetPosition` | `Vec3 GetPosition();` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
