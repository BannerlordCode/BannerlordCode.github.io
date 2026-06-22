<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemValueModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class ItemValueModel : MBGameModel<ItemValueModel>`
**Base:** `MBGameModel<ItemValueModel>`
**File:** `TaleWorlds.Core/ItemValueModel.cs`

## 概述

`ItemValueModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ItemValueModel>(new MyItemValueModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetEquipmentValueFromTier
```csharp
public abstract float GetEquipmentValueFromTier(float itemTierf)
```

### CalculateTier
```csharp
public abstract float CalculateTier(ItemObject item)
```

### CalculateValue
```csharp
public abstract int CalculateValue(ItemObject item)
```

### GetIsTransferable
```csharp
public abstract bool GetIsTransferable(ItemObject item)
```

## 使用示例

```csharp
// ItemValueModel (Model) 的典型用法
Game.Current.ReplaceModel<ItemValueModel>(new MyItemValueModel());
```

## 参见

- [完整类目录](../catalog)