---
title: "MissionAgentLockItemVM"
description: "MissionAgentLockItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs."
---
# MissionAgentLockItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentLockItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs`

## Overview

MissionAgentLockItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentLockItemVM → ViewModel. It exposes 8 public/protected members: 2 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentLockItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain MissionAgentLockItemVM → ViewModel. The surface is property-led (properties 4/8, methods 2/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
