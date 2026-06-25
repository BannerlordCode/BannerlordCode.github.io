---
title: "ManagedDllFolder"
description: "Auto-generated class reference for ManagedDllFolder."
---
# ManagedDllFolder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ManagedDllFolder`
**Base:** none
**File:** `TaleWorlds.Library/ManagedDllFolder.cs`

## Overview

`ManagedDllFolder` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public static string Name { get; }` |

## Key Methods

### OverrideManagedDllFolder
`public static void OverrideManagedDllFolder(string overridenFolder)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ManagedDllFolder.OverrideManagedDllFolder("example");
```

## Usage Example

```csharp
ManagedDllFolder.OverrideManagedDllFolder("example");
```

## See Also

- [Area Index](../)