
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemObject / 物品对象`
- [← 本领域 / 返回 items](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemObject / 物品对象

## 心智模型

先把 `ItemObject` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.Core  
**File**: 

`bannerlord-1.3.15/TaleWorlds.Core/ItemObject.cs

`  
**Purpose**: 游戏中所有物品的基础?包括武器、盔甲、马匹、盾牌等


<!-- BEGIN DEV-USE-CASES -->

## 开发用?/ Developer Use Cases

### 用例 1: ?StringId 获取物品

**场景**: 查询 XML 中定义的物品，用?mod 启动时的初始化或运行时引用?
`

`

`csharp
ItemObject sword = MBObjectManager.Instance.GetObject&lt;ItemObject&gt;("northern_sword");
if (sword != null && sword.IsFood)
{
    // 处理食物物品
}
`

`

`

**要点**: 

`GetObject&lt;T&gt;

` 未找到返?

`null

`，务必判空；

`StringId

` ?XML 中的 

`id

` 属性?
### 用例 2: 遍历某类别下所有物?
**场景**: 统计或修改所有武器类物品?
`

`

`csharp
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList&lt;ItemObject&gt;())
{
    if (item.ItemType == ItemObject.ItemTypeEnum.OneHandedWeapon)
    {
        // 修改单手武器
    }
}
`

`

`

**要点**: 

`GetObjectTypeList&lt;T&gt;

` 返回的是活动注册表，迭代期间不要修改?
### 用例 3: 读取武器组件数据

**场景**: 查询武器的伤害值、挥砍速度等?
`

`

`csharp
ItemObject weapon = MBObjectManager.Instance.GetObject&lt;ItemObject&gt;("empire_sword_1_t2");
if (weapon?.WeaponComponent != null)
{
    foreach (WeaponComponentData wcd in weapon.WeaponComponent.Weapons)
    {
        int swingDamage = wcd.SwingDamageType; // DamageTypes enum
        int thrustDamage = wcd.ThrustDamage;
    }
}
`

`

`

**要点**: 非武器物品的 

`WeaponComponent

` ?

`null

`；`WeaponComponentData

` ?

`TaleWorlds.Core

` 命名空间?
### 用例 4: 判断物品是否为民?
**场景**: 进入城镇场景时区分民用与战斗装备?
`

`

`csharp
if (item.IsCivilian)
{
    // 该物品可在民用场景装?}
`

`

`

**要点**: 

`IsCivilian

` ?XML ?

`is_civilian

` 属性控制；mod 添加的物品需显式设置?
<!-- END DEV-USE-CASES -->


## 关键属?/ Key Properties

\| 属?\| 类型 \| 描述 \|
\|------\|------\|------\|
\| ItemComponent \| ItemComponent \| 物品组件,包含物品的具体功能数?\|
\| ItemCategory \| ItemCategory \| 物品类别 \|
\| Name \| TextObject \| 物品显示名称 \|
\| Value \| int \| 物品价?金钱) \|
\| Weight \| float \| 物品重量 \|
\| Difficulty \| int \| 使用难度等级 \|
\| Effectiveness \| float \| 物品效能?用于计算 tier \|
\| Tier \| ItemTiers \| 物品品质等级(Tier1-Tier6) \|
\| ItemType \| ItemTypeEnum \| 物品类型枚举 \|

## 物品类型 / Item Types

`

`

`csharp
public enum ItemTypeEnum
{
    Invalid,
    Horse,              // 马匹
    OneHandedWeapon,    // 单手武器
    TwoHandedWeapon,    // 双手武器
    Polearm,            // 长柄武器
    Arrows,             // 箭矢
    Bolts,              // 弩箭
    SlingStones,        // 弹弓?
    Shield,             // 盾牌
    Bow,                // ?
    Crossbow,           // ?
    Sling,              // 弹弓
    Thrown,             // 投掷?
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
`

`

`

## 物品组件 / Item Components

\| 组件属?\| 类型 \| 描述 \|
\|----------\|------\|------\|
\| WeaponComponent \| WeaponComponentData \| 武器组件(如果物品是武? \|
\| ArmorComponent \| ArmorComponent \| 护甲组件(如果物品是护? \|
\| HorseComponent \| HorseComponent \| 马匹组件(如果物品是马) \|
\| BannerComponent \| BannerComponent \| 旗帜组件 \|
\| SaddleComponent \| SaddleComponent \| 马鞍组件 \|
\| FoodComponent \| TradeItemComponent \| 食物/贸易组件 \|

## 物品标志 / Item Flags

\| 标志 \| 描述 \|
\|------\|------\|
\| IsUsingTeamColor \| 是否使用队伍颜色 \|
\| DoesNotHideChest \| 是否显示胸部 \|
\| IsCivilian \| 是否为民用物?\|
\| IsStealthItem \| 是否为潜行物?\|

## 关键方法 / Key Methods

\| 方法 \| 签名 \| 描述 \|
\|------\|------\|------\|
\| GetItemFromWeaponKind \| 

`static ItemObject GetItemFromWeaponKind(int weaponKind)

` \| 根据武器种类获取物品 \|
\| GetCraftedItemObjectFromHashedCode \| 

`static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)

` \| 从哈希码获取锻造物?\|
\| IsItemFitsToSlot \| 

`static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)

` \| 检查物品是否适合指定槽位 \|

## 使用示例 / Usage Example

`

`

`csharp
// 获取物品
ItemObject sword = MBObjectManager.Instance.GetObject&lt;ItemObject&gt;("short_sword_vlandia_1");

// 检查物品类?
if (sword.ItemType == ItemObject.ItemTypeEnum.OneHandedWeapon)
{
    // 获取武器数据
    WeaponComponentData weaponData = sword.PrimaryWeapon;
    int damage = weaponData.SwingDamage;
    float speed = weaponData.SwingSpeed;
}

// 检查物品组?
if (sword.HasWeaponComponent)
{
    WeaponComponent weapon = sword.WeaponComponent;
}

// 获取物品相关技?
SkillObject relevantSkill = sword.RelevantSkill; // 返回 OneHanded 技?

// 检查物品品?
ItemObject.ItemTiers tier = sword.Tier; // Tier1 ?Tier6
`

`

`

## 物品查找 / Finding Items

`

`

`csharp
// 通过字符串ID获取物品
ItemObject item = MBObjectManager.Instance.GetObject&lt;ItemObject&gt;("item_id");

// 获取所有物?
foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList&lt;ItemObject&gt;())
{
    // 处理每个物品
}

// 按类别筛?
var weapons = MBObjectManager.Instance.GetObjectTypeList&lt;ItemObject&gt;()
    .Where(i =&gt; i.HasWeaponComponent);
`

`

`
