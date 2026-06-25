---
title: "MPAuthenticationVM"
description: "Auto-generated class reference for MPAuthenticationVM."
---
# MPAuthenticationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAuthenticationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication/MPAuthenticationVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** **Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.OnTick(0);
```

### ExecuteExit
`public void ExecuteExit()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with exit.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.ExecuteExit();
```

### ExecuteLogin
`public async void ExecuteLogin()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with login.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.ExecuteLogin();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPAuthenticationVM from the subsystem API first
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.SetCancelInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.RefreshValues();
```

## See Also

- [Area Index](../)