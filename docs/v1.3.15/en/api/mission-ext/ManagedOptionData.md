<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ManagedOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs`

## Overview

`ManagedOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### GetDefaultValue
```csharp
public virtual float GetDefaultValue()
```

### Commit
```csharp
public void Commit()
```

### GetValue
```csharp
public float GetValue(bool forceRefresh)
```

### SetValue
```csharp
public void SetValue(float value)
```

### GetOptionType
```csharp
public object GetOptionType()
```

### IsNative
```csharp
public bool IsNative()
```

### IsAction
```csharp
public bool IsAction()
```

### GetIsDisabledAndReasonID
```csharp
public ValueTuple<string, bool> GetIsDisabledAndReasonID()
```

## Usage Example

```csharp
// Typical usage of ManagedOptionData (Data)
new ManagedOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)