<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SimpleRectangle`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleRectangle

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SimpleRectangle` 是 `TaleWorlds.TwoDimension` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |


## 主要方法

### IsCollide

```csharp
public bool IsCollide(SimpleRectangle other)
```

### GetCenter

```csharp
public Vector2 GetCenter()
```

### IsSubRectOf

```csharp
public bool IsSubRectOf(SimpleRectangle other)
```

### IsValid

```csharp
public bool IsValid()
```

### IsPointInside

```csharp
public bool IsPointInside(Vector2 point)
```

### ReduceToIntersection

```csharp
public void ReduceToIntersection(SimpleRectangle other)
```

### Lerp

```csharp
public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)