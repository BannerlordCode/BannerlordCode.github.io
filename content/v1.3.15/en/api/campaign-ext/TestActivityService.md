---
title: "TestActivityService"
description: "Auto-generated class reference for TestActivityService."
---
# TestActivityService

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class TestActivityService : IActivityService`
**Base:** `IActivityService`
**File:** `TaleWorlds.ActivitySystem/TestActivityService.cs`

## Overview

`TestActivityService` lives in `TaleWorlds.ActivitySystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ActivitySystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActivityTransition
`public ActivityTransition GetActivityTransition(string activityId)`

**Purpose:** Reads and returns the `activity transition` value held by the current object.

```csharp
// Obtain an instance of TestActivityService from the subsystem API first
TestActivityService testActivityService = ...;
var result = testActivityService.GetActivityTransition("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TestActivityService testActivityService = ...;
testActivityService.GetActivityTransition("example");
```

## See Also

- [Area Index](../)