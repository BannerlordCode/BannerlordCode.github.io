---
title: "BattleTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleTypes`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleTypes

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum BattleTypes`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## Overview

`BattleTypes` lives in `TaleWorlds.CampaignSystem.MapEvents` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
BattleTypes example = BattleTypes.Value;
```

## See Also

- [Complete Class Catalog](../catalog)