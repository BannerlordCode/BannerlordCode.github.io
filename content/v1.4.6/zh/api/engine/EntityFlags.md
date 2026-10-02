---
title: "EntityFlags"
description: "EntityFlags：TaleWorlds.Engine 的 public 枚举，继承 uint；公开成员 25 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.Engine/EntityFlags.cs。"
---
# EntityFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum EntityFlags : uint`
**File:** `TaleWorlds.Engine/EntityFlags.cs`

## 概述

EntityFlags 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/EntityFlags.cs。它是一个 public 枚举，实现/继承 uint，继承链为 EntityFlags → uint。public/protected 成员共 25 个：25 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EntityFlags 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 EntityFlags → uint。成员构成以方法为主（方法 0/25，属性 0/25），对外主要以操作入口暴露。继承链上的 uint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/EntityFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `240U` | `ForceLodMask == 240U` | 枚举值 |
| `4U` | `ForceLodBits == 4U` | 枚举值 |
| `512U` | `NoOcclusionCulling == 512U` | 枚举值 |
| `1024U` | `IsHelper == 1024U` | 枚举值 |
| `2048U` | `ComputePerComponentLod == 2048U` | 枚举值 |
| `4096U` | `DoesNotAffectParentsLocalBb == 4096U` | 枚举值 |
| `8192U` | `ForceAsStatic == 8192U` | 枚举值 |
| `16384U` | `HideInPrefabEditors == 16384U` | 枚举值 |
| `32768U` | `PhysicsDisabled == 32768U` | 枚举值 |
| `65536U` | `AlignToTerrain == 65536U` | 枚举值 |
| `131072U` | `DontSaveToScene == 131072U` | 枚举值 |
| `262144U` | `RecordToSceneReplay == 262144U` | 枚举值 |
| `524288U` | `AffectedByEnvironmentDecals == 524288U` | 枚举值 |
| `1048576U` | `SmoothLodTransitions == 1048576U` | 枚举值 |
| `2097152U` | `DontCheckHandness == 2097152U` | 枚举值 |
| `4194304U` | `NotAffectedBySeason == 4194304U` | 枚举值 |
| `8388608U` | `DontTickChildren == 8388608U` | 枚举值 |
| `16777216U` | `WaitUntilReady == 16777216U` | 枚举值 |
| `33554432U` | `NonModifiableFromEditor == 33554432U` | 枚举值 |
| `67108864U` | `PrefabCannotBeBroken == 67108864U` | 枚举值 |
| `134217728U` | `PerComponentVisibility == 134217728U` | 枚举值 |
| `268435456U` | `Ignore == 268435456U` | 枚举值 |
| `536870912U` | `DoNotTick == 536870912U` | 枚举值 |
| `1073741824U` | `DoNotRenderToEnvmap == 1073741824U` | 枚举值 |
| `2147483648U` | `AlignRotationToTerrain == 2147483648U` | 枚举值 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
