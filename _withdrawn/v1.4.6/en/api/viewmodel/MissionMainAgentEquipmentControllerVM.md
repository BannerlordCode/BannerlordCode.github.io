---
title: "MissionMainAgentEquipmentControllerVM"
description: "MissionMainAgentEquipmentControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 18 exposed members (7 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentEquipmentControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionMainAgentEquipmentControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentEquipmentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 7 methods, 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentEquipmentControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain MissionMainAgentEquipmentControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/18, methods 7/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionMainAgentEquipmentControllerVM` | `public MissionMainAgentEquipmentControllerVM(Action<EquipmentIndex>onDropEquipment, Action<SpawnedItemEntity, EquipmentIndex>onEquipItem)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnDropControllerToggle` | `public void OnDropControllerToggle(bool isActive)` | method |
| `SetCurrentFocusedWeaponEntity` | `public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)` | method |
| `OnEquipControllerToggle` | `public void OnEquipControllerToggle(bool isActive)` | method |
| `OnCancelEquipController` | `public void OnCancelEquipController()` | method |
| `OnCancelDropController` | `public void OnCancelDropController()` | method |
| `IsDropControllerActive` | `public bool IsDropControllerActive` | property |
| `IsEquipControllerActive` | `public bool IsEquipControllerActive` | property |
| `DropText` | `public string DropText` | property |
| `EquipText` | `public string EquipText` | property |
| `FocusedItemText` | `public string FocusedItemText` | property |
| `SelectedItemText` | `public string SelectedItemText` | property |
| `MBBindingList` | `public MBBindingList<EquipmentActionItemVM>DropActions` | property |
| `MBBindingList` | `public MBBindingList<EquipmentActionItemVM>EquipActions` | property |
| `GetItemTypeAsString` | `public static string GetItemTypeAsString(ItemObject item)` | method |
| `ItemGroup` | `public enum ItemGroup` | property |
| `ItemGroup` | `public enum ItemGroup` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
