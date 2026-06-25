---
title: "SiegeEngineConstructionProgress"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEngineConstructionProgress`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEngineConstructionProgress

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEngineConstructionProgress`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## Overview

`SiegeEngineConstructionProgress` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public SiegeEvent.RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `IsConstructed` | `public bool IsConstructed { get; }` |
| `IsBeingRedeployed` | `public bool IsBeingRedeployed { get; }` |

## Key Methods

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**Purpose:** Sets the value or state of `redeployment progress`.

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**Purpose:** Sets the value or state of `hitpoints`.

### SetProgress
`public void SetProgress(float progress)`

**Purpose:** Sets the value or state of `progress`.

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(SiegeEvent.RangedSiegeEngine rangedSiegeEngine)`

**Purpose:** Sets the value or state of `ranged siege engine`.

## Usage Example

```csharp
var value = new SiegeEngineConstructionProgress();
value.SetRedeploymentProgress(0);
```

## See Also

- [Complete Class Catalog](../catalog)