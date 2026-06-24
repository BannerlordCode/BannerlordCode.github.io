<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Equipment / 装备`
- [← 本领域 / 返回 items](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Equipment / 装备

## 心智模型

先把 `Equipment` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.Core  
**File**: 

`bannerlord-1.3.15/TaleWorlds.Core/Equipment.cs

`  
**Purpose**: 管理角色装备的槽位系?包括武器和护甲的装备位置


<!-- BEGIN DEV-USE-CASES -->

## 开发用?/ Developer Use Cases

### 用例 1: 从槽位读取装?
**场景**: 查询角色某个槽位的物品（如主武器、头盔）?
`

`

`csharp
Equipment eq = character.FirstBattleEquipment;
EquipmentElement weapon = eq.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
if (!weapon.IsEmpty)
{
    ItemObject item = weapon.Item;
    // 处理武器物品
}
`

`

`

**要点**: 

`GetEquipmentFromSlot

` 返回 

`EquipmentElement

`（包含物品和修饰符）；空槽位返回?

`EquipmentElement.IsEmpty

` ?

`true

`?
### 用例 2: 检查是否装备了特定武器类型

**场景**: 判断角色是否装备了长柄武器或弓箭?
`

`

`csharp
if (equipment.HasWeaponOfClass(WeaponClass.Polearm))
{
    // 角色装备了长柄武?}
`

`

`

**要点**: 

`WeaponClass

` ?

`TaleWorlds.Core

` 下的枚举；`HasWeapon()

` 仅判断是否有任意武器?
### 用例 3: 从另一?Equipment 复制

**场景**: 克隆角色的装备到新对象?
`

`

`csharp
var newEquipment = new Equipment();
newEquipment.FillFrom(sourceEquipment, useSourceEquipmentType: true);
`

`

`

**要点**: 

`FillFrom

` 是深拷贝；`useSourceEquipmentType

` 控制是否复制民用/战斗标记?
### 用例 4: 判断装备是否为空

**场景**: 验证新生成的角色是否已正确装备?
`

`

`csharp
if (equipment.IsEmpty())
{
    // 装备为空，需要初始化
}
`

`

`

**要点**: 

`IsEmpty()

` 检查所有槽位；要检查单个槽位用 

`GetEquipmentFromSlot

` 后判 

`IsEmpty

`?
<!-- END DEV-USE-CASES -->

## 装备槽位 / Equipment Slots

`

`

`csharp
public enum EquipmentIndex
{
    None = -1,
    Weapon0 = 0,        // 武器?
    Weapon1,            // 武器?
    Weapon2,            // 武器?
    Weapon3,            // 武器?
    ExtraWeaponSlot,    // 额外武器?投掷物等)
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
`

`

`

## 关键属?/ Key Properties

\| 属?\| 类型 \| 描述 \|
\|------\|------\|------\|
\| Item \| EquipmentElement \| 获取或设置指定槽位的装备 \|
\| IsCivilian \| bool \| 是否为平民装?\|
\| IsBattle \| bool \| 是否为战斗装?\|
\| IsStealth \| bool \| 是否为潜行装?\|
\| Horse \| EquipmentElement \| 马匹槽位的装?\|

## 关键方法 / Key Methods

\| 方法 \| 签名 \| 描述 \|
\|------\|------\|------\|
\| AddEquipmentToSlotWithoutAgent \| 

`void AddEquipmentToSlotWithoutAgent(EquipmentIndex index, EquipmentElement element)

` \| 添加装备到槽?\|
\| GetEquipmentFromSlot \| 

`EquipmentElement GetEquipmentFromSlot(EquipmentIndex index)

` \| 获取槽位装备 \|
\| IsItemFitsToSlot \| 

`static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)

` \| 检查物品是否适合槽位 \|
\| IsEmpty \| 

`bool IsEmpty()

` \| 检查装备是否为?\|
\| Clone \| 

`Equipment Clone(bool cloneWithoutWeapons = false)

` \| 克隆装备 \|
\| FillFrom \| 

`void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)

` \| 从源装备填充 \|
\| GetHeadArmorSum \| 

`float GetHeadArmorSum()

` \| 获取头部护甲总和 \|
\| GetHumanBodyArmorSum \| 

`float GetHumanBodyArmorSum()

` \| 获取身体护甲总和 \|
\| GetLegArmorSum \| 

`float GetLegArmorSum()

` \| 获取腿部护甲总和 \|
\| GetArmArmorSum \| 

`float GetArmArmorSum()

` \| 获取手臂护甲总和 \|
\| GetHorseArmorSum \| 

`float GetHorseArmorSum()

` \| 获取马匹护甲总和 \|
\| GetTotalWeightOfArmor \| 

`float GetTotalWeightOfArmor(bool forHuman)

` \| 获取护甲总重?\|
\| GetTotalWeightOfWeapons \| 

`float GetTotalWeightOfWeapons()

` \| 获取武器总重?\|
\| HasWeapon \| 

`bool HasWeapon()

` \| 是否持有武器 \|
\| HasWeaponOfClass \| 

`bool HasWeaponOfClass(WeaponClass weaponClass)

` \| 是否持有指定类型的武?\|
\| CreateFromEquipmentCode \| 

`static Equipment CreateFromEquipmentCode(string code)

` \| 从装备代码创建装?\|
\| CalculateEquipmentCode \| 

`string CalculateEquipmentCode()

` \| 计算装备代码 \|

## 使用示例 / Usage Example

`

`

`csharp
// 获取角色装备
Equipment equipment = character.Equipment;

// 遍历所有装备槽?
for (int i = 0; i &lt; 12; i++)
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
ItemObject sword = MBObjectManager.Instance.GetObject&lt;ItemObject&gt;("short_sword_vlandia_1");
bool canEquip = Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, sword);

// 添加装备到槽?
ItemObject newArmor = MBObjectManager.Instance.GetObject&lt;ItemObject&gt;("full_leather_armor_vlandia");
EquipmentElement armorElement = new EquipmentElement(newArmor, null, null, false);
equipment[EquipmentIndex.Body] = armorElement;

// 计算护甲总和
float totalHeadArmor = equipment.GetHeadArmorSum();
float totalBodyArmor = equipment.GetHumanBodyArmorSum();
float totalLegArmor = equipment.GetLegArmorSum();
float totalArmArmor = equipment.GetArmArmorSum();

// 获取装备总重?
float armorWeight = equipment.GetTotalWeightOfArmor(true);
float weaponWeight = equipment.GetTotalWeightOfWeapons();

// 克隆装备
Equipment clonedEquipment = equipment.Clone(false);

// 序列化装备为代码
string equipmentCode = equipment.CalculateEquipmentCode();
// 保存或传?
Equipment restoredEquipment = Equipment.CreateFromEquipmentCode(equipmentCode);
`

`

`
