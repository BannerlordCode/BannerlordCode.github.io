<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/WeaponData.cs`

## Overview

`WeaponData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### IsValid
```csharp
public bool IsValid()
```

### GetItemObject
```csharp
public ItemObject GetItemObject()
```

### DeinitializeManagedPointers
```csharp
public void DeinitializeManagedPointers()
```

## Usage Example

```csharp
// Typical usage of WeaponData (Data)
new WeaponData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)