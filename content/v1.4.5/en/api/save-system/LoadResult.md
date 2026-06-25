---
title: "LoadResult"
description: "Auto-generated class reference for LoadResult."
---
# LoadResult

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadResult`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/LoadResult.cs`

## Overview

`LoadResult` lives in `TaleWorlds.SaveSystem.Load` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Load` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Root` | `public object Root { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `Errors` | `public LoadError Errors { get; }` |
| `MetaData` | `public MetaData MetaData { get; }` |

## Key Methods

### InitializeObjects
`public void InitializeObjects()`

**Purpose:** Prepares the resources, state, or bindings required by objects.

```csharp
// Obtain an instance of LoadResult from the subsystem API first
LoadResult loadResult = ...;
loadResult.InitializeObjects();
```

### AfterInitializeObjects
`public void AfterInitializeObjects()`

**Purpose:** Executes the AfterInitializeObjects logic.

```csharp
// Obtain an instance of LoadResult from the subsystem API first
LoadResult loadResult = ...;
loadResult.AfterInitializeObjects();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LoadResult loadResult = ...;
loadResult.InitializeObjects();
```

## See Also

- [Area Index](../)