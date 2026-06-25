---
title: "MissionRecorder"
description: "MissionRecorder 的自动生成类参考。"
---
# MissionRecorder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecorder`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionRecorder.cs`

## 概述

`MissionRecorder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RestartRecord
`public void RestartRecord()`

**用途 / Purpose:** 调用 RestartRecord 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.RestartRecord();
```

### ProcessRecordUntilTime
`public void ProcessRecordUntilTime(float time)`

**用途 / Purpose:** 调用 ProcessRecordUntilTime 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.ProcessRecordUntilTime(0);
```

### IsEndOfRecord
`public bool IsEndOfRecord()`

**用途 / Purpose:** 判断当前对象是否处于 end of record 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
var result = missionRecorder.IsEndOfRecord();
```

### StartRecording
`public void StartRecording()`

**用途 / Purpose:** 启动recording流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.StartRecording();
```

### RecordCurrentState
`public void RecordCurrentState()`

**用途 / Purpose:** 调用 RecordCurrentState 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.RecordCurrentState();
```

### BackupRecordToFile
`public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)`

**用途 / Purpose:** 调用 BackupRecordToFile 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.BackupRecordToFile("example", "example", "example");
```

### RestoreRecordFromFile
`public void RestoreRecordFromFile(string fileName)`

**用途 / Purpose:** 调用 RestoreRecordFromFile 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.RestoreRecordFromFile("example");
```

### ClearRecordBuffers
`public void ClearRecordBuffers()`

**用途 / Purpose:** 清空当前对象中的record buffers。

```csharp
// 先通过子系统 API 拿到 MissionRecorder 实例
MissionRecorder missionRecorder = ...;
missionRecorder.ClearRecordBuffers();
```

### GetSceneNameForReplay
`public static string GetSceneNameForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 读取并返回当前对象中 scene name for replay 的结果。

```csharp
// 静态调用，不需要实例
MissionRecorder.GetSceneNameForReplay(fileName);
```

### GetGameTypeForReplay
`public static string GetGameTypeForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 读取并返回当前对象中 game type for replay 的结果。

```csharp
// 静态调用，不需要实例
MissionRecorder.GetGameTypeForReplay(fileName);
```

### GetSceneLevelsForReplay
`public static string GetSceneLevelsForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 读取并返回当前对象中 scene levels for replay 的结果。

```csharp
// 静态调用，不需要实例
MissionRecorder.GetSceneLevelsForReplay(fileName);
```

### GetAtmosphereNameForReplay
`public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 读取并返回当前对象中 atmosphere name for replay 的结果。

```csharp
// 静态调用，不需要实例
MissionRecorder.GetAtmosphereNameForReplay(fileName);
```

### GetAtmosphereSeasonForReplay
`public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 读取并返回当前对象中 atmosphere season for replay 的结果。

```csharp
// 静态调用，不需要实例
MissionRecorder.GetAtmosphereSeasonForReplay(fileName);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionRecorder missionRecorder = ...;
missionRecorder.RestartRecord();
```

## 参见

- [本区域目录](../)