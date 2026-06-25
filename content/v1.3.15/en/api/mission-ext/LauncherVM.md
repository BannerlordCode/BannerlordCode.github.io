---
title: "LauncherVM"
description: "Auto-generated class reference for LauncherVM."
---
# LauncherVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs`

## Overview

`LauncherVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameTypeArgument` | `public string GameTypeArgument { get; }` |
| `ContinueGameArgument` | `public string ContinueGameArgument { get; }` |
| `IsSingleplayer` | `public bool IsSingleplayer { get; set; }` |
| `IsMultiplayer` | `public bool IsMultiplayer { get; set; }` |
| `IsDigitalCompanion` | `public bool IsDigitalCompanion { get; set; }` |
| `IsSingleplayerAvailable` | `public bool IsSingleplayerAvailable { get; set; }` |
| `IsDigitalCompanionAvailable` | `public bool IsDigitalCompanionAvailable { get; set; }` |
| `VersionText` | `public string VersionText { get; set; }` |
| `News` | `public LauncherNewsVM News { get; set; }` |
| `ConfirmStart` | `public LauncherConfirmStartVM ConfirmStart { get; set; }` |
| `ModsData` | `public LauncherModsVM ModsData { get; set; }` |
| `Hint` | `public LauncherInformationVM Hint { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `ContinueText` | `public string ContinueText { get; set; }` |
| `LaunchText` | `public string LaunchText { get; set; }` |
| `SingleplayerText` | `public string SingleplayerText { get; set; }` |
| `DigitalCompanionText` | `public string DigitalCompanionText { get; set; }` |
| `MultiplayerText` | `public string MultiplayerText { get; set; }` |
| `NewsText` | `public string NewsText { get; set; }` |
| `DlcText` | `public string DlcText { get; set; }` |
| `ModsText` | `public string ModsText { get; set; }` |

## Key Methods

### ExecuteStartGame
`public void ExecuteStartGame(int mode)`

**Purpose:** Runs the operation or workflow associated with `start game`.

```csharp
// Obtain an instance of LauncherVM from the subsystem API first
LauncherVM launcherVM = ...;
launcherVM.ExecuteStartGame(0);
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with `close`.

```csharp
// Obtain an instance of LauncherVM from the subsystem API first
LauncherVM launcherVM = ...;
launcherVM.ExecuteClose();
```

### ExecuteMinimize
`public void ExecuteMinimize()`

**Purpose:** Runs the operation or workflow associated with `minimize`.

```csharp
// Obtain an instance of LauncherVM from the subsystem API first
LauncherVM launcherVM = ...;
launcherVM.ExecuteMinimize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LauncherVM launcherVM = ...;
launcherVM.ExecuteStartGame(0);
```

## See Also

- [Area Index](../)