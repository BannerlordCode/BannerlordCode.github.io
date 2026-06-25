---
title: "Crafting"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Crafting`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Crafting

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Crafting`
**Area:** campaign-ext

## Overview

`Crafting` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
var value = new Crafting();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
