---
title: "MethodCode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MethodCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MethodCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class MethodCode`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/MethodCode.cs`

## Overview

`MethodCode` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Comment` | `public string Comment { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `MethodSignature` | `public string MethodSignature { get; set; }` |
| `ReturnParameter` | `public string ReturnParameter { get; set; }` |
| `IsStatic` | `public bool IsStatic { get; set; }` |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier { get; set; }` |
| `PolymorphismInfo` | `public MethodCodePolymorphismInfo PolymorphismInfo { get; set; }` |

## Key Methods

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Handles logic related to `generate into`.

### AddLine
`public void AddLine(string line)`

**Purpose:** Adds `line` to the current collection or state.

### AddLines
`public void AddLines(IEnumerable<string> lines)`

**Purpose:** Adds `lines` to the current collection or state.

### AddCodeBlock
`public void AddCodeBlock(CodeBlock codeBlock)`

**Purpose:** Adds `code block` to the current collection or state.

## Usage Example

```csharp
var value = new MethodCode();
value.GenerateInto(codeGenerationFile);
```

## See Also

- [Complete Class Catalog](../catalog)