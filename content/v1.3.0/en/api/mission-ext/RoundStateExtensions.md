---
title: "RoundStateExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RoundStateExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RoundStateExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RoundStateExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/RoundStateExtensions.cs`

## Overview

`RoundStateExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StateHasVisualTimer
`public static bool StateHasVisualTimer(this MultiplayerRoundState roundState)`

**Purpose:** Handles logic related to `state has visual timer`.

## Usage Example

```csharp
RoundStateExtensions.StateHasVisualTimer(roundState);
```

## See Also

- [Complete Class Catalog](../catalog)