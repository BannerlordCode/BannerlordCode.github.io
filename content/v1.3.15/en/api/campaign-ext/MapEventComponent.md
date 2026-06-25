---
title: "MapEventComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapEventComponent`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs`

## Overview

`MapEventComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MapEventComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `SimulationContext` | `public abstract MapEvent.PowerCalculationContext SimulationContext { get; }` |

## Usage Example

```csharp
var implementation = new CustomMapEventComponent();
```

## See Also

- [Complete Class Catalog](../catalog)