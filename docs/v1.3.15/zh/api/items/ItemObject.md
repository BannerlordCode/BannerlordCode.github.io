# ItemObject / 物品对象

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/ItemObject.cs`  
**Purpose**: 游戏中所有物品的基础类,包括武器、盔甲、马匹、盾牌等

## 关键属性 / Key Properties

| 属性 | 类型 | 描述 |
|------|------|------|
| ItemComponent | ItemComponent | 物品组件,包含物品的具体功能数据 |
| ItemCategory | ItemCategory | 物品类别 |
| Name | TextObject | 物品显示名称 |
| Value | int | 物品价值(金钱) |
| Weight | float | 物品重量 |
| Difficulty | int | 使用难度等级 |
| Effectiveness | float | 物品效能值,用于计算 tier |
| Tier | ItemTiers | 物品品质等级(Tier1-Tier6) |
| ItemType | ItemTypeEnum | 物品类型枚举 |

## 物品类型 / Item Types

```csharp
public enum ItemTypeEnum
{
    Invalid,
    Horse,              // 马匹
    OneHandedWeapon,    // 单手武器
    TwoHandedWeapon,    // 双手武器
    Polearm,            // 长柄武器
    Arrows,             // 箭矢
    Bolts,              // 弩箭
    SlingStones,        // 弹弓石
    Shield,             // 盾牌
    Bow,                // 弓
    Crossbow,           // 弩
    Sling,              // 弹弓
    Thrown,             // 投掷物
    Goods,              // 商品货物
    HeadArmor,          // 头部护甲
    BodyArmor,          // 身体护甲
    LegArmor,           // 腿部护甲
    HandArmor,          // 手部护甲
    Pistol,             // 手枪
    Musket,             // 步枪
    Bullets,            // 子弹
    Animal,             // 动物
    Book,               // 书籍
    ChestArmor,         // 胸部护甲
    Cape,               // 披风
    HorseHarness,       // 马具
    Banner              // 旗帜
}
```

## 物品组件 / Item Components

| 组件属性 | 类型 | 描述 |
|----------|------|------|
| WeaponComponent | WeaponComponentData | 武器组件(如果物品是武器) |
| ArmorComponent | ArmorComponent | 护甲组件(如果物品是护甲) |
| HorseComponent | HorseComponent | 马匹组件(如果物品是马) |
| BannerComponent | BannerComponent | 旗帜组件 |
| SaddleComponent | SaddleComponent | 马鞍组件 |
| FoodComponent | TradeItemComponent | 食物/贸易组件 |

## 物品标志 / Item Flags

| 标志 | 描述 |
|------|------|
| IsUsingTeamColor | 是否使用队伍颜色 |
| DoesNotHideChest | 是否显示胸部 |
| IsCivilian | 是否为民用物品 |
| IsStealthItem | 是否为潜行物品 |

## 关键方法 / Key Methods

| 方法 | 签名 | 描述 |
|------|------|------|
| GetItemFromWeaponKind | `static ItemObject GetItemFromWeaponKind(int weaponKind)` | 根据武器种类获取物品 |
| GetCraftedItemObjectFromHashedCode | `static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)` | 从哈希码获取锻造物品 |
| IsItemFitsToSlot | `static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)` | 检查物品是否适合指定槽位 |

## 使用示例 / Usage Example

```csharp
// 获取物品
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("short_sword_vlandia_1");

// 检查物品类型
if (sword.ItemType == ItemObject.ItemTypeEnum.OneHandedWeapon)
{
    // 获取武器数据
    WeaponComponentData weaponData = sword.PrimaryWeapon;
    int damage = weaponData.SwingDamage;
    float speed = weaponData.SwingSpeed;
}

// 检查物品组件
if (sword.HasWeaponComponent)
{
    WeaponComponent weapon = sword.WeaponComponent;
}

// 获取物品相关技能
SkillObject relevantSkill = sword.RelevantSkill; // 返回 OneHanded 技能

// 检查物品品质
ItemObject.ItemTiers tier = sword.Tier; // Tier1 到 Tier6
```

## 物品查找 / Finding Items

```csharp
// 通过字符串ID获取物品
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("item_id");

// 获取所有物品
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    // 处理每个物品
}

// 按类别筛选
var weapons = MBObjectManager.Instance.GetObjectTypeList<ItemObject>()
    .Where(i => i.HasWeaponComponent);
```
