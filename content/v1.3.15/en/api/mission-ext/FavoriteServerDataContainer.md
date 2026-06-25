---
title: "FavoriteServerDataContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FavoriteServerDataContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FavoriteServerDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerDataContainer : MultiplayerLocalDataContainer<FavoriteServerData>`
**Base:** `MultiplayerLocalDataContainer<FavoriteServerData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs`

## Overview

`FavoriteServerDataContainer` lives in `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TryGetServerData
`public bool TryGetServerData(GameServerEntry serverEntry, out FavoriteServerData favoriteServerData)`

**Purpose:** Attempts to get `get server data`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new FavoriteServerDataContainer();
value.TryGetServerData(serverEntry, favoriteServerData);
```

## See Also

- [Complete Class Catalog](../catalog)