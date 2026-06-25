---
title: "PlatformFileHelperPC"
description: "Auto-generated class reference for PlatformFileHelperPC."
---
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

**Purpose:** Writes `file` to persistent storage or a stream.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFile(path, 0);
```

### SaveFileString
`public SaveResult SaveFileString(PlatformFilePath path, string data)`

**Purpose:** Writes `file string` to persistent storage or a stream.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFileString(path, "example");
```

### SaveFileAsync
`public Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**Purpose:** Writes `file async` to persistent storage or a stream.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFileAsync(path, 0);
```

### SaveFileStringAsync
`public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**Purpose:** Writes `file string async` to persistent storage or a stream.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.SaveFileStringAsync(path, "example");
```

### AppendLineToFileString
`public SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**Purpose:** Appends `line to file string` to the end of the current collection or sequence.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.AppendLineToFileString(path, "example");
```

### GetFileFullPath
`public string GetFileFullPath(PlatformFilePath filePath)`

**Purpose:** Reads and returns the `file full path` value held by the current object.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileFullPath(filePath);
```

### FileExists
`public bool FileExists(PlatformFilePath path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.FileExists(path);
```

### GetFileContentStringAsync
`public async Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**Purpose:** Reads and returns the `file content string async` value held by the current object.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileContentStringAsync(path);
```

### GetFileContentString
`public string GetFileContentString(PlatformFilePath path)`

**Purpose:** Reads and returns the `file content string` value held by the current object.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileContentString(path);
```

### GetFileContent
`public byte GetFileContent(PlatformFilePath path)`

**Purpose:** Reads and returns the `file content` value held by the current object.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFileContent(path);
```

### DeleteFile
`public bool DeleteFile(PlatformFilePath path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.DeleteFile(path);
```

### CreateDirectory
`public void CreateDirectory(PlatformDirectoryPath path)`

**Purpose:** Constructs a new `directory` entity and returns it to the caller.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
platformFileHelperPC.CreateDirectory(path);
```

### GetFiles
`public PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**Purpose:** Reads and returns the `files` value held by the current object.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetFiles(path, "example", searchOption);
```

### RenameFile
`public void RenameFile(PlatformFilePath filePath, string newName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
platformFileHelperPC.RenameFile(filePath, "example");
```

### GetError
`public string GetError()`

**Purpose:** Reads and returns the `error` value held by the current object.

```csharp
// Obtain an instance of PlatformFileHelperPC from the subsystem API first
PlatformFileHelperPC platformFileHelperPC = ...;
var result = platformFileHelperPC.GetError();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlatformFileHelperPC platformFileHelperPC = ...;
platformFileHelperPC.SaveFile(path, 0);
```

## See Also

- [Area Index](../)