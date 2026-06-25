---
title: "UserModData"
description: "Auto-generated class reference for UserModData."
---
# UserModData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserModData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserModData.cs`

## Overview

`UserModData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UserModData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `LastKnownVersion` | `public string LastKnownVersion { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### IsUpdatedToBeDefault
`public bool IsUpdatedToBeDefault(ModuleInfo module)`

**Purpose:** Determines whether the current object is in the `updated to be default` state or condition.

```csharp
// Obtain an instance of UserModData from the subsystem API first
UserModData userModData = ...;
var result = userModData.IsUpdatedToBeDefault(module);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
UserModData entry = ...;
```

## See Also

- [Area Index](../)