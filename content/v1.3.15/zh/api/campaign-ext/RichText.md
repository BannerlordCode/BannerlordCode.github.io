---
title: "RichText"
description: "RichText 的自动生成类参考。"
---
# RichText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class RichText : IText`
**Base:** `IText`
**File:** `TaleWorlds.TwoDimension/RichText.cs`

## 概述

`RichText` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public virtual void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 RichText 实例
RichText richText = ...;
richText.Update(0, spriteData, focusPosition, false, false, false, 0);
```

### SetAllDirty
`public void SetAllDirty()`

**用途 / Purpose:** 为 all dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RichText 实例
RichText richText = ...;
richText.SetAllDirty();
```

### GetPreferredSize
`public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 读取并返回当前对象中 preferred size 的结果。

```csharp
// 先通过子系统 API 拿到 RichText 实例
RichText richText = ...;
var result = richText.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

### CalculateTextOutput
`public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 计算text output的当前值或结果。

```csharp
// 先通过子系统 API 拿到 RichText 实例
RichText richText = ...;
richText.CalculateTextOutput(0, 0, spriteData, 0);
```

### UpdateSize
`public void UpdateSize(int width, int height)`

**用途 / Purpose:** 重新计算并更新 size 的最新表示。

```csharp
// 先通过子系统 API 拿到 RichText 实例
RichText richText = ...;
richText.UpdateSize(0, 0);
```

### GetParts
`public List<RichTextPart> GetParts()`

**用途 / Purpose:** 读取并返回当前对象中 parts 的结果。

```csharp
// 先通过子系统 API 拿到 RichText 实例
RichText richText = ...;
var result = richText.GetParts();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RichText richText = ...;
richText.Update(0, spriteData, focusPosition, false, false, false, 0);
```

## 参见

- [本区域目录](../)