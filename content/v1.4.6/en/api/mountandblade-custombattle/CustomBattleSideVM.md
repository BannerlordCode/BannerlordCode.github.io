---
title: "CustomBattleSideVM"
description: "CustomBattleSideVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 15 exposed members (4 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs."
---
# CustomBattleSideVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleSideVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs`

## Overview

CustomBattleSideVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleSideVM → ViewModel. It exposes 15 public/protected members: 4 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleSideVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomBattleSideVM → ViewModel. The surface is property-led (properties 10/15, methods 4/15), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedCharacter` | `public BasicCharacterObject SelectedCharacter` | property |
| `CustomBattleSideVM` | `public CustomBattleSideVM(TextObject sideName, bool isPlayerSide, TroopTypeSelectionPopUpVM troopTypeSelectionPopUp, Action onCharacterSelected)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnPlayerTypeChange` | `public void OnPlayerTypeChange(CustomBattlePlayerType playerType)` | method |
| `UpdateCharacterVisual` | `public void UpdateCharacterVisual()` | method |
| `Randomize` | `public void Randomize(CustomBattleSideVM oppositeSide = null)` | method |
| `CurrentSelectedCharacter` | `public CharacterViewModel CurrentSelectedCharacter` | property |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>ArmorsList` | property |
| `MBBindingList` | `public MBBindingList<CharacterEquipmentItemVM>WeaponsList` | property |
| `FactionText` | `public string FactionText` | property |
| `TitleText` | `public string TitleText` | property |
| `Name` | `public string Name` | property |
| `SelectorVM` | `public SelectorVM<CharacterItemVM>CharacterSelectionGroup` | property |
| `CompositionGroup` | `public ArmyCompositionGroupVM CompositionGroup` | property |
| `FactionSelectionGroup` | `public CustomBattleFactionSelectionVM FactionSelectionGroup` | property |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
