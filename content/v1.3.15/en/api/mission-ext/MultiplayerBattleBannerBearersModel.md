---
title: "MultiplayerBattleBannerBearersModel"
description: "Auto-generated class reference for MultiplayerBattleBannerBearersModel."
---
# MultiplayerBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleBannerBearersModel.cs`

## Overview

`MultiplayerBattleBannerBearersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleBannerBearersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** **Purpose:** Reads and returns the minimum formation troop count to bear banners value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** **Purpose:** Reads and returns the banner interaction distance value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for agent pick up any banner.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for banner bearer provide effect to formation.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for agent become banner bearer.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** **Purpose:** Reads and returns the agent banner bearing priority value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for formation deploy banner bearers.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** **Purpose:** Reads and returns the desired number of banner bearers for formation value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** **Purpose:** Reads and returns the banner bearer replacement weapon value held by the this instance.

```csharp
// Obtain an instance of MultiplayerBattleBannerBearersModel from the subsystem API first
MultiplayerBattleBannerBearersModel multiplayerBattleBannerBearersModel = ...;
var result = multiplayerBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleBannerBearersModel>(new MyMultiplayerBattleBannerBearersModel());
```

## See Also

- [Area Index](../)