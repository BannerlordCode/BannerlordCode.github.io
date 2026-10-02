---
title: "PermaMuteList"
description: "PermaMuteList: a public class in TaleWorlds.MountAndBlade.Diamond; 8 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PermaMuteList

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public static class PermaMuteList`
**File:** `TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PermaMuteList lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs. It is a public class; the inheritance chain is PermaMuteList. It exposes 8 public/protected members: 6 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PermaMuteList lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PermaMuteList. The surface is method-led (methods 6/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded` | property |
| `string>>MutedPlayers` | `public static IReadOnlyList<ValueTuple<string, string>>MutedPlayers` | property |
| `SetPermanentMuteAvailableCallback` | `public static void SetPermanentMuteAvailableCallback(Func<bool>getPermanentMuteAvailable)` | method |
| `LoadMutedPlayers` | `public static async Task LoadMutedPlayers(PlayerId currentPlayerId)` | method |
| `SaveMutedPlayers` | `public static async void SaveMutedPlayers()` | method |
| `IsPlayerMuted` | `public static bool IsPlayerMuted(PlayerId player)` | method |
| `MutePlayer` | `public static void MutePlayer(PlayerId player, string name)` | method |
| `RemoveMutedPlayer` | `public static void RemoveMutedPlayer(PlayerId player)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
