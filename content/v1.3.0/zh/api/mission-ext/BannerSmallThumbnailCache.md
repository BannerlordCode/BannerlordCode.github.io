---
title: "BannerSmallThumbnailCache"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerSmallThumbnailCache`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerSmallThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerSmallThumbnailCache : BannerThumbnailCache`
**Base:** `BannerThumbnailCache`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/BannerSmallThumbnailCache.cs`

## 概述

`BannerSmallThumbnailCache` 位于 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateTexture
`public override Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**用途 / Purpose:** 创建一个 `texture` 实例或对象。

## 使用示例

```csharp
var value = new BannerSmallThumbnailCache();
value.CreateTexture(thumbnailCreationData);
```

## 参见

- [完整类目录](../catalog)