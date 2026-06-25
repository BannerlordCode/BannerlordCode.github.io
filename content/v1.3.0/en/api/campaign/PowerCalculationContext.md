---
title: "PowerCalculationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PowerCalculationContext`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PowerCalculationContext

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PowerCalculationContext`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## Overview

`PowerCalculationContext` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
PowerCalculationContext example = PowerCalculationContext.Value;
```

## See Also

- [Complete Class Catalog](../catalog)