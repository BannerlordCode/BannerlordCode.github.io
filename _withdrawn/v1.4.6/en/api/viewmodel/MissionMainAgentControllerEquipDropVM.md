---
title: "MissionMainAgentControllerEquipDropVM"
description: "MissionMainAgentControllerEquipDropVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 16 exposed members (9 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentControllerEquipDropVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionMainAgentControllerEquipDropVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentControllerEquipDropVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 16 public/protected members: 9 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentControllerEquipDropVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain MissionMainAgentControllerEquipDropVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 9/16, properties 6/16), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionMainAgentControllerEquipDropVM` | `public MissionMainAgentControllerEquipDropVM(Action<EquipmentIndex>toggleItem)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `InitializeMainAgentPropterties` | `public void InitializeMainAgentPropterties()` | method |
| `OnToggle` | `public void OnToggle(bool isEnabled)` | method |
| `OnCancelHoldController` | `public void OnCancelHoldController()` | method |
| `OnWeaponDroppedAtIndex` | `public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)` | method |
| `OnWeaponEquippedAtIndex` | `public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)` | method |
| `SetDropProgressForIndex` | `public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnGamepadActiveChanged` | `public void OnGamepadActiveChanged(bool isActive)` | method |
| `MBBindingList` | `public MBBindingList<ControllerEquippedItemVM>EquippedWeapons` | property |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon` | property |
| `HoldToDropText` | `public string HoldToDropText` | property |
| `PressToEquipText` | `public string PressToEquipText` | property |
| `IsActive` | `public bool IsActive` | property |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
