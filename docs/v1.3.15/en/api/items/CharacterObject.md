<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterObject`
- [← Area / Back to items](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterObject

**Namespace**: TaleWorlds.CampaignSystem  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterObject.cs`  
**Base Class**: BasicCharacterObject (TaleWorlds.Core)  
**Purpose**: Character definition in campaign mode, including NPCs, soldiers, heroes, etc.


<!-- BEGIN DEV-USE-CASES -->

## Developer Use Cases

### Use Case 1: Get the player character template

**Scenario**: Reference the player character object for battle scene spawning or UI display.

```csharp
CharacterObject player = CharacterObject.PlayerCharacter;
// player.HeroObject is the corresponding Hero instance
Hero playerHero = player.HeroObject;
```

**Key points**: `PlayerCharacter` is a static property; for non-hero characters (regular troops), `HeroObject` is `null`.

### Use Case 2: Create a copy from an existing character

**Scenario**: Dynamically spawn a character based on a template (e.g., mercenaries, special NPCs).

```csharp
CharacterObject template = MBObjectManager.Instance.GetObject<CharacterObject>("bandit_bandit");
CharacterObject clone = CharacterObject.CreateFrom(template);
// clone has independent equipment and stats but shares visual resources
```

**Key points**: `CreateFrom` is a static factory; pass `staticBodyProperties` to override face generation.

### Use Case 3: Read a character's battle equipment

**Scenario**: Inspect or modify a character's equipment when entering battle.

```csharp
Equipment battleEquipment = character.FirstBattleEquipment;
if (battleEquipment != null && battleEquipment.HasWeapon())
{
    // character has a weapon
}
```

**Key points**: `FirstBattleEquipment` is a read-only copy; to modify equipment use `RandomBattleEquipment` or set it at spawn time.

### Use Case 4: Iterate conversation characters

**Scenario**: Process participants in the dialogue system.

```csharp
foreach (CharacterObject c in CharacterObject.ConversationCharacters)
{
    // process each character in the conversation scene
}
```

**Key points**: `ConversationCharacters` is only valid while a conversation is active; the collection is empty after the conversation ends.

<!-- END DEV-USE-CASES -->


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
