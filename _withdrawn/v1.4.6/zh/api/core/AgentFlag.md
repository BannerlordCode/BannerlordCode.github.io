---
title: "AgentFlag"
description: "AgentFlag：TaleWorlds.Core 的 public 枚举，继承 uint；公开成员 28 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.Core/AgentFlag.cs。"
---
# AgentFlag

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentFlag : uint`
**File:** `TaleWorlds.Core/AgentFlag.cs`

## 概述

AgentFlag 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/AgentFlag.cs。它是一个 public 枚举，实现/继承 uint，继承链为 AgentFlag → uint。public/protected 成员共 28 个：28 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentFlag 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 AgentFlag → uint。成员构成以方法为主（方法 0/28，属性 0/28），对外主要以操作入口暴露。继承链上的 uint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/AgentFlag.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0U` | `None == 0U` | 枚举值 |
| `1U` | `Mountable == 1U` | 枚举值 |
| `2U` | `CanJump == 2U` | 枚举值 |
| `4U` | `CanRear == 4U` | 枚举值 |
| `8U` | `CanAttack == 8U` | 枚举值 |
| `16U` | `CanDefend == 16U` | 枚举值 |
| `32U` | `RunsAwayWhenHit == 32U` | 枚举值 |
| `64U` | `CanCharge == 64U` | 枚举值 |
| `128U` | `CanBeCharged == 128U` | 枚举值 |
| `256U` | `CanClimbLadders == 256U` | 枚举值 |
| `512U` | `CanBeInGroup == 512U` | 枚举值 |
| `1024U` | `CanSprint == 1024U` | 枚举值 |
| `2048U` | `IsHumanoid == 2048U` | 枚举值 |
| `4096U` | `CanGetScared == 4096U` | 枚举值 |
| `8192U` | `CanRide == 8192U` | 枚举值 |
| `16384U` | `CanWieldWeapon == 16384U` | 枚举值 |
| `32768U` | `CanCrouch == 32768U` | 枚举值 |
| `65536U` | `CanGetAlarmed == 65536U` | 枚举值 |
| `131072U` | `CanWander == 131072U` | 枚举值 |
| `524288U` | `CanKick == 524288U` | 枚举值 |
| `1048576U` | `CanRetreat == 1048576U` | 枚举值 |
| `2097152U` | `MoveAsHerd == 2097152U` | 枚举值 |
| `4194304U` | `MoveForwardOnly == 4194304U` | 枚举值 |
| `8388608U` | `IsUnique == 8388608U` | 枚举值 |
| `16777216U` | `CanUseAllBowsMounted == 16777216U` | 枚举值 |
| `33554432U` | `CanReloadAllXBowsMounted == 33554432U` | 枚举值 |
| `67108864U` | `CanDeflectArrowsWith2HSword == 67108864U` | 枚举值 |
| `134217728U` | `UnreachableViaNavMesh == 134217728U` | 枚举值 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
