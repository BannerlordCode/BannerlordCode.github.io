---
title: "ArenaDuelQuestTask"
description: "ArenaDuelQuestTask — class in SandBox.Issues.IssueQuestTasks. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# ArenaDuelQuestTask

**Namespace:** `SandBox.Issues.IssueQuestTasks`  
**Module:** `SandBox`  
**Type:** `public class ArenaDuelQuestTask : QuestTaskBase`  
**Base:** `QuestTaskBase`  
**Source:** `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs`

## Overview

`ArenaDuelQuestTask` is a named type in the SandBox.Issues.IssueQuestTasks namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends QuestTaskBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArenaDuelQuestTask`.
- **Instance members** (4): `AfterStart`, `SetReferences`, `OnGameMenuOpened`, `MissionTick`.
- **Extension points** (1): `SetReferences`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetReferences` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `AfterStart` | method | Instance entry point. Takes 1 argument: `IMission mission`. |
| `MissionTick` | method | Instance entry point. Takes 1 argument: `float dt`. |
| `OnGameMenuOpened` | method | Instance entry point. Takes 1 argument: `MenuCallbackArgs args`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ArenaDuelQuestTask` | ctor | Instance entry point. Takes 5 arguments: `CharacterObject duelOpponentCharacter`, `Settlement settlement`, `Action onSucceededAction`, `Action onFailedAction`, …. Returns ``. |

- Constructed as `public ArenaDuelQuestTask(CharacterObject duelOpponentCharacter, Settlement settlement, Action onSucceededAction, Action onFailedAction, DialogFlow dialogFlow = null)`.

## Usage Example

```csharp
var arenaDuelQuestTask = new ArenaDuelQuestTask(duelOpponentCharacter, settlement, onSucceededAction, onFailedAction, dialogFlow);
arenaDuelQuestTask.AfterStart(mission);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Issues/IssueQuestTasks/ArenaDuelQuestTask.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior/) — `SandBox.Missions.MissionLogics.Arena`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
