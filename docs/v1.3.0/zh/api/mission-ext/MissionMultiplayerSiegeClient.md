<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerSiegeClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiegeClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiegeClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs`

## 概述

`MissionMultiplayerSiegeClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### GetGoldAmount
`public override int GetGoldAmount()`

**用途 / Purpose:** 获取 `gold amount` 的当前值。

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**用途 / Purpose:** 当 `gold amount changed for representative` 事件触发时调用此方法。

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**用途 / Purpose:** 当 `number of flags changed` 事件触发时调用此方法。

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**用途 / Purpose:** 当 `capture point owner changed` 事件触发时调用此方法。

### OnMoraleChanged
`public void OnMoraleChanged(int attackerMorale, int defenderMorale, int capturePointRemainingMoraleGains)`

**用途 / Purpose:** 当 `morale changed` 事件触发时调用此方法。

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**用途 / Purpose:** 获取 `flag owner` 的当前值。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### GetSiegeMissiles
`public List<ItemObject> GetSiegeMissiles()`

**用途 / Purpose:** 获取 `siege missiles` 的当前值。

## 使用示例

```csharp
var value = new MissionMultiplayerSiegeClient();
value.OnBehaviorInitialize();
```

## 参见

- [完整类目录](../catalog)