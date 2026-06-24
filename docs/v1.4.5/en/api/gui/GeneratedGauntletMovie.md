<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneratedGauntletMovie`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GeneratedGauntletMovie

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`
**Base:** `IGauntletMovie`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

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

**Purpose:** Updates the state or data of `update`.

### Release
`public void Release()`

**Purpose:** Handles logic related to `release`.

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**Purpose:** Refreshes the display or cache of `binding with children`.

### OnResourcesRefreshed
`public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)`

**Purpose:** Called when the `resources refreshed` event is raised.

## Usage Example

```csharp
var value = new GeneratedGauntletMovie();
value.Update();
```

## See Also

- [Complete Class Catalog](../catalog)