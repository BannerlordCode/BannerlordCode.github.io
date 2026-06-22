<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpriteCategory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteCategory

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SpriteCategory` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void Load(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)
```

### Unload

```csharp
public void Unload()
```

### Reload

```csharp
public void Reload(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, SpriteCategory newCategoryInfo)
```

### InitializePartialLoad

```csharp
public void InitializePartialLoad()
```

### ReleasePartialLoad

```csharp
public void ReleasePartialLoad()
```

### PartialLoadAtIndex

```csharp
public void PartialLoadAtIndex(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, int sheetIndex)
```

### PartialUnloadAtIndex

```csharp
public void PartialUnloadAtIndex(int sheetIndex)
```

### SortList

```csharp
public void SortList()
```

### IsCategoryFullyLoaded

```csharp
public bool IsCategoryFullyLoaded()
```

### Compare

```csharp
public int Compare(SpritePart x, SpritePart y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)