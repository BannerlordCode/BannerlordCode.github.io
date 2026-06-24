<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyNavigationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**Base:** `PartyNavigationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`

## Overview

`DefaultPartyNavigationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyNavigationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEmbarkDisembarkThresholdDistance
`public override float GetEmbarkDisembarkThresholdDistance()`

**Purpose:** Gets the current value of `embark disembark threshold distance`.

### GetInvalidTerrainTypesForNavigationType
`public override int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**Purpose:** Gets the current value of `invalid terrain types for navigation type`.

### IsTerrainTypeValidForNavigationType
`public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `is terrain type valid for navigation type`.

### HasNavalNavigationCapability
`public override bool HasNavalNavigationCapability(MobileParty mobileParty)`

**Purpose:** Checks whether the current object has/contains `naval navigation capability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel());
```

## See Also

- [Complete Class Catalog](../catalog)