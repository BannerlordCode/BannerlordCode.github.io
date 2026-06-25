---
title: "BasicTooltipViewModel"
description: "Auto-generated class reference for BasicTooltipViewModel."
---
# BasicTooltipViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class BasicTooltipViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/BasicTooltipViewModel.cs`

## Overview

`BasicTooltipViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `BasicTooltipViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetToolipCallback
`public void SetToolipCallback(Func<List<TooltipProperty>> tooltipPropertiesDelegate)`

**Purpose:** Assigns a new value to `toolip callback` and updates the object's internal state.

```csharp
// Obtain an instance of BasicTooltipViewModel from the subsystem API first
BasicTooltipViewModel basicTooltipViewModel = ...;
basicTooltipViewModel.SetToolipCallback(tooltipPropertiesDelegate);
```

### SetGenericTooltipCallback
`public void SetGenericTooltipCallback(Action preBuiltTooltipCallback)`

**Purpose:** Assigns a new value to `generic tooltip callback` and updates the object's internal state.

```csharp
// Obtain an instance of BasicTooltipViewModel from the subsystem API first
BasicTooltipViewModel basicTooltipViewModel = ...;
basicTooltipViewModel.SetGenericTooltipCallback(preBuiltTooltipCallback);
```

### SetHintCallback
`public void SetHintCallback(Func<string> hintProperty)`

**Purpose:** Assigns a new value to `hint callback` and updates the object's internal state.

```csharp
// Obtain an instance of BasicTooltipViewModel from the subsystem API first
BasicTooltipViewModel basicTooltipViewModel = ...;
basicTooltipViewModel.SetHintCallback(hintProperty);
```

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of BasicTooltipViewModel from the subsystem API first
BasicTooltipViewModel basicTooltipViewModel = ...;
basicTooltipViewModel.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of BasicTooltipViewModel from the subsystem API first
BasicTooltipViewModel basicTooltipViewModel = ...;
basicTooltipViewModel.ExecuteEndHint();
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
BasicTooltipViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)