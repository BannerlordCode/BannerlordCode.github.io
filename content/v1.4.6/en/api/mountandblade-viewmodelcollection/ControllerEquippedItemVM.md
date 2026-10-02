---
title: "ControllerEquippedItemVM"
description: "ControllerEquippedItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting EquipmentActionItemVM; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs."
---
# ControllerEquippedItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ControllerEquippedItemVM : EquipmentActionItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs`

## Overview

ControllerEquippedItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs. It is a public class, implementing/inheriting EquipmentActionItemVM; the inheritance chain is ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ControllerEquippedItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain ControllerEquippedItemVM → EquipmentActionItemVM → ViewModel. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ControllerEquippedItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ControllerEquippedItemVM` | `public ControllerEquippedItemVM(string item, string itemTypeAsString, object identifier, HotKey key, Action<EquipmentActionItemVM>onSelection) : base(item, itemTypeAsString, identifier, onSelection, false)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | property |
| `DropProgress` | `public float DropProgress` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EquipmentActionItemVM](../EquipmentActionItemVM)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
- [same namespace MissionAgentLockItemVM](../MissionAgentLockItemVM)
