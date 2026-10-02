---
title: "MissionAgentLockVisualizerVM"
description: "MissionAgentLockVisualizerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentLockVisualizerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentLockVisualizerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionAgentLockVisualizerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentLockVisualizerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentLockVisualizerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain MissionAgentLockVisualizerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionAgentLockVisualizerVM` | `public MissionAgentLockVisualizerVM()` | constructor |
| `OnActiveLockAgentChange` | `public void OnActiveLockAgentChange(Agent oldAgent, Agent newAgent)` | method |
| `OnPossibleLockAgentChange` | `public void OnPossibleLockAgentChange(Agent oldPossibleAgent, Agent newPossibleAgent)` | method |
| `MBBindingList` | `public MBBindingList<MissionAgentLockItemVM>AllTrackedAgents` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
