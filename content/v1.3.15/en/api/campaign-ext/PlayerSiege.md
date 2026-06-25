---
title: "PlayerSiege"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerSiege`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerSiege

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class PlayerSiege`
**Area:** campaign-ext

## Overview

`PlayerSiege` lives in `TaleWorlds.CampaignSystem.Siege`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerSiegeEvent` | `public static SiegeEvent PlayerSiegeEvent { get; }` |
| `BesiegedSettlement` | `public static Settlement BesiegedSettlement { get; }` |
| `PlayerSide` | `public static BattleSideEnum PlayerSide { get; }` |
| `IsRebellion` | `public static bool IsRebellion { get; }` |

## Key Methods

### StartSiegePreparation
`public static void StartSiegePreparation()`

**Purpose:** Handles logic related to `start siege preparation`.

### OnSiegeEventFinalized
`public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)`

**Purpose:** Called when the `siege event finalized` event is raised.

### StartPlayerSiege
`public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)`

**Purpose:** Handles logic related to `start player siege`.

### FinalizePlayerSiege
`public static void FinalizePlayerSiege()`

**Purpose:** Handles logic related to `finalize player siege`.

### StartSiegeMission
`public static void StartSiegeMission(Settlement settlement = null)`

**Purpose:** Handles logic related to `start siege mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PlayerSiege.StartSiegePreparation();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
