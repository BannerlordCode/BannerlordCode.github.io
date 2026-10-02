---
title: "CustomBattleFactionSelectionVM"
description: "CustomBattleFactionSelectionVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleFactionSelectionVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleFactionSelectionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomBattleFactionSelectionVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleFactionSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleFactionSelectionVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`, inheritance chain CustomBattleFactionSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomBattleFactionSelectionVM` | `public CustomBattleFactionSelectionVM(Action<BasicCultureObject>onSelectionChanged)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SelectFaction` | `public void SelectFaction(int index)` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `MBBindingList` | `public MBBindingList<FactionItemVM>Factions` | property |
| `SelectedFactionName` | `public string SelectedFactionName` | property |
| `SelectedItem` | `public FactionItemVM SelectedItem` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterItemVM](../CharacterItemVM/)
- [same namespace FactionItemVM](../FactionItemVM/)
- [same namespace GameTypeItemVM](../GameTypeItemVM/)
- [same namespace MapItemVM](../MapItemVM/)
