<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyAIModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**Base:** `MBGameModel<MobilePartyAIModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`

## Overview

`MobilePartyAIModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MobilePartyAIModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
| `NeededFoodsInDaysThresholdForMilitaryAction` | `public abstract float NeededFoodsInDaysThresholdForMilitaryAction { get; }` |

## Key Methods

### ShouldConsiderAvoiding
`public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**Purpose:** Handles logic related to `should consider avoiding`.

### ShouldConsiderAttacking
`public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**Purpose:** Handles logic related to `should consider attacking`.

### GetPatrolRadius
`public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**Purpose:** Gets the current value of `patrol radius`.

### ShouldPartyCheckInitiativeBehavior
`public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**Purpose:** Handles logic related to `should party check initiative behavior`.

### GetBestInitiativeBehavior
`public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**Purpose:** Gets the current value of `best initiative behavior`.

## Usage Example

```csharp
var implementation = new CustomMobilePartyAIModel();
```

## See Also

- [Complete Class Catalog](../catalog)