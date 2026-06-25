---
title: "DependedModule"
description: "Auto-generated class reference for DependedModule."
---
# DependedModule

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public struct DependedModule`
**Base:** none
**File:** `bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/DependedModule.cs`

## Overview

`DependedModule` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ModuleId` | `public string ModuleId { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `IsOptional` | `public bool IsOptional { get; }` |

## Key Methods

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of version change set.

```csharp
// Obtain an instance of DependedModule from the subsystem API first
DependedModule dependedModule = ...;
dependedModule.UpdateVersionChangeSet();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DependedModule dependedModule = ...;
dependedModule.UpdateVersionChangeSet();
```

## See Also

- [Area Index](../)