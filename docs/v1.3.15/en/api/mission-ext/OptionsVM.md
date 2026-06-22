<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OptionsVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentOptionsMode` | `public OptionsVM.OptionsMode CurrentOptionsMode { get; }` |
| `CategoryIndex` | `public int CategoryIndex { get; set; }` |
| `OptionsLbl` | `public string OptionsLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `IsConsole` | `public bool IsConsole { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `VideoMemoryUsageName` | `public string VideoMemoryUsageName { get; set; }` |
| `VideoMemoryUsageText` | `public string VideoMemoryUsageText { get; set; }` |
| `VideoMemoryUsageNormalized` | `public float VideoMemoryUsageNormalized { get; set; }` |
| `GameKeyOptionGroups` | `public GameKeyOptionCategoryVM GameKeyOptionGroups { get; }` |
| `GamepadOptions` | `public GamepadOptionCategoryVM GamepadOptions { get; }` |
| `PerformanceOptions` | `public GroupedOptionCategoryVM PerformanceOptions { get; }` |
| `AudioOptions` | `public GroupedOptionCategoryVM AudioOptions { get; }` |
| `GameplayOptions` | `public GroupedOptionCategoryVM GameplayOptions { get; }` |
| `VideoOptions` | `public GroupedOptionCategoryVM VideoOptions { get; set; }` |
| `BrightnessPopUp` | `public BrightnessOptionVM BrightnessPopUp { get; set; }` |
| `ExposurePopUp` | `public ExposureOptionVM ExposurePopUp { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteCloseOptions

```csharp
public void ExecuteCloseOptions()
```

### GetActiveCategory

```csharp
public ViewModel GetActiveCategory()
```

### GetIndexOfCategory

```csharp
public int GetIndexOfCategory(ViewModel categoryVM)
```

### GetConfig

```csharp
public float GetConfig(IOptionData data)
```

### SetConfig

```csharp
public void SetConfig(IOptionData data, float val)
```

### SelectPreviousCategory

```csharp
public void SelectPreviousCategory()
```

### SelectNextCategory

```csharp
public void SelectNextCategory()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### IsOptionsChanged

```csharp
public bool IsOptionsChanged()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetPreviousTabInputKey

```csharp
public void SetPreviousTabInputKey(HotKey hotkey)
```

### SetNextTabInputKey

```csharp
public void SetNextTabInputKey(HotKey hotkey)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotkey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)