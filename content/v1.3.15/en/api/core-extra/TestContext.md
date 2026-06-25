---
title: "TestContext"
description: "Auto-generated class reference for TestContext."
---
# TestContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TestContext`
**Base:** none
**File:** `TaleWorlds.Library/TestContext.cs`

## Overview

`TestContext` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RunTestAux
`public void RunTestAux(string commandLine)`

**Purpose:** **Purpose:** Executes the RunTestAux logic.

```csharp
// Obtain an instance of TestContext from the subsystem API first
TestContext testContext = ...;
testContext.RunTestAux("example");
```

### OnApplicationTick
`public void OnApplicationTick(float dt)`

**Purpose:** **Purpose:** Invoked when the application tick event is raised.

```csharp
// Obtain an instance of TestContext from the subsystem API first
TestContext testContext = ...;
testContext.OnApplicationTick(0);
```

### TickTest
`public void TickTest(float dt)`

**Purpose:** **Purpose:** Advances the test state each frame or update cycle.

```csharp
// Obtain an instance of TestContext from the subsystem API first
TestContext testContext = ...;
testContext.TickTest(0);
```

### FinalizeContext
`public void FinalizeContext()`

**Purpose:** **Purpose:** Executes the FinalizeContext logic.

```csharp
// Obtain an instance of TestContext from the subsystem API first
TestContext testContext = ...;
testContext.FinalizeContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TestContext testContext = ...;
testContext.RunTestAux("example");
```

## See Also

- [Area Index](../)