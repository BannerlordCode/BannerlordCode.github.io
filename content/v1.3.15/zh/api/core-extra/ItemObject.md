---
title: "ItemObject"
description: "一件装备/物品/贸易品的静态定义对象：承载名称、价值、重量、类型与武器/护甲/马匹等部件，由 Items.xml 注册进 ObjectManager，被库存、装备与 crafting 共享读取。"
---
# ItemObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public sealed class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**源文件路径:** `TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs`

## 一句话职责

它是游戏里「一把剑、一套盔甲、一捆粮食、一匹马」这类物品的**静态定义卡**：所有部队的库存、商店的货物、角色的装备槽都只是引用同一张卡，卡本身在加载时由 `Items.xml` 解析生成并注册到 `MBObjectManager`，加载后基本只读。

## 心智模型

把 `ItemObject` 当作 **Core 层的「物品定义」** —— 注意是定义，不是某一份库存里的具体数量：

- 它继承自 `MBObjectBase`，用一个 `StringId`（如 `"item_sword_1"`）在 `MBObjectManager` 中唯一标识。整机共享同一实例：你从 `Items.All` 拿到的是全局唯一那张卡。
- 数据来自 `Items.xml`（或 `CraftedItem` 节点的反序列化）。引擎在启动时 `Deserialize` 解析 `name`、`Type`、`ItemComponent`、`ItemFlags`、`value`、`weight` 等，并调用子系统的 `ItemValueModel.CalculateValue` 算出 `Value`、`CalculateTier` 算出 `Tierf`。一般不要在运行时自己 `new ItemObject` —— 那样它不会进 `MBObjectManager`，也没有 `StringId`。
- 实体的「有多少件」不在 `ItemObject` 上，而在 `ItemRosterElement`（属于某支部队的 `ItemRoster`）；「穿在哪个槽」在 `EquipmentElement`（属于某个角色的 `Equipment`）。它们都只是持有 `ItemObject` 引用 + 数量/修饰。
- 复杂物品会挂一个 `ItemComponent` 子对象：`WeaponComponent`、`ArmorComponent`、`HorseComponent`、`BannerComponent`、`SaddleComponent` 或 `TradeItemComponent`。`ItemObject` 用一组 `HasXxxComponent` / `XxxComponent` 属性把这些子部件以正确类型暴露出来，避免你手动向下转型。

因为全局唯一且只读，正确的「改物品」思路是：改的是引用它的容器（库存、装备）或读它的属性来做判定，**不要去改 `ItemObject` 本身的定义字段**。

## 何时用 / 何时不要用

- **用 `ItemObject`**：按 `StringId` 查询某件物品的定义、读取它的 `Value`/`Weight`/`Tier`/`ItemCategory`/武器与护甲数据、判断它属于哪一类（武器/护甲/贸易品/马）、遍历全部物品做掉落表或商店逻辑。
- **不要用它装数量**：给部队加 10 把剑，应调用 `PartyBase.ItemRoster.AddToCounts(item, 10)`，而不是修改 `ItemObject`。
- **不要用它来装备角色**：穿装备走 `Equipment.AddEquipmentElement(EquipmentElement, EquipmentIndex)`，不是改 `ItemObject`。
- **不要直接写私有字段改平衡**：`Name`/`Value`/`ItemFlags`/`ItemCategory` 等几乎都是 `{ get; private set; }`。强行用反射或内部 setter 改写会**同时影响所有引用该物品的地方（敌方、商店、存档）并可能坏档**。需要临时的玩家 crafted 标记走 `InitAsPlayerCraftedItem` / `SetItemFlagsForCosmetics` 这类既定入口。
- **不要拿 `ItemObject` 当战斗单位**：进入 `Mission` 后，单位化身是 `Agent`，物品定义只是它拿着的道具模板。

## 如何获取 ItemObject

```csharp
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.ObjectSystem;
using TaleWorlds.Core;

// 1) 战役中最常用：按 StringId 精确取得（若不存在返回 null）
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1");

// 2) 战役扩展入口：遍历全部已注册物品
foreach (ItemObject item in Items.All)
{
    if (item.IsTradeGood && item.Value > 500)
    {
        // 高价贸易品
    }
}

// 3) 按类型列表取（等价，但 Items.All 更直接）
MBReadOnlyList<ItemObject> all = MBObjectManager.Instance.GetObjectTypeList<ItemObject>();

// 4) 由武器 GUID 反查（少部分存档/装备数据用整数句柄引用）
ItemObject byKind = ItemObject.GetItemFromWeaponKind(123456);

// 5) crafting 成品：用 HashedCode 反查已注册的 crafting 武器
ItemObject crafted = ItemObject.GetCraftedItemObjectFromHashedCode("a1b2c3");
```

> `Items.All` 实际是 `Campaign.Current.AllItems`，所以上面这段只能在战役加载后使用（详见风险段）。

## 主要成员（按主题分组）

### 身份与分类

| 成员 | 类型 / 签名 | 说明与调用时机 |
|------|------|------|
| `Type` / `ItemType` | `ItemTypeEnum`（公开字段 + 私有 set 属性） | 物品大类：剑、弓、盔甲、马、贸易品等。读取 `ItemType` 做分支判断（它是 `Type` 的只读包装）。 |
| `ItemCategory` | `ItemCategory` | 经济/商店分类（武器、护甲、食物、珠宝…）。`Deserialize` 后由 `DefaultItemCategories` 解析；为 `null` 时可调 `DetermineItemCategoryForItem()` 让 `ItemCategorySelector` 补算。 |
| `Tier` / `Tierf` | `ItemTiers` / `float` | 品质档位 1–6 与连续值。`Tierf` 在没有 `tier_override` 时由 `ItemValueModel.CalculateTier(this)` 算出，故**必须在游戏启动后读取**，否则抛空。 |
| `IsTradeGood` | `bool` | `Type == Goods`。用于过滤贸易品，常配合 `Items.AllTradeGoods`。 |
| `IsFood` | `bool` | 是否可食用（队伍补给消耗）。 |
| `IsBannerItem` / `IsAnimal` / `IsMountable` | `bool` | 横幅、非骑乘动物、可骑乘马的判定，由 `Type` 与 `HorseComponent` 推出。 |
| `IsUniqueItem` | `bool` | 是否为唯一物品（如任务物品）。 |
| `Culture` | `BasicCultureObject` | 文化归属，影响外观与商店供货。 |

### 部件（Component）桥接

这些属性把内部 `ItemComponent` 以正确子类型暴露出来，判断是否存在再读取具体数据：

| 成员 | 类型 | 说明与调用时机 |
|------|------|------|
| `ItemComponent` | `ItemComponent` | 原始部件容器；通常不需要直接用，改用下面的强类型桥。 |
| `WeaponComponent` / `HasWeaponComponent` | `WeaponComponent` / `bool` | 有武器数据时非 `null`。读取 `Weapons`、`PrimaryWeapon`。 |
| `ArmorComponent` / `HasArmorComponent` | `ArmorComponent` / `bool` | 护甲数据：`HeadArmor`/`BodyArmor`/`LegArmor` 等。 |
| `HorseComponent` / `HasHorseComponent` | `HorseComponent` / `bool` | 马匹数据：`ChargeDamage`/`Speed`/`Maneuver` 等。 |
| `BannerComponent` / `HasBannerComponent` | `BannerComponent` / `bool` | 横幅部件。 |
| `SaddleComponent` / `HasSaddleComponent` | `SaddleComponent` / `bool` | 马具。 |
| `FoodComponent` / `HasFoodComponent` | `TradeItemComponent` / `bool` | 食物贸易部件（注意它实际是 `TradeItemComponent`，不是独立 FoodComponent）。 |
| `Weapons` | `MBReadOnlyList<WeaponComponentData>` | 该物品的所有武器形态（主手/副手/投掷）。`WeaponComponent` 为 `null` 时返回 `null`。 |
| `PrimaryWeapon` | `WeaponComponentData` | 第一武器形态，常用于判断 `IsMeleeWeapon`/`IsRangedWeapon`。 |
| `WeaponDesign` / `IsCraftedWeapon` | `WeaponDesign` / `bool` | crafting 成品才有 `WeaponDesign`；非 `null` 即玩家/铁匠打造的武器。 |
| `RelevantSkill` | `SkillObject` | 该物品关联的使用技能（如剑→`DefaultSkills.OneHanded`，马→`DefaultSkills.Riding`）。 |

### 数值与外观

| 成员 | 类型 | 说明与调用时机 |
|------|------|------|
| `Name` | `TextObject` | 显示名。crafting 武器改名走 `SetCraftedWeaponName`（内部）。 |
| `Value` | `int` | 基础物价，加载时由 `DetermineValue()` 算出。 |
| `Weight` | `float` | 重量，影响队伍载重与移动速度。 |
| `Effectiveness` | `float` | 综合效能，由 `CalculateEffectiveness()` 依据武器/护甲/马匹数据算出。 |
| `Difficulty` | `int` | crafting 难度（仅 crafting 物品有意义）。 |
| `Appearance` | `float` | crafting 外观参数（0.5 为默认）。 |
| `ItemFlags` | `ItemFlags` | 标志位集合：`Civilian`、`Stealth`、`UseTeamColor`、`DoesNotHideChest` 等。派生属性 `IsCivilian`/`IsStealthItem`/`IsUsingTeamColor`/`DoesNotHideChest` 直接读它。 |
| `IsCraftedByPlayer` | `bool` | 玩家亲手打造标记，由 `InitAsPlayerCraftedItem` 设置。 |
| `MultiplayerItem` / `NotMerchandise` | `bool` | 是否仅多人、是否不上架商店。 |
| `IsTransferable` | `bool` | 能否交易，由 `ItemValueModel.GetIsTransferable(this)` 决定——**需游戏启动后读取**。 |
| `ScaleFactor` / `MultiMeshName` / `BodyName` 等 | 各种 | 纯表现/网格资源字段，供渲染与 tableau 使用，mod 通常只读。 |

### 方法

#### `public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)`
给物品追加一种武器形态。若还没有 `WeaponComponent`，会先自动创建一个并把 `ItemComponent` 设成它。适合在运行时程序化拼装一把自定义武器的数据；若物品已有 `ItemComponent` 且不是武器，需先自行处理冲突。

```csharp
using TaleWorlds.Core;

WeaponComponentData wcd = new WeaponComponentData(itemObject, WeaponClass.OneHandedSword, ...);
itemObject.AddWeapon(wcd, null);
```

#### `public void DetermineItemCategoryForItem()`
当 `ItemCategory` 还是 `null` 时，调用 `Game.Current.BasicModels.ItemCategorySelector.GetItemCategoryForItem(this)` 补算分类。注意它**只在 `ItemCategory == null` 时生效**，且依赖已加载的 `Game.Current`，启动前调用会抛空。

```csharp
if (itemObject.ItemCategory == null)
{
    itemObject.DetermineItemCategoryForItem();
}
```

#### `public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)`
按索引取第 `usageIndex` 种武器形态，等价于 `Weapons.ElementAt(usageIndex)`。索引越界会抛异常，调用前先确认 `Weapons` 非空且 `usageIndex < Weapons.Count`。

```csharp
if (itemObject.Weapons != null && itemObject.Weapons.Count > 0)
{
    WeaponComponentData first = itemObject.GetWeaponWithUsageIndex(0);
}
```

#### `public static ItemTypeEnum GetAmmoTypeForItemType(ItemTypeEnum itemType)`
给定武器大类，返回对应的弹药大类（弓→箭、弩→弩箭、投石索→投石、手枪→子弹、投掷→投掷物）。纯静态查表，无副作用，常用于自动配弹逻辑。

```csharp
ItemTypeEnum ammo = ItemObject.GetAmmoTypeForItemType(ItemObject.ItemTypeEnum.Bow);
// ammo == ItemObject.ItemTypeEnum.Arrows
```

#### `public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)`
弹道用：返回对应武器类的空气阻力常数（取自 `ManagedParameters`）。纯计算，无副作用，弹道/弹速相关 mod 会用。

#### `public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemTypeEnum itemType, bool isFood = false)`
把一个**已 `new` 出来且已 `Initialize()`** 的 `ItemObject` 初始化成贸易品：设置名称、网格、分类、价值、重量、类型并挂上 `TradeItemComponent`，最后标 `Civilian`。这是引擎内部/官方内容生成用的工厂方法，普通 mod 极少需要自己调——通常你只需在 `Items.xml` 里声明贸易品。

#### `public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`
把给定物品标记为「玩家打造」。仅设置 `IsCraftedByPlayer = true`，无其它副作用。

#### `public void SetItemFlagsForCosmetics(ItemFlags newFlags)`
直接覆盖 `ItemFlags`，用于外观/着色相关的标志（如队伍染色）。会**全局生效**，谨慎使用；非外观用途的标志修改可能影响交易/隐蔽逻辑。

#### `public override string ToString()` / `public override int GetHashCode()`
`ToString` 返回 `StringId`；`GetHashCode` 用 `Id.SubId`。适合做字典键或日志，不要把它们当作业务变更入口。

## 最小真实示例

### 示例 1：从库存里给主角部队补 20 把特定剑

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.Core;

ItemObject sword = Items.All.FirstOrDefault(i => i.StringId == "item_sword_1");
if (sword != null && Hero.MainHero.PartyBelongedTo != null)
{
    Hero.MainHero.PartyBelongedTo.ItemRoster.AddToCounts(sword, 20);
}
```

这里 `Items.All` 拿定义卡，数量变化发生在 `ItemRoster` 上（定义卡本身不变）。

### 示例 2：判断一件掉落物是不是高级护甲并读防护值

```csharp
using TaleWorlds.Core;

ItemObject drop = MBObjectManager.Instance.GetObject<ItemObject>("armor_body_plate_high");
if (drop != null && drop.HasArmorComponent && drop.Tier >= ItemObject.ItemTiers.Tier4)
{
    int bodyArmor = drop.ArmorComponent.BodyArmor;
    // 用 bodyArmor 做掉落权重或奖励判定
}
```

## 依赖图

`ItemObject` 是 Core 层定义，被上层容器以引用方式持有；它自己依赖若干子系统模型来算出 `Value`/`Tier`/`IsTransferable`：

- 上游注册：[MBObjectManager](../../campaign-ext/MBObjectManager/) 通过 `Items.xml` 反序列化并持有全部 `ItemObject`；战役遍历入口在 [Items](../../campaign-ext/Items/)。
- 部件子系统：[WeaponComponent](../WeaponComponent/)、[ArmorComponent](../ArmorComponent/)、[HorseComponent](../HorseComponent/)、[BannerComponent](../BannerComponent/)、[SaddleComponent](../SaddleComponent/)、[TradeItemComponent](../TradeItemComponent/)、[ItemComponent](../ItemComponent/) 各自承载细分数据。
- crafting：玩家打造走 [Crafting](../Crafting/) 生成带 [WeaponDesign](../WeaponDesign/) 的成品（见 `InitCraftedItemObject`）。
- 经济模型：[ItemValueModel](../ItemValueModel/) 与 [ItemCategorySelector](../ItemCategorySelector/) 在加载时算 `Value`/`Tier`/`ItemCategory`；分类枚举见 [ItemCategory](../ItemCategory/)。
- 下游持有：[ItemRoster](../../campaign-ext/ItemRoster/)（数量）与 [Equipment](../Equipment/)（穿戴槽）只保存 `ItemObject` 引用，不复制定义。
- 崩溃边界：共享定义被改与存档时机见 [崩溃与存档边界](../../../architecture/crash-boundaries/)。

## 风险与坏档

1. **共享定义被改 → 全局污染**：`ItemObject` 全局唯一且多数字段 `private set`。任何绕过既定入口改 `Value`/`Name`/`ItemFlags`/`ItemCategory` 的行为，会同时影响敌方、商店、巡逻队和存档里所有引用——极易坏档。改数量用 `ItemRoster`，改穿戴用 `Equipment`。
2. **启动前访问模型依赖属性会崩**：`Tierf`、`IsTransferable`、`DetermineItemCategoryForItem` 内部都读 `Game.Current.BasicModels.*`。在 `SubModule` 的 `OnSubModuleLoad` 阶段（`Game` 还没起）调用会抛空引用。`Items.All`（= `Campaign.Current.AllItems`）同理，只在战役加载后可用。
3. **`MBObjectManager.Instance` 为 null**：模块加载顺序或场景切换时访问 `MBObjectManager.Instance.GetObject` 可能拿到 `null` 实例本身或 `GetObject` 返回 `null`，使用前务必判空。
4. **陈旧引用**：`Items.All` 是活列表。若某个 mod 在运行中 `UnregisterObject` 或替换物品，你缓存的 `ItemObject` 引用可能失效；跨 tick 保存引用前确认它仍在列表中（或只缓存 `StringId` 再查）。
5. **crating 与克隆共享**：`new ItemObject(itemToCopy)` 的拷贝构造函数**直接共享** `ItemComponent` 与 `WeaponDesign` 引用，不是深拷贝。若你基于一件 crafted 武器克隆后改部件，会反向影响到原物品。
6. **直接 `new ItemObject` 不注册**：手工 `new` 出来的物品不会进 `MBObjectManager`、没有 `StringId`、不会被 `Items.All` 遍历到，也无法被存档引用。需要新物品应走 XML 声明或 crafting 流程。

## 跨版本提示

- v1.3.15 与 v1.4.5 的 `ItemObject` 核心 API（`Type`/`ItemCategory`/`Value`/`Tier`、`HasXxxComponent` 桥、静态查表方法）一致；1.4.5 源码明确把 `CalculateEffectiveness`、`DetermineValue`、crafting 反序列化路径放在此类中。
- 跨版本 mod 读取物品属性时，优先使用这里的强类型桥（`WeaponComponent`/`ArmorComponent` 等），不要自己向下转型 `ItemComponent`，以减少版本间字段位移带来的脆弱性。

## 导航

- [↑ Core 杂项 API 模块](../)
- [↔ ItemCategory](../ItemCategory/) · [WeaponComponent](../WeaponComponent/) · [ArmorComponent](../ArmorComponent/) · [Equipment](../Equipment/) · [Crafting](../Crafting/) · [ItemComponent](../ItemComponent/)
- [→ Items](../../campaign-ext/Items/) · [MBObjectManager](../../campaign-ext/MBObjectManager/) · [ItemRoster](../../campaign-ext/ItemRoster/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
