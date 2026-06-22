<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RichText`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichText

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RichText` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentStyle` | `public string CurrentStyle { get; set; }` |
| `TextHeight` | `public int TextHeight { get; }` |
| `StyleFontContainer` | `public StyleFontContainer StyleFontContainer { get; }` |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `FocusedLinkGroup` | `public RichTextLinkGroup FocusedLinkGroup { get; set; }` |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |


## 主要方法

### Update

```csharp
public virtual void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)
```

### SetAllDirty

```csharp
public void SetAllDirty()
```

### GetPreferredSize

```csharp
public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)
```

### CalculateTextOutput

```csharp
public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)
```

### UpdateSize

```csharp
public void UpdateSize(int width, int height)
```

### GetParts

```csharp
public List<RichTextPart> GetParts()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)