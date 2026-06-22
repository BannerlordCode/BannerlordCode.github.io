<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingAvailableHeroItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingAvailableHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingAvailableHeroItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HeroData` | `public HeroVM HeroData { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `CurrentStamina` | `public float CurrentStamina { get; set; }` |
| `MaxStamina` | `public int MaxStamina { get; set; }` |
| `StaminaPercentage` | `public string StaminaPercentage { get; set; }` |
| `SmithySkillLevel` | `public int SmithySkillLevel { get; set; }` |
| `CraftingPerks` | `public MBBindingList<CraftingPerkVM> CraftingPerks { get; set; }` |
| `PerksText` | `public string PerksText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshStamina

```csharp
public void RefreshStamina()
```

### RefreshOrderAvailability

```csharp
public void RefreshOrderAvailability(CraftingOrder order)
```

### RefreshSkills

```csharp
public void RefreshSkills()
```

### RefreshPerks

```csharp
public void RefreshPerks()
```

### ExecuteSelection

```csharp
public void ExecuteSelection()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)