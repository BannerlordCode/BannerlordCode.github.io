<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletLayer`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## Overview

`GauntletLayer` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; }` |
| `UIContext` | `public UIContext UIContext { get; }` |

## Key Methods

### OnResourceRefreshBegin
`public void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**Purpose:** Called when the `resource refresh begin` event is raised.

### OnResourceRefreshEnd
`public void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**Purpose:** Called when the `resource refresh end` event is raised.

### GetMovieIdentifier
`public GauntletMovieIdentifier GetMovieIdentifier(string movieName)`

**Purpose:** Gets the current value of `movie identifier`.

### LoadMovie
`public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`

**Purpose:** Loads `movie` data.

### ReleaseMovie
`public void ReleaseMovie(GauntletMovieIdentifier identifier)`

**Purpose:** Handles logic related to `release movie`.

### ProcessEvents
`public override void ProcessEvents()`

**Purpose:** Handles logic related to `process events`.

### HitTest
`public override bool HitTest(Vector2 position)`

**Purpose:** Handles logic related to `hit test`.

### HitTest
`public override bool HitTest()`

**Purpose:** Handles logic related to `hit test`.

### FocusTest
`public override bool FocusTest()`

**Purpose:** Handles logic related to `focus test`.

### IsFocusedOnInput
`public override bool IsFocusedOnInput()`

**Purpose:** Handles logic related to `is focused on input`.

### OnOnScreenKeyboardDone
`public override void OnOnScreenKeyboardDone(string inputText)`

**Purpose:** Called when the `on screen keyboard done` event is raised.

### OnOnScreenKeyboardCanceled
`public override void OnOnScreenKeyboardCanceled()`

**Purpose:** Called when the `on screen keyboard canceled` event is raised.

### UpdateLayout
`public override void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

### GetIsAvailableForGamepadNavigation
`public bool GetIsAvailableForGamepadNavigation()`

**Purpose:** Gets the current value of `is available for gamepad navigation`.

### DrawDebugInfo
`public override void DrawDebugInfo()`

**Purpose:** Handles logic related to `draw debug info`.

## Usage Example

```csharp
var value = new GauntletLayer();
value.OnResourceRefreshBegin(previouslyLoadedMovies);
```

## See Also

- [Complete Class Catalog](../catalog)