---
title: "TauntSlotDataContainer"
description: "TauntSlotDataContainer: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData, inheriting MultiplayerLocalDataContainer<TauntSlotData>; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotDataContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TauntSlotDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class TauntSlotDataContainer : MultiplayerLocalDataContainer<TauntSlotData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TauntSlotDataContainer lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotDataContainer.cs. It is a public class, implementing/inheriting MultiplayerLocalDataContainer<TauntSlotData>; the inheritance chain is TauntSlotDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TauntSlotDataContainer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`, inheritance chain TauntSlotDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotDataContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSaveDirectoryName` | `protected override string GetSaveDirectoryName()` | method |
| `GetSaveFileName` | `protected override string GetSaveFileName()` | method |
| `GetCompatibilityFilePath` | `protected override PlatformFilePath GetCompatibilityFilePath()` | method |
| `List` | `protected override List<TauntSlotData>DeserializeInCompatibilityMode(string serializedJson)` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<TauntIndexData>GetTauntIndicesForPlayer(string playerId)` | method |
| `SetTauntIndicesForPlayer` | `public void SetTauntIndicesForPlayer(string playerId, List<TauntIndexData>tauntIndices)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
- [same namespace FavoriteServerData](../FavoriteServerData/)
- [same namespace FavoriteServerDataContainer](../FavoriteServerDataContainer/)
- [same namespace MatchHistoryData](../MatchHistoryData/)
- [same namespace MatchHistoryDataContainer](../MatchHistoryDataContainer/)
