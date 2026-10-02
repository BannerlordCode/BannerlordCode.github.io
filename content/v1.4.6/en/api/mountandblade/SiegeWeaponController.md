---
title: "SiegeWeaponController"
description: "SiegeWeaponController: a public class in TaleWorlds.MountAndBlade; 16 exposed members (12 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SiegeWeaponController.cs."
---
# SiegeWeaponController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeWeaponController`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponController.cs`

## Overview

SiegeWeaponController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeWeaponController.cs. It is a public class; the inheritance chain is SiegeWeaponController. It exposes 16 public/protected members: 12 methods, 1 properties, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeWeaponController is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeWeaponController. The surface is method-led (methods 12/16, properties 1/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeWeaponController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<SiegeWeapon>SelectedWeapons` | property |
| `IEnumerable` | `public event Action<SiegeWeaponOrderType, IEnumerable<SiegeWeapon>>OnOrderIssued;` | event |
| `OnSelectedSiegeWeaponsChanged;` | `public event Action OnSelectedSiegeWeaponsChanged;` | event |
| `SiegeWeaponController` | `public SiegeWeaponController(Mission mission, Team team)` | constructor |
| `Select` | `public void Select(SiegeWeapon weapon)` | method |
| `ClearSelectedWeapons` | `public void ClearSelectedWeapons()` | method |
| `Deselect` | `public void Deselect(SiegeWeapon weapon)` | method |
| `SelectAll` | `public void SelectAll()` | method |
| `IsWeaponSelectable` | `public static bool IsWeaponSelectable(SiegeWeapon weapon)` | method |
| `GetActiveOrderOf` | `public static SiegeWeaponOrderType GetActiveOrderOf(SiegeWeapon weapon)` | method |
| `GetActiveMovementOrderOf` | `public static SiegeWeaponOrderType GetActiveMovementOrderOf(SiegeWeapon weapon)` | method |
| `GetActiveFacingOrderOf` | `public static SiegeWeaponOrderType GetActiveFacingOrderOf(SiegeWeapon weapon)` | method |
| `GetActiveFiringOrderOf` | `public static SiegeWeaponOrderType GetActiveFiringOrderOf(SiegeWeapon weapon)` | method |
| `GetActiveAIControlOrderOf` | `public static SiegeWeaponOrderType GetActiveAIControlOrderOf(SiegeWeapon weapon)` | method |
| `SetOrder` | `public void SetOrder(SiegeWeaponOrderType order)` | method |
| `GetShortcutIndexOf` | `public int GetShortcutIndexOf(SiegeWeapon weapon)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
