<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatXpModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**Base:** `MBGameModel<CombatXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`

## 概述

`CombatXpModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CombatXpModel>(new MyCombatXpModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public abstract float CaptainRadius { get; }` |

## 主要方法

### GetSkillForWeapon
```csharp
public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
```

### GetXpFromHit
```csharp
public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)
```

### GetXpMultiplierFromShotDifficulty
```csharp
public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty)
```

## 使用示例

```csharp
// CombatXpModel (Model) 的典型用法
Game.Current.ReplaceModel<CombatXpModel>(new MyCombatXpModel());
```

## 参见

- [完整类目录](../catalog)