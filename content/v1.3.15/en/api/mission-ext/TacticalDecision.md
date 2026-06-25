---
title: "TacticalDecision"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticalDecision`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticalDecision

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TacticalDecision`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TacticalDecision.cs`

## Overview

`TacticalDecision` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DecidingComponent` | `public TacticComponent DecidingComponent { get; }` |
| `DecisionCode` | `public byte DecisionCode { get; }` |
| `SubjectFormation` | `public Formation SubjectFormation { get; }` |
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `TargetPosition` | `public WorldPosition? TargetPosition { get; }` |
| `TargetObject` | `public MissionObject TargetObject { get; }` |

## Usage Example

```csharp
var value = new TacticalDecision();
```

## See Also

- [Complete Class Catalog](../catalog)