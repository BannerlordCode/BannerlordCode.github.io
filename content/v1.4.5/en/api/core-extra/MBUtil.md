---
title: "MBUtil"
description: "Auto-generated class reference for MBUtil."
---
# MBUtil

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class MBUtil`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBUtil.cs`

## Overview

`MBUtil` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DirectoryCopy
`public static void DirectoryCopy(string sourceDirName, string destDirName, bool copySubDirs)`

**Purpose:** **Purpose:** Executes the DirectoryCopy logic.

```csharp
// Static call; no instance required
MBUtil.DirectoryCopy("example", "example", false);
```

## Usage Example

```csharp
MBUtil.DirectoryCopy("example", "example", false);
```

## See Also

- [Area Index](../)