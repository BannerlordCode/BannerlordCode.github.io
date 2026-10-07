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

`BattleBannerBearersModel` is the rule set that governs banners in a battle mission. It is an `MBGameModel<BattleBannerBearersModel>` (`BattleBannerBearersModel.cs:8`), reached through `MissionGameModels.Current.BattleBannerBearersModel` (`MissionGameModels.cs:64`) — the same singleton any game code uses, not a per-mission object.

Its structure is unusual for a model and worth understanding before you extend it. The class has **no constructor of its own**. Instead, the owning `BannerBearerLogic` mission behaviour injects itself into the model at mission start with `MissionGameModels.Current.BattleBannerBearersModel.InitializeModel(this)` (`BannerBearerLogic.cs:162`) and clears that reference at mission end with `FinalizeModel()` (`BannerBearerLogic.cs:173`). So the model is a permanent singleton whose *backing logic* is a per-mission object that comes and goes.

That split is why the concrete query methods are all thin null-guarded forwards. `IsFormationBanner`, `IsBannerSearchingAgent`, `HasFormationBanner`, `HasBannerOnGround`, `GetFormationBanner`, `GetActiveBanner` and `GetFormationBannerBearers` are non-virtual; they take a `Formation`, bail out if it is null, and then delegate to the injected `BannerBearerLogic`, returning `null`/`false`/an empty list if the logic is not currently bound. Your job is entirely in the eight `abstract` members — `GetMinimumFormationTroopCountToBearBanners`, `GetBannerInteractionDistance`, `CanBannerBearerProvideEffectToFormation`, `CanAgentPickUpAnyBanner`, `CanAgentBecomeBannerBearer`, `GetAgentBannerBearingPriority`, `CanFormationDeployBannerBearers`, `GetDesiredNumberOfBannerBearersForFormation`, `GetBannerBearerReplacementWeapon` (`BattleBannerBearersModel.cs:126` through `BattleBannerBearersModel.cs:150`). The shipped implementation is `CustomBattleBannerBearersModel`.

## Mental Model

There are two different questions hiding behind "does this formation have a banner?", and they are answered by different halves of the class.

*Does a banner object exist right now?* That is state, and it lives in `BannerBearerLogic`. Ask the non-virtual forwards. `HasFormationBanner` is a null-check plus `GetFormationBanner(formation) != null` (`BattleBannerBearersModel.cs:59`); `GetFormationBanner` returns `null` when `BannerBearerLogic` is unbound (`BattleBannerBearersModel.cs:81`).

*Should a banner exist?* That is policy, and it is yours. `CanFormationDeployBannerBearers` in the shipped model combines the minimum troop count from your abstract method with a check that a banner item exists and that at least one unit qualifies. Only the middle check is in the concrete class; the two ends are your overrides.

The guard shape is deliberate and worth mimicking: every concrete method null-checks its `Formation` argument *before* touching `BannerBearerLogic`. Drop that check and a formation-teardown callback that passes a detached `Formation` will dereference a live-looking object whose `Team` is already gone.

`GetFormationBannerBearers` is the one forward that returns a fresh empty `List<Agent>` rather than `null` when unbound (`BattleBannerBearersModel.cs:96`, `BattleBannerBearersModel.cs:100`), so callers can enumerate without a guard. Every other forward returns `null`, so they need one.

## How to use

**Getting it.** Read the current model through `MissionGameModels`; replace it by assigning the property before the mission starts:

```csharp
MissionGameModels.Current.BattleBannerBearersModel = new ModBattleBannerBearersModel();
```

**Typical use** — subclass and supply policy, inheriting the wired-up queries for free:

```csharp
public class ModBattleBannerBearersModel : BattleBannerBearersModel
{
    public override int GetMinimumFormationTroopCountToBearBanners() => 10;

    public override float GetBannerInteractionDistance(Agent interactingAgent) => 2f;

    public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
    {
        // Formation may be null — the forwards tolerate it, keep your overrides honest.
        if (formation == null || !CanFormationDeployBannerBearers(formation)) return 0;
        return formation.CountOfUnits / 25;
    }

    public override bool CanAgentPickUpAnyBanner(Agent agent) =>
        agent.IsHuman && agent.Banner == null;
}
```

Then, mid-mission, ask the model questions through the same non-virtual forwards:

```csharp
BattleBannerBearersModel model = MissionGameModels.Current.BattleBannerBearersModel;
BannerComponent active = model.GetActiveBanner(agent.Formation);
if (active != null)
{
    Debug.Print("formation " + agent.Formation.FormationClass + " carries a banner");
}
```

**Most common mistake, and what it costs.** Reaching for a `BannerBearerLogic` from inside your overrides. `BannerBearerLogic` is `protected` (`BattleBannerBearersModel.cs:12`) precisely so that the base class can own that link, and it is null whenever the model is not bound to a live mission — which is *always* outside mission lifetime, including in the main menu and on the campaign map. Call `Mission.Current.GetMissionBehavior<BannerBearerLogic>()` yourself if you need it, and null-check it, because `Mission.Current` is also null off-mission. Reading `BannerBearerLogic` from a static initializer, a module constructor or a `GameStarter` callback gives you a permanently-null reference and every subsequent query returns `false`, which looks exactly like "no banners in this battle".

## Key Methods

### InitializeModel
`public void InitializeModel(BannerBearerLogic bannerBearerLogic)`

**Purpose:** Prepares the resources, state, or bindings required by model.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
battleBannerBearersModel.InitializeModel(bannerBearerLogic);
```

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** Executes the FinalizeModel logic.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
battleBannerBearersModel.FinalizeModel();
```

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)`

**Purpose:** Determines whether the this instance is in the formation banner state or condition.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsFormationBanner(formation, item);
```

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the banner searching agent state or condition.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsBannerSearchingAgent(agent);
```

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)`

**Purpose:** Determines whether the this instance is in the interactable formation banner state or condition.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.IsInteractableFormationBanner(item, interactingAgent);
```

### HasFormationBanner
`public bool HasFormationBanner(Formation formation)`

**Purpose:** Determines whether the this instance already holds formation banner.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.HasFormationBanner(formation);
```

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**Purpose:** Determines whether the this instance already holds banner on ground.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.HasBannerOnGround(formation);
```

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**Purpose:** Reads and returns the formation banner value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetFormationBanner(formation);
```

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**Purpose:** Reads and returns the formation banner bearers value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetFormationBannerBearers(formation);
```

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**Purpose:** Reads and returns the active banner value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetActiveBanner(formation);
```

### GetMinimumFormationTroopCountToBearBanners
`public abstract int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Reads and returns the minimum formation troop count to bear banners value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetMinimumFormationTroopCountToBearBanners();
```

### GetBannerInteractionDistance
`public abstract float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Reads and returns the banner interaction distance value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetBannerInteractionDistance(interactingAgent);
```

### CanBannerBearerProvideEffectToFormation
`public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for banner bearer provide effect to formation.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanBannerBearerProvideEffectToFormation(agent, formation);
```

### CanAgentPickUpAnyBanner
`public abstract bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent pick up any banner.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanAgentPickUpAnyBanner(agent);
```

### CanAgentBecomeBannerBearer
`public abstract bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the this instance meets the preconditions for agent become banner bearer.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanAgentBecomeBannerBearer(agent);
```

### GetAgentBannerBearingPriority
`public abstract int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Reads and returns the agent banner bearing priority value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetAgentBannerBearingPriority(agent);
```

### CanFormationDeployBannerBearers
`public abstract bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the this instance meets the preconditions for formation deploy banner bearers.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.CanFormationDeployBannerBearers(formation);
```

### GetDesiredNumberOfBannerBearersForFormation
`public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Reads and returns the desired number of banner bearers for formation value held by the this instance.

```csharp
// Obtain an instance of BattleBannerBearersModel from the subsystem API first
BattleBannerBearersModel battleBannerBearersModel = ...;
var result = battleBannerBearersModel.GetDesiredNumberOfBannerBearersForFormation(formation);
```

### GetBannerBearerReplacementWeapon
`public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Reads and returns the banner bearer replacement weapon value held by the this instance.

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
- [BannerBearerLogic](../BannerBearerLogic)
- [MBGameManager](../MBGameManager)
- [BehaviorComponent](../BehaviorComponent)
- [BattleBannerBearersModel (中文页面)](../../../../zh/api/mission-ext/BattleBannerBearersModel)