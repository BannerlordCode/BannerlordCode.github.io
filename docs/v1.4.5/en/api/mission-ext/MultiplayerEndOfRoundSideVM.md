<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfRoundSideVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfRoundSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundSideVM.cs`

## Overview

`MultiplayerEndOfRoundSideVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWinner` | `public bool IsWinner { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `CultureName` | `public string CultureName { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Key Methods

### SetData
`public void SetData(BasicCultureObject culture, int score, bool isWinner, MultiplayerCultureColorInfo cultureColors)`

**Purpose:** Sets the value or state of `data`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new MultiplayerEndOfRoundSideVM();
value.SetData(culture, 0, false, cultureColors);
```

## See Also

- [Complete Class Catalog](../catalog)