---
title: "UIConfig"
description: "Auto-generated class reference for UIConfig."
---
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

**Purpose:** **Purpose:** Reads and returns the is using generated prefabs value held by the this instance.

```csharp
// Static call; no instance required
UIConfig.GetIsUsingGeneratedPrefabs();
```

### GetIsHotReloadEnabled
`public static bool GetIsHotReloadEnabled()`

**Purpose:** **Purpose:** Reads and returns the is hot reload enabled value held by the this instance.

```csharp
// Static call; no instance required
UIConfig.GetIsHotReloadEnabled();
```

### SetDebugMode
`public static string SetDebugMode(List<string> args)`

**Purpose:** **Purpose:** Assigns a new value to debug mode and updates the object's internal state.

```csharp
// Static call; no instance required
UIConfig.SetDebugMode(args);
```

### SetUsingGeneratedPrefabs
`public static string SetUsingGeneratedPrefabs(List<string> args)`

**Purpose:** **Purpose:** Assigns a new value to using generated prefabs and updates the object's internal state.

```csharp
// Static call; no instance required
UIConfig.SetUsingGeneratedPrefabs(args);
```

## Usage Example

```csharp
UIConfig.GetIsUsingGeneratedPrefabs();
```

## See Also

- [Area Index](../)