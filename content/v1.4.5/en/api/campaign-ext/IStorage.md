---
title: "IStorage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IStorage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IStorage

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IStorage : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IStorage.cs`

## Overview

`IStorage` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### FileWrite
`public virtual void FileWrite(string fileName, byte data, uint dataSize)`

**Purpose:** Handles logic related to `file write`.

### FileRead
`public virtual uint FileRead(string fileName, byte data, uint dataSize)`

**Purpose:** Handles logic related to `file read`.

### FileDelete
`public virtual void FileDelete(string fileName)`

**Purpose:** Handles logic related to `file delete`.

### FileExists
`public virtual bool FileExists(string fileName)`

**Purpose:** Handles logic related to `file exists`.

### GetFileSize
`public virtual uint GetFileSize(string fileName)`

**Purpose:** Gets the current value of `file size`.

### GetFileTimestamp
`public virtual uint GetFileTimestamp(string fileName)`

**Purpose:** Gets the current value of `file timestamp`.

### GetFileCount
`public virtual uint GetFileCount()`

**Purpose:** Gets the current value of `file count`.

### GetFileNameByIndex
`public virtual string GetFileNameByIndex(uint index)`

**Purpose:** Gets the current value of `file name by index`.

### GetFileNameCopyByIndex
`public virtual void GetFileNameCopyByIndex(uint index, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `file name copy by index`.

### FileShare
`public virtual void FileShare(string fileName, IFileShareListener listener)`

**Purpose:** Handles logic related to `file share`.

### FileShare
`public virtual void FileShare(string fileName)`

**Purpose:** Handles logic related to `file share`.

### DownloadSharedFile
`public virtual void DownloadSharedFile(ulong sharedFileID, ISharedFileDownloadListener listener)`

**Purpose:** Handles logic related to `download shared file`.

### DownloadSharedFile
`public virtual void DownloadSharedFile(ulong sharedFileID)`

**Purpose:** Handles logic related to `download shared file`.

### GetSharedFileName
`public virtual string GetSharedFileName(ulong sharedFileID)`

**Purpose:** Gets the current value of `shared file name`.

### GetSharedFileNameCopy
`public virtual void GetSharedFileNameCopy(ulong sharedFileID, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `shared file name copy`.

### GetSharedFileSize
`public virtual uint GetSharedFileSize(ulong sharedFileID)`

**Purpose:** Gets the current value of `shared file size`.

### GetSharedFileOwner
`public virtual GalaxyID GetSharedFileOwner(ulong sharedFileID)`

**Purpose:** Gets the current value of `shared file owner`.

### SharedFileRead
`public virtual uint SharedFileRead(ulong sharedFileID, byte data, uint dataSize, uint offset)`

**Purpose:** Handles logic related to `shared file read`.

### SharedFileRead
`public virtual uint SharedFileRead(ulong sharedFileID, byte data, uint dataSize)`

**Purpose:** Handles logic related to `shared file read`.

### SharedFileClose
`public virtual void SharedFileClose(ulong sharedFileID)`

**Purpose:** Handles logic related to `shared file close`.

### GetDownloadedSharedFileCount
`public virtual uint GetDownloadedSharedFileCount()`

**Purpose:** Gets the current value of `downloaded shared file count`.

### GetDownloadedSharedFileByIndex
`public virtual ulong GetDownloadedSharedFileByIndex(uint index)`

**Purpose:** Gets the current value of `downloaded shared file by index`.

## Usage Example

```csharp
var value = new IStorage();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)