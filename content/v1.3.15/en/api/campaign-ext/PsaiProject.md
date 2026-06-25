---
title: "PsaiProject"
description: "Auto-generated class reference for PsaiProject."
---
# PsaiProject

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class PsaiProject : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/PsaiProject.cs`

## Overview

`PsaiProject` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialExportDirectory` | `public string InitialExportDirectory { get; set; }` |
| `SerializedByProtocolVersion` | `public string SerializedByProtocolVersion { get; set; }` |
| `Properties` | `public ProjectProperties Properties { get; set; }` |
| `Themes` | `public List<Theme> Themes { get; set; }` |

## Key Methods

### Init
`public void Init()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.Init();
```

### LoadProjectFromStream
`public static PsaiProject LoadProjectFromStream(StreamReader reader, string path)`

**Purpose:** Reads `project from stream` from persistent storage or a stream.

```csharp
// Static call; no instance required
PsaiProject.LoadProjectFromStream(reader, "example");
```

### LoadProjectFromXmlFile
`public static PsaiProject LoadProjectFromXmlFile(string filename)`

**Purpose:** Reads `project from xml file` from persistent storage or a stream.

```csharp
// Static call; no instance required
PsaiProject.LoadProjectFromXmlFile("example");
```

### SaveAsXmlFile
`public void SaveAsXmlFile(string filename)`

**Purpose:** Writes `as xml file` to persistent storage or a stream.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.SaveAsXmlFile("example");
```

### Report
`public void Report(bool reportGroups, bool reportSegments)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.Report(false, false);
```

### ConvertProjectFile_From_Legacy_To_0_9_12
`public bool ConvertProjectFile_From_Legacy_To_0_9_12(string pathToProjectFile)`

**Purpose:** Converts `project file_ from_ legacy_ to_0_9_12` into another representation or type.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.ConvertProjectFile_From_Legacy_To_0_9_12("example");
```

### ReconstructReferencesAfterXmlDeserialization
`public void ReconstructReferencesAfterXmlDeserialization()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.ReconstructReferencesAfterXmlDeserialization();
```

### MergeProjects
`public void MergeProjects(PsaiProject project)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.MergeProjects(project);
```

### ReconstructIds
`public void ReconstructIds(string path)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.ReconstructIds("example");
```

### DebugCheckProjectIntegrity
`public void DebugCheckProjectIntegrity()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.DebugCheckProjectIntegrity();
```

### BuildPsaiDotNetSoundtrackFromProject
`public Soundtrack BuildPsaiDotNetSoundtrackFromProject()`

**Purpose:** Assembles and returns the built result for `psai dot net soundtrack from project`.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.BuildPsaiDotNetSoundtrackFromProject();
```

### GetSegmentsOfAllThemes
`public HashSet<Segment> GetSegmentsOfAllThemes()`

**Purpose:** Reads and returns the `segments of all themes` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetSegmentsOfAllThemes();
```

### GetThemeById
`public Theme GetThemeById(int themeId)`

**Purpose:** Reads and returns the `theme by id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetThemeById(0);
```

### GetSnippetById
`public Segment GetSnippetById(int id)`

**Purpose:** Reads and returns the `snippet by id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetSnippetById(0);
```

### GetGroupBySerializationId
`public Group GetGroupBySerializationId(int id)`

**Purpose:** Reads and returns the `group by serialization id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetGroupBySerializationId(0);
```

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity)`

**Purpose:** Adds `psai music entity` to the current collection or state.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.AddPsaiMusicEntity(entity);
```

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity, int targetIndex)`

**Purpose:** Adds `psai music entity` to the current collection or state.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.AddPsaiMusicEntity(entity, 0);
```

### DeleteMusicEntity
`public void DeleteMusicEntity(PsaiMusicEntity entity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.DeleteMusicEntity(entity);
```

### GetHighestSegmentId
`public int GetHighestSegmentId()`

**Purpose:** Reads and returns the `highest segment id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetHighestSegmentId();
```

### GetNextFreeSnippetId
`public int GetNextFreeSnippetId(int idToStartSearchFrom)`

**Purpose:** Reads and returns the `next free snippet id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetNextFreeSnippetId(0);
```

### GetGroupsOfAllThemes
`public HashSet<Group> GetGroupsOfAllThemes()`

**Purpose:** Reads and returns the `groups of all themes` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetGroupsOfAllThemes();
```

### CheckIfSnippetIsManualBridgeSnippetForSourceGroup
`public bool CheckIfSnippetIsManualBridgeSnippetForSourceGroup(Segment snippet, Group sourceGroup)`

**Purpose:** Verifies whether `if snippet is manual bridge snippet for source group` holds true for the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfSnippetIsManualBridgeSnippetForSourceGroup(snippet, sourceGroup);
```

### CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup
`public bool CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup(Group sourceGroup, Group targetGroup)`

**Purpose:** Verifies whether `if there is at least one bridge snippet from source group to target group` holds true for the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup(sourceGroup, targetGroup);
```

### CheckIfSnippetIsManualBridgeSnippetToAnyGroup
`public bool CheckIfSnippetIsManualBridgeSnippetToAnyGroup(Segment snippet, bool getGroups, out List<Group> groups)`

**Purpose:** Verifies whether `if snippet is manual bridge snippet to any group` holds true for the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfSnippetIsManualBridgeSnippetToAnyGroup(snippet, false, groups);
```

### DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities
`public void DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
psaiProject.DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities();
```

### GetNextFreeThemeId
`public int GetNextFreeThemeId(int idToStartSearchFrom)`

**Purpose:** Reads and returns the `next free theme id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetNextFreeThemeId(0);
```

### CheckIfThemeIdIsInUse
`public bool CheckIfThemeIdIsInUse(int themeId)`

**Purpose:** Verifies whether `if theme id is in use` holds true for the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.CheckIfThemeIdIsInUse(0);
```

### GetSnippetsById
`public List<Segment> GetSnippetsById(int id)`

**Purpose:** Reads and returns the `snippets by id` value held by the current object.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.GetSnippetsById(0);
```

### Clone
`public object Clone()`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of PsaiProject from the subsystem API first
PsaiProject psaiProject = ...;
var result = psaiProject.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PsaiProject psaiProject = ...;
psaiProject.Init();
```

## See Also

- [Area Index](../)