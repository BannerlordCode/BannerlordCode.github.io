---
title: "MultiplayerIntermissionVotingManager"
description: "MultiplayerIntermissionVotingManager: a public class in TaleWorlds.MountAndBlade; 33 exposed members (19 methods, 4 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerIntermissionVotingManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerIntermissionVotingManager`
**File:** `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerIntermissionVotingManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs. It is a public class; the inheritance chain is MultiplayerIntermissionVotingManager. It exposes 33 public/protected members: 19 methods, 4 properties, 1 fields, 4 events, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerIntermissionVotingManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerIntermissionVotingManager. The surface is method-led (methods 19/33, properties 4/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static MultiplayerIntermissionVotingManager Instance` | property |
| `List` | `public List<IntermissionVoteItem>MapVoteItems` | property |
| `List` | `public List<IntermissionVoteItem>CultureVoteItems` | property |
| `List` | `public List<CustomGameUsableMap>UsableMaps` | property |
| `OnMapItemAdded;` | `public event MultiplayerIntermissionVotingManager.MapItemAddedDelegate OnMapItemAdded;` | event |
| `OnCultureItemAdded;` | `public event MultiplayerIntermissionVotingManager.CultureItemAddedDelegate OnCultureItemAdded;` | event |
| `OnMapItemVoteCountChanged;` | `public event MultiplayerIntermissionVotingManager.MapItemVoteCountChangedDelegate OnMapItemVoteCountChanged;` | event |
| `OnCultureItemVoteCountChanged;` | `public event MultiplayerIntermissionVotingManager.CultureItemVoteCountChangedDelegate OnCultureItemVoteCountChanged;` | event |
| `MultiplayerIntermissionVotingManager` | `public MultiplayerIntermissionVotingManager()` | constructor |
| `AddMapItem` | `public void AddMapItem(string mapID)` | method |
| `AddUsableMap` | `public void AddUsableMap(CustomGameUsableMap usableMap)` | method |
| `List` | `public List<string>GetUsableMaps(string gameType)` | method |
| `AddCultureItem` | `public void AddCultureItem(string cultureID)` | method |
| `AddVote` | `public void AddVote(PlayerId voterID, string itemID, int voteCount)` | method |
| `SetVotesOfMap` | `public void SetVotesOfMap(int mapItemIndex, int voteCount)` | method |
| `SetVotesOfCulture` | `public void SetVotesOfCulture(int cultureItemIndex, int voteCount)` | method |
| `ClearVotes` | `public void ClearVotes()` | method |
| `ClearItems` | `public void ClearItems()` | method |
| `IsCultureItem` | `public bool IsCultureItem(string itemID)` | method |
| `IsMapItem` | `public bool IsMapItem(string itemID)` | method |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerID)` | method |
| `SelectRandomCultures` | `public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)` | method |
| `IsPeerVotedForItem` | `public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)` | method |
| `SortVotesAndPickBest` | `public void SortVotesAndPickBest()` | method |
| `MaxAllowedMapCount` | `public const int MaxAllowedMapCount` | field |
| `MapItemAddedDelegate` | `public delegate void MapItemAddedDelegate(string mapId);` | method |
| `CultureItemAddedDelegate` | `public delegate void CultureItemAddedDelegate(string cultureId);` | method |
| `MapItemVoteCountChangedDelegate` | `public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount);` | method |
| `CultureItemVoteCountChangedDelegate` | `public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount);` | method |
| `MapItemAddedDelegate` | `public delegate void MapItemAddedDelegate(string mapId)` | nested type |
| `CultureItemAddedDelegate` | `public delegate void CultureItemAddedDelegate(string cultureId)` | nested type |
| `MapItemVoteCountChangedDelegate` | `public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)` | nested type |
| `CultureItemVoteCountChangedDelegate` | `public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
