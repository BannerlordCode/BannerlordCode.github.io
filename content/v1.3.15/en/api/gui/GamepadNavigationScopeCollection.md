---
title: "GamepadNavigationScopeCollection"
description: "Auto-generated class reference for GamepadNavigationScopeCollection."
---
# GamepadNavigationScopeCollection

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class GamepadNavigationScopeCollection`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScopeCollection.cs`

## Overview

`GamepadNavigationScopeCollection` lives in `TaleWorlds.GauntletUI.GamepadNavigation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GamepadNavigation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Source` | `public IGamepadNavigationContext Source { get; }` |
| `AllScopes` | `public ReadOnlyCollection<GamepadNavigationScope> AllScopes { get; }` |
| `UninitializedScopes` | `public ReadOnlyCollection<GamepadNavigationScope> UninitializedScopes { get; }` |
| `VisibleScopes` | `public ReadOnlyCollection<GamepadNavigationScope> VisibleScopes { get; }` |
| `InvisibleScopes` | `public ReadOnlyCollection<GamepadNavigationScope> InvisibleScopes { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GamepadNavigationScopeCollection instance = ...;
```

## See Also

- [Area Index](../)