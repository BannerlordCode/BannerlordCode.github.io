---
title: "CustomBattleVM"
description: "CustomBattleVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 33 exposed members (11 methods, 21 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomBattleVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 33 public/protected members: 11 methods, 21 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle`, inheritance chain CustomBattleVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 21/33, methods 11/33), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomBattleVM` | `public CustomBattleVM(CustomBattleState battleState)` | constructor |
| `SetActiveState` | `public void SetActiveState(bool isActive)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteBack` | `public void ExecuteBack()` | method |
| `ExecuteStart` | `public void ExecuteStart()` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteSwitchToNextCustomBattle` | `public void ExecuteSwitchToNextCustomBattle()` | method |
| `TroopTypeSelectionPopUp` | `public TroopTypeSelectionPopUpVM TroopTypeSelectionPopUp` | property |
| `IsAttackerCustomMachineSelectionEnabled` | `public bool IsAttackerCustomMachineSelectionEnabled` | property |
| `IsDefenderCustomMachineSelectionEnabled` | `public bool IsDefenderCustomMachineSelectionEnabled` | property |
| `RandomizeButtonText` | `public string RandomizeButtonText` | property |
| `TitleText` | `public string TitleText` | property |
| `BackButtonText` | `public string BackButtonText` | property |
| `StartButtonText` | `public string StartButtonText` | property |
| `SwitchButtonText` | `public string SwitchButtonText` | property |
| `EnemySide` | `public CustomBattleSideVM EnemySide` | property |
| `PlayerSide` | `public CustomBattleSideVM PlayerSide` | property |
| `GameTypeSelectionGroup` | `public GameTypeSelectionGroupVM GameTypeSelectionGroup` | property |
| `MapSelectionGroup` | `public MapSelectionGroupVM MapSelectionGroup` | property |
| `MBBindingList` | `public MBBindingList<CustomBattleSiegeMachineVM>AttackerMeleeMachines` | property |
| `MBBindingList` | `public MBBindingList<CustomBattleSiegeMachineVM>AttackerRangedMachines` | property |
| `MBBindingList` | `public MBBindingList<CustomBattleSiegeMachineVM>DefenderMachines` | property |
| `CanSwitchMode` | `public bool CanSwitchMode` | property |
| `SwitchHint` | `public HintViewModel SwitchHint` | property |
| `SetStartInputKey` | `public void SetStartInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `SetRandomizeInputKey` | `public void SetRandomizeInputKey(HotKey hotkey)` | method |
| `StartInputKey` | `public InputKeyItemVM StartInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `RandomizeInputKey` | `public InputKeyItemVM RandomizeInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
