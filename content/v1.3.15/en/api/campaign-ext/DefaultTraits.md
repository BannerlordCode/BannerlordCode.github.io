---
title: "DefaultTraits"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTraits`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTraits

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTraits`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultTraits.cs`

## Overview

`DefaultTraits` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Frequency` | `public static TraitObject Frequency { get; }` |
| `Mercy` | `public static TraitObject Mercy { get; }` |
| `Valor` | `public static TraitObject Valor { get; }` |
| `Honor` | `public static TraitObject Honor { get; }` |
| `Generosity` | `public static TraitObject Generosity { get; }` |
| `Calculating` | `public static TraitObject Calculating { get; }` |
| `PersonaCurt` | `public static TraitObject PersonaCurt { get; }` |
| `PersonaEarnest` | `public static TraitObject PersonaEarnest { get; }` |
| `PersonaIronic` | `public static TraitObject PersonaIronic { get; }` |
| `PersonaSoftspoken` | `public static TraitObject PersonaSoftspoken { get; }` |
| `Surgery` | `public static TraitObject Surgery { get; }` |
| `SergeantCommandSkills` | `public static TraitObject SergeantCommandSkills { get; }` |
| `RogueSkills` | `public static TraitObject RogueSkills { get; }` |
| `Siegecraft` | `public static TraitObject Siegecraft { get; }` |
| `ScoutSkills` | `public static TraitObject ScoutSkills { get; }` |
| `Blacksmith` | `public static TraitObject Blacksmith { get; }` |
| `Commander` | `public static TraitObject Commander { get; }` |
| `Trader` | `public static TraitObject Trader { get; }` |
| `Thug` | `public static TraitObject Thug { get; }` |
| `Smuggler` | `public static TraitObject Smuggler { get; }` |
| `Egalitarian` | `public static TraitObject Egalitarian { get; }` |
| `Oligarchic` | `public static TraitObject Oligarchic { get; }` |
| `Authoritarian` | `public static TraitObject Authoritarian { get; }` |
| `NavalSoldier` | `public static TraitObject NavalSoldier { get; }` |
| `Personality` | `public static IEnumerable<TraitObject> Personality { get; }` |

## Key Methods

### RegisterAll
`public void RegisterAll()`

**Purpose:** Handles logic related to `register all`.

## Usage Example

```csharp
var value = new DefaultTraits();
value.RegisterAll();
```

## See Also

- [Complete Class Catalog](../catalog)