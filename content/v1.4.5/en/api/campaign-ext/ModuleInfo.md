---
title: "ModuleInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ModuleInfo

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public class ModuleInfo`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs`

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
| `IsDefault` | `public bool IsDefault { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `RequiredBaseVersion` | `public ApplicationVersion RequiredBaseVersion { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `FolderPath` | `public string FolderPath { get; }` |
| `Type` | `public ModuleType Type { get; }` |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory { get; }` |

## Key Methods

### LoadWithFullPath
`public void LoadWithFullPath(string fullPath)`

**Purpose:** Loads `with full path` data.

### ActivateModule
`public void ActivateModule()`

**Purpose:** Handles logic related to `activate module`.

### DeactivateModule
`public void DeactivateModule()`

**Purpose:** Handles logic related to `deactivate module`.

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**Purpose:** Updates the state or data of `version change set`.

## Usage Example

```csharp
var value = new ModuleInfo();
value.LoadWithFullPath("example");
```

## See Also

- [Complete Class Catalog](../catalog)