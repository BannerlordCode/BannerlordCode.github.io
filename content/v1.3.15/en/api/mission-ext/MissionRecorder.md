---
title: "MissionRecorder"
description: "Auto-generated class reference for MissionRecorder."
---
# MissionRecorder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecorder`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionRecorder.cs`

## Overview

`MissionRecorder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RestartRecord
`public void RestartRecord()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.RestartRecord();
```

### ProcessRecordUntilTime
`public void ProcessRecordUntilTime(float time)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.ProcessRecordUntilTime(0);
```

### IsEndOfRecord
`public bool IsEndOfRecord()`

**Purpose:** Determines whether the current object is in the `end of record` state or condition.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
var result = missionRecorder.IsEndOfRecord();
```

### StartRecording
`public void StartRecording()`

**Purpose:** Starts the `recording` flow or state machine.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.StartRecording();
```

### RecordCurrentState
`public void RecordCurrentState()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.RecordCurrentState();
```

### BackupRecordToFile
`public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.BackupRecordToFile("example", "example", "example");
```

### RestoreRecordFromFile
`public void RestoreRecordFromFile(string fileName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.RestoreRecordFromFile("example");
```

### ClearRecordBuffers
`public void ClearRecordBuffers()`

**Purpose:** Removes all `record buffers` from the current object.

```csharp
// Obtain an instance of MissionRecorder from the subsystem API first
MissionRecorder missionRecorder = ...;
missionRecorder.ClearRecordBuffers();
```

### GetSceneNameForReplay
`public static string GetSceneNameForReplay(PlatformFilePath fileName)`

**Purpose:** Reads and returns the `scene name for replay` value held by the current object.

```csharp
// Static call; no instance required
MissionRecorder.GetSceneNameForReplay(fileName);
```

### GetGameTypeForReplay
`public static string GetGameTypeForReplay(PlatformFilePath fileName)`

**Purpose:** Reads and returns the `game type for replay` value held by the current object.

```csharp
// Static call; no instance required
MissionRecorder.GetGameTypeForReplay(fileName);
```

### GetSceneLevelsForReplay
`public static string GetSceneLevelsForReplay(PlatformFilePath fileName)`

**Purpose:** Reads and returns the `scene levels for replay` value held by the current object.

```csharp
// Static call; no instance required
MissionRecorder.GetSceneLevelsForReplay(fileName);
```

### GetAtmosphereNameForReplay
`public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)`

**Purpose:** Reads and returns the `atmosphere name for replay` value held by the current object.

```csharp
// Static call; no instance required
MissionRecorder.GetAtmosphereNameForReplay(fileName);
```

### GetAtmosphereSeasonForReplay
`public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)`

**Purpose:** Reads and returns the `atmosphere season for replay` value held by the current object.

```csharp
// Static call; no instance required
MissionRecorder.GetAtmosphereSeasonForReplay(fileName);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionRecorder missionRecorder = ...;
missionRecorder.RestartRecord();
```

## See Also

- [Area Index](../)