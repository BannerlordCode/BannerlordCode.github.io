<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFiefsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFiefsVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanFiefsVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GovernorActionText` | `public string GovernorActionText { get; set; }` |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief { get; set; }` |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint { get; set; }` |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TaxText` | `public string TaxText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |
| `TownsText` | `public string TownsText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `NoFiefsText` | `public string NoFiefsText { get; set; }` |
| `NoGovernorText` | `public string NoGovernorText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Settlements` | `public MBBindingList<ClanSettlementItemVM> Settlements { get; set; }` |
| `Castles` | `public MBBindingList<ClanSettlementItemVM> Castles { get; set; }` |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief { get; set; }` |
| `SortController` | `public ClanFiefsSortControllerVM SortController { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshAllLists

```csharp
public void RefreshAllLists()
```

### SelectFief

```csharp
public void SelectFief(Settlement settlement)
```

### ExecuteAssignGovernor

```csharp
public void ExecuteAssignGovernor()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)