<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItemValueModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemValueModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultItemValueModel : ItemValueModel`
**Base:** `ItemValueModel`
**File:** `TaleWorlds.Core/DefaultItemValueModel.cs`

## 概述

`DefaultItemValueModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateValue
```csharp
public override int CalculateValue(ItemObject item)
```

### GetIsTransferable
```csharp
public override bool GetIsTransferable(ItemObject item)
```

### GetEquipmentValueFromTier
```csharp
public override float GetEquipmentValueFromTier(float itemTierf)
```

### CalculateTier
```csharp
public override float CalculateTier(ItemObject item)
```

## 使用示例

```csharp
// DefaultItemValueModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultItemValueModel>(new MyDefaultItemValueModel());
```

## 参见

- [完整类目录](../catalog)