---
title: "ReloadPhaseItemVM"
description: "ReloadPhaseItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ReloadPhaseItemVM.cs."
---
# ReloadPhaseItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ReloadPhaseItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ReloadPhaseItemVM.cs`

## Overview

ReloadPhaseItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ReloadPhaseItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ReloadPhaseItemVM → ViewModel. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ReloadPhaseItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain ReloadPhaseItemVM → ViewModel. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ReloadPhaseItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReloadPhaseItemVM` | `public ReloadPhaseItemVM(float progress, float relativeDurationToMaxDuration)` | constructor |
| `Update` | `public void Update(float progress, float relativeDurationToMaxDuration)` | method |
| `Progress` | `public float Progress` | property |
| `RelativeDurationToMaxDuration` | `public float RelativeDurationToMaxDuration` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
