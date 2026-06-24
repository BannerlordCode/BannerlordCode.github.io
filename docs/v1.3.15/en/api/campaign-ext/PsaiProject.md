<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiProject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `init`.

### LoadProjectFromStream
`public static PsaiProject LoadProjectFromStream(StreamReader reader, string path)`

**Purpose:** Loads `project from stream` data.

### LoadProjectFromXmlFile
`public static PsaiProject LoadProjectFromXmlFile(string filename)`

**Purpose:** Loads `project from xml file` data.

### SaveAsXmlFile
`public void SaveAsXmlFile(string filename)`

**Purpose:** Saves `as xml file` data.

### Report
`public void Report(bool reportGroups, bool reportSegments)`

**Purpose:** Handles logic related to `report`.

### ConvertProjectFile_From_Legacy_To_0_9_12
`public bool ConvertProjectFile_From_Legacy_To_0_9_12(string pathToProjectFile)`

**Purpose:** Handles logic related to `convert project file_ from_ legacy_ to_0_9_12`.

### ReconstructReferencesAfterXmlDeserialization
`public void ReconstructReferencesAfterXmlDeserialization()`

**Purpose:** Handles logic related to `reconstruct references after xml deserialization`.

### MergeProjects
`public void MergeProjects(PsaiProject project)`

**Purpose:** Handles logic related to `merge projects`.

### ReconstructIds
`public void ReconstructIds(string path)`

**Purpose:** Handles logic related to `reconstruct ids`.

### DebugCheckProjectIntegrity
`public void DebugCheckProjectIntegrity()`

**Purpose:** Handles logic related to `debug check project integrity`.

### BuildPsaiDotNetSoundtrackFromProject
`public Soundtrack BuildPsaiDotNetSoundtrackFromProject()`

**Purpose:** Handles logic related to `build psai dot net soundtrack from project`.

### GetSegmentsOfAllThemes
`public HashSet<Segment> GetSegmentsOfAllThemes()`

**Purpose:** Gets the current value of `segments of all themes`.

### GetThemeById
`public Theme GetThemeById(int themeId)`

**Purpose:** Gets the current value of `theme by id`.

### GetSnippetById
`public Segment GetSnippetById(int id)`

**Purpose:** Gets the current value of `snippet by id`.

### GetGroupBySerializationId
`public Group GetGroupBySerializationId(int id)`

**Purpose:** Gets the current value of `group by serialization id`.

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity)`

**Purpose:** Adds `psai music entity` to the current collection or state.

### AddPsaiMusicEntity
`public void AddPsaiMusicEntity(PsaiMusicEntity entity, int targetIndex)`

**Purpose:** Adds `psai music entity` to the current collection or state.

### DeleteMusicEntity
`public void DeleteMusicEntity(PsaiMusicEntity entity)`

**Purpose:** Handles logic related to `delete music entity`.

### GetHighestSegmentId
`public int GetHighestSegmentId()`

**Purpose:** Gets the current value of `highest segment id`.

### GetNextFreeSnippetId
`public int GetNextFreeSnippetId(int idToStartSearchFrom)`

**Purpose:** Gets the current value of `next free snippet id`.

### GetGroupsOfAllThemes
`public HashSet<Group> GetGroupsOfAllThemes()`

**Purpose:** Gets the current value of `groups of all themes`.

### CheckIfSnippetIsManualBridgeSnippetForSourceGroup
`public bool CheckIfSnippetIsManualBridgeSnippetForSourceGroup(Segment snippet, Group sourceGroup)`

**Purpose:** Handles logic related to `check if snippet is manual bridge snippet for source group`.

### CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup
`public bool CheckIfThereIsAtLeastOneBridgeSnippetFromSourceGroupToTargetGroup(Group sourceGroup, Group targetGroup)`

**Purpose:** Handles logic related to `check if there is at least one bridge snippet from source group to target group`.

### CheckIfSnippetIsManualBridgeSnippetToAnyGroup
`public bool CheckIfSnippetIsManualBridgeSnippetToAnyGroup(Segment snippet, bool getGroups, out List<Group> groups)`

**Purpose:** Handles logic related to `check if snippet is manual bridge snippet to any group`.

### DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities
`public void DoUpdateAllParentThemeIdsAndGroupsOfChildPsaiEntities()`

**Purpose:** Handles logic related to `do update all parent theme ids and groups of child psai entities`.

### GetNextFreeThemeId
`public int GetNextFreeThemeId(int idToStartSearchFrom)`

**Purpose:** Gets the current value of `next free theme id`.

### CheckIfThemeIdIsInUse
`public bool CheckIfThemeIdIsInUse(int themeId)`

**Purpose:** Handles logic related to `check if theme id is in use`.

### GetSnippetsById
`public List<Segment> GetSnippetsById(int id)`

**Purpose:** Gets the current value of `snippets by id`.

### Clone
`public object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new PsaiProject();
value.Init();
```

## See Also

- [Complete Class Catalog](../catalog)