---
title: "CosmeticsManagerHelper"
description: "CosmeticsManagerHelper: a public class in TaleWorlds.MountAndBlade; 10 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs."
---
# CosmeticsManagerHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class CosmeticsManagerHelper`
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## Overview

CosmeticsManagerHelper lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs. It is a public class; the inheritance chain is CosmeticsManagerHelper. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CosmeticsManagerHelper is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CosmeticsManagerHelper. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static Dictionary<int, List<int>>GetUsedIndicesFromIds(Dictionary<string, List<string>>usedCosmetics)` | method |
| `GetSuitableTauntAction` | `public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)` | method |
| `GetActionNotUsableReason` | `public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)` | method |
| `GetSuitableTauntActionForEquipment` | `public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)` | method |
| `IsWeaponClassOneHanded` | `public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)` | method |
| `IsWeaponClassTwoHanded` | `public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)` | method |
| `IsWeaponClassShield` | `public static bool IsWeaponClassShield(WeaponClass weaponClass)` | method |
| `IsWeaponClassBow` | `public static bool IsWeaponClassBow(WeaponClass weaponClass)` | method |
| `IsWeaponClassCrossbow` | `public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)` | method |
| `WeaponClass[]GetComplimentaryWeaponClasses` | `public static WeaponClass[]GetComplimentaryWeaponClasses(WeaponClass weaponClass)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
