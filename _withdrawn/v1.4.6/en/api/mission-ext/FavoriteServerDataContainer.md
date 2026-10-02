---
title: "FavoriteServerDataContainer"
description: "FavoriteServerDataContainer: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData, inheriting MultiplayerLocalDataContainer<FavoriteServerData>; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FavoriteServerDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class FavoriteServerDataContainer : MultiplayerLocalDataContainer<FavoriteServerData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FavoriteServerDataContainer lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs. It is a public class, implementing/inheriting MultiplayerLocalDataContainer<FavoriteServerData>; the inheritance chain is FavoriteServerDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FavoriteServerDataContainer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`, inheritance chain FavoriteServerDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSaveDirectoryName` | `protected override string GetSaveDirectoryName()` | method |
| `GetSaveFileName` | `protected override string GetSaveFileName()` | method |
| `TryGetServerData` | `public bool TryGetServerData(GameServerEntry serverEntry, out FavoriteServerData favoriteServerData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
- [same namespace FavoriteServerData](../FavoriteServerData/)
- [same namespace MatchHistoryData](../MatchHistoryData/)
- [same namespace MatchHistoryDataContainer](../MatchHistoryDataContainer/)
- [same namespace PlayerInfo](../PlayerInfo/)
