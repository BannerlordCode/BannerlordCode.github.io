---
title: "ItemComponent"
description: "Auto-generated class reference for ItemComponent."
---
# ItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemComponent.cs`

## Overview

`ItemComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ItemComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; set; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; set; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ItemComponent from the subsystem API first
ItemComponent itemComponent = ...;
itemComponent.Deserialize(objectManager, node);
```

### GetCopy
`public abstract ItemComponent GetCopy()`

**Purpose:** **Purpose:** Reads and returns the copy value held by the this instance.

```csharp
// Obtain an instance of ItemComponent from the subsystem API first
ItemComponent itemComponent = ...;
var result = itemComponent.GetCopy();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemComponent instance = ...;
```

## See Also

- [Area Index](../)