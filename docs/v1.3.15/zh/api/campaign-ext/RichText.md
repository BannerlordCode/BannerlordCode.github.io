<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RichText`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 更新 `update` 的状态或数据。

### SetAllDirty
`public void SetAllDirty()`

**用途 / Purpose:** 设置 `all dirty` 的值或状态。

### GetPreferredSize
`public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 获取 `preferred size` 的当前值。

### CalculateTextOutput
`public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)`

**用途 / Purpose:** 处理 `calculate text output` 相关逻辑。

### UpdateSize
`public void UpdateSize(int width, int height)`

**用途 / Purpose:** 更新 `size` 的状态或数据。

### GetParts
`public List<RichTextPart> GetParts()`

**用途 / Purpose:** 获取 `parts` 的当前值。

## 使用示例

```csharp
var value = new RichText();
value.Update(0, spriteData, focusPosition, false, false, false, 0);
```

## 参见

- [完整类目录](../catalog)