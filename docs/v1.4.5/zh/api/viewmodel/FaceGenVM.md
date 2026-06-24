<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGenVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FaceGenVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator/FaceGenVM.cs`

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

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 设置 `face generation params` 的值或状态。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### InitializeHistory
`public void InitializeHistory(FaceGenHistory faceGenHistory)`

**用途 / Purpose:** 初始化 `history` 的状态、资源或绑定。

### OnTabClicked
`public void OnTabClicked(int index)`

**用途 / Purpose:** 当 `tab clicked` 事件触发时调用此方法。

### SelectPreviousTab
`public void SelectPreviousTab()`

**用途 / Purpose:** 处理 `select previous tab` 相关逻辑。

### SelectNextTab
`public void SelectNextTab()`

**用途 / Purpose:** 处理 `select next tab` 相关逻辑。

### Refresh
`public void Refresh(bool clearProperties)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteHearCurrentVoiceSample
`public void ExecuteHearCurrentVoiceSample()`

**用途 / Purpose:** 执行 `hear current voice sample` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteResetAll
`public void ExecuteResetAll()`

**用途 / Purpose:** 执行 `reset all` 操作或流程。

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

### ExecuteRandomizeAll
`public void ExecuteRandomizeAll()`

**用途 / Purpose:** 执行 `randomize all` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteRedo
`public void ExecuteRedo()`

**用途 / Purpose:** 执行 `redo` 操作或流程。

### ExecuteUndo
`public void ExecuteUndo()`

**用途 / Purpose:** 执行 `undo` 操作或流程。

### ExecuteChangeClothing
`public void ExecuteChangeClothing()`

**用途 / Purpose:** 执行 `change clothing` 操作或流程。

### AddCommand
`public void AddCommand()`

**用途 / Purpose:** 向当前集合/状态中添加 `command`。

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)`

**用途 / Purpose:** 设置 `body properties` 的值或状态。

### UpdateFacegen
`public void UpdateFacegen()`

**用途 / Purpose:** 更新 `facegen` 的状态或数据。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `previous tab input key` 的值或状态。

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `next tab input key` 的值或状态。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

## 使用示例

```csharp
var value = new FaceGenVM();
value.Reset();
```

## 参见

- [完整类目录](../catalog)