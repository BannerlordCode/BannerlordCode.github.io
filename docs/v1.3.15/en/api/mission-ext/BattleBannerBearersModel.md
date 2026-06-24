<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleBannerBearersModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `model`.

### FinalizeModel
`public void FinalizeModel()`

**Purpose:** Handles logic related to `finalize model`.

### IsFormationBanner
`public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)`

**Purpose:** Handles logic related to `is formation banner`.

### IsBannerSearchingAgent
`public bool IsBannerSearchingAgent(Agent agent)`

**Purpose:** Handles logic related to `is banner searching agent`.

### IsInteractableFormationBanner
`public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)`

**Purpose:** Handles logic related to `is interactable formation banner`.

### HasFormationBanner
`public bool HasFormationBanner(Formation formation)`

**Purpose:** Checks whether the current object has/contains `formation banner`.

### HasBannerOnGround
`public bool HasBannerOnGround(Formation formation)`

**Purpose:** Checks whether the current object has/contains `banner on ground`.

### GetFormationBanner
`public ItemObject GetFormationBanner(Formation formation)`

**Purpose:** Gets the current value of `formation banner`.

### GetFormationBannerBearers
`public List<Agent> GetFormationBannerBearers(Formation formation)`

**Purpose:** Gets the current value of `formation banner bearers`.

### GetActiveBanner
`public BannerComponent GetActiveBanner(Formation formation)`

**Purpose:** Gets the current value of `active banner`.

### GetMinimumFormationTroopCountToBearBanners
`public abstract int GetMinimumFormationTroopCountToBearBanners()`

**Purpose:** Gets the current value of `minimum formation troop count to bear banners`.

### GetBannerInteractionDistance
`public abstract float GetBannerInteractionDistance(Agent interactingAgent)`

**Purpose:** Gets the current value of `banner interaction distance`.

### CanBannerBearerProvideEffectToFormation
`public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)`

**Purpose:** Checks whether the current object can `banner bearer provide effect to formation`.

### CanAgentPickUpAnyBanner
`public abstract bool CanAgentPickUpAnyBanner(Agent agent)`

**Purpose:** Checks whether the current object can `agent pick up any banner`.

### CanAgentBecomeBannerBearer
`public abstract bool CanAgentBecomeBannerBearer(Agent agent)`

**Purpose:** Checks whether the current object can `agent become banner bearer`.

### GetAgentBannerBearingPriority
`public abstract int GetAgentBannerBearingPriority(Agent agent)`

**Purpose:** Gets the current value of `agent banner bearing priority`.

### CanFormationDeployBannerBearers
`public abstract bool CanFormationDeployBannerBearers(Formation formation)`

**Purpose:** Checks whether the current object can `formation deploy banner bearers`.

### GetDesiredNumberOfBannerBearersForFormation
`public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)`

**Purpose:** Gets the current value of `desired number of banner bearers for formation`.

### GetBannerBearerReplacementWeapon
`public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)`

**Purpose:** Gets the current value of `banner bearer replacement weapon`.

## Usage Example

```csharp
var implementation = new CustomBattleBannerBearersModel();
```

## See Also

- [Complete Class Catalog](../catalog)