---
title: "MissionAgentTakenDamageVM"
description: "MissionAgentTakenDamageVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentTakenDamageVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentTakenDamageVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionAgentTakenDamageVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentTakenDamageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentTakenDamageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain MissionAgentTakenDamageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionAgentTakenDamageVM` | `public MissionAgentTakenDamageVM(Camera missionCamera)` | constructor |
| `SetIsEnabled` | `public void SetIsEnabled(bool isEnabled)` | method |
| `MBBindingList` | `public MBBindingList<MissionAgentTakenDamageItemVM>TakenDamageList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
