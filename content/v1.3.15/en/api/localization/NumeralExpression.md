---
title: "NumeralExpression"
description: "Auto-generated class reference for NumeralExpression."
---
# NumeralExpression

**Namespace:** TaleWorlds.Localization.Expressions
**Module:** TaleWorlds.Localization
**Type:** `internal abstract class NumeralExpression : TextExpression`
**Base:** `TextExpression`
**File:** `TaleWorlds.Localization/Expressions/NumeralExpression.cs`

## Overview

`NumeralExpression` lives in `TaleWorlds.Localization.Expressions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.Expressions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NumeralExpression instance = ...;
```

## See Also

- [Area Index](../)