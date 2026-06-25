---
title: "MPAuthenticationDebugVM"
description: "Auto-generated class reference for MPAuthenticationDebugVM."
---
# MPAuthenticationDebugVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAuthenticationDebugVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication/MPAuthenticationDebugVM.cs`

## Overview

`MPAuthenticationDebugVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsLoginRequestActive` | `public bool IsLoginRequestActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `UsernameText` | `public string UsernameText { get; set; }` |
| `PasswordText` | `public string PasswordText { get; set; }` |
| `Username` | `public string Username { get; set; }` |
| `Password` | `public string Password { get; set; }` |
| `LoginText` | `public string LoginText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPAuthenticationDebugVM from the subsystem API first
MPAuthenticationDebugVM mPAuthenticationDebugVM = ...;
mPAuthenticationDebugVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPAuthenticationDebugVM mPAuthenticationDebugVM = ...;
mPAuthenticationDebugVM.RefreshValues();
```

## See Also

- [Area Index](../)