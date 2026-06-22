<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EditableText`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditableText

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EditableText` 是 `TaleWorlds.TwoDimension` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void SetCursorPosition(int position, bool visible)
```

### BlinkCursor

```csharp
public void BlinkCursor()
```

### IsCursorVisible

```csharp
public bool IsCursorVisible()
```

### ResetSelected

```csharp
public void ResetSelected()
```

### BeginSelection

```csharp
public void BeginSelection()
```

### IsAnySelected

```csharp
public bool IsAnySelected()
```

### GetCursorPosition

```csharp
public Vector2 GetCursorPosition()
```

### Update

```csharp
public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)
```

### SelectAll

```csharp
public void SelectAll()
```

### FindNextWordPosition

```csharp
public int FindNextWordPosition(int direction)
```

### SetCursor

```csharp
public void SetCursor(int position, bool visible = true, bool withSelection = false)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)