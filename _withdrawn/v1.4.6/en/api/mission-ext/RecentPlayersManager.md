---
title: "RecentPlayersManager"
description: "RecentPlayersManager: a public class in TaleWorlds.MountAndBlade.Diamond; 10 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RecentPlayersManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public static class RecentPlayersManager`
**File:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RecentPlayersManager lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs. It is a public class; the inheritance chain is RecentPlayersManager. It exposes 10 public/protected members: 7 methods, 1 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecentPlayersManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain RecentPlayersManager. The surface is method-led (methods 7/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<RecentPlayerInfo>RecentPlayers` | property |
| `Initialize` | `public static async void Initialize()` | method |
| `Task` | `public static async Task<MBReadOnlyList<RecentPlayerInfo>>GetRecentPlayerInfos()` | method |
| `PlayerId[]GetRecentPlayerIds` | `public static PlayerId[]GetRecentPlayerIds()` | method |
| `AddOrUpdatePlayerEntry` | `public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)` | method |
| `InteractionType>OnRecentPlayerInteraction;` | `public static event Action<PlayerId, InteractionType>OnRecentPlayerInteraction;` | event |
| `TrimPlayers` | `public static void TrimPlayers()` | method |
| `Serialize` | `public static void Serialize()` | method |
| `IEnumerable` | `public static IEnumerable<PlayerId>GetPlayersOrdered()` | method |
| `InteractionProcessType` | `public enum InteractionProcessType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
