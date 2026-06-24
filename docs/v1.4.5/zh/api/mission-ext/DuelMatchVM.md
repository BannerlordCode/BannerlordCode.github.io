<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DuelMatchVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DuelMatchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/DuelMatchVM.cs`

## 概述

`DuelMatchVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FirstPlayerPeer` | `public MissionPeer FirstPlayerPeer { get; }` |
| `SecondPlayerPeer` | `public MissionPeer SecondPlayerPeer { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsPreparing` | `public bool IsPreparing { get; set; }` |
| `CountdownMessage` | `public string CountdownMessage { get; set; }` |
| `Score` | `public string Score { get; set; }` |
| `ArenaType` | `public int ArenaType { get; set; }` |
| `FirstPlayerScore` | `public int FirstPlayerScore { get; set; }` |
| `SecondPlayerScore` | `public int SecondPlayerScore { get; set; }` |
| `FirstPlayer` | `public MPPlayerVM FirstPlayer { get; set; }` |
| `SecondPlayer` | `public MPPlayerVM SecondPlayer { get; set; }` |

## 主要方法

### OnDuelPrepStarted
`public void OnDuelPrepStarted(MissionPeer opponentPeer, int prepDuration)`

**用途 / Purpose:** 当 `duel prep started` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer, int arenaType)`

**用途 / Purpose:** 当 `duel started` 事件触发时调用此方法。

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 当 `duel ended` 事件触发时调用此方法。

### OnPeerScored
`public void OnPeerScored(MissionPeer peer)`

**用途 / Purpose:** 当 `peer scored` 事件触发时调用此方法。

### RefreshNames
`public void RefreshNames(bool changeGenericNames = false)`

**用途 / Purpose:** 刷新 `names` 的显示或缓存。

## 使用示例

```csharp
var value = new DuelMatchVM();
value.OnDuelPrepStarted(opponentPeer, 0);
```

## 参见

- [完整类目录](../catalog)