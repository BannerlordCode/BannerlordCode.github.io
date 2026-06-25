---
title: "DLLCheckData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DLLCheckData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DLLCheckData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLCheckData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckData.cs`

## Overview

`DLLCheckData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DLLCheckData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DLLName` | `public string DLLName { get; set; }` |
| `DLLVerifyInformation` | `public string DLLVerifyInformation { get; set; }` |
| `LatestSizeInBytes` | `public uint LatestSizeInBytes { get; set; }` |
| `IsDangerous` | `public bool IsDangerous { get; set; }` |

## Usage Example

```csharp
var value = new DLLCheckData();
```

## See Also

- [Complete Class Catalog](../catalog)