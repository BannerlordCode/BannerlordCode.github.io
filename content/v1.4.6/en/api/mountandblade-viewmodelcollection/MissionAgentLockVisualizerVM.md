---
title: "MissionAgentLockVisualizerVM"
description: "MissionAgentLockVisualizerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs."
---
# MissionAgentLockVisualizerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentLockVisualizerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs`

## Overview

MissionAgentLockVisualizerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentLockVisualizerVM → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentLockVisualizerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain MissionAgentLockVisualizerVM → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentLockVisualizerVM` | `public MissionAgentLockVisualizerVM()` | constructor |
| `OnActiveLockAgentChange` | `public void OnActiveLockAgentChange(Agent oldAgent, Agent newAgent)` | method |
| `OnPossibleLockAgentChange` | `public void OnPossibleLockAgentChange(Agent oldPossibleAgent, Agent newPossibleAgent)` | method |
| `MBBindingList` | `public MBBindingList<MissionAgentLockItemVM>AllTrackedAgents` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
