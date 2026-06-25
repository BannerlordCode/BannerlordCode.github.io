---
title: "SpriteCategory"
description: "Auto-generated class reference for SpriteCategory."
---
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

**Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.Load(resourceContext, resourceDepot);
```

### Unload
`public void Unload()`

**Purpose:** Executes the Unload logic.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.Unload();
```

### Reload
`public void Reload(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, SpriteCategory newCategoryInfo)`

**Purpose:** Executes the Reload logic.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.Reload(resourceContext, resourceDepot, newCategoryInfo);
```

### InitializePartialLoad
`public void InitializePartialLoad()`

**Purpose:** Prepares the resources, state, or bindings required by partial load.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.InitializePartialLoad();
```

### ReleasePartialLoad
`public void ReleasePartialLoad()`

**Purpose:** Executes the ReleasePartialLoad logic.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.ReleasePartialLoad();
```

### PartialLoadAtIndex
`public void PartialLoadAtIndex(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, int sheetIndex)`

**Purpose:** Executes the PartialLoadAtIndex logic.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.PartialLoadAtIndex(resourceContext, resourceDepot, 0);
```

### PartialUnloadAtIndex
`public void PartialUnloadAtIndex(int sheetIndex)`

**Purpose:** Executes the PartialUnloadAtIndex logic.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.PartialUnloadAtIndex(0);
```

### SortList
`public void SortList()`

**Purpose:** Executes the SortList logic.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
spriteCategory.SortList();
```

### IsCategoryFullyLoaded
`public bool IsCategoryFullyLoaded()`

**Purpose:** Determines whether the this instance is in the category fully loaded state or condition.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
var result = spriteCategory.IsCategoryFullyLoaded();
```

### Compare
`public int Compare(SpritePart x, SpritePart y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SpriteCategory from the subsystem API first
SpriteCategory spriteCategory = ...;
var result = spriteCategory.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpriteCategory spriteCategory = ...;
spriteCategory.Load(resourceContext, resourceDepot);
```

## See Also

- [Area Index](../)