---
title: "SPScoreboardShipVM"
description: "SPScoreboardShipVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard, inheriting ViewModel; 10 exposed members (0 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPScoreboardShipVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class SPScoreboardShipVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

SPScoreboardShipVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPScoreboardShipVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPScoreboardShipVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, inheritance chain SPScoreboardShipVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/10, methods 0/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardShipVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleScoreboardVM](../CustomBattleScoreboardVM/)
- [same namespace ScoreboardBaseVM](../ScoreboardBaseVM/)
- [same namespace ScoreboardHotkeys](../ScoreboardHotkeys/)
- [same namespace SPScoreboardPartyVM](../SPScoreboardPartyVM/)
