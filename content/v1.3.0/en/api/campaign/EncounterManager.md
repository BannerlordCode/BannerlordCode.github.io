---
title: "EncounterManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncounterManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncounterManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class EncounterManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## Overview

`EncounterManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EncounterManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EncounterModel` | `public static EncounterModel EncounterModel { get; }` |

## Key Methods

### Tick
`public static void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### HandleEncounterForMobileParty
`public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

**Purpose:** Handles the `encounter for mobile party` event or callback.

### StartPartyEncounter
`public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Handles logic related to `start party encounter`.

### StartSettlementEncounter
`public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

**Purpose:** Handles logic related to `start settlement encounter`.

## Usage Example

```csharp
var manager = EncounterManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)