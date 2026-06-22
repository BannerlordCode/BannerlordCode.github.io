<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiProject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiProject

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PsaiProject` 是 `psai.Editor` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `InitialExportDirectory` | `public string InitialExportDirectory { get; set; }` |
| `SerializedByProtocolVersion` | `public string SerializedByProtocolVersion { get; set; }` |
| `Properties` | `public ProjectProperties Properties { get; set; }` |
| `Themes` | `public List<Theme> Themes { get; set; }` |


## 主要方法

### Init

```csharp
public void Init()
```

### LoadProjectFromStream

```csharp
public static PsaiProject LoadProjectFromStream(StreamReader reader, string path)
```

### LoadProjectFromXmlFile

```csharp
public static PsaiProject LoadProjectFromXmlFile(string filename)
```

### SaveAsXmlFile

```csharp
public void SaveAsXmlFile(string filename)
```

### Report

```csharp
public void Report(bool reportGroups, bool reportSegments)
```

### ConvertProjectFile_From_Legacy_To_0_9_12

```csharp
public bool ConvertProjectFile_From_Legacy_To_0_9_12(string pathToProjectFile)
```

### ReconstructReferencesAfterXmlDeserialization

```csharp
public void ReconstructReferencesAfterXmlDeserialization()
```

### MergeProjects

```csharp
public void MergeProjects(PsaiProject project)
```

### ReconstructIds

```csharp
public void ReconstructIds(string path)
```

### DebugCheckProjectIntegrity

```csharp
public void DebugCheckProjectIntegrity()
```

### BuildPsaiDotNetSoundtrackFromProject

```csharp
public Soundtrack BuildPsaiDotNetSoundtrackFromProject()
```

### GetSegmentsOfAllThemes

```csharp
public HashSet<Segment> GetSegmentsOfAllThemes()
```

### GetThemeById

```csharp
public Theme GetThemeById(int themeId)
```

### GetSnippetById

```csharp
public Segment GetSnippetById(int id)
```

### GetGroupBySerializationId

```csharp
public Group GetGroupBySerializationId(int id)
```

### AddPsaiMusicEntity

```csharp
public void AddPsaiMusicEntity(PsaiMusicEntity entity)
```

### AddPsaiMusicEntity

```csharp
public void AddPsaiMusicEntity(PsaiMusicEntity entity, int targetIndex)
```

### DeleteMusicEntity

```csharp
public void DeleteMusicEntity(PsaiMusicEntity entity)
```

### GetHighestSegmentId

```csharp
public int GetHighestSegmentId()
```

### GetNextFreeSnippetId

```csharp
public int GetNextFreeSnippetId(int idToStartSearchFrom)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)