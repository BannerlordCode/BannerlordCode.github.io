---
title: "Badge"
description: "Auto-generated class reference for Badge."
---
# Badge

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Badge`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs`

## Overview

`Badge` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Type` | `public BadgeType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `IsVisibleOnlyWhenEarned` | `public bool IsVisibleOnlyWhenEarned { get; }` |
| `PeriodStart` | `public DateTime PeriodStart { get; }` |
| `PeriodEnd` | `public DateTime PeriodEnd { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsTimed` | `public bool IsTimed { get; }` |

## Key Methods

### Deserialize
`public virtual void Deserialize(XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Badge from the subsystem API first
Badge badge = ...;
badge.Deserialize(node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Badge badge = ...;
badge.Deserialize(node);
```

## See Also

- [Area Index](../)