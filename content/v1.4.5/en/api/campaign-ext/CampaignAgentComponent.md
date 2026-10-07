---
title: "CampaignAgentComponent"
description: "The Sandbox AgentComponent that bridges campaign-map agents to their navigator — it creates the AgentNavigator, forwards removal/stop/tick lifecycle into it, and derives the agent's morale inputs from the current MapEvent."
---

# CampaignAgentComponent

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class CampaignAgentComponent : AgentComponent`
**Base:** `TaleWorlds.MountAndBlade.AgentComponent`
**File:** `Modules.SandBox/SandBox/Sandbox/CampaignAgentComponent.cs`

## Overview

This is the single component that makes a campaign-map agent navigable. It holds the agent's `AgentNavigator` — the object that owns behaviour groups, machine targets, and the special target — creates it on demand, forwards the three lifecycle events that matter (agent removed, stop using game object, tick), and overrides two of the base `AgentComponent` morale hooks so the agent's morale reflects the battle it is standing in rather than nothing at all.

It is not a Campaign object and never enters a savegame. It is per-mission runtime state attached to one `Agent`, and it disappears with the mission.

## Mental Model

The constructor does nothing except pass the agent to `base`. Everything real happens later, and the ordering is the whole design: **the navigator is created after the agent is spawned and configured, never before.**

`CreateAgentNavigator` comes in two overloads and both assign and return. The parameterless one constructs `new AgentNavigator(Agent)` for agents that need navigation without a `LocationCharacter` visual definition; the `LocationCharacter` overload constructs `new AgentNavigator(Agent, locationCharacter)`, which carries the character definition's spawn context. Both **overwrite** the `AgentNavigator` property, whose setter is `private` — so the only way to change it is to call one of these again, and calling one twice abandons whatever the previous navigator was holding (behaviour groups, machine targets, temporary visuals) with no migration.

`OwnerParty` is the other half of the bridge, and it is a pure computation with no backing field. It reads `Agent.Origin` and returns `origin.BattleCombatant` cast to `PartyBase`. The cast is unchecked: an agent whose combatant is not a party — or an agent with no origin at all — yields `null`, and every caller has to cope. It is a live lookup, so it changes as the battle changes, and it is meaningless outside a `MapEvent`.

Both morale methods are `override`s of `AgentComponent` hooks, so they feed the engine's agent morale system. `GetMoraleDecreaseConstant` is a three-step siege-aware multiplier: `1f` if there is no owner party, no map event, or the event is not a siege assault; `0.5f` if the owner party is *not* on the map event's attacker-side party list; `0.33f` if it is. So an attacker in a siege assault bleeds morale roughly twice as fast as a defender. `GetMoraleAddition` starts at `0f` and, when a map event exists, adds `(Morale - 50f) / 2f` for a mobile party plus a relative-strength term `strength / (strength + opposing) * 10f - 5f` from `MapEvent.GetStrengthsRelativeToParty`. Neither method mutates anything — they are pure reads recomputed on every call, so the value can change between two calls in the same frame.

`OnTick` is deliberately narrow: it ticks the navigator only when **both** `Agent.Mission.AllowAiTicking` and `Agent.IsAIControlled` are true. A player-controlled agent, a mission with AI ticking disabled, or an agent with no navigator never enters the navigation loop through this component. `OnStopUsingGameObject` is guarded the same way on `IsAIControlled`.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `AgentNavigator` | `public AgentNavigator AgentNavigator { get; private set; }` | The navigable runtime state for this one agent. `null` is a legitimate state for a freshly attached component — reading it is not an error. The setter is `private`, so the only way to change it is one of the two `CreateAgentNavigator` overloads, which overwrite it outright. |
| `OwnerParty` | `public PartyBase OwnerParty` | The party this agent is fighting for, derived live from `Agent.Origin.BattleCombatant`. Not a stored assignment: it returns `null` when there is no origin, no map event, or the combatant is not a party, and it changes as the battle changes. Always null-check before reading `MapEvent`, `Side`, or `MobileParty` off it. |
| `CreateAgentNavigator(LocationCharacter)` | `public AgentNavigator CreateAgentNavigator(LocationCharacter locationCharacter)` | Builds the navigator with a character definition's visual and spawn context, assigns it, and returns it. Call it at the same point the Sandbox spawner does — after the agent has a valid mission and visual state. Calling it a second time discards the first navigator's behaviour groups and machine targets with no migration. |
| `CreateAgentNavigator()` | `public AgentNavigator CreateAgentNavigator()` | The no-context variant, for agents that need navigation but have no `LocationCharacter` definition. Same overwrite semantics. Creating a navigator does **not** register the agent, attach a Campaign behaviour, or make the agent AI-controlled. |
| `OnTick` | `public override void OnTick(float dt)` | The navigation pump, gated on `Mission.AllowAiTicking && Agent.IsAIControlled`. Do not call it manually to bypass mission pause or teardown — a released navigator will be ticked. A null navigator is skipped by the `?.`. |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | Forwards a removal notification into `AgentNavigator?.OnAgentRemoved(agent)` so behaviour groups can drop references to an agent that has left. It is a plain public method, not an override — something in the mission has to call it. |
| `OnStopUsingGameObject` | `public override void OnStopUsingGameObject()` | Clears machine-target state in the navigator, but **only when the agent is AI-controlled**. A player-controlled agent never enters the branch, so its machine state is not cleared by this path. |
| `GetMoraleDecreaseConstant` | `public override float GetMoraleDecreaseConstant()` | Returns the transient morale-drain multiplier for the current battle: `1f` normally, `0.5f` when the owner party is absent from the attacker side of a siege assault, `0.33f` when it is present. A pure read — it never changes party morale and never persists. |
| `GetMoraleAddition` | `public override float GetMoraleAddition()` | Returns a transient additive morale input: `(Morale - 50f) / 2f` for a mobile party, plus a `-5f..+5f` relative-strength term from `MapEvent.GetStrengthsRelativeToParty`. Returns `0f` with no map event. Recomputed per call, so two calls in the same frame can differ. |

## Real Example

Read the component off a live agent rather than constructing a second one — the game installs it for you:

```csharp
CampaignAgentComponent component = Agent.Main.GetComponent<CampaignAgentComponent>();
if (component != null && component.AgentNavigator != null)
{
    Debug.Print("active group = " + component.AgentNavigator.GetActiveBehaviorGroup(), 0);
}
```

Create the navigator once, after the agent has a valid mission and visual state:

```csharp
CampaignAgentComponent fresh = new CampaignAgentComponent(Agent.Main);
Agent.Main.AddComponent(fresh);
AgentNavigator navigator = fresh.CreateAgentNavigator();
Debug.Print("navigator created = " + (navigator != null), 0);
```

Read the owning party defensively — it is `null` outside a map event and the combatant cast is unchecked:

```csharp
PartyBase owner = component.OwnerParty;
if (owner != null && owner.MapEvent != null)
{
    Debug.Print("side = " + owner.Side + ", mobile = " + owner.IsMobile, 0);
}
```

Read the morale inputs this component supplies, remembering both are recomputed per call:

```csharp
Debug.Print("drain constant = " + component.GetMoraleDecreaseConstant(), 0);
Debug.Print("morale addition = " + component.GetMoraleAddition(), 0);
```

## Risks and Boundaries

- **The navigator is optional and `null` is normal.** Any code reading `AgentNavigator` must null-check; the property returns null for a freshly attached component or one that was never given a navigator.
- **`CreateAgentNavigator` overwrites without migrating.** Calling it twice abandons the first navigator's behaviour groups, machine targets, and temporary visual state. There is no dispose or handoff.
- **`OwnerParty` uses an unchecked cast.** A non-party `BattleCombatant`, or a null `Agent.Origin`, yields `null` rather than throwing. Every dereference of `MapEvent`, `Side`, or `MobileParty` off it needs a guard.
- **`OnTick` is gated twice.** Player-controlled agents and missions with `AllowAiTicking == false` are never ticked. Do not call `OnTick` manually to force navigation during a pause or after mission teardown.
- **`OnStopUsingGameObject` is gated on `IsAIControlled`.** Machine state for a player-controlled agent is not cleared through this path, which surprises people who expect symmetric teardown.
- **`OnAgentRemoved` is not an override.** It is a plain public method; nothing in the base class guarantees it gets called, so retained references to the component can outlive the agent.
- **Both morale methods are recomputed on every call and change mid-battle.** Never cache the result, and never treat them as a persistent morale delta.
- **`GetMoraleDecreaseConstant` returns three hard-coded constants** (`1f`, `0.5f`, `0.33f`). There is no model indirection, so a mod cannot tune them without replacing the component.
- **Mission-local, never serialised.** The component and its navigator are rebuilt when the mission is opened. Anything durable belongs in a Campaign behavior.
- **Do not add a duplicate component.** `Agent.AddComponent` is the only way to install one, and adding a second leaves two navigators competing for the same agent.

## Cross-version note

The v1.4.5 file is 99 lines. Both `CreateAgentNavigator` overloads, the two morale overrides with their `1f` / `0.5f` / `0.33f` constants, and the `AllowAiTicking && IsAIControlled` tick gate are all present here.

## Dependencies

- Base contract: [AgentComponent](../../mission-ext/AgentComponent) declares the morale and tick hooks this component overrides, and is what `Agent.AddComponent` accepts.
- Per-frame context: `Agent` supplies `Origin`, `Mission`, and `IsAIControlled`; [Mission](../../mission/Mission) supplies `AllowAiTicking`.
- Navigation state: [AgentNavigator](../../gameplay/AgentNavigator) is what this component creates and owns, and where behaviour groups and machine targets live.
- Presets: [BehaviorSets](../BehaviorSets) is what populates that navigator, and every preset reaches it through `GetComponent<CampaignAgentComponent>().AgentNavigator`.
- Campaign inputs: [MapEvent](../../campaign/MapEvent) supplies the siege/attacker-side context both morale methods read; [PartyBase](../../campaign/PartyBase) is the cast target of `OwnerParty`.
- Bucket index: [campaign-ext API section](../)
