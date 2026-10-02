---
title: "MissionRecorder"
description: "MissionRecorder：TaleWorlds.MountAndBlade 的 public 类；公开成员 14 个（方法 13、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionRecorder.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionRecorder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionRecorder`
**File:** `TaleWorlds.MountAndBlade/MissionRecorder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionRecorder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionRecorder.cs。它是一个 public 类，继承链为 MissionRecorder。public/protected 成员共 14 个：13 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionRecorder 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionRecorder。成员构成以方法为主（方法 13/14，属性 0/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionRecorder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionRecorder` | `public MissionRecorder(Mission mission)` | 构造函数 |
| `RestartRecord` | `public void RestartRecord()` | 方法 |
| `ProcessRecordUntilTime` | `public void ProcessRecordUntilTime(float time)` | 方法 |
| `IsEndOfRecord` | `public bool IsEndOfRecord()` | 方法 |
| `StartRecording` | `public void StartRecording()` | 方法 |
| `RecordCurrentState` | `public void RecordCurrentState()` | 方法 |
| `BackupRecordToFile` | `public void BackupRecordToFile(string fileName, string gameType, string sceneLevels)` | 方法 |
| `RestoreRecordFromFile` | `public void RestoreRecordFromFile(string fileName)` | 方法 |
| `ClearRecordBuffers` | `public void ClearRecordBuffers()` | 方法 |
| `GetSceneNameForReplay` | `public static string GetSceneNameForReplay(PlatformFilePath fileName)` | 方法 |
| `GetGameTypeForReplay` | `public static string GetGameTypeForReplay(PlatformFilePath fileName)` | 方法 |
| `GetSceneLevelsForReplay` | `public static string GetSceneLevelsForReplay(PlatformFilePath fileName)` | 方法 |
| `GetAtmosphereNameForReplay` | `public static string GetAtmosphereNameForReplay(PlatformFilePath fileName)` | 方法 |
| `GetAtmosphereSeasonForReplay` | `public static int GetAtmosphereSeasonForReplay(PlatformFilePath fileName)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
