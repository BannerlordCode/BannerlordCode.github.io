<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatXpModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**Base:** `MBGameModel<CombatXpModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CombatXpModel.cs`

## Overview

`CombatXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CombatXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainRadius` | `public abstract float CaptainRadius { get; }` |

## Key Methods

### GetSkillForWeapon
`public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`

**Purpose:** Gets the current value of `skill for weapon`.

### GetXpFromHit
`public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)`

**Purpose:** Gets the current value of `xp from hit`.

### GetXpMultiplierFromShotDifficulty
`public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

**Purpose:** Gets the current value of `xp multiplier from shot difficulty`.

## Usage Example

```csharp
var implementation = new CustomCombatXpModel();
```

## See Also

- [Complete Class Catalog](../catalog)