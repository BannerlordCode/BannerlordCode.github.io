---
title: "TestPlatformServices"
description: "Auto-generated class reference for TestPlatformServices."
---
# TestPlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class TestPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `bin/TaleWorlds.PlatformService/TaleWorlds.PlatformService/TestPlatformServices.cs`

## Overview

`TestPlatformServices` lives in `TaleWorlds.PlatformService` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of TestPlatformServices from the subsystem API first
TestPlatformServices testPlatformServices = ...;
testPlatformServices.Tick(0);
```

### ActivateFriendList
`public void ActivateFriendList()`

**Purpose:** Activates the resource, state, or feature associated with friend list.

```csharp
// Obtain an instance of TestPlatformServices from the subsystem API first
TestPlatformServices testPlatformServices = ...;
testPlatformServices.ActivateFriendList();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TestPlatformServices testPlatformServices = ...;
testPlatformServices.Tick(0);
```

## See Also

- [Area Index](../)