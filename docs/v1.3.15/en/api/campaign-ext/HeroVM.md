<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HeroVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsChild` | `public bool IsChild { get; set; }` |
| `IsKingdomLeader` | `public bool IsKingdomLeader { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `ClanBanner_9` | `public BannerImageIdentifierVM ClanBanner_9 { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteLink

```csharp
public void ExecuteLink()
```

### ExecuteBeginHint

```csharp
public virtual void ExecuteBeginHint()
```

### ExecuteEndHint

```csharp
public virtual void ExecuteEndHint()
```

### GetRelation

```csharp
public static int GetRelation(Hero hero)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)