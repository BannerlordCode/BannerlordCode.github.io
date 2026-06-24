<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentBehaviorManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentBehaviorManager

**Namespace:** SandBox.AI
**Module:** SandBox.AI
**Type:** `public class AgentBehaviorManager : IAgentBehaviorManager`
**Base:** `IAgentBehaviorManager`
**File:** `SandBox/AI/AgentBehaviorManager.cs`

## Overview

`AgentBehaviorManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `AgentBehaviorManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddQuestCharacterBehaviors
`public void AddQuestCharacterBehaviors(IAgent agent)`

**Purpose:** Adds `quest character behaviors` to the current collection or state.

### AddFirstCompanionBehavior
`public void AddFirstCompanionBehavior(IAgent agent)`

**Purpose:** Adds `first companion behavior` to the current collection or state.

## Usage Example

```csharp
var manager = AgentBehaviorManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)