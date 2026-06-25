---
title: "ThumbnailRenderRequest"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThumbnailRenderRequest`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ThumbnailRenderRequest

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct ThumbnailRenderRequest`
**Base:** 无
**File:** `TaleWorlds.Engine/ThumbnailRenderRequest.cs`

## 概述

`ThumbnailRenderRequest` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateWithTexture
`public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `with texture` 实例或对象。

### CreateWithoutTexture
`public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `without texture` 实例或对象。

### CreateForCachedEntity
`public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `for cached entity` 实例或对象。

### CreateForCachedEntityWithoutTexture
`public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `for cached entity without texture` 实例或对象。

## 使用示例

```csharp
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", 0);
```

## 参见

- [完整类目录](../catalog)