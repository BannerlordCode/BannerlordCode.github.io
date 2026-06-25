---
title: "PartyTroopManagerVM"
description: "PartyTroopManagerVM 的自动生成类参考。"
---
# PartyTroopManagerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs`

## 概述

`PartyTroopManagerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |
| `FocusedTroop` | `public PartyTroopManagerItemVM FocusedTroop { get; set; }` |
| `Troops` | `public MBBindingList<PartyTroopManagerItemVM> Troops { get; set; }` |
| `OpenButtonHint` | `public HintViewModel OpenButtonHint { get; set; }` |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AvatarText` | `public string AvatarText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CountText` | `public string CountText { get; set; }` |
| `GoldChangeText` | `public string GoldChangeText { get; set; }` |
| `HorseChangeText` | `public string HorseChangeText { get; set; }` |
| `MoraleChangeText` | `public string MoraleChangeText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |

## 主要方法

### ExecuteItemPrimaryAction
`public virtual void ExecuteItemPrimaryAction()`

**用途 / Purpose:** 执行 「item primary action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteItemPrimaryAction();
```

### ExecuteItemSecondaryAction
`public virtual void ExecuteItemSecondaryAction()`

**用途 / Purpose:** 执行 「item secondary action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteItemSecondaryAction();
```

### ExecuteItemTertiaryAction
`public virtual void ExecuteItemTertiaryAction()`

**用途 / Purpose:** 执行 「item tertiary action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteItemTertiaryAction();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.OnFinalize();
```

### OpenPopUp
`public virtual void OpenPopUp()`

**用途 / Purpose:** 打开「pop up」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.OpenPopUp();
```

### ExecuteDone
`public virtual void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteDone();
```

### UpdateOpenButtonHint
`public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)`

**用途 / Purpose:** 重新计算并更新 「open button hint」 的最新表示。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.UpdateOpenButtonHint(false, false, false);
```

### ExecuteCancel
`public abstract void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteCancel();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetCancelInputKey(hotKey);
```

### SetPrimaryActionInputKey
`public void SetPrimaryActionInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「primary action input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetPrimaryActionInputKey(hotKey);
```

### SetSecondaryActionInputKey
`public void SetSecondaryActionInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「secondary action input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetSecondaryActionInputKey(hotKey);
```

### SetTertiaryActionInputKey
`public void SetTertiaryActionInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「tertiary action input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyTroopManagerVM 实例
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetTertiaryActionInputKey(hotKey);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyTroopManagerVM instance = ...;
```

## 参见

- [本区域目录](../)