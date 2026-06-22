<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemBarterable`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemBarterable` is a class in the `TaleWorlds.CampaignSystem.BarterSystem.Barterables` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public override string StringID { get; }` |
| `ItemRosterElement` | `public ItemRosterElement ItemRosterElement { get; }` |
| `MaxAmount` | `public override int MaxAmount { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `ItemValue` | `public int ItemValue { get; }` |


## Key Methods

### GetUnitValueForFaction

```csharp
public override int GetUnitValueForFaction(IFaction faction)
```

### CheckBarterLink

```csharp
public override void CheckBarterLink(Barterable parentLinkedBarterable)
```

### GetVisualIdentifier

```csharp
public override ImageIdentifier GetVisualIdentifier()
```

### GetEncyclopediaLink

```csharp
public override string GetEncyclopediaLink()
```

### Apply

```csharp
public override void Apply()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)