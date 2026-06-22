<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Text`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Text

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Text` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentLanguage` | `public ILanguage CurrentLanguage { get; }` |
| `ScaleToFitTextInLayout` | `public float ScaleToFitTextInLayout { get; }` |
| `LineCount` | `public int LineCount { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `Font` | `public Font Font { get; set; }` |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment { get; set; }` |
| `FontSize` | `public float FontSize { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |
| `ResizeTextOnOverflow` | `public bool ResizeTextOnOverflow { get; set; }` |


## 主要方法

### GetPreferredSize

```csharp
public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)
```

### UpdateSize

```csharp
public void UpdateSize(int width, int height)
```

### SetAllDirty

```csharp
public void SetAllDirty()
```

### GetParts

```csharp
public List<TextPart> GetParts()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)