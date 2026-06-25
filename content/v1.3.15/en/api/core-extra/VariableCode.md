---
title: "VariableCode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VariableCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `generate line`.

## Usage Example

```csharp
var value = new VariableCode();
value.GenerateLine();
```

## See Also

- [Complete Class Catalog](../catalog)