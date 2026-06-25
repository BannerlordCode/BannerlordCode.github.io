---
title: "FaceCorner"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceCorner`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceCorner

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public struct FaceCorner`
**领域:** engine

## 概述

`FaceCorner` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)`

**用途 / Purpose:** 向当前集合/状态中添加 `face corner`。

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**用途 / Purpose:** 向当前集合/状态中添加 `face`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### Finalize
`public new Mesh Finalize()`

**用途 / Purpose:** 处理 `finalize` 相关逻辑。

### CreateUnitMesh
`public static Mesh CreateUnitMesh()`

**用途 / Purpose:** 创建一个 `unit mesh` 实例或对象。

### CreateTilingWindowMesh
`public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)`

**用途 / Purpose:** 创建一个 `tiling window mesh` 实例或对象。

### CreateTilingButtonMesh
`public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)`

**用途 / Purpose:** 创建一个 `tiling button mesh` 实例或对象。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 FaceCorner 实例，再调用它的公开方法
var value = new FaceCorner();
value.AddFaceCorner(position, normal, uvCoord, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
