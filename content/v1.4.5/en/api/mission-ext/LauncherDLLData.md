---
title: "LauncherDLLData"
description: "Auto-generated class reference for LauncherDLLData."
---
# LauncherDLLData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDLLData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`

## Overview

`LauncherDLLData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LauncherDLLData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SubModule` | `public SubModuleInfo SubModule { get; }` |
| `IsDangerous` | `public bool IsDangerous { get; }` |
| `VerifyInformation` | `public string VerifyInformation { get; }` |
| `Size` | `public uint Size { get; }` |

## Key Methods

### SetIsDLLDangerous
`public void SetIsDLLDangerous(bool isDangerous)`

**Purpose:** Assigns a new value to `is d l l dangerous` and updates the object's internal state.

```csharp
// Obtain an instance of LauncherDLLData from the subsystem API first
LauncherDLLData launcherDLLData = ...;
launcherDLLData.SetIsDLLDangerous(false);
```

### SetDLLSize
`public void SetDLLSize(uint size)`

**Purpose:** Assigns a new value to `d l l size` and updates the object's internal state.

```csharp
// Obtain an instance of LauncherDLLData from the subsystem API first
LauncherDLLData launcherDLLData = ...;
launcherDLLData.SetDLLSize(0);
```

### SetDLLVerifyInformation
`public void SetDLLVerifyInformation(string info)`

**Purpose:** Assigns a new value to `d l l verify information` and updates the object's internal state.

```csharp
// Obtain an instance of LauncherDLLData from the subsystem API first
LauncherDLLData launcherDLLData = ...;
launcherDLLData.SetDLLVerifyInformation("example");
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
LauncherDLLData entry = ...;
```

## See Also

- [Area Index](../)