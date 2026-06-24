<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RandomTimer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RandomTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RandomTimer : Timer`
**Base:** `Timer`
**File:** `TaleWorlds.MountAndBlade/RandomTimer.cs`

## Overview

`RandomTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public override bool Check(float gameTime)`

**Purpose:** Handles logic related to `check`.

### ChangeDuration
`public void ChangeDuration(float min, float max)`

**Purpose:** Handles logic related to `change duration`.

### RecomputeDuration
`public void RecomputeDuration()`

**Purpose:** Handles logic related to `recompute duration`.

## Usage Example

```csharp
var value = new RandomTimer();
value.Check(0);
```

## See Also

- [Complete Class Catalog](../catalog)