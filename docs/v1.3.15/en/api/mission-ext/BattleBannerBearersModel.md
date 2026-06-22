<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleBannerBearersModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**Base:** `MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`

## Overview

`BattleBannerBearersModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BattleBannerBearersModel>(new MyBattleBannerBearersModel())` to change how it computes.

## Key Methods

### InitializeModel
```csharp
public void InitializeModel(BannerBearerLogic bannerBearerLogic)
```

### FinalizeModel
```csharp
public void FinalizeModel()
```

### IsFormationBanner
```csharp
public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)
```

### IsBannerSearchingAgent
```csharp
public bool IsBannerSearchingAgent(Agent agent)
```

### IsInteractableFormationBanner
```csharp
public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)
```

### HasFormationBanner
```csharp
public bool HasFormationBanner(Formation formation)
```

### HasBannerOnGround
```csharp
public bool HasBannerOnGround(Formation formation)
```

### GetFormationBanner
```csharp
public ItemObject GetFormationBanner(Formation formation)
```

### GetFormationBannerBearers
```csharp
public List<Agent> GetFormationBannerBearers(Formation formation)
```

### GetActiveBanner
```csharp
public BannerComponent GetActiveBanner(Formation formation)
```

### GetMinimumFormationTroopCountToBearBanners
```csharp
public abstract int GetMinimumFormationTroopCountToBearBanners()
```

### GetBannerInteractionDistance
```csharp
public abstract float GetBannerInteractionDistance(Agent interactingAgent)
```

### CanBannerBearerProvideEffectToFormation
```csharp
public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)
```

### CanAgentPickUpAnyBanner
```csharp
public abstract bool CanAgentPickUpAnyBanner(Agent agent)
```

### CanAgentBecomeBannerBearer
```csharp
public abstract bool CanAgentBecomeBannerBearer(Agent agent)
```

### GetAgentBannerBearingPriority
```csharp
public abstract int GetAgentBannerBearingPriority(Agent agent)
```

### CanFormationDeployBannerBearers
```csharp
public abstract bool CanFormationDeployBannerBearers(Formation formation)
```

### GetDesiredNumberOfBannerBearersForFormation
```csharp
public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
```

### GetBannerBearerReplacementWeapon
```csharp
public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)
```

## Usage Example

```csharp
// Typical usage of BattleBannerBearersModel (Model)
Game.Current.ReplaceModel<BattleBannerBearersModel>(new MyBattleBannerBearersModel());
```

## See Also

- [Complete Class Catalog](../catalog)