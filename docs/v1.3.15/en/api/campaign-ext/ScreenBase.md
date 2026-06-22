<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ScreenBase` is a class in the `TaleWorlds.ScreenSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DebugInput` | `public IInputContext DebugInput { get; }` |
| `Layers` | `public MBReadOnlyList<ScreenLayer> Layers { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsPaused` | `public bool IsPaused { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)