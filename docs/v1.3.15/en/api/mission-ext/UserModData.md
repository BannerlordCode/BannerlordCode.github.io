<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UserModData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UserModData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserModData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserModData.cs`

## Overview

`UserModData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UserModData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `LastKnownVersion` | `public string LastKnownVersion { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### IsUpdatedToBeDefault
`public bool IsUpdatedToBeDefault(ModuleInfo module)`

**Purpose:** Handles logic related to `is updated to be default`.

## Usage Example

```csharp
var value = new UserModData();
```

## See Also

- [Complete Class Catalog](../catalog)