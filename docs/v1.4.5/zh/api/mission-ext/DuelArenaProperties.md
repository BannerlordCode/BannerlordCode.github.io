<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DuelArenaProperties`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DuelArenaProperties

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct DuelArenaProperties`
**领域:** mission-ext

## 概述

`DuelArenaProperties` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 DuelArenaProperties 实例，再调用它的公开方法
var value = new DuelArenaProperties();
value.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
