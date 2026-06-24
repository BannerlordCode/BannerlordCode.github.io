<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Leadership`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Leadership

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Leadership`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Leadership` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CombatTips` | `public static PerkObject CombatTips { get; }` |
| `RaiseTheMeek` | `public static PerkObject RaiseTheMeek { get; }` |
| `FerventAttacker` | `public static PerkObject FerventAttacker { get; }` |
| `StoutDefender` | `public static PerkObject StoutDefender { get; }` |
| `Authority` | `public static PerkObject Authority { get; }` |
| `HeroicLeader` | `public static PerkObject HeroicLeader { get; }` |
| `LoyaltyAndHonor` | `public static PerkObject LoyaltyAndHonor { get; }` |
| `Presence` | `public static PerkObject Presence { get; }` |
| `FamousCommander` | `public static PerkObject FamousCommander { get; }` |
| `LeaderOfMasses` | `public static PerkObject LeaderOfMasses { get; }` |
| `VeteransRespect` | `public static PerkObject VeteransRespect { get; }` |
| `CitizenMilitia` | `public static PerkObject CitizenMilitia { get; }` |
| `InspiringLeader` | `public static PerkObject InspiringLeader { get; }` |
| `UpliftingSpirit` | `public static PerkObject UpliftingSpirit { get; }` |
| `MakeADifference` | `public static PerkObject MakeADifference { get; }` |
| `LeadByExample` | `public static PerkObject LeadByExample { get; }` |
| `TrustedCommander` | `public static PerkObject TrustedCommander { get; }` |
| `GreatLeader` | `public static PerkObject GreatLeader { get; }` |
| `WePledgeOurSwords` | `public static PerkObject WePledgeOurSwords { get; }` |
| `TalentMagnet` | `public static PerkObject TalentMagnet { get; }` |
| `UltimateLeader` | `public static PerkObject UltimateLeader { get; }` |

## Usage Example

```csharp
var example = new Leadership();
```

## See Also

- [Complete Class Catalog](../catalog)