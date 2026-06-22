<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushAnimation`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushAnimation

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BrushAnimation` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `Loop` | `public bool Loop { get; set; }` |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType { get; set; }` |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction { get; set; }` |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation { get; set; }` |


## 主要方法

### AddAnimationProperty

```csharp
public void AddAnimationProperty(BrushAnimationProperty property)
```

### RemoveAnimationProperty

```csharp
public void RemoveAnimationProperty(BrushAnimationProperty property)
```

### FillFrom

```csharp
public void FillFrom(BrushAnimation animation)
```

### GetLayerAnimation

```csharp
public BrushLayerAnimation GetLayerAnimation(string name)
```

### GetLayerAnimations

```csharp
public IEnumerable<BrushLayerAnimation> GetLayerAnimations()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)