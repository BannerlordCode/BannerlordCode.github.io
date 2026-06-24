<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptions`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptions`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignOptions.cs`

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
| `PlayerTroopsReceivedDamage` | `public static CampaignOptions.Difficulty PlayerTroopsReceivedDamage { get; }` |
| `PlayerReceivedDamage` | `public static CampaignOptions.Difficulty PlayerReceivedDamage { get; }` |
| `RecruitmentDifficulty` | `public static CampaignOptions.Difficulty RecruitmentDifficulty { get; }` |
| `PlayerMapMovementSpeed` | `public static CampaignOptions.Difficulty PlayerMapMovementSpeed { get; }` |
| `StealthAndDisguiseDifficulty` | `public static CampaignOptions.Difficulty StealthAndDisguiseDifficulty { get; }` |
| `CombatAIDifficulty` | `public static CampaignOptions.Difficulty CombatAIDifficulty { get; }` |
| `PersuasionSuccessChance` | `public static CampaignOptions.Difficulty PersuasionSuccessChance { get; }` |
| `ClanMemberDeathChance` | `public static CampaignOptions.Difficulty ClanMemberDeathChance { get; }` |
| `BattleDeath` | `public static CampaignOptions.Difficulty BattleDeath { get; }` |

## Usage Example

```csharp
var example = new CampaignOptions();
```

## See Also

- [Complete Class Catalog](../catalog)