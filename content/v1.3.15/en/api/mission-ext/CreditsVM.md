---
title: "CreditsVM"
description: "Auto-generated class reference for CreditsVM."
---
# CreditsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs`

## Overview

`CreditsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RootItem` | `public CreditsItemVM RootItem { get; set; }` |
| `ExitKey` | `public InputKeyItemVM ExitKey { get; set; }` |
| `ExitText` | `public string ExitText { get; set; }` |

## Key Methods

### FillFromFile
`public void FillFromFile(string path)`

**Purpose:** Executes the FillFromFile logic.

```csharp
// Obtain an instance of CreditsVM from the subsystem API first
CreditsVM creditsVM = ...;
creditsVM.FillFromFile("example");
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CreditsVM from the subsystem API first
CreditsVM creditsVM = ...;
creditsVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CreditsVM creditsVM = ...;
creditsVM.FillFromFile("example");
```

## See Also

- [Area Index](../)