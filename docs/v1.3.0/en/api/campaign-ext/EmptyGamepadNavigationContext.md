<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmptyGamepadNavigationContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EmptyGamepadNavigationContext

**Namespace:** (global)
**Module:** (global)
**Type:** `public class EmptyGamepadNavigationContext : IGamepadNavigationContext`
**Base:** `IGamepadNavigationContext`
**File:** `TaleWorlds.GauntletUI/EmptyGamepadNavigationContext.cs`

## Overview

`EmptyGamepadNavigationContext` lives in `(global)` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `(global)` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddForcedScopeCollection
`public void AddForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**Purpose:** Adds `forced scope collection` to the current collection or state.

### AddNavigationScope
`public void AddNavigationScope(GamepadNavigationScope scope, bool initialize)`

**Purpose:** Adds `navigation scope` to the current collection or state.

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate)`

**Purpose:** Handles logic related to `gain navigation after frames`.

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate)`

**Purpose:** Handles logic related to `gain navigation after time`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### GetIsBlockedAtPosition
`public bool GetIsBlockedAtPosition(Vector2 position)`

**Purpose:** Gets the current value of `is blocked at position`.

### GetLastScreenOrder
`public int GetLastScreenOrder()`

**Purpose:** Gets the current value of `last screen order`.

### HasNavigationScope
`public bool HasNavigationScope(GamepadNavigationScope scope)`

**Purpose:** Checks whether the current object has/contains `navigation scope`.

### HasNavigationScope
`public bool HasNavigationScope(Func<GamepadNavigationScope, bool> predicate)`

**Purpose:** Checks whether the current object has/contains `navigation scope`.

### IsAvailableForNavigation
`public bool IsAvailableForNavigation()`

**Purpose:** Handles logic related to `is available for navigation`.

### OnGainNavigation
`public void OnGainNavigation()`

**Purpose:** Called when the `gain navigation` event is raised.

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**Purpose:** Called when the `movie loaded` event is raised.

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**Purpose:** Called when the `movie released` event is raised.

### OnWidgetNavigationIndexUpdated
`public void OnWidgetNavigationIndexUpdated(Widget widget)`

**Purpose:** Called when the `widget navigation index updated` event is raised.

### OnWidgetNavigationStatusChanged
`public void OnWidgetNavigationStatusChanged(Widget widget)`

**Purpose:** Called when the `widget navigation status changed` event is raised.

### OnWidgetUsedNavigationMovementsUpdated
`public void OnWidgetUsedNavigationMovementsUpdated(Widget widget)`

**Purpose:** Called when the `widget used navigation movements updated` event is raised.

### RemoveForcedScopeCollection
`public void RemoveForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**Purpose:** Removes `forced scope collection` from the current collection or state.

### RemoveNavigationScope
`public void RemoveNavigationScope(GamepadNavigationScope scope)`

**Purpose:** Removes `navigation scope` from the current collection or state.

## Usage Example

```csharp
var value = new EmptyGamepadNavigationContext();
value.AddForcedScopeCollection(collection);
```

## See Also

- [Complete Class Catalog](../catalog)