<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCombatXpModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`

## Overview

`DefaultCombatXpModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCombatXpModel>(new MyDefaultCombatXpModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public override float CaptainRadius { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DefaultCombatXpModel (Model)
Game.Current.ReplaceModel<DefaultCombatXpModel>(new MyDefaultCombatXpModel());
```

## See Also

- [Complete Class Catalog](../catalog)