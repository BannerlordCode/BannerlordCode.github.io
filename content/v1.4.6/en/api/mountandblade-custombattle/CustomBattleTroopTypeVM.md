---
title: "CustomBattleTroopTypeVM"
description: "CustomBattleTroopTypeVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 14 exposed members (5 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs."
---
# CustomBattleTroopTypeVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleTroopTypeVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs`

## Overview

CustomBattleTroopTypeVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleTroopTypeVM → ViewModel. It exposes 14 public/protected members: 5 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleTroopTypeVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomBattleTroopTypeVM → ViewModel. The surface is property-led (properties 8/14, methods 5/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | property |
| `CustomBattleTroopTypeVM` | `public CustomBattleTroopTypeVM(BasicCharacterObject character, Action<CustomBattleTroopTypeVM>onSelectionToggled, StringItemWithHintVM typeIconData, MBReadOnlyList<SkillObject>allSkills, bool isDefault)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteToggleSelection` | `public void ExecuteToggleSelection()` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `GetCharacterTierData` | `public static StringItemWithHintVM GetCharacterTierData(BasicCharacterObject character, bool isBig = false)` | method |
| `GetCharacterTier` | `public static int GetCharacterTier(BasicCharacterObject character)` | method |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `TroopSkillsHint` | `public BasicTooltipViewModel TroopSkillsHint` | property |
| `NameHint` | `public HintViewModel NameHint` | property |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | property |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | property |
| `Name` | `public string Name` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
