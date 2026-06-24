<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiProject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiProject

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class PsaiProject : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/PsaiProject.cs`

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

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### LoadProjectFromStream
`public static PsaiProject LoadProjectFromStream(StreamReader reader, string path)`

**用途 / Purpose:** 加载 `project from stream` 数据。

### LoadProjectFromXmlFile
`public static PsaiProject LoadProjectFromXmlFile(string filename)`

**用途 / Purpose:** 加载 `project from xml file` 数据。

### SaveAsXmlFile
`public void SaveAsXmlFile(string filename)`

**用途 / Purpose:** 保存 `as xml file` 数据。

### Report
`public void Report(bool reportGroups, bool reportSegments)`

**用途 / Purpose:** 处理 `report` 相关逻辑。

### ConvertProjectFile_From_Legacy_To_0_9_12
`public bool ConvertProjectFile_From_Legacy_To_0_9_12(string pathToProjectFile)`

**用途 / Purpose:** 处理 `convert project file_ from_ legacy_ to_0_9_12` 相关逻辑。

### ReconstructReferencesAfterXmlDeserialization
`public void ReconstructReferencesAfterXmlDeserialization()`

**用途 / Purpose:** 处理 `reconstruct references after xml deserialization` 相关逻辑。

### MergeProjects
`public void MergeProjects(PsaiProject project)`

**用途 / Purpose:** 处理 `merge projects` 相关逻辑。

### ReconstructIds
`public void ReconstructIds(string path)`

**用途 / Purpose:** 处理 `reconstruct ids` 相关逻辑。

### DebugCheckProjectIntegrity
`public void DebugCheckProjectIntegrity()`

**用途 / Purpose:** 处理 `debug check project integrity` 相关逻辑。

### BuildPsaiDotNetSoundtrackFromProject
`public Soundtrack BuildPsaiDotNetSoundtrackFromProject()`

**用途 / Purpose:** 处理 `build psai dot net soundtrack from project` 相关逻辑。

### GetSegmentsOfAllThemes
`public HashSet<Segment> GetSegmentsOfAllThemes()`

**用途 / Purpose:** 获取 `segments of all themes` 的当前值。

### GetThemeById
`public Theme GetThemeById(int themeId)`

**用途 / Purpose:** 获取 `theme by id` 的当前值。

### GetSnippetById
`public Segment GetSnippetById(int id)`

**用途 / Purpose:** 获取 `snippet by id` 的当前值。

### GetGroupBySerializationId
`public Group GetGroupBySerializationId(int id)`

**用途 / Purpose:** 获取 `group by serialization id` 的当前值。

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity)`

**用途 / Purpose:** 向当前集合/状态中添加 `psai music entity`。

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity, int targetIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `psai music entity`。

### DeleteMusicEntity
`public void DeleteMusicEntity(PsaiMusicEntity entity)`

**用途 / Purpose:** 处理 `delete music entity` 相关逻辑。

### GetHighestSegmentId
`public int GetHighestSegmentId()`

**用途 / Purpose:** 获取 `highest segment id` 的当前值。

### GetNextFreeSnippetId
`public int GetNextFreeSnippetId(int idToStartSearchFrom)`

**用途 / Purpose:** 获取 `next free snippet id` 的当前值。

### GetGroupsOfAllThemes
`public HashSet<Group> GetGroupsOfAllThemes()`

**用途 / Purpose:** 获取 `groups of all themes` 的当前值。

### CheckIfSnippetIsManualBridgeSnippetForSourceGroup
`public bool CheckIfSnippetIsManualBridgeSnippetForSourceGroup(Segment snippet, Group sourceGroup)`

**用途 / Purpose:** 处理 `check if snippet is manual bridge snippet for source group` 相关逻辑。

### CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup
`public bool CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup(Group sourceGroup, Group targetGroup)`

**用途 / Purpose:** 处理 `check if there is at least one bridge snippet from source group to target group` 相关逻辑。

### CheckIfSnippetIsManualBridgeSnippetToAnyGroup
`public bool CheckIfSnippetIsManualBridgeSnippetToAnyGroup(Segment snippet, bool getGroups, out List<Group> groups)`

**用途 / Purpose:** 处理 `check if snippet is manual bridge snippet to any group` 相关逻辑。

### DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities
`public void DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities()`

**用途 / Purpose:** 处理 `do update all parent theme ids and groups of child psai entities` 相关逻辑。

### GetNextFreeThemeId
`public int GetNextFreeThemeId(int idToStartSearchFrom)`

**用途 / Purpose:** 获取 `next free theme id` 的当前值。

### CheckIfThemeIdIsInUse
`public bool CheckIfThemeIdIsInUse(int themeId)`

**用途 / Purpose:** 处理 `check if theme id is in use` 相关逻辑。

### GetSnippetsById
`public List<Segment> GetSnippetsById(int id)`

**用途 / Purpose:** 获取 `snippets by id` 的当前值。

### Clone
`public object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new PsaiProject();
value.Init();
```

## 参见

- [完整类目录](../catalog)