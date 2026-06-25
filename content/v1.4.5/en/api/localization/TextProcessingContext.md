---
title: "TextProcessingContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextProcessingContext`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextProcessingContext

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class TextProcessingContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/TextProcessingContext.cs`

## Overview

`TextProcessingContext` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetFunction
`public void SetFunction(string functionName, MBTextModel functionBody)`

**Purpose:** Sets the value or state of `function`.

### ResetFunctions
`public void ResetFunctions()`

**Purpose:** Resets `functions` to its initial state.

### GetFunctionBody
`public MBTextModel GetFunctionBody(string functionName)`

**Purpose:** Gets the current value of `function body`.

### GetFunctionParam
`public TextObject GetFunctionParam(string rawValue)`

**Purpose:** Gets the current value of `function param`.

### GetFunctionParamWithoutEvaluate
`public TextObject GetFunctionParamWithoutEvaluate(string rawValue)`

**Purpose:** Gets the current value of `function param without evaluate`.

## Usage Example

```csharp
var value = new TextProcessingContext();
value.SetFunction("example", functionBody);
```

## See Also

- [Complete Class Catalog](../catalog)