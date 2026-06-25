---
title: "BadgeCondition"
description: "Auto-generated class reference for BadgeCondition."
---
# BadgeCondition

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeCondition`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/BadgeCondition.cs`

## Overview

`BadgeCondition` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public ConditionType Type { get; }` |
| `GroupType` | `public ConditionGroupType GroupType { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `StringId` | `public string StringId { get; }` |
| `Parameters` | `public IReadOnlyDictionary<string, string> Parameters { get; }` |

## Key Methods

### Check
`public bool Check(string value)`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of BadgeCondition from the subsystem API first
BadgeCondition badgeCondition = ...;
var result = badgeCondition.Check("example");
```

### Check
`public bool Check(int value)`

**Purpose:** Verifies whether the current object meets the specified condition.

```csharp
// Obtain an instance of BadgeCondition from the subsystem API first
BadgeCondition badgeCondition = ...;
var result = badgeCondition.Check(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BadgeCondition badgeCondition = ...;
badgeCondition.Check("example");
```

## See Also

- [Area Index](../)