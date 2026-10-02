---
title: "FactionItemVM"
description: "FactionItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem, inheriting ViewModel; 5 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FactionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class FactionItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

FactionItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FactionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FactionItemVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`, inheritance chain FactionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Faction` | `public BasicCultureObject Faction` | property |
| `FactionItemVM` | `public FactionItemVM(BasicCultureObject faction, Action<FactionItemVM>onSelected)` | constructor |
| `Hint` | `public HintViewModel Hint` | property |
| `CultureCode` | `public string CultureCode` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterItemVM](../CharacterItemVM/)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM/)
- [same namespace GameTypeItemVM](../GameTypeItemVM/)
- [same namespace MapItemVM](../MapItemVM/)
