<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoDimensionDrawContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionDrawContext

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TwoDimensionDrawContext` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ScissorTestEnabled` | `public bool ScissorTestEnabled { get; }` |
| `CircularMaskEnabled` | `public bool CircularMaskEnabled { get; }` |
| `CircularMaskCenter` | `public Vector2 CircularMaskCenter { get; }` |
| `CircularMaskRadius` | `public float CircularMaskRadius { get; }` |
| `CircularMaskSmoothingRadius` | `public float CircularMaskSmoothingRadius { get; }` |
| `CurrentScissor` | `public ScissorTestInfo CurrentScissor { get; }` |


## 主要方法

### Reset

```csharp
public void Reset()
```

### CreateSimpleMaterial

```csharp
public SimpleMaterial CreateSimpleMaterial()
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial()
```

### PushScissor

```csharp
public void PushScissor(in Rectangle2D newScissorRectangle)
```

### PopScissor

```csharp
public void PopScissor()
```

### IsDiscardedByAnyScissor

```csharp
public bool IsDiscardedByAnyScissor(in Rectangle2D rect)
```

### SetCircualMask

```csharp
public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)
```

### ClearCircualMask

```csharp
public void ClearCircualMask()
```

### DrawTo

```csharp
public void DrawTo(TwoDimensionContext twoDimensionContext)
```

### DrawSprite

```csharp
public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)
```

### Draw

```csharp
public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)
```

### Draw

```csharp
public void Draw(TextMaterial material, in TextDrawObject drawObject)
```

### Draw

```csharp
public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)