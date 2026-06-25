---
title: "StringItemWithEnabledAndHintVM"
description: "Auto-generated class reference for StringItemWithEnabledAndHintVM."
---
# StringItemWithEnabledAndHintVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Generic
**Module:** TaleWorlds.Core
**Type:** `public class StringItemWithEnabledAndHintVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithEnabledAndHintVM.cs`

## Overview

`StringItemWithEnabledAndHintVM` lives in `TaleWorlds.Core.ViewModelCollection.Generic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Generic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionText` | `public string ActionText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of StringItemWithEnabledAndHintVM from the subsystem API first
StringItemWithEnabledAndHintVM stringItemWithEnabledAndHintVM = ...;
stringItemWithEnabledAndHintVM.ExecuteAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StringItemWithEnabledAndHintVM stringItemWithEnabledAndHintVM = ...;
stringItemWithEnabledAndHintVM.ExecuteAction();
```

## See Also

- [Area Index](../)