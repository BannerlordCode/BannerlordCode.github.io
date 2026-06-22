<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkSelectionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PerkSelectionVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AvailablePerks` | `public MBBindingList<PerkSelectionItemVM> AvailablePerks { get; set; }` |


## Key Methods

### SetCurrentSelectionPerk

```csharp
public void SetCurrentSelectionPerk(PerkVM perk)
```

### ResetSelectedPerks

```csharp
public void ResetSelectedPerks()
```

### ApplySelectedPerks

```csharp
public void ApplySelectedPerks()
```

### IsPerkSelected

```csharp
public bool IsPerkSelected(PerkObject perk)
```

### IsAnyPerkSelected

```csharp
public bool IsAnyPerkSelected()
```

### ExecuteDeactivate

```csharp
public void ExecuteDeactivate()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)