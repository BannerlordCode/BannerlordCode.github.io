---
title: "GenericGameKeyContext"
description: "GenericGameKeyContext：TaleWorlds.MountAndBlade 的 public 类，继承 GameKeyContext；公开成员 13 个（方法 0、属性 1、字段 11）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/GenericGameKeyContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericGameKeyContext

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class GenericGameKeyContext : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/GenericGameKeyContext.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GenericGameKeyContext 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GenericGameKeyContext.cs。它是一个 public 类（sealed），实现/继承 GameKeyContext，继承链为 GenericGameKeyContext → GameKeyContext。public/protected 成员共 13 个：1 属性、11 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GenericGameKeyContext 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 GenericGameKeyContext → GameKeyContext。成员构成以属性为主（属性 1/13，方法 0/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GenericGameKeyContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GenericGameKeyContext Current` | 属性 |
| `GenericGameKeyContext` | `public GenericGameKeyContext() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `Up` | `public const int Up` | 字段 |
| `Down` | `public const int Down` | 字段 |
| `Right` | `public const int Right` | 字段 |
| `Left` | `public const int Left` | 字段 |
| `MovementAxisX` | `public const string MovementAxisX` | 字段 |
| `MovementAxisY` | `public const string MovementAxisY` | 字段 |
| `CameraAxisX` | `public const string CameraAxisX` | 字段 |
| `CameraAxisY` | `public const string CameraAxisY` | 字段 |
| `Leave` | `public const int Leave` | 字段 |
| `ShowIndicators` | `public const int ShowIndicators` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameKeyContext](../../system/GameKeyContext/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
