---
title: "FaceGenVM"
description: "FaceGenVM 的自动生成类参考。"
---
# FaceGenVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs`

## 概述

`FaceGenVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `AreAllTabsEnabled` | `public bool AreAllTabsEnabled { get; }` |
| `IsBodyEnabled` | `public bool IsBodyEnabled { get; set; }` |
| `IsFaceEnabled` | `public bool IsFaceEnabled { get; set; }` |
| `IsEyesEnabled` | `public bool IsEyesEnabled { get; set; }` |
| `IsNoseEnabled` | `public bool IsNoseEnabled { get; set; }` |
| `IsMouthEnabled` | `public bool IsMouthEnabled { get; set; }` |
| `IsHairEnabled` | `public bool IsHairEnabled { get; set; }` |
| `IsTaintEnabled` | `public bool IsTaintEnabled { get; set; }` |
| `FlipHairLbl` | `public string FlipHairLbl { get; set; }` |
| `SkinColorLbl` | `public string SkinColorLbl { get; set; }` |
| `RaceLbl` | `public string RaceLbl { get; set; }` |
| `GenderLbl` | `public string GenderLbl { get; set; }` |
| `CancelBtnLbl` | `public string CancelBtnLbl { get; set; }` |
| `DoneBtnLbl` | `public string DoneBtnLbl { get; set; }` |
| `BodyHint` | `public HintViewModel BodyHint { get; set; }` |
| `FaceHint` | `public HintViewModel FaceHint { get; set; }` |
| `EyesHint` | `public HintViewModel EyesHint { get; set; }` |
| `NoseHint` | `public HintViewModel NoseHint { get; set; }` |
| `HairHint` | `public HintViewModel HairHint { get; set; }` |
| `TaintHint` | `public HintViewModel TaintHint { get; set; }` |
| `MouthHint` | `public HintViewModel MouthHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `RandomizeAllHint` | `public HintViewModel RandomizeAllHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `ResetAllHint` | `public HintViewModel ResetAllHint { get; set; }` |
| `ClothHint` | `public HintViewModel ClothHint { get; set; }` |
| `HairNum` | `public int HairNum { get; set; }` |
| `SkinColorSelector` | `public SelectorVM<SelectorItemVM> SkinColorSelector { get; set; }` |
| `HairColorSelector` | `public SelectorVM<SelectorItemVM> HairColorSelector { get; set; }` |
| `TattooColorSelector` | `public SelectorVM<SelectorItemVM> TattooColorSelector { get; set; }` |
| `RaceSelector` | `public SelectorVM<SelectorItemVM> RaceSelector { get; set; }` |
| `Tab` | `public int Tab { get; set; }` |
| `SelectedGender` | `public int SelectedGender { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `BodyProperties` | `public MBBindingList<FaceGenPropertyVM> BodyProperties { get; set; }` |
| `CanChangeGender` | `public bool CanChangeGender { get; set; }` |
| `CanChangeRace` | `public bool CanChangeRace { get; set; }` |
| `IsUndoEnabled` | `public bool IsUndoEnabled { get; set; }` |
| `IsRedoEnabled` | `public bool IsRedoEnabled { get; set; }` |
| `FaceProperties` | `public MBBindingList<FaceGenPropertyVM> FaceProperties { get; set; }` |
| `EyesProperties` | `public MBBindingList<FaceGenPropertyVM> EyesProperties { get; set; }` |
| `NoseProperties` | `public MBBindingList<FaceGenPropertyVM> NoseProperties { get; set; }` |
| `MouthProperties` | `public MBBindingList<FaceGenPropertyVM> MouthProperties { get; set; }` |
| `HairProperties` | `public MBBindingList<FaceGenPropertyVM> HairProperties { get; set; }` |
| `TaintProperties` | `public MBBindingList<FaceGenPropertyVM> TaintProperties { get; set; }` |
| `TaintTypes` | `public MBBindingList<FacegenListItemVM> TaintTypes { get; set; }` |
| `BeardTypes` | `public MBBindingList<FacegenListItemVM> BeardTypes { get; set; }` |
| `HairTypes` | `public MBBindingList<FacegenListItemVM> HairTypes { get; set; }` |
| `SoundPreset` | `public FaceGenPropertyVM SoundPreset { get; set; }` |
| `EyebrowTypes` | `public FaceGenPropertyVM EyebrowTypes { get; set; }` |
| `TeethTypes` | `public FaceGenPropertyVM TeethTypes { get; set; }` |
| `FlipHairCb` | `public bool FlipHairCb { get; set; }` |
| `IsDressed` | `public bool IsDressed { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |
| `FaceTypes` | `public FaceGenPropertyVM FaceTypes { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |

## 主要方法

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 为 「face generation params」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SetFaceGenerationParams(faceGenerationParams);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.RefreshValues();
```

### InitializeHistory
`public void InitializeHistory(FaceGenHistory faceGenHistory)`

**用途 / Purpose:** 为 「history」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.InitializeHistory(faceGenHistory);
```

### OnTabClicked
`public void OnTabClicked(int index)`

**用途 / Purpose:** 在 「tab clicked」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.OnTabClicked(0);
```

### SelectPreviousTab
`public void SelectPreviousTab()`

**用途 / Purpose:** 处理与 「select previous tab」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SelectPreviousTab();
```

### SelectNextTab
`public void SelectNextTab()`

**用途 / Purpose:** 处理与 「select next tab」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SelectNextTab();
```

### Refresh
`public void Refresh(bool clearProperties)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.Refresh(false);
```

### ExecuteHearCurrentVoiceSample
`public void ExecuteHearCurrentVoiceSample()`

**用途 / Purpose:** 执行 「hear current voice sample」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteHearCurrentVoiceSample();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 「reset」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteReset();
```

### ExecuteResetAll
`public void ExecuteResetAll()`

**用途 / Purpose:** 执行 「reset all」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteResetAll();
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 「randomize」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteRandomize();
```

### ExecuteRandomizeAll
`public void ExecuteRandomizeAll()`

**用途 / Purpose:** 执行 「randomize all」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteRandomizeAll();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteDone();
```

### ExecuteRedo
`public void ExecuteRedo()`

**用途 / Purpose:** 执行 「redo」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteRedo();
```

### ExecuteUndo
`public void ExecuteUndo()`

**用途 / Purpose:** 执行 「undo」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteUndo();
```

### ExecuteChangeClothing
`public void ExecuteChangeClothing()`

**用途 / Purpose:** 执行 「change clothing」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.ExecuteChangeClothing();
```

### AddCommand
`public void AddCommand()`

**用途 / Purpose:** 将 「command」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.AddCommand();
```

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)`

**用途 / Purpose:** 为 「body properties」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SetBodyProperties(bodyProperties, false, 0, 0, false);
```

### UpdateFacegen
`public void UpdateFacegen()`

**用途 / Purpose:** 重新计算并更新 「facegen」 的最新表示。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.UpdateFacegen();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SetDoneInputKey(hotKey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「previous tab input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SetPreviousTabInputKey(hotKey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「next tab input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.SetNextTabInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** 将 「camera control input key」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** 将 「camera control input key」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**用途 / Purpose:** 将 「camera control input key」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.AddCameraControlInputKey(gameAxisKey);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 FaceGenVM 实例
FaceGenVM faceGenVM = ...;
faceGenVM.Reset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FaceGenVM faceGenVM = ...;
faceGenVM.SetFaceGenerationParams(faceGenerationParams);
```

## 参见

- [本区域目录](../)