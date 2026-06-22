<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionItemBaseVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionItemBaseVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`DecisionItemBaseVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `KingdomDecisionMaker` | `public KingdomElection KingdomDecisionMaker { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `EndDecisionHint` | `public HintViewModel EndDecisionHint { get; set; }` |
| `DecisionType` | `public int DecisionType { get; set; }` |
| `TotalInfluenceText` | `public string TotalInfluenceText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `CanEndDecision` | `public bool CanEndDecision { get; set; }` |
| `IsKingsDecisionOver` | `public bool IsKingsDecisionOver { get; set; }` |
| `RelationChangeText` | `public string RelationChangeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `InfluenceCostText` | `public string InfluenceCostText { get; set; }` |
| `DecisionOptionsList` | `public MBBindingList<DecisionOptionVM> DecisionOptionsList { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteFinalSelection

```csharp
public void ExecuteFinalSelection()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(InputKeyItemVM inputKeyItemVM)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)