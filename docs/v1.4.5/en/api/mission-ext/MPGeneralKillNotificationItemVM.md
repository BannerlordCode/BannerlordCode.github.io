<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPGeneralKillNotificationItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPGeneralKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPGeneralKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General/MPGeneralKillNotificationItemVM.cs`

## Overview

`MPGeneralKillNotificationItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsDamageNotification` | `public bool IsDamageNotification { get; set; }` |
| `IsDamagedMount` | `public bool IsDamagedMount { get; set; }` |
| `Color1` | `public Color Color1 { get; set; }` |
| `Color2` | `public Color Color2 { get; set; }` |
| `MurdererCompassElement` | `public MPTeammateCompassTargetVM MurdererCompassElement { get; set; }` |
| `VictimCompassElement` | `public MPTeammateCompassTargetVM VictimCompassElement { get; set; }` |
| `IsPlayerDeath` | `public bool IsPlayerDeath { get; set; }` |
| `IsItemInitializationOver` | `public bool IsItemInitializationOver { get; set; }` |
| `IsVictimBot` | `public bool IsVictimBot { get; set; }` |
| `IsMurdererBot` | `public bool IsMurdererBot { get; set; }` |
| `IsRelatedToFriendlyTroop` | `public bool IsRelatedToFriendlyTroop { get; set; }` |
| `IsFriendlyTroopDeath` | `public bool IsFriendlyTroopDeath { get; set; }` |
| `Message` | `public string Message { get; set; }` |

## Key Methods

### InitProperties
`public unsafe virtual void InitProperties(Agent affectedAgent, Agent affectorAgent)`

**Purpose:** Initializes the state, resources, or bindings for `properties`.

### InitDeathProperties
`public void InitDeathProperties(Agent affectedAgent, Agent affectorAgent, Agent assistedAgent)`

**Purpose:** Initializes the state, resources, or bindings for `death properties`.

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new MPGeneralKillNotificationItemVM();
value.InitProperties(affectedAgent, affectorAgent);
```

## See Also

- [Complete Class Catalog](../catalog)