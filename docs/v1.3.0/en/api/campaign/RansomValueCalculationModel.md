<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RansomValueCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RansomValueCalculationModel : MBGameModel<RansomValueCalculationModel>`
**Base:** `MBGameModel<RansomValueCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs`

## Overview

`RansomValueCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RansomValueCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PrisonerRansomValue
`public abstract int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)`

**Purpose:** Handles logic related to `prisoner ransom value`.

## Usage Example

```csharp
var implementation = new CustomRansomValueCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)