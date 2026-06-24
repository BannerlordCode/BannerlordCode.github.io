<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerSiege`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerSiege

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class PlayerSiege`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs`

## Overview

`PlayerSiege` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
PlayerSiege.StartSiegePreparation();
```

## See Also

- [Complete Class Catalog](../catalog)