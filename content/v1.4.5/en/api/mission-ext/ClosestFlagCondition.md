---
title: "ClosestFlagCondition"
description: "Auto-generated class reference for ClosestFlagCondition."
---
# ClosestFlagCondition

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClosestFlagCondition : MPPerkCondition<MissionMultiplayerFlagDomination>`
**Base:** `MPPerkCondition<MissionMultiplayerFlagDomination>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/ClosestFlagCondition.cs`

## Overview

`ClosestFlagCondition` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public override bool Check(MissionPeer peer)`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of ClosestFlagCondition from the subsystem API first
ClosestFlagCondition closestFlagCondition = ...;
var result = closestFlagCondition.Check(peer);
```

### Check
`public override bool Check(Agent agent)`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of ClosestFlagCondition from the subsystem API first
ClosestFlagCondition closestFlagCondition = ...;
var result = closestFlagCondition.Check(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClosestFlagCondition closestFlagCondition = ...;
closestFlagCondition.Check(peer);
```

## See Also

- [Area Index](../)