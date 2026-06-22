<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemPickupModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**Base:** `MBGameModel<ItemPickupModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs`

## 概述

`ItemPickupModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ItemPickupModel>(new MyItemPickupModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetItemScoreForAgent
```csharp
public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)
```

### IsItemAvailableForAgent
```csharp
public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)
```

### IsAgentEquipmentSuitableForPickUpAvailability
```csharp
public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)
```

## 使用示例

```csharp
// ItemPickupModel (Model) 的典型用法
Game.Current.ReplaceModel<ItemPickupModel>(new MyItemPickupModel());
```

## 参见

- [完整类目录](../catalog)