---
title: "GeneratedPrefabInstantiationResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneratedPrefabInstantiationResult`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GeneratedPrefabInstantiationResult

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedPrefabInstantiationResult`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/GeneratedPrefabInstantiationResult.cs`

## Overview

`GeneratedPrefabInstantiationResult` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Root` | `public Widget Root { get; }` |

## Key Methods

### AddData
`public void AddData(string tag, object data)`

**Purpose:** Adds `data` to the current collection or state.

### GetExtensionData
`public object GetExtensionData(string tag)`

**Purpose:** Gets the current value of `extension data`.

## Usage Example

```csharp
var value = new GeneratedPrefabInstantiationResult();
value.AddData("example", data);
```

## See Also

- [Complete Class Catalog](../catalog)