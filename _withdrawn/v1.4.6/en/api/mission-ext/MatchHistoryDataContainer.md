---
title: "MatchHistoryDataContainer"
description: "MatchHistoryDataContainer: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData, inheriting MultiplayerLocalDataContainer<MatchHistoryData>; 7 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchHistoryDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MatchHistoryDataContainer lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs. It is a public class, implementing/inheriting MultiplayerLocalDataContainer<MatchHistoryData>; the inheritance chain is MatchHistoryDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MatchHistoryDataContainer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`, inheritance chain MatchHistoryDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MatchHistoryDataContainer` | `public MatchHistoryDataContainer()` | constructor |
| `GetSaveDirectoryName` | `protected override string GetSaveDirectoryName()` | method |
| `GetSaveFileName` | `protected override string GetSaveFileName()` | method |
| `OnBeforeRemoveEntry` | `protected override void OnBeforeRemoveEntry(MatchHistoryData item, out bool canRemoveEntry)` | method |
| `OnBeforeAddEntry` | `protected override void OnBeforeAddEntry(MatchHistoryData item, out bool canAddEntry)` | method |
| `List` | `protected override List<MatchHistoryData>DeserializeInCompatibilityMode(string serializedJson)` | method |
| `TryGetHistoryData` | `public bool TryGetHistoryData(string matchId, out MatchHistoryData historyData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
- [same namespace FavoriteServerData](../FavoriteServerData/)
- [same namespace FavoriteServerDataContainer](../FavoriteServerDataContainer/)
- [same namespace MatchHistoryData](../MatchHistoryData/)
- [same namespace PlayerInfo](../PlayerInfo/)
