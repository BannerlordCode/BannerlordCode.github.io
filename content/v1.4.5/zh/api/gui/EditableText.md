---
title: "EditableText"
description: "EditableText 的自动生成类参考。"
---
# EditableText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class EditableText : RichText`
**Base:** `RichText`
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/EditableText.cs`

## 概述

`EditableText` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CursorPosition` | `public int CursorPosition { get; }` |
| `HighlightStart` | `public bool HighlightStart { get; }` |
| `HighlightEnd` | `public bool HighlightEnd { get; }` |
| `SelectedTextBegin` | `public int SelectedTextBegin { get; }` |
| `SelectedTextEnd` | `public int SelectedTextEnd { get; }` |
| `BlinkTimer` | `public float BlinkTimer { get; set; }` |
| `VisibleText` | `public string VisibleText { get; set; }` |

## 主要方法

### SetCursorPosition
`public void SetCursorPosition(int position, bool visible)`

**用途 / Purpose:** 为 cursor position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.SetCursorPosition(0, false);
```

### BlinkCursor
`public void BlinkCursor()`

**用途 / Purpose:** 调用 BlinkCursor 对应的操作。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.BlinkCursor();
```

### IsCursorVisible
`public bool IsCursorVisible()`

**用途 / Purpose:** 判断当前对象是否处于 cursor visible 状态或条件。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
var result = editableText.IsCursorVisible();
```

### ResetSelected
`public void ResetSelected()`

**用途 / Purpose:** 将 selected 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.ResetSelected();
```

### BeginSelection
`public void BeginSelection()`

**用途 / Purpose:** 调用 BeginSelection 对应的操作。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.BeginSelection();
```

### IsAnySelected
`public bool IsAnySelected()`

**用途 / Purpose:** 判断当前对象是否处于 any selected 状态或条件。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
var result = editableText.IsAnySelected();
```

### GetCursorPosition
`public Vector2 GetCursorPosition()`

**用途 / Purpose:** 读取并返回当前对象中 cursor position 的结果。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
var result = editableText.GetCursorPosition();
```

### Update
`public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.Update(0, spriteData, focusPosition, false, false, false, 0);
```

### SelectAll
`public void SelectAll()`

**用途 / Purpose:** 调用 SelectAll 对应的操作。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.SelectAll();
```

### FindNextWordPosition
`public int FindNextWordPosition(int direction)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的next word position。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
var result = editableText.FindNextWordPosition(0);
```

### SetCursor
`public void SetCursor(int position, bool visible = true, bool withSelection = false)`

**用途 / Purpose:** 为 cursor 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EditableText 实例
EditableText editableText = ...;
editableText.SetCursor(0, false, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EditableText editableText = ...;
editableText.SetCursorPosition(0, false);
```

## 参见

- [本区域目录](../)