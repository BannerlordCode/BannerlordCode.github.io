<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatXpModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**Base:** `MBGameModel<CombatXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`

## Overview

`CombatXpModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CombatXpModel>(new MyCombatXpModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public abstract float CaptainRadius { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of CombatXpModel (Model)
Game.Current.ReplaceModel<CombatXpModel>(new MyCombatXpModel());
```

## See Also

- [Complete Class Catalog](../catalog)