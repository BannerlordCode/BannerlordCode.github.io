---
title: "CodeGenerationFile"
description: "Auto-generated class reference for CodeGenerationFile."
---
# CodeGenerationFile

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeGenerationFile`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.CodeGeneration/CodeGenerationFile.cs`

## Overview

`CodeGenerationFile` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddLine
`public void AddLine(string line)`

**Purpose:** Adds line to the current collection or state.

```csharp
// Obtain an instance of CodeGenerationFile from the subsystem API first
CodeGenerationFile codeGenerationFile = ...;
codeGenerationFile.AddLine("example");
```

### GenerateText
`public string GenerateText()`

**Purpose:** Generates an instance, data, or representation of text.

```csharp
// Obtain an instance of CodeGenerationFile from the subsystem API first
CodeGenerationFile codeGenerationFile = ...;
var result = codeGenerationFile.GenerateText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CodeGenerationFile codeGenerationFile = ...;
codeGenerationFile.AddLine("example");
```

## See Also

- [Area Index](../)