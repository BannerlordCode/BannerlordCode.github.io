---
title: "SpriteCategory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpriteCategory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteCategory

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteCategory`
**Base:** none
**File:** `TaleWorlds.TwoDimension/SpriteCategory.cs`

## Overview

`SpriteCategory` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `SpriteParts` | `public List<SpritePart> SpriteParts { get; }` |
| `SortedSpritePartList` | `public List<SpritePart> SortedSpritePartList { get; }` |
| `SpriteSheets` | `public List<Texture> SpriteSheets { get; }` |
| `SpriteSheetCount` | `public int SpriteSheetCount { get; }` |
| `IsLoaded` | `public bool IsLoaded { get; }` |
| `IsPartiallyLoaded` | `public bool IsPartiallyLoaded { get; }` |
| `SheetSizes` | `public Vec2i SheetSizes { get; set; }` |

## Key Methods

### Load
`public void Load(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)`

**Purpose:** Loads `load` data.

### Unload
`public void Unload()`

**Purpose:** Handles logic related to `unload`.

### Reload
`public void Reload(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, SpriteCategory newCategoryInfo)`

**Purpose:** Handles logic related to `reload`.

### InitializePartialLoad
`public void InitializePartialLoad()`

**Purpose:** Initializes the state, resources, or bindings for `partial load`.

### ReleasePartialLoad
`public void ReleasePartialLoad()`

**Purpose:** Handles logic related to `release partial load`.

### PartialLoadAtIndex
`public void PartialLoadAtIndex(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, int sheetIndex)`

**Purpose:** Handles logic related to `partial load at index`.

### PartialUnloadAtIndex
`public void PartialUnloadAtIndex(int sheetIndex)`

**Purpose:** Handles logic related to `partial unload at index`.

### SortList
`public void SortList()`

**Purpose:** Handles logic related to `sort list`.

### IsCategoryFullyLoaded
`public bool IsCategoryFullyLoaded()`

**Purpose:** Handles logic related to `is category fully loaded`.

### Compare
`public int Compare(SpritePart x, SpritePart y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new SpriteCategory();
value.Load(resourceContext, resourceDepot);
```

## See Also

- [Complete Class Catalog](../catalog)