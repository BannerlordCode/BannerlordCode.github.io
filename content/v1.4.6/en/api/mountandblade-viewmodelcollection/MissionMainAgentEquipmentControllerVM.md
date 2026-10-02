---
title: "MissionMainAgentEquipmentControllerVM"
description: "MissionMainAgentEquipmentControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 18 exposed members (7 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs."
---
# MissionMainAgentEquipmentControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs`

## Overview

MissionMainAgentEquipmentControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentEquipmentControllerVM → ViewModel. It exposes 18 public/protected members: 7 methods, 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentEquipmentControllerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain MissionMainAgentEquipmentControllerVM → ViewModel. The surface is property-led (properties 9/18, methods 7/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
