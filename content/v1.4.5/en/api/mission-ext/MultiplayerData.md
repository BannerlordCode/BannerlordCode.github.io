---
title: "MultiplayerData"
description: "Auto-generated class reference for MultiplayerData."
---
# MultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerData : MBMultiplayerData`
**Base:** `MBMultiplayerData`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerData.cs`

## Overview

`MultiplayerData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MultiplayerData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsMultiplayerTeamAvailable
`public bool IsMultiplayerTeamAvailable(int peerNo, int teamNo)`

**Purpose:** Determines whether the current object is in the `multiplayer team available` state or condition.

```csharp
// Obtain an instance of MultiplayerData from the subsystem API first
MultiplayerData multiplayerData = ...;
var result = multiplayerData.IsMultiplayerTeamAvailable(0, 0);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MultiplayerData entry = ...;
```

## See Also

- [Area Index](../)