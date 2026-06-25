---
title: "Text"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Text`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Text

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Text : IText`
**Base:** `IText`
**File:** `TaleWorlds.TwoDimension/Text.cs`

## 概述

`Text` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 获取 `preferred size` 的当前值。

### UpdateSize
`public void UpdateSize(int width, int height)`

**用途 / Purpose:** 更新 `size` 的状态或数据。

### SetAllDirty
`public void SetAllDirty()`

**用途 / Purpose:** 设置 `all dirty` 的值或状态。

### GetParts
`public List<TextPart> GetParts()`

**用途 / Purpose:** 获取 `parts` 的当前值。

## 使用示例

```csharp
var value = new Text();
value.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

## 参见

- [完整类目录](../catalog)