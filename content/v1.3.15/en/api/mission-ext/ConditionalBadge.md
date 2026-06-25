---
title: "ConditionalBadge"
description: "Auto-generated class reference for ConditionalBadge."
---
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

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of ConditionalBadge from the subsystem API first
ConditionalBadge conditionalBadge = ...;
conditionalBadge.Deserialize(node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ConditionalBadge conditionalBadge = ...;
conditionalBadge.Deserialize(node);
```

## See Also

- [Area Index](../)