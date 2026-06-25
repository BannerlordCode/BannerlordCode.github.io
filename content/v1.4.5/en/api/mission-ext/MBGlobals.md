---
title: "MBGlobals"
description: "Auto-generated class reference for MBGlobals."
---
# MBGlobals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBGlobals`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGlobals.cs`

## Overview

`MBGlobals` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeReferences
`public static void InitializeReferences()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by references.

```csharp
// Static call; no instance required
MBGlobals.InitializeReferences();
```

### GetActionSetWithSuffix
`public static MBActionSet GetActionSetWithSuffix(Monster monster, bool isFemale, string suffix)`

**Purpose:** **Purpose:** Reads and returns the action set with suffix value held by the this instance.

```csharp
// Static call; no instance required
MBGlobals.GetActionSetWithSuffix(monster, false, "example");
```

### GetActionSet
`public static MBActionSet GetActionSet(string actionSetCode)`

**Purpose:** **Purpose:** Reads and returns the action set value held by the this instance.

```csharp
// Static call; no instance required
MBGlobals.GetActionSet("example");
```

## Usage Example

```csharp
MBGlobals.InitializeReferences();
```

## See Also

- [Area Index](../)