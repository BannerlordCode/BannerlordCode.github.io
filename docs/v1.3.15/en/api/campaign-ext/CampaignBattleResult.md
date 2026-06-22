<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignBattleResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignBattleResult

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CampaignBattleResult` is a class in the `TaleWorlds.CampaignSystem.Encounters` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeat` | `public bool PlayerDefeat { get; }` |
| `EnemyPulledBack` | `public bool EnemyPulledBack { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |


## Key Methods

### GetResult

```csharp
public static CampaignBattleResult GetResult(BattleState winnerSide, bool enemyRetreated = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)