<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ValuationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ValuationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**Base:** `MBGameModel<ValuationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs`

## 概述

`ValuationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ValuationModel>(new MyValuationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetValueOfTroop
```csharp
public abstract float GetValueOfTroop(CharacterObject troop)
```

### GetMilitaryValueOfParty
```csharp
public abstract float GetMilitaryValueOfParty(MobileParty party)
```

### GetValueOfHero
```csharp
public abstract float GetValueOfHero(Hero hero)
```

## 使用示例

```csharp
// ValuationModel (Model) 的典型用法
Game.Current.ReplaceModel<ValuationModel>(new MyValuationModel());
```

## 参见

- [完整类目录](../catalog)