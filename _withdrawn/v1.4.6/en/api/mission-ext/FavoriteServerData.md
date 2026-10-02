---
title: "FavoriteServerData"
description: "FavoriteServerData: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData, inheriting MultiplayerLocalData; 7 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FavoriteServerData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FavoriteServerData lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs. It is a public class, implementing/inheriting MultiplayerLocalData; the inheritance chain is FavoriteServerData → MultiplayerLocalData. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FavoriteServerData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`, inheritance chain FavoriteServerData → MultiplayerLocalData. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Address` | `public string Address` | property |
| `Port` | `public int Port` | property |
| `GameType` | `public string GameType` | property |
| `Name` | `public string Name` | property |
| `CreateFrom` | `public static FavoriteServerData CreateFrom(GameServerEntry serverEntry)` | method |
| `HasSameContentWith` | `public override bool HasSameContentWith(MultiplayerLocalData other)` | method |
| `HasSameContentWith` | `public bool HasSameContentWith(GameServerEntry serverEntry)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MultiplayerLocalData](../MultiplayerLocalData/)
- [same namespace FavoriteServerDataContainer](../FavoriteServerDataContainer/)
- [same namespace MatchHistoryData](../MatchHistoryData/)
- [same namespace MatchHistoryDataContainer](../MatchHistoryDataContainer/)
- [same namespace PlayerInfo](../PlayerInfo/)
