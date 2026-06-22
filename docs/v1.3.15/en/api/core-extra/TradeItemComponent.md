<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeItemComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TradeItemComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/TradeItemComponent.cs`

## Overview

`TradeItemComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<TradeItemComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### GetCopy
```csharp
public override ItemComponent GetCopy()
```

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## Usage Example

```csharp
// Typical usage of TradeItemComponent (Component)
agent.GetComponent<TradeItemComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)