<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultShipStatModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipStatModel : ShipStatModel`
**Base:** `ShipStatModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipStatModel.cs`

## Overview

`DefaultShipStatModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultShipStatModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipFlagshipScore
`public override float GetShipFlagshipScore(Ship ship)`

**Purpose:** Gets the current value of `ship flagship score`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel());
```

## See Also

- [Complete Class Catalog](../catalog)