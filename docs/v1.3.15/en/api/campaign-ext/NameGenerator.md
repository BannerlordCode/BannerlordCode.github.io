<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameGenerator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameGenerator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NameGenerator` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static NameGenerator Current { get; }` |


## Key Methods

### GenerateHeroNameAndHeroFullName

```csharp
public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)
```

### GenerateHeroFirstName

```csharp
public TextObject GenerateHeroFirstName(Hero hero)
```

### GenerateFirstNameForPlayer

```csharp
public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)
```

### GenerateClanName

```csharp
public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)
```

### GetNameListForCulture

```csharp
public MBReadOnlyList<TextObject> GetNameListForCulture(CultureObject npcCulture, bool isFemale)
```

### AddName

```csharp
public void AddName(TextObject name)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)