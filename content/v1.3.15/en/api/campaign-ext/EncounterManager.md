---
title: "EncounterManager"
description: "Auto-generated class reference for EncounterManager."
---
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

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Static call; no instance required
EncounterManager.Tick(0);
```

### HandleEncounterForMobileParty
`public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

**Purpose:** Executes the response logic associated with `encounter for mobile party`.

```csharp
// Static call; no instance required
EncounterManager.HandleEncounterForMobileParty(mobileParty, 0);
```

### StartPartyEncounter
`public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Starts the `party encounter` flow or state machine.

```csharp
// Static call; no instance required
EncounterManager.StartPartyEncounter(attackerParty, defenderParty);
```

### StartSettlementEncounter
`public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

**Purpose:** Starts the `settlement encounter` flow or state machine.

```csharp
// Static call; no instance required
EncounterManager.StartSettlementEncounter(attackerParty, settlement);
```

## Usage Example

```csharp
var manager = EncounterManager.Current;
```

## See Also

- [Area Index](../)