---
title: "MPCosmeticObtainPopupVM"
description: "MPCosmeticObtainPopupVM 的自动生成类参考。"
---
# MPCosmeticObtainPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCosmeticObtainPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPCosmeticObtainPopupVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OnFinalize();
```

### OpenWith
`public void OpenWith(MPArmoryCosmeticClothingItemVM item)`

**用途 / Purpose:** 打开「with」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OpenWith(item);
```

### OpenWith
`public void OpenWith(MPArmoryCosmeticTauntItemVM item, CharacterViewModel sourceCharacter)`

**用途 / Purpose:** 打开「with」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OpenWith(item, sourceCharacter);
```

### ExecuteSelectNextAnimation
`public void ExecuteSelectNextAnimation(int increment)`

**用途 / Purpose:** 执行 「select next animation」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.ExecuteSelectNextAnimation(0);
```

### OpenWith
`public void OpenWith(MPLobbyCosmeticSigilItemVM sigilItem)`

**用途 / Purpose:** 打开「with」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.OpenWith(sigilItem);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.ExecuteClosePopup();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPCosmeticObtainPopupVM 实例
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPCosmeticObtainPopupVM mPCosmeticObtainPopupVM = ...;
mPCosmeticObtainPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)