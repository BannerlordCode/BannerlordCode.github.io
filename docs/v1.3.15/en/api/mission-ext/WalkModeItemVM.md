<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WalkModeItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WalkModeItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `WalkModeItemVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TypeId` | `public string TypeId { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnEnabled

```csharp
public void OnEnabled()
```

### ToggleState

```csharp
public void ToggleState()
```

### SetToggleInputKey

```csharp
public void SetToggleInputKey(HotKey hotKey, bool isHotKeyConsoleOnly)
```

### SetToggleInputKey

```csharp
public void SetToggleInputKey(GameKey gameKey, bool isHotKeyConsoleOnly)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)