<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMilitaryPowerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`

## 概述

`DefaultMilitaryPowerModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTroopPower
```csharp
public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)
```

### GetPowerOfParty
```csharp
public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)
```

### GetPowerModifierOfHero
```csharp
public override float GetPowerModifierOfHero(Hero leaderHero)
```

### GetContextModifier
```csharp
public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)
```

### GetContextForPosition
```csharp
public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)
```

### GetDefaultTroopPower
```csharp
public override float GetDefaultTroopPower(CharacterObject troop)
```

### GetContextModifier
```csharp
public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)
```

## 使用示例

```csharp
// DefaultMilitaryPowerModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel());
```

## 参见

- [完整类目录](../catalog)