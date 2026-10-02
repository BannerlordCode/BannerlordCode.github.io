---
title: "BodyFlags"
description: "BodyFlags：TaleWorlds.Engine 的 public 枚举，继承 uint；公开成员 44 个（方法 0、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/BodyFlags.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BodyFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum BodyFlags : uint`
**File:** `TaleWorlds.Engine/BodyFlags.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

BodyFlags 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/BodyFlags.cs。它是一个 public 枚举，实现/继承 uint，继承链为 BodyFlags → uint。public/protected 成员共 44 个：44 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BodyFlags 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 BodyFlags → uint。成员构成以方法为主（方法 0/44，属性 0/44），对外主要以操作入口暴露。继承链上的 uint 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/BodyFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0U` | `None == 0U` | 枚举值 |
| `1U` | `Disabled == 1U` | 枚举值 |
| `2U` | `NotDestructible == 2U` | 枚举值 |
| `4U` | `TwoSided == 4U` | 枚举值 |
| `8U` | `Dynamic == 8U` | 枚举值 |
| `16U` | `Moveable == 16U` | 枚举值 |
| `32U` | `DynamicConvexHull == 32U` | 枚举值 |
| `64U` | `Ladder == 64U` | 枚举值 |
| `128U` | `OnlyCollideWithRaycast == 128U` | 枚举值 |
| `256U` | `AILimiter == 256U` | 枚举值 |
| `512U` | `Barrier == 512U` | 枚举值 |
| `1024U` | `Barrier3D == 1024U` | 枚举值 |
| `2048U` | `HasSteps == 2048U` | 枚举值 |
| `4096U` | `Ragdoll == 4096U` | 枚举值 |
| `8192U` | `RagdollLimiter == 8192U` | 枚举值 |
| `16384U` | `DestructibleDoor == 16384U` | 枚举值 |
| `32768U` | `DroppedItem == 32768U` | 枚举值 |
| `65536U` | `DoNotCollideWithRaycast == 65536U` | 枚举值 |
| `131072U` | `DontTransferToPhysicsEngine == 131072U` | 枚举值 |
| `262144U` | `DontCollideWithCamera == 262144U` | 枚举值 |
| `524288U` | `ExcludePathSnap == 524288U` | 枚举值 |
| `1048576U` | `WaterBody == 1048576U` | 枚举值 |
| `0U` | `AfterAddFlags == 0U` | 枚举值 |
| `2097152U` | `AgentOnly == 2097152U` | 枚举值 |
| `4194304U` | `MissileOnly == 4194304U` | 枚举值 |
| `8388608U` | `HasMaterial == 8388608U` | 枚举值 |
| `268435456U` | `IgnoreSoundOcclusion == 268435456U` | 枚举值 |
| `536870912U` | `StealthBox == 536870912U` | 枚举值 |
| `1073741824U` | `Sinking == 1073741824U` | 枚举值 |
| `2147483648U` | `FloatingDebris == 2147483648U` | 枚举值 |
| `4043309055U` | `BodyFlagFilter == 4043309055U` | 枚举值 |
| `0U` | `BodyOwnerNone == 0U` | 枚举值 |
| `16777216U` | `BodyOwnerEntity == 16777216U` | 枚举值 |
| `33554432U` | `BodyOwnerTerrain == 33554432U` | 枚举值 |
| `67108864U` | `BodyOwnerFlora == 67108864U` | 枚举值 |
| `251658240U` | `BodyOwnerFilter == 251658240U` | 枚举值 |
| `544321929U` | `CommonCollisionExcludeFlags == 544321929U` | 枚举值 |
| `544323529U` | `CameraCollisionRayCastExludeFlags == 544323529U` | 枚举值 |
| `542224777U` | `CommonCollisionExcludeFlagsForAgent == 542224777U` | 枚举值 |
| `540129161U` | `CommonCollisionExcludeFlagsForMissile == 540129161U` | 枚举值 |
| `540127625U` | `CommonCollisionExcludeFlagsForCombat == 540127625U` | 枚举值 |
| `540127625U` | `CommonCollisionExcludeFlagsForEditor == 540127625U` | 枚举值 |
| `4043259711U` | `CommonFlagsThatDoNotBlockRay == 4043259711U` | 枚举值 |
| `79617U` | `CommonFocusRayCastExcludeFlags == 79617U` | 枚举值 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
