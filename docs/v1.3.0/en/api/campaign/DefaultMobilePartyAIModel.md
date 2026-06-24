<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMobilePartyAIModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**Base:** `MobilePartyAIModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`

## Overview

`DefaultMobilePartyAIModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMobilePartyAIModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public override float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public override float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public override float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public override float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public override float FortificationPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public override float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public override float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public override float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForMilitaryAction` | `public override float NeededFoodsInDaysThresholdForMilitaryAction { get; }` |

## Key Methods

### ShouldConsiderAttacking
`public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**Purpose:** Handles logic related to `should consider attacking`.

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**Purpose:** Handles logic related to `should consider avoiding`.

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**Purpose:** Gets the current value of `patrol radius`.

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**Purpose:** Handles logic related to `should party check initiative behavior`.

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**Purpose:** Gets the current value of `best initiative behavior`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyAIModel>(new MyDefaultMobilePartyAIModel());
```

## See Also

- [Complete Class Catalog](../catalog)