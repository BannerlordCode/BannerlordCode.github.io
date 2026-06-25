---
title: "ModuleInfoModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleInfoModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `should include in session`.

### TryCreateForSession
`public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)`

**Purpose:** Attempts to get `create for session`, usually returning the result in an out parameter.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel());
```

## See Also

- [Complete Class Catalog](../catalog)