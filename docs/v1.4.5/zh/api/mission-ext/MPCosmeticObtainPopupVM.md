<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPCosmeticObtainPopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPCosmeticObtainPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCosmeticObtainPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPCosmeticObtainPopupVM.cs`

## 概述

`MPCosmeticObtainPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanObtain` | `public bool CanObtain { get; set; }` |
| `IsOpenedWithClothingItem` | `public bool IsOpenedWithClothingItem { get; set; }` |
| `IsOpenedWithSigilItem` | `public bool IsOpenedWithSigilItem { get; set; }` |
| `IsOpenedWithTauntItem` | `public bool IsOpenedWithTauntItem { get; set; }` |
| `IsObtainSuccessful` | `public bool IsObtainSuccessful { get; set; }` |
| `ObtainState` | `public int ObtainState { get; set; }` |
| `ObtainDescriptionText` | `public string ObtainDescriptionText { get; set; }` |
| `AnimationVariationText` | `public string AnimationVariationText { get; set; }` |
| `ContinueText` | `public string ContinueText { get; set; }` |
| `NotEnoughLootText` | `public string NotEnoughLootText { get; set; }` |
| `ObtainResultText` | `public string ObtainResultText { get; set; }` |
| `PreviewAsText` | `public string PreviewAsText { get; set; }` |
| `CurrentLootText` | `public string CurrentLootText { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `CharacterVisual` | `public CharacterViewModel CharacterVisual { get; set; }` |
| `SigilItem` | `public MPLobbyCosmeticSigilItemVM SigilItem { get; set; }` |
| `Item` | `public MPArmoryCosmeticClothingItemVM Item { get; set; }` |
| `TauntItem` | `public MPArmoryCosmeticTauntItemVM TauntItem { get; set; }` |
| `ItemVisual` | `public ItemCollectionElementViewModel ItemVisual { get; set; }` |
| `Cultures` | `public MBBindingList<MPCultureItemVM> Cultures { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OpenWith
`public void OpenWith(MPArmoryCosmeticClothingItemVM item)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### OpenWith
`public void OpenWith(MPArmoryCosmeticTauntItemVM item, CharacterViewModel sourceCharacter)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteSelectNextAnimation
`public void ExecuteSelectNextAnimation(int increment)`

**用途 / Purpose:** 执行 `select next animation` 操作或流程。

### OpenWith
`public void OpenWith(MPLobbyCosmeticSigilItemVM sigilItem)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new MPCosmeticObtainPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)