---
title: "BoolItemWithActionVM"
description: "Auto-generated class reference for BoolItemWithActionVM."
---
# BoolItemWithActionVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Generic
**Module:** TaleWorlds.Core
**Type:** `public class BoolItemWithActionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Generic/BoolItemWithActionVM.cs`

## Overview

`BoolItemWithActionVM` lives in `TaleWorlds.Core.ViewModelCollection.Generic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Generic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |

## Key Methods

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of BoolItemWithActionVM from the subsystem API first
BoolItemWithActionVM boolItemWithActionVM = ...;
boolItemWithActionVM.ExecuteAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoolItemWithActionVM boolItemWithActionVM = ...;
boolItemWithActionVM.ExecuteAction();
```

## See Also

- [Area Index](../)