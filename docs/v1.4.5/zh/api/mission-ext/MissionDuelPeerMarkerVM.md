<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionDuelPeerMarkerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDuelPeerMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelPeerMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelPeerMarkerVM.cs`

## 概述

`MissionDuelPeerMarkerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |
| `Distance` | `public float Distance { get; }` |
| `IsInDuel` | `public bool IsInDuel { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `ShouldShowInformation` | `public bool ShouldShowInformation { get; set; }` |
| `IsAgentInScreenBoundaries` | `public bool IsAgentInScreenBoundaries { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `HasDuelRequestForPlayer` | `public bool HasDuelRequestForPlayer { get; set; }` |
| `HasSentDuelRequest` | `public bool HasSentDuelRequest { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ActionDescriptionText` | `public string ActionDescriptionText { get; set; }` |
| `Bounty` | `public int Bounty { get; set; }` |
| `PreferredArenaType` | `public int PreferredArenaType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `SelectedPerks` | `public MBBindingList<MPPerkVM> SelectedPerks { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**用途 / Purpose:** 更新 `screen position` 的状态或数据。

### UpdateBounty
`public void UpdateBounty()`

**用途 / Purpose:** 更新 `bounty` 的状态或数据。

### OnDuelStarted
`public void OnDuelStarted()`

**用途 / Purpose:** 当 `duel started` 事件触发时调用此方法。

### OnDuelEnded
`public void OnDuelEnded()`

**用途 / Purpose:** 当 `duel ended` 事件触发时调用此方法。

### UpdateCurentDuelStatus
`public void UpdateCurentDuelStatus(bool isInDuel)`

**用途 / Purpose:** 更新 `curent duel status` 的状态或数据。

### RefreshPerkSelection
`public void RefreshPerkSelection()`

**用途 / Purpose:** 刷新 `perk selection` 的显示或缓存。

## 使用示例

```csharp
var value = new MissionDuelPeerMarkerVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)