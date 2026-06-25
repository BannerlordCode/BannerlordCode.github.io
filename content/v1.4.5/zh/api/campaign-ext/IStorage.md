---
title: "IStorage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IStorage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IStorage

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IStorage : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IStorage.cs`

## 概述

`IStorage` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### FileWrite
`public virtual void FileWrite(string fileName, byte data, uint dataSize)`

**用途 / Purpose:** 处理 `file write` 相关逻辑。

### FileRead
`public virtual uint FileRead(string fileName, byte data, uint dataSize)`

**用途 / Purpose:** 处理 `file read` 相关逻辑。

### FileDelete
`public virtual void FileDelete(string fileName)`

**用途 / Purpose:** 处理 `file delete` 相关逻辑。

### FileExists
`public virtual bool FileExists(string fileName)`

**用途 / Purpose:** 处理 `file exists` 相关逻辑。

### GetFileSize
`public virtual uint GetFileSize(string fileName)`

**用途 / Purpose:** 获取 `file size` 的当前值。

### GetFileTimestamp
`public virtual uint GetFileTimestamp(string fileName)`

**用途 / Purpose:** 获取 `file timestamp` 的当前值。

### GetFileCount
`public virtual uint GetFileCount()`

**用途 / Purpose:** 获取 `file count` 的当前值。

### GetFileNameByIndex
`public virtual string GetFileNameByIndex(uint index)`

**用途 / Purpose:** 获取 `file name by index` 的当前值。

### GetFileNameCopyByIndex
`public virtual void GetFileNameCopyByIndex(uint index, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `file name copy by index` 的当前值。

### FileShare
`public virtual void FileShare(string fileName, IFileShareListener listener)`

**用途 / Purpose:** 处理 `file share` 相关逻辑。

### FileShare
`public virtual void FileShare(string fileName)`

**用途 / Purpose:** 处理 `file share` 相关逻辑。

### DownloadSharedFile
`public virtual void DownloadSharedFile(ulong sharedFileID, ISharedFileDownloadListener listener)`

**用途 / Purpose:** 处理 `download shared file` 相关逻辑。

### DownloadSharedFile
`public virtual void DownloadSharedFile(ulong sharedFileID)`

**用途 / Purpose:** 处理 `download shared file` 相关逻辑。

### GetSharedFileName
`public virtual string GetSharedFileName(ulong sharedFileID)`

**用途 / Purpose:** 获取 `shared file name` 的当前值。

### GetSharedFileNameCopy
`public virtual void GetSharedFileNameCopy(ulong sharedFileID, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `shared file name copy` 的当前值。

### GetSharedFileSize
`public virtual uint GetSharedFileSize(ulong sharedFileID)`

**用途 / Purpose:** 获取 `shared file size` 的当前值。

### GetSharedFileOwner
`public virtual GalaxyID GetSharedFileOwner(ulong sharedFileID)`

**用途 / Purpose:** 获取 `shared file owner` 的当前值。

### SharedFileRead
`public virtual uint SharedFileRead(ulong sharedFileID, byte data, uint dataSize, uint offset)`

**用途 / Purpose:** 处理 `shared file read` 相关逻辑。

### SharedFileRead
`public virtual uint SharedFileRead(ulong sharedFileID, byte data, uint dataSize)`

**用途 / Purpose:** 处理 `shared file read` 相关逻辑。

### SharedFileClose
`public virtual void SharedFileClose(ulong sharedFileID)`

**用途 / Purpose:** 处理 `shared file close` 相关逻辑。

### GetDownloadedSharedFileCount
`public virtual uint GetDownloadedSharedFileCount()`

**用途 / Purpose:** 获取 `downloaded shared file count` 的当前值。

### GetDownloadedSharedFileByIndex
`public virtual ulong GetDownloadedSharedFileByIndex(uint index)`

**用途 / Purpose:** 获取 `downloaded shared file by index` 的当前值。

## 使用示例

```csharp
var value = new IStorage();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)