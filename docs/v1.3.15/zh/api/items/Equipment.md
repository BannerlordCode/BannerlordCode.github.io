# Equipment / 装备

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/Equipment.cs`  
**Purpose**: 管理角色装备的槽位系统,包括武器和护甲的装备位置

## 装备槽位 / Equipment Slots

```csharp
public enum EquipmentIndex
{
    None = -1,
    Weapon0 = 0,        // 武器槽0
    Weapon1,            // 武器槽1
    Weapon2,            // 武器槽2
    Weapon3,            // 武器槽3
    ExtraWeaponSlot,    // 额外武器槽(投掷物等)
    NumAllWeaponSlots = 5,
    Head = 5,           // 头部护甲
    Body,               // 身体护甲
    Leg,                // 腿部护甲
    Gloves,             // 手套
    Cape,               // 披风
    ArmorItemEndSlot,
    Horse = 10,         // 马匹
    HorseHarness,       // 马具
    NumEquipmentSetSlots
}
```

## 关键属性 / Key Properties

| 属性 | 类型 | 描述 |
|------|------|------|
| Item | EquipmentElement | 获取或设置指定槽位的装备 |
| IsCivilian | bool | 是否为平民装备 |
| IsBattle | bool | 是否为战斗装备 |
| IsStealth | bool | 是否为潜行装备 |
| Horse | EquipmentElement | 马匹槽位的装备 |

## 关键方法 / Key Methods

| 方法 | 签名 | 描述 |
|------|------|------|
| AddEquipmentToSlotWithoutAgent | `void AddEquipmentToSlotWithoutAgent(EquipmentIndex index, EquipmentElement element)` | 添加装备到槽位 |
| GetEquipmentFromSlot | `EquipmentElement GetEquipmentFromSlot(EquipmentIndex index)` | 获取槽位装备 |
| IsItemFitsToSlot | `static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)` | 检查物品是否适合槽位 |
| IsEmpty | `bool IsEmpty()` | 检查装备是否为空 |
| Clone | `Equipment Clone(bool cloneWithoutWeapons = false)` | 克隆装备 |
| FillFrom | `void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)` | 从源装备填充 |
| GetHeadArmorSum | `float GetHeadArmorSum()` | 获取头部护甲总和 |
| GetHumanBodyArmorSum | `float GetHumanBodyArmorSum()` | 获取身体护甲总和 |
| GetLegArmorSum | `float GetLegArmorSum()` | 获取腿部护甲总和 |
| GetArmArmorSum | `float GetArmArmorSum()` | 获取手臂护甲总和 |
| GetHorseArmorSum | `float GetHorseArmorSum()` | 获取马匹护甲总和 |
| GetTotalWeightOfArmor | `float GetTotalWeightOfArmor(bool forHuman)` | 获取护甲总重量 |
| GetTotalWeightOfWeapons | `float GetTotalWeightOfWeapons()` | 获取武器总重量 |
| HasWeapon | `bool HasWeapon()` | 是否持有武器 |
| HasWeaponOfClass | `bool HasWeaponOfClass(WeaponClass weaponClass)` | 是否持有指定类型的武器 |
| CreateFromEquipmentCode | `static Equipment CreateFromEquipmentCode(string code)` | 从装备代码创建装备 |
| CalculateEquipmentCode | `string CalculateEquipmentCode()` | 计算装备代码 |

## 使用示例 / Usage Example

```csharp
// 获取角色装备
Equipment equipment = character.Equipment;

// 遍历所有装备槽位
for (int i = 0; i < 12; i++)
{
    EquipmentElement element = equipment[i];
    if (!element.IsEmpty)
    {
        ItemObject item = element.Item;
        // 处理物品
    }
}

// 使用 EquipmentIndex 访问特定槽位
EquipmentElement headArmor = equipment[EquipmentIndex.Head];
EquipmentElement bodyArmor = equipment[EquipmentIndex.Body];
EquipmentElement weapon = equipment[EquipmentIndex.Weapon0];

// 检查物品是否适合槽位
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("short_sword_vlandia_1");
bool canEquip = Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, sword);

// 添加装备到槽位
ItemObject newArmor = MBObjectManager.Instance.GetObject<ItemObject>("full_leather_armor_vlandia");
EquipmentElement armorElement = new EquipmentElement(newArmor, null, null, false);
equipment[EquipmentIndex.Body] = armorElement;

// 计算护甲总和
float totalHeadArmor = equipment.GetHeadArmorSum();
float totalBodyArmor = equipment.GetHumanBodyArmorSum();
float totalLegArmor = equipment.GetLegArmorSum();
float totalArmArmor = equipment.GetArmArmorSum();

// 获取装备总重量
float armorWeight = equipment.GetTotalWeightOfArmor(true);
float weaponWeight = equipment.GetTotalWeightOfWeapons();

// 克隆装备
Equipment clonedEquipment = equipment.Clone(false);

// 序列化装备为代码
string equipmentCode = equipment.CalculateEquipmentCode();
// 保存或传输
Equipment restoredEquipment = Equipment.CreateFromEquipmentCode(equipmentCode);
```
