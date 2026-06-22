<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultValuationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultValuationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultValuationModel : ValuationModel`
**Base:** `ValuationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultValuationModel.cs`

## 概述

`DefaultValuationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMilitaryValueOfParty
```csharp
public override float GetMilitaryValueOfParty(MobileParty party)
```

### GetValueOfTroop
```csharp
public override float GetValueOfTroop(CharacterObject troop)
```

### GetValueOfHero
```csharp
public override float GetValueOfHero(Hero hero)
```

## 使用示例

```csharp
// DefaultValuationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel());
```

## 参见

- [完整类目录](../catalog)