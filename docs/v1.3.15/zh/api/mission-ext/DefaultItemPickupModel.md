<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItemPickupModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## 概述

`DefaultItemPickupModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetItemScoreForAgent
```csharp
public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)
```

### IsItemAvailableForAgent
```csharp
public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)
```

### IsAgentEquipmentSuitableForPickUpAvailability
```csharp
public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)
```

## 使用示例

```csharp
// DefaultItemPickupModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## 参见

- [完整类目录](../catalog)