---
title: "GauntletLayer"
description: "Auto-generated class reference for GauntletLayer."
---
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

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

**Purpose:** Invoked when the resource refresh begin event is raised.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnResourceRefreshBegin(previouslyLoadedMovies);
```

### OnResourceRefreshEnd
`public void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**Purpose:** Invoked when the resource refresh end event is raised.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnResourceRefreshEnd(previouslyLoadedMovies);
```

### GetMovieIdentifier
`public GauntletMovieIdentifier GetMovieIdentifier(string movieName)`

**Purpose:** Reads and returns the movie identifier value held by the this instance.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.GetMovieIdentifier("example");
```

### LoadMovie
`public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`

**Purpose:** Reads movie from persistent storage or a stream.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.LoadMovie("example", dataSource);
```

### ReleaseMovie
`public void ReleaseMovie(GauntletMovieIdentifier identifier)`

**Purpose:** Executes the ReleaseMovie logic.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.ReleaseMovie(identifier);
```

### ProcessEvents
`public override void ProcessEvents()`

**Purpose:** Executes the ProcessEvents logic.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.ProcessEvents();
```

### HitTest
`public override bool HitTest(Vector2 position)`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.HitTest(position);
```

### HitTest
`public override bool HitTest()`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.HitTest();
```

### FocusTest
`public override bool FocusTest()`

**Purpose:** Executes the FocusTest logic.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.FocusTest();
```

### IsFocusedOnInput
`public override bool IsFocusedOnInput()`

**Purpose:** Determines whether the this instance is in the focused on input state or condition.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.IsFocusedOnInput();
```

### OnOnScreenKeyboardDone
`public override void OnOnScreenKeyboardDone(string inputText)`

**Purpose:** Invoked when the on screen keyboard done event is raised.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnOnScreenKeyboardDone("example");
```

### OnOnScreenKeyboardCanceled
`public override void OnOnScreenKeyboardCanceled()`

**Purpose:** Invoked when the on screen keyboard canceled event is raised.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnOnScreenKeyboardCanceled();
```

### UpdateLayout
`public override void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of layout.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.UpdateLayout();
```

### GetIsAvailableForGamepadNavigation
`public bool GetIsAvailableForGamepadNavigation()`

**Purpose:** Reads and returns the is available for gamepad navigation value held by the this instance.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
var result = gauntletLayer.GetIsAvailableForGamepadNavigation();
```

### DrawDebugInfo
`public override void DrawDebugInfo()`

**Purpose:** Executes the DrawDebugInfo logic.

```csharp
// Obtain an instance of GauntletLayer from the subsystem API first
GauntletLayer gauntletLayer = ...;
gauntletLayer.DrawDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletLayer gauntletLayer = ...;
gauntletLayer.OnResourceRefreshBegin(previouslyLoadedMovies);
```

## See Also

- [Area Index](../)