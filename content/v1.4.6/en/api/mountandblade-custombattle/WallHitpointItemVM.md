---
title: "WallHitpointItemVM"
description: "WallHitpointItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting SelectorItemVM; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs."
---
# WallHitpointItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class WallHitpointItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs`

## Overview

WallHitpointItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is WallHitpointItemVM → SelectorItemVM. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WallHitpointItemVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem) the module directory; inheritance chain WallHitpointItemVM → SelectorItemVM. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. SelectorItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WallState` | `public string WallState` | property |
| `BreachedWallCount` | `public int BreachedWallCount` | property |
| `WallHitpointItemVM` | `public WallHitpointItemVM(string wallStateName, int breachedWallCount) : base(wallStateName)` | constructor |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterItemVM](../CharacterItemVM)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [same namespace FactionItemVM](../FactionItemVM)
- [same namespace GameTypeItemVM](../GameTypeItemVM)
