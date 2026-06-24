<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignAgentComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `agent navigator` instance or object.

### CreateAgentNavigator
`public AgentNavigator CreateAgentNavigator()`

**Purpose:** Creates a new `agent navigator` instance or object.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### GetMoraleDecreaseConstant
`public override float GetMoraleDecreaseConstant()`

**Purpose:** Gets the current value of `morale decrease constant`.

### GetMoraleAddition
`public override float GetMoraleAddition()`

**Purpose:** Gets the current value of `morale addition`.

### OnStopUsingGameObject
`public override void OnStopUsingGameObject()`

**Purpose:** Called when the `stop using game object` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<CampaignAgentComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)