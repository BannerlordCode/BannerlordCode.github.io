<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleBannerBearersModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleBannerBearersModel.cs`

## Overview

`MultiplayerBattleBannerBearersModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MultiplayerBattleBannerBearersModel>(new MyMultiplayerBattleBannerBearersModel())` to change how it computes.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
```csharp
public override int GetMinimumFormationTroopCountToBearBanners()
```

### GetBannerInteractionDistance
```csharp
public override float GetBannerInteractionDistance(Agent interactingAgent)
```

### CanAgentPickUpAnyBanner
```csharp
public override bool CanAgentPickUpAnyBanner(Agent agent)
```

### CanBannerBearerProvideEffectToFormation
```csharp
public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)
```

### CanAgentBecomeBannerBearer
```csharp
public override bool CanAgentBecomeBannerBearer(Agent agent)
```

### GetAgentBannerBearingPriority
```csharp
public override int GetAgentBannerBearingPriority(Agent agent)
```

### CanFormationDeployBannerBearers
```csharp
public override bool CanFormationDeployBannerBearers(Formation formation)
```

### GetDesiredNumberOfBannerBearersForFormation
```csharp
public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
```

### GetBannerBearerReplacementWeapon
```csharp
public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)
```

## Usage Example

```csharp
// Typical usage of MultiplayerBattleBannerBearersModel (Model)
Game.Current.ReplaceModel<MultiplayerBattleBannerBearersModel>(new MyMultiplayerBattleBannerBearersModel());
```

## See Also

- [Complete Class Catalog](../catalog)