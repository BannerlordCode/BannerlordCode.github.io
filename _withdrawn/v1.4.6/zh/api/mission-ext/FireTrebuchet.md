---
title: "FireTrebuchet"
description: "FireTrebuchet：TaleWorlds.MountAndBlade.Objects.Siege 的 public 类，继承 Trebuchet；公开成员 2 个（方法 2、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FireTrebuchet

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FireTrebuchet : Trebuchet`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FireTrebuchet 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs。它是一个 public 类，实现/继承 Trebuchet，继承链为 FireTrebuchet → Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FireTrebuchet 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Objects.Siege`，继承链 FireTrebuchet → Trebuchet → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/Siege/FireTrebuchet.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | 方法 |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Trebuchet](../Trebuchet/)
- [同命名空间 BallistaSpawner](../BallistaSpawner/)
- [同命名空间 BatteringRamSpawner](../BatteringRamSpawner/)
- [同命名空间 ISpawnable](../ISpawnable/)
- [同命名空间 MangonelSpawner](../MangonelSpawner/)
