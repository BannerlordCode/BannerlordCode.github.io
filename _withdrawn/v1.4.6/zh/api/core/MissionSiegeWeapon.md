---
title: "MissionSiegeWeapon"
description: "MissionSiegeWeapon：TaleWorlds.Core 的 public 类，继承 IMissionSiegeWeapon；公开成员 8 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.Core/MissionSiegeWeapon.cs。"
---
# MissionSiegeWeapon

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MissionSiegeWeapon : IMissionSiegeWeapon`
**File:** `TaleWorlds.Core/MissionSiegeWeapon.cs`

## 概述

MissionSiegeWeapon 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MissionSiegeWeapon.cs。它是一个 public 类，实现/继承 IMissionSiegeWeapon，继承链为 MissionSiegeWeapon → IMissionSiegeWeapon。public/protected 成员共 8 个：3 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSiegeWeapon 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MissionSiegeWeapon → IMissionSiegeWeapon。成员构成以属性为主（属性 5/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MissionSiegeWeapon.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Index` | `public int Index` | 属性 |
| `Type` | `public SiegeEngineType Type` | 属性 |
| `Health` | `public float Health` | 属性 |
| `InitialHealth` | `public float InitialHealth` | 属性 |
| `MaxHealth` | `public float MaxHealth` | 属性 |
| `CreateDefaultWeapon` | `public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)` | 方法 |
| `CreateCampaignWeapon` | `public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)` | 方法 |
| `SetHealth` | `public void SetHealth(float health)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMissionSiegeWeapon](../IMissionSiegeWeapon)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
