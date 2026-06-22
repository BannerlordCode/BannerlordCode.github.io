<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Oriented2DArea`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Oriented2DArea

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Oriented2DArea` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `GlobalCenter` | `public Vec2 GlobalCenter { get; }` |
| `GlobalForward` | `public Vec2 GlobalForward { get; }` |
| `LocalDimensions` | `public Vec2 LocalDimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |


## 主要方法

### SetGlobalCenter

```csharp
public void SetGlobalCenter(in Vec2 globalCenter)
```

### SetLocalDimensions

```csharp
public void SetLocalDimensions(in Vec2 localDimensions)
```

### Overlaps

```csharp
public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)
```

### Intersects

```csharp
public bool Intersects(in LineSegment2D line, float clearanceMargin)
```

### GetCorners

```csharp
public Oriented2DArea.Corners GetCorners()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)