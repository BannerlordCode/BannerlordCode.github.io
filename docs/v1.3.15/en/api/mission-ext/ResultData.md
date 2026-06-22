<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResultData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ResultData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResultData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/ResultData.cs`

## Overview

`ResultData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Errors` | `public string Errors { get; set; }` |
| `DLLs` | `public List<DLLResult> DLLs { get; set; }` |

## Key Methods

### AddDLLResult
```csharp
public void AddDLLResult(string dllName, bool isSafe, string information)
```

### ToString
```csharp
public override string ToString()
```

## Usage Example

```csharp
// Typical usage of ResultData (Data)
new ResultData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)