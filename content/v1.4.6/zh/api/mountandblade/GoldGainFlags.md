---
title: "GoldGainFlags"
description: "GoldGainFlags：TaleWorlds.MountAndBlade 的 public 枚举，继承 ushort；公开成员 12 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/GoldGainFlags.cs。"
---
# GoldGainFlags

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public enum GoldGainFlags : ushort`
**File:** `TaleWorlds.MountAndBlade/GoldGainFlags.cs`

## 概述

GoldGainFlags 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GoldGainFlags.cs。它是一个 public 枚举，实现/继承 ushort，继承链为 GoldGainFlags → ushort。public/protected 成员共 12 个：12 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GoldGainFlags 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 GoldGainFlags → ushort。成员构成以方法为主（方法 0/12，属性 0/12），对外主要以操作入口暴露。继承链上的 ushort 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GoldGainFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `1` | `FirstRangedKill == 1` | 枚举值 |
| `2` | `FirstMeleeKill == 2` | 枚举值 |
| `4` | `FirstAssist == 4` | 枚举值 |
| `8` | `SecondAssist == 8` | 枚举值 |
| `16` | `ThirdAssist == 16` | 枚举值 |
| `32` | `FifthKill == 32` | 枚举值 |
| `64` | `TenthKill == 64` | 枚举值 |
| `128` | `DefaultKill == 128` | 枚举值 |
| `256` | `DefaultAssist == 256` | 枚举值 |
| `512` | `ObjectiveCompleted == 512` | 枚举值 |
| `1024` | `ObjectiveDestroyed == 1024` | 枚举值 |
| `2048` | `PerkBonus == 2048` | 枚举值 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
