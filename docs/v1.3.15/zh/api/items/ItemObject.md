<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemObject`
- [← 本领域 / 返回 items](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/ItemObject](/versions/ItemObject)
<!-- END BREADCRUMB -->
# ItemObject / 物品对象

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/ItemObject.cs`  
**Purpose**: 游戏中所有物品的基础类,包括武器、盔甲、马匹、盾牌等


<!-- BEGIN DEV-USE-CASES -->

## 开发用例 / Developer Use Cases

### 用例 1: 按 StringId 获取物品

**场景**: 查询 XML 中定义的物品，用于 mod 启动时的初始化或运行时引用。

```csharp
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("northern_sword");
if (sword != null && sword.IsFood)
{
    // 处理食物物品
}
```

**要点**: `GetObject<T>` 未找到返回 `null`，务必判空；`StringId` 即 XML 中的 `id` 属性。

### 用例 2: 遍历某类别下所有物品

**场景**: 统计或修改所有武器类物品。

```csharp
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    if (item.ItemType == ItemObject.ItemTypeEnum.OneHandedWeapon)
    {
        // 修改单手武器
    }
}
```

**要点**: `GetObjectTypeList<T>` 返回的是活动注册表，迭代期间不要修改。

### 用例 3: 读取武器组件数据

**场景**: 查询武器的伤害值、挥砍速度等。

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

**要点**: 非武器物品的 `WeaponComponent` 为 `null`；`WeaponComponentData` 在 `TaleWorlds.Core` 命名空间。

### 用例 4: 判断物品是否为民用

**场景**: 进入城镇场景时区分民用与战斗装备。

```csharp
if (item.IsCivilian)
{
    // 该物品可在民用场景装备
}
```

**要点**: `IsCivilian` 由 XML 的 `is_civilian` 属性控制；mod 添加的物品需显式设置。

<!-- END DEV-USE-CASES -->


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
