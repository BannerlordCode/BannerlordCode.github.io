<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpriteCategory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteCategory

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SpriteCategory` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)