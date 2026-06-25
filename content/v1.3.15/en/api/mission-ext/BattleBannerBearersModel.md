---
title: "BattleBannerBearersModel"
description: "Auto-generated class reference for BattleBannerBearersModel."
---
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**Base:** `MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`

## Overview

`BattleBannerBearersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleBannerBearersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeModel
`public void InitializeModel(BannerBearerLogic bannerBearerLogic)`

**Purpose:** Prepares the resources, state, or bindings required by `model`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
battleBannerBearersModel.InitializeModel(bannerBearerLogic);
```

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
battleBannerBearersModel.FinalizeModel();
```

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)`

**Purpose:** Determines whether the current object is in the `formation banner` state or condition.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsFormationBanner(formation, item);
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Determines whether the current object is in the `banner searching agent` state or condition.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsBannerSearchingAgent(agent);
```

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)`

**Purpose:** Determines whether the current object is in the `interactable formation banner` state or condition.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsInteractableFormationBanner(item, interactingAgent);
```

### HasFormationBanner
`public bool HasFormationBanner(Formation formation)`

**Purpose:** Determines whether the current object already holds `formation banner`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.HasFormationBanner(formation);
```

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**Purpose:** Determines whether the current object already holds `banner on ground`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.HasBannerOnGround(formation);
```

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**Purpose:** Reads and returns the `formation banner` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetFormationBanner(formation);
```

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**Purpose:** Reads and returns the `formation banner bearers` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetFormationBannerBearers(formation);
```

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**Purpose:** Reads and returns the `active banner` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetActiveBanner(formation);
```

### GetMinimumFormationTroopCountToBearBanners
`public abstract int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the `minimum formation troop count to bear banners` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public abstract float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the `banner interaction distance` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the current object meets the preconditions for `banner bearer provide effect to formation`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public abstract bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `agent pick up any banner`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public abstract bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `agent become banner bearer`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public abstract int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the `agent banner bearing priority` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public abstract bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the current object meets the preconditions for `formation deploy banner bearers`.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the `desired number of banner bearers for formation` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the `banner bearer replacement weapon` value held by the current object.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleBannerBearersModel instance = ...;
```

## See Also

- [Area Index](../)