---
title: "EditorVisibleScriptComponentVariable"
description: "Auto-generated class reference for EditorVisibleScriptComponentVariable."
---
# EditorVisibleScriptComponentVariable

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class EditorVisibleScriptComponentVariable : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/EditorVisibleScriptComponentVariable.cs`

## Overview

`EditorVisibleScriptComponentVariable` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visible` | `public bool Visible { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EditorVisibleScriptComponentVariable instance = ...;
```

## See Also

- [Area Index](../)