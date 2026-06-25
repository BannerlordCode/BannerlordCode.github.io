---
title: "RoundStateExtensions"
description: "Auto-generated class reference for RoundStateExtensions."
---
# RoundStateExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RoundStateExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RoundStateExtensions.cs`

## Overview

`RoundStateExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StateHasVisualTimer
`public static bool StateHasVisualTimer(this MultiplayerRoundState roundState)`

**Purpose:** **Purpose:** Executes the StateHasVisualTimer logic.

```csharp
// Static call; no instance required
RoundStateExtensions.StateHasVisualTimer(roundState);
```

## Usage Example

```csharp
RoundStateExtensions.StateHasVisualTimer(roundState);
```

## See Also

- [Area Index](../)