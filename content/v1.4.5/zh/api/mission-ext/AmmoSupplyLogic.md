---
title: "AmmoSupplyLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AmmoSupplyLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic/AmmoSupplyLogic.cs`

## 概述

`AmmoSupplyLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `AmmoSupplyLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsAgentEligibleForAmmoSupply
`public bool IsAgentEligibleForAmmoSupply(Agent agent)`

**用途 / Purpose:** 处理 `is agent eligible for ammo supply` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new AmmoSupplyLogic());
```

## 参见

- [完整类目录](../catalog)