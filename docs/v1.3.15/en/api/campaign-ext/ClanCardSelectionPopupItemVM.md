<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanCardSelectionPopupItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanCardSelectionPopupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanCardSelectionPopupItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Identifier` | `public object Identifier { get; }` |
| `ActionResultText` | `public TextObject ActionResultText { get; }` |
| `Image` | `public ImageIdentifierVM Image { get; set; }` |
| `Properties` | `public MBBindingList<ClanCardSelectionPopupItemPropertyVM> Properties { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `SpriteType` | `public string SpriteType { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `SpriteLabel` | `public string SpriteLabel { get; set; }` |
| `SpecialAction` | `public string SpecialAction { get; set; }` |
| `HasImage` | `public bool HasImage { get; set; }` |
| `HasSprite` | `public bool HasSprite { get; set; }` |
| `IsSpecialActionItem` | `public bool IsSpecialActionItem { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)