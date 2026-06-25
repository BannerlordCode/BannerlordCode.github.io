---
title: "PlayerSiege"
description: "Auto-generated class reference for PlayerSiege."
---
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

**Purpose:** Starts the `siege preparation` flow or state machine.

```csharp
// Static call; no instance required
PlayerSiege.StartSiegePreparation();
```

### OnSiegeEventFinalized
`public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)`

**Purpose:** Invoked when the `siege event finalized` event is raised.

```csharp
// Static call; no instance required
PlayerSiege.OnSiegeEventFinalized(false);
```

### StartPlayerSiege
`public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)`

**Purpose:** Starts the `player siege` flow or state machine.

```csharp
// Static call; no instance required
PlayerSiege.StartPlayerSiege(playerSide, false, null);
```

### FinalizePlayerSiege
`public static void FinalizePlayerSiege()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerSiege.FinalizePlayerSiege();
```

### StartSiegeMission
`public static void StartSiegeMission(Settlement settlement = null)`

**Purpose:** Starts the `siege mission` flow or state machine.

```csharp
// Static call; no instance required
PlayerSiege.StartSiegeMission(null);
```

## Usage Example

```csharp
PlayerSiege.StartSiegePreparation();
```

## See Also

- [Area Index](../)