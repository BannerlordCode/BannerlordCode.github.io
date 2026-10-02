---
title: "MissionSpectatorControlVM"
description: "MissionSpectatorControlVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 20 exposed members (8 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs."
---
# MissionSpectatorControlVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSpectatorControlVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs`

## Overview

MissionSpectatorControlVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionSpectatorControlVM → ViewModel. It exposes 20 public/protected members: 8 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSpectatorControlVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain MissionSpectatorControlVM → ViewModel. The surface is property-led (properties 11/20, methods 8/20), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionSpectatorControlVM` | `public MissionSpectatorControlVM(Mission mission)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSpectatedAgentFocusIn` | `public void OnSpectatedAgentFocusIn(Agent followedAgent)` | method |
| `OnSpectatedAgentFocusOut` | `public void OnSpectatedAgentFocusOut(Agent followedAgent)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetMainAgentStatus` | `public void SetMainAgentStatus(bool isDead)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `PrevCharacterText` | `public string PrevCharacterText` | property |
| `NextCharacterText` | `public string NextCharacterText` | property |
| `TakeControlText` | `public string TakeControlText` | property |
| `StatusText` | `public string StatusText` | property |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant` | property |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled` | property |
| `SetPrevCharacterInputKey` | `public void SetPrevCharacterInputKey(GameKey gameKey)` | method |
| `SetNextCharacterInputKey` | `public void SetNextCharacterInputKey(GameKey gameKey)` | method |
| `SetTakeControlInputKey` | `public void SetTakeControlInputKey(GameKey gameKey)` | method |
| `SpectatedAgentName` | `public string SpectatedAgentName` | property |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey` | property |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey` | property |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
