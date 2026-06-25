---
title: "SpriteCategory"
description: "SpriteCategory 的自动生成类参考。"
---
# SpriteCategory

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteCategory`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpriteCategory.cs`

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

### Compare
`public int Compare(SpritePart x, SpritePart y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
var result = spriteCategory.Compare(x, y);
```

### Load
`public void Load(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.Load(resourceContext, resourceDepot);
```

### Unload
`public void Unload()`

**用途 / Purpose:** 处理与 「unload」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.Unload();
```

### Reload
`public void Reload(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, SpriteCategory newCategoryInfo)`

**用途 / Purpose:** 处理与 「reload」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.Reload(resourceContext, resourceDepot, newCategoryInfo);
```

### InitializePartialLoad
`public void InitializePartialLoad()`

**用途 / Purpose:** 为 「partial load」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.InitializePartialLoad();
```

### ReleasePartialLoad
`public void ReleasePartialLoad()`

**用途 / Purpose:** 处理与 「release partial load」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.ReleasePartialLoad();
```

### PartialLoadAtIndex
`public void PartialLoadAtIndex(ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot, int sheetIndex)`

**用途 / Purpose:** 处理与 「partial load at index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.PartialLoadAtIndex(resourceContext, resourceDepot, 0);
```

### PartialUnloadAtIndex
`public void PartialUnloadAtIndex(int sheetIndex)`

**用途 / Purpose:** 处理与 「partial unload at index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.PartialUnloadAtIndex(0);
```

### SortList
`public void SortList()`

**用途 / Purpose:** 处理与 「sort list」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
spriteCategory.SortList();
```

### IsCategoryFullyLoaded
`public bool IsCategoryFullyLoaded()`

**用途 / Purpose:** 判断当前对象是否处于 「category fully loaded」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpriteCategory 实例
SpriteCategory spriteCategory = ...;
var result = spriteCategory.IsCategoryFullyLoaded();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SpriteCategory spriteCategory = ...;
spriteCategory.Compare(x, y);
```

## 参见

- [本区域目录](../)