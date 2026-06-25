---
title: "PlayerJoinGameData"
description: "Auto-generated class reference for PlayerJoinGameData."
---
# PlayerJoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`

## Overview

`PlayerJoinGameData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerJoinGameData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PartyId` | `public Guid? PartyId { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `IpAddress` | `public string IpAddress { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PlayerJoinGameData from the subsystem API first
PlayerJoinGameData playerJoinGameData = ...;
var result = playerJoinGameData.ToString();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
PlayerJoinGameData entry = ...;
```

## See Also

- [Area Index](../)