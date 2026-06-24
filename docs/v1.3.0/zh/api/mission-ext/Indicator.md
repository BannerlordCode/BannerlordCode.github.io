<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Indicator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Indicator

**命名空间:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class Indicator`
**领域:** mission-ext

## 概述

`Indicator` 位于 `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**用途 / Purpose:** 处理 `determine indicator state` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 Indicator 实例，再调用它的公开方法
var value = new Indicator();
value.AfterStart();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
