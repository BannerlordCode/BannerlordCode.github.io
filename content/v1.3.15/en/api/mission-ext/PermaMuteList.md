---
title: "PermaMuteList"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PermaMuteList`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PermaMuteList

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PermaMuteList`
**Area:** mission-ext

## Overview

`PermaMuteList` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded { get; }` |
| `MutedPlayers` | `public static IReadOnlyList<ValueTuple<string, string>> MutedPlayers { get; }` |

## Key Methods

### SetPermanentMuteAvailableCallback
`public static void SetPermanentMuteAvailableCallback(Func<bool> getPermanentMuteAvailable)`

**Purpose:** Sets the value or state of `permanent mute available callback`.

### LoadMutedPlayers
`public static Task LoadMutedPlayers(PlayerId currentPlayerId)`

**Purpose:** Loads `muted players` data.

### SaveMutedPlayers
`public static void SaveMutedPlayers()`

**Purpose:** Saves `muted players` data.

### IsPlayerMuted
`public static bool IsPlayerMuted(PlayerId player)`

**Purpose:** Handles logic related to `is player muted`.

### MutePlayer
`public static void MutePlayer(PlayerId player, string name)`

**Purpose:** Handles logic related to `mute player`.

### RemoveMutedPlayer
`public static void RemoveMutedPlayer(PlayerId player)`

**Purpose:** Removes `muted player` from the current collection or state.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
