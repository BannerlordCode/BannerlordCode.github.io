<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherDLLData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDLLData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDLLData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`

## Overview

`LauncherDLLData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `SubModule` | `public SubModuleInfo SubModule { get; }` |
| `IsDangerous` | `public bool IsDangerous { get; }` |
| `VerifyInformation` | `public string VerifyInformation { get; }` |
| `Size` | `public uint Size { get; }` |

## Key Methods

### SetIsDLLDangerous
```csharp
public void SetIsDLLDangerous(bool isDangerous)
```

### SetDLLSize
```csharp
public void SetDLLSize(uint size)
```

### SetDLLVerifyInformation
```csharp
public void SetDLLVerifyInformation(string info)
```

## Usage Example

```csharp
// Typical usage of LauncherDLLData (Data)
new LauncherDLLData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)