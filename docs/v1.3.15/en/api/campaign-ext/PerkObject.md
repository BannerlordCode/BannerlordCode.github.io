<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment  
**Module:** TaleWorlds.CampaignSystem  
**Type:** sealed class (inherits `PropertyObject`)  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs`

`PerkObject` represents a perk — a passive bonus unlocked when a skill reaches a threshold. Each perk belongs to a skill and has primary/secondary role bonuses (e.g. commander, quartermaster).

## Overview

Mods usually do not `new PerkObject`; instead reference existing perks via the `DefaultPerks` static fields (e.g. `DefaultPerks.OneHanded.Pugilist`), or enumerate all with `PerkObject.All`. To check whether a hero has a perk, use `Hero.GetPerkValue(perk)`.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| All | `MBReadOnlyList<PerkObject>` | Static; all perks (from `Campaign.Current.AllPerks`) |
| Skill | SkillObject | Owning skill |
| RequiredSkillValue | float | Skill value required to unlock |
| AlternativePerk | PerkObject | Mutually exclusive alternative perk (one of two) |
| PrimaryRole | PartyRole | Party role the primary bonus applies to |
| SecondaryRole | PartyRole | Party role the secondary bonus applies to |
| PrimaryBonus / SecondaryBonus | float | Primary / secondary bonus amount |
| PrimaryIncrementType / SecondaryIncrementType | EffectIncrementType | Bonus increment type |
| PrimaryTroopUsageMask / SecondaryTroopUsageMask | TroopUsageFlags | Primary/secondary troop-usage mask |
| PrimaryDescription / SecondaryDescription | TextObject | Primary / secondary bonus description |
| IsTrash | bool | Whether uninitialized (Name/Description/Skill null) |

## Initialize

```csharp
public void Initialize(string name, SkillObject skill, int requiredSkillValue, PerkObject alternativePerk,
    string primaryDescription, PartyRole primaryRole, float primaryBonus, EffectIncrementType incrementType,
    string secondaryDescription = "", PartyRole secondaryRole = PartyRole.None, float secondaryBonus = 0f,
    EffectIncrementType secondaryIncrementType = EffectIncrementType.Invalid,
    TroopUsageFlags primaryTroopUsageMask = TroopUsageFlags.Undefined,
    TroopUsageFlags secondaryTroopUsageMask = TroopUsageFlags.Undefined)
```

Used to set all fields when defining a perk in XML/code. A non-null `alternativePerk` sets up a two-way mutually exclusive link.

## Usage example

```csharp
// Reference an existing perk and check whether a hero has it
PerkObject perk = DefaultPerks.OneHanded.Pugilist;
if (hero.GetPerkValue(perk))
{
    // hero has the perk
}

// Enumerate all perks under a skill
foreach (PerkObject p in PerkObject.All)
{
    if (p.Skill == DefaultSkills.OneHanded && !p.IsTrash)
    {
        Debug.Print($"{p.Name}: requires {p.RequiredSkillValue}, primary bonus {p.PrimaryBonus}");
    }
}
```

## See also

- [Hero](../campaign/Hero.md)
- [HeroDeveloper](./HeroDeveloper.md)
- [SkillObject](../core-extra/SkillObject.md)
- [TraitObject](./TraitObject.md)
- [Campaign](./Campaign.md)
