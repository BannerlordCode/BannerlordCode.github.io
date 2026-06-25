---
title: "MultiplayerCultureSelectVM"
description: "Auto-generated class reference for MultiplayerCultureSelectVM."
---
# MultiplayerCultureSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerCultureSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerCultureSelectVM.cs`

## Overview

`MultiplayerCultureSelectVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameModeText` | `public string GameModeText { get; set; }` |
| `CultureSelectionText` | `public string CultureSelectionText { get; set; }` |
| `FirstCultureName` | `public string FirstCultureName { get; set; }` |
| `SecondCultureName` | `public string SecondCultureName { get; set; }` |
| `FirstCultureCode` | `public string FirstCultureCode { get; set; }` |
| `SecondCultureCode` | `public string SecondCultureCode { get; set; }` |
| `FirstCultureColor1` | `public Color FirstCultureColor1 { get; set; }` |
| `FirstCultureColor2` | `public Color FirstCultureColor2 { get; set; }` |
| `SecondCultureColor1` | `public Color SecondCultureColor1 { get; set; }` |
| `SecondCultureColor2` | `public Color SecondCultureColor2 { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerCultureSelectVM from the subsystem API first
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.RefreshValues();
```

### ExecuteSelectCulture
`public void ExecuteSelectCulture(int cultureIndex)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select culture.

```csharp
// Obtain an instance of MultiplayerCultureSelectVM from the subsystem API first
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.ExecuteSelectCulture(0);
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of MultiplayerCultureSelectVM from the subsystem API first
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.ExecuteClose();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.RefreshValues();
```

## See Also

- [Area Index](../)