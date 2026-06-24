<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicTooltipViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicTooltipViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class BasicTooltipViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/BasicTooltipViewModel.cs`

## Overview

`BasicTooltipViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `BasicTooltipViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetToolipCallback
`public void SetToolipCallback(Func<List<TooltipProperty>> tooltipPropertiesDelegate)`

**Purpose:** Sets the value or state of `toolip callback`.

### SetGenericTooltipCallback
`public void SetGenericTooltipCallback(Action preBuiltTooltipCallback)`

**Purpose:** Sets the value or state of `generic tooltip callback`.

### SetHintCallback
`public void SetHintCallback(Func<string> hintProperty)`

**Purpose:** Sets the value or state of `hint callback`.

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

## Usage Example

```csharp
var vm = new BasicTooltipViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)