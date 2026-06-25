---
title: "ThumbnailRenderRequest"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThumbnailRenderRequest`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThumbnailRenderRequest

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public struct ThumbnailRenderRequest`
**领域:** engine

## 概述

`ThumbnailRenderRequest` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateWithTexture
`public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `with texture` 实例或对象。

### CreateWithoutTexture
`public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `without texture` 实例或对象。

### CreateForCachedEntity
`public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `for cached entity` 实例或对象。

### CreateForCachedEntityWithoutTexture
`public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 创建一个 `for cached entity without texture` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", "example", 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
