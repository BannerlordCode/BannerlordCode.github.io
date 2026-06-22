<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyAIModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**Base:** `MBGameModel<MobilePartyAIModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`

## Overview

`MobilePartyAIModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MobilePartyAIModel>(new MyMobilePartyAIModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public abstract float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public abstract float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public abstract float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public abstract float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public abstract float FortificationPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public abstract float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public abstract float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public abstract float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForSiege` | `public abstract float NeededFoodsInDaysThresholdForSiege { get; }` |
| `NeededFoodsInDaysThresholdForRaid` | `public abstract float NeededFoodsInDaysThresholdForRaid { get; }` |

## Key Methods

### ShouldConsiderAvoiding
```csharp
public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
```

### ShouldConsiderAttacking
```csharp
public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)
```

### GetPatrolRadius
```csharp
public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)
```

### ShouldPartyCheckInitiativeBehavior
```csharp
public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)
```

### GetBestInitiativeBehavior
```csharp
public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)
```

## Usage Example

```csharp
// Typical usage of MobilePartyAIModel (Model)
Game.Current.ReplaceModel<MobilePartyAIModel>(new MyMobilePartyAIModel());
```

## See Also

- [Complete Class Catalog](../catalog)