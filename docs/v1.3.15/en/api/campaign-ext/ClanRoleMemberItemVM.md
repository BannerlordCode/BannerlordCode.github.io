<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanRoleMemberItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanRoleMemberItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanRoleMemberItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |
| `RelevantSkillValue` | `public int RelevantSkillValue { get; }` |
| `Member` | `public ClanPartyMemberItemVM Member { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsRemoveAssigneeOption` | `public bool IsRemoveAssigneeOption { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteAssignHeroToRole

```csharp
public void ExecuteAssignHeroToRole()
```

### GetEffectsList

```csharp
public string GetEffectsList(PartyRole role)
```

### IsHeroAssignableForRole

```csharp
public static bool IsHeroAssignableForRole(Hero hero, PartyRole role, MobileParty party)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)