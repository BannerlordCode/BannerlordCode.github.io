<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PhotoModeVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PhotoModeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PhotoModeVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Keys` | `public MBBindingList<InputKeyItemVM> Keys { get; set; }` |
| `ColorGradeSelector` | `public SelectorVM<SelectorItemVM> ColorGradeSelector { get; set; }` |
| `OverlaySelector` | `public SelectorVM<SelectorItemVM> OverlaySelector { get; set; }` |
| `FocusEndValueOption` | `public PhotoModeValueOptionVM FocusEndValueOption { get; set; }` |
| `FocusStartValueOption` | `public PhotoModeValueOptionVM FocusStartValueOption { get; set; }` |
| `FocusValueOption` | `public PhotoModeValueOptionVM FocusValueOption { get; set; }` |
| `ExposureOption` | `public PhotoModeValueOptionVM ExposureOption { get; set; }` |
| `VerticalFovOption` | `public PhotoModeValueOptionVM VerticalFovOption { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### AddTakePictureKey

```csharp
public void AddTakePictureKey(GameKey key)
```

### AddFasterCameraKey

```csharp
public void AddFasterCameraKey(HotKey hotkey)
```

### AddKey

```csharp
public void AddKey(GameKey key)
```

### AddHotkey

```csharp
public void AddHotkey(HotKey hotkey)
```

### AddHotkeyWithForcedName

```csharp
public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)
```

### AddCustomKey

```csharp
public void AddCustomKey(string keyID, TextObject forcedName)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Reset

```csharp
public void Reset()
```

### UpdateTakePictureKeyVisibility

```csharp
public void UpdateTakePictureKeyVisibility(bool canTakePicture)
```

### UpdateFasterCameraKeyVisibility

```csharp
public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)