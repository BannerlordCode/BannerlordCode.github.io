<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Athletics`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Athletics

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Athletics`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Athletics` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MorningExercise` | `public static PerkObject MorningExercise { get; }` |
| `WellBuilt` | `public static PerkObject WellBuilt { get; }` |
| `Fury` | `public static PerkObject Fury { get; }` |
| `FormFittingArmor` | `public static PerkObject FormFittingArmor { get; }` |
| `ImposingStature` | `public static PerkObject ImposingStature { get; }` |
| `Stamina` | `public static PerkObject Stamina { get; }` |
| `Sprint` | `public static PerkObject Sprint { get; }` |
| `Powerful` | `public static PerkObject Powerful { get; }` |
| `SurgingBlow` | `public static PerkObject SurgingBlow { get; }` |
| `Braced` | `public static PerkObject Braced { get; }` |
| `WalkItOff` | `public static PerkObject WalkItOff { get; }` |
| `AGoodDaysRest` | `public static PerkObject AGoodDaysRest { get; }` |
| `Durable` | `public static PerkObject Durable { get; }` |
| `Energetic` | `public static PerkObject Energetic { get; }` |
| `Steady` | `public static PerkObject Steady { get; }` |
| `Strong` | `public static PerkObject Strong { get; }` |
| `StrongLegs` | `public static PerkObject StrongLegs { get; }` |
| `StrongArms` | `public static PerkObject StrongArms { get; }` |
| `Spartan` | `public static PerkObject Spartan { get; }` |
| `IgnorePain` | `public static PerkObject IgnorePain { get; }` |
| `MightyBlow` | `public static PerkObject MightyBlow { get; }` |

## Usage Example

```csharp
var example = new Athletics();
```

## See Also

- [Complete Class Catalog](../catalog)