<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Timer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Timer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Timer`
**Base:** none
**File:** `TaleWorlds.Core/Timer.cs`

## Overview

`Timer` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StartTime` | `public float StartTime { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `PreviousDeltaTime` | `public float PreviousDeltaTime { get; }` |

## Key Methods

### Check
`public virtual bool Check(float gameTime)`

**Purpose:** Handles logic related to `check`.

### ElapsedTime
`public float ElapsedTime()`

**Purpose:** Handles logic related to `elapsed time`.

### Reset
`public void Reset(float gameTime)`

**Purpose:** Resets `reset` to its initial state.

### Reset
`public void Reset(float gameTime, float newDuration)`

**Purpose:** Resets `reset` to its initial state.

### AdjustStartTime
`public void AdjustStartTime(float deltaTime)`

**Purpose:** Handles logic related to `adjust start time`.

## Usage Example

```csharp
var value = new Timer();
value.Check(0);
```

## See Also

- [Complete Class Catalog](../catalog)