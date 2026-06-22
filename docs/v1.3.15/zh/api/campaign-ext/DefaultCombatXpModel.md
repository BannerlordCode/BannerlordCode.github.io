<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCombatXpModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`

## 概述

`DefaultCombatXpModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCombatXpModel>(new MyDefaultCombatXpModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## 主要方法

### GetSkillForWeapon
```csharp
public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
```

### GetXpFromHit
```csharp
public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)
```

### GetXpMultiplierFromShotDifficulty
```csharp
public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)
```

## 使用示例

```csharp
// DefaultCombatXpModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCombatXpModel>(new MyDefaultCombatXpModel());
```

## 参见

- [完整类目录](../catalog)