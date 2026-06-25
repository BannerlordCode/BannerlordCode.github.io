---
title: "BannerBearerCondition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBearerCondition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBearerCondition

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBearerCondition : MPPerkCondition`
**Base:** `MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs`

## Overview

`BannerBearerCondition` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsPeerCondition` | `public override bool IsPeerCondition { get; }` |

## Key Methods

### Check
`public override bool Check(MissionPeer peer)`

**Purpose:** Handles logic related to `check`.

### Check
`public override bool Check(Agent agent)`

**Purpose:** Handles logic related to `check`.

## Usage Example

```csharp
var value = new BannerBearerCondition();
value.Check(peer);
```

## See Also

- [Complete Class Catalog](../catalog)