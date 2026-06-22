<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Concept`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Concept

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Concept` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public TextObject Title { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `FilterGroup` | `public string FilterGroup { get; }` |
| `LinkID` | `public string LinkID { get; }` |
| `All` | `public static MBReadOnlyList<Concept> All { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |


## Key Methods

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### IsGroupMember

```csharp
public static bool IsGroupMember(string groupName, Concept c)
```

### SetConceptTextLinks

```csharp
public static void SetConceptTextLinks()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)