---
title: "MissionSpectatorControlVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSpectatorControlVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSpectatorControlVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSpectatorControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionSpectatorControlVM.cs`

## Overview

`MissionSpectatorControlVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PrevCharacterText` | `public string PrevCharacterText { get; set; }` |
| `NextCharacterText` | `public string NextCharacterText { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant { get; set; }` |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled { get; set; }` |
| `SpectatedAgentName` | `public string SpectatedAgentName { get; set; }` |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey { get; set; }` |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey { get; set; }` |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**Purpose:** Called when the `spectated agent focus in` event is raised.

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedAgent)`

**Purpose:** Called when the `spectated agent focus out` event is raised.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetMainAgentStatus
`public void SetMainAgentStatus(bool isDead)`

**Purpose:** Sets the value or state of `main agent status`.

### SetPrevCharacterInputKey
`public void SetPrevCharacterInputKey(GameKey gameKey)`

**Purpose:** Sets the value or state of `prev character input key`.

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(GameKey gameKey)`

**Purpose:** Sets the value or state of `next character input key`.

### SetTakeControlInputKey
`public void SetTakeControlInputKey(GameKey gameKey)`

**Purpose:** Sets the value or state of `take control input key`.

## Usage Example

```csharp
var value = new MissionSpectatorControlVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)