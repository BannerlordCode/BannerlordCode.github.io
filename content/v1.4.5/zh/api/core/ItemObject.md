---
title: "ItemObject"
description: "Bannerlord 中一切物品（武器、护甲、坐骑、贸易品、锻造件）的核心定义对象：由 MBObjectManager 从 XML 反序列化并以 StringId 登记为共享单例，供经济、装备、战利品与锻造系统读取。"
---

# ItemObject

**命名空间：** TaleWorlds.Core
**模块：** TaleWorlds.Core
**类型：** public sealed class ItemObject : MBObjectBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs

## 概述

`ItemObject` 是 MBObject 体系中**一切物品的定义对象**：每一把武器、护甲、盾牌、弹药、坐骑、食物、贸易商品与锻造件在模块 XML 中都有一个条目，加载后被 `MBObjectManager` 反序列化为一个 `ItemObject` 实例，并以 `StringId` 为键登记进全局对象表。它描述的是“物品种类”本身，而非某个背包里具体有多少个——数量由 `ItemRosterElement` / `EquipmentElement` 承载；经济（商队/工坊/市场）、装备（英雄与队伍）、战利品与锻造系统都通过 `MBObjectManager.Instance.GetObject<ItemObject>(stringId)` 来读取这些共享定义。

## 心智模型

`ItemObject` 是 Foundation/Core 层的**物品定义单例**，不是 Campaign 的 Model 扩展点，也不是 Mission 层的临时对象。游戏启动时，模块 XML 中的每个 `<Item>` / `<CraftedItem>` 由 `MBObjectManager` 调用 `Deserialize` 反序列化成一个实例，并以 `StringId` 登记进全局对象表；此后所有系统（经济、装备、战利品、锻造）通过 `MBObjectManager.Instance.GetObject<ItemObject>(stringId)` 或 `MBObjectManager.Instance.GetObjectTypeList<ItemObject>()` 取到的都是**同一个**共享实例。真正记录“谁拥有多少个”的是 `ItemRosterElement` 与 `EquipmentElement`，记录“穿在谁身上”的是 `Equipment`。因此当你需要改动某一个具体持有物的数值（如给某把剑加修饰），正确做法是给元素套一个 `ItemModifier` 或克隆出新的 `ItemObject`，而不是去改全局共享定义字段——后者会影响所有引用同一 `StringId` 的队伍与英雄。

## 何时使用 / 何时不要使用

- **使用**：需要读取某物品的定义（价值、重量、类型、组件、标记、分类）以做交易、战利品、装备或锻造逻辑时，用 `MBObjectManager.Instance.GetObject<ItemObject>(stringId)` 取实例或遍历 `MBObjectManager.Instance.GetObjectTypeList<ItemObject>()`；需要程序化创建贸易品时用 `InitializeTradeGood`；标记玩家锻造武器用 `InitAsPlayerCraftedItem` / `InitCraftedItemObject`。
- **不要使用**：不要在运行时直接修改共享物品定义字段（如 `Value`、`ItemFlags`、`Name`）并期望它只影响某个持有物——请改用 `ItemModifier` 或克隆新实例。不要用 `new ItemObject()` 在 `MBObjectManager` 登记之外伪造世界物品（它们不会进入对象表、也不随存档往返）。不要把 `ItemObject` 当成“数量/堆叠”——数量属于 `ItemRosterElement` / `EquipmentElement`。不要在 Mission / View 层里依赖 Campaign 的持有状态去读它：物品定义是 Core 对象，但“归属与数量”是 Campaign / 名册状态。

## 依赖图

上游类型与系统：

- [MBObjectBase](../MBObjectBase) —— `ItemObject` 的直接基类，提供 `StringId`、`Id` 与对象系统基础设施。
- [MBObjectManager](../../campaign-ext/MBObjectManager) —— 从 XML / 模块注册物品，提供 `GetObject` / `GetObjectTypeList` 读取入口。

下游与协同系统（消费方）：

- [ItemRoster](../../campaign/ItemRoster) —— 队伍/库存的物品清单，`AddToCounts(item, count)` 才是转移数量的途径。
- [TroopRoster](../../campaign/TroopRoster) ——  troops 与装备名册，内部引用物品定义。
- [Hero](../../campaign/Hero) —— 英雄的装备与随身物品都指向 `ItemObject` 定义。
- [MobileParty](../../campaign/MobileParty) —— 队伍的 `ItemRoster` 通过稳定 `StringId` 引用物品。
- [Equipment](../../core-extra/Equipment) / [EquipmentElement](../../core-extra/EquipmentElement) —— 人物穿戴槽位与“物品 + 修饰”载体。
- [ItemRosterElement](../../core-extra/ItemRosterElement) —— 背包里“物品 + 数量 + 修饰”的载体。

相关类型：

- [Crafting](../../core-extra/Crafting) —— 锻造系统按 `WeaponDesign` 创建 `ItemObject`（调用 `InitCraftedItemObject`）。
- [WeaponDesign](../../core-extra/WeaponDesign) —— 玩家锻造武器的设计，挂在 `WeaponDesign` 上。
- [ItemCategory](../../core-extra/ItemCategory) —— 物品分类（Weapon / Armor / TradeGood / Animal 等），由 `DetermineItemCategoryForItem` 解析。
- [ItemComponent](../../core-extra/ItemComponent) —— 区分武器/护甲/坐骑/贸易品等具体行为，[WeaponComponent](../../core-extra/WeaponComponent) / [ArmorComponent](../../core-extra/ArmorComponent) / [HorseComponent](../../core-extra/HorseComponent) / [BannerComponent](../../core-extra/BannerComponent) / [SaddleComponent](../../core-extra/SaddleComponent) 是其子类/视图。
- [ItemFlags](../../core-extra/ItemFlags) —— 是否可掉落、是否唯一、是否平民物品等标记位。
- [ItemModifier](../../core-extra/ItemModifier) / [ItemModifierGroup](../../core-extra/ItemModifierGroup) —— 在不改动定义的前提下修饰具体持有物。
- [ItemValueModel](../../core-extra/ItemValueModel) —— `DetermineValue` / `Tierf` / `IsTransferable` 都委托它计算。

## 风险

- **共享单例被误改**：`ItemObject` 实例以 `StringId` 为键全局唯一，任意系统取到的都是同一对象。在运行时写入 `Value`、`ItemFlags`、`Name` 等字段会影响所有引用该 `StringId` 的队伍、英雄与界面，常表现为“改了一把剑，全图同 id 的剑都变了”。要改单件持有物请走 `ItemModifier` 或克隆。
- **运行时改 XML 的幻觉**：物品仅在模块加载期从 XML 反序列化一次，加载后 XML 已不存在。需要“新物品”应走 `InitializeTradeGood` 或锻造路径创建新实例，而不是回去改已加载对象来“假装修改定义”。
- **`StringId` 冲突 / 未注册**：`MBObjectManager.Instance.GetObject<ItemObject>(stringId)` 在未注册时返回 `null`；两个物品使用同一 `StringId` 会互相覆盖并打印断言。传入前务必确认该 id 已存在于模块 XML。
- **在登记前访问**：`MBObjectManager.Instance.GetObjectTypeList<ItemObject>()` 与 `GetObject` 在模块尚未加载（主菜单、子模块早期、编辑器上下文）时为空或返回 null，直接遍历会漏项或空引用。
- **存档靠 `StringId` 而非整对象**：`ItemObject` 作为 `MBObjectBase` 在存档中以 `StringId` 引用往返，而不是把整段定义序列化进去。若你给 `ItemObject` 加了自定义字段并期望它随存档恢复，这些字段不会自动持久化——应通过 `StringId` 在加载后重新解析，或登记进正式存档系统。
- **`tier_override` 与 `ItemValueModel` 脱节**：阶数 `Tier` / 阶位因子 `Tierf` 默认由 `ItemValueModel.CalculateTier(this)` 推出，仅当 XML 显式写 `tier_override` 时才用覆盖值。只改 `Value` 不会自动改显示的阶数，二者口径要分清。
- **武器 `Type` 被组件覆盖**：对武器，`Deserialize` 会用 `WeaponComponent.GetItemType()` 覆盖 XML 里的 `Type`，不一致时打印红色调试警告。不要仅依赖 XML `Type` 判断武器种类，应读 `ItemType` 或 `WeaponComponent` 的真实类型。

## 成员说明

### 注册与反序列化（生命周期）

- **`ItemObject(string stringId)`** 与 **`ItemObject(ItemObject itemToCopy)`**
  - 用途：前者以 `StringId` 构造一个空物品；后者深拷贝既有物品的全部定义字段（名称、网格、重量、价值、类型、文化、标记等），用于克隆物品。
  - 副作用：无额外副作用（纯构造/拷贝）。
  - 调用时机：`MBObjectManager` 在 XML 加载期按 id 构造空壳；锻造或程序化建物品时用拷贝构造克隆模板。

- **`Deserialize(MBObjectManager objectManager, XmlNode node)`**
  - 用途：覆写基类，从 XML 节点读取 `name` / `mesh` / `weight` / `value` / `Type` / `culture` / `item_holsters` / `flags` 等属性，并依据 `<ItemComponent>` 子节点类型构造对应的 `ItemComponent`（Armor / Weapon / Horse / Trade / Banner），随后调用 `DetermineItemCategoryForItem` 并触发 `Game.Current.ItemObjectDeserialized(this)`。
  - 副作用：写入大量字段并登记行为组件；若 `<CraftedItem>` 无法初始化会 `UnregisterObject` 并回退到 Trash 物品。
  - 调用时机：`MBObjectManager` 在模块注册期对每个 `<Item>` / `<CraftedItem>` 节点调用。

- **`ToString()`**
  - 用途：直接返回 `base.StringId`，因此物品在日志与界面中通常以 `StringId` 表示。
  - 副作用：无。
  - 调用时机：任何把物品当字符串使用的场合（调试、UI、序列化 key）。

### 组件、类型与分类

- **`ItemComponent`**（属性，返回 `ItemComponent`）
  - 用途：物品所挂的行为组件；`WeaponComponent` / `ArmorComponent` / `HorseComponent` / `BannerComponent` / `SaddleComponent` / `FoodComponent` 都是对它做类型转换的只读视图。
  - 副作用：无，纯访问。
  - 调用时机：任何需要按物品种类取具体组件逻辑的地方。

- **`Type` / `ItemType`**
  - 用途：`Type` 是公开枚举字段；`ItemType` 属性返回 `Type`（保留以兼容旧代码）。对武器，`WeaponComponent.GetItemType()` 在 `Deserialize` 中可能覆盖 XML 写入的 `Type`，不一致时打印红色调试警告。
  - 副作用：无。
  - 调用时机：判定物品大类（Goods / Horse / OneHandedWeapon 等）时使用。

- **`DetermineItemCategoryForItem()`**
  - 用途：若 `ItemCategory` 为空且 `Game.Current.BasicModels.ItemCategorySelector` 已注册，则调用其 `GetItemCategoryForItem(this)` 给物品归类。
  - 副作用：写入 `ItemCategory`（仅在为空时）。
  - 调用时机：`Deserialize` 末尾自动调用；也可在程序化建物品后手动调用。

### 经济与战斗属性

- **`Value`**（属性，返回 `int`）
  - 用途：物品基础金币价值；来自 XML `value` 属性，缺失时由 `DetermineValue()` 经 `ItemValueModel.CalculateValue(this)` 计算（默认 1）。
  - 副作用：无。
  - 调用时机：交易定价、工坊产出、战利品估值时读取。

- **`Weight` / `Difficulty` / `Effectiveness`**
  - 用途：重量、使用难度；`Effectiveness` 由 `CalculateEffectiveness()` 依据护甲/武器/坐骑数值算出，用于平衡与排序。
  - 副作用：无，纯计算属性。
  - 调用时机：负重计算、物品排序、战斗效能评估时读取。

- **`IsTradeGood`**（属性，返回 `bool`）
  - 用途：`ItemType == ItemTypeEnum.Goods`；商队、工坊、战利品与仓库逻辑据此判断能否买卖与囤积。
  - 副作用：无。
  - 调用时机：贸易/补给/战利品筛选时大量使用（`ItemRoster`、`WorkshopsCampaignBehavior`、`CaravansCampaignBehavior` 等）。

- **`IsFood` / `IsUniqueItem` / `NotMerchandise` / `MultiplayerItem` / `IsCraftedByPlayer`**
  - 用途：各语义标记（是否食物、是否唯一物品、是否不进商店、是否仅多人模式、是否玩家锻造）。
  - 副作用：无。
  - 调用时机：库存/商店过滤、任务判定、多人模式判定时读取。

- **`Tier` / `Tierf`**
  - 用途：物品阶数与阶位因子。默认由 `ItemValueModel.CalculateTier(this)` 得出，XML 设 `tier_override` 时以覆盖值优先。
  - 副作用：无。
  - 调用时机：战利品质量、商店货架、锻造评价时读取。

- **`IsTransferable`**（属性，返回 `bool`）
  - 用途：经 `ItemValueModel.GetIsTransferable(this)` 判断该物品能否在队伍/库存间转移。
  - 副作用：无。
  - 调用时机：库存转移、仓库判定时读取。

### 武器、护甲与坐骑视图

- **`WeaponComponent` / `ArmorComponent` / `HorseComponent` / `BannerComponent` / `SaddleComponent` / `FoodComponent`**（及对应 `HasXxxComponent` 布尔）
  - 用途：按组件类型安全取用的只读访问器；`WeaponComponent` 为空时其余视图返回 null，调用方应先查 `HasXxxComponent`。
  - 副作用：无。
  - 调用时机：需要具体组件数据时（如武器伤害、护甲值、坐骑速度）。

- **`PrimaryWeapon`**（属性，返回 `WeaponComponentData`）
  - 用途：`WeaponComponent?.PrimaryWeapon`，即主手持武器的用法数据。
  - 副作用：无。
  - 调用时机：装备/战斗系统读取主武器属性时。

- **`Weapons`**（属性，返回 `MBReadOnlyList<WeaponComponentData>`）
  - 用途：该物品所有武器用法的只读列表。
  - 副作用：无。
  - 调用时机：`GetWeaponWithUsageIndex` 与遍历武器用法时。

- **`IsMountable` / `IsAnimal`**
  - 用途：由 `HorseComponent` 推出——是否可骑乘、是否不可骑乘的畜类。
  - 副作用：无。
  - 调用时机：坐骑判定、鞍具适配时读取。

- **`RelevantSkill`**（属性，返回 `SkillObject`）
  - 用途：该物品对应的专长；武器取 `PrimaryWeapon.RelevantSkill`，坐骑取 `DefaultSkills.Riding`，其余返回 null。
  - 副作用：无。
  - 调用时机：专长加成、提示文本时读取。

### 锻造（crafted weapons）

- **`WeaponDesign`**（属性，返回 `WeaponDesign`）
  - 用途：玩家锻造武器的设计对象；`IsCraftedWeapon => WeaponDesign != null` 据此判定是否锻造件。
  - 副作用：无。
  - 调用时机：锻造/装备逻辑判断与读取设计时使用。

- **`InitAsPlayerCraftedItem(ref ItemObject itemObject)`**（静态）
  - 用途：将 `IsCraftedByPlayer` 置为 `true`，标记一件物品为玩家锻造。
  - 副作用：写入传入物品的 `IsCraftedByPlayer` 字段。
  - 调用时机：锻造 UI / 行为在玩家锻造成功后调用。

- **`InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemTypeEnum itemType, bool isFood = false)`**（静态）
  - 用途：填充一个贸易品：设置名称、网格、分类、价值、重量、类型、食物标记，挂上 `TradeItemComponent`，标记 `Civilian`，再 `AfterInitialized()`。
  - 副作用：写入传入物品的多项定义字段并登记组件；会触发 `AfterInitialized` 生命周期。
  - 调用时机：程序化创建贸易品（如工坊产出、任务补给）时调用。

- **`GetCraftedItemObjectFromHashedCode(string hashedCode)`**（静态）
  - 用途：遍历 `MBObjectManager.Instance.GetObjectTypeList<ItemObject>()`，返回 `WeaponDesign.HashedCode` 匹配且 `IsCraftedWeapon` 为真的物品，否则 null。
  - 副作用：无，纯查询。
  - 调用时机：按设计哈希找回一把已锻造武器时调用。

- **`SetCraftedWeaponName(TextObject weaponName)`**
  - 用途：设置物品 `Name` 并同步到 `WeaponDesign.SetWeaponName`。
  - 副作用：写入 `Name`，并传播到 `WeaponDesign`。
  - 调用时机：玩家为锻造武器命名时调用。

- **`InitCraftedItemObject(ref ItemObject itemObject, TextObject name, BasicCultureObject culture, ItemFlags itemProperties, float weight, float appearance, WeaponDesign craftedData, ItemTypeEnum itemType)`**（internal 静态）
  - 用途：由 `WeaponDesign` 填充一把锻造物品（网格、挂点、文化、标记、外观、`WeaponDesign`）。
  - 副作用：写入传入物品的多项字段并登记 `WeaponDesign`。
  - 调用时机：`<CraftedItem>` 反序列化时调用。

- **`AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)`**
  - 用途：确保存在 `WeaponComponent`，再把一个武器用法加入（可带修饰组）。
  - 副作用：可能创建 `WeaponComponent` 并追加武器用法。
  - 调用时机：程序化组装武器时调用。

### 静态查询工具

- **`GetItemFromWeaponKind(int weaponKind)`**（静态）
  - 用途：把 `weaponKind` 当作 `MBGUID` 子 id，经 `MBObjectManager.GetObject(new MBGUID((uint)weaponKind))` 取出对应物品；perk / 装备效果据此按武器 kind 取物品。
  - 副作用：无；`weaponKind < 0` 时返回 null。
  - 调用时机：装备 perk 效果解析武器时调用。

- **`GetAmmoTypeForItemType(ItemTypeEnum itemType)`**（静态）
  - 用途：返回某武器类型所需弹药类型（Bow→Arrows、Crossbow→Bolts、Sling→SlingStones、Pistol→Bullets、Thrown→Thrown，其余 Invalid）。
  - 副作用：无，纯映射。
  - 调用时机：装备/弹药逻辑判断该武器是否需要及需要何种弹药时调用。

- **`GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)`**（静态）
  - 用途：按抛射物类别返回对应托管参数（空气阻力常数）。
  - 副作用：无。
  - 调用时机：弹道计算时调用。

- **`GetWeaponWithUsageIndex(int usageIndex)`**
  - 用途：返回 `Weapons.ElementAt(usageIndex)`，即指定用法下标的武器数据。
  - 副作用：无。
  - 调用时机：按使用方式索引取武器数据时调用。

- **`GetHashCode()`**
  - 用途：返回 `(int)Id.SubId`，使物品可作为字典键。
  - 副作用：无。
  - 调用时机：物品作字典/集合键时调用。

## 示例

向某支队伍的物品清单追加补给（真实调用形态，见 `DisruptSupplyLinesConspiracyQuest` 等任务代码）：按 `StringId` 取出物品后直接交给名册累加数量：

```csharp
// 商队/任务队伍补给：按 StringId 取出物品并追加到 ItemRoster
_questCaravanMobileParty.ItemRoster.AddToCounts(
    MBObjectManager.Instance.GetObject<ItemObject>("grain"), 40);
_questCaravanMobileParty.ItemRoster.AddToCounts(
    MBObjectManager.Instance.GetObject<ItemObject>("butter"), 20);
```

遍历所有已锻造武器并按武器类型推断所需弹药（直接复用 `ItemObject` 源码中 `GetCraftedItemObjectFromHashedCode` 的枚举方式）：

```csharp
// 枚举全部已注册物品，筛选锻造武器并推断弹药类型
foreach (ItemObject crafted in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    if (!crafted.IsCraftedWeapon || crafted.WeaponComponent == null)
    {
        continue;
    }
    ItemObject.ItemTypeEnum ammo = ItemObject.GetAmmoTypeForItemType(crafted.ItemType);
    if (ammo != ItemObject.ItemTypeEnum.Invalid)
    {
        // 该锻造武器需要对应弹药（如弓 → 箭、弩 → 弩箭）
    }
}
```

## 参见

- ↑ 父级：[Core API 索引](../)
- ↔ 相关：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [ItemRoster](../../campaign/ItemRoster) · [TroopRoster](../../campaign/TroopRoster) · [Hero](../../campaign/Hero) · [MobileParty](../../campaign/MobileParty) · [Equipment](../../core-extra/Equipment) · [EquipmentElement](../../core-extra/EquipmentElement) · [ItemRosterElement](../../core-extra/ItemRosterElement) · [Crafting](../../core-extra/Crafting) · [WeaponDesign](../../core-extra/WeaponDesign) · [ItemCategory](../../core-extra/ItemCategory) · [ItemComponent](../../core-extra/ItemComponent) · [WeaponComponent](../../core-extra/WeaponComponent) · [ArmorComponent](../../core-extra/ArmorComponent) · [HorseComponent](../../core-extra/HorseComponent) · [ItemFlags](../../core-extra/ItemFlags) · [ItemModifier](../../core-extra/ItemModifier) · [ItemValueModel](../../core-extra/ItemValueModel)
