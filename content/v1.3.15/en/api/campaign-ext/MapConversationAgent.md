---
title: "MapConversationAgent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationAgent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapConversationAgent

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapConversationAgent : IAgent`
**Base:** `IAgent`
**File:** `TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs`

## Overview

`MapConversationAgent` lives in `TaleWorlds.CampaignSystem.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `State` | `public AgentState State { get; }` |
| `Team` | `public IMissionTeam Team { get; }` |
| `Origin` | `public IAgentOriginBase Origin { get; set; }` |
| `Age` | `public float Age { get; set; }` |

## Key Methods

### IsEnemyOf
`public bool IsEnemyOf(IAgent agent)`

**Purpose:** Handles logic related to `is enemy of`.

### IsFriendOf
`public bool IsFriendOf(IAgent agent)`

**Purpose:** Handles logic related to `is friend of`.

### IsActive
`public bool IsActive()`

**Purpose:** Handles logic related to `is active`.

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**Purpose:** Sets the value or state of `as conversation agent`.

## Usage Example

```csharp
var value = new MapConversationAgent();
value.IsEnemyOf(agent);
```

## See Also

- [Complete Class Catalog](../catalog)