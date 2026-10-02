---
title: "ClosestFlagCondition"
description: "ClosestFlagCondition — class in TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# ClosestFlagCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`  
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`  
**Type:** `public class ClosestFlagCondition : MPPerkCondition<MissionMultiplayerFlagDomination>`  
**Base:** `MPPerkCondition`  
**Source:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/ClosestFlagCondition.cs`

## Overview

`ClosestFlagCondition` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.

It extends MPPerkCondition, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.

Prefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClosestFlagCondition`.
- **Static entry points** (1): `StringType`.
- **Instance members** (4): `EventFlags`, `IsPeerCondition`, `Deserialize`, `Check`.
- **Extension points** (4): `EventFlags`, `IsPeerCondition`, `Deserialize`, `Check`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Check` | method (override) | Overrides the base member. Takes 1 argument: `MissionPeer peer`. Returns `bool`. |
| `EventFlags` | property (override) | Overrides the base member `MPPerkCondition.PerkEventFlags` property. Read it for current state; a declared setter writes that state in place. |
| `IsPeerCondition` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Deserialize` | method (override) | Overrides the base member. Takes 1 argument: `XmlNode node`. |
| `StringType` | property (static) | Protected — for subclasses only `string` property. Read it for current state; a declared setter writes that state in place. |
| `ClosestFlagCondition` | ctor | Protected — for subclasses only. Takes no arguments. Returns ``. |

- Constructed as `protected ClosestFlagCondition()`.

## Usage Example

```csharp
var data = new ClosestFlagCondition
{
    EventFlags = default,
    IsPeerCondition = false,
    StringType = "",
};
```

## Risks and Boundaries

- Rules are evaluated in hot loops; avoid allocation inside the comparison.
- The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.
- A rule that captures mutable state gives order-dependent results; keep it stateless.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/ClosestFlagCondition.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [FlagCapturePoint](../FlagCapturePoint/) — `TaleWorlds.MountAndBlade.Objects`.

Section: [api/mission-ext/](../) — the other types in this bucket.
