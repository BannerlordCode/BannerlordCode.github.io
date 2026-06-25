---
title: "BadgeDataEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BadgeDataEntry`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BadgeDataEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeDataEntry`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs`

## Overview

`BadgeDataEntry` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BadgeId` | `public string BadgeId { get; set; }` |
| `ConditionId` | `public string ConditionId { get; set; }` |
| `Count` | `public int Count { get; set; }` |

## Key Methods

### ToList
`public static List<BadgeDataEntry> ToList(Dictionary<(PlayerId, string, string), int> dictionary)`

**Purpose:** Handles logic related to `to list`.

## Usage Example

```csharp
BadgeDataEntry.ToList(dictionary<(PlayerId, "example", "example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)