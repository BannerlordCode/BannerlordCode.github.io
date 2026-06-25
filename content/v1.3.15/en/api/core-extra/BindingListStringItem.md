---
title: "BindingListStringItem"
description: "Auto-generated class reference for BindingListStringItem."
---
# BindingListStringItem

**Namespace:** TaleWorlds.Core.ViewModelCollection.Generic
**Module:** TaleWorlds.Core
**Type:** `public class BindingListStringItem : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/BindingListStringItem.cs`

## Overview

`BindingListStringItem` lives in `TaleWorlds.Core.ViewModelCollection.Generic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Generic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public string Item { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BindingListStringItem instance = ...;
```

## See Also

- [Area Index](../)