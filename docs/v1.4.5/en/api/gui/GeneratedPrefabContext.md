<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneratedPrefabContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GeneratedPrefabContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedPrefabContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/GeneratedPrefabContext.cs`

## Overview

`GeneratedPrefabContext` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CollectPrefabs
`public void CollectPrefabs()`

**Purpose:** Handles logic related to `collect prefabs`.

### AddGeneratedPrefab
`public void AddGeneratedPrefab(string prefabName, string variantName, CreateGeneratedWidget creator)`

**Purpose:** Adds `generated prefab` to the current collection or state.

### InstantiatePrefab
`public GeneratedPrefabInstantiationResult InstantiatePrefab(UIContext conext, string prefabName, string variantName, Dictionary<string, object> data)`

**Purpose:** Handles logic related to `instantiate prefab`.

## Usage Example

```csharp
var value = new GeneratedPrefabContext();
value.CollectPrefabs();
```

## See Also

- [Complete Class Catalog](../catalog)