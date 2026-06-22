<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemComponent.cs`

## Overview

`ItemComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ItemComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; set; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; protected set; }` |

## Key Methods

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetCopy
```csharp
public abstract ItemComponent GetCopy()
```

## Usage Example

```csharp
// Typical usage of ItemComponent (Component)
agent.GetComponent<ItemComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)