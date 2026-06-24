<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxSaveHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSaveHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxSaveHelper`
**Base:** none
**File:** `SandBox/SandBoxSaveHelper.cs`

## Overview

`SandBoxSaveHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SandBoxSaveHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TryLoadSave
`public static void TryLoadSave(SaveGameFileInfo saveInfo, Action<LoadResult> onStartGame, Action onCancel = null)`

**Purpose:** Attempts to get `load save`, usually returning the result in an out parameter.

### CheckMetaDataCompatibilityErrors
`public static MBReadOnlyList<SandBoxSaveHelper.ModuleCheckResult> CheckMetaDataCompatibilityErrors(MetaData fileMetaData)`

**Purpose:** Handles logic related to `check meta data compatibility errors`.

### GetIsDisabledWithReason
`public static bool GetIsDisabledWithReason(SaveGameFileInfo saveGameFileInfo, out TextObject reason)`

**Purpose:** Gets the current value of `is disabled with reason`.

### GetModuleNameFromModuleId
`public static string GetModuleNameFromModuleId(string id)`

**Purpose:** Gets the current value of `module name from module id`.

## Usage Example

```csharp
SandBoxSaveHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)