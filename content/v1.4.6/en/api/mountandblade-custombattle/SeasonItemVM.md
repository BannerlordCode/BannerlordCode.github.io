---
title: "SeasonItemVM"
description: "SeasonItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting SelectorItemVM; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SeasonItemVM.cs."
---
# SeasonItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class SeasonItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SeasonItemVM.cs`

## Overview

SeasonItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SeasonItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is SeasonItemVM → SelectorItemVM. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SeasonItemVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem) the module directory; inheritance chain SeasonItemVM → SelectorItemVM. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. SelectorItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SeasonItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SeasonId` | `public string SeasonId` | property |
| `SeasonItemVM` | `public SeasonItemVM(string seasonName, string seasonId) : base(seasonName)` | constructor |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterItemVM](../CharacterItemVM)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [same namespace FactionItemVM](../FactionItemVM)
- [same namespace GameTypeItemVM](../GameTypeItemVM)
