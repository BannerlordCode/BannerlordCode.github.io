---
title: "FavoriteServerData"
description: "Auto-generated class reference for FavoriteServerData."
---
# FavoriteServerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/FavoriteServerData.cs`

## Overview

`FavoriteServerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FavoriteServerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### CreateFrom
`public static FavoriteServerData CreateFrom(GameServerEntry serverEntry)`

**Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
FavoriteServerData.CreateFrom(serverEntry);
```

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**Purpose:** Determines whether the this instance already holds same content with.

```csharp
// Obtain an instance of FavoriteServerData from the subsystem API first
FavoriteServerData favoriteServerData = ...;
var result = favoriteServerData.HasSameContentWith(other);
```

### HasSameContentWith
`public bool HasSameContentWith(GameServerEntry serverEntry)`

**Purpose:** Determines whether the this instance already holds same content with.

```csharp
// Obtain an instance of FavoriteServerData from the subsystem API first
FavoriteServerData favoriteServerData = ...;
var result = favoriteServerData.HasSameContentWith(serverEntry);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FavoriteServerData entry = ...;
```

## See Also

- [Area Index](../)