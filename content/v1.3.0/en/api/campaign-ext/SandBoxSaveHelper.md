---
title: "SandBoxSaveHelper"
description: "Auto-generated class reference for SandBoxSaveHelper."
---
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

**Purpose:** Attempts to retrieve load save, usually returning success through an out parameter.

```csharp
// Static call; no instance required
SandBoxSaveHelper.TryLoadSave(saveInfo, onStartGame, null);
```

### CheckMetaDataCompatibilityErrors
`public static MBReadOnlyList<SandBoxSaveHelper.ModuleCheckResult> CheckMetaDataCompatibilityErrors(MetaData fileMetaData)`

**Purpose:** Verifies whether meta data compatibility errors holds true for the this instance.

```csharp
// Static call; no instance required
SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(fileMetaData);
```

### GetIsDisabledWithReason
`public static bool GetIsDisabledWithReason(SaveGameFileInfo saveGameFileInfo, out TextObject reason)`

**Purpose:** Reads and returns the is disabled with reason value held by the this instance.

```csharp
// Static call; no instance required
SandBoxSaveHelper.GetIsDisabledWithReason(saveGameFileInfo, reason);
```

### GetModuleNameFromModuleId
`public static string GetModuleNameFromModuleId(string id)`

**Purpose:** Reads and returns the module name from module id value held by the this instance.

```csharp
// Static call; no instance required
SandBoxSaveHelper.GetModuleNameFromModuleId("example");
```

## Usage Example

```csharp
SandBoxSaveHelper.Initialize();
```

## See Also

- [Area Index](../)