<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DividableTask`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DividableTask

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DividableTask`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DividableTask.cs`

## Overview

`DividableTask` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ResetTaskStatus
`public void ResetTaskStatus()`

**Purpose:** Resets `task status` to its initial state.

### SetTaskFinished
`public void SetTaskFinished(bool callLastAction = false)`

**Purpose:** Sets the value or state of `task finished`.

### Update
`public bool Update()`

**Purpose:** Updates the state or data of `update`.

### SetLastAction
`public void SetLastAction(Action action)`

**Purpose:** Sets the value or state of `last action`.

## Usage Example

```csharp
var value = new DividableTask();
value.ResetTaskStatus();
```

## See Also

- [Complete Class Catalog](../catalog)