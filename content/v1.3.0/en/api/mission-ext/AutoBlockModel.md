---
title: "AutoBlockModel"
description: "Auto-generated class reference for AutoBlockModel."
---
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs`

## Overview

The rule for which way a player agent auto-blocks when the game is in auto-block control mode. It is a 13-line abstract model with one member, `Agent.UsageDirection GetBlockDirection(Mission mission)` (`AutoBlockModel.cs:10`). The mission view asks it once per block input and translates the answer into a defend flag.

## Mental Model

The naming is the trap, so read the call site before you override. `MissionGameModels` binds the slot at `MissionGameModels.cs:110` and exposes `MissionGameModels.Current.AutoBlockModel` (`MissionGameModels.cs:74`). `MissionMainAgentController` calls it at `MissionMainAgentController.cs:683`, and then **inverts** the answer into a defend flag: `AttackLeft` becomes `DefendRight` (`MissionMainAgentController.cs:684`-`MissionMainAgentController.cs:687`) and `AttackRight` becomes `DefendLeft` (`MissionMainAgentController.cs:688`-`MissionMainAgentController.cs:691`), while `AttackUp` maps straight through to `DefendUp` (`MissionMainAgentController.cs:692`-`MissionMainAgentController.cs:695`). So you return the direction the *attack* would come from, not the side the shield is on. Two implementations ship, one for the sandbox (`SandboxAutoBlockModel.cs:12`) and one for custom battles (`CustomBattleAutoBlockModel.cs:11`).

## How to use

**Getting one.** Subclass it and register the subclass as a `GameModel`. Read it back with `MissionGameModels.Current.AutoBlockModel` — but note it is only consulted under one control mode, below.

**Typical use.**

```csharp
public sealed class MyModAutoBlockModel : AutoBlockModel
{
    // The only member (AutoBlockModel.cs:10). Return the ATTACK side; the controller
    // flips it to the matching defend flag at MissionMainAgentController.cs:684-695.
    public override Agent.UsageDirection GetBlockDirection(Mission mission)
    {
        Agent mainAgent = mission.MainAgent;
        return mainAgent.IsMounted
            ? Agent.UsageDirection.AttackLeft     // becomes DefendRight
            : Agent.UsageDirection.AttackUp;      // becomes DefendUp
    }
}
```

**Watch out.** The left/right mapping is mirrored: returning `AttackLeft` makes the agent defend to the **right**, not the left (`MissionMainAgentController.cs:684`-`MissionMainAgentController.cs:687`). A model written as "shield is on the left, so block left" therefore blocks the wrong side, and because the result is a movement flag the agent visibly guards the wrong way with no error. Second, the answer is consumed by exactly three `if` branches — `AttackLeft`, `AttackRight`, `AttackUp` (`MissionMainAgentController.cs:684`, `MissionMainAgentController.cs:688`, `MissionMainAgentController.cs:692`) — so returning anything else (including `Agent.UsageDirection.Invalid`) sets **no** defend flag at all and the agent stands undefended. Third, the whole path is gated on `ManagedOptions.GetConfig(ControlBlockDirection) == 2f` (`MissionMainAgentController.cs:681`), so on the other two control modes this model is never called.

## Key Methods

### GetBlockDirection
`public abstract Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Reads and returns the block direction value held by the this instance.

```csharp
// Obtain an instance of AutoBlockModel from the subsystem API first
AutoBlockModel autoBlockModel = ...;
var result = autoBlockModel.GetBlockDirection(mission);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AutoBlockModel instance = ...;
```

## See Also

- [Area Index](../)
- [UsageDirection](../UsageDirection)
- [Agent](../../mission/Agent)