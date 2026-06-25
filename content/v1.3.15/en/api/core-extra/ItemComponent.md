---
title: "ItemComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemComponent : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemComponent.cs`

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

**Purpose:** Handles logic related to `deserialize`.

### GetCopy
`public abstract ItemComponent GetCopy()`

**Purpose:** Gets the current value of `copy`.

## Usage Example

```csharp
var implementation = new CustomItemComponent();
```

## See Also

- [Complete Class Catalog](../catalog)