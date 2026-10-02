---
title: "CharacterItemVM"
description: "CharacterItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting SelectorItemVM; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CharacterItemVM.cs."
---
# CharacterItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CharacterItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CharacterItemVM.cs`

## Overview

CharacterItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CharacterItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is CharacterItemVM → SelectorItemVM. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterItemVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem) the module directory; inheritance chain CharacterItemVM → SelectorItemVM. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. SelectorItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CharacterItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | property |
| `CharacterItemVM` | `public CharacterItemVM(BasicCharacterObject character) : base(character.Name.ToString())` | constructor |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [same namespace FactionItemVM](../FactionItemVM)
- [same namespace GameTypeItemVM](../GameTypeItemVM)
- [same namespace MapItemVM](../MapItemVM)
