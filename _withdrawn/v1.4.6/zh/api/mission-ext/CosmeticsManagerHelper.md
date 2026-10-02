---
title: "CosmeticsManagerHelper"
description: "CosmeticsManagerHelper：TaleWorlds.MountAndBlade 的 public 类；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CosmeticsManagerHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class CosmeticsManagerHelper`
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CosmeticsManagerHelper 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs。它是一个 public 类，继承链为 CosmeticsManagerHelper。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CosmeticsManagerHelper 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 CosmeticsManagerHelper。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static Dictionary<int, List<int>>GetUsedIndicesFromIds(Dictionary<string, List<string>>usedCosmetics)` | 方法 |
| `GetSuitableTauntAction` | `public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)` | 方法 |
| `GetActionNotUsableReason` | `public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)` | 方法 |
| `GetSuitableTauntActionForEquipment` | `public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)` | 方法 |
| `IsWeaponClassOneHanded` | `public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)` | 方法 |
| `IsWeaponClassTwoHanded` | `public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)` | 方法 |
| `IsWeaponClassShield` | `public static bool IsWeaponClassShield(WeaponClass weaponClass)` | 方法 |
| `IsWeaponClassBow` | `public static bool IsWeaponClassBow(WeaponClass weaponClass)` | 方法 |
| `IsWeaponClassCrossbow` | `public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)` | 方法 |
| `WeaponClass[]GetComplimentaryWeaponClasses` | `public static WeaponClass[]GetComplimentaryWeaponClasses(WeaponClass weaponClass)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
