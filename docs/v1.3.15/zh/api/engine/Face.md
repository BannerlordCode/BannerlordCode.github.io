<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Face`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Face

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 结构体 struct struct
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Face` 是 `TaleWorlds.Engine` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要方法

### AddFaceCorner

```csharp
public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)
```

### AddFace

```csharp
public int AddFace(int patchNode0, int patchNode1, int patchNode2)
```

### Clear

```csharp
public void Clear()
```

### Finalize

```csharp
public new Mesh Finalize()
```

### CreateUnitMesh

```csharp
public static Mesh CreateUnitMesh()
```

### CreateTilingWindowMesh

```csharp
public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)
```

### CreateTilingButtonMesh

```csharp
public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)