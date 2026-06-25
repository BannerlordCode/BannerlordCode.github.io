---
title: "LoadContext"
description: "Auto-generated class reference for LoadContext."
---
# LoadContext

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class LoadContext`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Load/LoadContext.cs`

## Overview

`LoadContext` lives in `TaleWorlds.SaveSystem.Load` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Load` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableLoadStatistics` | `public static bool EnableLoadStatistics { get; }` |
| `RootObject` | `public object RootObject { get; }` |
| `DefinitionContext` | `public DefinitionContext DefinitionContext { get; }` |
| `Driver` | `public ISaveDriver Driver { get; }` |

## Key Methods

### Load
`public bool Load(LoadData loadData, bool loadAsLateInitialize)`

**Purpose:** Reads the current object's data from persistent storage or a stream.

```csharp
// Obtain an instance of LoadContext from the subsystem API first
LoadContext loadContext = ...;
var result = loadContext.Load(loadData, false);
```

### TryConvertType
`public static bool TryConvertType(Type sourceType, Type targetType, ref object data)`

**Purpose:** Attempts to retrieve `convert type`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
LoadContext.TryConvertType(sourceType, targetType, data);
```

### GetObjectWithId
`public ObjectHeaderLoadData GetObjectWithId(int id)`

**Purpose:** Reads and returns the `object with id` value held by the current object.

```csharp
// Obtain an instance of LoadContext from the subsystem API first
LoadContext loadContext = ...;
var result = loadContext.GetObjectWithId(0);
```

### GetContainerWithId
`public ContainerHeaderLoadData GetContainerWithId(int id)`

**Purpose:** Reads and returns the `container with id` value held by the current object.

```csharp
// Obtain an instance of LoadContext from the subsystem API first
LoadContext loadContext = ...;
var result = loadContext.GetContainerWithId(0);
```

### GetStringWithId
`public string GetStringWithId(int id)`

**Purpose:** Reads and returns the `string with id` value held by the current object.

```csharp
// Obtain an instance of LoadContext from the subsystem API first
LoadContext loadContext = ...;
var result = loadContext.GetStringWithId(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LoadContext loadContext = ...;
loadContext.Load(loadData, false);
```

## See Also

- [Area Index](../)