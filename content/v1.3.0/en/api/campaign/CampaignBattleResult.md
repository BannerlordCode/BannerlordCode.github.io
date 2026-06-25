---
title: "CampaignBattleResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignBattleResult`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignBattleResult

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBattleResult`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encounters/CampaignBattleResult.cs`

## Overview

`CampaignBattleResult` lives in `TaleWorlds.CampaignSystem.Encounters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encounters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeat` | `public bool PlayerDefeat { get; }` |
| `EnemyPulledBack` | `public bool EnemyPulledBack { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |

## Key Methods

### GetResult
`public static CampaignBattleResult GetResult(BattleState winnerSide, bool enemyRetreated = false)`

**Purpose:** Gets the current value of `result`.

## Usage Example

```csharp
CampaignBattleResult.GetResult(winnerSide, false);
```

## See Also

- [Complete Class Catalog](../catalog)