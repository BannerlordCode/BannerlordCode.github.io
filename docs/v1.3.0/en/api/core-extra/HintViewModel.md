<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HintViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HintViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs`

## Overview

`HintViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `HintViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

## Usage Example

```csharp
var vm = new HintViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)