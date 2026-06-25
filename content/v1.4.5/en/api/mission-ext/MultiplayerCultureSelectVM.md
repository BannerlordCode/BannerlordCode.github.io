---
title: "MultiplayerCultureSelectVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerCultureSelectVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerCultureSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerCultureSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerCultureSelectVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelectCulture
`public void ExecuteSelectCulture(int cultureIndex)`

**Purpose:** Executes the `select culture` operation or workflow.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

## Usage Example

```csharp
var value = new MultiplayerCultureSelectVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)