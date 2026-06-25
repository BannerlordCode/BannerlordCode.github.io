---
title: "ParameterLoader"
description: "Auto-generated class reference for ParameterLoader."
---
# ParameterLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterLoader`
**Base:** none
**File:** `TaleWorlds.Library/ParameterLoader.cs`

## Overview

`ParameterLoader` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadParametersFromClientProfile
`public static ParameterContainer LoadParametersFromClientProfile(string configurationName)`

**Purpose:** Reads `parameters from client profile` from persistent storage or a stream.

```csharp
// Static call; no instance required
ParameterLoader.LoadParametersFromClientProfile("example");
```

### LoadParametersInto
`public static void LoadParametersInto(string fileFullName, ParameterContainer parameters)`

**Purpose:** Reads `parameters into` from persistent storage or a stream.

```csharp
// Static call; no instance required
ParameterLoader.LoadParametersInto("example", parameters);
```

## Usage Example

```csharp
ParameterLoader.LoadParametersFromClientProfile("example");
```

## See Also

- [Area Index](../)