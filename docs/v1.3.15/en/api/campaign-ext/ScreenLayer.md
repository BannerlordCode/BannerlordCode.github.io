<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenLayer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ScreenLayer` is a class in the `TaleWorlds.ScreenSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Scale` | `public float Scale { get; }` |
| `UsableArea` | `public Vec2 UsableArea { get; }` |
| `Input` | `public InputContext Input { get; }` |
| `InputRestrictions` | `public InputRestrictions InputRestrictions { get; }` |
| `LastActiveState` | `public bool LastActiveState { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsHitThisFrame` | `public bool IsHitThisFrame { get; set; }` |
| `IsFocusLayer` | `public bool IsFocusLayer { get; set; }` |
| `ActiveCursor` | `public CursorType ActiveCursor { get; set; }` |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame { get; set; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |


## Key Methods

### DrawDebugInfo

```csharp
public virtual void DrawDebugInfo()
```

### EarlyProcessEvents

```csharp
public virtual void EarlyProcessEvents(InputType handledInputs)
```

### ProcessEvents

```csharp
public virtual void ProcessEvents()
```

### HitTest

```csharp
public virtual bool HitTest(Vector2 position)
```

### HitTest

```csharp
public virtual bool HitTest()
```

### FocusTest

```csharp
public virtual bool FocusTest()
```

### IsFocusedOnInput

```csharp
public virtual bool IsFocusedOnInput()
```

### OnOnScreenKeyboardDone

```csharp
public virtual void OnOnScreenKeyboardDone(string inputText)
```

### OnOnScreenKeyboardCanceled

```csharp
public virtual void OnOnScreenKeyboardCanceled()
```

### CompareTo

```csharp
public int CompareTo(object obj)
```

### UpdateLayout

```csharp
public virtual void UpdateLayout()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)