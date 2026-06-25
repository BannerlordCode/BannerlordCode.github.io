---
title: "LoadCallbackInitializator"
description: "Auto-generated class reference for LoadCallbackInitializator."
---
# LoadCallbackInitializator

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class LoadCallbackInitializator`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Load/LoadCallbackInitializator.cs`

## Overview

`LoadCallbackInitializator` lives in `TaleWorlds.SaveSystem.Load` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Load` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeObjects
`public void InitializeObjects()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by objects.

```csharp
// Obtain an instance of LoadCallbackInitializator from the subsystem API first
LoadCallbackInitializator loadCallbackInitializator = ...;
loadCallbackInitializator.InitializeObjects();
```

### AfterInitializeObjects
`public void AfterInitializeObjects()`

**Purpose:** **Purpose:** Executes the AfterInitializeObjects logic.

```csharp
// Obtain an instance of LoadCallbackInitializator from the subsystem API first
LoadCallbackInitializator loadCallbackInitializator = ...;
loadCallbackInitializator.AfterInitializeObjects();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LoadCallbackInitializator loadCallbackInitializator = ...;
loadCallbackInitializator.InitializeObjects();
```

## See Also

- [Area Index](../)