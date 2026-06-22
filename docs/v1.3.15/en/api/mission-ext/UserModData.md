<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserModData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserModData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserModData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserModData.cs`

## Overview

`UserModData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `LastKnownVersion` | `public string LastKnownVersion { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### IsUpdatedToBeDefault
```csharp
public bool IsUpdatedToBeDefault(ModuleInfo module)
```

## Usage Example

```csharp
// Typical usage of UserModData (Data)
new UserModData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)