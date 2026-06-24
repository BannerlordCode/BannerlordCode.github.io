<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OneHanded`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OneHanded

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class OneHanded`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`OneHanded` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WrappedHandles` | `public static PerkObject WrappedHandles { get; }` |
| `Basher` | `public static PerkObject Basher { get; }` |
| `ToBeBlunt` | `public static PerkObject ToBeBlunt { get; }` |
| `SwiftStrike` | `public static PerkObject SwiftStrike { get; }` |
| `Cavalry` | `public static PerkObject Cavalry { get; }` |
| `ShieldBearer` | `public static PerkObject ShieldBearer { get; }` |
| `Trainer` | `public static PerkObject Trainer { get; }` |
| `Duelist` | `public static PerkObject Duelist { get; }` |
| `ShieldWall` | `public static PerkObject ShieldWall { get; }` |
| `ArrowCatcher` | `public static PerkObject ArrowCatcher { get; }` |
| `MilitaryTradition` | `public static PerkObject MilitaryTradition { get; }` |
| `CorpsACorps` | `public static PerkObject CorpsACorps { get; }` |
| `StandUnited` | `public static PerkObject StandUnited { get; }` |
| `LeadByExample` | `public static PerkObject LeadByExample { get; }` |
| `SteelCoreShields` | `public static PerkObject SteelCoreShields { get; }` |
| `FleetOfFoot` | `public static PerkObject FleetOfFoot { get; }` |
| `DeadlyPurpose` | `public static PerkObject DeadlyPurpose { get; }` |
| `UnwaveringDefense` | `public static PerkObject UnwaveringDefense { get; }` |
| `Prestige` | `public static PerkObject Prestige { get; }` |
| `WayOfTheSword` | `public static PerkObject WayOfTheSword { get; }` |
| `ChinkInTheArmor` | `public static PerkObject ChinkInTheArmor { get; }` |

## Usage Example

```csharp
var example = new OneHanded();
```

## See Also

- [Complete Class Catalog](../catalog)