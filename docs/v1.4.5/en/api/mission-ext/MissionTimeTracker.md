<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTimeTracker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTimeTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionTimeTracker`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimeTracker.cs`

## Overview

`MissionTimeTracker` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfTicks` | `public long NumberOfTicks { get; }` |
| `DeltaTimeInTicks` | `public long DeltaTimeInTicks { get; }` |

## Key Methods

### Tick
`public void Tick(float seconds)`

**Purpose:** Handles logic related to `tick`.

### UpdateSync
`public void UpdateSync(float newValue)`

**Purpose:** Updates the state or data of `sync`.

### GetLastSyncDifference
`public float GetLastSyncDifference()`

**Purpose:** Gets the current value of `last sync difference`.

## Usage Example

```csharp
var value = new MissionTimeTracker();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)