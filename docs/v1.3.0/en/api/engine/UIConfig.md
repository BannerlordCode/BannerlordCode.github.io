<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UIConfig`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UIConfig

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public static class UIConfig`
**Base:** none
**File:** `TaleWorlds.Engine.GauntletUI/UIConfig.cs`

## Overview

`UIConfig` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoNotUseGeneratedPrefabs` | `public static bool DoNotUseGeneratedPrefabs { get; set; }` |
| `DebugModeEnabled` | `public static bool DebugModeEnabled { get; set; }` |

## Key Methods

### GetIsUsingGeneratedPrefabs
`public static bool GetIsUsingGeneratedPrefabs()`

**Purpose:** Gets the current value of `is using generated prefabs`.

### GetIsHotReloadEnabled
`public static bool GetIsHotReloadEnabled()`

**Purpose:** Gets the current value of `is hot reload enabled`.

### SetDebugMode
`public static string SetDebugMode(List<string> args)`

**Purpose:** Sets the value or state of `debug mode`.

### SetUsingGeneratedPrefabs
`public static string SetUsingGeneratedPrefabs(List<string> args)`

**Purpose:** Sets the value or state of `using generated prefabs`.

## Usage Example

```csharp
UIConfig.GetIsUsingGeneratedPrefabs();
```

## See Also

- [Complete Class Catalog](../catalog)