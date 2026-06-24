<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpriteCategory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteCategory

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteCategory`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/SpriteCategory.cs`

## 概述

`SpriteCategory` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void Load(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)`

**用途 / Purpose:** 加载 `load` 数据。

### Unload
`public void Unload()`

**用途 / Purpose:** 处理 `unload` 相关逻辑。

### Reload
`public void Reload(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, SpriteCategory newCategoryInfo)`

**用途 / Purpose:** 处理 `reload` 相关逻辑。

### InitializePartialLoad
`public void InitializePartialLoad()`

**用途 / Purpose:** 初始化 `partial load` 的状态、资源或绑定。

### ReleasePartialLoad
`public void ReleasePartialLoad()`

**用途 / Purpose:** 处理 `release partial load` 相关逻辑。

### PartialLoadAtIndex
`public void PartialLoadAtIndex(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, int sheetIndex)`

**用途 / Purpose:** 处理 `partial load at index` 相关逻辑。

### PartialUnloadAtIndex
`public void PartialUnloadAtIndex(int sheetIndex)`

**用途 / Purpose:** 处理 `partial unload at index` 相关逻辑。

### SortList
`public void SortList()`

**用途 / Purpose:** 处理 `sort list` 相关逻辑。

### IsCategoryFullyLoaded
`public bool IsCategoryFullyLoaded()`

**用途 / Purpose:** 处理 `is category fully loaded` 相关逻辑。

### Compare
`public int Compare(SpritePart x, SpritePart y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new SpriteCategory();
value.Load(resourceContext, resourceDepot);
```

## 参见

- [完整类目录](../catalog)