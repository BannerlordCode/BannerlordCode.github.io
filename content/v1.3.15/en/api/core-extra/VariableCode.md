---
title: "VariableCode"
description: "Auto-generated class reference for VariableCode."
---
# VariableCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class VariableCode`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/VariableCode.cs`

## Overview

`VariableCode` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `IsStatic` | `public bool IsStatic { get; set; }` |
| `AccessModifier` | `public VariableCodeAccessModifier AccessModifier { get; set; }` |

## Key Methods

### GenerateLine
`public string GenerateLine()`

**Purpose:** Generates an instance, data, or representation of `line`.

```csharp
// Obtain an instance of VariableCode from the subsystem API first
VariableCode variableCode = ...;
var result = variableCode.GenerateLine();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VariableCode variableCode = ...;
variableCode.GenerateLine();
```

## See Also

- [Area Index](../)