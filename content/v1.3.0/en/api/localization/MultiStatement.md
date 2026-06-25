---
title: "MultiStatement"
description: "Auto-generated class reference for MultiStatement."
---
# MultiStatement

**Namespace:** TaleWorlds.Localization.Expressions
**Module:** TaleWorlds.Localization
**Type:** `internal class MultiStatement : TextExpression`
**Base:** `TextExpression`
**File:** `TaleWorlds.Localization/Expressions/MultiStatement.cs`

## Overview

`MultiStatement` lives in `TaleWorlds.Localization.Expressions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.Expressions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SubStatements` | `public MBReadOnlyList<TextExpression> SubStatements { get; }` |

## Key Methods

### AddStatement
`public void AddStatement(TextExpression s2)`

**Purpose:** Adds statement to the current collection or state.

```csharp
// Obtain an instance of MultiStatement from the subsystem API first
MultiStatement multiStatement = ...;
multiStatement.AddStatement(s2);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiStatement multiStatement = ...;
multiStatement.AddStatement(s2);
```

## See Also

- [Area Index](../)