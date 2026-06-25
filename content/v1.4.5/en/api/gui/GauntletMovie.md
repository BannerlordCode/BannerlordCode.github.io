---
title: "GauntletMovie"
description: "Auto-generated class reference for GauntletMovie."
---
# GauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/GauntletMovie.cs`

## Overview

`GauntletMovie` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `Context` | `public UIContext Context { get; }` |
| `MovieName` | `public string MovieName { get; }` |
| `RootView` | `public GauntletView RootView { get; }` |
| `RootWidget` | `public Widget RootWidget { get; }` |
| `IsLoaded` | `public bool IsLoaded { get; }` |
| `IsReleased` | `public bool IsReleased { get; }` |

## Key Methods

### RefreshDataSource
`public void RefreshDataSource(IViewModel dataSourve)`

**Purpose:** Keeps the display or cache of `data source` in sync with the underlying state.

```csharp
// Obtain an instance of GauntletMovie from the subsystem API first
GauntletMovie gauntletMovie = ...;
gauntletMovie.RefreshDataSource(dataSourve);
```

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GauntletMovie from the subsystem API first
GauntletMovie gauntletMovie = ...;
gauntletMovie.Release();
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of GauntletMovie from the subsystem API first
GauntletMovie gauntletMovie = ...;
gauntletMovie.Update();
```

### Load
`public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)`

**Purpose:** Reads the current object's data from persistent storage or a stream.

```csharp
// Static call; no instance required
GauntletMovie.Load(context, widgetFactory, "example", datasource, false, false);
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**Purpose:** Keeps the display or cache of `binding with children` in sync with the underlying state.

```csharp
// Obtain an instance of GauntletMovie from the subsystem API first
GauntletMovie gauntletMovie = ...;
gauntletMovie.RefreshBindingWithChildren();
```

### FindViewOf
`public GauntletView FindViewOf(Widget widget)`

**Purpose:** Looks up the matching `view of` in the current collection or scope.

```csharp
// Obtain an instance of GauntletMovie from the subsystem API first
GauntletMovie gauntletMovie = ...;
var result = gauntletMovie.FindViewOf(widget);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletMovie gauntletMovie = ...;
gauntletMovie.RefreshDataSource(dataSourve);
```

## See Also

- [Area Index](../)