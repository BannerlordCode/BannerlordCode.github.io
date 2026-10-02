---
title: "TrebuchetSpawner"
description: "TrebuchetSpawner：TaleWorlds.MountAndBlade 的 public 类，继承 SpawnerBase；公开成员 13 个（方法 2、属性 0、字段 11）。源文件 TaleWorlds.MountAndBlade/TrebuchetSpawner.cs。"
---
# TrebuchetSpawner

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TrebuchetSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/TrebuchetSpawner.cs`

## 概述

TrebuchetSpawner 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TrebuchetSpawner.cs。它是一个 public 类，实现/继承 SpawnerBase，继承链为 TrebuchetSpawner → SpawnerBase → ScriptComponentBehavior。public/protected 成员共 13 个：2 方法、11 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TrebuchetSpawner 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TrebuchetSpawner → SpawnerBase → ScriptComponentBehavior。成员构成以方法为主（方法 2/13，属性 0/13），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TrebuchetSpawner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | 方法 |
| `projectile_pile` | `public MatrixFrame projectile_pile` | 字段 |
| `AddOnDeployTag` | `public string AddOnDeployTag` | 字段 |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | 字段 |
| `ammo_pos_a_enabled` | `public bool ammo_pos_a_enabled` | 字段 |
| `ammo_pos_b_enabled` | `public bool ammo_pos_b_enabled` | 字段 |
| `ammo_pos_c_enabled` | `public bool ammo_pos_c_enabled` | 字段 |
| `ammo_pos_d_enabled` | `public bool ammo_pos_d_enabled` | 字段 |
| `ammo_pos_e_enabled` | `public bool ammo_pos_e_enabled` | 字段 |
| `ammo_pos_f_enabled` | `public bool ammo_pos_f_enabled` | 字段 |
| `ammo_pos_g_enabled` | `public bool ammo_pos_g_enabled` | 字段 |
| `ammo_pos_h_enabled` | `public bool ammo_pos_h_enabled` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SpawnerBase](../SpawnerBase)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
