---
title: "PartySpeedModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartySpeedModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartySpeedModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**Base:** `MBGameModel<PartySpeedModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartySpeedModel.cs`

## Overview

`PartySpeedModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartySpeedModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public abstract float BaseSpeed { get; }` |
| `MinimumSpeed` | `public abstract float MinimumSpeed { get; }` |

## Key Methods

### CalculateBaseSpeed
`public abstract ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**Purpose:** Handles logic related to `calculate base speed`.

### CalculateFinalSpeed
`public abstract ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**Purpose:** Handles logic related to `calculate final speed`.

## Usage Example

```csharp
var implementation = new CustomPartySpeedModel();
```

## See Also

- [Complete Class Catalog](../catalog)