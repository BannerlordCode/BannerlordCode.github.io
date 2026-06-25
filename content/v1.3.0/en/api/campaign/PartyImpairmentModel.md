---
title: "PartyImpairmentModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyImpairmentModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**Base:** `MBGameModel<PartyImpairmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`

## Overview

`PartyImpairmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyImpairmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDisorganizedStateDuration
`public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**Purpose:** Gets the current value of `disorganized state duration`.

### GetVulnerabilityStateDuration
`public abstract float GetVulnerabilityStateDuration(PartyBase party)`

**Purpose:** Gets the current value of `vulnerability state duration`.

### GetSiegeExpectedVulnerabilityTime
`public abstract float GetSiegeExpectedVulnerabilityTime()`

**Purpose:** Gets the current value of `siege expected vulnerability time`.

### CanGetDisorganized
`public abstract bool CanGetDisorganized(PartyBase partyBase)`

**Purpose:** Checks whether the current object can `get disorganized`.

## Usage Example

```csharp
var implementation = new CustomPartyImpairmentModel();
```

## See Also

- [Complete Class Catalog](../catalog)