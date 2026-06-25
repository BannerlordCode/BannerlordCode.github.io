---
title: "ElementNotificationVM"
description: "Auto-generated class reference for ElementNotificationVM."
---
# ElementNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Tutorial
**Module:** TaleWorlds.Core
**Type:** `public class ElementNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Tutorial/ElementNotificationVM.cs`

## Overview

`ElementNotificationVM` lives in `TaleWorlds.Core.ViewModelCollection.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElementID` | `public string ElementID { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ElementNotificationVM instance = ...;
```

## See Also

- [Area Index](../)