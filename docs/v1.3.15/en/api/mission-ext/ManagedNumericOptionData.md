<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedNumericOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## Overview

`ManagedNumericOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### GetMinValue
```csharp
public float GetMinValue()
```

### GetMaxValue
```csharp
public float GetMaxValue()
```

### GetIsDiscrete
```csharp
public bool GetIsDiscrete()
```

### GetDiscreteIncrementInterval
```csharp
public int GetDiscreteIncrementInterval()
```

### GetShouldUpdateContinuously
```csharp
public bool GetShouldUpdateContinuously()
```

## Usage Example

```csharp
// Typical usage of ManagedNumericOptionData (Data)
new ManagedNumericOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)