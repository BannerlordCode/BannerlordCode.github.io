---
title: "BattleSimulationResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSimulationResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleSimulationResult

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BattleSimulationResult`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/BattleSimulationResult.cs`

## Overview

`BattleSimulationResult` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopDescriptor` | `public UniqueTroopDescriptor TroopDescriptor { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `TroopProperty` | `public TroopProperty TroopProperty { get; }` |

## Usage Example

```csharp
var value = new BattleSimulationResult();
```

## See Also

- [Complete Class Catalog](../catalog)