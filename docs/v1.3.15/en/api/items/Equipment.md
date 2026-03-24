# Equipment

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/Equipment.cs`  
**Purpose**: Manages character equipment slots, including weapon and armor equipment positions

## Equipment Slots

```csharp
public enum EquipmentIndex
{
    None = -1,
    Weapon0 = 0,        // Weapon slot 0
    Weapon1,            // Weapon slot 1
    Weapon2,            // Weapon slot 2
    Weapon3,            // Weapon slot 3
    ExtraWeaponSlot,    // Extra weapon slot (thrown items, etc.)
    NumAllWeaponSlots = 5,
    Head = 5,           // Head armor
    Body,               // Body armor
    Leg,                // Leg armor
    Gloves,             // Gloves
    Cape,               // Cape
    ArmorItemEndSlot,
    Horse = 10,         // Horse
    HorseHarness,       // Horse harness
    NumEquipmentSetSlots
}
```

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Item | EquipmentElement | Get or set equipment in specified slot |
| IsCivilian | bool | Whether this is civilian equipment |
| IsBattle | bool | Whether this is battle equipment |
| IsStealth | bool | Whether this is stealth equipment |
| Horse | EquipmentElement | Equipment in horse slot |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| AddEquipmentToSlotWithoutAgent | `void AddEquipmentToSlotWithoutAgent(EquipmentIndex index, EquipmentElement element)` | Add equipment to slot |
| GetEquipmentFromSlot | `EquipmentElement GetEquipmentFromSlot(EquipmentIndex index)` | Get equipment from slot |
| IsItemFitsToSlot | `static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)` | Check if item fits slot |
| IsEmpty | `bool IsEmpty()` | Check if equipment is empty |
| Clone | `Equipment Clone(bool cloneWithoutWeapons = false)` | Clone equipment |
| FillFrom | `void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)` | Fill from source equipment |
| GetHeadArmorSum | `float GetHeadArmorSum()` | Get total head armor |
| GetHumanBodyArmorSum | `float GetHumanBodyArmorSum()` | Get total body armor |
| GetLegArmorSum | `float GetLegArmorSum()` | Get total leg armor |
| GetArmArmorSum | `float GetArmArmorSum()` | Get total arm armor |
| GetHorseArmorSum | `float GetHorseArmorSum()` | Get total horse armor |
| GetTotalWeightOfArmor | `float GetTotalWeightOfArmor(bool forHuman)` | Get total armor weight |
| GetTotalWeightOfWeapons | `float GetTotalWeightOfWeapons()` | Get total weapon weight |
| HasWeapon | `bool HasWeapon()` | Whether has weapon |
| HasWeaponOfClass | `bool HasWeaponOfClass(WeaponClass weaponClass)` | Whether has weapon of specific type |
| CreateFromEquipmentCode | `static Equipment CreateFromEquipmentCode(string code)` | Create equipment from code |
| CalculateEquipmentCode | `string CalculateEquipmentCode()` | Calculate equipment code |

## Usage Example

```csharp
// Get character equipment
Equipment equipment = character.Equipment;

// Iterate all equipment slots
for (int i = 0; i < 12; i++)
{
    EquipmentElement element = equipment[i];
    if (!element.IsEmpty)
    {
        ItemObject item = element.Item;
        // Process item
    }
}

// Use EquipmentIndex to access specific slots
EquipmentElement headArmor = equipment[EquipmentIndex.Head];
EquipmentElement bodyArmor = equipment[EquipmentIndex.Body];
EquipmentElement weapon = equipment[EquipmentIndex.Weapon0];

// Check if item fits slot
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("short_sword_vlandia_1");
bool canEquip = Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, sword);

// Add equipment to slot
ItemObject newArmor = MBObjectManager.Instance.GetObject<ItemObject>("full_leather_armor_vlandia");
EquipmentElement armorElement = new EquipmentElement(newArmor, null, null, false);
equipment[EquipmentIndex.Body] = armorElement;

// Calculate total armor
float totalHeadArmor = equipment.GetHeadArmorSum();
float totalBodyArmor = equipment.GetHumanBodyArmorSum();
float totalLegArmor = equipment.GetLegArmorSum();
float totalArmArmor = equipment.GetArmArmorSum();

// Get total equipment weight
float armorWeight = equipment.GetTotalWeightOfArmor(true);
float weaponWeight = equipment.GetTotalWeightOfWeapons();

// Clone equipment
Equipment clonedEquipment = equipment.Clone(false);

// Serialize equipment to code
string equipmentCode = equipment.CalculateEquipmentCode();
// Save or transmit
Equipment restoredEquipment = Equipment.CreateFromEquipmentCode(equipmentCode);
```
