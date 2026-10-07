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

`BattleBannerBearersModel` is the abstract `MBGameModel` that answers every question the mission asks about
banner bearers: whether a formation has a banner, who is carrying it, whether an agent may pick one up, and
how many bearers a formation should field. Nine of its members are abstract
(`BattleBannerBearersModel.cs:126`); the other seven are non-virtual queries that simply forward to a
mission-scoped `BannerBearerLogic`.

That split is the whole design. The model holds a protected `BannerBearerLogic` reference
(`BattleBannerBearersModel.cs:12`) which is injected by `InitializeModel(BannerBearerLogic)` at mission start
(`BattleBannerBearersModel.cs:21`) and nulled again by `FinalizeModel()`
(`BattleBannerBearersModel.cs:27`). The abstract members are the *policy* — troop thresholds, interaction
distance, whether an agent may carry a banner; the forwarding members are the *state*, and they are all
written defensively for the window where the logic is null.

Stock registration is `CustomBattleBannerBearersModel` (`EditorGame.cs:57`).

## Mental Model

Read it as a policy object bolted onto a mission-scoped state holder, and mind the null window. The
boundaries:

- **Every forwarding method treats a null `BannerBearerLogic` as "no", with one exception.**
  `IsInteractableFormationBanner` returns **`true`** when the logic is null, because it computes
  `formation == null` and then returns `formation == null || …` (`BattleBannerBearersModel.cs:55`). A
  formation-less banner is interactable by anyone. Every other method returns false, null or an empty list.
- **Methods that take a `Formation` return the falsy value *before* consulting the logic.**
  `IsFormationBanner`, `HasFormationBanner`, `HasBannerOnGround`, `GetFormationBanner`,
  `GetFormationBannerBearers` and `GetActiveBanner` all null-check `formation` first
  (`BattleBannerBearersModel.cs:35`, `BattleBannerBearersModel.cs:98`). `IsBannerSearchingAgent(Agent)` has
  no such guard and does not need one.
- **`GetFormationBannerBearers` allocates a fresh empty `List<Agent>` on both fallback paths**
  (`BattleBannerBearersModel.cs:100`, `BattleBannerBearersModel.cs:107`) — a per-call allocation on the
  null path, and a caller can mutate the returned list without affecting the model.
- **`DefaultDetachmentCostMultiplier = 10f` is a declared constant with no reader here**
  (`BattleBannerBearersModel.cs:153`). The identical `10f` for banner-bearing agents actually lives in the
  stat model (`AgentStatCalculateModel.cs:112`), which hard-codes it again.
- The model is per-mission: `MissionGameModels.Current` resolves it once, and the `BannerBearerLogic`
  reference it caches is only valid between `InitializeModel` and `FinalizeModel`. Reading a banner state
  outside that window silently yields "no banner anywhere".

## How to use

**Getting one.** Register a subclass with the game starter where `EditorGame` registers the stock one; read
it per mission through `MissionGameModels.Current`. You never construct `BannerBearerLogic` yourself — the
mission creates it and injects it.

```csharp
// Once, at game start - replaces CustomBattleBannerBearersModel (EditorGame.cs:57).
basicGameStarter.AddModel<BattleBannerBearersModel>(new MyBannerBearersModel());

public class MyBannerBearersModel : BattleBannerBearersModel
{
    public override int GetMinimumFormationTroopCountToBearBanners() { return 20; }

    public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
    {
        // formation can legitimately be null here - the base class forwards straight through.
        return formation == null ? 0 : formation.CountOfUnits / 20;
    }

    public override bool CanAgentPickUpAnyBanner(Agent agent) { return agent.IsHuman; }
}

// Reading during a mission - always after the logic has been injected.
var model = MissionGameModels.Current.BattleBannerBearersModel;
ItemObject banner = model.GetFormationBanner(Mission.Current.MainAgent.Formation);
if (banner != null)
{
    Debug.Print("formation banner: " + banner.StringId);
}
```

**The mistake that bites.** Caching a banner state at mission start and reading it for the whole battle.
The forwarding methods are only valid while `BannerBearerLogic` is injected, and the banner moves — it
drops to the ground, changes bearer, and is picked up again. Read `GetFormationBanner` /
`GetFormationBannerBearers` at the moment you need them; `HasFormationBanner` between
`InitializeModel` and `FinalizeModel` returns false for a formation that visibly has a banner in its
hands.



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
- [CustomBattleBannerBearersModel](../CustomBattleBannerBearersModel)
- [AgentStatCalculateModel](../AgentStatCalculateModel)
- [BattleSpawnModel](../BattleSpawnModel)
- [中文页面](../../../../zh/api/mission-ext/BattleBannerBearersModel)