---
title: "ApplicationHealthChecker"
description: "Auto-generated class reference for ApplicationHealthChecker."
---
# ApplicationHealthChecker

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class ApplicationHealthChecker`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ApplicationHealthChecker.cs`

## Overview

`ApplicationHealthChecker` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Start
`public void Start()`

**Purpose:** **Purpose:** Starts the this instance's flow or state machine.

```csharp
// Obtain an instance of ApplicationHealthChecker from the subsystem API first
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Start();
```

### Stop
`public void Stop()`

**Purpose:** **Purpose:** Stops the this instance's flow or state machine.

```csharp
// Obtain an instance of ApplicationHealthChecker from the subsystem API first
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Stop();
```

### Update
`public void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of ApplicationHealthChecker from the subsystem API first
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Update();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Start();
```

## See Also

- [Area Index](../)