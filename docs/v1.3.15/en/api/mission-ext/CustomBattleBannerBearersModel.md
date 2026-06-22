<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleBannerBearersModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## Overview

`CustomBattleBannerBearersModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel())` to change how it computes.

## Key Methods

### GetMinimumFormationTroopCountToBearBanners
```csharp
public override int GetMinimumFormationTroopCountToBearBanners()
```

### GetBannerInteractionDistance
```csharp
public override float GetBannerInteractionDistance(Agent interactingAgent)
```

### CanBannerBearerProvideEffectToFormation
```csharp
public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)
```

### CanAgentPickUpAnyBanner
```csharp
public override bool CanAgentPickUpAnyBanner(Agent agent)
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
// Typical usage of CustomBattleBannerBearersModel (Model)
Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel());
```

## See Also

- [Complete Class Catalog](../catalog)