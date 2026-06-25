---
title: "ConversationMission"
description: "Auto-generated class reference for ConversationMission."
---
# ConversationMission

**Namespace:** SandBox.Conversation
**Module:** SandBox.Conversation
**Type:** `public static class ConversationMission`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Conversation/ConversationMission.cs`

## Overview

`ConversationMission` lives in `SandBox.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OneToOneConversationAgent` | `public static Agent OneToOneConversationAgent { get; }` |
| `CurrentSpeakerAgent` | `public static Agent CurrentSpeakerAgent { get; }` |
| `ConversationAgents` | `public static IEnumerable<Agent> ConversationAgents { get; }` |

## Key Methods

### StartConversationWithAgent
`public static void StartConversationWithAgent(Agent agent)`

**Purpose:** Starts the conversation with agent flow or state machine.

```csharp
// Static call; no instance required
ConversationMission.StartConversationWithAgent(agent);
```

## Usage Example

```csharp
ConversationMission.StartConversationWithAgent(agent);
```

## See Also

- [Area Index](../)