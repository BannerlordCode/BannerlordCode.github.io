---
title: "EquipmentActionItemVM"
description: "EquipmentActionItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 5 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/EquipmentActionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EquipmentActionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class EquipmentActionItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/EquipmentActionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

EquipmentActionItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/EquipmentActionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EquipmentActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EquipmentActionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain EquipmentActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/EquipmentActionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EquipmentActionItemVM` | `public EquipmentActionItemVM(string item, string itemTypeAsString, object identifier, Action<EquipmentActionItemVM>onSelection, bool isCurrentlyWielded = false)` | constructor |
| `ActionText` | `public string ActionText` | property |
| `IsWielded` | `public bool IsWielded` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `TypeAsString` | `public string TypeAsString` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace MissionAgentLockItemVM](../MissionAgentLockItemVM/)
