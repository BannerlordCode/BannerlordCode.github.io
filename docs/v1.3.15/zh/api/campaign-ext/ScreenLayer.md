<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScreenLayer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenLayer

**命名空间:** TaleWorlds.ScreenSystem
**模块:** TaleWorlds.ScreenSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ScreenLayer` 是 `TaleWorlds.ScreenSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)