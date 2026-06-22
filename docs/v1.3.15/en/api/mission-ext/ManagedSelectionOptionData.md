<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedSelectionOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## Overview

`ManagedSelectionOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### GetSelectableOptionsLimit
```csharp
public int GetSelectableOptionsLimit()
```

### GetSelectableOptionNames
```csharp
public IEnumerable<SelectionData> GetSelectableOptionNames()
```

### GetOptionsLimit
```csharp
public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)
```

## Usage Example

```csharp
// Typical usage of ManagedSelectionOptionData (Data)
new ManagedSelectionOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)