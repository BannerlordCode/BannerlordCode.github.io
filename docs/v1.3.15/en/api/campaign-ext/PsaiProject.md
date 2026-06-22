<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiProject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiProject

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PsaiProject` is a class in the `psai.Editor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `InitialExportDirectory` | `public string InitialExportDirectory { get; set; }` |
| `SerializedByProtocolVersion` | `public string SerializedByProtocolVersion { get; set; }` |
| `Properties` | `public ProjectProperties Properties { get; set; }` |
| `Themes` | `public List<Theme> Themes { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)