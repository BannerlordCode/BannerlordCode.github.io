<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Crossbow`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Crossbow

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Crossbow`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Crossbow` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Piercer` | `public static PerkObject Piercer { get; }` |
| `Marksmen` | `public static PerkObject Marksmen { get; }` |
| `Unhorser` | `public static PerkObject Unhorser { get; }` |
| `WindWinder` | `public static PerkObject WindWinder { get; }` |
| `DonkeysSwiftness` | `public static PerkObject DonkeysSwiftness { get; }` |
| `Sheriff` | `public static PerkObject Sheriff { get; }` |
| `PeasantLeader` | `public static PerkObject PeasantLeader { get; }` |
| `RenownMarksmen` | `public static PerkObject RenownMarksmen { get; }` |
| `Fletcher` | `public static PerkObject Fletcher { get; }` |
| `Puncture` | `public static PerkObject Puncture { get; }` |
| `LooseAndMove` | `public static PerkObject LooseAndMove { get; }` |
| `DeftHands` | `public static PerkObject DeftHands { get; }` |
| `CounterFire` | `public static PerkObject CounterFire { get; }` |
| `MountedCrossbowman` | `public static PerkObject MountedCrossbowman { get; }` |
| `Steady` | `public static PerkObject Steady { get; }` |
| `LongShots` | `public static PerkObject LongShots { get; }` |
| `HammerBolts` | `public static PerkObject HammerBolts { get; }` |
| `Pavise` | `public static PerkObject Pavise { get; }` |
| `Terror` | `public static PerkObject Terror { get; }` |
| `PickedShots` | `public static PerkObject PickedShots { get; }` |
| `MightyPull` | `public static PerkObject MightyPull { get; }` |

## Usage Example

```csharp
var example = new Crossbow();
```

## See Also

- [Complete Class Catalog](../catalog)