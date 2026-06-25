---
title: "BarterGroup"
description: "Auto-generated class reference for BarterGroup."
---
# BarterGroup

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterGroup`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterGroup.cs`

## Overview

`BarterGroup` lives in `TaleWorlds.CampaignSystem.BarterSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AIDecisionWeight` | `public abstract float AIDecisionWeight { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BarterGroup instance = ...;
```

## See Also

- [Area Index](../)