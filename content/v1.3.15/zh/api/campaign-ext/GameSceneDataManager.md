---
title: "GameSceneDataManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameSceneDataManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameSceneDataManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameSceneDataManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`

## 概述

`GameSceneDataManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameSceneDataManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameSceneDataManager Instance { get; }` |
| `SingleplayerBattleScenes` | `public MBReadOnlyList<SingleplayerBattleSceneData> SingleplayerBattleScenes { get; }` |
| `ConversationScenes` | `public MBReadOnlyList<ConversationSceneData> ConversationScenes { get; }` |
| `MeetingScenes` | `public MBReadOnlyList<MeetingSceneData> MeetingScenes { get; }` |

## 主要方法

### LoadSPBattleScenes
`public void LoadSPBattleScenes(string path)`

**用途 / Purpose:** 加载 `s p battle scenes` 数据。

### LoadConversationScenes
`public void LoadConversationScenes(string path)`

**用途 / Purpose:** 加载 `conversation scenes` 数据。

### LoadMeetingScenes
`public void LoadMeetingScenes(string path)`

**用途 / Purpose:** 加载 `meeting scenes` 数据。

## 使用示例

```csharp
var manager = GameSceneDataManager.Current;
```

## 参见

- [完整类目录](../catalog)