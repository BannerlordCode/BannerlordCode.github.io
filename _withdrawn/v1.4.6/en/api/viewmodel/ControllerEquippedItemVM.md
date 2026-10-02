---
title: "ControllerEquippedItemVM"
description: "ControllerEquippedItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting EquipmentActionItemVM; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ControllerEquippedItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

ControllerEquippedItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs. It is a public class, implementing/inheriting EquipmentActionItemVM; the inheritance chain is ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ControllerEquippedItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ControllerEquippedItemVM` | `public ControllerEquippedItemVM(string item, string itemTypeAsString, object identifier, HotKey key, Action<EquipmentActionItemVM>onSelection) : base(item, itemTypeAsString, identifier, onSelection, false)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | property |
| `DropProgress` | `public float DropProgress` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EquipmentActionItemVM](../EquipmentActionItemVM/)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
- [same namespace MissionAgentLockItemVM](../MissionAgentLockItemVM/)
