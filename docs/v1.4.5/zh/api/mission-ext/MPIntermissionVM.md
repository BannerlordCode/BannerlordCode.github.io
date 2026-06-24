<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPIntermissionVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPIntermissionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionVM.cs`

## 概述

`MPIntermissionVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConnectedPlayersCountValueText` | `public string ConnectedPlayersCountValueText { get; set; }` |
| `MaxNumPlayersValueText` | `public string MaxNumPlayersValueText { get; set; }` |
| `IsFactionAValid` | `public bool IsFactionAValid { get; set; }` |
| `IsFactionBValid` | `public bool IsFactionBValid { get; set; }` |
| `IsMissionTimerEnabled` | `public bool IsMissionTimerEnabled { get; set; }` |
| `IsEndGameTimerEnabled` | `public bool IsEndGameTimerEnabled { get; set; }` |
| `IsNextMapInfoEnabled` | `public bool IsNextMapInfoEnabled { get; set; }` |
| `IsMapVoteEnabled` | `public bool IsMapVoteEnabled { get; set; }` |
| `IsCultureVoteEnabled` | `public bool IsCultureVoteEnabled { get; set; }` |
| `IsPlayerCountEnabled` | `public bool IsPlayerCountEnabled { get; set; }` |
| `NextMapID` | `public string NextMapID { get; set; }` |
| `NextFactionACultureID` | `public string NextFactionACultureID { get; set; }` |
| `NextFactionACultureColor1` | `public Color NextFactionACultureColor1 { get; set; }` |
| `NextFactionACultureColor2` | `public Color NextFactionACultureColor2 { get; set; }` |
| `NextFactionBCultureID` | `public string NextFactionBCultureID { get; set; }` |
| `NextFactionBCultureColor1` | `public Color NextFactionBCultureColor1 { get; set; }` |
| `NextFactionBCultureColor2` | `public Color NextFactionBCultureColor2 { get; set; }` |
| `PlayersLabel` | `public string PlayersLabel { get; set; }` |
| `MapVoteText` | `public string MapVoteText { get; set; }` |
| `CultureVoteText` | `public string CultureVoteText { get; set; }` |
| `NextGameStateTimerLabel` | `public string NextGameStateTimerLabel { get; set; }` |
| `NextGameStateTimerValue` | `public string NextGameStateTimerValue { get; set; }` |
| `WelcomeMessage` | `public string WelcomeMessage { get; set; }` |
| `ServerName` | `public string ServerName { get; set; }` |
| `NextGameType` | `public string NextGameType { get; set; }` |
| `NextMapName` | `public string NextMapName { get; set; }` |
| `AvailableMaps` | `public MBBindingList<MPIntermissionMapItemVM> AvailableMaps { get; set; }` |
| `AvailableCultures` | `public MBBindingList<MPIntermissionCultureItemVM> AvailableCultures { get; set; }` |
| `QuitText` | `public string QuitText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteQuitServer
`public void ExecuteQuitServer()`

**用途 / Purpose:** 执行 `quit server` 操作或流程。

## 使用示例

```csharp
var value = new MPIntermissionVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)