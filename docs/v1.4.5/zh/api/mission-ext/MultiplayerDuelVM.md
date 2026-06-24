<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerDuelVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerDuelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerDuelVM.cs`

## 概述

`MultiplayerDuelVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AreOngoingDuelsActive` | `public bool AreOngoingDuelsActive { get; set; }` |
| `IsPlayerInDuel` | `public bool IsPlayerInDuel { get; set; }` |
| `PlayerBounty` | `public int PlayerBounty { get; set; }` |
| `PlayerPrefferedArenaType` | `public int PlayerPrefferedArenaType { get; set; }` |
| `PlayerScoreText` | `public string PlayerScoreText { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `Markers` | `public MissionDuelMarkersVM Markers { get; set; }` |
| `PlayerDuelMatch` | `public DuelMatchVM PlayerDuelMatch { get; set; }` |
| `OngoingDuels` | `public MBBindingList<DuelMatchVM> OngoingDuels { get; set; }` |
| `KillNotifications` | `public MBBindingList<MPDuelKillNotificationItemVM> KillNotifications { get; set; }` |

## 主要方法

### DuelArenaProperties
`public struct DuelArenaProperties(GameEntity flagEntity, int index, TroopType arenaTroopType)`

**用途 / Purpose:** 处理 `duel arena properties` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnScreenResolutionChanged
`public void OnScreenResolutionChanged()`

**用途 / Purpose:** 当 `screen resolution changed` 事件触发时调用此方法。

### OnMainAgentRemoved
`public void OnMainAgentRemoved()`

**用途 / Purpose:** 当 `main agent removed` 事件触发时调用此方法。

### OnMainAgentBuild
`public void OnMainAgentBuild()`

**用途 / Purpose:** 当 `main agent build` 事件触发时调用此方法。

### GetAgentDefaultPreferredArenaType
`public static TroopType GetAgentDefaultPreferredArenaType(Agent agent)`

**用途 / Purpose:** 获取 `agent default preferred arena type` 的当前值。

## 使用示例

```csharp
var value = new MultiplayerDuelVM();
value.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## 参见

- [完整类目录](../catalog)