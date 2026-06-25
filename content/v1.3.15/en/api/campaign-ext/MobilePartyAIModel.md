---
title: "MobilePartyAIModel"
description: "Auto-generated class reference for MobilePartyAIModel."
---
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
| `NeededFoodsInDaysThresholdForSiege` | `public abstract float NeededFoodsInDaysThresholdForSiege { get; }` |
| `NeededFoodsInDaysThresholdForRaid` | `public abstract float NeededFoodsInDaysThresholdForRaid { get; }` |

## Key Methods

### ShouldConsiderAvoiding
`public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**Purpose:** **Purpose:** Executes the ShouldConsiderAvoiding logic.

```csharp
// Obtain an instance of MobilePartyAIModel from the subsystem API first
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.ShouldConsiderAvoiding(party, targetParty);
```

### ShouldConsiderAttacking
`public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**Purpose:** **Purpose:** Executes the ShouldConsiderAttacking logic.

```csharp
// Obtain an instance of MobilePartyAIModel from the subsystem API first
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.ShouldConsiderAttacking(party, targetParty);
```

### GetPatrolRadius
`public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**Purpose:** **Purpose:** Reads and returns the patrol radius value held by the this instance.

```csharp
// Obtain an instance of MobilePartyAIModel from the subsystem API first
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.GetPatrolRadius(mobileParty, patrolPoint);
```

### ShouldPartyCheckInitiativeBehavior
`public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the ShouldPartyCheckInitiativeBehavior logic.

```csharp
// Obtain an instance of MobilePartyAIModel from the subsystem API first
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(mobileParty);
```

### GetBestInitiativeBehavior
`public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**Purpose:** **Purpose:** Reads and returns the best initiative behavior value held by the this instance.

```csharp
// Obtain an instance of MobilePartyAIModel from the subsystem API first
MobilePartyAIModel mobilePartyAIModel = ...;
mobilePartyAIModel.GetBestInitiativeBehavior(mobileParty, bestInitiativeBehavior, bestInitiativeTargetParty, bestInitiativeBehaviorScore, averageEnemyVec);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MobilePartyAIModel instance = ...;
```

## See Also

- [Area Index](../)