---
title: "NewsType"
description: "Auto-generated class reference for NewsType."
---
# NewsType

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public struct NewsType`
**Base:** none
**File:** `TaleWorlds.Library/NewsManager/NewsType.cs`

## Overview

`NewsType` lives in `TaleWorlds.Library.NewsManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.NewsManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public NewsItem.NewsTypes Type { get; set; }` |
| `Index` | `public int Index { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
NewsType instance = ...;
```

## See Also

- [Area Index](../)