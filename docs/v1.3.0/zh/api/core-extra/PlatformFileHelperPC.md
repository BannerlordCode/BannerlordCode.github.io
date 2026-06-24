<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlatformFileHelperPC`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlatformFileHelperPC

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PlatformFileHelperPC : IPlatformFileHelper`
**Base:** `IPlatformFileHelper`
**File:** `TaleWorlds.Library/PlatformFileHelperPC.cs`

## 概述

`PlatformFileHelperPC` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SaveFile
`public SaveResult SaveFile(PlatformFilePath path, byte data)`

**用途 / Purpose:** 保存 `file` 数据。

### SaveFileString
`public SaveResult SaveFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 保存 `file string` 数据。

### SaveFileAsync
`public Task<SaveResult> SaveFileAsync(PlatformFilePath path, byte data)`

**用途 / Purpose:** 保存 `file async` 数据。

### SaveFileStringAsync
`public Task<SaveResult> SaveFileStringAsync(PlatformFilePath path, string data)`

**用途 / Purpose:** 保存 `file string async` 数据。

### AppendLineToFileString
`public SaveResult AppendLineToFileString(PlatformFilePath path, string data)`

**用途 / Purpose:** 处理 `append line to file string` 相关逻辑。

### GetFileFullPath
`public string GetFileFullPath(PlatformFilePath filePath)`

**用途 / Purpose:** 获取 `file full path` 的当前值。

### FileExists
`public bool FileExists(PlatformFilePath path)`

**用途 / Purpose:** 处理 `file exists` 相关逻辑。

### GetFileContentStringAsync
`public async Task<string> GetFileContentStringAsync(PlatformFilePath path)`

**用途 / Purpose:** 获取 `file content string async` 的当前值。

### GetFileContentString
`public string GetFileContentString(PlatformFilePath path)`

**用途 / Purpose:** 获取 `file content string` 的当前值。

### GetFileContent
`public byte GetFileContent(PlatformFilePath path)`

**用途 / Purpose:** 获取 `file content` 的当前值。

### DeleteFile
`public bool DeleteFile(PlatformFilePath path)`

**用途 / Purpose:** 处理 `delete file` 相关逻辑。

### CreateDirectory
`public void CreateDirectory(PlatformDirectoryPath path)`

**用途 / Purpose:** 创建一个 `directory` 实例或对象。

### GetFiles
`public PlatformFilePath GetFiles(PlatformDirectoryPath path, string searchPattern, SearchOption searchOption)`

**用途 / Purpose:** 获取 `files` 的当前值。

### RenameFile
`public void RenameFile(PlatformFilePath filePath, string newName)`

**用途 / Purpose:** 处理 `rename file` 相关逻辑。

### GetError
`public string GetError()`

**用途 / Purpose:** 获取 `error` 的当前值。

## 使用示例

```csharp
var value = new PlatformFileHelperPC();
value.SaveFile(path, 0);
```

## 参见

- [完整类目录](../catalog)