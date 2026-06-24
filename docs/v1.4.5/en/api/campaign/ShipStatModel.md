<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipStatModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipStatModel : MBGameModel<ShipStatModel>`
**Base:** `MBGameModel<ShipStatModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ShipStatModel.cs`

## Overview

`ShipStatModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ShipStatModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetShipFlagshipScore
`public abstract float GetShipFlagshipScore(Ship ship)`

**Purpose:** Gets the current value of `ship flagship score`.

## Usage Example

```csharp
var implementation = new CustomShipStatModel();
```

## See Also

- [Complete Class Catalog](../catalog)