
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemObject`
- [← Area / Back to items](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/ItemObject](/versions/ItemObject)
<!-- END BREADCRUMB -->
# ItemObject

## Mental Model

Treat `ItemObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/ItemObject.cs`  
**Purpose**: Base class for all items in the game, including weapons, armor, horses, shields, and more


<!-- BEGIN DEV-USE-CASES -->

## Developer Use Cases

### Use Case 1: Get an item by StringId

**Scenario**: Look up an item defined in XML for mod startup initialization or runtime reference.

```csharp
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("northern_sword");
if (sword != null && sword.IsFood)
{
    // process food item
}
```

**Key points**: `GetObject<T>` returns `null` if not found — always null-check. `StringId` is the `id` attribute in XML.

### Use Case 2: Iterate all items of a category

**Scenario**: Enumerate or modify all weapon-type items.

```csharp
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    if (item.ItemType == ItemObject.ItemTypeEnum.OneHandedWeapon)
    {
        // modify one-handed weapons
    }
}
```

**Key points**: `GetObjectTypeList<T>` returns the live registry — do not modify during iteration.

### Use Case 3: Read weapon component data

**Scenario**: Query a weapon's damage values, swing speed, etc.

```csharp
ItemObject weapon = MBObjectManager.Instance.GetObject<ItemObject>("empire_sword_1_t2");
if (weapon?.WeaponComponent != null)
{
    foreach (WeaponComponentData wcd in weapon.WeaponComponent.Weapons)
    {
        int swingDamage = wcd.SwingDamageType; // DamageTypes enum
        int thrustDamage = wcd.ThrustDamage;
    }
}
```

**Key points**: `WeaponComponent` is `null` for non-weapon items; `WeaponComponentData` is in the `TaleWorlds.Core` namespace.

### Use Case 4: Check if an item is civilian

**Scenario**: Distinguish civilian vs battle equipment when entering town scenes.

```csharp
if (item.IsCivilian)
{
    // this item can be equipped in civilian scenes
}
```

**Key points**: `IsCivilian` is controlled by the XML `is_civilian` attribute; mod-added items must set it explicitly.

<!-- END DEV-USE-CASES -->


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
