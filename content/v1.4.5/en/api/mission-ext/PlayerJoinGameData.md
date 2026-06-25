---
title: "PlayerJoinGameData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerJoinGameData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerJoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`

## Overview

`PlayerJoinGameData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PlayerJoinGameData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PartyId` | `public Guid? PartyId { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `IpAddress` | `public string IpAddress { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new PlayerJoinGameData();
```

## See Also

- [Complete Class Catalog](../catalog)