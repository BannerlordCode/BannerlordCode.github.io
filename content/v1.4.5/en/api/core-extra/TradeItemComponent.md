---
title: "TradeItemComponent"
description: "Auto-generated class reference for TradeItemComponent."
---
# TradeItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TradeItemComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TradeItemComponent.cs`

## Overview

`TradeItemComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `TradeItemComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MoraleBonus` | `public int MoraleBonus { get; }` |

## Key Methods

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** **Purpose:** Reads and returns the copy value held by the this instance.

```csharp
// Obtain an instance of TradeItemComponent from the subsystem API first
TradeItemComponent tradeItemComponent = ...;
var result = tradeItemComponent.GetCopy();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of TradeItemComponent from the subsystem API first
TradeItemComponent tradeItemComponent = ...;
tradeItemComponent.Deserialize(objectManager, node);
```

## Usage Example

```csharp
var component = agent.GetComponent<TradeItemComponent>();
```

## See Also

- [Area Index](../)