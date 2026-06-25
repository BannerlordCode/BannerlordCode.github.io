---
title: "AtmosphereGrid"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AtmosphereGrid`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AtmosphereGrid

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AtmosphereGrid`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/AtmosphereGrid.cs`

## Overview

`AtmosphereGrid` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetInterpolatedStateInfo
`public AtmosphereState GetInterpolatedStateInfo(Vec3 pos)`

**Purpose:** Gets the current value of `interpolated state info`.

## Usage Example

```csharp
var value = new AtmosphereGrid();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)