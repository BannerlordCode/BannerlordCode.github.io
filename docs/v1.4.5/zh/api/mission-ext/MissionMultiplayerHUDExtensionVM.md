<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerHUDExtensionVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerHUDExtensionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerHUDExtensionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/MissionMultiplayerHUDExtensionVM.cs`

## 概述

`MissionMultiplayerHUDExtensionVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsOrderActive` | `public bool IsOrderActive { get; set; }` |
| `CommanderInfo` | `public CommanderInfoVM CommanderInfo { get; set; }` |
| `SpectatorControls` | `public MissionMultiplayerSpectatorHUDVM SpectatorControls { get; set; }` |
| `Teammates` | `public MBBindingList<MPPlayerVM> Teammates { get; set; }` |
| `Enemies` | `public MBBindingList<MPPlayerVM> Enemies { get; set; }` |
| `AllyBanner` | `public BannerImageIdentifierVM AllyBanner { get; set; }` |
| `EnemyBanner` | `public BannerImageIdentifierVM EnemyBanner { get; set; }` |
| `IsRoundCountdownAvailable` | `public bool IsRoundCountdownAvailable { get; set; }` |
| `IsRoundCountdownSuspended` | `public bool IsRoundCountdownSuspended { get; set; }` |
| `ShowTeamScores` | `public bool ShowTeamScores { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `WarnRemainingTime` | `public bool WarnRemainingTime { get; set; }` |
| `AllyTeamScore` | `public int AllyTeamScore { get; set; }` |
| `EnemyTeamScore` | `public int EnemyTeamScore { get; set; }` |
| `AllyTeamColor` | `public string AllyTeamColor { get; set; }` |
| `AllyTeamColor2` | `public string AllyTeamColor2 { get; set; }` |
| `EnemyTeamColor` | `public string EnemyTeamColor { get; set; }` |
| `EnemyTeamColor2` | `public string EnemyTeamColor2 { get; set; }` |
| `ShowHud` | `public bool ShowHud { get; set; }` |
| `ShowCommanderInfo` | `public bool ShowCommanderInfo { get; set; }` |
| `ShowPowerLevels` | `public bool ShowPowerLevels { get; set; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; set; }` |
| `WarmupInfoText` | `public string WarmupInfoText { get; set; }` |
| `GeneralWarningCountdown` | `public int GeneralWarningCountdown { get; set; }` |
| `IsGeneralWarningCountdownActive` | `public bool IsGeneralWarningCountdownActive { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**用途 / Purpose:** 当 `spectated agent focus in` 事件触发时调用此方法。

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedPeer)`

**用途 / Purpose:** 当 `spectated agent focus out` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionMultiplayerHUDExtensionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)