<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UIResourceManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UIResourceManager

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public static class UIResourceManager`
**Base:** none
**File:** `TaleWorlds.Engine.GauntletUI/UIResourceManager.cs`

## Overview

`UIResourceManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `UIResourceManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ResourceDepot` | `public static ResourceDepot ResourceDepot { get; }` |
| `WidgetFactory` | `public static WidgetFactory WidgetFactory { get; }` |
| `SpriteData` | `public static SpriteData SpriteData { get; }` |
| `BrushFactory` | `public static BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public static FontFactory FontFactory { get; }` |
| `ResourceContext` | `public static TwoDimensionEngineResourceContext ResourceContext { get; }` |

## Key Methods

### Refresh
`public static void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### GetSpriteCategory
`public static SpriteCategory GetSpriteCategory(string spriteCategoryName)`

**Purpose:** Gets the current value of `sprite category`.

### LoadSpriteCategory
`public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)`

**Purpose:** Loads `sprite category` data.

### Update
`public static void Update()`

**Purpose:** Updates the state or data of `update`.

### OnLanguageChange
`public static void OnLanguageChange(string newLanguageCode)`

**Purpose:** Called when the `language change` event is raised.

### Clear
`public static void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var manager = UIResourceManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)