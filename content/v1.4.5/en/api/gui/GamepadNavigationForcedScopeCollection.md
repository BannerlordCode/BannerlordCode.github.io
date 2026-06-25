---
title: "GamepadNavigationForcedScopeCollection"
description: "Auto-generated class reference for GamepadNavigationForcedScopeCollection."
---
# GamepadNavigationForcedScopeCollection

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GamepadNavigationForcedScopeCollection`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`

## Overview

`GamepadNavigationForcedScopeCollection` lives in `TaleWorlds.GauntletUI.GamepadNavigation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GamepadNavigation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Scopes` | `public List<GamepadNavigationScope> Scopes { get; }` |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope { get; set; }` |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope { get; set; }` |

## Key Methods

### IsAvailable
`public bool IsAvailable()`

**Purpose:** Determines whether the current object is in the `available` state or condition.

```csharp
// Obtain an instance of GamepadNavigationForcedScopeCollection from the subsystem API first
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
var result = gamepadNavigationForcedScopeCollection.IsAvailable();
```

### AddScope
`public void AddScope(GamepadNavigationScope scope)`

**Purpose:** Adds `scope` to the current collection or state.

```csharp
// Obtain an instance of GamepadNavigationForcedScopeCollection from the subsystem API first
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.AddScope(scope);
```

### RemoveScope
`public void RemoveScope(GamepadNavigationScope scope)`

**Purpose:** Removes `scope` from the current collection or state.

```csharp
// Obtain an instance of GamepadNavigationForcedScopeCollection from the subsystem API first
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.RemoveScope(scope);
```

### ClearScopes
`public void ClearScopes()`

**Purpose:** Removes all `scopes` from the current object.

```csharp
// Obtain an instance of GamepadNavigationForcedScopeCollection from the subsystem API first
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.ClearScopes();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of GamepadNavigationForcedScopeCollection from the subsystem API first
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
var result = gamepadNavigationForcedScopeCollection.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.IsAvailable();
```

## See Also

- [Area Index](../)