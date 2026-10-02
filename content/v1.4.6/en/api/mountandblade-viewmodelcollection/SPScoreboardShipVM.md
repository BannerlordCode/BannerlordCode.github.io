---
title: "SPScoreboardShipVM"
description: "SPScoreboardShipVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 10 exposed members (0 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs."
---
# SPScoreboardShipVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardShipVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs`

## Overview

SPScoreboardShipVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardShipVM → ViewModel. It exposes 10 public/protected members: 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardShipVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard) the module directory; inheritance chain SPScoreboardShipVM → ViewModel. The surface is property-led (properties 9/10, methods 0/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPScoreboardShipVM` | `public SPScoreboardShipVM(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)` | constructor |
| `ShipType` | `public string ShipType` | property |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | property |
| `IsPlayerAllyTeam` | `public bool IsPlayerAllyTeam` | property |
| `IsEnemyTeam` | `public bool IsEnemyTeam` | property |
| `CurrentHealth` | `public float CurrentHealth` | property |
| `MaxHealth` | `public float MaxHealth` | property |
| `IsDestroyed` | `public bool IsDestroyed` | property |
| `IsInactive` | `public bool IsInactive` | property |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM)
