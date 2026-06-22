<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPartyItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanPartyItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)