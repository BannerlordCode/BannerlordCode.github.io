---
title: "MultiplayerLocalDataManager"
description: "MultiplayerLocalDataManager: a public class in TaleWorlds.MountAndBlade.Diamond.Lobby; 7 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLocalDataManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MultiplayerLocalDataManager`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerLocalDataManager lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs. It is a public class; the inheritance chain is MultiplayerLocalDataManager. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLocalDataManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Lobby`, inheritance chain MultiplayerLocalDataManager. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static MultiplayerLocalDataManager Instance` | property |
| `TauntSlotData` | `public TauntSlotDataContainer TauntSlotData` | property |
| `MatchHistory` | `public MatchHistoryDataContainer MatchHistory` | property |
| `FavoriteServers` | `public FavoriteServerDataContainer FavoriteServers` | property |
| `InitializeManager` | `public static void InitializeManager()` | method |
| `FinalizeManager` | `public static void FinalizeManager()` | method |
| `Tick` | `public async void Tick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MultiplayerLocalData](../MultiplayerLocalData/)
- [same namespace MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
