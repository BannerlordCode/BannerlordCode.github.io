<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpgradeTargetVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UpgradeTargetVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `UpgradeTargetVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `Requirements` | `public UpgradeRequirementsVM Requirements { get; set; }` |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `AvailableUpgrades` | `public int AvailableUpgrades { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |
| `IsHighlighted` | `public bool IsHighlighted { get; set; }` |
| `IsMarinerTroop` | `public bool IsMarinerTroop { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)
```

### ExecuteUpgradeEncyclopediaLink

```csharp
public void ExecuteUpgradeEncyclopediaLink()
```

### ExecuteUpgrade

```csharp
public void ExecuteUpgrade()
```

### ExecuteSetFocused

```csharp
public void ExecuteSetFocused()
```

### ExecuteSetUnfocused

```csharp
public void ExecuteSetUnfocused()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)