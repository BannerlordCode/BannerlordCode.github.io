<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OptionsVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)