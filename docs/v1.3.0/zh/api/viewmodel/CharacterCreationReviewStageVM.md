<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationReviewStageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationReviewStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationReviewStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs`

## 概述

`CharacterCreationReviewStageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NameTextQuestion` | `public string NameTextQuestion { get; set; }` |
| `ReviewList` | `public MBBindingList<CharacterCreationReviewStageItemVM> ReviewList { get; set; }` |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CannotAdvanceReasonHint` | `public HintViewModel CannotAdvanceReasonHint { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |

## 主要方法

### ExecuteRandomizeName
`public void ExecuteRandomizeName()`

**用途 / Purpose:** 执行 `randomize name` 操作或流程。

### OnNextStage
`public override void OnNextStage()`

**用途 / Purpose:** 当 `next stage` 事件触发时调用此方法。

### OnPreviousStage
`public override void OnPreviousStage()`

**用途 / Purpose:** 当 `previous stage` 事件触发时调用此方法。

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**用途 / Purpose:** 判断当前对象是否可以执行 `advance to next stage`。

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

## 使用示例

```csharp
var value = new CharacterCreationReviewStageVM();
value.ExecuteRandomizeName();
```

## 参见

- [完整类目录](../catalog)