<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MilitaryPowerModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**Base:** `MBGameModel<MilitaryPowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs`

## 概述

`MilitaryPowerModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MilitaryPowerModel>(new MyMilitaryPowerModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTroopPower
```csharp
public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)
```

### GetPowerOfParty
```csharp
public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)
```

### GetContextModifier
```csharp
public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)
```

### GetContextModifier
```csharp
public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)
```

### GetContextForPosition
```csharp
public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)
```

### GetDefaultTroopPower
```csharp
public abstract float GetDefaultTroopPower(CharacterObject troop)
```

### GetPowerModifierOfHero
```csharp
public abstract float GetPowerModifierOfHero(Hero leaderHero)
```

## 使用示例

```csharp
// MilitaryPowerModel (Model) 的典型用法
Game.Current.ReplaceModel<MilitaryPowerModel>(new MyMilitaryPowerModel());
```

## 参见

- [完整类目录](../catalog)