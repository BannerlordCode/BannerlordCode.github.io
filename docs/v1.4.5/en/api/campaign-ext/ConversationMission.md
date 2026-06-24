<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationMission`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationMission

**Namespace:** SandBox.Conversation
**Module:** SandBox.Conversation
**Type:** `public static class ConversationMission`
**Area:** campaign-ext

## Overview

`ConversationMission` lives in `SandBox.Conversation`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Handles logic related to `start conversation with agent`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ConversationMission.StartConversationWithAgent(agent);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
