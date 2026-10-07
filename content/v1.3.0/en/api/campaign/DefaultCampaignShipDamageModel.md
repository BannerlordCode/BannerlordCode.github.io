---
title: "DefaultCampaignShipDamageModel"
description: "Auto-generated class reference for DefaultCampaignShipDamageModel."
---
# DefaultCampaignShipDamageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignShipDamageModel : CampaignShipDamageModel`
**Base:** `CampaignShipDamageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs`

## Overview

`DefaultCampaignShipDamageModel` is the naval model's no-op implementation: all three of its members return a neutral or zero value. `GetHourlyShipDamage` returns `0` (`TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignShipDamageModel.cs:14`), `GetEstimatedSafeSailDuration` returns `0f` (`:20`), and `GetShipDamage` passes the raw damage through unchanged (`:26`). There is no ship damage in the base campaign, and this class is the seam where a naval mod supplies it.

## Mental Model

Read the zeros as contract values rather than as unimplemented stubs, because callers depend on the neutral meanings. `GetShipDamage` returning `rawDamage` is the identity function the combat pipeline needs when nothing modifies damage, so replacing this model is how a naval feature is added, not how a damage multiplier is tuned. `GetEstimatedSafeSailDuration` returning `0f` is the interesting one: `AIMoveToNearestLandBehavior.cs:22` reads it directly to plan a return to land, and zero means the AI considers every open-sea sail duration safe — the AI will happily sail indefinitely rather than being blocked. An override that returns a real number without also implementing the hourly damage rate gives the AI a reason to flee the coast with no model behind it, and an override that only implements damage leaves the AI sailing out until it runs out of map. The three members are independent, which is what makes partial naval implementations possible; they are also the whole surface, so nothing else about ships is negotiated here.

## Key Methods

### GetHourlyShipDamage
`public override int GetHourlyShipDamage(MobileParty owner, Ship ship)`

**Purpose:** Reads and returns the hourly ship damage value held by this instance.

```csharp
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetHourlyShipDamage(owner, ship);
```

### GetEstimatedSafeSailDuration
`public override float GetEstimatedSafeSailDuration(MobileParty mobileParty)`

**Purpose:** Reads and returns the estimated safe sail duration value held by this instance.

```csharp
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetEstimatedSafeSailDuration(mobileParty);
```

### GetShipDamage
`public override float GetShipDamage(Ship ship, float rawDamage)`

**Purpose:** Reads and returns the ship damage value held by this instance.

```csharp
DefaultCampaignShipDamageModel defaultCampaignShipDamageModel = ...;
var result = defaultCampaignShipDamageModel.GetShipDamage(ship, 0);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<CampaignShipDamageModel>(new DefaultCampaignShipDamageModel());
}
```

`CampaignShipDamageModel` is declared as `MBGameModel<CampaignShipDamageModel>` (`CampaignShipDamageModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:279`.

## See Also

- [Area Index](../)