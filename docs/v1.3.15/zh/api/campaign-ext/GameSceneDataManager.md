<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameSceneDataManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameSceneDataManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameSceneDataManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`

## 概述

`GameSceneDataManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameSceneDataManager Instance { get; }` |
| `SingleplayerBattleScenes` | `public MBReadOnlyList<SingleplayerBattleSceneData> SingleplayerBattleScenes { get; }` |
| `ConversationScenes` | `public MBReadOnlyList<ConversationSceneData> ConversationScenes { get; }` |
| `MeetingScenes` | `public MBReadOnlyList<MeetingSceneData> MeetingScenes { get; }` |

## 主要方法

### LoadSPBattleScenes
```csharp
public void LoadSPBattleScenes(string path)
```

### LoadConversationScenes
```csharp
public void LoadConversationScenes(string path)
```

### LoadMeetingScenes
```csharp
public void LoadMeetingScenes(string path)
```

## 使用示例

```csharp
// GameSceneDataManager (Manager) 的典型用法
GameSceneDataManager.Current;
```

## 参见

- [完整类目录](../catalog)