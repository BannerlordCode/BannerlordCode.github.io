---
title: "MethodCode"
description: "Auto-generated class reference for MethodCode."
---
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

**Purpose:** **Purpose:** Generates an instance, data, or representation of into.

```csharp
// Obtain an instance of MethodCode from the subsystem API first
MethodCode methodCode = ...;
methodCode.GenerateInto(codeGenerationFile);
```

### AddLine
`public void AddLine(string line)`

**Purpose:** **Purpose:** Adds line to the current collection or state.

```csharp
// Obtain an instance of MethodCode from the subsystem API first
MethodCode methodCode = ...;
methodCode.AddLine("example");
```

### AddLines
`public void AddLines(IEnumerable<string> lines)`

**Purpose:** **Purpose:** Adds lines to the current collection or state.

```csharp
// Obtain an instance of MethodCode from the subsystem API first
MethodCode methodCode = ...;
methodCode.AddLines(lines);
```

### AddCodeBlock
`public void AddCodeBlock(CodeBlock codeBlock)`

**Purpose:** **Purpose:** Adds code block to the current collection or state.

```csharp
// Obtain an instance of MethodCode from the subsystem API first
MethodCode methodCode = ...;
methodCode.AddCodeBlock(codeBlock);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MethodCode methodCode = ...;
methodCode.GenerateInto(codeGenerationFile);
```

## See Also

- [Area Index](../)