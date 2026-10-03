---
title: "AgentControllerType"
description: "Who is driving an agent: None / AI / Player / Count. It marks the input source, and because writing Player also detaches/reattaches formations, rewrites Mission.MainAgent and raises the CanRide agent flag, it behaves less like a tag and more like a control handover inside a mission."
---

# AgentControllerType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentControllerType`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentControllerType.cs`

## Overview

`AgentControllerType` labels **who owns control of an agent** inside a mission: whether this frame's movement and action orders come from AI decisions, from player input, or from nobody. It is the most basic split in battle logic — `Agent.IsMine`, `Agent.IsAIControlled`, damage attribution, and order dispatch all sit on top of this one value. Unlike [AgentState](../AgentState) (did this life just end?), it answers **"who is operating it right now"**.

The role it plays is **an input-source marker**, and that marker is **not a read-only tag**: writing `Player` sets off a chain of real side effects (formation detach/attach, `Mission.MainAgent` rewrite, the `CanRide` capability bit), so it is in practice **a control handover operation within a mission**. The enum is native-defined and native-owned — `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13` carries `[assembly: DefineAsEngineStruct(typeof(AgentControllerType), "Agent_controller_type", false, null, null)]` — but **the managed side genuinely has a write path**, because `Agent.Controller` is a property with a setter.

## Mental Model

Treat it as **the switch deciding whose remote control is holding this unit**, not as a label you may freely rewrite. Before touching it, ask one question: *will this change rip a unit out of the AI's hands?*

**Reading it is safe; writing it costs.** The three commonest read entry points all live in `TaleWorlds.MountAndBlade/Agent.cs`: `IsMine` (`:636`, `Controller == AgentControllerType.Player`), `IsAIControlled` (`:644-653`), and the various `Formation` checks. All the writing is concentrated in the `Agent.Controller` setter (`Agent.cs:1199-1235`), which does five things in order: return early if the value is unchanged (`:1207-1210`); if the new value is `Player` and the unit is currently detached from its formation, call `_detachment.RemoveAgent(this)` and then `_formation?.AttachUnit(this)` (`:1212-1216`); write to native via `MBAPI.IMBAgent.SetController` (`:1217`); if the new value is `Player`, **rewrite `Mission.MainAgent` and raise the `CanRide` capability bit** (`:1218-1222`); then notify the formation through `Formation?.OnAgentControllerChanged` and, for any non-AI state, lift the humanoid speed limits (`:1223-1230`). So "set this agent to `Player`" semantically means "let the player take the wheel and put them on horseback" — not a property assignment.

Four consequences follow, and they are the ones that bite. First, **non-humanoid units are forcibly rewritten to AI.** That single line at `Agent.Build` (`Agent.cs:5172`) — `Controller = (!GetAgentFlags().HasAnyFlag(AgentFlag.IsHumanoid) ? AgentControllerType.AI : agentBuildData.AgentController);` — means whatever you set on `AgentBuildData` is discarded for wolves, cattle, and siege engines: they are always AI. Second, **`IsAIControlled` is always false on clients and in replays.** Its getter (`Agent.cs:644-653`) layers a `!GameNetwork.IsClientOrReplay` check on top of `Controller == AgentControllerType.AI`. Logic that tests fine in singleplayer and dies in multiplayer is usually this line. Third, **`None` means "no control source", not "uninitialised"**, and its value is 0. There is no `[Flags]` on this enum, so `AI | Player` (1 | 2) produces 3 — which is exactly the numeric value of `Count`. Any bitwise combination silently manufactures the sentinel state. Fourth, **`Player` is a globally scarce resource**, because it is also the write condition for `Mission.MainAgent`. Give two units in one formation `Player` and `IsMine` returns true for both, while `Mission.MainAgent` points at whichever wrote last — and nothing asserts about the inconsistency.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `None` | `None = 0` | No control source. It shows up in the window between constructing an agent and `Build`-ing it, and in editor/test contexts where `Mission.Current` is null. **Do not use it as an "unset" sentinel to compare against** — `default(AgentControllerType)` *is* `None`, so a read of `None` carries real business meaning. |
| `AI` | `AI = 1` | Driven by AI. This is the **forced value for non-humanoid units** (`Agent.cs:5172`). `IsAIControlled` tests for it but additionally requires `!GameNetwork.IsClientOrReplay`, so on a client or in a replay that predicate returns false even when the value is `AI`. |
| `Player` | `Player = 2` | Driven by the player. Writing it additionally: pulls a detached unit back into its formation, writes to native, sets `Mission.MainAgent = this`, raises `AgentFlag.CanRide`, and notifies the formation. `Agent.IsMine` is exactly this test. **It is the only value with global side effects.** |
| `Count` | `Count = 3` | **A sentinel encoding the member count (3), not a control type.** It is numerically equal to `AI | Player`, which is precisely why **bitwise use of this enum is self-destructive**. It also shows up in `Enum.GetValues` enumerations. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentControllerType), "Agent_controller_type", false, null, null)]`, at `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13` | Binds the enum to the native `Agent_controller_type` struct; the `false` says "not a flag set", and there is no debugger abbreviation. Unlike [AgentState](../AgentState), **this enum has a real managed write path** (the `Agent.Controller` setter), so it is more than a mirror. |

## Real Example

Set control ownership at spawn time via `AgentBuildData` — the only clean moment, since changing it afterwards triggers the side-effect chain described above:

```csharp
AgentBuildData buildData = new AgentBuildData(new BasicBattleAgentOrigin(villagerTroop))
    .Team(Mission.Current.AttackerTeam)
    .Controller(AgentControllerType.AI)
    .InitialFrameFromSpawnPointEntity(spawnEntity);

Mission.Current.SpawnAgent(buildData);
```

Handing a unit over to the player at runtime, with the `Mission.MainAgent` consequence in mind (mirroring `Agent.cs:1218-1222`):

```csharp
private void HandOverToPlayer(Agent unit)
{
    if (unit.Controller == AgentControllerType.Player)
    {
        Debug.Print("already player controlled", 0);
        return;
    }

    // This single assignment will: pull a detached unit back into its formation,
    // rewrite Mission.MainAgent, and set the CanRide agent flag.
    unit.Controller = AgentControllerType.Player;

    if (Mission.Current.MainAgent != unit)
    {
        Debug.Print("warning: Mission.MainAgent is " + Mission.Current.MainAgent, 0);
    }

    // CanRide was just turned on as a side effect, which is why a footman can now mount.
    if (unit.GetAgentFlags().HasAnyFlag(AgentFlag.CanRide))
    {
        Debug.Print("unit can now ride, index = " + unit.Index, 0);
    }
}
```

Filtering the sentinel — never treat `Count` as a control mode, even though it is numerically reachable:

```csharp
public static class ControllerTally
{
    // Count == 3 is the member-count sentinel. A range test against it is the only
    // safe way to enumerate, because Count is numerically equal to (AI | Player).
    public static bool IsRealController(AgentControllerType controller)
    {
        return controller == AgentControllerType.None
            || controller == AgentControllerType.AI
            || controller == AgentControllerType.Player;
    }

    public static string Describe(AgentControllerType controller)
    {
        if (!IsRealController(controller))
        {
            return "unset";
        }
        return controller.ToString();
    }
}
```

## Risks and Boundaries

- **Writing `Player` has five side effects, not zero.** The `Agent.Controller` setter touches formations, `Mission.MainAgent`, the `CanRide` capability bit, the speed limit, and the formation callback. Flipping control repeatedly tears formation state apart.
- **`Mission.MainAgent` only remembers the last writer.** After giving two units `Player`, `IsMine` is true for both but `MainAgent` points at the last write. **`IsMine` and `MainAgent` are not the same thing** — if you need "the unique player unit", you must test `agent == Mission.Current.MainAgent` yourself.
- **Non-humanoid units are always AI.** `Agent.Build` (`Agent.cs:5172`) picks `AgentControllerType.AI` whenever `!IsHumanoid`, discarding your `AgentBuildData` setting. Beasts and siege engines have no `Player` state.
- **`IsAIControlled` fails in multiplayer and replays.** Its getter contains the `!GameNetwork.IsClientOrReplay` test (`Agent.cs:648`). Anything depending on it returns false the moment you go online.
- **No bitwise operations.** There is no `[Flags]`, and `Count == 3 == (AI | Player)`. Any `|` combination manufactures an illegal state that is indistinguishable from the sentinel.
- **It crosses into native, and a write notifies the engine immediately.** The setter calls `MBAPI.IMBAgent.SetController` at once, and native swaps its AI decision module. Changing control during a mission tick — in particular while iterating a collection — can make the AI behave on that frame differently from what you expected.
- **`AgentBuildData.Controller` is the safer entry point.** Setting it at spawn time avoids the runtime side effects entirely; the right pattern is "decide at spawn, change rarely afterwards".
- **Do not confuse it with [AgentState](../AgentState).** One is "who is operating", the other is "is this life still intact". There is no subtype relationship, and combined checks need both.

## Cross-Version Notes

`AgentControllerType.cs` is 9 lines with 4 members in 1.4.5 (`AgentState.cs` at 11 lines and `AgentAttackType.cs` at 10 lines belong to the same batch of tiny files), in that version's original-source form. The 1.3.x / 1.4.6 counterparts are decompiled output and are far longer while carrying the same member set and the same native binding name `"Agent_controller_type"`. Two things are worth checking when migrating across versions: whether the side-effect set of the `Agent.Controller` setter has grown (in 1.4.5 it includes re-attaching the formation, rewriting `MainAgent`, and raising `CanRide`), and whether `DefineAsEngineStruct`'s third argument is still `false` — if it ever flips to `true`, native has turned this into a flag set and this page's "no bitwise operations" conclusion changes with it.

## Dependencies

- Definition source: `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:13`'s `DefineAsEngineStruct` binds it to native's `Agent_controller_type`
- Read/write entry point: `TaleWorlds.MountAndBlade/Agent.cs:1199-1235`, the `Agent.Controller` property (getter via `AgentHelper.GetAgentControllerType`, setter with the side-effect chain)
- Derived predicates: [Agent](../../mission/Agent)'s `IsMine` / `IsAIControlled` (`Agent.cs:636` / `:644`)
- Usual source of the value: [AgentBuildData](../../mission-ext/AgentBuildData).Controller, handed over by `Agent.Build` (`Agent.cs:5172`), which forces AI for non-humanoids
- Formation coupling: `Formation.OnAgentControllerChanged`, `_detachment.RemoveAgent`, `_formation.AttachUnit`
- Capability-bit coupling: setting `Player` raises `CanRide` in [AgentFlag](../AgentFlag)
- Easily-confused enums: [AgentState](../AgentState) (life state), `Agent.UnderAttackType` (under-attack state)
- Bucket index: [core-extra API section](../)