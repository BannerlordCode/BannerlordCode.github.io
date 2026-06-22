<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditableText`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditableText

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EditableText` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CursorPosition` | `public int CursorPosition { get; }` |
| `HighlightStart` | `public bool HighlightStart { get; }` |
| `HighlightEnd` | `public bool HighlightEnd { get; }` |
| `SelectedTextBegin` | `public int SelectedTextBegin { get; }` |
| `SelectedTextEnd` | `public int SelectedTextEnd { get; }` |
| `BlinkTimer` | `public float BlinkTimer { get; set; }` |
| `VisibleText` | `public string VisibleText { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)