<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEngineMarkerDistanceComparer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineMarkerDistanceComparer

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>`
**Base:** `IComparer<MissionSiegeEngineMarkerTargetVM>`
**领域:** mission-ext

## 概述

`SiegeEngineMarkerDistanceComparer` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Targets` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM> Targets { get; set; }` |

## 主要方法

### InitializeWith
`public void InitializeWith(List<SiegeWeapon> siegeEngines)`

**用途 / Purpose:** 初始化 `with` 的状态、资源或绑定。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Compare
`public int Compare(MissionSiegeEngineMarkerTargetVM x, MissionSiegeEngineMarkerTargetVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SiegeEngineMarkerDistanceComparer 实例，再调用它的公开方法
var value = new SiegeEngineMarkerDistanceComparer();
value.InitializeWith(siegeEngines);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
