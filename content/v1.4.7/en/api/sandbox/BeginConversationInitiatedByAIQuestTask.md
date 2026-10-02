---
title: "BeginConversationInitiatedByAIQuestTask"
description: "BeginConversationInitiatedByAIQuestTask — class in SandBox.Issues.IssueQuestTasks. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# BeginConversationInitiatedByAIQuestTask

**Namespace:** `SandBox.Issues.IssueQuestTasks`  
**Module:** `SandBox`  
**Type:** `public class BeginConversationInitiatedByAIQuestTask : QuestTaskBase`  
**Base:** `QuestTaskBase`  
**Source:** `SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs`

## Overview

`BeginConversationInitiatedByAIQuestTask` is a named type in the SandBox.Issues.IssueQuestTasks namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends QuestTaskBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BeginConversationInitiatedByAIQuestTask`.
- **Instance members** (3): `MissionTick`, `OnFinished`, `SetReferences`.
- **Extension points** (2): `OnFinished`, `SetReferences`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetReferences` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnFinished` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionTick` | method | Instance entry point. Takes 1 argument: `float dt`. |
| `BeginConversationInitiatedByAIQuestTask` | ctor | Instance entry point. Takes 5 arguments: `Agent agent`, `Action onSucceededAction`, `Action onFailedAction`, `Action onCanceledAction`, …. Returns ``. |

- Constructed as `public BeginConversationInitiatedByAIQuestTask(Agent agent, Action onSucceededAction, Action onFailedAction, Action onCanceledAction, DialogFlow dialogFlow = null)`.

## Usage Example

```csharp
var beginConversationInitiatedByAIQuestTask = new BeginConversationInitiatedByAIQuestTask(agent, onSucceededAction, onFailedAction, onCanceledAction, dialogFlow);
beginConversationInitiatedByAIQuestTask.MissionTick(dt);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Issues/IssueQuestTasks/BeginConversationInitiatedByAIQuestTask.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationMission](../ConversationMission/) — `SandBox.Conversation`.

Section: [api/sandbox/](../) — the other types in this bucket.
