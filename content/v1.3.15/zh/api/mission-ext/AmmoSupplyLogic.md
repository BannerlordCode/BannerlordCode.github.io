---
title: "AmmoSupplyLogic"
description: "AmmoSupplyLogic 的自动生成类参考。"
---
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs`

## 概述

`AmmoSupplyLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `AmmoSupplyLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsAgentEligibleForAmmoSupply
`public bool IsAgentEligibleForAmmoSupply(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent eligible for ammo supply」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AmmoSupplyLogic 实例
AmmoSupplyLogic ammoSupplyLogic = ...;
var result = ammoSupplyLogic.IsAgentEligibleForAmmoSupply(agent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AmmoSupplyLogic 实例
AmmoSupplyLogic ammoSupplyLogic = ...;
ammoSupplyLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<AmmoSupplyLogic>();
```

## 参见

- [本区域目录](../)