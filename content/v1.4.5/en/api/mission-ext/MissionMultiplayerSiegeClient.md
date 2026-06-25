---
title: "MissionMultiplayerSiegeClient"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerSiegeClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiegeClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiegeClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs`

## Overview

`MissionMultiplayerSiegeClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Gets the current value of `gold amount`.

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Called when the `gold amount changed for representative` event is raised.

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**Purpose:** Called when the `number of flags changed` event is raised.

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**Purpose:** Called when the `capture point owner changed` event is raised.

### OnMoraleChanged
`public void OnMoraleChanged(int attackerMorale, int defenderMorale, int capturePointRemainingMoraleGains)`

**Purpose:** Called when the `morale changed` event is raised.

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**Purpose:** Gets the current value of `flag owner`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

**Purpose:** Gets the current value of `siege missiles`.

## Usage Example

```csharp
var value = new MissionMultiplayerSiegeClient();
value.OnBehaviorInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)