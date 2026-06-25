---
title: "CommentSection"
description: "Auto-generated class reference for CommentSection."
---
# CommentSection

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CommentSection`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/CommentSection.cs`

## Overview

`CommentSection` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddCommentLine
`public void AddCommentLine(string line)`

**Purpose:** Adds comment line to the current collection or state.

```csharp
// Obtain an instance of CommentSection from the subsystem API first
CommentSection commentSection = ...;
commentSection.AddCommentLine("example");
```

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Generates an instance, data, or representation of into.

```csharp
// Obtain an instance of CommentSection from the subsystem API first
CommentSection commentSection = ...;
commentSection.GenerateInto(codeGenerationFile);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CommentSection commentSection = ...;
commentSection.AddCommentLine("example");
```

## See Also

- [Area Index](../)