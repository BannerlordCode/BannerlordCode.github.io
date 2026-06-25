---
title: "EmptyGamepadNavigationContext"
description: "Auto-generated class reference for EmptyGamepadNavigationContext."
---
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

**Purpose:** **Purpose:** Adds forced scope collection to the current collection or state.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.AddForcedScopeCollection(collection);
```

### AddNavigationScope
`public void AddNavigationScope(GamepadNavigationScope scope, bool initialize)`

**Purpose:** **Purpose:** Adds navigation scope to the current collection or state.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.AddNavigationScope(scope, false);
```

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate)`

**Purpose:** **Purpose:** Executes the GainNavigationAfterFrames logic.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.GainNavigationAfterFrames(0, predicate);
```

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate)`

**Purpose:** **Purpose:** Executes the GainNavigationAfterTime logic.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.GainNavigationAfterTime(0, predicate);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnFinalize();
```

### GetIsBlockedAtPosition
`public bool GetIsBlockedAtPosition(Vector2 position)`

**Purpose:** **Purpose:** Reads and returns the is blocked at position value held by the this instance.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.GetIsBlockedAtPosition(position);
```

### GetLastScreenOrder
`public int GetLastScreenOrder()`

**Purpose:** **Purpose:** Reads and returns the last screen order value held by the this instance.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.GetLastScreenOrder();
```

### HasNavigationScope
`public bool HasNavigationScope(GamepadNavigationScope scope)`

**Purpose:** **Purpose:** Determines whether the this instance already holds navigation scope.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.HasNavigationScope(scope);
```

### HasNavigationScope
`public bool HasNavigationScope(Func<GamepadNavigationScope, bool> predicate)`

**Purpose:** **Purpose:** Determines whether the this instance already holds navigation scope.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.HasNavigationScope(func<GamepadNavigationScope, false);
```

### IsAvailableForNavigation
`public bool IsAvailableForNavigation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the available for navigation state or condition.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.IsAvailableForNavigation();
```

### OnGainNavigation
`public void OnGainNavigation()`

**Purpose:** **Purpose:** Invoked when the gain navigation event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnGainNavigation();
```

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**Purpose:** **Purpose:** Invoked when the movie loaded event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnMovieLoaded("example");
```

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**Purpose:** **Purpose:** Invoked when the movie released event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnMovieReleased("example");
```

### OnWidgetNavigationIndexUpdated
`public void OnWidgetNavigationIndexUpdated(Widget widget)`

**Purpose:** **Purpose:** Invoked when the widget navigation index updated event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnWidgetNavigationIndexUpdated(widget);
```

### OnWidgetNavigationStatusChanged
`public void OnWidgetNavigationStatusChanged(Widget widget)`

**Purpose:** **Purpose:** Invoked when the widget navigation status changed event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnWidgetNavigationStatusChanged(widget);
```

### OnWidgetUsedNavigationMovementsUpdated
`public void OnWidgetUsedNavigationMovementsUpdated(Widget widget)`

**Purpose:** **Purpose:** Invoked when the widget used navigation movements updated event is raised.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnWidgetUsedNavigationMovementsUpdated(widget);
```

### RemoveForcedScopeCollection
`public void RemoveForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**Purpose:** **Purpose:** Removes forced scope collection from the current collection or state.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.RemoveForcedScopeCollection(collection);
```

### RemoveNavigationScope
`public void RemoveNavigationScope(GamepadNavigationScope scope)`

**Purpose:** **Purpose:** Removes navigation scope from the current collection or state.

```csharp
// Obtain an instance of EmptyGamepadNavigationContext from the subsystem API first
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.RemoveNavigationScope(scope);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.AddForcedScopeCollection(collection);
```

## See Also

- [Area Index](../)