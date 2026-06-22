<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Track`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Track

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Track` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GetPosition2D` | `public Vec2 GetPosition2D { get; set; }` |
| `Size` | `public int Size { get; set; }` |
| `IsDetected` | `public bool IsDetected { get; set; }` |
| `IsPointer` | `public bool IsPointer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsExpired` | `public bool IsExpired { get; }` |
| `IsAlive` | `public bool IsAlive { get; }` |
| `Scale` | `public float Scale { get; }` |


## Key Methods

### CanPartyInteract

```csharp
public bool CanPartyInteract(MobileParty mobileParty, float dt)
```

### GetPartyTypeEnum

```csharp
public static Track.PartyTypeEnum GetPartyTypeEnum(MobileParty party)
```

### Reset

```csharp
public void Reset()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)