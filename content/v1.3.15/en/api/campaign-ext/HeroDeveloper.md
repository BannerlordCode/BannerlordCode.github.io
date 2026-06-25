---
title: "HeroDeveloper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroDeveloper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/HeroDeveloper](/versions/HeroDeveloper)
<!-- END BREADCRUMB -->
# HeroDeveloper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment  
**Module:** TaleWorlds.CampaignSystem  
**Type:** class  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

`HeroDeveloper` manages a `Hero`'s progression — experience, level, skill values/xp, focus points, attribute points, and perks. Each hero exposes its instance via `Hero.HeroDeveloper`.

## Overview

Mods obtain the developer via `hero.HeroDeveloper`, then add xp, change skills, spend focus/attribute points, or check perks. `AddSkillXp` applies the focus factor and may trigger a level-up (`CheckLevel`). `UnspentFocusPoints` / `UnspentAttributePoints` are the spendable remaining points.

## Mental Model

Treat `HeroDeveloper` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| Hero | Hero | Owning hero (get-only) |
| TotalXp | int | Total experience (get-only) |
| UnspentFocusPoints | int | Unspent focus points (get/set) |
| UnspentAttributePoints | int | Unspent attribute points (get/set) |
| IsDeveloperInitialized | bool | Whether initialized |

## Main methods

```csharp
public float GetSkillXp(SkillObject skill)
public int GetSkillXpProgress(SkillObject skill)
public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)
public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)
public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)
public void InitializeSkillXp(SkillObject skill)

public int GetFocus(SkillObject skill)
public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)
public void RemoveFocus(SkillObject skill, int changeAmount)
public bool CanAddFocusToSkill(SkillObject skill)
public int GetRequiredFocusPointsToAddFocus(SkillObject skill)
public float GetFocusFactor(SkillObject skill)

public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)
public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)

public void AddPerk(PerkObject perk)
public bool GetPerkValue(PerkObject perk)

public void CheckLevel(bool shouldNotify)
public int GetXpRequiredForLevel(int level)
public void SetInitialLevel(int level)
public int GetTotalSkillPoints()

public void InitializeHeroDeveloper()
public void DevelopCharacterStats()
public void ClearUnspentPoints()
public void ClearHero()
```

`AddSkillXp` is affected by the focus factor (`GetFocusFactor`); `CheckLevel` levels up when xp reaches the threshold.

## Usage example

```csharp
HeroDeveloper dev = hero.HeroDeveloper;

// Add skill xp to the hero
dev.AddSkillXp(DefaultSkills.OneHanded, 500f);

// Directly adjust skill level
dev.ChangeSkillLevel(DefaultSkills.OneHanded, +10);

// Spend a focus point on a skill
if (dev.CanAddFocusToSkill(DefaultSkills.Bow) && dev.UnspentFocusPoints > 0)
{
    dev.AddFocus(DefaultSkills.Bow, 1);
}

// Spend an attribute point
if (dev.UnspentAttributePoints > 0)
{
    dev.AddAttribute(DefaultAttributes.Vigor, 1);
}

// Check/grant a perk
if (!dev.GetPerkValue(DefaultPerks.OneHanded.Pugilist))
{
    dev.AddPerk(DefaultPerks.OneHanded.Pugilist);
}
```

## See also

- [Hero](../campaign/Hero)
- [SkillObject](../core-extra/SkillObject)
- [CharacterAttribute](../core-extra/CharacterAttribute)
- [PerkObject](./PerkObject)
- [Campaign](./Campaign)

## Usage Example

```csharp
var example = new HeroDeveloper();
```
