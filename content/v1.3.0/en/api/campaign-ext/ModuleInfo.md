---
title: "ModuleInfo"
description: "Auto-generated class reference for ModuleInfo."
---
# ModuleInfo

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public class ModuleInfo`
**Base:** none
**File:** `TaleWorlds.ModuleManager/ModuleInfo.cs`

## Overview

`ModuleInfo` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; }` |
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `IsDefault` | `public bool IsDefault { get; }` |
| `IsRequiredOfficial` | `public bool IsRequiredOfficial { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `FolderPath` | `public string FolderPath { get; }` |
| `Type` | `public ModuleType Type { get; }` |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory { get; }` |
| `IsNative` | `public bool IsNative { get; }` |

## Key Methods

### LoadWithFullPath
`public void LoadWithFullPath(string fullPath)`

**Purpose:** Reads `with full path` from persistent storage or a stream.

```csharp
// Obtain an instance of ModuleInfo from the subsystem API first
ModuleInfo moduleInfo = ...;
moduleInfo.LoadWithFullPath("example");
```

### ActivateModule
`public void ActivateModule()`

**Purpose:** Activates the resource, state, or feature associated with `module`.

```csharp
// Obtain an instance of ModuleInfo from the subsystem API first
ModuleInfo moduleInfo = ...;
moduleInfo.ActivateModule();
```

### DeactivateModule
`public void DeactivateModule()`

**Purpose:** Deactivates the resource, state, or feature associated with `module`.

```csharp
// Obtain an instance of ModuleInfo from the subsystem API first
ModuleInfo moduleInfo = ...;
moduleInfo.DeactivateModule();
```

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**Purpose:** Recalculates and stores the latest representation of `version change set`.

```csharp
// Obtain an instance of ModuleInfo from the subsystem API first
ModuleInfo moduleInfo = ...;
moduleInfo.UpdateVersionChangeSet();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ModuleInfo moduleInfo = ...;
moduleInfo.LoadWithFullPath("example");
```

## See Also

- [Area Index](../)