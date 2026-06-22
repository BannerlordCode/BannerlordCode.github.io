<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpgradeRequirementsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UpgradeRequirementsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `UpgradeRequirementsVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsItemRequirementMet` | `public bool IsItemRequirementMet { get; set; }` |
| `IsPerkRequirementMet` | `public bool IsPerkRequirementMet { get; set; }` |
| `HasItemRequirement` | `public bool HasItemRequirement { get; set; }` |
| `HasPerkRequirement` | `public bool HasPerkRequirement { get; set; }` |
| `PerkRequirement` | `public string PerkRequirement { get; set; }` |
| `ItemRequirement` | `public string ItemRequirement { get; set; }` |
| `ItemRequirementHint` | `public HintViewModel ItemRequirementHint { get; set; }` |
| `PerkRequirementHint` | `public HintViewModel PerkRequirementHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetItemRequirement

```csharp
public void SetItemRequirement(ItemCategory category)
```

### SetPerkRequirement

```csharp
public void SetPerkRequirement(PerkObject perk)
```

### SetRequirementsMet

```csharp
public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)