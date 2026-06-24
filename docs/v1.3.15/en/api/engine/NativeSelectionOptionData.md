<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeSelectionOptionData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeSelectionOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeSelectionOptionData : NativeOptionData, ISelectionOptionData, IOptionData`
**Base:** `NativeOptionData`
**File:** `TaleWorlds.Engine/Options/NativeSelectionOptionData.cs`

## Overview

`NativeSelectionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeSelectionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**Purpose:** Gets the current value of `selectable options limit`.

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**Purpose:** Gets the current value of `selectable option names`.

### GetOptionsLimit
`public static int GetOptionsLimit(NativeOptions.NativeOptionsType optionType)`

**Purpose:** Gets the current value of `options limit`.

## Usage Example

```csharp
var value = new NativeSelectionOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)