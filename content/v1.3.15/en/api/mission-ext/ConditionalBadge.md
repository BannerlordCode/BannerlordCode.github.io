---
title: "ConditionalBadge"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConditionalBadge`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConditionalBadge

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConditionalBadge : Badge`
**Base:** `Badge`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/ConditionalBadge.cs`

## Overview

`ConditionalBadge` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BadgeConditions` | `public IReadOnlyList<BadgeCondition> BadgeConditions { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new ConditionalBadge();
value.Deserialize(node);
```

## See Also

- [Complete Class Catalog](../catalog)