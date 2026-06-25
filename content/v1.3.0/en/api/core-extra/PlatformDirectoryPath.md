---
title: "PlatformDirectoryPath"
description: "Auto-generated class reference for PlatformDirectoryPath."
---
# PlatformDirectoryPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PlatformDirectoryPath`
**Base:** none
**File:** `TaleWorlds.Library/PlatformDirectoryPath.cs`

## Overview

`PlatformDirectoryPath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PlatformDirectoryPath from the subsystem API first
PlatformDirectoryPath platformDirectoryPath = ...;
var result = platformDirectoryPath.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlatformDirectoryPath platformDirectoryPath = ...;
platformDirectoryPath.ToString();
```

## See Also

- [Area Index](../)