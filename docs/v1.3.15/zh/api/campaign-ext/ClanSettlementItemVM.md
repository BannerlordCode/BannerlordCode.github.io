<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanSettlementItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanSettlementItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanSettlementItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### OnSettlementSelection

```csharp
public void OnSettlementSelection()
```

### ExecuteLink

```csharp
public void ExecuteLink()
```

### ExecuteCloseTooltip

```csharp
public void ExecuteCloseTooltip()
```

### ExecuteOpenTooltip

```csharp
public void ExecuteOpenTooltip()
```

### ExecuteSendMembers

```csharp
public void ExecuteSendMembers()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)