---
title: "LobbyTauntHelper"
description: "Auto-generated class reference for LobbyTauntHelper."
---
# LobbyTauntHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class LobbyTauntHelper`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/LobbyTauntHelper.cs`

## Overview

`LobbyTauntHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `LobbyTauntHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PrepareForTaunt
`public static Equipment PrepareForTaunt(Equipment originalEquipment, TauntCosmeticElement taunt, bool doNotAddComplimentaryWeapons = false)`

**Purpose:** Finishes prerequisite setup for the upcoming `for taunt` operation.

```csharp
// Static call; no instance required
LobbyTauntHelper.PrepareForTaunt(originalEquipment, taunt, false);
```

## Usage Example

```csharp
LobbyTauntHelper.Initialize();
```

## See Also

- [Area Index](../)