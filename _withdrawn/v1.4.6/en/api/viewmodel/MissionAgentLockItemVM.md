---
title: "MissionAgentLockItemVM"
description: "MissionAgentLockItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 8 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentLockItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentLockItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionAgentLockItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentLockItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 2 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentLockItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain MissionAgentLockItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/8, methods 2/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TrackedAgent` | `public Agent TrackedAgent` | property |
| `MissionAgentLockItemVM` | `public MissionAgentLockItemVM(Agent agent, MissionAgentLockItemVM.LockStates initialLockState)` | constructor |
| `SetLockState` | `public void SetLockState(MissionAgentLockItemVM.LockStates lockState)` | method |
| `UpdatePosition` | `public void UpdatePosition(Vec2 position)` | method |
| `Position` | `public Vec2 Position` | property |
| `LockState` | `public int LockState` | property |
| `LockStates` | `public enum LockStates` | property |
| `LockStates` | `public enum LockStates` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
