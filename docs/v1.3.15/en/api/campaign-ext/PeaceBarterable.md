<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeaceBarterable`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeaceBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PeaceBarterable` is a class in the `TaleWorlds.CampaignSystem.BarterSystem.Barterables` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Duration` | `public CampaignTime Duration { get; }` |
| `StringID` | `public override string StringID { get; }` |
| `Name` | `public override TextObject Name { get; }` |


## Key Methods

### GetUnitValueForFaction

```csharp
public override int GetUnitValueForFaction(IFaction factionToEvaluateFor)
```

### IsCompatible

```csharp
public override bool IsCompatible(Barterable barterable)
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