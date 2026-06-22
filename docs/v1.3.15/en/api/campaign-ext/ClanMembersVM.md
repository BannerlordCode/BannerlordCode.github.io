<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanMembersVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanMembersVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanMembersVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnyValidMemberSelected` | `public bool IsAnyValidMemberSelected { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `Companions` | `public MBBindingList<ClanLordItemVM> Companions { get; set; }` |
| `Family` | `public MBBindingList<ClanLordItemVM> Family { get; set; }` |
| `CurrentSelectedMember` | `public ClanLordItemVM CurrentSelectedMember { get; set; }` |
| `SortController` | `public ClanMembersSortControllerVM SortController { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshMembersList

```csharp
public void RefreshMembersList()
```

### SelectMember

```csharp
public void SelectMember(Hero hero)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)