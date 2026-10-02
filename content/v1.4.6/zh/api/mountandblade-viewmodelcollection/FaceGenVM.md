---
title: "FaceGenVM"
description: "FaceGenVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 101 个（方法 28、属性 69、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs。"
---
# FaceGenVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FaceGenVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs`

## 概述

FaceGenVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 FaceGenVM → ViewModel。public/protected 成员共 101 个：28 方法、69 属性、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FaceGenVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator），继承链 FaceGenVM → ViewModel。成员构成以属性为主（属性 69/101，方法 28/101），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FaceGenVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetFaceGenerationParams` | `public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)` | 方法 |
| `FaceGenVM` | `public FaceGenVM(BodyGenerator bodyGenerator, IFaceGeneratorHandler faceGeneratorScreen, Action<float>onHeightChanged, Action onAgeChanged, TextObject affirmitiveText, TextObject negativeText, int currentStageIndex, int totalStagesCount, int furthestIndex, Action<int>goToIndex, bool canChangeGender, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `InitializeHistory` | `public void InitializeHistory(FaceGenHistory faceGenHistory)` | 方法 |
| `OnTabClicked` | `public void OnTabClicked(int index)` | 方法 |
| `SelectPreviousTab` | `public void SelectPreviousTab()` | 方法 |
| `SelectNextTab` | `public void SelectNextTab()` | 方法 |
| `Refresh` | `public void Refresh(bool clearProperties)` | 方法 |
| `ExecuteHearCurrentVoiceSample` | `public void ExecuteHearCurrentVoiceSample()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteResetAll` | `public void ExecuteResetAll()` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | 方法 |
| `ExecuteRandomizeAll` | `public void ExecuteRandomizeAll()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteRedo` | `public void ExecuteRedo()` | 方法 |
| `ExecuteUndo` | `public void ExecuteUndo()` | 方法 |
| `ExecuteChangeClothing` | `public void ExecuteChangeClothing()` | 方法 |
| `AddCommand` | `public void AddCommand()` | 方法 |
| `SetBodyProperties` | `public void SetBodyProperties(BodyProperties bodyProperties, bool ignoreDebugValues, int race = 0, int gender = -1, bool recordChange = false)` | 方法 |
| `UpdateFacegen` | `public void UpdateFacegen()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotKey)` | 方法 |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | 属性 |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | 属性 |
| `AreAllTabsEnabled` | `public bool AreAllTabsEnabled` | 属性 |
| `IsBodyEnabled` | `public bool IsBodyEnabled` | 属性 |
| `IsFaceEnabled` | `public bool IsFaceEnabled` | 属性 |
| `IsEyesEnabled` | `public bool IsEyesEnabled` | 属性 |
| `IsNoseEnabled` | `public bool IsNoseEnabled` | 属性 |
| `IsMouthEnabled` | `public bool IsMouthEnabled` | 属性 |
| `IsHairEnabled` | `public bool IsHairEnabled` | 属性 |
| `IsTaintEnabled` | `public bool IsTaintEnabled` | 属性 |
| `FlipHairLbl` | `public string FlipHairLbl` | 属性 |
| `SkinColorLbl` | `public string SkinColorLbl` | 属性 |
| `RaceLbl` | `public string RaceLbl` | 属性 |
| `GenderLbl` | `public string GenderLbl` | 属性 |
| `CancelBtnLbl` | `public string CancelBtnLbl` | 属性 |
| `DoneBtnLbl` | `public string DoneBtnLbl` | 属性 |
| `BodyHint` | `public HintViewModel BodyHint` | 属性 |
| `FaceHint` | `public HintViewModel FaceHint` | 属性 |
| `EyesHint` | `public HintViewModel EyesHint` | 属性 |
| `NoseHint` | `public HintViewModel NoseHint` | 属性 |
| `HairHint` | `public HintViewModel HairHint` | 属性 |
| `TaintHint` | `public HintViewModel TaintHint` | 属性 |
| `MouthHint` | `public HintViewModel MouthHint` | 属性 |
| `RedoHint` | `public HintViewModel RedoHint` | 属性 |
| `UndoHint` | `public HintViewModel UndoHint` | 属性 |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | 属性 |
| `RandomizeAllHint` | `public HintViewModel RandomizeAllHint` | 属性 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `ResetAllHint` | `public HintViewModel ResetAllHint` | 属性 |
| `ClothHint` | `public HintViewModel ClothHint` | 属性 |
| `HairNum` | `public int HairNum` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>SkinColorSelector` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>HairColorSelector` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>TattooColorSelector` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>RaceSelector` | 属性 |
| `Tab` | `public int Tab` | 属性 |
| `SelectedGender` | `public int SelectedGender` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>BodyProperties` | 属性 |
| `CanChangeGender` | `public bool CanChangeGender` | 属性 |
| `CanChangeRace` | `public bool CanChangeRace` | 属性 |
| `IsUndoEnabled` | `public bool IsUndoEnabled` | 属性 |
| `IsRedoEnabled` | `public bool IsRedoEnabled` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>FaceProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>EyesProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>NoseProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>MouthProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>HairProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<FaceGenPropertyVM>TaintProperties` | 属性 |
| `MBBindingList` | `public MBBindingList<FacegenListItemVM>TaintTypes` | 属性 |
| `MBBindingList` | `public MBBindingList<FacegenListItemVM>BeardTypes` | 属性 |
| `MBBindingList` | `public MBBindingList<FacegenListItemVM>HairTypes` | 属性 |
| `SoundPreset` | `public FaceGenPropertyVM SoundPreset` | 属性 |
| `EyebrowTypes` | `public FaceGenPropertyVM EyebrowTypes` | 属性 |
| `TeethTypes` | `public FaceGenPropertyVM TeethTypes` | 属性 |
| `FlipHairCb` | `public bool FlipHairCb` | 属性 |
| `IsDressed` | `public bool IsDressed` | 属性 |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | 属性 |
| `FaceTypes` | `public FaceGenPropertyVM FaceTypes` | 属性 |
| `Title` | `public string Title` | 属性 |
| `TotalStageCount` | `public int TotalStageCount` | 属性 |
| `CurrentStageIndex` | `public int CurrentStageIndex` | 属性 |
| `FurthestIndex` | `public int FurthestIndex` | 属性 |
| `FaceGenTabs` | `public enum FaceGenTabs` | 属性 |
| `Presets` | `public enum Presets` | 属性 |
| `GenderBasedSelectedValue` | `public struct GenderBasedSelectedValue` | 属性 |
| `FaceGenTabs` | `public enum FaceGenTabs` | 嵌套类型 |
| `Presets` | `public enum Presets` | 嵌套类型 |
| `GenderBasedSelectedValue` | `public struct GenderBasedSelectedValue` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FacegenListItemVM](../FacegenListItemVM)
- [同命名空间 FaceGenPropertyVM](../FaceGenPropertyVM)
