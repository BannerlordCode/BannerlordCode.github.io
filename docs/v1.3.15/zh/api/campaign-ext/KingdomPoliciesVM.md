<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomPoliciesVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomPoliciesVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomPoliciesVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `ActivePolicies` | `public MBBindingList<KingdomPolicyItemVM> ActivePolicies { get; set; }` |
| `OtherPolicies` | `public MBBindingList<KingdomPolicyItemVM> OtherPolicies { get; set; }` |
| `CurrentSelectedPolicy` | `public KingdomPolicyItemVM CurrentSelectedPolicy { get; set; }` |
| `CanProposeOrDisavowPolicy` | `public bool CanProposeOrDisavowPolicy { get; set; }` |
| `ProposalAndDisavowalCost` | `public int ProposalAndDisavowalCost { get; set; }` |
| `NumOfActivePoliciesText` | `public string NumOfActivePoliciesText { get; set; }` |
| `NumOfOtherPoliciesText` | `public string NumOfOtherPoliciesText { get; set; }` |
| `IsInProposeMode` | `public bool IsInProposeMode { get; set; }` |
| `DisavowPolicyText` | `public string DisavowPolicyText { get; set; }` |
| `CurrentActiveModeText` | `public string CurrentActiveModeText { get; set; }` |
| `CurrentActionText` | `public string CurrentActionText { get; set; }` |
| `ProposeNewPolicyText` | `public string ProposeNewPolicyText { get; set; }` |
| `BackText` | `public string BackText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ActivePoliciesText` | `public string ActivePoliciesText { get; set; }` |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText { get; set; }` |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint { get; set; }` |
| `PolicyLikelihood` | `public int PolicyLikelihood { get; set; }` |
| `OtherPoliciesText` | `public string OtherPoliciesText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SelectPolicy

```csharp
public void SelectPolicy(PolicyObject policy)
```

### RefreshPolicyList

```csharp
public void RefreshPolicyList()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)