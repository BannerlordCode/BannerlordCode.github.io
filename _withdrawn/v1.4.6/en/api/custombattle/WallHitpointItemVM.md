---
title: "WallHitpointItemVM"
description: "WallHitpointItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem, inheriting SelectorItemVM; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WallHitpointItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class WallHitpointItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

WallHitpointItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is WallHitpointItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WallHitpointItemVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`, inheritance chain WallHitpointItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/WallHitpointItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WallState` | `public string WallState` | property |
| `BreachedWallCount` | `public int BreachedWallCount` | property |
| `WallHitpointItemVM` | `public WallHitpointItemVM(string wallStateName, int breachedWallCount) : base(wallStateName)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorItemVM](../../viewmodel/SelectorItemVM/)
- [same namespace CharacterItemVM](../CharacterItemVM/)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM/)
- [same namespace FactionItemVM](../FactionItemVM/)
- [same namespace GameTypeItemVM](../GameTypeItemVM/)
