---
title: "SandboxBattleBannerBearersModel"
description: "Auto-generated class reference for SandboxBattleBannerBearersModel."
---
# SandboxBattleBannerBearersModel

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandboxBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `SandBox/SandboxBattleBannerBearersModel.cs`

## Overview

`SandboxBattleBannerBearersModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleBannerBearersModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the `minimum formation troop count to bear banners` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the `banner interaction distance` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the current object meets the preconditions for `banner bearer provide effect to formation`.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `agent pick up any banner`.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `agent become banner bearer`.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the `agent banner bearing priority` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the current object meets the preconditions for `formation deploy banner bearers`.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the `desired number of banner bearers for formation` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the `banner bearer replacement weapon` value held by the current object.

```csharp
// Obtain an instance of SandboxBattleBannerBearersModel from the subsystem API first
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleBannerBearersModel>(new MySandboxBattleBannerBearersModel());
```

## See Also

- [Area Index](../)