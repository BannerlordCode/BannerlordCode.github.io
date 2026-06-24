<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RomanceModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RomanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RomanceModel : MBGameModel<RomanceModel>`
**Base:** `MBGameModel<RomanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RomanceModel.cs`

## Overview

`RomanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RomanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAttractionValuePercentage
`public abstract int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`

**Purpose:** Gets the current value of `attraction value percentage`.

## Usage Example

```csharp
var implementation = new CustomRomanceModel();
```

## See Also

- [Complete Class Catalog](../catalog)