---
title: "BannerThumbnailCache"
description: "BannerThumbnailCache 的自动生成类参考。"
---
# BannerThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BannerThumbnailCache : ThumbnailCache<BannerThumbnailCreationData>`
**Base:** `ThumbnailCache<BannerThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerThumbnailCache.cs`

## 概述

`BannerThumbnailCache` 位于 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateDefaultBannerCamera
`public static Camera CreateDefaultBannerCamera()`

**用途 / Purpose:** 构建一个新的 default banner camera 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BannerThumbnailCache.CreateDefaultBannerCamera();
```

### CreateNineGridBannerCamera
`public static Camera CreateNineGridBannerCamera()`

**用途 / Purpose:** 构建一个新的 nine grid banner camera 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BannerThumbnailCache.CreateNineGridBannerCamera();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BannerThumbnailCache instance = ...;
```

## 参见

- [本区域目录](../)