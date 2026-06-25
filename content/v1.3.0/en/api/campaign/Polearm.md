---
title: "Polearm"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Polearm`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Polearm

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Polearm`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## Overview

`Polearm` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pikeman` | `public static PerkObject Pikeman { get; }` |
| `Cavalry` | `public static PerkObject Cavalry { get; }` |
| `Braced` | `public static PerkObject Braced { get; }` |
| `KeepAtBay` | `public static PerkObject KeepAtBay { get; }` |
| `SwiftSwing` | `public static PerkObject SwiftSwing { get; }` |
| `CleanThrust` | `public static PerkObject CleanThrust { get; }` |
| `Footwork` | `public static PerkObject Footwork { get; }` |
| `HardKnock` | `public static PerkObject HardKnock { get; }` |
| `SteedKiller` | `public static PerkObject SteedKiller { get; }` |
| `Lancer` | `public static PerkObject Lancer { get; }` |
| `Skewer` | `public static PerkObject Skewer { get; }` |
| `Guards` | `public static PerkObject Guards { get; }` |
| `StandardBearer` | `public static PerkObject StandardBearer { get; }` |
| `Phalanx` | `public static PerkObject Phalanx { get; }` |
| `HardyFrontline` | `public static PerkObject HardyFrontline { get; }` |
| `Drills` | `public static PerkObject Drills { get; }` |
| `SureFooted` | `public static PerkObject SureFooted { get; }` |
| `UnstoppableForce` | `public static PerkObject UnstoppableForce { get; }` |
| `CounterWeight` | `public static PerkObject CounterWeight { get; }` |
| `SharpenTheTip` | `public static PerkObject SharpenTheTip { get; }` |
| `WayOfTheSpear` | `public static PerkObject WayOfTheSpear { get; }` |

## Usage Example

```csharp
var example = new Polearm();
```

## See Also

- [Complete Class Catalog](../catalog)