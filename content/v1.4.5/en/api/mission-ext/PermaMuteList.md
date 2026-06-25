---
title: "PermaMuteList"
description: "Auto-generated class reference for PermaMuteList."
---
# PermaMuteList

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PermaMuteList`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs`

## Overview

`PermaMuteList` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded { get; }` |

## Key Methods

### SetPermanentMuteAvailableCallback
`public static void SetPermanentMuteAvailableCallback(Func<bool> getPermanentMuteAvailable)`

**Purpose:** Assigns a new value to permanent mute available callback and updates the object's internal state.

```csharp
// Static call; no instance required
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

### LoadMutedPlayers
`public static async Task LoadMutedPlayers(PlayerId currentPlayerId)`

**Purpose:** Reads muted players from persistent storage or a stream.

```csharp
// Static call; no instance required
PermaMuteList.LoadMutedPlayers(currentPlayerId);
```

### SaveMutedPlayers
`public static async void SaveMutedPlayers()`

**Purpose:** Writes muted players to persistent storage or a stream.

```csharp
// Static call; no instance required
PermaMuteList.SaveMutedPlayers();
```

### IsPlayerMuted
`public static bool IsPlayerMuted(PlayerId player)`

**Purpose:** Determines whether the this instance is in the player muted state or condition.

```csharp
// Static call; no instance required
PermaMuteList.IsPlayerMuted(player);
```

### MutePlayer
`public static void MutePlayer(PlayerId player, string name)`

**Purpose:** Executes the MutePlayer logic.

```csharp
// Static call; no instance required
PermaMuteList.MutePlayer(player, "example");
```

### RemoveMutedPlayer
`public static void RemoveMutedPlayer(PlayerId player)`

**Purpose:** Removes muted player from the current collection or state.

```csharp
// Static call; no instance required
PermaMuteList.RemoveMutedPlayer(player);
```

## Usage Example

```csharp
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

## See Also

- [Area Index](../)