<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EquipmentSelectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## 概述

`EquipmentSelectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<EquipmentSelectionModel>(new MyEquipmentSelectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetEquipmentRostersForHeroComeOfAge
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)
```

### GetEquipmentRostersForHeroReachesTeenAge
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)
```

### GetEquipmentRostersForInitialChildrenGeneration
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)
```

### GetEquipmentRostersForDeliveredOffspring
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)
```

### GetEquipmentRostersForCompanion
```csharp
public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero companionHero, bool isCivilian)
```

## 使用示例

```csharp
// EquipmentSelectionModel (Model) 的典型用法
Game.Current.ReplaceModel<EquipmentSelectionModel>(new MyEquipmentSelectionModel());
```

## 参见

- [完整类目录](../catalog)