---
title: "NewsTypes"
description: "Auto-generated class reference for NewsTypes."
---
# NewsTypes

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public enum NewsTypes`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.NewsManager/NewsItem.cs`

## Overview

`NewsTypes` lives in `TaleWorlds.Library.NewsManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.NewsManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
NewsTypes instance = ...;
```

## See Also

- [Area Index](../)