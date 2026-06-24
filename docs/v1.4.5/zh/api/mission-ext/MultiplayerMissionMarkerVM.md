<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMissionMarkerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker/MultiplayerMissionMarkerVM.cs`

## 概述

`MultiplayerMissionMarkerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FlagTargets` | `public MBBindingList<MissionFlagMarkerTargetVM> FlagTargets { get; set; }` |
| `PeerTargets` | `public MBBindingList<MissionPeerMarkerTargetVM> PeerTargets { get; set; }` |
| `SiegeEngineTargets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> SiegeEngineTargets { get; set; }` |
| `AlwaysVisibleTargets` | `public MBBindingList<MissionAlwaysVisibleMarkerTargetVM> AlwaysVisibleTargets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### Compare
`public int Compare(MissionMarkerTargetVM x, MissionMarkerTargetVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnRemoveAlwaysVisibleMarker
`public void OnRemoveAlwaysVisibleMarker(MissionAlwaysVisibleMarkerTargetVM marker)`

**用途 / Purpose:** 当 `remove always visible marker` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MultiplayerMissionMarkerVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)