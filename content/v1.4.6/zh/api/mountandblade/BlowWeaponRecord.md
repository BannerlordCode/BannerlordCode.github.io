---
title: "BlowWeaponRecord"
description: "BlowWeaponRecord：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 8 个（方法 4、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade/BlowWeaponRecord.cs。"
---
# BlowWeaponRecord

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct BlowWeaponRecord`
**File:** `TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`

## 概述

BlowWeaponRecord 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BlowWeaponRecord.cs。它是一个 public 结构体，继承链为 BlowWeaponRecord。public/protected 成员共 8 个：4 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BlowWeaponRecord 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BlowWeaponRecord。成员构成以方法为主（方法 4/8，属性 4/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BlowWeaponRecord.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillAsMeleeBlow` | `public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)` | 方法 |
| `FillAsMissileBlow` | `public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)` | 方法 |
| `HasWeapon` | `public bool HasWeapon()` | 方法 |
| `IsMissile` | `public bool IsMissile` | 属性 |
| `IsShield` | `public bool IsShield` | 属性 |
| `IsRanged` | `public bool IsRanged` | 属性 |
| `IsAmmo` | `public bool IsAmmo` | 属性 |
| `GetHitSound` | `public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
