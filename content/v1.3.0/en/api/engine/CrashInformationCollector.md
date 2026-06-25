---
title: "CrashInformationCollector"
description: "Auto-generated class reference for CrashInformationCollector."
---
# CrashInformationCollector

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class CrashInformationCollector`
**Base:** none
**File:** `TaleWorlds.Engine/CrashInformationCollector.cs`

## Overview

`CrashInformationCollector` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CollectInformation
`public static string CollectInformation()`

**Purpose:** **Purpose:** Executes the CollectInformation logic.

```csharp
// Static call; no instance required
CrashInformationCollector.CollectInformation();
```

## Usage Example

```csharp
CrashInformationCollector.CollectInformation();
```

## See Also

- [Area Index](../)