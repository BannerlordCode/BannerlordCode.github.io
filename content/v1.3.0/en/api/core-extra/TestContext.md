---
title: "TestContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestContext`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `run test aux`.

### OnApplicationTick
`public void OnApplicationTick(float dt)`

**Purpose:** Called when the `application tick` event is raised.

### TickTest
`public void TickTest(float dt)`

**Purpose:** Handles logic related to `tick test`.

### FinalizeContext
`public void FinalizeContext()`

**Purpose:** Handles logic related to `finalize context`.

## Usage Example

```csharp
var value = new TestContext();
value.RunTestAux("example");
```

## See Also

- [Complete Class Catalog](../catalog)