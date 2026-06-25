---
title: "StringPairItemVM"
description: "Auto-generated class reference for StringPairItemVM."
---
# StringPairItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Generic
**Module:** TaleWorlds.Core
**Type:** `public class StringPairItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Generic/StringPairItemVM.cs`

## Overview

`StringPairItemVM` lives in `TaleWorlds.Core.ViewModelCollection.Generic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Generic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Definition` | `public string Definition { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
StringPairItemVM instance = ...;
```

## See Also

- [Area Index](../)