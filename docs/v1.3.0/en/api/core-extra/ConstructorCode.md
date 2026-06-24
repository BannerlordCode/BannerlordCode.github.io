<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConstructorCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConstructorCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class ConstructorCode`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/ConstructorCode.cs`

## Overview

`ConstructorCode` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `MethodSignature` | `public string MethodSignature { get; set; }` |
| `BaseCall` | `public string BaseCall { get; set; }` |
| `IsStatic` | `public bool IsStatic { get; set; }` |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier { get; set; }` |

## Key Methods

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Handles logic related to `generate into`.

### AddLine
`public void AddLine(string line)`

**Purpose:** Adds `line` to the current collection or state.

## Usage Example

```csharp
var value = new ConstructorCode();
value.GenerateInto(codeGenerationFile);
```

## See Also

- [Complete Class Catalog](../catalog)