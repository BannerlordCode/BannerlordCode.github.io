---
title: "ArmyCompositionGroupVM"
description: "ArmyCompositionGroupVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 13 exposed members (4 methods, 8 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyCompositionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class ArmyCompositionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

ArmyCompositionGroupVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyCompositionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 4 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyCompositionGroupVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle`, inheritance chain ArmyCompositionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/13, methods 4/13), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ArmyCompositionGroupVM` | `public ArmyCompositionGroupVM(TroopTypeSelectionPopUpVM troopTypeSelectionPopUp)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetCurrentSelectedCulture` | `public void SetCurrentSelectedCulture(BasicCultureObject selectedCulture)` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize(ArmyCompositionGroupVM oppositeSide = null)` | method |
| `OnPlayerTypeChange` | `public void OnPlayerTypeChange(CustomBattlePlayerType playerType)` | method |
| `MeleeInfantryComposition` | `public ArmyCompositionItemVM MeleeInfantryComposition` | property |
| `RangedInfantryComposition` | `public ArmyCompositionItemVM RangedInfantryComposition` | property |
| `MeleeCavalryComposition` | `public ArmyCompositionItemVM MeleeCavalryComposition` | property |
| `RangedCavalryComposition` | `public ArmyCompositionItemVM RangedCavalryComposition` | property |
| `ArmySizeTitle` | `public string ArmySizeTitle` | property |
| `ArmySize` | `public int ArmySize` | property |
| `MaxArmySize` | `public int MaxArmySize` | property |
| `MinArmySize` | `public int MinArmySize` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
- [same namespace CustomBattleSceneData](../CustomBattleSceneData/)
