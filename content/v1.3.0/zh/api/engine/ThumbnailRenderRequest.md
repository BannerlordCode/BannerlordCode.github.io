---
title: "ThumbnailRenderRequest"
description: "ThumbnailRenderRequest 的自动生成类参考。"
---
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

**用途 / Purpose:** 构建一个新的 「with texture」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", 0);
```

### CreateWithoutTexture
`public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 构建一个新的 「without texture」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ThumbnailRenderRequest.CreateWithoutTexture(scene, camera, entity, "example", 0, 0, "example", 0);
```

### CreateForCachedEntity
`public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, int allocationGroupIndex)`

**用途 / Purpose:** 构建一个新的 「for cached entity」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ThumbnailRenderRequest.CreateForCachedEntity(scene, camera, texture, "example", "example", 0);
```

### CreateForCachedEntityWithoutTexture
`public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)`

**用途 / Purpose:** 构建一个新的 「for cached entity without texture」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ThumbnailRenderRequest.CreateForCachedEntityWithoutTexture(scene, camera, "example", "example", 0, 0, "example", 0);
```

## 使用示例

```csharp
ThumbnailRenderRequest.CreateWithTexture(scene, camera, texture, entity, "example", 0);
```

## 参见

- [本区域目录](../)