---
title: "BadgeDataEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BadgeDataEntry`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeDataEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeDataEntry`
**Area:** mission-ext

## Overview

`BadgeDataEntry` lives in `TaleWorlds.MountAndBlade.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### ToDictionary
`public static Dictionary<ValueTuple<PlayerId, string, string>, int> ToDictionary(List<BadgeDataEntry> entries)`

**Purpose:** Handles logic related to `to dictionary`.

### ToList
`public static List<BadgeDataEntry> ToList(Dictionary<ValueTuple<PlayerId, string, string>, int> dictionary)`

**Purpose:** Handles logic related to `to list`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
BadgeDataEntry.ToDictionary(entries);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
