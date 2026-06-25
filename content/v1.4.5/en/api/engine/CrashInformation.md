---
title: "CrashInformation"
description: "Auto-generated class reference for CrashInformation."
---
# CrashInformation

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class CrashInformation`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/CrashInformationCollector.cs`

## Overview

`CrashInformation` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CollectInformation
`public static string CollectInformation()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CrashInformation.CollectInformation();
```

## Usage Example

```csharp
CrashInformation.CollectInformation();
```

## See Also

- [Area Index](../)