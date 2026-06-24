<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMovie`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/GauntletMovie.cs`

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

**Purpose:** Refreshes the display or cache of `data source`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### Load
`public static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)`

**Purpose:** Loads `load` data.

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**Purpose:** Refreshes the display or cache of `binding with children`.

### FindViewOf
`public GauntletView FindViewOf(Widget widget)`

**Purpose:** Handles logic related to `find view of`.

## Usage Example

```csharp
var value = new GauntletMovie();
value.RefreshDataSource(dataSourve);
```

## See Also

- [Complete Class Catalog](../catalog)