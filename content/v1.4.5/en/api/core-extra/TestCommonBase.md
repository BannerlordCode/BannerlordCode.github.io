---
title: "TestCommonBase"
description: "Auto-generated class reference for TestCommonBase."
---
# TestCommonBase

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class TestCommonBase`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/TestCommonBase.cs`

## Overview

`TestCommonBase` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public abstract void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
testCommonBase.Tick();
```

### StartTimeoutTimer
`public void StartTimeoutTimer()`

**Purpose:** Starts the timeout timer flow or state machine.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
testCommonBase.StartTimeoutTimer();
```

### ToggleTimeoutTimer
`public void ToggleTimeoutTimer()`

**Purpose:** Executes the ToggleTimeoutTimer logic.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
testCommonBase.ToggleTimeoutTimer();
```

### CheckTimeoutTimer
`public bool CheckTimeoutTimer()`

**Purpose:** Verifies whether timeout timer holds true for the this instance.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
var result = testCommonBase.CheckTimeoutTimer();
```

### GetGameStatus
`public virtual string GetGameStatus()`

**Purpose:** Reads and returns the game status value held by the this instance.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
var result = testCommonBase.GetGameStatus();
```

### WaitFor
`public void WaitFor(double seconds)`

**Purpose:** Pauses the current flow until the for condition is met.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
testCommonBase.WaitFor(0);
```

### WaitUntil
`public virtual async Task WaitUntil(Func<bool> func)`

**Purpose:** Pauses the current flow until the until condition is met.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
var result = testCommonBase.WaitUntil(func);
```

### WaitForAsync
`public Task WaitForAsync(double seconds, Random random)`

**Purpose:** Pauses the current flow until the for async condition is met.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
var result = testCommonBase.WaitForAsync(0, random);
```

### WaitForAsync
`public Task WaitForAsync(double seconds)`

**Purpose:** Pauses the current flow until the for async condition is met.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
var result = testCommonBase.WaitForAsync(0);
```

### GetAttachmentsFolderPath
`public static string GetAttachmentsFolderPath()`

**Purpose:** Reads and returns the attachments folder path value held by the this instance.

```csharp
// Static call; no instance required
TestCommonBase.GetAttachmentsFolderPath();
```

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of TestCommonBase from the subsystem API first
TestCommonBase testCommonBase = ...;
testCommonBase.OnFinalize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TestCommonBase instance = ...;
```

## See Also

- [Area Index](../)