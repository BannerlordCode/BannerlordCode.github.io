<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnchorPoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnchorPoint

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `AnchorPoint` is a class in the `TaleWorlds.CampaignSystem.Naval` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Owner` | `public MobileParty Owner { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `TargetPosition` | `public CampaignVec2 TargetPosition { get; }` |
| `IsMovingToPoint` | `public bool IsMovingToPoint { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `ArrivalTime` | `public CampaignTime ArrivalTime { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public TextObject Name { get; }` |


## Key Methods

### CallFleet

```csharp
public void CallFleet(Settlement settlement)
```

### SetPosition

```csharp
public void SetPosition(CampaignVec2 position)
```

### SetSettlement

```csharp
public void SetSettlement(Settlement settlement)
```

### InitializeOnLoad

```csharp
public void InitializeOnLoad(MobileParty owner)
```

### CanPartyInteract

```csharp
public bool CanPartyInteract(MobileParty mobileParty, float dt)
```

### SetLastUsedDisembarkPosition

```csharp
public void SetLastUsedDisembarkPosition(CampaignVec2 pos)
```

### GetLastUsedDisembarkPosition

```csharp
public CampaignVec2 GetLastUsedDisembarkPosition()
```

### GetInteractionPosition

```csharp
public CampaignVec2 GetInteractionPosition(MobileParty interactingParty)
```

### OnPartyInteraction

```csharp
public void OnPartyInteraction(MobileParty mobileParty)
```

### GetPosition

```csharp
public Vec3 GetPosition()
```

### IsAtSettlement

```csharp
public bool IsAtSettlement(Settlement settlement)
```

### IsTargetingSettlement

```csharp
public bool IsTargetingSettlement(Settlement settlement)
```

### CheckPositionsForMapChangeAndUpdateIfNeeded

```csharp
public void CheckPositionsForMapChangeAndUpdateIfNeeded()
```

### ResetPosition

```csharp
public void ResetPosition()
```

### ResetMoveTarget

```csharp
public void ResetMoveTarget()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)