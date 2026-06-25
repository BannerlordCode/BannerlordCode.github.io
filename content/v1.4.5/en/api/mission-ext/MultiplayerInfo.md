---
title: "MultiplayerInfo"
description: "Auto-generated class reference for MultiplayerInfo."
---
# MultiplayerInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerInfo`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerInfo.cs`

## Overview

`MultiplayerInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsMultiplayerTeamAvailable
`public bool IsMultiplayerTeamAvailable(int peerNo, int teamNo)`

**Purpose:** Determines whether the current object is in the `multiplayer team available` state or condition.

```csharp
// Obtain an instance of MultiplayerInfo from the subsystem API first
MultiplayerInfo multiplayerInfo = ...;
var result = multiplayerInfo.IsMultiplayerTeamAvailable(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerInfo multiplayerInfo = ...;
multiplayerInfo.IsMultiplayerTeamAvailable(0, 0);
```

## See Also

- [Area Index](../)