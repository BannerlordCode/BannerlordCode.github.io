---
title: "GameSceneDataManager"
description: "GameSceneDataManager 的自动生成类参考。"
---
# GameSceneDataManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameSceneDataManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/GameSceneDataManager.cs`

## 概述

`GameSceneDataManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameSceneDataManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameSceneDataManager Instance { get; }` |

## 主要方法

### LoadSPBattleScenes
`public void LoadSPBattleScenes(string path)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 s p battle scenes。

```csharp
// 先通过子系统 API 拿到 GameSceneDataManager 实例
GameSceneDataManager gameSceneDataManager = ...;
gameSceneDataManager.LoadSPBattleScenes("example");
```

### LoadConversationScenes
`public void LoadConversationScenes(string path)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 conversation scenes。

```csharp
// 先通过子系统 API 拿到 GameSceneDataManager 实例
GameSceneDataManager gameSceneDataManager = ...;
gameSceneDataManager.LoadConversationScenes("example");
```

### LoadMeetingScenes
`public void LoadMeetingScenes(string path)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 meeting scenes。

```csharp
// 先通过子系统 API 拿到 GameSceneDataManager 实例
GameSceneDataManager gameSceneDataManager = ...;
gameSceneDataManager.LoadMeetingScenes("example");
```

## 使用示例

```csharp
var manager = GameSceneDataManager.Current;
```

## 参见

- [本区域目录](../)