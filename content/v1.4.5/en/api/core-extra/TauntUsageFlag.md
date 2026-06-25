---
title: "TauntUsageFlag"
description: "Auto-generated class reference for TauntUsageFlag."
---
# TauntUsageFlag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class TauntUsageFlag`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageFlag` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(TauntUsage.TauntUsageFlag x, TauntUsage.TauntUsageFlag y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of TauntUsageFlag from the subsystem API first
TauntUsageFlag tauntUsageFlag = ...;
var result = tauntUsageFlag.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TauntUsageFlag tauntUsageFlag = ...;
tauntUsageFlag.Compare(x, y);
```

## See Also

- [Area Index](../)