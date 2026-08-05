---
title: "CampaignAgentComponent"
description: "Sandbox AgentComponent bridge for campaign ownership, AgentNavigator creation, AI ticking, and battle morale inputs."
---
# CampaignAgentComponent

**Namespace:** `SandBox`
<br>**Module:** `SandBox`
<br>**Type:** `public class CampaignAgentComponent : AgentComponent`
<br>**Base:** `AgentComponent`
<br>**File:** `Modules.SandBox/SandBox/Sandbox/CampaignAgentComponent.cs`

## One-line responsibility

`CampaignAgentComponent` is the Sandbox component attached to a live campaign [`Agent`](../../mission/Agent): it exposes the owning [`PartyBase`](../../campaign/PartyBase), creates the Agent's [`AgentNavigator`](../../gameplay/AgentNavigator), forwards removal/stop/tick lifecycle, and contributes battle morale values.

## Mental model

This component is an adapter between the engine's `AgentComponent` list and Sandbox campaign behavior. [`CampaignMissionComponent`](../CampaignMissionComponent) adds it in `OnAgentCreated`; it does not create the Agent and it is not a Campaign save object. [`MissionAgentHandler`](../MissionAgentHandler) later calls one of the `CreateAgentNavigator` overloads after the spawned Agent has been configured.

There are two layers of state:

- `AgentNavigator` is optional, Mission-local runtime state. It owns navigation targets, behavior groups, temporary prefabs, and special-item state for this one Agent.
- `OwnerParty` and the two morale methods derive current Campaign/battle context from `Agent.Origin` and its `MapEvent`. They are calculated at runtime and are not copied into the component as save fields.

The component's `OnTick` is deliberately narrow: it ticks the navigator only when `Agent.Mission.AllowAiTicking` is true and the Agent is AI-controlled. A player-controlled Agent, a paused AI phase, or an Agent without a navigator does not enter the navigation loop through this component.

## When to use and when not to use

**Use it when:**

- A mod already has a live campaign Agent and needs to read its Sandbox navigator or owning party.
- A custom Sandbox mission creates an Agent that intentionally needs a fresh `AgentNavigator`.
- You need to observe the exact morale inputs the Sandbox component supplies to the Agent system during a map battle or siege assault.
- A component/lifecycle callback must forward Agent removal or stop-using-game-object events to the navigator.

**Do not use it when:**

- You need to create an Agent, party, Hero, or Campaign entity. Use the owning Mission spawn path or Campaign API.
- You need durable party morale or campaign state. These methods calculate transient Agent inputs; store persistent state in a Campaign behavior and use the relevant model/action contract.
- You need generic Agent navigation. Only campaign Agents with this component have the Sandbox navigator bridge.
- You need to replace a navigator during normal play. `CreateAgentNavigator` overwrites the property and abandons the previous navigator's behavior groups and targets.
- You need to tick AI manually. Let the component's `OnTick` and the Mission lifecycle provide the normal cadence.

## Dependency graph

**Upstream:**

- [`CampaignMissionComponent`](../CampaignMissionComponent) calls `Agent.AddComponent(new CampaignAgentComponent(agent))` in the campaign mission `OnAgentCreated` path.
- [`MissionAgentHandler`](../MissionAgentHandler) creates a navigator after spawning/configuring a location-character Agent.
- [`Agent`](../../mission/Agent) supplies `Mission`, `Origin`, AI-control state, and component ownership.
- [`LocationCharacter`](../../campaign/LocationCharacter) supplies optional visual and behavior context to the location-character navigator overload.

**Downstream:**

- [`AgentNavigator`](../../gameplay/AgentNavigator) receives the live Agent and Mission and owns navigation/behavior-group runtime state.
- [`Mission`](../../mission/Mission) gates AI ticking and owns the Agent's scene lifetime.
- [`PartyBase`](../../campaign/PartyBase) and [`MapEvent`](../../campaign/MapEvent) provide owner, siege, side, and relative-strength inputs for morale calculations.
- Sandbox behaviors and Mission handlers read `AgentNavigator` through `agent.GetComponent<CampaignAgentComponent>()`.

## Real acquisition path

The component is installed by the game; a mod should read it from the Agent rather than construct a second component:

```csharp
using SandBox;
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.MountAndBlade;

Agent agent = Agent.Main;
CampaignAgentComponent component =
    agent?.GetComponent<CampaignAgentComponent>();

if (component != null)
{
    AgentNavigator navigator = component.AgentNavigator;
    PartyBase ownerParty = component.OwnerParty;
    if (navigator != null)
    {
        AgentBehaviorGroup activeGroup =
            navigator.GetActiveBehaviorGroup();
    }
}
```

The component is only guaranteed after the campaign mission component has handled Agent creation. For a custom Agent spawn path that intentionally has no navigator yet, call `component.CreateAgentNavigator()` once after the Agent has a valid Mission and visual state; do not do this from a constructor or before Mission initialization.

## Public state

### `AgentNavigator`

`public AgentNavigator AgentNavigator { get; private set; }` returns the optional navigator created for this component. The setter is private; reading `null` is a valid state for a newly attached or intentionally minimal campaign Agent. The property is replaced by either `CreateAgentNavigator` overload.

### `OwnerParty`

`public PartyBase OwnerParty { get; }` reads `Agent.Origin.BattleCombatant` and casts it to `PartyBase`. It can be `null` when the Agent has no origin, has a non-party combatant, or is outside the Campaign party path. Do not treat it as a durable ownership assignment or cache it after Agent removal.

## Navigator creation and lifecycle

### `CreateAgentNavigator(LocationCharacter locationCharacter)`

Constructs `new AgentNavigator(Agent, locationCharacter)`, assigns it to `AgentNavigator`, and returns it. The location-character overload transfers special target tag, bone prefab map, special item, and alley context before applying the navigator's initial visual/equipment setup.

Use it at the same point as Sandbox's `MissionAgentHandler`, after the Agent's scene visuals and `LocationCharacter` data are ready. Calling it again replaces the old navigator without first migrating behavior groups, machine targets, or temporary visual state.

### `CreateAgentNavigator()`

Constructs `new AgentNavigator(Agent)`, assigns it to `AgentNavigator`, and returns it with an empty location-character context. Sandbox uses this overload for Agents that need behavior/navigation but do not come from a `LocationCharacter` visual definition.

The returned object is still Mission-local. Creating it does not register a new Agent, attach a Campaign behavior, or make the Agent AI-controlled.

### `OnAgentRemoved(Agent agent)`

Forwards the removed-Agent notification to `AgentNavigator?.OnAgentRemoved(agent)`. It exists so behavior groups can release runtime target references when any relevant Agent leaves the Mission. The component does not save or resurrect removed Agents.

### `OnStopUsingGameObject()`

When the owner is AI-controlled, forwards the stop-using-game-object event to `AgentNavigator?.OnStopUsingGameObject()`. Player-controlled Agents do not enter this forwarding branch. The callback clears machine target state in the navigator; it is not a general reset for every behavior group.

### `OnTick(float dt)`

Overrides `AgentComponent.OnTick`. It calls `AgentNavigator?.Tick(dt)` only when both `Agent.Mission.AllowAiTicking` and `Agent.IsAIControlled` are true. It does not tick a null navigator, and it does not run the navigator for a player-controlled Agent.

Do not call this method manually to bypass Mission pause/end state. If a custom simulation needs a different cadence, own that simulation explicitly and keep it separate from the normal Agent component lifecycle.

## Morale inputs

### `GetMoraleDecreaseConstant()`

Returns the transient Agent morale-decrease multiplier derived from the owner's current `MapEvent`:

- Returns `1f` when there is no owner party, no map event, or the event is not a siege assault.
- Returns `0.5f` when the owner party is not found on the map event's attacker-side party list.
- Returns `0.33f` when the owner party is on that attacker-side list.

The method does not change party morale and does not persist the result. It is an input used by the Agent morale system while the current battle context exists.

### `GetMoraleAddition()`

Returns a transient additive value based on the current `MapEvent`:

- Returns `0f` when the owner party has no map event.
- For an active event, adds `(OwnerParty.MobileParty.Morale - 50f) / 2f` when the party is mobile.
- Adds `relativeStrength / (relativeStrength + opposingStrength) * 10f - 5f`, using `MapEvent.GetStrengthsRelativeToParty(OwnerParty.Side, ...)`.

It reads current party/event values and has no save or mutation side effect. It can change between calls as the battle and party morale change.

## Risks and crash boundaries

- Constructing `CampaignAgentComponent` directly does not install it into an Agent. Use the host's `Agent.AddComponent` path only when owning a custom Agent-creation flow; do not add duplicate components to an existing Agent.
- `AgentNavigator` is nullable and is replaced by `CreateAgentNavigator`. Calling the creation method twice can abandon an active machine detachment, behavior-group state, or native visual component references.
- `OwnerParty` depends on `Agent.Origin` and the current combatant type. Always null-check it before reading `MapEvent`, `Side`, or `MobileParty`.
- `GetMoraleDecreaseConstant` and `GetMoraleAddition` are runtime reads. Do not invoke them from save code and do not treat their result as a persistent morale change.
- `OnTick` must remain under the Agent/Mission lifecycle gate. Manual ticking during a paused, ending, or removed Mission can access released AgentNavigator state or duplicate native movement work.
- `OnAgentRemoved` and `OnStopUsingGameObject` forward into native/runtime state. Delayed callbacks that retain the component after Agent removal must stop using its navigator.
- The component does not provide a `SyncData` contract. Save Campaign state in a registered Campaign behavior and recreate Mission Agent components/navigators when a new Mission is opened.

## See also and reciprocal navigation

- ↑ Parent: [Campaign extension module index](../)
- ↔ Navigator: [AgentNavigator](../../gameplay/AgentNavigator) · [CampaignMissionComponent](../CampaignMissionComponent)
- Agent lifecycle: [Agent](../../mission/Agent) · [Mission](../../mission/Mission) · [MissionAgentHandler](../MissionAgentHandler)
- Campaign context: [PartyBase](../../campaign/PartyBase) · [MapEvent](../../campaign/MapEvent) · [LocationCharacter](../../campaign/LocationCharacter)
- Documentation contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [CampaignAgentComponent](../../../../zh/api/campaign-ext/CampaignAgentComponent)
