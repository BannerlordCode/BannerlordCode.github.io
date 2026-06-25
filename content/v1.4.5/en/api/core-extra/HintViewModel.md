---
title: "HintViewModel"
description: "Auto-generated class reference for HintViewModel."
---
# HintViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/HintViewModel.cs`

## Overview

`HintViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `HintViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with begin hint.

```csharp
// Obtain an instance of HintViewModel from the subsystem API first
HintViewModel hintViewModel = ...;
hintViewModel.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of HintViewModel from the subsystem API first
HintViewModel hintViewModel = ...;
hintViewModel.ExecuteEndHint();
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
HintViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)