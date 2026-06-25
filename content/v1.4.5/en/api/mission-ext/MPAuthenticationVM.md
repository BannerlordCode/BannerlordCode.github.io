---
title: "MPAuthenticationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPAuthenticationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPAuthenticationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAuthenticationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication/MPAuthenticationVM.cs`

## Overview

`MPAuthenticationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsLoginRequestActive` | `public bool IsLoginRequestActive { get; set; }` |
| `CanTryLogin` | `public bool CanTryLogin { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `MessageText` | `public string MessageText { get; set; }` |
| `ExitText` | `public string ExitText { get; set; }` |
| `LoginText` | `public string LoginText { get; set; }` |
| `CommunityGamesText` | `public string CommunityGamesText { get; set; }` |
| `AuthenticationDebug` | `public MPAuthenticationDebugVM AuthenticationDebug { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### ExecuteExit
`public void ExecuteExit()`

**Purpose:** Executes the `exit` operation or workflow.

### ExecuteLogin
`public async void ExecuteLogin()`

**Purpose:** Executes the `login` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

## Usage Example

```csharp
var value = new MPAuthenticationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)