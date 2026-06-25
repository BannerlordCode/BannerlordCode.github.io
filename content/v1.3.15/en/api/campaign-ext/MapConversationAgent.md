---
title: "MapConversationAgent"
description: "Auto-generated class reference for MapConversationAgent."
---
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

**Purpose:** Determines whether the this instance is in the enemy of state or condition.

```csharp
// Obtain an instance of MapConversationAgent from the subsystem API first
MapConversationAgent mapConversationAgent = ...;
var result = mapConversationAgent.IsEnemyOf(agent);
```

### IsFriendOf
`public bool IsFriendOf(IAgent agent)`

**Purpose:** Determines whether the this instance is in the friend of state or condition.

```csharp
// Obtain an instance of MapConversationAgent from the subsystem API first
MapConversationAgent mapConversationAgent = ...;
var result = mapConversationAgent.IsFriendOf(agent);
```

### IsActive
`public bool IsActive()`

**Purpose:** Determines whether the this instance is in the active state or condition.

```csharp
// Obtain an instance of MapConversationAgent from the subsystem API first
MapConversationAgent mapConversationAgent = ...;
var result = mapConversationAgent.IsActive();
```

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**Purpose:** Assigns a new value to as conversation agent and updates the object's internal state.

```csharp
// Obtain an instance of MapConversationAgent from the subsystem API first
MapConversationAgent mapConversationAgent = ...;
mapConversationAgent.SetAsConversationAgent(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapConversationAgent mapConversationAgent = ...;
mapConversationAgent.IsEnemyOf(agent);
```

## See Also

- [Area Index](../)