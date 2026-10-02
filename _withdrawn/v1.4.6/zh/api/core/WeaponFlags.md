---
title: "WeaponFlags"
description: "WeaponFlags：TaleWorlds.Core 的 public 枚举，继承 ulong；公开成员 41 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.Core/WeaponFlags.cs。"
---
# WeaponFlags

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum WeaponFlags : ulong`
**File:** `TaleWorlds.Core/WeaponFlags.cs`

## 概述

WeaponFlags 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/WeaponFlags.cs。它是一个 public 枚举，实现/继承 ulong，继承链为 WeaponFlags → ulong。public/protected 成员共 41 个：41 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponFlags 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 WeaponFlags → ulong。成员构成以方法为主（方法 0/41，属性 0/41），对外主要以操作入口暴露。继承链上的 ulong 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/WeaponFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `1UL` | `MeleeWeapon == 1UL` | 枚举值 |
| `2UL` | `RangedWeapon == 2UL` | 枚举值 |
| `3UL` | `WeaponMask == 3UL` | 枚举值 |
| `4UL` | `FirearmAmmo == 4UL` | 枚举值 |
| `16UL` | `NotUsableWithOneHand == 16UL` | 枚举值 |
| `32UL` | `NotUsableWithTwoHand == 32UL` | 枚举值 |
| `48UL` | `HandUsageMask == 48UL` | 枚举值 |
| `64UL` | `WideGrip == 64UL` | 枚举值 |
| `128UL` | `AttachAmmoToVisual == 128UL` | 枚举值 |
| `256UL` | `Consumable == 256UL` | 枚举值 |
| `512UL` | `HasHitPoints == 512UL` | 枚举值 |
| `768UL` | `DataValueMask == 768UL` | 枚举值 |
| `1024UL` | `HasString == 1024UL` | 枚举值 |
| `3072UL` | `StringHeldByHand == 3072UL` | 枚举值 |
| `4096UL` | `UnloadWhenSheathed == 4096UL` | 枚举值 |
| `8192UL` | `AffectsArea == 8192UL` | 枚举值 |
| `16384UL` | `AffectsAreaBig == 16384UL` | 枚举值 |
| `32768UL` | `Burning == 32768UL` | 枚举值 |
| `65536UL` | `BonusAgainstShield == 65536UL` | 枚举值 |
| `131072UL` | `CanPenetrateShield == 131072UL` | 枚举值 |
| `262144UL` | `CantReloadOnHorseback == 262144UL` | 枚举值 |
| `524288UL` | `AutoReload == 524288UL` | 枚举值 |
| `1048576UL` | `CanBeUsedWhileCrouched == 1048576UL` | 枚举值 |
| `2097152UL` | `TwoHandIdleOnMount == 2097152UL` | 枚举值 |
| `4194304UL` | `NoBlood == 4194304UL` | 枚举值 |
| `8388608UL` | `PenaltyWithShield == 8388608UL` | 枚举值 |
| `16777216UL` | `CanDismount == 16777216UL` | 枚举值 |
| `33554432UL` | `CanHook == 33554432UL` | 枚举值 |
| `67108864UL` | `CanKnockDown == 67108864UL` | 枚举值 |
| `134217728UL` | `CanCrushThrough == 134217728UL` | 枚举值 |
| `268435456UL` | `CanBlockRanged == 268435456UL` | 枚举值 |
| `536870912UL` | `MissileWithPhysics == 536870912UL` | 枚举值 |
| `1073741824UL` | `MultiplePenetration == 1073741824UL` | 枚举值 |
| `2147483648UL` | `LeavesTrail == 2147483648UL` | 枚举值 |
| `4294967296UL` | `UseHandAsThrowBase == 4294967296UL` | 枚举值 |
| `8589934592UL` | `HeldBackwards == 8589934592UL` | 枚举值 |
| `17179869184UL` | `CanKillEvenIfBlunt == 17179869184UL` | 枚举值 |
| `68719476736UL` | `AmmoBreaksOnBounceBack == 68719476736UL` | 枚举值 |
| `137438953472UL` | `AmmoCanBreakOnBounceBack == 137438953472UL` | 枚举值 |
| `206158430208UL` | `AmmoBreakOnBounceBackMask == 206158430208UL` | 枚举值 |
| `274877906944UL` | `AmmoSticksWhenShot == 274877906944UL` | 枚举值 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
