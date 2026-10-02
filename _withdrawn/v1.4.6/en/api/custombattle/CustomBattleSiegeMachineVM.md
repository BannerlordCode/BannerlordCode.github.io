---
title: "CustomBattleSiegeMachineVM"
description: "CustomBattleSiegeMachineVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleSiegeMachineVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomBattleSiegeMachineVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleSiegeMachineVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleSiegeMachineVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`, inheritance chain CustomBattleSiegeMachineVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SiegeEngineType` | `public SiegeEngineType SiegeEngineType` | property |
| `CustomBattleSiegeMachineVM` | `public CustomBattleSiegeMachineVM(SiegeEngineType machineType, Action<CustomBattleSiegeMachineVM>onSelection, Action<CustomBattleSiegeMachineVM>onResetSelection)` | constructor |
| `SetMachineType` | `public void SetMachineType(SiegeEngineType machine)` | method |
| `IsRanged` | `public bool IsRanged` | property |
| `MachineID` | `public string MachineID` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData/)
- [same namespace CustomBattleData](../CustomBattleData/)
- [same namespace CustomBattleHelper](../CustomBattleHelper/)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide/)
