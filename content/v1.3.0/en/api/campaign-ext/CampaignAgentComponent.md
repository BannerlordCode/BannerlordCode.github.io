---
title: "CampaignAgentComponent"
description: "Auto-generated class reference for CampaignAgentComponent."
---
# CampaignAgentComponent

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `SandBox/CampaignAgentComponent.cs`

## Overview

`CampaignAgentComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CampaignAgentComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentNavigator` | `public AgentNavigator AgentNavigator { get; }` |
| `OwnerParty` | `public PartyBase OwnerParty { get; }` |

## Key Methods

### CreateAgentNavigator
`public AgentNavigator CreateAgentNavigator(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Constructs a new agent navigator entity and returns it to the caller.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.CreateAgentNavigator(locationCharacter);
```

### CreateAgentNavigator
`public AgentNavigator CreateAgentNavigator()`

**Purpose:** **Purpose:** Constructs a new agent navigator entity and returns it to the caller.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.CreateAgentNavigator();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
campaignAgentComponent.OnAgentRemoved(agent);
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
campaignAgentComponent.OnTick(0);
```

### GetMoraleDecreaseConstant
`public override float GetMoraleDecreaseConstant()`

**Purpose:** **Purpose:** Reads and returns the morale decrease constant value held by the this instance.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.GetMoraleDecreaseConstant();
```

### GetMoraleAddition
`public override float GetMoraleAddition()`

**Purpose:** **Purpose:** Reads and returns the morale addition value held by the this instance.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.GetMoraleAddition();
```

### OnStopUsingGameObject
`public override void OnStopUsingGameObject()`

**Purpose:** **Purpose:** Invoked when the stop using game object event is raised.

```csharp
// Obtain an instance of CampaignAgentComponent from the subsystem API first
CampaignAgentComponent campaignAgentComponent = ...;
campaignAgentComponent.OnStopUsingGameObject();
```

## Usage Example

```csharp
var component = agent.GetComponent<CampaignAgentComponent>();
```

## See Also

- [Area Index](../)