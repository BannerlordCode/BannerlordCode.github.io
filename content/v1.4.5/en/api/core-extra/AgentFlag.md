---
title: "AgentFlag"
description: "The agent capability bit set, a uint-wide [Flags] enum. It both describes what a unit can do (ride, attack, defend, wield bows, shoot from horseback) and is used as a runtime state switch (CanRide is switched on automatically when control is handed to the player), so three different roles share one field."
---

# AgentFlag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentFlag : uint`
**Base:** `uint`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentFlag.cs`

## Overview

`AgentFlag` is a `uint`-wide `[Flags]` bit set answering "**what can this agent do**" — can it ride, attack, defend, jump, wield a bow, be ridden? It is **the only interface between a unit template and a capability check**: the `<Flags>` node of a monster definition XML is parsed into it (`Monster.cs:569-579`), battle logic branches on it (armed or not, AI pickup allowed or not, chargeable or not), and the spawn pipeline reads it to decide mounts and weapons.

The role it plays is **capability description**, but **the name misleads**: `AgentFlag` is not purely static capability — runtime code actively **sets and clears bits in it**. The clearest case is `CanRide`: when `Agent.Controller` is assigned `Player`, `Agent.cs:1222` runs `SetAgentFlags(GetAgentFlags() | AgentFlag.CanRide)`, turning what looks like a template capability bit into a "currently operable" runtime switch. So whenever you read it, ask first: **am I reading something the template supplied, or something the engine rewrote?**

## Mental Model

Picture it as **a capability checklist stuck onto an agent** — and remember the engine **erases and rewrites** that checklist at runtime. Three threads hold the whole model together.

**Thread one: who sets the bits.** There are exactly two sources. The first is **XML parsing**: `Monster.cs:569-579` walks the `<Flags>` child node's attributes and matches them **one by one against each enum member's `ToString()` name** — `<Flags CanAttack="true" IsHumanoid="true" />` ORs in every member it finds. So **attribute names in monster XML must match the enum member names character for character**. The second is **runtime code**: `Agent.SetAgentFlags` (`Agent.cs:2461-2464`) is a whole-set overwrite, so every caller must read first and then OR. The cleanest example in the tree is `ClimbingMachineDetachment.cs:243` — `agent.SetAgentFlags((AgentFlag)((uint)agent.GetAgentFlags() & 0xFFFFFFE7u))`, a textbook read-modify-write.

**Thread two: under what condition does a given bit get set?** This is where answers most often go wrong, because the trigger points are scattered across the whole battle system. `CanRide` is switched on by a control handover (`Agent.cs:1222`). `CanWieldWeapon` decides the AI's simple-behaviour decision interval (`AgentStatCalculateModel.cs:210`), whether the unit may pick equipment up (`HumanAIComponent.cs:229`), and whether damage keeps resolving (`Mission.cs:3025`). `CanAttack | CanDefend` gates the climbing machines (`ClimbingMachineDetachment.cs:241`). `UnreachableViaNavMesh` affects formation pathing during deployment (`Formation.cs:1251`).

**Thread three: which bits are empty.** Read the source and you will notice `CanWander = 0x20000` is followed directly by `CanKick = 0x80000` — **the `0x40000` bit has no member at all.** That is not a typo; it is a slot reserved for the future. So **"absent from the enum" does not mean "capability does not exist"**, and custom logic built on `Enum.GetValues` enumeration can never see those bits.

Four conclusions follow, and they are the ones to memorise. First, **the canonical way to test a bit is AND-against-zero**: `Agent.cs:640`'s `public bool IsHuman => (GetAgentFlags() & AgentFlag.IsHumanoid) != 0;` is the house style across the repository. `HasAnyFlag` also works (`Agent.cs:1225` uses it), but it computes "bitwise-and, non-zero" and therefore **works for combined tests too** — `ClimbingMachineDetachment.cs:241`'s `HasAnyFlag(AgentFlag.CanAttack | AgentFlag.CanDefend)` is asking "at least one of these two". Second, **never test a single bit with `==`.** `flags == AgentFlag.CanAttack` is only true when `CanAttack` is the only bit set, and in practice `IsHumanoid` is set as well, so it is a guaranteed false negative. Third, **`None = 0` does not mean "capable of nothing"** — it means "no bit is marked", and it is the zeroing initial value at `Monster.cs:571`. Fourth, **it is `uint`, not `int`**, and that is exactly why the literal in `ClimbingMachineDetachment.cs:243` carries a `u` suffix: mask constants must be written as `uint`, otherwise the `&` has mismatched operand types and fails to compile.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `None` | `None = 0u` | The empty set. Used as the zeroing initial value before the `<Flags>` node is parsed at `Monster.cs:571`. **Reading an all-zero `AgentFlag` means "the XML declared no capabilities", not "this unit is invalid".** |
| `IsHumanoid` | `IsHumanoid = 0x800u` | Whether the unit is humanoid. **This is the most heavily branched bit in the enum**: `Agent.cs:640`'s `IsHuman` derives directly from it; `Agent.cs:5172` uses it to pick control ownership (non-humanoid is forced to AI); `Agent.cs:1225` uses it to decide whether to lift speed limits after a control change. Omit it on a custom NPC and the unit gets forced onto AI with its speed cap stuck. |
| `CanWieldWeapon` | `CanWieldWeapon = 0x4000u` | Whether the unit can hold a weapon. **It is the test for "this is a combat unit"**: `AgentStatCalculateModel.cs:210` gives armed units a 1.5x shorter behaviour-decision interval (0.2 becomes 0.3), `HumanAIComponent.cs:229` uses it to veto pickup, and `Mission.cs:3025` uses it to decide whether damage keeps resolving. Carts, siege towers, and baggage animals lack it. |
| `CanRide` | `CanRide = 0x2000u` | Whether the unit can be ridden. **This bit is rewritten at runtime**: `Agent.cs:1222` ORs it in when control is assigned to `Player`, and `Agent.cs:3614` tests it. So what you read back is a **blend of template capability and current control ownership** — never treat it as a pure template value. |
| `CanAttack` / `CanDefend` | `CanAttack = 0x8u` / `CanDefend = 0x10u` | Can attack / can defend. `ClimbingMachineDetachment.cs:241/266` uses `HasAnyFlag(CanAttack | CanDefend)` to decide whether a unit needs a climbing machine, then `& 0xFFFFFFE7u` clears **both bits in one go** (that mask zeroes `0x8` and `0x10`). This is the clearest bit-set example in the tree. |
| `Mountable` / `CanBeCharged` / `CanCharge` | `Mountable = 0x1u` / `CanBeCharged = 0x80u` / `CanCharge = 0x40u` | "It is a horse", "it can be rammed", "it can ram". `Agent.cs:642`'s `IsMount` derives from `Mountable`, and `Agent.Build` (`Agent.cs:5173`) uses `IsMount` to decide whether `Formation` becomes null — **mounted units do not join formations**. |
| `CanSprint` / `CanJump` / `CanRear` / `CanCrouch` / `CanClimbLadders` | `CanSprint = 0x400u` / `CanJump = 0x2u` / `CanRear = 0x4u` / `CanCrouch = 0x8000u` / `CanClimbLadders = 0x100u` | Locomotion capability bits. **They are barely read on the managed side** (the animation layer consumes them natively), but getting them right in monster XML is what makes a horse rear or a cow jump. This is the group where "XML attribute names must match enum names exactly" is most often violated. |
| `MoveAsHerd` / `MoveForwardOnly` / `CanWander` / `UnreachableViaNavMesh` | `MoveAsHerd = 0x200000u` / `MoveForwardOnly = 0x400000u` / `CanWander = 0x20000u` / `UnreachableViaNavMesh = 0x8000000u` | Group-behaviour and pathing constraints. `MoveAsHerd` makes cattle and sheep move as a herd, `MoveForwardOnly` forbids backing up, `CanWander` is a precondition for idle NPC wandering, and `UnreachableViaNavMesh` (deployment-only) is used at `Formation.cs:1251` to keep `Formation` from re-pathing after `IsDeploymentFinished`. |
| `CanUseAllBowsMounted` / `CanReloadAllXBowsMounted` / `CanDeflectArrowsWith2HSword` | `0x1000000u` / `0x2000000u` / `0x4000000u` | Three high "advanced combat technique" bits: swapping bows while mounted, reloading all crossbows from horseback, and deflecting arrows with a two-handed sword. No managed code reads them; they are consumed entirely by native. |
| `CanGetScared` / `CanGetAlarmed` / `CanBeInGroup` | `CanGetScared = 0x1000u` / `CanGetAlarmed = 0x10000u` / `CanBeInGroup = 0x200u` | Morale and formation eligibility. The interaction logic around `Agent.cs:2660` and `IsAlarmed()` depend on them; `CanBeInGroup` decides whether a unit may be folded into a formation. |
| (reserved hole) `0x40000` | no member | The `0x40000` bit sitting between `CanWander = 0x20000` and `CanKick = 0x80000` **has no enum member at all**. It is a slot reserved for the future. **`Enum.GetValues` enumeration can never reach it, while `flags & 0x40000` remains a perfectly legal bit test.** |
| (assembly attribute) none | this type carries **no** `DefineAsEngineStruct` | Unlike the other enums in this bucket, `AgentFlag` is **not** a mirror of a native definition: it appears in neither `AssemblyInfo.cs` (neither `TaleWorlds.Engine`'s nor `TaleWorlds.MountAndBlade`'s). It originates from XML parsing, is read and written by managed code, and reaches the engine through `IMBAgent.SetAgentFlags` / `AgentHelper.GetAgentFlags`. **That absence is precisely what makes it freely rewritable at runtime.** |

## Real Example

Read a monster template's capabilities, testing bits by AND-against-zero (the pattern from `Agent.cs:640-642`):

```csharp
Monster monster = MBObjectManager.Instance.GetObject<Monster>("human");
if (monster == null)
{
    Debug.Print("monster not loaded", 0);
    return;
}

AgentFlag flags = monster.Flags;

// Bit-and-against-zero is the canonical test in this codebase.
bool isHumanoid = (flags & AgentFlag.IsHumanoid) != AgentFlag.None;
bool isMount = (flags & AgentFlag.Mountable) != AgentFlag.None;
bool armed = flags.HasAnyFlag(AgentFlag.CanWieldWeapon);

Debug.Print("humanoid=" + isHumanoid + " mount=" + isMount + " armed=" + armed, 0);
Debug.Print("raw value = " + (uint)flags, 0);
```

Read-modify-write a live unit's runtime capability bits, mirroring `ClimbingMachineDetachment.cs:241-243`:

```csharp
Agent unit = Mission.GetAgentFromIndex(3, canBeNull: true);
if (unit == null)
{
    Debug.Print("no agent at index 3", 0);
    return;
}

// Read-modify-write: SetAgentFlags overwrites the whole set, so you must
// re-read first or you will silently drop every other flag.
if (unit.GetAgentFlags().HasAnyFlag(AgentFlag.CanAttack | AgentFlag.CanDefend))
{
    unit.SetAgentFlags((AgentFlag)((uint)unit.GetAgentFlags() & 0xFFFFFFE7u));
    Debug.Print("cleared CanAttack and CanDefend on agent " + unit.Index, 0);
}

unit.SetAgentFlags(unit.GetAgentFlags() | AgentFlag.CanBeInGroup);
Debug.Print("flags now = " + (uint)unit.GetAgentFlags(), 0);
```

Demonstrating the trap at the centre of this page — `CanRide` is rewritten by the control handover, so it is not a pure template value:

```csharp
Agent hero = Mission.Current.MainAgent;
if (hero == null)
{
    return;
}

// Before: taken from the monster template via Monster.cs:569-579.
bool rideableFromTemplate = hero.GetAgentFlags().HasAnyFlag(AgentFlag.CanRide);

// Assigning Player runs Agent.cs:1222, which ORs CanRide into the live flags
// and rewrites Mission.MainAgent.
hero.Controller = AgentControllerType.Player;

// After: CanRide may now be set purely because of the control handover.
bool rideableAfterHandover = hero.GetAgentFlags().HasAnyFlag(AgentFlag.CanRide);
Debug.Print("template=" + rideableFromTemplate + " after=" + rideableAfterHandover, 0);
```

## Risks and Boundaries

- **XML attribute names must match enum member names character for character.** `Monster.cs:572-577` looks up `childNode.Attributes[value2.ToString()]` by enum name, so a lowercase `canattack` or any other spelling drift **fails silently** — no match means "skip", not "error". The result is an all-zero capability set with no log line to tell you why.
- **Never `flags == AgentFlag.X`.** In practice `IsHumanoid` is always set alongside, so single-bit equality is a guaranteed false negative. Use `(flags & X) != AgentFlag.None` or `flags.HasAnyFlag(X)`.
- **`CanRide` is not a pure template value.** `Agent.cs:1222` opens it automatically on a control handover. Using it to ask "is this unit *designed* to be rideable" is simply wrong.
- **`HasAnyFlag` also works for combined tests.** `ClimbingMachineDetachment.cs:241`'s `HasAnyFlag(AgentFlag.CanAttack | AgentFlag.CanDefend)` means "at least one", not "both". To require both you must write two separate AND-against-zero tests.
- **Reserved bits exist.** `0x40000` and the span from `0x20000` up to `0x80000` contain holes. `Enum.GetValues` enumeration cannot see them; conversely, mask constants must be written as `uint` (with the `u` suffix) or `uint & int` fails to compile — which is exactly why `0xFFFFFFE7u` carries one.
- **Runtime writes are whole-set overwrites, not increments.** `Agent.SetAgentFlags` (`Agent.cs:2461`) goes straight to `MBAPI.IMBAgent.SetAgentFlags(GetPtr(), (uint)agentFlags)`, and **the entire set you pass takes effect**. Forget the read and you wipe everyone else's bits.
- **Non-humanoid units are forced onto AI.** `Agent.cs:5172` decides on `IsHumanoid`, semantically unrelated to `CanRide` / `CanAttack` yet constantly confused with them. Omitting `IsHumanoid` on a monster has control ownership overwritten as a result.
- **`Monster.Flags` is only the template value.** Monster XML supplies the initial set; once the unit is live, changes must be read with `Agent.GetAgentFlags()`, and the two will diverge.
- **Do not confuse it with [AgentState](../AgentState), [AgentControllerType](../AgentControllerType), or [AgentMovementMode](../AgentMovementMode).** The four are orthogonal: `AgentFlag` is capability, `AgentState` is life, `AgentControllerType` is control ownership, `AgentMovementMode` is medium. Conflating them turns "it can ride" into "it is currently mounted".

## Cross-Version Notes

`AgentFlag.cs` is 36 lines with 26 members (including `None`) in 1.4.5, in that version's original-source form. **What sets it apart from the native-mirror enums in this bucket is the absence of any `DefineAsEngineStruct` binding**, which means Taleworlds maintains the member set themselves and can add or remove bits freely — so a new member appearing in a reserved slot such as `0x40000` is considerably more likely here than for the other enums. Three things are worth checking when migrating: whether the `<Flags>` attribute names you wrote in custom monster XML still exist in the target version — **removed bits are silently ignored during parsing**; whether the trigger conditions for formation- and AI-affecting bits such as `CanBeInGroup` and `MoveAsHerd` have moved onto a different enum; and whether the three experimental high bits from `0x1000000` upward still behave as before, since those are the most volatile part of the set. **Never hard-code `uint` literals — always reference members by name.**

## Dependencies

- Origin: [Monster](../Monster)'s `Flags` property, filled by `Monster.cs:569-579` which matches monster XML `<Flags>` child-node attributes against enum names
- Runtime read/write: [Agent](../../mission/Agent)'s `GetAgentFlags()` / `SetAgentFlags()` (`Agent.cs:2888` / `:2461`), backed by `AgentHelper.GetAgentFlags` and `MBAPI.IMBAgent.SetAgentFlags`
- Derived convenience properties: `Agent.IsHuman` (`Agent.cs:640`), `Agent.IsMount` (`:642`), `Agent.IsMine` (`:636`)
- Semantic helper extension: `HasAnyFlag`, the `TaleWorlds.Library` enum extension (bitwise-and non-zero, not `Enum.HasFlag`)
- Battle-logic consumers: `AgentStatCalculateModel.cs:210`, `AttackInformation.cs:169/185/213`, `ClimbingMachineDetachment.cs:241-243`, `HumanAIComponent.cs:229`, `Formation.cs:1251`, `Mission.cs:3025`
- Control coupling: the [AgentControllerType](../AgentControllerType) setter raises `CanRide`
- Orthogonal enums: [AgentState](../AgentState), [AgentMovementMode](../AgentMovementMode)
- Bucket index: [core-extra API section](../)