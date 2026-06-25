---
title: "KingdomManagementVM"
description: "KingdomManagementVM 的自动生成类参考。"
---
# KingdomManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomManagementVM.cs`

## 概述

`KingdomManagementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `KingdomActionHint` | `public BasicTooltipViewModel KingdomActionHint { get; set; }` |
| `KingdomBanner` | `public BannerImageIdentifierVM KingdomBanner { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Army` | `public KingdomArmyVM Army { get; set; }` |
| `Settlement` | `public KingdomSettlementVM Settlement { get; set; }` |
| `Clan` | `public KingdomClanVM Clan { get; set; }` |
| `Policy` | `public KingdomPoliciesVM Policy { get; set; }` |
| `Diplomacy` | `public KingdomDiplomacyVM Diplomacy { get; set; }` |
| `GiftFief` | `public KingdomGiftFiefPopupVM GiftFief { get; set; }` |
| `Decision` | `public KingdomDecisionsVM Decision { get; set; }` |
| `ChangeKingdomNameHint` | `public HintViewModel ChangeKingdomNameHint { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `PlayerHasKingdom` | `public bool PlayerHasKingdom { get; set; }` |
| `IsKingdomActionEnabled` | `public bool IsKingdomActionEnabled { get; set; }` |
| `PlayerCanChangeKingdomName` | `public bool PlayerCanChangeKingdomName { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `KingdomActionText` | `public string KingdomActionText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `DiplomacyText` | `public string DiplomacyText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ArmiesText` | `public string ArmiesText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.RefreshValues();
```

### OnRefresh
`public void OnRefresh()`

**用途 / Purpose:** 在 refresh 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.OnRefresh();
```

### OnFrameTick
`public void OnFrameTick()`

**用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.OnFrameTick();
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.ExecuteClose();
```

### SelectArmy
`public void SelectArmy(Army army)`

**用途 / Purpose:** 调用 SelectArmy 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectArmy(army);
```

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**用途 / Purpose:** 调用 SelectSettlement 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectSettlement(settlement);
```

### SelectClan
`public void SelectClan(Clan clan)`

**用途 / Purpose:** 调用 SelectClan 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectClan(clan);
```

### SelectPolicy
`public void SelectPolicy(PolicyObject policy)`

**用途 / Purpose:** 调用 SelectPolicy 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectPolicy(policy);
```

### SelectKingdom
`public void SelectKingdom(Kingdom kingdom)`

**用途 / Purpose:** 调用 SelectKingdom 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectKingdom(kingdom);
```

### SelectPreviousCategory
`public void SelectPreviousCategory()`

**用途 / Purpose:** 调用 SelectPreviousCategory 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectPreviousCategory();
```

### SelectNextCategory
`public void SelectNextCategory()`

**用途 / Purpose:** 调用 SelectNextCategory 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SelectNextCategory();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetCancelInputKey(hotkey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 previous tab input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetPreviousTabInputKey(hotkey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 next tab input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomManagementVM 实例
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.SetNextTabInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomManagementVM kingdomManagementVM = ...;
kingdomManagementVM.RefreshValues();
```

## 参见

- [本区域目录](../)