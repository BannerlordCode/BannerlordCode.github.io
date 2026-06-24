<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenderBasedSelectedValue`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenderBasedSelectedValue

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct GenderBasedSelectedValue`
**领域:** mission-ext

## 概述

`GenderBasedSelectedValue` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 主要方法

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 GenderBasedSelectedValue 实例，再调用它的公开方法
var value = new GenderBasedSelectedValue();
value.SetFaceGenerationParams(faceGenerationParams);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
