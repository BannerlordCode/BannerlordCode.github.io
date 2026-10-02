---
title: "MBMissile"
description: "MBMissile：TaleWorlds.MountAndBlade 的 public 类；公开成员 7 个（方法 5、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBMissile.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBMissile

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBMissile`
**File:** `TaleWorlds.MountAndBlade/MBMissile.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBMissile 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBMissile.cs。它是一个 public 类（abstract），继承链为 MBMissile。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBMissile 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBMissile。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBMissile.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBMissile` | `protected MBMissile(Mission mission)` | 构造函数 |
| `Index` | `public int Index` | 属性 |
| `GetPosition` | `public Vec3 GetPosition()` | 方法 |
| `GetOldPosition` | `public Vec3 GetOldPosition()` | 方法 |
| `GetVelocity` | `public Vec3 GetVelocity()` | 方法 |
| `SetVelocity` | `public void SetVelocity(in Vec3 velocity)` | 方法 |
| `GetHasRigidBody` | `public bool GetHasRigidBody()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
