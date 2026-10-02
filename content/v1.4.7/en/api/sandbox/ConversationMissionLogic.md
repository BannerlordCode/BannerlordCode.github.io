---
title: "ConversationMissionLogic"
description: "ConversationMissionLogic — class in SandBox.Conversation.MissionLogics. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# ConversationMissionLogic

**Namespace:** `SandBox.Conversation.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class ConversationMissionLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs`

## Overview

`ConversationMissionLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConversationMissionLogic`.
- **Instance members** (7): `OtherSideConversationData`, `PlayerConversationData`, `IsMultiAgentConversation`, `AfterStart`, `OnRenderingStarted`, `OnMissionTick`, ….
- **Extension points** (4): `AfterStart`, `OnRenderingStarted`, `OnMissionTick`, `OnEndMission`.
- **Data and constants** (1): `CustomConversationCameraEntity`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRenderingStarted` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsMultiAgentConversation` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OtherSideConversationData` | property | Instance entry point `ConversationCharacterData` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerConversationData` | property | Instance entry point `ConversationCharacterData` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationMissionLogic` | ctor | Instance entry point. Takes 3 arguments: `ConversationCharacterData playerCharacterData`, `ConversationCharacterData otherCharacterData`, `bool isMultiAgentConversation`. Returns ``. |
| `CustomConversationCameraEntity` | field | Instance entry point `GameEntity` field — direct storage with no validation or notification. |

- Constructed as `public ConversationMissionLogic(ConversationCharacterData playerCharacterData, ConversationCharacterData otherCharacterData, bool isMultiAgentConversation)`.

## Usage Example

```csharp
public class MyConversationMissionLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyConversationMissionLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Conversation/MissionLogics/ConversationMissionLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationCharacterData](../../campaign-ext/ConversationCharacterData/) — `TaleWorlds.CampaignSystem.Conversation`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [PartyAgentOrigin](../../campaign/PartyAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [FlattenedTroopRoster](../../campaign/FlattenedTroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.

Section: [api/sandbox/](../) — the other types in this bucket.
