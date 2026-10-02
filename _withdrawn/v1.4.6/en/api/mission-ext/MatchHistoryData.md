---
title: "MatchHistoryData"
description: "MatchHistoryData: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData, inheriting MultiplayerLocalData; 15 exposed members (3 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchHistoryData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchHistoryData : MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MatchHistoryData lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs. It is a public class, implementing/inheriting MultiplayerLocalData; the inheritance chain is MatchHistoryData → MultiplayerLocalData. It exposes 15 public/protected members: 3 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MatchHistoryData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`, inheritance chain MatchHistoryData → MultiplayerLocalData. The surface is property-led (properties 11/15, methods 3/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MatchId` | `public string MatchId` | property |
| `MatchType` | `public string MatchType` | property |
| `GameType` | `public string GameType` | property |
| `Map` | `public string Map` | property |
| `MatchDate` | `public DateTime MatchDate` | property |
| `WinnerTeam` | `public int WinnerTeam` | property |
| `Faction1` | `public string Faction1` | property |
| `Faction2` | `public string Faction2` | property |
| `DefenderScore` | `public int DefenderScore` | property |
| `AttackerScore` | `public int AttackerScore` | property |
| `List` | `public List<PlayerInfo>Players` | property |
| `MatchHistoryData` | `public MatchHistoryData()` | constructor |
| `HasSameContentWith` | `public override bool HasSameContentWith(MultiplayerLocalData other)` | method |
| `AddOrUpdatePlayer` | `public void AddOrUpdatePlayer(string id, string username, int forcedIndex, int teamNo)` | method |
| `TryUpdatePlayerStats` | `public bool TryUpdatePlayerStats(string id, int kill, int death, int assist)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MultiplayerLocalData](../MultiplayerLocalData/)
- [same namespace FavoriteServerData](../FavoriteServerData/)
- [same namespace FavoriteServerDataContainer](../FavoriteServerDataContainer/)
- [same namespace MatchHistoryDataContainer](../MatchHistoryDataContainer/)
- [same namespace PlayerInfo](../PlayerInfo/)
