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

`SandboxBattleBannerBearersModel` decides who is allowed to carry a formation banner and what that banner is worth in combat. The stock answers are deliberately restrictive: only two troops are needed before a formation may field a bearer (`SandBox/SandboxBattleBannerBearersModel.cs:17`), exactly one bearer is then desired (`:97`), and the interaction radius is `1.5f` on foot but `3f` mounted (`:26`, `:29`) so cavalry can snatch banners from further away. Who qualifies is gated twice — `CanAgentBecomeBannerBearer` rejects the main agent, every hero and any player-controlled agent (`:47`), while `CanAgentPickUpAnyBanner` additionally refuses a panicked agent or one mid-combat-action (`:41`) — and `GetAgentBannerBearingPriority` scores the rest by character tier, but returns `int.MaxValue` to whoever already holds a banner (`:66`) so bearers are never swapped out mid-fight.

## Mental Model

Understand this as the set of admission rules that a separate `BannerBearerLogic` then enforces, not as the logic itself: the formation-side checks call into `base.BannerBearerLogic` rather than deciding anything (`:82`). The interesting consumer is not the banner UI at all — `SandboxAgentApplyDamageModel.cs:38` calls `GetActiveBanner` on the attacker's formation to read banner damage effects, so changing who may become a bearer silently changes melee damage numbers, not just the visuals. Two sharp edges follow. `GetDesiredNumberOfBannerBearersForFormation` can only ever answer 0 or 1 in the stock game, so "three bearers per formation" needs an override that ignores the single-bearer assumption rather than a configuration value. And the priority method short-circuits to `0` when an agent's mounted state disagrees with the formation's majority (`:60`), which means an override that reorders the checks and asks for priority first will recruit infantry into mounted formations.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
`public override int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the minimum formation troop count to bear banners value held by this instance.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public override float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the banner interaction distance value held by this instance.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether this instance meets the preconditions for banner bearer provide effect to formation.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public override bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether this instance meets the preconditions for agent pick up any banner.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public override bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether this instance meets the preconditions for agent become banner bearer.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public override int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the agent banner bearing priority value held by this instance.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public override bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether this instance meets the preconditions for formation deploy banner bearers.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the desired number of banner bearers for formation value held by this instance.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the banner bearer replacement weapon value held by this instance.

```csharp
SandboxBattleBannerBearersModel sandboxBattleBannerBearersModel = ...;
var result = sandboxBattleBannerBearersModel.GetBannerBearerReplacementWeapon(agentCharacter);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<BattleBannerBearersModel>(new SandboxBattleBannerBearersModel());
}
```

`BattleBannerBearersModel` is declared as `MBGameModel<BattleBannerBearersModel>` (`BattleBannerBearersModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:39`.

## See Also

- [Area Index](../)