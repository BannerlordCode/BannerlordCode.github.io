<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaUnitPageVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaUnitPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaUnitPageVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `PropertiesList` | `public MBBindingList<StringItemWithHintVM> PropertiesList { get; set; }` |
| `EquipmentSetSelector` | `public SelectorVM<EncyclopediaUnitEquipmentSetSelectorItemVM> EquipmentSetSelector { get; set; }` |
| `CurrentSelectedEquipmentSet` | `public EncyclopediaUnitEquipmentSetSelectorItemVM CurrentSelectedEquipmentSet { get; set; }` |
| `UnitCharacter` | `public CharacterViewModel UnitCharacter { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `Tree` | `public EncyclopediaTroopTreeNodeVM Tree { get; set; }` |
| `TreeDisplayErrorText` | `public string TreeDisplayErrorText { get; set; }` |
| `EquipmentSetText` | `public string EquipmentSetText { get; set; }` |
| `HasErrors` | `public bool HasErrors { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetName

```csharp
public override string GetName()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### ExecuteSwitchBookmarkedState

```csharp
public override void ExecuteSwitchBookmarkedState()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)