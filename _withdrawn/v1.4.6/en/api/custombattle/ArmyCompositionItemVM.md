---
title: "ArmyCompositionItemVM"
description: "ArmyCompositionItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 16 exposed members (6 methods, 8 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyCompositionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class ArmyCompositionItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

ArmyCompositionItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyCompositionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 16 public/protected members: 6 methods, 8 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyCompositionItemVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle`, inheritance chain ArmyCompositionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/16, methods 6/16), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ArmyCompositionItemVM` | `public ArmyCompositionItemVM(ArmyCompositionItemVM.CompositionType type, List<BasicCharacterObject>allCharacterObjects, MBReadOnlyList<SkillObject>allSkills, Action<int, int>onCompositionValueChanged, TroopTypeSelectionPopUpVM troopTypeSelectionPopUp, int[]compositionValues)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetCurrentSelectedCulture` | `public void SetCurrentSelectedCulture(BasicCultureObject culture)` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize(int compositionValue)` | method |
| `ExecuteAddTroopTypes` | `public void ExecuteAddTroopTypes()` | method |
| `RefreshCompositionValue` | `public void RefreshCompositionValue()` | method |
| `GetTroopTypeIconData` | `public static StringItemWithHintVM GetTroopTypeIconData(BasicCharacterObject basicCharacterObject, ArmyCompositionItemVM.CompositionType type, bool isBig = false)` | method |
| `MBBindingList` | `public MBBindingList<CustomBattleTroopTypeVM>TroopTypes` | property |
| `InvalidHint` | `public HintViewModel InvalidHint` | property |
| `AddTroopTypeHint` | `public HintViewModel AddTroopTypeHint` | property |
| `IsLocked` | `public bool IsLocked` | property |
| `IsValid` | `public bool IsValid` | property |
| `CompositionValue` | `public int CompositionValue` | property |
| `CompositionValuePercentageText` | `public string CompositionValuePercentageText` | property |
| `CompositionType` | `public enum CompositionType` | property |
| `CompositionType` | `public enum CompositionType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
- [same namespace CustomBattleSceneData](../CustomBattleSceneData/)
