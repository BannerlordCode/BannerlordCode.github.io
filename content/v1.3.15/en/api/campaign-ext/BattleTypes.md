---
title: "BattleTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleTypes`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleTypes

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum BattleTypes`
**Area:** campaign-ext

## Overview

`BattleTypes` lives in `TaleWorlds.CampaignSystem.MapEvents`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapEvents` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `FieldBattle` |
| `Raid` |
| `IsForcingVolunteers` |
| `IsForcingSupplies` |
| `Siege` |
| `Hideout` |
| `SallyOut` |
| `SiegeOutside` |
| `BlockadeBattle` |

## Usage Example

```csharp
BattleTypes example = BattleTypes.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
