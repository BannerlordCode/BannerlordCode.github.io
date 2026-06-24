<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FileDriver`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class FileDriver : ISaveDriver`
**Base:** `ISaveDriver`
**Area:** save-system

## Overview

`FileDriver` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SavePath` | `public static PlatformDirectoryPath SavePath { get; }` |

## Key Methods

### GetSaveFilePath
`public static PlatformFilePath GetSaveFilePath(string fileName)`

**Purpose:** Gets the current value of `save file path`.

### Save
`public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`

**Purpose:** Saves `save` data.

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

**Purpose:** Loads `meta data` data.

### Load
`public LoadData Load(string saveName)`

**Purpose:** Loads `load` data.

### GetSaveGameFileInfos
`public SaveGameFileInfo GetSaveGameFileInfos()`

**Purpose:** Gets the current value of `save game file infos`.

### GetSaveGameFileNames
`public string GetSaveGameFileNames()`

**Purpose:** Gets the current value of `save game file names`.

### Delete
`public bool Delete(string saveName)`

**Purpose:** Handles logic related to `delete`.

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

**Purpose:** Handles logic related to `is save game file exists`.

### IsWorkingAsync
`public bool IsWorkingAsync()`

**Purpose:** Handles logic related to `is working async`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
FileDriver.GetSaveFilePath("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
