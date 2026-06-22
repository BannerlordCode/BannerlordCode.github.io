<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerSiege`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerSiege

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PlayerSiege` is a class in the `TaleWorlds.CampaignSystem.Siege` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerSiegeEvent` | `public static SiegeEvent PlayerSiegeEvent { get; }` |
| `BesiegedSettlement` | `public static Settlement BesiegedSettlement { get; }` |
| `PlayerSide` | `public static BattleSideEnum PlayerSide { get; }` |
| `IsRebellion` | `public static bool IsRebellion { get; }` |


## Key Methods

### StartSiegePreparation

```csharp
public static void StartSiegePreparation()
```

### OnSiegeEventFinalized

```csharp
public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)
```

### StartPlayerSiege

```csharp
public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)
```

### FinalizePlayerSiege

```csharp
public static void FinalizePlayerSiege()
```

### StartSiegeMission

```csharp
public static void StartSiegeMission(Settlement settlement = null)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)