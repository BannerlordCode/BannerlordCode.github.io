---
title: "DefaultPolicies"
description: "Auto-generated class reference for DefaultPolicies."
---
# DefaultPolicies

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPolicies`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/DefaultPolicies.cs`

## Overview

`DefaultPolicies` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LandTax` | `public static PolicyObject LandTax { get; }` |
| `StateMonopolies` | `public static PolicyObject StateMonopolies { get; }` |
| `SacredMajesty` | `public static PolicyObject SacredMajesty { get; }` |
| `Magistrates` | `public static PolicyObject Magistrates { get; }` |
| `DebasementOfTheCurrency` | `public static PolicyObject DebasementOfTheCurrency { get; }` |
| `PrecarialLandTenure` | `public static PolicyObject PrecarialLandTenure { get; }` |
| `CrownDuty` | `public static PolicyObject CrownDuty { get; }` |
| `ImperialTowns` | `public static PolicyObject ImperialTowns { get; }` |
| `RoyalCommissions` | `public static PolicyObject RoyalCommissions { get; }` |
| `RoyalGuard` | `public static PolicyObject RoyalGuard { get; }` |
| `WarTax` | `public static PolicyObject WarTax { get; }` |
| `RoyalPrivilege` | `public static PolicyObject RoyalPrivilege { get; }` |
| `Senate` | `public static PolicyObject Senate { get; }` |
| `LordsPrivyCouncil` | `public static PolicyObject LordsPrivyCouncil { get; }` |
| `MilitaryCoronae` | `public static PolicyObject MilitaryCoronae { get; }` |
| `FeudalInheritance` | `public static PolicyObject FeudalInheritance { get; }` |
| `Serfdom` | `public static PolicyObject Serfdom { get; }` |
| `NobleRetinues` | `public static PolicyObject NobleRetinues { get; }` |
| `CastleCharters` | `public static PolicyObject CastleCharters { get; }` |
| `Bailiffs` | `public static PolicyObject Bailiffs { get; }` |
| `HuntingRights` | `public static PolicyObject HuntingRights { get; }` |
| `RoadTolls` | `public static PolicyObject RoadTolls { get; }` |
| `Marshals` | `public static PolicyObject Marshals { get; }` |
| `CouncilOfTheCommons` | `public static PolicyObject CouncilOfTheCommons { get; }` |
| `ForgivenessOfDebts` | `public static PolicyObject ForgivenessOfDebts { get; }` |
| `Citizenship` | `public static PolicyObject Citizenship { get; }` |
| `TribunesOfThePeople` | `public static PolicyObject TribunesOfThePeople { get; }` |
| `GrazingRights` | `public static PolicyObject GrazingRights { get; }` |
| `Lawspeakers` | `public static PolicyObject Lawspeakers { get; }` |
| `TrialByJury` | `public static PolicyObject TrialByJury { get; }` |
| `Cantons` | `public static PolicyObject Cantons { get; }` |
| `LandGrantsForVeteran` | `public static PolicyObject LandGrantsForVeteran { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefaultPolicies instance = ...;
```

## See Also

- [Area Index](../)