<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScreenBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenBase

**命名空间:** TaleWorlds.ScreenSystem
**模块:** TaleWorlds.ScreenSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ScreenBase` 是 `TaleWorlds.ScreenSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DebugInput` | `public IInputContext DebugInput { get; }` |
| `Layers` | `public MBReadOnlyList<ScreenLayer> Layers { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsPaused` | `public bool IsPaused { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` |


## 主要方法

### ActivateAllLayers

```csharp
public void ActivateAllLayers()
```

### DeactivateAllLayers

```csharp
public void DeactivateAllLayers()
```

### Deactivate

```csharp
public void Deactivate()
```

### Activate

```csharp
public void Activate()
```

### UpdateLayout

```csharp
public virtual void UpdateLayout()
```

### OnFocusChangeOnGameWindow

```csharp
public virtual void OnFocusChangeOnGameWindow(bool focusGained)
```

### AddComponent

```csharp
public void AddComponent(ScreenComponent component)
```

### AddLayer

```csharp
public void AddLayer(ScreenLayer layer)
```

### RemoveLayer

```csharp
public void RemoveLayer(ScreenLayer layer)
```

### HasLayer

```csharp
public bool HasLayer(ScreenLayer layer)
```

### SetLayerCategoriesState

```csharp
public void SetLayerCategoriesState(string categoryIds, bool isActive)
```

### SetLayerCategoriesStateAndToggleOthers

```csharp
public void SetLayerCategoriesStateAndToggleOthers(string categoryIds, bool isActive)
```

### SetLayerCategoriesStateAndDeactivateOthers

```csharp
public void SetLayerCategoriesStateAndDeactivateOthers(string categoryIds, bool isActive)
```

### OnLayerAddedEvent

```csharp
public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)
```

### OnLayerRemovedEvent

```csharp
public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)