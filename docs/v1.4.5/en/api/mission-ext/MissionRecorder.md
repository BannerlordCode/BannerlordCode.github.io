<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionRecorder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionRecorder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecorder`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionRecorder.cs`

## Overview

`MissionRecorder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RestartRecord
`public void RestartRecord()`

**Purpose:** Handles logic related to `restart record`.

### ProcessRecordUntilTime
`public void ProcessRecordUntilTime(float time)`

**Purpose:** Handles logic related to `process record until time`.

### IsEndOfRecord
`public bool IsEndOfRecord()`

**Purpose:** Handles logic related to `is end of record`.

### StartRecording
`public void StartRecording()`

**Purpose:** Handles logic related to `start recording`.

### RecordCurrentState
`public void RecordCurrentState()`

**Purpose:** Handles logic related to `record current state`.

### BackupRecordToFile
`public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)`

**Purpose:** Handles logic related to `backup record to file`.

### RestoreRecordFromFile
`public void RestoreRecordFromFile(string fileName)`

**Purpose:** Handles logic related to `restore record from file`.

### ClearRecordBuffers
`public void ClearRecordBuffers()`

**Purpose:** Handles logic related to `clear record buffers`.

### GetSceneNameForReplay
`public static string GetSceneNameForReplay(PlatformFilePath fileName)`

**Purpose:** Gets the current value of `scene name for replay`.

### GetGameTypeForReplay
`public static string GetGameTypeForReplay(PlatformFilePath fileName)`

**Purpose:** Gets the current value of `game type for replay`.

### GetSceneLevelsForReplay
`public static string GetSceneLevelsForReplay(PlatformFilePath fileName)`

**Purpose:** Gets the current value of `scene levels for replay`.

### GetAtmosphereNameForReplay
`public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)`

**Purpose:** Gets the current value of `atmosphere name for replay`.

### GetAtmosphereSeasonForReplay
`public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)`

**Purpose:** Gets the current value of `atmosphere season for replay`.

## Usage Example

```csharp
var value = new MissionRecorder();
value.RestartRecord();
```

## See Also

- [Complete Class Catalog](../catalog)