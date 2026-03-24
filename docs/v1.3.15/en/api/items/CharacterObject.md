# CharacterObject

**Namespace**: TaleWorlds.CampaignSystem  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterObject.cs`  
**Base Class**: BasicCharacterObject (TaleWorlds.Core)  
**Purpose**: Character definition in campaign mode, including NPCs, soldiers, heroes, etc.

## Overview

`CharacterObject` extends `BasicCharacterObject` to provide campaign-specific character functionality. It represents characters in the campaign world including heroes, soldiers, and NPCs.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| HeroObject | Hero | Returns associated Hero object if this is a hero character |
| CharacterObject | CharacterObject | Self reference to the character object |
| Equipment | Equipment | Get character equipment (returns battle equipment if Hero) |
| BattleEquipments | IEnumerable | All battle equipment sets |
| CivilianEquipments | IEnumerable | All civilian equipment sets |
| StealthEquipments | IEnumerable | All stealth equipment sets |
| Level | int | Character level (returns Hero level if Hero) |
| HitPoints | int | Current hit points |
| IsHero | bool | Whether this is a hero character |
| IsFemale | bool | Whether character is female |
| Culture | CultureObject | Character culture/faction |
| Occupation | Occupation | Character occupation |

## Static Properties

| Property | Type | Description |
|----------|------|-------------|
| PlayerCharacter | CharacterObject | Current player character |
| OneToOneConversationCharacter | CharacterObject | Current one-to-one conversation character |
| ConversationCharacters | IEnumerable | All characters in current conversation |

## Usage Example

```csharp
// Get player character
CharacterObject player = CharacterObject.PlayerCharacter;

// Check if it's a hero
if (player.IsHero)
{
    Hero hero = player.HeroObject;
    // Handle hero-specific properties
}

// Get character equipment
Equipment equipment = player.Equipment;

// Iterate battle equipment
foreach (Equipment eq in player.BattleEquipments)
{
    // Process equipment
}
```

---

# BasicCharacterObject

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/BasicCharacterObject.cs`  
**Purpose**: Base character definition in the core game engine, defining basic character attributes and equipment

## Overview

`BasicCharacterObject` is the base class for all character definitions in Bannerlord. It provides core character properties and methods used throughout the game.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Name | TextObject | Character name |
| Level | int | Character level |
| Race | int | Character race |
| IsFemale | bool | Whether character is female |
| Culture | BasicCultureObject | Character culture |
| Equipment | Equipment | Default equipment |
| BattleEquipments | IEnumerable | Battle equipment list |
| CivilianEquipments | IEnumerable | Civilian equipment list |
| IsHero | bool | Whether this is a hero |
| IsSoldier | bool | Whether this is a soldier |
| IsMounted | bool | Whether this is mounted |
| IsRanged | bool | Whether this is a ranged unit |
| IsInfantry | bool | Whether this is infantry |
| DefaultFormationClass | FormationClass | Default formation class |
| BodyPropertyRange | MBBodyProperty | Body property range |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| MaxHitPoints | int MaxHitPoints() | Calculate maximum hit points |
| GetSkillValue | int GetSkillValue(SkillObject skill) | Get skill value |
| GetPower | float GetPower() | Get character power value |
| GetBattlePower | float GetBattlePower() | Get battle power value |
| GetBattleTier | int GetBattleTier() | Get battle tier (1-7) |
| GetBodyProperties | BodyProperties GetBodyProperties(Equipment equipment, int seed) | Get body properties |
| HasMount | bool HasMount() | Whether has a mount |
| GetStepSize | float GetStepSize() | Get step size |

## Usage Example

```csharp
// Get character by string ID
var manager = MBObjectManager.Instance;
BasicCharacterObject troop = manager.GetObject("vlandian_footman") as BasicCharacterObject;

// Check character type
if (troop.IsInfantry)
{
    // Is infantry
}
if (troop.IsMounted)
{
    // Is cavalry
}

// Get equipment
Equipment equipment = troop.Equipment;

// Get battle tier
int tier = troop.GetBattleTier();

// Check if has mount
bool hasMount = troop.HasMount();
```
