---
title: "CampaignOptions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptions`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignOptions.cs`

## Overview

`CampaignOptions` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLifeDeathCycleDisabled` | `public static bool IsLifeDeathCycleDisabled { get; set; }` |
| `AutoAllocateClanMemberPerks` | `public static bool AutoAllocateClanMemberPerks { get; set; }` |
| `IsIronmanMode` | `public static bool IsIronmanMode { get; set; }` |
| `PlayerTroopsReceivedDamage` | `public static Difficulty PlayerTroopsReceivedDamage { get; set; }` |
| `RecruitmentDifficulty` | `public static Difficulty RecruitmentDifficulty { get; set; }` |
| `PlayerMapMovementSpeed` | `public static Difficulty PlayerMapMovementSpeed { get; set; }` |
| `StealthAndDisguiseDifficulty` | `public static Difficulty StealthAndDisguiseDifficulty { get; set; }` |
| `CombatAIDifficulty` | `public static Difficulty CombatAIDifficulty { get; set; }` |
| `PersuasionSuccessChance` | `public static Difficulty PersuasionSuccessChance { get; set; }` |
| `ClanMemberDeathChance` | `public static Difficulty ClanMemberDeathChance { get; set; }` |
| `BattleDeath` | `public static Difficulty BattleDeath { get; set; }` |

## Usage Example

```csharp
var example = new CampaignOptions();
```

## See Also

- [Complete Class Catalog](../catalog)