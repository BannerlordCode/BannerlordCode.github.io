<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EditableText`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EditableText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class EditableText : RichText`
**Base:** `RichText`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/EditableText.cs`

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

**用途 / Purpose:** 设置 `cursor position` 的值或状态。

### BlinkCursor
`public void BlinkCursor()`

**用途 / Purpose:** 处理 `blink cursor` 相关逻辑。

### IsCursorVisible
`public bool IsCursorVisible()`

**用途 / Purpose:** 处理 `is cursor visible` 相关逻辑。

### ResetSelected
`public void ResetSelected()`

**用途 / Purpose:** 将 `selected` 重置为初始状态。

### BeginSelection
`public void BeginSelection()`

**用途 / Purpose:** 处理 `begin selection` 相关逻辑。

### IsAnySelected
`public bool IsAnySelected()`

**用途 / Purpose:** 处理 `is any selected` 相关逻辑。

### GetCursorPosition
`public Vector2 GetCursorPosition()`

**用途 / Purpose:** 获取 `cursor position` 的当前值。

### Update
`public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### SelectAll
`public void SelectAll()`

**用途 / Purpose:** 处理 `select all` 相关逻辑。

### FindNextWordPosition
`public int FindNextWordPosition(int direction)`

**用途 / Purpose:** 处理 `find next word position` 相关逻辑。

### SetCursor
`public void SetCursor(int position, bool visible = true, bool withSelection = false)`

**用途 / Purpose:** 设置 `cursor` 的值或状态。

## 使用示例

```csharp
var value = new EditableText();
value.SetCursorPosition(0, false);
```

## 参见

- [完整类目录](../catalog)