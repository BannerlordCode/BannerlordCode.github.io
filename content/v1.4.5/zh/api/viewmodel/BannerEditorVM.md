---
title: "BannerEditorVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerEditorVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerEditorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/BannerEditorVM.cs`

## 概述

`BannerEditorVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; set; }` |
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshSelectedColorsAndSigils
`public void RefreshSelectedColorsAndSigils()`

**用途 / Purpose:** 刷新 `selected colors and sigils` 的显示或缓存。

### SetClanRelatedRules
`public void SetClanRelatedRules(bool canChangeBackgroundColor)`

**用途 / Purpose:** 设置 `clan related rules` 的值或状态。

### ExecuteSwitchColors
`public void ExecuteSwitchColors()`

**用途 / Purpose:** 执行 `switch colors` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### ExecuteGoToIndex
`public void ExecuteGoToIndex(int index)`

**用途 / Purpose:** 执行 `go to index` 操作或流程。

## 使用示例

```csharp
var value = new BannerEditorVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)