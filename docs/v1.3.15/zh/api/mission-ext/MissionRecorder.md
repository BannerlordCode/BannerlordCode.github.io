<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionRecorder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionRecorder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionRecorder` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### RestartRecord

```csharp
public void RestartRecord()
```

### ProcessRecordUntilTime

```csharp
public void ProcessRecordUntilTime(float time)
```

### IsEndOfRecord

```csharp
public bool IsEndOfRecord()
```

### StartRecording

```csharp
public void StartRecording()
```

### RecordCurrentState

```csharp
public void RecordCurrentState()
```

### BackupRecordToFile

```csharp
public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)
```

### RestoreRecordFromFile

```csharp
public void RestoreRecordFromFile(string fileName)
```

### ClearRecordBuffers

```csharp
public void ClearRecordBuffers()
```

### GetSceneNameForReplay

```csharp
public static string GetSceneNameForReplay(PlatformFilePath fileName)
```

### GetGameTypeForReplay

```csharp
public static string GetGameTypeForReplay(PlatformFilePath fileName)
```

### GetSceneLevelsForReplay

```csharp
public static string GetSceneLevelsForReplay(PlatformFilePath fileName)
```

### GetAtmosphereNameForReplay

```csharp
public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)
```

### GetAtmosphereSeasonForReplay

```csharp
public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)