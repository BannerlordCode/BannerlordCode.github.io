<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanSettlementItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanSettlementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSettlementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs`

## 概述

`ClanSettlementItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Governor` | `public HeroVM Governor { get; set; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `ProfitItemProperties` | `public MBBindingList<ProfitItemPropertyVM> ProfitItemProperties { get; set; }` |
| `TotalProfit` | `public ProfitItemPropertyVM TotalProfit { get; set; }` |
| `FileName` | `public string FileName { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `NotablesText` | `public string NotablesText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `HasNotables` | `public bool HasNotables { get; set; }` |
| `IsSendMembersEnabled` | `public bool IsSendMembersEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `VillagesOwned` | `public MBBindingList<ClanSettlementItemVM> VillagesOwned { get; set; }` |
| `Notables` | `public MBBindingList<HeroVM> Notables { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `SendMembersHint` | `public HintViewModel SendMembersHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnSettlementSelection
`public void OnSettlementSelection()`

**用途 / Purpose:** 当 `settlement selection` 事件触发时调用此方法。

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 `link` 操作或流程。

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** 执行 `close tooltip` 操作或流程。

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**用途 / Purpose:** 执行 `open tooltip` 操作或流程。

### ExecuteSendMembers
`public void ExecuteSendMembers()`

**用途 / Purpose:** 执行 `send members` 操作或流程。

## 使用示例

```csharp
var value = new ClanSettlementItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)