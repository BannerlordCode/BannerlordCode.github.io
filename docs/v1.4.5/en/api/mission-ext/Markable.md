<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Markable`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Markable

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Markable : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Markable.cs`

## Overview

`Markable` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### DisableMarkerActivation
`public void DisableMarkerActivation()`

**Purpose:** Handles logic related to `disable marker activation`.

### ActivateMarkerFor
`public void ActivateMarkerFor(float activeSeconds, float passiveSeconds)`

**Purpose:** Handles logic related to `activate marker for`.

### ResetPassiveDurationTimer
`public void ResetPassiveDurationTimer()`

**Purpose:** Resets `passive duration timer` to its initial state.

## Usage Example

```csharp
var value = new Markable();
value.GetTickRequirement();
```

## See Also

- [Complete Class Catalog](../catalog)