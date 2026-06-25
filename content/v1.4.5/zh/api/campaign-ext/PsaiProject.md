---
title: "PsaiProject"
description: "PsaiProject 的自动生成类参考。"
---
# PsaiProject

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class PsaiProject : ICloneable`
**Base:** `ICloneable`
**File:** `bin/TaleWorlds.PSAI/psai.Editor/PsaiProject.cs`

## 概述

`PsaiProject` 位于 `psai.Editor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.Editor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InitialExportDirectory` | `public string InitialExportDirectory { get; set; }` |
| `SerializedByProtocolVersion` | `public string SerializedByProtocolVersion { get; set; }` |
| `Properties` | `public ProjectProperties Properties { get; set; }` |
| `Themes` | `public List<Theme> Themes { get; set; }` |

## 主要方法

### Init
`public void Init()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.Init();
```

### LoadProjectFromStream
`public static PsaiProject LoadProjectFromStream(StreamReader reader, string path)`

**用途 / Purpose:** 从持久化存储或流中读取 project from stream。

```csharp
// 静态调用，不需要实例
PsaiProject.LoadProjectFromStream(reader, "example");
```

### LoadProjectFromXmlFile
`public static PsaiProject LoadProjectFromXmlFile(string filename)`

**用途 / Purpose:** 从持久化存储或流中读取 project from xml file。

```csharp
// 静态调用，不需要实例
PsaiProject.LoadProjectFromXmlFile("example");
```

### SaveAsXmlFile
`public void SaveAsXmlFile(string filename)`

**用途 / Purpose:** 将 as xml file 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.SaveAsXmlFile("example");
```

### Report
`public void Report(bool reportGroups, bool reportSegments)`

**用途 / Purpose:** 调用 Report 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.Report(false, false);
```

### ConvertProjectFile_From_Legacy_To_0_9_12
`public bool ConvertProjectFile_From_Legacy_To_0_9_12(string pathToProjectFile)`

**用途 / Purpose:** 把project file_ from_ legacy_ to_0_9_12转换为另一种表示或类型。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.ConvertProjectFile_From_Legacy_To_0_9_12("example");
```

### ReconstructReferencesAfterXmlDeserialization
`public void ReconstructReferencesAfterXmlDeserialization()`

**用途 / Purpose:** 调用 ReconstructReferencesAfterXmlDeserialization 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.ReconstructReferencesAfterXmlDeserialization();
```

### MergeProjects
`public void MergeProjects(PsaiProject project)`

**用途 / Purpose:** 调用 MergeProjects 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.MergeProjects(project);
```

### ReconstructIds
`public void ReconstructIds(string path)`

**用途 / Purpose:** 调用 ReconstructIds 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.ReconstructIds("example");
```

### DebugCheckProjectIntegrity
`public void DebugCheckProjectIntegrity()`

**用途 / Purpose:** 调用 DebugCheckProjectIntegrity 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.DebugCheckProjectIntegrity();
```

### BuildPsaiDotNetSoundtrackFromProject
`public Soundtrack BuildPsaiDotNetSoundtrackFromProject()`

**用途 / Purpose:** 组装并返回psai dot net soundtrack from project的构建结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.BuildPsaiDotNetSoundtrackFromProject();
```

### GetSegmentsOfAllThemes
`public HashSet<Segment> GetSegmentsOfAllThemes()`

**用途 / Purpose:** 读取并返回当前对象中 segments of all themes 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetSegmentsOfAllThemes();
```

### GetThemeById
`public Theme GetThemeById(int themeId)`

**用途 / Purpose:** 读取并返回当前对象中 theme by id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetThemeById(0);
```

### GetSnippetById
`public Segment GetSnippetById(int id)`

**用途 / Purpose:** 读取并返回当前对象中 snippet by id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetSnippetById(0);
```

### GetGroupBySerializationId
`public Group GetGroupBySerializationId(int id)`

**用途 / Purpose:** 读取并返回当前对象中 group by serialization id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetGroupBySerializationId(0);
```

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity)`

**用途 / Purpose:** 将 psai music entity 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.AddPsaiMusicEntity(entity);
```

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity, int targetIndex)`

**用途 / Purpose:** 将 psai music entity 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.AddPsaiMusicEntity(entity, 0);
```

### DeleteMusicEntity
`public void DeleteMusicEntity(PsaiMusicEntity entity)`

**用途 / Purpose:** 调用 DeleteMusicEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.DeleteMusicEntity(entity);
```

### GetHighestSegmentId
`public int GetHighestSegmentId()`

**用途 / Purpose:** 读取并返回当前对象中 highest segment id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetHighestSegmentId();
```

### GetNextFreeSnippetId
`public int GetNextFreeSnippetId(int idToStartSearchFrom)`

**用途 / Purpose:** 读取并返回当前对象中 next free snippet id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetNextFreeSnippetId(0);
```

### GetGroupsOfAllThemes
`public HashSet<Group> GetGroupsOfAllThemes()`

**用途 / Purpose:** 读取并返回当前对象中 groups of all themes 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetGroupsOfAllThemes();
```

### CheckIfSnippetIsManualBridgeSnippetForSourceGroup
`public bool CheckIfSnippetIsManualBridgeSnippetForSourceGroup(Segment snippet, Group sourceGroup)`

**用途 / Purpose:** 检查if snippet is manual bridge snippet for source group在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfSnippetIsManualBridgeSnippetForSourceGroup(snippet, sourceGroup);
```

### CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup
`public bool CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup(Group sourceGroup, Group targetGroup)`

**用途 / Purpose:** 检查if there is at least one bridge snippet from source group to target group在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup(sourceGroup, targetGroup);
```

### CheckIfSnippetIsManualBridgeSnippetToAnyGroup
`public bool CheckIfSnippetIsManualBridgeSnippetToAnyGroup(Segment snippet, bool getGroups, out List<Group> groups)`

**用途 / Purpose:** 检查if snippet is manual bridge snippet to any group在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfSnippetIsManualBridgeSnippetToAnyGroup(snippet, false, groups);
```

### DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities
`public void DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities()`

**用途 / Purpose:** 调用 DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities 对应的操作。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
psaiProject.DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities();
```

### GetNextFreeThemeId
`public int GetNextFreeThemeId(int idToStartSearchFrom)`

**用途 / Purpose:** 读取并返回当前对象中 next free theme id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetNextFreeThemeId(0);
```

### CheckIfThemeIdIsInUse
`public bool CheckIfThemeIdIsInUse(int themeId)`

**用途 / Purpose:** 检查if theme id is in use在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfThemeIdIsInUse(0);
```

### GetSnippetsById
`public List<Segment> GetSnippetsById(int id)`

**用途 / Purpose:** 读取并返回当前对象中 snippets by id 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.GetSnippetsById(0);
```

### Clone
`public object Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 PsaiProject 实例
PsaiProject psaiProject = ...;
var result = psaiProject.Clone();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PsaiProject psaiProject = ...;
psaiProject.Init();
```

## 参见

- [本区域目录](../)