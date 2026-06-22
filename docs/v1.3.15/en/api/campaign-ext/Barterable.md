<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Barterable`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Barterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Barterable` is a class in the `TaleWorlds.CampaignSystem.BarterSystem.Barterables` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public abstract string StringID { get; }` |
| `OriginalOwner` | `public Hero OriginalOwner { get; }` |
| `OriginalParty` | `public PartyBase OriginalParty { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `MaxAmount` | `public virtual int MaxAmount { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |
| `IsContextDependent` | `public bool IsContextDependent { get; set; }` |
| `Group` | `public BarterGroup Group { get; set; }` |
| `LinkedBarterables` | `public MBReadOnlyList<Barterable> LinkedBarterables { get; }` |
| `Side` | `public Barterable.BarterSide Side { get; }` |


## Key Methods

### GetValueForFaction

```csharp
public int GetValueForFaction(IFaction faction)
```

### CheckBarterLink

```csharp
public virtual void CheckBarterLink(Barterable linkedBarterable)
```

### GetUnitValueForFaction

```csharp
public abstract int GetUnitValueForFaction(IFaction faction)
```

### SetIsOffered

```csharp
public void SetIsOffered(bool value)
```

### AddBarterLink

```csharp
public void AddBarterLink(Barterable barterable)
```

### Initialize

```csharp
public void Initialize(BarterGroup barterGroup, bool isContextDependent)
```

### IsCompatible

```csharp
public virtual bool IsCompatible(Barterable barterable)
```

### GetVisualIdentifier

```csharp
public abstract ImageIdentifier GetVisualIdentifier()
```

### GetEncyclopediaLink

```csharp
public virtual string GetEncyclopediaLink()
```

### Apply

```csharp
public abstract void Apply()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)