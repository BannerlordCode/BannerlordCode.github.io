<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomArmyVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomArmyVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomArmyVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ArmySortController` | `public KingdomArmySortControllerVM ArmySortController { get; set; }` |
| `CreateArmyText` | `public string CreateArmyText { get; set; }` |
| `DisbandActionExplanationText` | `public string DisbandActionExplanationText { get; set; }` |
| `ManageActionExplanationText` | `public string ManageActionExplanationText { get; set; }` |
| `CurrentSelectedArmy` | `public KingdomArmyItemVM CurrentSelectedArmy { get; set; }` |
| `CreateArmyHint` | `public HintViewModel CreateArmyHint { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `PlayerHasArmy` | `public bool PlayerHasArmy { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ShowOnMapText` | `public string ShowOnMapText { get; set; }` |
| `ArmyNameText` | `public string ArmyNameText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `Armies` | `public MBBindingList<KingdomArmyItemVM> Armies { get; set; }` |
| `CanDisbandCurrentArmy` | `public bool CanDisbandCurrentArmy { get; set; }` |
| `CanManageCurrentArmy` | `public bool CanManageCurrentArmy { get; set; }` |
| `CanChangeLeaderOfCurrentArmy` | `public bool CanChangeLeaderOfCurrentArmy { get; set; }` |
| `CanShowLocationOfCurrentArmy` | `public bool CanShowLocationOfCurrentArmy { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshArmyList

```csharp
public void RefreshArmyList()
```

### SelectArmy

```csharp
public void SelectArmy(Army army)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)