<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActionOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## Overview

`ActionOptionData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnAction` | `public Action OnAction { get; }` |

## Key Methods

### Commit
```csharp
public void Commit()
```

### GetDefaultValue
```csharp
public float GetDefaultValue()
```

### GetOptionType
```csharp
public object GetOptionType()
```

### GetValue
```csharp
public float GetValue(bool forceRefresh)
```

### IsNative
```csharp
public bool IsNative()
```

### SetValue
```csharp
public void SetValue(float value)
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
// Typical usage of ActionOptionData (Data)
new ActionOptionData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)