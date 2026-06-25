---
title: "FavoriteServerData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FavoriteServerData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FavoriteServerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs`

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

**Purpose:** Creates a new `from` instance or object.

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**Purpose:** Checks whether the current object has/contains `same content with`.

### HasSameContentWith
`public bool HasSameContentWith(GameServerEntry serverEntry)`

**Purpose:** Checks whether the current object has/contains `same content with`.

## Usage Example

```csharp
var value = new FavoriteServerData();
```

## See Also

- [Complete Class Catalog](../catalog)