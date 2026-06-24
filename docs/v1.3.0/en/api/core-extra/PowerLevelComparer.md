<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PowerLevelComparer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PowerLevelComparer

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class PowerLevelComparer : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs`

## Overview

`PowerLevelComparer` lives in `TaleWorlds.Core.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `DefenderBattlePower` | `public double DefenderBattlePower { get; set; }` |
| `DefenderBattlePowerValue` | `public double DefenderBattlePowerValue { get; set; }` |
| `AttackerBattlePower` | `public double AttackerBattlePower { get; set; }` |
| `AttackerBattlePowerValue` | `public double AttackerBattlePowerValue { get; set; }` |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower { get; set; }` |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower { get; set; }` |
| `InitialDefenderBattlePowerValue` | `public double InitialDefenderBattlePowerValue { get; set; }` |
| `InitialAttackerBattlePowerValue` | `public double InitialAttackerBattlePowerValue { get; set; }` |
| `DefenderRelativePower` | `public float DefenderRelativePower { get; set; }` |
| `AttackerRelativePower` | `public float AttackerRelativePower { get; set; }` |
| `DefenderColor` | `public string DefenderColor { get; set; }` |
| `AttackerColor` | `public string AttackerColor { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### SetColors
`public void SetColors(string defenderColor, string attackerColor)`

**Purpose:** Sets the value or state of `colors`.

### Update
`public void Update(double defenderPower, double attackerPower)`

**Purpose:** Updates the state or data of `update`.

### Update
`public void Update(double defenderPower, double attackerPower, double initialDefenderPower, double initialAttackerPower)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new PowerLevelComparer();
value.SetColors("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)