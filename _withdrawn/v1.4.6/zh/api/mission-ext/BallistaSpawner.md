---
title: "BallistaSpawner"
description: "BallistaSpawner：TaleWorlds.MountAndBlade.Objects.Siege 的 public 类，继承 SpawnerBase；公开成员 5 个（方法 2、属性 0、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BallistaSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BallistaSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BallistaSpawner 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs。它是一个 public 类，实现/继承 SpawnerBase，继承链为 BallistaSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。public/protected 成员共 5 个：2 方法、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BallistaSpawner 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Objects.Siege`，继承链 BallistaSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 2/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | 方法 |
| `AddOnDeployTag` | `public string AddOnDeployTag` | 字段 |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | 字段 |
| `DirectionRestrictionDegree` | `public float DirectionRestrictionDegree` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SpawnerBase](../SpawnerBase/)
- [同命名空间 BatteringRamSpawner](../BatteringRamSpawner/)
- [同命名空间 FireTrebuchet](../FireTrebuchet/)
- [同命名空间 ISpawnable](../ISpawnable/)
- [同命名空间 MangonelSpawner](../MangonelSpawner/)
