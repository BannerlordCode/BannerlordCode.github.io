<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanPartyItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanPartyItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Expense` | `public int Expense { get; }` |
| `Income` | `public int Income { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `CharacterModel` | `public CharacterViewModel CharacterModel { get; set; }` |
| `PartyBehaviorSelector` | `public ClanPartyBehaviorSelectorVM PartyBehaviorSelector { get; set; }` |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasHeroMembers` | `public bool HasHeroMembers { get; set; }` |
| `IsClanRoleSelectionHighlightEnabled` | `public bool IsClanRoleSelectionHighlightEnabled { get; set; }` |
| `IsRoleSelectionPopupVisible` | `public bool IsRoleSelectionPopupVisible { get; set; }` |
| `IsDisbanding` | `public bool IsDisbanding { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `CanUseActions` | `public bool CanUseActions { get; set; }` |
| `IsChangeLeaderVisible` | `public bool IsChangeLeaderVisible { get; set; }` |
| `IsChangeLeaderEnabled` | `public bool IsChangeLeaderEnabled { get; set; }` |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint { get; set; }` |
| `IsCaravan` | `public bool IsCaravan { get; set; }` |
| `ShouldPartyHaveExpense` | `public bool ShouldPartyHaveExpense { get; set; }` |
| `HasCompanion` | `public bool HasCompanion { get; set; }` |
| `IsAutoRecruitmentVisible` | `public bool IsAutoRecruitmentVisible { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateProperties

```csharp
public void UpdateProperties()
```

### OnPartySelection

```csharp
public void OnPartySelection()
```

### ExecuteChangeLeader

```csharp
public void ExecuteChangeLeader()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)