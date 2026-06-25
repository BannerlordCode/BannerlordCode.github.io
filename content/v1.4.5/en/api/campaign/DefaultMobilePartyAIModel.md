---
title: "DefaultMobilePartyAIModel"
description: "Auto-generated class reference for DefaultMobilePartyAIModel."
---
# DefaultMobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**Base:** `MobilePartyAIModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyAIModel.cs`

## Overview

`DefaultMobilePartyAIModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMobilePartyAIModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ShouldConsiderAttacking
`public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAttacking(party, targetParty);
```

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAvoiding(party, targetParty);
```

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**Purpose:** Reads and returns the `patrol radius` value held by the current object.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.GetPatrolRadius(mobileParty, patrolPoint);
```

### GetSettlementNearbyThreatAndAllyCheckRadius
`public override float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)`

**Purpose:** Reads and returns the `settlement nearby threat and ally check radius` value held by the current object.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.GetSettlementNearbyThreatAndAllyCheckRadius(settlement, false);
```

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMobilePartyAIModel from the subsystem API first
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(mobileParty);
```

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**Purpose:** Reads and returns the `best initiative behavior` value held by the current object.

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