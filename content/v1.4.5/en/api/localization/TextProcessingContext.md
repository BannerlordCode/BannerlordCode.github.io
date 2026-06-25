---
title: "TextProcessingContext"
description: "Auto-generated class reference for TextProcessingContext."
---
# TextProcessingContext

**Namespace:** TaleWorlds.Localization.TextProcessor
**Module:** TaleWorlds.Localization
**Type:** `public class TextProcessingContext`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization.TextProcessor/TextProcessingContext.cs`

## Overview

`TextProcessingContext` lives in `TaleWorlds.Localization.TextProcessor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization.TextProcessor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetFunction
`public void SetFunction(string functionName, MBTextModel functionBody)`

**Purpose:** Assigns a new value to function and updates the object's internal state.

```csharp
// Obtain an instance of TextProcessingContext from the subsystem API first
TextProcessingContext textProcessingContext = ...;
textProcessingContext.SetFunction("example", functionBody);
```

### ResetFunctions
`public void ResetFunctions()`

**Purpose:** Returns functions to its default or initial condition.

```csharp
// Obtain an instance of TextProcessingContext from the subsystem API first
TextProcessingContext textProcessingContext = ...;
textProcessingContext.ResetFunctions();
```

### GetFunctionBody
`public MBTextModel GetFunctionBody(string functionName)`

**Purpose:** Reads and returns the function body value held by the this instance.

```csharp
// Obtain an instance of TextProcessingContext from the subsystem API first
TextProcessingContext textProcessingContext = ...;
var result = textProcessingContext.GetFunctionBody("example");
```

### GetFunctionParam
`public TextObject GetFunctionParam(string rawValue)`

**Purpose:** Reads and returns the function param value held by the this instance.

```csharp
// Obtain an instance of TextProcessingContext from the subsystem API first
TextProcessingContext textProcessingContext = ...;
var result = textProcessingContext.GetFunctionParam("example");
```

### GetFunctionParamWithoutEvaluate
`public TextObject GetFunctionParamWithoutEvaluate(string rawValue)`

**Purpose:** Reads and returns the function param without evaluate value held by the this instance.

```csharp
// Obtain an instance of TextProcessingContext from the subsystem API first
TextProcessingContext textProcessingContext = ...;
var result = textProcessingContext.GetFunctionParamWithoutEvaluate("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextProcessingContext textProcessingContext = ...;
textProcessingContext.SetFunction("example", functionBody);
```

## See Also

- [Area Index](../)