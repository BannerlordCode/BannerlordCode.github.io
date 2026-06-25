---
title: "DividableTask"
description: "Auto-generated class reference for DividableTask."
---
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

**Purpose:** **Purpose:** Returns task status to its default or initial condition.

```csharp
// Obtain an instance of DividableTask from the subsystem API first
DividableTask dividableTask = ...;
dividableTask.ResetTaskStatus();
```

### SetTaskFinished
`public void SetTaskFinished(bool callLastAction = false)`

**Purpose:** **Purpose:** Assigns a new value to task finished and updates the object's internal state.

```csharp
// Obtain an instance of DividableTask from the subsystem API first
DividableTask dividableTask = ...;
dividableTask.SetTaskFinished(false);
```

### Update
`public bool Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of DividableTask from the subsystem API first
DividableTask dividableTask = ...;
var result = dividableTask.Update();
```

### SetLastAction
`public void SetLastAction(Action action)`

**Purpose:** **Purpose:** Assigns a new value to last action and updates the object's internal state.

```csharp
// Obtain an instance of DividableTask from the subsystem API first
DividableTask dividableTask = ...;
dividableTask.SetLastAction(action);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DividableTask dividableTask = ...;
dividableTask.ResetTaskStatus();
```

## See Also

- [Area Index](../)