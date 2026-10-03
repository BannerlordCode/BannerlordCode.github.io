---
title: "BehaviorSets"
description: "The thirteen named behaviour presets that turn a bare campaign-map agent into a quest character, wanderer, guard, companion, or stealth operative — each one installs three fixed groups and then adds or configures specific behaviours."
---

# BehaviorSets

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox.Missions`
**Type:** `public class BehaviorSets`
**Base:** none (static-method container, declared as a non-static class)
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/BehaviorSets.cs`

## Overview

Every location character on the campaign map needs an AI, and writing one from scratch per NPC type is not practical. This class is the catalogue: thirteen `public static` methods, each a complete preset. `AddQuestCharacterBehaviors`, `AddWandererBehaviors`, `AddOutdoorWandererBehaviors`, `AddIndoorWandererBehaviors`, `AddFixedCharacterBehaviors`, `AddPatrollingThugBehaviors`, `AddStandGuardBehaviors`, `AddFixedGuardBehaviors`, `StealthAgentBehaviors`, `AddPatrollingGuardBehaviors`, `AddCompanionBehaviors`, `AddBodyguardBehaviors`, and `AddFirstCompanionBehavior`.

Every one of them opens by calling the private `AddBehaviorGroups(IAgent agent)`, which resolves the agent's navigator and installs exactly three groups in a fixed order: `DailyBehaviorGroup`, `InterruptingBehaviorGroup`, `AlarmedBehaviorGroup`. After that each preset differs only in what it adds into those groups and how it configures them.

## Mental Model

The shared skeleton is three lines and it is worth internalising because it defines the contract for writing your own preset:

```
AgentNavigator agentNavigator = ((Agent)agent).GetComponent<CampaignAgentComponent>().AgentNavigator;
agentNavigator.AddBehaviorGroup<DailyBehaviorGroup>();
agentNavigator.AddBehaviorGroup<InterruptingBehaviorGroup>();
agentNavigator.AddBehaviorGroup<AlarmedBehaviorGroup>();
```

Two things follow. **The navigator must already exist**, and the only way to have one is a `CampaignAgentComponent` with `CreateAgentNavigator()` already called — so a preset is only valid after the agent has been created and configured, never in its constructor. And **there is no null check**: `GetComponent<CampaignAgentComponent>()` returning null, or its `AgentNavigator` being null, throws immediately. Note the cast `((Agent)agent)` — the parameter is `IAgent` but the navigator is only reachable through the concrete `Agent`.

Once the three groups exist, the presets are variations on two axes: *what the agent does while calm* (a `DailyBehaviorGroup` behaviour) and *what it does when alarmed* (an `AlarmedBehaviorGroup` behaviour). The calm repertoire is `WalkingBehavior` (with `SetIndoorWandering` / `SetOutdoorWandering` toggles), `PatrolAgentBehavior`, `PatrollingGuardBehavior`, or `StandGuardBehavior`. The alarmed repertoire is almost always `FightBehavior`, frequently plus `FleeBehavior`.

The exceptions are what make the table interesting:

- **`AddStandGuardBehaviors` and `AddPatrollingGuardBehaviors` deliberately omit `FleeBehavior`** and instead set `behaviorGroup.DisableCalmDown = true`. A guard that flees is a bug, and a guard that calms down mid-fight is also a bug — hence both changes.
- **`AddFixedGuardBehaviors` adds only `FightBehavior`.** No calm behaviour at all: a fixed guard has nothing to do but fight.
- **`AddFirstCompanionBehavior` adds only `FightBehavior` too**, and notably calls `GetBehaviorGroup<DailyBehaviorGroup>()` and **discards the result** — it installs the group but puts nothing in it.
- **`StealthAgentBehaviors` is the odd one out on naming.** It is the only preset without the `Add` prefix, and it is also the only one that calls `AddBehaviorGroups` and then calls `AddBehaviorGroup<DailyBehaviorGroup>()` and `AddBehaviorGroup<AlarmedBehaviorGroup>()` **a second time**. It also reads `agent.Character.StringId` and compares it to the literal `"disguise_officer_character"`, calling `behaviorGroup.SetCanMoveWhenCautious(false)` for that one character.
- **`AddBodyguardBehaviors`** is the only preset that wires a follow target: `behaviorGroup.AddBehavior<FollowAgentBehavior>().SetTargetAgent(Agent.Main)`.

Because the class is declared `public class` but every method is `public static`, there is no instance to create and no state — treat it as a namespace.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `AddQuestCharacterBehaviors` | `public static void AddQuestCharacterBehaviors(IAgent agent)` | The preset for a quest-giver: `WalkingBehavior` in the daily group, `FleeBehavior` plus `FightBehavior` when alarmed. A civilian who runs and only fights if cornered. |
| `AddWandererBehaviors` | `public static void AddWandererBehaviors(IAgent agent)` | The baseline town-idler preset: `WalkingBehavior` with both indoor and outdoor wandering left at their defaults, plus `FleeBehavior` and `FightBehavior` when alarmed. |
| `AddOutdoorWandererBehaviors` | `public static void AddOutdoorWandererBehaviors(IAgent agent)` | For characters who stay outside: `WalkingBehavior` with `SetIndoorWandering(false)`, an added `ChangeLocationBehavior`, plus `FleeBehavior` and `FightBehavior` when alarmed. The only preset that adds `ChangeLocationBehavior`. |
| `AddIndoorWandererBehaviors` | `public static void AddIndoorWandererBehaviors(IAgent agent)` | The indoor mirror: `WalkingBehavior` with `SetOutdoorWandering(false)`, plus `FleeBehavior` and `FightBehavior` when alarmed. |
| `AddFixedCharacterBehaviors` | `public static void AddFixedCharacterBehaviors(IAgent agent)` | A stationary character: one `WalkingBehavior` with **both** wandering toggles disabled, plus `FleeBehavior` and `FightBehavior`. |
| `AddPatrollingThugBehaviors` | `public static void AddPatrollingThugBehaviors(IAgent agent)` | A roaming thug: `PatrolAgentBehavior` in the daily group, `FleeBehavior` plus `FightBehavior` when alarmed. Notably the thugs *can* flee. |
| `AddStandGuardBehaviors` | `public static void AddStandGuardBehaviors(IAgent agent)` | A stationary guard: `StandGuardBehavior` in the daily group, and in the alarmed group only `FightBehavior` with `DisableCalmDown = true`. No `FleeBehavior` — a guard is not allowed to run. |
| `AddFixedGuardBehaviors` | `public static void AddFixedGuardBehaviors(IAgent agent)` | The minimal combatant: adds **only** `FightBehavior` to the alarmed group. No calm behaviour at all, so the agent has nothing to do unless a fight starts. |
| `StealthAgentBehaviors` | `public static void StealthAgentBehaviors(IAgent agent)` | The one preset without an `Add` prefix. Adds `CautiousBehavior` and `FightBehavior` to the alarmed group, `PatrolAgentBehavior` to the daily group, and for the literal character id `disguise_officer_character` also calls `SetCanMoveWhenCautious(false)`. Uniquely, it calls `AddBehaviorGroups` and then adds `DailyBehaviorGroup` and `AlarmedBehaviorGroup` a second time. |
| `AddPatrollingGuardBehaviors` | `public static void AddPatrollingGuardBehaviors(IAgent agent)` | A guard on the move: `PatrollingGuardBehavior` in the daily group, only `FightBehavior` when alarmed, and `DisableCalmDown = true`. |
| `AddCompanionBehaviors` | `public static void AddCompanionBehaviors(IAgent agent)` | A follower: `WalkingBehavior` with indoor wandering disabled, and only `FightBehavior` when alarmed. No `FleeBehavior`, because a companion is expected to hold. |
| `AddBodyguardBehaviors` | `public static void AddBodyguardBehaviors(IAgent agent)` | The only preset that binds a follow target: `WalkingBehavior` plus `FollowAgentBehavior` whose `SetTargetAgent(Agent.Main)` pins it to the player, and `FightBehavior` when alarmed. |
| `AddFirstCompanionBehavior` | `public static void AddFirstCompanionBehavior(IAgent agent)` | The leanest companion preset: it calls `GetBehaviorGroup<DailyBehaviorGroup>()` and **throws the result away**, then adds only `FightBehavior` to the alarmed group. The daily group is installed but deliberately left empty. |

## Real Example

Install a preset the way the location-character system does — the navigator must already exist:

```csharp
AgentNavigator navigator = agent.GetComponent<CampaignAgentComponent>().AgentNavigator;
BehaviorSets.AddStandGuardBehaviors(agent);
Debug.Print("active group = " + navigator.GetActiveBehaviorGroup(), 0);
```

Build a custom preset on top of the same three-group skeleton, which is the only supported way to add one:

```csharp
public static void AddMyNobleBehaviors(IAgent agent)
{
    AgentNavigator navigator = ((Agent)agent).GetComponent<CampaignAgentComponent>().AgentNavigator;
    navigator.AddBehaviorGroup<DailyBehaviorGroup>();
    navigator.AddBehaviorGroup<InterruptingBehaviorGroup>();
    navigator.AddBehaviorGroup<AlarmedBehaviorGroup>();

    DailyBehaviorGroup daily = navigator.GetBehaviorGroup<DailyBehaviorGroup>();
    daily.AddBehavior<WalkingBehavior>();

    AlarmedBehaviorGroup alarmed = navigator.GetBehaviorGroup<AlarmedBehaviorGroup>();
    alarmed.AddBehavior<FightBehavior>();
}
```

Inspect the groups a preset installed before adding to them:

```csharp
AlarmedBehaviorGroup alarmed = navigator.GetBehaviorGroup<AlarmedBehaviorGroup>();
Debug.Print("calm down disabled = " + alarmed.DisableCalmDown, 0);
alarmed.SetCanMoveWhenCautious(false);
```

Reproduce the stealth preset's character-id special case for your own agent:

```csharp
BehaviorSets.StealthAgentBehaviors(agent);
if (agent.Character.StringId == "disguise_officer_character")
{
    Debug.Print("officer will hold position while cautious", 0);
}
```

## Risks and Boundaries

- **No null checks anywhere.** `GetComponent<CampaignAgentComponent>()` returning null, or its `AgentNavigator` being null, throws on the very first line. A preset must never run before `CreateAgentNavigator()`.
- **Every preset calls `AddBehaviorGroups` first**, so calling two presets on the same agent calls `AddBehaviorGroup<T>` twice for each group. Whether that is idempotent is not determinable from these files alone — assume it is not, and pick one preset per agent.
- **`StealthAgentBehaviors` double-adds two groups on top of that**, so it is the most exposed to a repeat call.
- **The name `StealthAgentBehaviors` breaks the convention.** Every other preset is `AddXxx`; if you are pattern-matching on method names, this one will be missed.
- **`agent.Character.StringId` is compared against a hard-coded literal**, `"disguise_officer_character"`. A mod that reuses that id inherits the behaviour unintentionally.
- **`AddFirstCompanionBehavior` discards a group lookup.** The daily group is created and left empty; if you expected that preset to move the companion, it will not.
- **Guards and companions have no `FleeBehavior` and set `DisableCalmDown = true`.** Adding a fleeing behaviour to them is the mod's decision, not the preset's.
- **`DisableCalmDown` is a public mutable field**, not a property, so it can be flipped after the fact — but only by reaching into the group.
- **Cast from `IAgent` to `Agent` is unchecked.** A non-`Agent` implementation of `IAgent` will fail the cast rather than degrade.
- **No save contract.** Behaviour sets are rebuilt from scratch every time a location character spawns; nothing here is serialised.

## Cross-version note

The v1.4.5 file is 162 lines with exactly thirteen public static presets. The private `AddBehaviorGroups` skeleton, the missing `Add` prefix on `StealthAgentBehaviors`, and its second round of `AddBehaviorGroup` calls are all present here.

## Dependencies

- Navigator source: [CampaignAgentComponent](CampaignAgentComponent) is the only route to the navigator — `GetComponent<CampaignAgentComponent>().AgentNavigator` — and is what must be constructed before any preset runs.
- Behaviour contract: [AgentBehavior](AgentBehavior) is the base of every behaviour these presets install.
- Group owners: [DailyBehaviorGroup](../campaign-ext/DailyBehaviorGroup), [AlarmedBehaviorGroup](../campaign-ext/AlarmedBehaviorGroup), and [InterruptingBehaviorGroup](../campaign-ext/InterruptingBehaviorGroup) are the three groups every preset installs.
- Public face: [AgentBehaviorManager](AgentBehaviorManager) is what the location-character system calls, and it forwards to these presets.
- Configured behaviours: [CautiousBehavior](CautiousBehavior), [WalkingBehavior](../campaign-ext/WalkingBehavior), [PatrolAgentBehavior](../campaign-ext/PatrolAgentBehavior), [PatrollingGuardBehavior](../campaign-ext/PatrollingGuardBehavior), [StandGuardBehavior](../campaign-ext/StandGuardBehavior), [FollowAgentBehavior](../campaign-ext/FollowAgentBehavior), [FightBehavior](../campaign-ext/FightBehavior), [FleeBehavior](../campaign-ext/FleeBehavior), [ChangeLocationBehavior](../campaign-ext/ChangeLocationBehavior).
- Bucket index: [campaign-ext API section](../)
