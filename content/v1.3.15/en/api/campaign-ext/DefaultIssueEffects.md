---
title: "DefaultIssueEffects"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultIssueEffects`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIssueEffects

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueEffects`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/DefaultIssueEffects.cs`

## Overview

`DefaultIssueEffects` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementLoyalty` | `public static IssueEffect SettlementLoyalty { get; }` |
| `SettlementSecurity` | `public static IssueEffect SettlementSecurity { get; }` |
| `SettlementMilitia` | `public static IssueEffect SettlementMilitia { get; }` |
| `SettlementProsperity` | `public static IssueEffect SettlementProsperity { get; }` |
| `VillageHearth` | `public static IssueEffect VillageHearth { get; }` |
| `SettlementFood` | `public static IssueEffect SettlementFood { get; }` |
| `SettlementTax` | `public static IssueEffect SettlementTax { get; }` |
| `SettlementGarrison` | `public static IssueEffect SettlementGarrison { get; }` |
| `HalfVillageProduction` | `public static IssueEffect HalfVillageProduction { get; }` |
| `IssueOwnerPower` | `public static IssueEffect IssueOwnerPower { get; }` |
| `ClanInfluence` | `public static IssueEffect ClanInfluence { get; }` |

## Usage Example

```csharp
var value = new DefaultIssueEffects();
```

## See Also

- [Complete Class Catalog](../catalog)