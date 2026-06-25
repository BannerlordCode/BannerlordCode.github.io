---
title: "ModuleInfoModel"
description: "Auto-generated class reference for ModuleInfoModel."
---
# ModuleInfoModel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ModuleInfoModel`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs`

## Overview

`ModuleInfoModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ModuleInfoModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `Version` | `public string Version { get; }` |
| `IsOptional` | `public bool IsOptional { get; }` |

## Key Methods

### ShouldIncludeInSession
`public static bool ShouldIncludeInSession(ModuleInfo moduleInfo)`

**Purpose:** **Purpose:** Executes the ShouldIncludeInSession logic.

```csharp
// Static call; no instance required
ModuleInfoModel.ShouldIncludeInSession(moduleInfo);
```

### TryCreateForSession
`public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)`

**Purpose:** **Purpose:** Attempts to retrieve create for session, usually returning success through an out parameter.

```csharp
// Static call; no instance required
ModuleInfoModel.TryCreateForSession(moduleInfo, moduleInfoModel);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of ModuleInfoModel from the subsystem API first
ModuleInfoModel moduleInfoModel = ...;
var result = moduleInfoModel.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ModuleInfoModel from the subsystem API first
ModuleInfoModel moduleInfoModel = ...;
var result = moduleInfoModel.GetHashCode();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel());
```

## See Also

- [Area Index](../)