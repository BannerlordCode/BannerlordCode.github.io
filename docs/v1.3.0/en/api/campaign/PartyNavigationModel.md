<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyNavigationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**Base:** `MBGameModel<PartyNavigationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`

## Overview

`PartyNavigationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyNavigationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEmbarkDisembarkThresholdDistance
`public abstract float GetEmbarkDisembarkThresholdDistance()`

**Purpose:** Gets the current value of `embark disembark threshold distance`.

### IsTerrainTypeValidForNavigationType
`public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `is terrain type valid for navigation type`.

### GetInvalidTerrainTypesForNavigationType
`public abstract int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**Purpose:** Gets the current value of `invalid terrain types for navigation type`.

### HasNavalNavigationCapability
`public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)`

**Purpose:** Checks whether the current object has/contains `naval navigation capability`.

## Usage Example

```csharp
var implementation = new CustomPartyNavigationModel();
```

## See Also

- [Complete Class Catalog](../catalog)