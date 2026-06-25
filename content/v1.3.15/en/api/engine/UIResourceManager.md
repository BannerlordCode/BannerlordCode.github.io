---
title: "UIResourceManager"
description: "Auto-generated class reference for UIResourceManager."
---
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

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Static call; no instance required
UIResourceManager.Refresh();
```

### GetSpriteCategory
`public static SpriteCategory GetSpriteCategory(string spriteCategoryName)`

**Purpose:** Reads and returns the `sprite category` value held by the current object.

```csharp
// Static call; no instance required
UIResourceManager.GetSpriteCategory("example");
```

### LoadSpriteCategory
`public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)`

**Purpose:** Reads `sprite category` from persistent storage or a stream.

```csharp
// Static call; no instance required
UIResourceManager.LoadSpriteCategory("example");
```

### Update
`public static void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Static call; no instance required
UIResourceManager.Update();
```

### OnLanguageChange
`public static void OnLanguageChange(string newLanguageCode)`

**Purpose:** Invoked when the `language change` event is raised.

```csharp
// Static call; no instance required
UIResourceManager.OnLanguageChange("example");
```

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Static call; no instance required
UIResourceManager.Clear();
```

## Usage Example

```csharp
var manager = UIResourceManager.Current;
```

## See Also

- [Area Index](../)