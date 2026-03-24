# ItemObject

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/ItemObject.cs`  
**Purpose**: Base class for all items in the game, including weapons, armor, horses, shields, and more

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| ItemComponent | ItemComponent | Contains item-specific functional data |
| ItemCategory | ItemCategory | Item category classification |
| Name | TextObject | Item display name |
| Value | int | Item value (in gold) |
| Weight | float | Item weight |
| Difficulty | int | Usage difficulty level |
| Effectiveness | float | Item effectiveness value, used for tier calculation |
| Tier | ItemTiers | Item quality tier (Tier1-Tier6) |
| ItemType | ItemTypeEnum | Item type enum |

## Item Types

```csharp
public enum ItemTypeEnum
{
    Invalid,
    Horse,
    OneHandedWeapon,
    TwoHandedWeapon,
    Polearm,
    Arrows,
    Bolts,
    SlingStones,
    Shield,
    Bow,
    Crossbow,
    Sling,
    Thrown,
    Goods,
    HeadArmor,
    BodyArmor,
    LegArmor,
    HandArmor,
    Pistol,
    Musket,
    Bullets,
    Animal,
    Book,
    ChestArmor,
    Cape,
    HorseHarness,
    Banner
}
```

## Item Components

| Component Property | Type | Description |
|-------------------|------|-------------|
| WeaponComponent | WeaponComponentData | Weapon component (if item is a weapon) |
| ArmorComponent | ArmorComponent | Armor component (if item is armor) |
| HorseComponent | HorseComponent | Horse component (if item is a horse) |
| BannerComponent | BannerComponent | Banner component |
| SaddleComponent | SaddleComponent | Saddle component |
| FoodComponent | TradeItemComponent | Food/trade component |

## Item Flags

| Flag | Description |
|------|-------------|
| IsUsingTeamColor | Whether item uses team color |
| DoesNotHideChest | Whether chest is visible |
| IsCivilian | Whether item is civilian equipment |
| IsStealthItem | Whether item is for stealth |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetItemFromWeaponKind | `static ItemObject GetItemFromWeaponKind(int weaponKind)` | Get item by weapon kind |
| GetCraftedItemObjectFromHashedCode | `static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)` | Get crafted item from hash code |
| IsItemFitsToSlot | `static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)` | Check if item fits a specific slot |

## Usage Example

```csharp
// Get an item
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("short_sword_vlandia_1");

// Check item type
if (sword.ItemType == ItemObject.ItemTypeEnum.OneHandedWeapon)
{
    // Get weapon data
    WeaponComponentData weaponData = sword.PrimaryWeapon;
    int damage = weaponData.SwingDamage;
    float speed = weaponData.SwingSpeed;
}

// Check item component
if (sword.HasWeaponComponent)
{
    WeaponComponent weapon = sword.WeaponComponent;
}

// Get item-related skill
SkillObject relevantSkill = sword.RelevantSkill; // Returns OneHanded skill

// Check item tier
ItemObject.ItemTiers tier = sword.Tier; // Tier1 to Tier6
```

## Finding Items

```csharp
// Get item by string ID
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("item_id");

// Get all items
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    // Process each item
}

// Filter by category
var weapons = MBObjectManager.Instance.GetObjectTypeList<ItemObject>()
    .Where(i => i.HasWeaponComponent);
```
