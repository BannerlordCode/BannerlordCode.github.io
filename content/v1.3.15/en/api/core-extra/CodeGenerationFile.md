---
title: "CodeGenerationFile"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CodeGenerationFile`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CodeGenerationFile

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeGenerationFile`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/CodeGenerationFile.cs`

## Overview

`CodeGenerationFile` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddLine
`public void AddLine(string line)`

**Purpose:** Adds `line` to the current collection or state.

### GenerateText
`public string GenerateText()`

**Purpose:** Handles logic related to `generate text`.

## Usage Example

```csharp
var value = new CodeGenerationFile();
value.AddLine("example");
```

## See Also

- [Complete Class Catalog](../catalog)