---
title: "TownManagementVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownManagementVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs`

## 概述

`TownManagementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CompletionText` | `public string CompletionText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ManageText` | `public string ManageText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `WallsText` | `public string WallsText { get; set; }` |
| `CurrentProjectText` | `public string CurrentProjectText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `IsGovernorSelectionEnabled` | `public bool IsGovernorSelectionEnabled { get; set; }` |
| `IsTown` | `public bool IsTown { get; set; }` |
| `Show` | `public bool Show { get; set; }` |
| `IsThereCurrentProject` | `public bool IsThereCurrentProject { get; set; }` |
| `IsSelectingGovernor` | `public bool IsSelectingGovernor { get; set; }` |
| `MiddleFirstTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleFirstTextList { get; set; }` |
| `MiddleSecondTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleSecondTextList { get; set; }` |
| `Shops` | `public MBBindingList<TownManagementShopItemVM> Shops { get; set; }` |
| `Villages` | `public MBBindingList<TownManagementVillageItemVM> Villages { get; set; }` |
| `GovernorSelectionDisabledHint` | `public HintViewModel GovernorSelectionDisabledHint { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `ShopsInSettlementText` | `public string ShopsInSettlementText { get; set; }` |
| `IsCurrentProjectDaily` | `public bool IsCurrentProjectDaily { get; set; }` |
| `CurrentProjectProgress` | `public int CurrentProjectProgress { get; set; }` |
| `ProjectSelection` | `public SettlementProjectSelectionVM ProjectSelection { get; set; }` |
| `GovernorSelection` | `public SettlementGovernorSelectionVM GovernorSelection { get; set; }` |
| `ReserveControl` | `public TownManagementReserveControlVM ReserveControl { get; set; }` |
| `CurrentGovernorTooltip` | `public BasicTooltipViewModel CurrentGovernorTooltip { get; set; }` |
| `CurrentGovernor` | `public HeroVM CurrentGovernor { get; set; }` |
| `ConsumptionTooltip` | `public BasicTooltipViewModel ConsumptionTooltip { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new TownManagementVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)