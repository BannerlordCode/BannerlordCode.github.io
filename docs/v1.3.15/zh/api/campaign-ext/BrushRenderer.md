<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushRenderer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushRenderer

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BrushRenderer` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber { get; }` |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement { get; set; }` |
| `CurrentStyle` | `public Style CurrentStyle { get; set; }` |
| `Brush` | `public Brush Brush { get; set; }` |
| `CurrentState` | `public string CurrentState { get; set; }` |


## 主要方法

### Update

```csharp
public void Update(ulong frameNumber, float globalAnimTime, float dt)
```

### IsUpdateNeeded

```csharp
public bool IsUpdateNeeded()
```

### Render

```csharp
public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)
```

### RestartAnimation

```csharp
public void RestartAnimation()
```

### SetSeed

```csharp
public void SetSeed(int seed)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)