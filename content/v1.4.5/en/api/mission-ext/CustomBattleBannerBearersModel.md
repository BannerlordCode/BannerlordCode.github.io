---
title: "CustomBattleBannerBearersModel"
description: "Auto-generated class reference for CustomBattleBannerBearersModel."
---
# CustomBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## Overview

`CustomBattleBannerBearersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CustomBattleBannerBearersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the minimum formation troop count to bear banners value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the banner interaction distance value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for banner bearer provide effect to formation.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent pick up any banner.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent become banner bearer.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the agent banner bearing priority value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for formation deploy banner bearers.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the desired number of banner bearers for formation value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the banner bearer replacement weapon value held by the this instance.

```csharp
// Obtain an instance of CustomBattleBannerBearersModel from the subsystem API first
CustomBattleBannerBearersModel customBattleBannerBearersModel = ...;
var result = customBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel());
```

## See Also

- [Area Index](../)