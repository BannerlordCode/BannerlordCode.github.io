<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThumbnailRenderRequest`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThumbnailRenderRequest

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 结构体 struct struct
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`ThumbnailRenderRequest` 是 `TaleWorlds.Engine` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要方法

### CreateWithTexture

```csharp
public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)
```

### CreateWithoutTexture

```csharp
public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)
```

### CreateForCachedEntity

```csharp
public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)
```

### CreateForCachedEntityWithoutTexture

```csharp
public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)