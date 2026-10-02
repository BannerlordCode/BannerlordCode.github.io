---
title: "ConversationMission"
description: "ConversationMission — class in SandBox.Conversation. 5 public members (5 static)."
---

<!-- v147-skeleton -->
# ConversationMission

**Namespace:** `SandBox.Conversation`  
**Module:** `SandBox`  
**Type:** `public static class ConversationMission`  
**Source:** `SandBox/Conversation/ConversationMission.cs`

## Overview

`ConversationMission` is a named type in the SandBox.Conversation namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (5): `OneToOneConversationAgent`, `OneToOneConversationCharacter`, `CurrentSpeakerAgent`, `ConversationAgents`, `StartConversationWithAgent`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ConversationAgents` | property (static) | Static entry point `IEnumerable<Agent>` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentSpeakerAgent` | property (static) | Static entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `OneToOneConversationAgent` | property (static) | Static entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `OneToOneConversationCharacter` | property (static) | Static entry point `CharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `StartConversationWithAgent` | method (static) | Static entry point. Takes 1 argument: `Agent agent`. |

## Usage Example

```csharp
// Static entry points on ConversationMission:
ConversationMission.StartConversationWithAgent(agent);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/Conversation/ConversationMission.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [MissionConversationLogic](../MissionConversationLogic/) — `SandBox.Conversation.MissionLogics`.

Section: [api/sandbox/](../) — the other types in this bucket.
