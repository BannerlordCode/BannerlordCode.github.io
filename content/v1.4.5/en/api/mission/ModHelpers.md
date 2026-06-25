---
title: "ModHelpers"
description: "Auto-generated class reference for ModHelpers."
---
# ModHelpers

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class ModHelpers`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/ModHelpers.cs`

## Overview

`ModHelpers` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSceneObjRootPath
`public static string GetSceneObjRootPath()`

**Purpose:** Reads and returns the scene obj root path value held by the this instance.

```csharp
// Static call; no instance required
ModHelpers.GetSceneObjRootPath();
```

### DoesSceneFolderAlreadyExist
`public static bool DoesSceneFolderAlreadyExist(string sceneName)`

**Purpose:** Returns a boolean answer to whether scene folder already exist is true for the this instance.

```csharp
// Static call; no instance required
ModHelpers.DoesSceneFolderAlreadyExist("example");
```

### GetTempFilePath
`public static string GetTempFilePath(string anyIdentifier)`

**Purpose:** Reads and returns the temp file path value held by the this instance.

```csharp
// Static call; no instance required
ModHelpers.GetTempFilePath("example");
```

### ReadSceneNameOfDirectory
`public static string ReadSceneNameOfDirectory(string sceneDirectoryPath)`

**Purpose:** Reads the data or state of scene name of directory.

```csharp
// Static call; no instance required
ModHelpers.ReadSceneNameOfDirectory("example");
```

### WriteBufferToTempFile
`public static string WriteBufferToTempFile(byte buffer)`

**Purpose:** Writes buffer to temp file to the target location.

```csharp
// Static call; no instance required
ModHelpers.WriteBufferToTempFile(0);
```

### GetTempFileStream
`public static FileStream GetTempFileStream()`

**Purpose:** Reads and returns the temp file stream value held by the this instance.

```csharp
// Static call; no instance required
ModHelpers.GetTempFileStream();
```

### ExtractZipToTempDirectory
`public static string ExtractZipToTempDirectory(string sourceZipFilePath)`

**Purpose:** Executes the ExtractZipToTempDirectory logic.

```csharp
// Static call; no instance required
ModHelpers.ExtractZipToTempDirectory("example");
```

### DownloadToTempFile
`public static async Task<string> DownloadToTempFile(HttpClient httpClient, string url, IProgress<ProgressUpdate> progress = null, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Executes the DownloadToTempFile logic.

```csharp
// Static call; no instance required
ModHelpers.DownloadToTempFile(httpClient, "example", null, default(CancellationToken));
```

## Usage Example

```csharp
ModHelpers.GetSceneObjRootPath();
```

## See Also

- [Area Index](../)