---
title: "GeneratedPrefabContext"
description: "Auto-generated class reference for GeneratedPrefabContext."
---
# GeneratedPrefabContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedPrefabContext`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/GeneratedPrefabContext.cs`

## Overview

`GeneratedPrefabContext` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CollectPrefabs
`public void CollectPrefabs()`

**Purpose:** **Purpose:** Executes the CollectPrefabs logic.

```csharp
// Obtain an instance of GeneratedPrefabContext from the subsystem API first
GeneratedPrefabContext generatedPrefabContext = ...;
generatedPrefabContext.CollectPrefabs();
```

### AddGeneratedPrefab
`public void AddGeneratedPrefab(string prefabName, string variantName, CreateGeneratedWidget creator)`

**Purpose:** **Purpose:** Adds generated prefab to the current collection or state.

```csharp
// Obtain an instance of GeneratedPrefabContext from the subsystem API first
GeneratedPrefabContext generatedPrefabContext = ...;
generatedPrefabContext.AddGeneratedPrefab("example", "example", creator);
```

### InstantiatePrefab
`public GeneratedPrefabInstantiationResult InstantiatePrefab(UIContext conext, string prefabName, string variantName, Dictionary<string, object> data)`

**Purpose:** **Purpose:** Executes the InstantiatePrefab logic.

```csharp
// Obtain an instance of GeneratedPrefabContext from the subsystem API first
GeneratedPrefabContext generatedPrefabContext = ...;
var result = generatedPrefabContext.InstantiatePrefab(conext, "example", "example", dictionary<string, data);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GeneratedPrefabContext generatedPrefabContext = ...;
generatedPrefabContext.CollectPrefabs();
```

## See Also

- [Area Index](../)