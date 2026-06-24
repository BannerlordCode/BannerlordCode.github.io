<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatSoundContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CombatSoundContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CombatSoundContainer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatSoundContainer.cs`

## Overview

`CombatSoundContainer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SoundCodeMissionCombatBluntHigh` | `public static int SoundCodeMissionCombatBluntHigh { get; }` |
| `SoundCodeMissionCombatBluntLow` | `public static int SoundCodeMissionCombatBluntLow { get; }` |
| `SoundCodeMissionCombatBluntMed` | `public static int SoundCodeMissionCombatBluntMed { get; }` |
| `SoundCodeMissionCombatBoulderHigh` | `public static int SoundCodeMissionCombatBoulderHigh { get; }` |
| `SoundCodeMissionCombatBoulderLow` | `public static int SoundCodeMissionCombatBoulderLow { get; }` |
| `SoundCodeMissionCombatBoulderMed` | `public static int SoundCodeMissionCombatBoulderMed { get; }` |
| `SoundCodeMissionCombatCutHigh` | `public static int SoundCodeMissionCombatCutHigh { get; }` |
| `SoundCodeMissionCombatCutLow` | `public static int SoundCodeMissionCombatCutLow { get; }` |
| `SoundCodeMissionCombatCutMed` | `public static int SoundCodeMissionCombatCutMed { get; }` |
| `SoundCodeMissionCombatMissileHigh` | `public static int SoundCodeMissionCombatMissileHigh { get; }` |
| `SoundCodeMissionCombatMissileLow` | `public static int SoundCodeMissionCombatMissileLow { get; }` |
| `SoundCodeMissionCombatMissileMed` | `public static int SoundCodeMissionCombatMissileMed { get; }` |
| `SoundCodeMissionCombatPierceHigh` | `public static int SoundCodeMissionCombatPierceHigh { get; }` |
| `SoundCodeMissionCombatPierceLow` | `public static int SoundCodeMissionCombatPierceLow { get; }` |
| `SoundCodeMissionCombatPierceMed` | `public static int SoundCodeMissionCombatPierceMed { get; }` |
| `SoundCodeMissionCombatPunchHigh` | `public static int SoundCodeMissionCombatPunchHigh { get; }` |
| `SoundCodeMissionCombatPunchLow` | `public static int SoundCodeMissionCombatPunchLow { get; }` |
| `SoundCodeMissionCombatPunchMed` | `public static int SoundCodeMissionCombatPunchMed { get; }` |
| `SoundCodeMissionCombatThrowingAxeHigh` | `public static int SoundCodeMissionCombatThrowingAxeHigh { get; }` |
| `SoundCodeMissionCombatThrowingAxeLow` | `public static int SoundCodeMissionCombatThrowingAxeLow { get; }` |
| `SoundCodeMissionCombatThrowingAxeMed` | `public static int SoundCodeMissionCombatThrowingAxeMed { get; }` |
| `SoundCodeMissionCombatThrowingDaggerHigh` | `public static int SoundCodeMissionCombatThrowingDaggerHigh { get; }` |
| `SoundCodeMissionCombatThrowingDaggerLow` | `public static int SoundCodeMissionCombatThrowingDaggerLow { get; }` |
| `SoundCodeMissionCombatThrowingDaggerMed` | `public static int SoundCodeMissionCombatThrowingDaggerMed { get; }` |
| `SoundCodeMissionCombatThrowingStoneHigh` | `public static int SoundCodeMissionCombatThrowingStoneHigh { get; }` |
| `SoundCodeMissionCombatThrowingStoneLow` | `public static int SoundCodeMissionCombatThrowingStoneLow { get; }` |
| `SoundCodeMissionCombatThrowingStoneMed` | `public static int SoundCodeMissionCombatThrowingStoneMed { get; }` |
| `SoundCodeMissionCombatChargeDamage` | `public static int SoundCodeMissionCombatChargeDamage { get; }` |
| `SoundCodeMissionCombatKick` | `public static int SoundCodeMissionCombatKick { get; }` |
| `SoundCodeMissionCombatPlayerhit` | `public static int SoundCodeMissionCombatPlayerhit { get; }` |
| `SoundCodeMissionCombatWoodShieldBash` | `public static int SoundCodeMissionCombatWoodShieldBash { get; }` |
| `SoundCodeMissionCombatMetalShieldBash` | `public static int SoundCodeMissionCombatMetalShieldBash { get; }` |

## Usage Example

```csharp
var example = new CombatSoundContainer();
```

## See Also

- [Complete Class Catalog](../catalog)