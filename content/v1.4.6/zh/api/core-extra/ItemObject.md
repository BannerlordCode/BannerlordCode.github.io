---
title: "ItemObject"
description: "物品定义对象：XML 加载的核心数据类，承载 mesh/数值/标志位，并把武器、马、护甲、旗帜、鞍具、食品等行为拆到 ItemComponent 派生类上。"
---
# ItemObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ItemObject : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/ItemObject.cs`

## 概述

1378 行、60 多个公开成员，是 mod 加自定义物品时的核心类型。它是 `sealed` 的，继承 [MBObjectBase](../../campaign-ext/MBObjectBase)，因此**是一个 `MBObjectManager` 可寻址的全局数据对象**——不是存档对象。物品通过 `StringId`（XML 里的 `id`）引用，存档里只存 id，读档时按 id 重新从 XML 加载。

设计上分三块：

1. **静态数据**（XML 直接填的 `private set` 属性）：`MultiMeshName` / `BodyName` / `SkeletonName` / `PrefabName` 等渲染资源名；`Value` / `Effectiveness` / `Weight` / `Difficulty` / `Appearance` 等数值；`ItemFlags` 位标志。
2. **组件**（`ItemComponent` 派生类）：`ItemComponent` 属性是一个可替换的策略对象，`WeaponComponent` / `HorseComponent` / `ArmorComponent` / `BannerComponent` / `SaddleComponent` / `TradeItemComponent` 各自覆盖 `as` 转型取出。**这是「一件物品同时有多个能力」的实现方式**——比如带 `WeaponComponent` + `ArmorComponent` 的复合物品。
3. **计算属性**（转发到 `Game.Current.BasicModels`）：`Tierf` / `Tier` / `IsTransferable` 都依赖 `ItemValueModel`，**`Game.Current` 为 null 时 NRE**。

## 心智模型

三种典型场景：

1. **按 StringId 取物品**。`MBObjectManager.Instance.GetObject<ItemObject>("heavy_bearded_axe")`。物品必须先被 `RegisterType<ItemObject>`（`Game.RegisterTypes` 里 id 4）并 `LoadXML("Items", ...)` 加载。
2. **造自定义物品（贸易品/程序化生成）**。`InitializeTradeGood(item, name, meshName, category, value, weight, itemType, isFood)` 是最直接的工厂——它内部 `Initialize()` → 填字段 → 装 `TradeItemComponent` → `AfterInitialized()` → 追加 `ItemFlags.Civilian`。`InitAsPlayerCraftedItem(ref item)` 只打一个「玩家锻造」标记。
3. **造合成武器**。走 [Crafting](../Crafting) 的 `GenerateItem` / `CreatePreCraftedWeaponOnDeserialize`，产出带 `WeaponDesign` 的 `ItemObject`。

**最坑的一条是「空物品的哈希会撞码」**。`public ItemObject()` 无参构造器存在，而 `GetHashCode()` 是 `return (int)base.Id.SubId;`——`Id` 是 `MBGUID` 结构体，未注册的物品它的值是 `default(MBGUID)`，`SubId`（`uint`）为 **0**。所以**任意多个 `new ItemObject()` 的 `GetHashCode()` 全部返回 0**。别拿未注册物品当 `Dictionary` / `HashSet` 的键。**只有 `InitializeTradeGood` 之类工厂走完之后物品才是可用的。**

第二条：**`Type` 是公开字段，`ItemType` 是它的属性包装**。`public ItemObject.ItemTypeEnum Type;` 可写；`public ItemObject.ItemTypeEnum ItemType { get; private set; }` 的 setter 内部就是 `this.Type = value`。两者指向同一份数据，改一个等于改另一个。这不是「字段是旧的」，是**同一件事的两种写法**。

第三条：**组件访问器返回 null 而不是抛异常**。`WeaponComponent` / `HorseComponent` / `ArmorComponent` / `BannerComponent` / `SaddleComponent` / `FoodComponent` 全是 `this.ItemComponent as XxxComponent`。**`ItemComponent` 本身是单槽的**——`AddWeapon` 会在为 null 时 `new WeaponComponent(this)` 覆盖，但如果你先 `InitializeTradeGood` 装上 `TradeItemComponent`，再调 `AddWeapon`，`ItemComponent` 就变成 `WeaponComponent`，**食品标记丢了**。一件物品只能有一个组件。

第四条：`GetWeaponWithUsageIndex(int)` 直接 `this.Weapons.ElementAt<WeaponComponentData>(usageIndex)`。`Weapons` 在 `WeaponComponent == null` 时返回 **null**（不是空列表），然后 `.ElementAt` 抛 `NullReferenceException`。

第五条：`GetCraftedItemObjectFromHashedCode` 遍历 `MBObjectManager.Instance.GetObjectTypeList<ItemObject>()` —— **O(n) 全表扫描**，别在循环里调。

常见误用：在 `OnSubModuleLoad` 里用 `Game.Current.BasicModels`（Game 还没建）；以为 `ItemObject` 会被存档（它不进存档，存档存的是 stringId 引用）；用 `InitializeTradeGood` 之后再 `AddWeapon`（丢组件）。

## 关键成员

### 组件访问（`as` 转型，无组件时返回 null）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ItemComponent` | `public ItemComponent ItemComponent { get; private set; }` | **单槽组件**。`private set`，外部只能通过 `InitializeTradeGood`（装 `TradeItemComponent`）或 `AddWeapon`（装 `WeaponComponent`）间接设置。所有 `XxxComponent` 属性都是它的 `as` 转型。 |
| `WeaponComponent` | `public WeaponComponent WeaponComponent { get; }` | `ItemComponent as WeaponComponent`。**没有武器组件时返回 null。** |
| `HasWeaponComponent` | `public bool HasWeaponComponent { get; }` | `WeaponComponent != null`。**用这个先判再用。** |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }` | 转发 `WeaponComponent.PrimaryWeapon`，而后者是 `_weaponList[0]` 硬索引。**`WeaponComponent` 为 null 时返回 null；组件存在但列表为空时抛。** |
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }` | 转发 `WeaponComponent.Weapons`。**`WeaponComponent` 为 null 时返回 null（不是空列表）。** |
| `HorseComponent` / `HasHorseComponent` | `public HorseComponent HorseComponent { get; }` / `HasHorseComponent` | 马匹相关。`IsMountable` 与 `IsAnimal` 都基于它。 |
| `ArmorComponent` / `HasArmorComponent` | `public ArmorComponent ArmorComponent { get; }` / `HasArmorComponent` | 护甲相关。`UsingFacegenScaling` 会在 `Type == HeadArmor` 时读 `ArmorComponent.MeshesMask` —— **非头盔物品上这个属性不访问它，判空由 `Type` 短路保护。** |
| `BannerComponent` / `HasBannerComponent` | `public BannerComponent BannerComponent { get; }` / `HasBannerComponent` | 旗帜相关。 |
| `SaddleComponent` / `HasSaddleComponent` | `public SaddleComponent SaddleComponent { get; }` / `HasSaddleComponent` | 鞍具相关。 |
| `FoodComponent` / `HasFoodComponent` | `public TradeItemComponent FoodComponent { get; }` / `HasFoodComponent` | 食品相关。注意返回的是 `TradeItemComponent`（贸易品组件）而非独立的 Food 组件。 |
| `AddWeapon` | `public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)` | `WeaponComponent` 为 null 时 `new WeaponComponent(this)` 赋给 `ItemComponent`，然后转发。**会覆盖已有的非武器组件**（单槽限制）。 |

### 静态 XML 数据（`private set`）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MultiMeshName` | `public string MultiMeshName { get; private set; }` | 主 mesh 名。武器/护甲/商品都用它。 |
| `HolsterMeshName` / `HolsterWithWeaponMeshName` | `public string HolsterMeshName { get; private set; }` 等 | 挂在腰/背上的 mesh（带武器 / 不带武器两版）。 |
| `ItemHolsters` | `public string[] ItemHolsters { get; private set; }` | 槽位到 body 的映射数组。**`MaxHolsterSlotCount = 4` 是槽位数上限。** |
| `HolsterPositionShift` | `public Vec3 HolsterPositionShift { get; private set; }` | 佩戴位置的偏移。 |
| `HasLowerHolsterPriority` | `public bool HasLowerHolsterPriority { get; private set; }` | 抢夺/丢弃时的优先级标记。 |
| `FlyingMeshName` | `public string FlyingMeshName { get; private set; }` | 投掷/飞行时的 mesh。 |
| `BodyName` / `HolsterBodyName` / `CollisionBodyName` | `public string BodyName { get; private set; }` 等 | 体型 mesh 名、佩戴用体型、碰撞体名。 |
| `SkeletonName` | `public string SkeletonName { get; private set; }` | 骨骼名。 |
| `StaticAnimationName` | `public string StaticAnimationName { get; private set; }` | 静态动画名。 |
| `RecalculateBody` | `public bool RecalculateBody { get; private set; }` | 合成武器用：标记需要按部件重算体型。 |
| `PrefabName` | `public string PrefabName { get; private set; }` | 模块 prefab 名（引用的物品才用）。 |
| `ArmBandMeshName` | `public string ArmBandMeshName { get; private set; }` | 臂章 mesh。 |
| `LodAtlasIndex` | `public int LodAtlasIndex { get; private set; }` | LOD 图集索引。 |
| `Name` | `public TextObject Name { get; private set; }` | 本地化名称。**判空用 `TextObject.IsNullOrEmpty`。** |
| `ItemCategory` | `public ItemCategory ItemCategory { get; private set; }` | 分类。未填时 `DetermineItemCategoryForItem()` 会向 `BasicModels.ItemCategorySelector` 询问。 |
| `Value` / `Effectiveness` / `Weight` / `Difficulty` / `Appearance` | `public int Value { get; private set; }` 等 | 基础数值。`Value` 也有 `internal DetermineValue()` 走 `ItemValueModel` 重算。`DefaultAppearanceValue = 0.5f` 是外观默认值常量。 |
| `ScaleFactor` | `public float ScaleFactor { get; private set; }` | 模型缩放。 |
| `Culture` | `public BasicCultureObject Culture { get; private set; }` | 文化，影响属性与词缀。 |
| `ItemFlags` | `public ItemFlags ItemFlags { get; private set; }` | 位标志集合。`SetItemFlagsForCosmetics(ItemFlags)` 公开可改。 |
| `IsUsingTableau` | `public bool IsUsingTableau { get; private set; }` | 是否用 tableau 渲染。 |
| `IsFood` / `IsUniqueItem` | `public bool IsFood { get; private set; }` / `public bool IsUniqueItem { get; private set; }` | 独立字段的类别标记（`private set`）。**与位标志派生的 `IsCivilian` / `IsStealthItem` 是两套机制**——那两个读 `ItemFlags`，这两个是独立 bool。 |
| `MultiplayerItem` / `NotMerchandise` / `IsCraftedByPlayer` | `public bool MultiplayerItem { get; private set; }` 等 | 联机可用、不进商品列表、玩家锻造标记。 |
| `Type` | `public ItemObject.ItemTypeEnum Type;` | **公开可写字段**，物品大类（`ItemTypeEnum`）。`ItemType` 属性是它的只读包装。 |
| `WeaponDesign` | `public WeaponDesign WeaponDesign { get; private set; }` | 合成武器的设计数据。`IsCraftedWeapon` 就是 `!= null`。 |
| `Type` 相关 | `public ItemObject.ItemTypeEnum ItemType { get; private set; }` | 属性包装，setter 内部 `this.Type = value`。**改它等于改 `Type` 字段。** |

### 位标志派生的计算属性

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsUsingTeamColor` | `public bool IsUsingTeamColor { get; }` | `ItemFlags.HasAnyFlag(ItemFlags.UseTeamColor)`。 |
| `DoesNotHideChest` | `public bool DoesNotHideChest { get; }` | `ItemFlags.DoesNotHideChest`。**`GetUnderwearType` 靠它区分女性内衣。** |
| `IsCivilian` | `public bool IsCivilian { get; }` | `ItemFlags.Civilian`。`InitializeTradeGood` 末尾会 `ItemFlags |= ItemFlags.Civilian`。 |
| `IsStealthItem` | `public bool IsStealthItem { get; }` | `ItemFlags.Stealth`。 |
| `UsingFacegenScaling` | `public bool UsingFacegenScaling { get; }` | `Type == HeadArmor && ArmorComponent.MeshesMask.HasAnyFlag(SkinMask.HeadVisible)`。**靠 `Type` 短路，非头盔不访问 `ArmorComponent`。** |
| `IsMountable` | `public bool IsMountable { get; }` | `HasHorseComponent && HorseComponent.IsRideable`。 |
| `IsAnimal` | `public bool IsAnimal { get; }` | `HasHorseComponent && !HorseComponent.IsRideable`。**与 `IsMountable` 互补。** |
| `IsTradeGood` | `public bool IsTradeGood { get; }` | `ItemType == ItemTypeEnum.Goods`。 |
| `IsBannerItem` | `public bool IsBannerItem { get; }` | `ItemType == ItemTypeEnum.Banner`。 |
| `IsCraftedWeapon` | `public bool IsCraftedWeapon { get; }` | `WeaponDesign != null`。 |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` | 有 `PrimaryWeapon` 时取 `PrimaryWeapon.RelevantSkill`；否则马匹物品返回 `DefaultSkills.Riding`；**其它情况返回 null。** |

### 计算属性（依赖 `Game.Current.BasicModels`）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsTransferable` | `public bool IsTransferable { get; }` | `Game.Current.BasicModels.ItemValueModel.GetIsTransferable(this)`。**`Game.Current` 或 `ItemValueModel` 为 null 时 NRE。** |
| `Tierf` | `public float Tierf { get; }` | `TierfOverride >= 1f` 时返回 `TierfOverride - 1f`；否则 `Game.Current.BasicModels.ItemValueModel.CalculateTier(this)`。`TierfOverride` 是 private。 |
| `Tier` | `public ItemObject.ItemTiers Tier { get; }` | `ItemComponent == null` → `Tier1`；否则 `(ItemTiers)(MBMath.ClampInt(MathF.Round(this.Tierf), 0, 6) - 1)`。 |

### 构造与工厂

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public ItemObject()` | **空物品**。不设 StringId，`Id` 非法，`GetHashCode()` 可能与其它未注册实例相同。仅在 `InitializeTradeGood` / `GenerateItem` 内部被用来当容器。 |
| `.ctor` | `public ItemObject(string stringId)` | 只设 StringId。**没有直接可用的公开构造路径**——正式物品由 `MBObjectManager` 从 XML 加载。 |
| `.ctor` | `public ItemObject(ItemObject itemToCopy)` | 拷贝构造，调用 `base(itemToCopy)`。**逐个字段复制但 `IsUniqueItem` 被强制置 `false`**，且没复制 `Effectiveness` / `Appearance` / `TierfOverride` / `WeaponDesign` / `Culture` 等字段。**不是完整克隆。** |
| `InitializeTradeGood` | `public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemObject.ItemTypeEnum itemType, bool isFood = false)` | 贸易品工厂。内部顺序固定：`Initialize()` → 填 `Name` / `MultiMeshName` / `ItemCategory` / `Value` / `Weight` / `ItemType` / `IsFood` → `ItemComponent = new TradeItemComponent()` → `AfterInitialized()` → `ItemFlags |= ItemFlags.Civilian`。**返回传入的 `item` 本身。** |
| `InitAsPlayerCraftedItem` | `public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)` | 只设 `IsCraftedByPlayer = true`。**参数是 `ref` 但方法体不解引用也不赋值**。 |
| `GetCraftedItemObjectFromHashedCode` | `public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)` | 遍历 `MBObjectManager.Instance.GetObjectTypeList<ItemObject>()` 找 `IsCraftedWeapon && WeaponDesign.HashedCode == hashedCode` 的那个。**O(n) 全表扫描，没找到返回 null。** |

### 反序列化与查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 处理 `<Item>` 定义。遇到 `<CraftedItem>` 节点转 [Crafting](../Crafting) 的合成武器路径。**结尾调 `Game.Current.ItemObjectDeserialized(this)` 触发 `OnItemDeserializedEvent`。** |
| `SetItemFlagsForCosmetics` | `public void SetItemFlagsForCosmetics(ItemFlags newFlags)` | 公开可写 `ItemFlags`。给外观物品（胡子、脸）换标志位。 |
| `DetermineItemCategoryForItem` | `public void DetermineItemCategoryForItem()` | `ItemCategory == null` 时向 `Game.Current.BasicModels.ItemCategorySelector` 查询并写入。**依赖 `Game.Current`。** |
| `DetermineValue` | `internal void DetermineValue()` | 用 `ItemValueModel.CalculateValue(this)` 重算 `Value`，模型为 null 时置 1。**internal，外部程序集调不到。** |
| `GetWeaponWithUsageIndex` | `public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)` | `this.Weapons.ElementAt<WeaponComponentData>(usageIndex)`。**`Weapons` 为 null（无武器组件）时 NRE；索引越界抛 `ArgumentOutOfRangeException`。** |
| `GetItemFromWeaponKind` | `public static ItemObject GetItemFromWeaponKind(int weaponKind)` | 按武器类型索引反查物品。找不到返回 null。 |
| `GetAmmoTypeForItemType` | `public static ItemObject.ItemTypeEnum GetAmmoTypeForItemType(ItemObject.ItemTypeEnum itemType)` | 弹药物品类型映射。`Bow → Arrows`、`Crossbow → Bolts`、`Sling → SlingStones`、`Thrown → Thrown`、`Pistol → Bullets`，**其余一律 `Invalid`**。 |
| `GetAirFrictionConstant` | `public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)` | 从 `ManagedParameters.Instance.GetManagedParameter(ManagedParametersEnum.AirFriction*)` 读空气阻力系数。**`Arrow` 会按 `WeaponFlags.MultiplePenetration` 分成 BallistaBolt 与 Arrow 两个参数。** |
| `ToString` | `public override string ToString()` | **返回 `base.StringId`，不是 `Name`。** |
| `GetHashCode` | `public override int GetHashCode()` | `(int)base.Id.SubId`。**空物品（`Id` 非法）时可能与其它空物品撞码。** |

### 常量与嵌套枚举

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `DefaultAppearanceValue` | `public const float DefaultAppearanceValue = 0.5f` | 外观默认值。 |
| `MaxHolsterSlotCount` | `public const int MaxHolsterSlotCount = 4` | 佩戴槽位数量上限。 |
| `ItemUsageSetFlags` | `public enum ItemUsageSetFlags` | 装备位组标志。 |
| `ItemTypeEnum` | `public enum ItemTypeEnum` | 物品大类（`OneHandedWeapon` / `Polearm` / `Horse` / `Cape` / `Goods` / `Banner` / `Arrows` / `Bolts` / `Bullets` / `SlingStones` / `Thrown` / `HorseHarness` / `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` …）。`IsItemFitsToSlot` 与 `GetAmmoTypeForItemType` 都按它 switch。 |
| `ItemTiers` | `public enum ItemTiers` | 物品品阶（Tier1 … Tier6）。`Tier` 属性的 `ClampInt(..., 0, 6) - 1` 与它对应。 |

## 真实示例

按 StringId 取物品并安全访问组件：

```csharp
ItemObject axe = MBObjectManager.Instance.GetObject<ItemObject>("heavy_bearded_axe");

if (axe == null)
{
    Debug.Print("item not loaded", 0);
    return;
}

string label = TextObject.IsNullOrEmpty(axe.Name) ? axe.StringId : axe.Name.ToString();
Debug.Print(label + " value=" + axe.Value + " weight=" + axe.Weight, 0);

if (axe.HasWeaponComponent)
{
    WeaponComponentData primary = axe.PrimaryWeapon;
    Debug.Print("class=" + primary.WeaponClass + " swing=" + primary.SwingDamage, 0);
}
```

程序化生成一件贸易品（最完整的自定义物品路径）：

```csharp
ItemObject tradeItem = new ItemObject();
ItemObject.InitializeTradeGood(
    tradeItem,
    new TextObject("{=my_custom_good}Custom Good"),
    "custom_good_mesh",
    myCategory,
    value: 250,
    weight: 1.5f,
    itemType: ItemObject.ItemTypeEnum.Goods,
    isFood: false);

Debug.Print("created: " + tradeItem.StringId + " isTradeGood=" + tradeItem.IsTradeGood, 0);
```

给物品追加武器形态（注意单槽限制，会覆盖已有组件）：

```csharp
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("custom_sword");
WeaponComponentData data = new WeaponComponentData(item, WeaponClass.OneHanded, WeaponFlags.None);
item.AddWeapon(data, item.ItemModifierGroup);

if (item.HasWeaponComponent)
{
    Debug.Print("item type: " + item.ItemType, 0);
    Debug.Print("inferred: " + item.WeaponComponent.GetItemType(), 0);
}
```

品阶与数值（依赖 `Game.Current.BasicModels`，早期访问会 NRE）：

```csharp
Game game = Game.Current;
if (game != null && game.BasicModels != null && game.BasicModels.ItemValueModel != null)
{
    float tierf = item.Tierf;
    ItemObject.ItemTiers tier = item.Tier;
    bool transferable = item.IsTransferable;
    Debug.Print("tierf=" + tierf + " tier=" + tier + " transferable=" + transferable, 0);
}
```

弹药物品类型映射（静态、无副作用）：

```csharp
ItemObject.ItemTypeEnum ammo = ItemObject.GetAmmoTypeForItemType(ItemObject.ItemTypeEnum.Crossbow);
Debug.Print("crossbow ammo = " + ammo, 0);

float friction = ItemObject.GetAirFrictionConstant(WeaponClass.Arrow, WeaponFlags.None);
Debug.Print("arrow air friction = " + friction, 0);
```

## 风险与边界

- **`sealed`，不能继承。** 扩展只能靠 [ItemComponent](../ItemComponent) 派生类。
- **不是存档对象。** 存档里存的是 StringId 引用，读档时按 id 重新加载 XML。**改 XML 不会改变已有存档里的物品表现**（物品定义变了，存档引用同一个 id 拿到的是新定义）。
- **组件单槽。** `ItemComponent` 只有一个。`AddWeapon` 会覆盖 `InitializeTradeGood` 装上的 `TradeItemComponent`，食品标记丢失。
- **组件访问器返回 null 不抛。** `WeaponComponent` / `HorseComponent` / `ArmorComponent` / `BannerComponent` / `SaddleComponent` / `FoodComponent` 全是 `as` 转型。**必须先用对应的 `HasXxxComponent` 判。**
- **`Weapons` 在无武器组件时返回 null。** `GetWeaponWithUsageIndex` 直接 `.ElementAt`，先 NRE 后越界。
- **`Game.Current` 依赖。** `IsTransferable` / `Tierf` / `Tier` / `DetermineItemCategoryForItem` / `Deserialize` 尾部都摸 `Game.Current`。**`OnSubModuleLoad` 阶段全都会 NRE。**
- **空物品的 `GetHashCode` 恒为 0。** `Id` 是 `MBGUID`（含 `uint InternalValue` 与 `uint SubId`），未注册时是 `default(MBGUID)`，`SubId` 为 0。多个未注册物品当字典键会互相覆盖。**源码里不存在 `InvalidId` 常量，别找。**
- **`GetCraftedItemObjectFromHashedCode` 是 O(n) 全表扫描。** 只在冷路径用。
- **拷贝构造不完整。** `ItemObject(ItemObject)` 强制 `IsUniqueItem = false`，且不复制 `Effectiveness` / `Appearance` / `Culture` / `WeaponDesign` / `TierfOverride`。当克隆用会丢数据。
- **`Type` 与 `ItemType` 是同一份数据。** 一个是公开字段、一个是属性包装。外部能通过 `Type` 绕过属性的意图。
- **`ToString()` 返回 StringId 不是 Name。** 日志里看到的是 id 不是显示名。
- **`SetItemFlagsForCosmetics` 直接改标志位。** 没有校验，误用会让普通物品被当成外观品。
- **数值属性全是 `private set`。** 运行时改不了——要改得走 [Crafting](../Crafting) 的重建流程或 `internal DetermineValue()`。
- **`Deserialize` 触发全局事件。** 结尾 `Game.Current.ItemObjectDeserialized(this)` 会广播 `OnItemDeserializedEvent`，mod 在那里做批量处理要考虑加载期性能。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/ItemObject.cs` 逐行比对，**public 表面完全一致**：60 余个成员（组件访问器、XML 数据属性、位标志计算属性、3 个构造器、`InitializeTradeGood` / `InitAsPlayerCraftedItem` / `GetCraftedItemObjectFromHashedCode` / `GetItemFromWeaponKind` / `GetAmmoTypeForItemType` / `GetAirFrictionConstant`、`Deserialize` / `SetItemFlagsForCosmetics` / `DetermineItemCategoryForItem` / `GetWeaponWithUsageIndex`、`ToString` / `GetHashCode`）、`DefaultAppearanceValue` / `MaxHolsterSlotCount` 两个常量、`Type` 公开字段与 `ItemUsageSetFlags` / `ItemTypeEnum` / `ItemTiers` 三个嵌套枚举全都没变；`Game.RegisterTypes` 里 `ItemObject` 的 typeId 仍是 4。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs`（960 行）与 `bannerlord-1.4.6/TaleWorlds.Core/ItemObject.cs`（1379 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 84 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 960 行、1.4.6 是 1379 行，**约 420 行的差全部是反编译注释与 namespace 换行**，不是成员增减。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 基类：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `Id` / `StringId` / `IsReady` / `IsInitialized` 与 `MBObjectManager` 寻址
- 注册与查找：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `RegisterType<ItemObject>` 与 `GetObject<ItemObject>(stringId)`；注册由 [Game](../Game) 的 `RegisterTypes` 完成（typeId 4）
- 组件体系：[ItemComponent](../ItemComponent) 抽象基类，派生实现 [WeaponComponent](../WeaponComponent) / [ArmorComponent](../ArmorComponent) / [HorseComponent](../HorseComponent) / [BannerComponent](../BannerComponent) / [SaddleComponent](../SaddleComponent) / [TradeItemComponent](../TradeItemComponent)
- 装备落位：[Equipment](../Equipment) 的 `IsItemFitsToSlot` 按 `ItemType` 判定槽位合法性
- 锻造：[Crafting](../Crafting) 的 `GenerateItem` / `CreatePreCraftedWeaponOnDeserialize` 产出带 `WeaponDesign` 的物品
- 数值模型：`BasicModels.ItemValueModel` / `ItemCategorySelector` 决定 `Value` / `Tier` / `ItemCategory`
- 品质：[ItemModifierGroup](../ItemModifierGroup) 经武器形态挂到物品上
- 技能：[SkillObject](../SkillObject) 出现在 `RelevantSkill` 的返回值里（武器走 `PrimaryWeapon.RelevantSkill`，马匹走 `DefaultSkills.Riding`）
- 桶首页：[core-extra API 分区](../)
