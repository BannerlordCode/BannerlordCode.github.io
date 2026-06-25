---
title: "MeshBuilder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MeshBuilder`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MeshBuilder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class MeshBuilder`
**Base:** 无
**File:** `TaleWorlds.Engine/MeshBuilder.cs`

## 概述

`MeshBuilder` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
var value = new MeshBuilder();
value.AddFaceCorner(position, normal, uvCoord, 0);
```

## 参见

- [完整类目录](../catalog)