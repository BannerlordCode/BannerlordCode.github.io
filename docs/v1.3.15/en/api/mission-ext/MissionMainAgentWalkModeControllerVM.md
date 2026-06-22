<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentWalkModeControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentWalkModeControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMainAgentWalkModeControllerVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ControlModes` | `public MBBindingList<WalkModeItemVM> ControlModes { get; set; }` |
| `LastUsedItem` | `public WalkModeItemVM LastUsedItem { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |


## Key Methods

### OnFinalize

```csharp
public override void OnFinalize()
```

### AddWalkMode

```csharp
public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)
```

### AddWalkMode

```csharp
public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)
```

### SetEnabled

```csharp
public void SetEnabled(bool isEnabled)
```

### GetIsWalkModeActivatedDelegate

```csharp
public delegate bool GetIsWalkModeActivatedDelegate()
```

### SetIsWalkModeActivatedDelegate

```csharp
public delegate void SetIsWalkModeActivatedDelegate(bool value)
```

### GetCanChangeWalkModeActivatedDelegate

```csharp
public delegate bool GetCanChangeWalkModeActivatedDelegate()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)