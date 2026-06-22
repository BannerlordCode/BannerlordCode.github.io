<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DLLCheckData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DLLCheckData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLCheckData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckData.cs`

## Overview

`DLLCheckData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `DLLName` | `public string DLLName { get; set; }` |
| `DLLVerifyInformation` | `public string DLLVerifyInformation { get; set; }` |
| `LatestSizeInBytes` | `public uint LatestSizeInBytes { get; set; }` |
| `IsDangerous` | `public bool IsDangerous { get; set; }` |

## Usage Example

```csharp
// Typical usage of DLLCheckData (Data)
new DLLCheckData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)