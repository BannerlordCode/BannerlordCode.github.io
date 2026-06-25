---
title: "StealthAreaMarker"
description: "Auto-generated class reference for StealthAreaMarker."
---
# StealthAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class StealthAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/StealthAreaMarker.cs`

## Overview

`StealthAreaMarker` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ReinforcementAllyGroupSpawnPoint` | `public GameEntity ReinforcementAllyGroupSpawnPoint { get; }` |
| `WaitPoint` | `public GameEntity WaitPoint { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of StealthAreaMarker from the subsystem API first
StealthAreaMarker stealthAreaMarker = ...;
stealthAreaMarker.AfterMissionStart();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthAreaMarker stealthAreaMarker = ...;
stealthAreaMarker.AfterMissionStart();
```

## See Also

- [Area Index](../)