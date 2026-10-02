---
title: "MissionRecorder"
description: "MissionRecorder: a public class in TaleWorlds.MountAndBlade; 14 exposed members (13 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionRecorder.cs."
---
# MissionRecorder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionRecorder`
**File:** `TaleWorlds.MountAndBlade/MissionRecorder.cs`

## Overview

MissionRecorder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRecorder.cs. It is a public class; the inheritance chain is MissionRecorder. It exposes 14 public/protected members: 13 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionRecorder is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionRecorder. The surface is method-led (methods 13/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRecorder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionRecorder` | `public MissionRecorder(Mission mission)` | constructor |
| `RestartRecord` | `public void RestartRecord()` | method |
| `ProcessRecordUntilTime` | `public void ProcessRecordUntilTime(float time)` | method |
| `IsEndOfRecord` | `public bool IsEndOfRecord()` | method |
| `StartRecording` | `public void StartRecording()` | method |
| `RecordCurrentState` | `public void RecordCurrentState()` | method |
| `BackupRecordToFile` | `public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)` | method |
| `RestoreRecordFromFile` | `public void RestoreRecordFromFile(string fileName)` | method |
| `ClearRecordBuffers` | `public void ClearRecordBuffers()` | method |
| `GetSceneNameForReplay` | `public static string GetSceneNameForReplay(PlatformFilePath fileName)` | method |
| `GetGameTypeForReplay` | `public static string GetGameTypeForReplay(PlatformFilePath fileName)` | method |
| `GetSceneLevelsForReplay` | `public static string GetSceneLevelsForReplay(PlatformFilePath fileName)` | method |
| `GetAtmosphereNameForReplay` | `public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)` | method |
| `GetAtmosphereSeasonForReplay` | `public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
