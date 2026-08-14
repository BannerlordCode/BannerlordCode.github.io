---
title: "Text"
description: "Text 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 preferred size 的结果。

```csharp
// 先通过子系统 API 拿到 Text 实例
Text text = ...;
var result = text.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

### UpdateSize
`public void UpdateSize(int width, int height)`

**用途 / Purpose:** 重新计算并更新 size 的最新表示。

```csharp
// 先通过子系统 API 拿到 Text 实例
Text text = ...;
text.UpdateSize(0, 0);
```

### SetAllDirty
`public void SetAllDirty()`

**用途 / Purpose:** 为 all dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Text 实例
Text text = ...;
text.SetAllDirty();
```

### GetParts
`public List<TextPart> GetParts()`

**用途 / Purpose:** 读取并返回当前对象中 parts 的结果。

```csharp
// 先通过子系统 API 拿到 Text 实例
Text text = ...;
var result = text.GetParts();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Text text = ...;
text.GetPreferredSize(false, 0, false, 0, spriteData, 0);
```

## 参见

- [本区域目录](../)