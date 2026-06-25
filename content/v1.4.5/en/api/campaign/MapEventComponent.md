---
title: "MapEventComponent"
description: "Auto-generated class reference for MapEventComponent."
---
# MapEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapEventComponent`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventComponent.cs`

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
// Typically obtained from a subsystem API or factory
MapEventComponent instance = ...;
```

## See Also

- [Area Index](../)