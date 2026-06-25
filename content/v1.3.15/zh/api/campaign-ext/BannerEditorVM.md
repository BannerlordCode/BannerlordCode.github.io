---
title: "BannerEditorVM"
description: "BannerEditorVM 的自动生成类参考。"
---
# BannerEditorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BannerEditorVM.cs`

## 概述

`BannerEditorVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `CategoryNames` | `public MBBindingList<HintViewModel> CategoryNames { get; set; }` |
| `IconsList` | `public MBBindingList<BannerIconVM> IconsList { get; set; }` |
| `PrimaryColorList` | `public MBBindingList<BannerColorVM> PrimaryColorList { get; set; }` |
| `SigilColorList` | `public MBBindingList<BannerColorVM> SigilColorList { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `CurrentShieldName` | `public string CurrentShieldName { get; set; }` |
| `MinIconSize` | `public int MinIconSize { get; set; }` |
| `MaxIconSize` | `public int MaxIconSize { get; set; }` |
| `CurrentIconSize` | `public int CurrentIconSize { get; set; }` |
| `PrimaryColorText` | `public string PrimaryColorText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `SigilColorText` | `public string SigilColorText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `BannerVM` | `public BannerViewModel BannerVM { get; set; }` |
| `IconCodes` | `public string IconCodes { get; set; }` |
| `ColorCodes` | `public string ColorCodes { get; set; }` |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.RefreshValues();
```

### RefreshSelectedColorsAndSigils
`public void RefreshSelectedColorsAndSigils()`

**用途 / Purpose:** **用途 / Purpose:** 使 selected colors and sigils 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.RefreshSelectedColorsAndSigils();
```

### SetClanRelatedRules
`public void SetClanRelatedRules(bool canChangeBackgroundColor)`

**用途 / Purpose:** **用途 / Purpose:** 为 clan related rules 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.SetClanRelatedRules(false);
```

### ExecuteSwitchColors
`public void ExecuteSwitchColors()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch colors 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteSwitchColors();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** **用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteCancel();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.SetDoneInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.AddCameraControlInputKey(gameAxisKey, keyName);
```

### ExecuteGoToIndex
`public void ExecuteGoToIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 执行 go to index 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerEditorVM 实例
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.ExecuteGoToIndex(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerEditorVM bannerEditorVM = ...;
bannerEditorVM.RefreshValues();
```

## 参见

- [本区域目录](../)