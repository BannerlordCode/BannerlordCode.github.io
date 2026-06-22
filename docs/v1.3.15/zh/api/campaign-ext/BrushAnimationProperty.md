<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushAnimationProperty`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushAnimationProperty

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BrushAnimationProperty` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LayerName` | `public string LayerName { get; set; }` |
| `KeyFrames` | `public IEnumerable<BrushAnimationKeyFrame> KeyFrames { get; }` |
| `Count` | `public int Count { get; }` |


## 主要方法

### GetFrameAfter

```csharp
public BrushAnimationKeyFrame GetFrameAfter(float time)
```

### GetFrameAt

```csharp
public BrushAnimationKeyFrame GetFrameAt(int i)
```

### Clone

```csharp
public BrushAnimationProperty Clone()
```

### AddKeyFrame

```csharp
public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)
```

### RemoveKeyFrame

```csharp
public void RemoveKeyFrame(BrushAnimationKeyFrame keyFrame)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)