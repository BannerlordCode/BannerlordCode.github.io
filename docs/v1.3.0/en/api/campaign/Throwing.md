<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Throwing`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Throwing

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Throwing`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Throwing` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuickDraw` | `public static PerkObject QuickDraw { get; }` |
| `ShieldBreaker` | `public static PerkObject ShieldBreaker { get; }` |
| `Hunter` | `public static PerkObject Hunter { get; }` |
| `FlexibleFighter` | `public static PerkObject FlexibleFighter { get; }` |
| `MountedSkirmisher` | `public static PerkObject MountedSkirmisher { get; }` |
| `PerfectTechnique` | `public static PerkObject PerfectTechnique { get; }` |
| `RunningThrow` | `public static PerkObject RunningThrow { get; }` |
| `KnockOff` | `public static PerkObject KnockOff { get; }` |
| `WellPrepared` | `public static PerkObject WellPrepared { get; }` |
| `Skirmisher` | `public static PerkObject Skirmisher { get; }` |
| `Focus` | `public static PerkObject Focus { get; }` |
| `LastHit` | `public static PerkObject LastHit { get; }` |
| `HeadHunter` | `public static PerkObject HeadHunter { get; }` |
| `SlingingCompetitions` | `public static PerkObject SlingingCompetitions { get; }` |
| `Saddlebags` | `public static PerkObject Saddlebags { get; }` |
| `Splinters` | `public static PerkObject Splinters { get; }` |
| `Resourceful` | `public static PerkObject Resourceful { get; }` |
| `LongReach` | `public static PerkObject LongReach { get; }` |
| `WeakSpot` | `public static PerkObject WeakSpot { get; }` |
| `Impale` | `public static PerkObject Impale { get; }` |
| `UnstoppableForce` | `public static PerkObject UnstoppableForce { get; }` |

## Usage Example

```csharp
var example = new Throwing();
```

## See Also

- [Complete Class Catalog](../catalog)