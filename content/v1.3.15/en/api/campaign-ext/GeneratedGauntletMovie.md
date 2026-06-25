---
title: "GeneratedGauntletMovie"
description: "Auto-generated class reference for GeneratedGauntletMovie."
---
# GeneratedGauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

## Overview

`GeneratedGauntletMovie` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Context` | `public UIContext Context { get; }` |
| `RootWidget` | `public Widget RootWidget { get; }` |
| `MovieName` | `public string MovieName { get; }` |
| `IsLoaded` | `public bool IsLoaded { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of GeneratedGauntletMovie from the subsystem API first
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.Update();
```

### Release
`public void Release()`

**Purpose:** Executes the Release logic.

```csharp
// Obtain an instance of GeneratedGauntletMovie from the subsystem API first
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.Release();
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**Purpose:** Keeps the display or cache of binding with children in sync with the underlying state.

```csharp
// Obtain an instance of GeneratedGauntletMovie from the subsystem API first
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.RefreshBindingWithChildren();
```

### OnResourcesRefreshed
`public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)`

**Purpose:** Invoked when the resources refreshed event is raised.

```csharp
// Obtain an instance of GeneratedGauntletMovie from the subsystem API first
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.OnResourcesRefreshed(spriteData, widgetFactory, brushFactory, fontFactory);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GeneratedGauntletMovie generatedGauntletMovie = ...;
generatedGauntletMovie.Update();
```

## See Also

- [Area Index](../)