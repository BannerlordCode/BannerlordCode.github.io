---
title: "HighlightType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HighlightType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HighlightType

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct HighlightType`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

`HighlightType` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |

## Usage Example

```csharp
var example = new HighlightType();
```

## See Also

- [Complete Class Catalog](../catalog)