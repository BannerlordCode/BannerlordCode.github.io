---
title: "CodeBlock"
description: "Auto-generated class reference for CodeBlock."
---
# CodeBlock

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeBlock`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/CodeBlock.cs`

## Overview

`CodeBlock` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Lines` | `public List<string> Lines { get; }` |

## Key Methods

### AddLine
`public void AddLine(string line)`

**Purpose:** **Purpose:** Adds line to the current collection or state.

```csharp
// Obtain an instance of CodeBlock from the subsystem API first
CodeBlock codeBlock = ...;
codeBlock.AddLine("example");
```

### AddLines
`public void AddLines(IEnumerable<string> lines)`

**Purpose:** **Purpose:** Adds lines to the current collection or state.

```csharp
// Obtain an instance of CodeBlock from the subsystem API first
CodeBlock codeBlock = ...;
codeBlock.AddLines(lines);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CodeBlock codeBlock = ...;
codeBlock.AddLine("example");
```

## See Also

- [Area Index](../)