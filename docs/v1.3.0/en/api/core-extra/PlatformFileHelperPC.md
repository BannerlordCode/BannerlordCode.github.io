<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformFileHelperPC`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlatformFileHelperPC

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper`
**Base:** `IPlatformFileHelper`
**File:** `TaleWorlds.Library/PlatformFileHelperPC.cs`

## Overview

`PlatformFileHelperPC` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SaveFile
`public SaveResult SaveFile(PlatformFilePath path, byte data)`

**Purpose:** Saves `file` data.

### SaveFileString
`public SaveResult SaveFileString(PlatformFilePath path, string data)`

**Purpose:** Saves `file string` data.

### SaveFileAsync
`public Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**Purpose:** Saves `file async` data.

### SaveFileStringAsync
`public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**Purpose:** Saves `file string async` data.

### AppendLineToFileString
`public SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**Purpose:** Handles logic related to `append line to file string`.

### GetFileFullPath
`public string GetFileFullPath(PlatformFilePath filePath)`

**Purpose:** Gets the current value of `file full path`.

### FileExists
`public bool FileExists(PlatformFilePath path)`

**Purpose:** Handles logic related to `file exists`.

### GetFileContentStringAsync
`public async Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**Purpose:** Gets the current value of `file content string async`.

### GetFileContentString
`public string GetFileContentString(PlatformFilePath path)`

**Purpose:** Gets the current value of `file content string`.

### GetFileContent
`public byte GetFileContent(PlatformFilePath path)`

**Purpose:** Gets the current value of `file content`.

### DeleteFile
`public bool DeleteFile(PlatformFilePath path)`

**Purpose:** Handles logic related to `delete file`.

### CreateDirectory
`public void CreateDirectory(PlatformDirectoryPath path)`

**Purpose:** Creates a new `directory` instance or object.

### GetFiles
`public PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**Purpose:** Gets the current value of `files`.

### RenameFile
`public void RenameFile(PlatformFilePath filePath, string newName)`

**Purpose:** Handles logic related to `rename file`.

### GetError
`public string GetError()`

**Purpose:** Gets the current value of `error`.

## Usage Example

```csharp
var value = new PlatformFileHelperPC();
value.SaveFile(path, 0);
```

## See Also

- [Complete Class Catalog](../catalog)