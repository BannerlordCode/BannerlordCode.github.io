---
title: "DefaultMobilePartyAIModel"
description: "Auto-generated class reference for DefaultMobilePartyAIModel."
---
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

**Purpose:** **Purpose:** Executes the ShouldConsiderAttacking logic.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAttacking(party, targetParty);
```

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**Purpose:** **Purpose:** Executes the ShouldConsiderAvoiding logic.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAvoiding(party, targetParty);
```

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**Purpose:** **Purpose:** Reads and returns the patrol radius value held by the this instance.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.GetPatrolRadius(mobileParty, patrolPoint);
```

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the ShouldPartyCheckInitiativeBehavior logic.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(mobileParty);
```

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**Purpose:** **Purpose:** Reads and returns the best initiative behavior value held by the this instance.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
defaultMobilePartyAIModel.GetBestInitiativeBehavior(mobileParty, bestInitiativeBehavior, bestInitiativeTargetParty, bestInitiativeBehaviorScore, averageEnemyVec);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyAIModel>(new MyDefaultMobilePartyAIModel());
```

## See Also

- [Area Index](../)