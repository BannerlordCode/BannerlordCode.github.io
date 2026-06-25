---
title: "MissionRecorder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionRecorder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionRecorder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecorder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionRecorder.cs`

## 概述

`MissionRecorder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RestartRecord
`public void RestartRecord()`

**用途 / Purpose:** 处理 `restart record` 相关逻辑。

### ProcessRecordUntilTime
`public void ProcessRecordUntilTime(float time)`

**用途 / Purpose:** 处理 `process record until time` 相关逻辑。

### IsEndOfRecord
`public bool IsEndOfRecord()`

**用途 / Purpose:** 处理 `is end of record` 相关逻辑。

### StartRecording
`public void StartRecording()`

**用途 / Purpose:** 处理 `start recording` 相关逻辑。

### RecordCurrentState
`public void RecordCurrentState()`

**用途 / Purpose:** 处理 `record current state` 相关逻辑。

### BackupRecordToFile
`public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)`

**用途 / Purpose:** 处理 `backup record to file` 相关逻辑。

### RestoreRecordFromFile
`public void RestoreRecordFromFile(string fileName)`

**用途 / Purpose:** 处理 `restore record from file` 相关逻辑。

### ClearRecordBuffers
`public void ClearRecordBuffers()`

**用途 / Purpose:** 处理 `clear record buffers` 相关逻辑。

### GetSceneNameForReplay
`public static string GetSceneNameForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 获取 `scene name for replay` 的当前值。

### GetGameTypeForReplay
`public static string GetGameTypeForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 获取 `game type for replay` 的当前值。

### GetSceneLevelsForReplay
`public static string GetSceneLevelsForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 获取 `scene levels for replay` 的当前值。

### GetAtmosphereNameForReplay
`public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 获取 `atmosphere name for replay` 的当前值。

### GetAtmosphereSeasonForReplay
`public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)`

**用途 / Purpose:** 获取 `atmosphere season for replay` 的当前值。

## 使用示例

```csharp
var value = new MissionRecorder();
value.RestartRecord();
```

## 参见

- [完整类目录](../catalog)