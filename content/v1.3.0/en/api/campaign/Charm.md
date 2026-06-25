---
title: "Charm"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Charm`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Charm

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Charm`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Charm` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Virile` | `public static PerkObject Virile { get; }` |
| `SelfPromoter` | `public static PerkObject SelfPromoter { get; }` |
| `Oratory` | `public static PerkObject Oratory { get; }` |
| `Warlord` | `public static PerkObject Warlord { get; }` |
| `ForgivableGrievances` | `public static PerkObject ForgivableGrievances { get; }` |
| `MeaningfulFavors` | `public static PerkObject MeaningfulFavors { get; }` |
| `InBloom` | `public static PerkObject InBloom { get; }` |
| `YoungAndRespectful` | `public static PerkObject YoungAndRespectful { get; }` |
| `Firebrand` | `public static PerkObject Firebrand { get; }` |
| `FlexibleEthics` | `public static PerkObject FlexibleEthics { get; }` |
| `EffortForThePeople` | `public static PerkObject EffortForThePeople { get; }` |
| `SlickNegotiator` | `public static PerkObject SlickNegotiator { get; }` |
| `GoodNatured` | `public static PerkObject GoodNatured { get; }` |
| `Tribute` | `public static PerkObject Tribute { get; }` |
| `MoralLeader` | `public static PerkObject MoralLeader { get; }` |
| `NaturalLeader` | `public static PerkObject NaturalLeader { get; }` |
| `PublicSpeaker` | `public static PerkObject PublicSpeaker { get; }` |
| `Parade` | `public static PerkObject Parade { get; }` |
| `Camaraderie` | `public static PerkObject Camaraderie { get; }` |
| `ImmortalCharm` | `public static PerkObject ImmortalCharm { get; }` |

## Usage Example

```csharp
var example = new Charm();
```

## See Also

- [Complete Class Catalog](../catalog)