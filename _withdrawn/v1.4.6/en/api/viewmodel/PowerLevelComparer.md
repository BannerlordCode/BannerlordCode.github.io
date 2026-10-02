---
title: "PowerLevelComparer"
description: "PowerLevelComparer: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 18 exposed members (3 methods, 14 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PowerLevelComparer

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class PowerLevelComparer : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

PowerLevelComparer lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PowerLevelComparer → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 3 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PowerLevelComparer lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection`, inheritance chain PowerLevelComparer → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 14/18, methods 3/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PowerLevelComparer` | `public PowerLevelComparer(double defenderPower, double attackerPower)` | constructor |
| `SetColors` | `public void SetColors(string defenderColor, string attackerColor)` | method |
| `Update` | `public void Update(double defenderPower, double attackerPower)` | method |
| `Update` | `public void Update(double defenderPower, double attackerPower, double initialDefenderPower, double initialAttackerPower)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `DefenderBattlePower` | `public double DefenderBattlePower` | property |
| `DefenderBattlePowerValue` | `public double DefenderBattlePowerValue` | property |
| `AttackerBattlePower` | `public double AttackerBattlePower` | property |
| `AttackerBattlePowerValue` | `public double AttackerBattlePowerValue` | property |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower` | property |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower` | property |
| `InitialDefenderBattlePowerValue` | `public double InitialDefenderBattlePowerValue` | property |
| `InitialAttackerBattlePowerValue` | `public double InitialAttackerBattlePowerValue` | property |
| `DefenderRelativePower` | `public float DefenderRelativePower` | property |
| `AttackerRelativePower` | `public float AttackerRelativePower` | property |
| `DefenderColor` | `public string DefenderColor` | property |
| `AttackerColor` | `public string AttackerColor` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BattleResultVM](../BattleResultVM/)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM/)
- [same namespace CharacterViewModel](../CharacterViewModel/)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel/)
