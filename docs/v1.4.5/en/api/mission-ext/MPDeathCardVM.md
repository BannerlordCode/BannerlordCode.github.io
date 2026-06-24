<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPDeathCardVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPDeathCardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPDeathCardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPDeathCardVM.cs`

## Overview

`MPDeathCardVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelfInflicted` | `public bool IsSelfInflicted { get; set; }` |
| `KillCountsEnabled` | `public bool KillCountsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `UsedWeaponName` | `public string UsedWeaponName { get; set; }` |
| `KillerName` | `public string KillerName { get; set; }` |
| `KillerText` | `public string KillerText { get; set; }` |
| `YouText` | `public string YouText { get; set; }` |
| `PlayerProperties` | `public MPPlayerVM PlayerProperties { get; set; }` |
| `BodyPartHit` | `public int BodyPartHit { get; set; }` |
| `NumOfTimesPlayerKilled` | `public int NumOfTimesPlayerKilled { get; set; }` |
| `NumOfTimesPlayerGotKilled` | `public int NumOfTimesPlayerGotKilled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnMainAgentRemoved
`public void OnMainAgentRemoved(Agent affectorAgent, KillingBlow blow)`

**Purpose:** Called when the `main agent removed` event is raised.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

## Usage Example

```csharp
var value = new MPDeathCardVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)