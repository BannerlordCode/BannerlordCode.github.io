---
title: "ItemObject"
description: "游戏里一切物品的基对象：sealed + MBObjectBase，四十几个 XML 填的字段加上按需挂载的 ItemComponent 子类；六个 HasXxxComponent 属性先问组件存在再问能力。"
---

# ItemObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ItemObject : MBObjectBase`
**Base:** `MBObjectBase`（`TaleWorlds.ObjectSystem` 命名空间）
**File:** `TaleWorlds.Core/ItemObject.cs`（全文 1369 行，48812 字节）

## 概述

`ItemObject` 是引擎里**一切物品的统一表示**——武器、护甲、马匹、食物、书籍、弹药，一个都不例外。它是 `sealed` 的，继承 `MBObjectBase`，所以有 `StringId`、能被对象管理器按 id 查到、能被存档。

全文 1369 行里有一半是 `Deserialize`（从 XML 读几十个字段）。但真正需要理解的是**它的两段式结构**：

**第一段是它自己的字段。** 网格名（`MultiMeshName` / `HolsterMeshName` / `FlyingMeshName` / `BodyName` / `SkeletonName` …）、数值（`Value` / `Weight` / `Difficulty` / `ScaleFactor` / `Appearance`）、分类（`ItemType` / `ItemCategory` / `ItemFlags` / `Culture`）、以及二十多个 `{ get; private set; }` 属性。**这些全部由 `Deserialize` 从 XML 填，外部代码改不动。**

**第二段是按需挂载的 `ItemComponent` 子类。** 字段 `public ItemComponent ItemComponent { get; private set; }` 指向一个可能为 `null` 的组件，六个组件各自代表一类能力：

```
WeaponComponent   → 武器用法数据       ArmorComponent  → 护甲槽位
HorseComponent    → 马匹 / 可骑乘     SaddleComponent → 马鞍
BannerComponent   → 旗标              TradeItemComponent → 贸易品 / 食物
```

**每个组件都配一个 `HasXxxComponent` 布尔属性**，而每个能力判定属性都是「先问组件在不在，再问组件行不行」：

```csharp
public bool IsMountable { get { return this.HasHorseComponent && this.HorseComponent.IsRideable; } }
public bool IsAnimal    { get { return this.HasHorseComponent && !this.HorseComponent.IsRideable; } }
public WeaponComponent WeaponComponent { get { return this.ItemComponent as WeaponComponent; } }
public bool HasWeaponComponent { get { return this.WeaponComponent != null; } }
```

**这是本类最重要的使用约定：`ItemComponent` 是单槽位的，一个物品最多挂一个组件。** 一把同时是武器又是护甲的物品在这套结构里做不到——得靠 `ItemFlags` 而不是组件。

## 心智模型

**把它想成「物品的公共数据表 + 一个可空的类型标签」，而不是「各种物品的共同父类」。** 它**没有**继承树——`sealed`，没有子类。武器不是 `ItemObject` 的子类，武器是「一个 `ItemObject` 恰好挂了 `WeaponComponent`」。

**第一步，理解 `HasXxxComponent` 与 `XxxComponent` 是一对。** 六个组件各一对，共十二个属性，全部是零成本的计算属性。它们存在的唯一理由是：**`ItemComponent` 只有一个槽位，`as` 转型可能失败。** 直接写 `item.ItemComponent as WeaponComponent` 每次都要转型，而 `item.WeaponComponent` 封装了这件事；`item.HasWeaponComponent` 封装了判空。

**判断物品能力时永远走 `HasXxxComponent` + `XxxComponent` 两步，不要直接摸 `ItemComponent`。**

**第二步，理解 `IsMountable` 与 `IsAnimal` 互为补集。** 两者都用 `HasHorseComponent` 开头，一个查 `IsRideable`、一个查 `!IsRideable`。所以**一件带 `HorseComponent` 的物品必然是「可骑乘」或「是动物」二者之一**，没有第三种状态。

**第三步，理解 `Tierf` 与 `Tier` 的换算关系。** `Tierf` 是浮点档位，优先用私有的 `TierfOverride`：

```csharp
public float Tierf
{
    get
    {
        if (this.TierfOverride >= 1f) { return this.TierfOverride - 1f; }
        return Game.Current.BasicModels.ItemValueModel.CalculateTier(this);
    }
}
```

`TierfOverride` 是 `[SaveableField]` 支撑的私有属性，存档里存的是 `TierfOverride`，所以读档后 `Tierf` 直接命中 `>= 1f` 分支返回 `Override - 1f`——**那个 `- 1f` 是存档编码的偏移**，不是算法。`Tier` 枚举则由 `Tierf` 四舍五入并钳到 `[0, 6]` 再减 1：

```csharp
public ItemTiers Tier
{
    get
    {
        if (this.ItemComponent == null) { return ItemObject.ItemTiers.Tier1; }
        return (ItemObject.ItemTiers)(MBMath.ClampInt(MathF.Round(this.Tierf), 0, 6) - 1);
    }
}
```

注意 `Tier` 在 `ItemComponent == null` 时**短路返回 Tier1**，不走 `Tierf`。而 `Tierf` 本身会访问 `Game.Current.BasicModels` —— **所以游戏没启动时读 `Tierf` 会 NRE，但读 `Tier`（无组件时）不会**。

**第四步，理解 `GetHashCode` 是按 `Id.SubId` 算的。**

```csharp
public override int GetHashCode() { return (int)base.Id.SubId; }
```

这不是字符串哈希，而是对象池里的**子索引**。这意味着**两个 `StringId` 相同的 `ItemObject` 如果来自不同注册批次，引用可能不同而 `SubId` 不同**。反过来说，`GetHashCode` 依赖对象在管理器里的位置，不是内容。

**第五步，理解 `Deserialize` 才是本类的主戏。** 1369 行里有 340 行是 `Deserialize`，逐个 `XmlHelper.ReadString` / `ReadInt` / `ReadFloat`，末尾按类型挂组件。所以本类**实际上是不可手工构造完整数据的**——三个构造器（`()`、`(string stringId)`、`(ItemObject itemToCopy)`）都不填业务字段。

**唯一能手工造出可用物品的入口是 `InitializeTradeGood`**，它示范了正确的顺序：

```csharp
item.Initialize();
item.Name = name;
item.MultiMeshName = meshName;
item.ItemCategory = category;
item.Value = value;
item.Weight = weight;
item.ItemType = itemType;
item.IsFood = isFood;
item.ItemComponent = new TradeItemComponent();
item.AfterInitialized();
item.ItemFlags |= ItemFlags.Civilian;
```

**先 `Initialize()` 再填字段，最后 `AfterInitialized()`。** 忘了后一步，物品不会进入可用状态。`item.ItemFlags |= ItemFlags.Civilian` 用的是按位或追加，不是覆盖。

**第六步，理解 `ToString()` 只返回 `StringId`。** 一行：`return base.StringId;`。调试时打印物品拿到的是 id 字符串，不是名字。要看名字得读 `Name`（`TextObject`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ItemComponent` | `public ItemComponent ItemComponent { get; private set; }` | **单槽位**组件挂载点。可能为 `null`。所有 `XxxComponent` / `HasXxxComponent` 属性都从它派生。 |
| `Name` | `public TextObject Name { get; private set; }` | 显示名。`{ get; private set; }`——**外部改不了**，只有 `internal void SetName(TextObject)` 能改。 |
| `ItemType` | `public ItemObject.ItemTypeEnum ItemType { get; private set; }` | 26 值枚举（`Invalid` / `Horse` / `OneHandedWeapon` / … / `Banner`）。`IsTradeGood` / `IsBannerItem` 都由它判断。 |
| `Type` | `public ItemObject.ItemTypeEnum Type;` | **public 可写字段**，与 `ItemType` 属性是同一份数据的两种入口。`ItemType` 的 setter 只是转写它。 |
| `Value` | `public int Value { get; private set; }` | 基础价值。实际成交价还要过 [ItemValueModel](../ItemValueModel)。 |
| `Weight` / `Difficulty` / `ScaleFactor` / `Appearance` | `public float ... { get; private set; }` | 重量 / 难度 / 缩放 / 外观分。`DefaultAppearanceValue = 0.5f`。 |
| `ItemCategory` | `public ItemCategory ItemCategory { get; private set; }` | 分类。由 `DetermineItemCategoryForItem()` 经 `ItemCategorySelector` 模型填。 |
| `ItemFlags` | `public ItemFlags ItemFlags { get; private set; }` | 位标志（`Civilian` / …）。可用 `SetItemFlagsForCosmetics(ItemFlags)` 整体替换。 |
| `Culture` | `public BasicCultureObject Culture { get; private set; }` | 文化归属。 |
| `WeaponDesign` | `public WeaponDesign WeaponDesign { get; private set; }` | 玩家自制武器的设计。**`IsCraftedWeapon` 就是 `!= null`**。 |
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }` | **无组件时返回 `null`，不是空列表。** 转发出 [WeaponComponent](../WeaponComponent)。 |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }` | 无组件时返回 `null`。是列表的索引 0。 |
| `AddWeapon` | `public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)` | 组件缺失时**先 `new WeaponComponent(this)` 建壳**再转发。 |
| `GetWeaponWithUsageIndex` | `public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)` | `this.Weapons.ElementAt(usageIndex)`。**`Weapons` 为 null 时 NRE**。 |
| `WeaponComponent` / `HasWeaponComponent` | `public WeaponComponent WeaponComponent { get; }` / `public bool HasWeaponComponent { get; }` | `ItemComponent as WeaponComponent` 及其判空。 |
| `HorseComponent` / `HasHorseComponent` / `ArmorComponent` / `HasArmorComponent` / `BannerComponent` / `HasBannerComponent` / `SaddleComponent` / `HasSaddleComponent` / `TradeItemComponent` / `HasFoodComponent` | 同构的 `XxxComponent` + `HasXxxComponent` | 六个组件各一对。注意食品组件的属性名是 **`FoodComponent`**，不是 `TradeItemComponent`。 |
| `IsMountable` | `public bool IsMountable { get; }` | `HasHorseComponent && HorseComponent.IsRideable`。 |
| `IsAnimal` | `public bool IsAnimal { get; }` | `HasHorseComponent && !HorseComponent.IsRideable`。**与 `IsMountable` 互为补集。** |
| `IsTradeGood` | `public bool IsTradeGood { get; }` | `ItemType == ItemTypeEnum.Goods`。 |
| `IsBannerItem` | `public bool IsBannerItem { get; }` | `ItemType == ItemTypeEnum.Banner`。 |
| `IsCraftedWeapon` | `public bool IsCraftedWeapon { get; }` | `WeaponDesign != null`。 |
| `IsFood` / `MultiplayerItem` / `NotMerchandise` / `IsCraftedByPlayer` / `HasLowerHolsterPriority` / `RecalculateBody` / `IsUsingTableau` | `public bool ... { get; private set; }` | 布尔开关。`IsUsingTeamColor` / `DoesNotHideChest` / `IsCivilian` / `IsStealthItem` / `UsingFacegenScaling` **无 setter**。 |
| `Tierf` | `public float Tierf { get; }` | 浮点档位。优先 `TierfOverride - 1f`，否则走 `Game.Current.BasicModels.ItemValueModel.CalculateTier(this)`。**依赖 `Game.Current`。** |
| `Tier` | `public ItemObject.ItemTiers Tier { get; }` | 枚举档位。**`ItemComponent == null` 时短路返回 `Tier1`**，不碰 `Tierf`。 |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` | 有 `PrimaryWeapon` 就取它的 `RelevantSkill`；否则有 `HorseComponent` 就返回 `DefaultSkills.Riding`；否则 `null`。 |
| `ToString` | `public override string ToString()` | **只返回 `base.StringId`**，不是名字。 |
| `GetHashCode` | `public override int GetHashCode()` | `(int)base.Id.SubId` —— **按对象池位置，不是按内容**。 |
| `InitializeTradeGood` | `public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemTypeEnum itemType, bool isFood = false)` | 手工造物品的正规入口。`Initialize()` → 填字段 → 挂 `TradeItemComponent` → `AfterInitialized()` → `ItemFlags \|= Civilian`。 |
| `InitAsPlayerCraftedItem` | `public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)` | 只置 `IsCraftedByPlayer = true`。`ref` 参数。 |
| `GetCraftedItemObjectFromHashedCode` | `public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)` | 遍历 `MBObjectManager.Instance.GetObjectTypeList<ItemObject>()` 筛 `IsCraftedWeapon && WeaponDesign.HashedCode == hashedCode`。**依赖 `MBObjectManager.Instance` 静态单例。** |
| `SetItemFlagsForCosmetics` | `public void SetItemFlagsForCosmetics(ItemFlags newFlags)` | **整体替换** `ItemFlags`（不是按位或）。装饰品逻辑专用。 |
| `DetermineItemCategoryForItem` | `public void DetermineItemCategoryForItem()` | 仅当 `ItemCategory == null` 且 `Game.Current.BasicModels.ItemCategorySelector != null` 时填分类。**依赖 `Game.Current`。** |
| `GetItemFromWeaponKind` | `public static ItemObject GetItemFromWeaponKind(int weaponKind)` | 按武器种类整数查物品。负数返回 `null`。 |
| `GetAmmoTypeForItemType` | `public static ItemObject.ItemTypeEnum GetAmmoTypeForItemType(ItemTypeEnum itemType)` | 武器类型 → 对应弹药类型。 |
| `GetAirFrictionConstant` | `public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)` | 按武器类别与标志返回空气阻力常数。 |
| `MaxHolsterSlotCount` | `public const int MaxHolsterSlotCount = 4` | 佩挂槽位上限 4。 |
| `DefaultAppearanceValue` | `public const float DefaultAppearanceValue = 0.5f` | 外观分默认值 0.5。 |
| `ItemTypeEnum` | `public enum ItemTypeEnum { Invalid, Horse, OneHandedWeapon, ..., Banner }` | **26 个值**，`WeaponComponent.GetItemType()` 与 `GetItemTypeFromWeaponClass` 都返回它。 |
| `ItemTiers` | `public enum ItemTiers { Tier1, ... }` | 由 `Tier` 属性返回。 |
| `ItemUsageSetFlags` | `public enum ItemUsageSetFlags { RequiresMount = 1, ... }` | 使用场景位标志。 |

## 真实示例

判能力的安全写法——**先问组件存在，再问组件行为**：

```csharp
using TaleWorlds.Core;

public static string Describe(ItemObject item)
{
    string result = item.StringId;

    // 永远两步走：HasXxxComponent 判存在，XxxComponent 取数据。
    if (item.HasWeaponComponent)
    {
        WeaponComponent weapon = item.WeaponComponent;
        result += " weapons=" + weapon.Weapons.Count
            + " primaryClass=" + weapon.PrimaryWeapon.WeaponClass
            + " type=" + weapon.GetItemType();
    }

    if (item.HasHorseComponent)
    {
        // IsMountable 与 IsAnimal 互为补集，合起来覆盖全部带马组件的物品。
        result += " rideable=" + item.IsMountable + " animal=" + item.IsAnimal;
    }

    if (item.IsTradeGood)
    {
        // 贸易品上挂着 TradeItemComponent。
        result += " trade good, category=" + item.ItemCategory;
    }

    // RelevantSkill 自己处理了三种情况：武器技能 / 骑术 / null。
    result += " skill=" + (item.RelevantSkill != null ? item.RelevantSkill.StringId : "none");
    return result;
}
```

注意 `weapon.PrimaryWeapon` 在这里安全，是因为 `HasWeaponComponent` 为真已经保证 `_weaponList` 至少有一条——**但这个保证来自「物品是从 XML 正常加载的」这个前提，不是类型系统的保证**。

手工造一件贸易品，这是唯一正规的构造路径：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

public static ItemObject MakeSpice()
{
    ItemObject item = new ItemObject("my_mod_spice");
    return ItemObject.InitializeTradeGood(
        item,
        new TextObject("香料"),
        "my_mod_spice_mesh",
        DefaultItemCategories.Salt,   // 静态 ItemCategory 属性，不需要 Game.Current
        120,
        0.5f,
        ItemObject.ItemTypeEnum.Goods,
        false);
}
```

`DefaultItemCategories` 上有二十几个静态 `ItemCategory` 属性（`Grain` / `Wood` / `Meat` / `Wool` / `Cheese` / `Iron` / `Salt` / `Silver` / `Cotton` / `Fish` / `Flax` / `Grape` / `Hides` / `Clay` / `DateFruit` / `Olives` / `Beer` / `Wine` / `Oil` …），**和 `DefaultSkills` 一样是静态属性，不必经由 `Game.Current`**。

`InitializeTradeGood` 自己保证了 `Initialize()` → 填字段 → `AfterInitialized()` 的顺序。**如果你要自定义字段，得在调用它之前或之后自己补，不能指望它知道你的额外数据。** 它还会无条件执行 `item.ItemFlags |= ItemFlags.Civilian;`（`Civilian = 4194304U`），造非民用物品时这个标志要去掉。

读玩家自制武器时，`ItemComponent` 的存在性检查不能省：

```csharp
using TaleWorlds.Core;

public static string DescribeCrafted(ItemObject item)
{
    // IsCraftedWeapon 就是 WeaponDesign != null。
    if (!item.IsCraftedWeapon)
    {
        return item.StringId + " (非自制)";
    }

    WeaponDesign design = item.WeaponDesign;

    // 官方做法：自定义武器的 StringId 就是 WeaponDesign.HashedCode。
    string hash = design.HashedCode;
    ItemObject resolved = ItemObject.GetCraftedItemObjectFromHashedCode(hash);

    return item.StringId + " hash=" + hash
        + " length=" + design.TotalLength
        + " resolved=" + (resolved != null);
}
```

`GetCraftedItemObjectFromHashedCode` 内部用 `MBObjectManager.Instance`（静态单例），所以**必须在游戏运行期调用**。

## 风险与边界

- **`ItemComponent` 是单槽位。** 一个物品最多挂一个组件。武器 + 护甲这种复合需求在这套结构里做不到，只能靠 `ItemFlags`。
- **`Weapons` 和 `PrimaryWeapon` 可能返回 `null`。** 它们是计算属性，无组件时返回 `null` 而非空列表。`foreach (… in item.Weapons)` 在非武器物品上直接 `NullReferenceException`。
- **`GetWeaponWithUsageIndex` 在 `Weapons` 为 null 时 NRE。** 它内部就是 `this.Weapons.ElementAt(usageIndex)`。
- **`ToString()` 只给 `StringId`。** 调试打印物品看不到名字——要显式读 `Name`。
- **`GetHashCode` 依赖对象池位置。** `(int)base.Id.SubId` 不是内容哈希。跨加载批次得到的同 id 对象哈希可能不同。
- **`Tierf` 依赖 `Game.Current`。** 它会读 `Game.Current.BasicModels.ItemValueModel.CalculateTier(this)`。游戏未启动时 NRE。
- **`Tier` 在无组件时短路。** `ItemComponent == null` 直接返回 `Tier1`，**不读 `Tierf`**。所以无组件物品的 `Tier` 在游戏未启动时也能读，但有组件的不能。
- **`ItemType` 与 `Type` 是同一份数据的两个入口。** `Type` 是 **public 可写字段**，绕过了 `ItemType` 的 `private set`。想改就别用属性，想防就别用字段——引擎两样都给了。
- **`SetItemFlagsForCosmetics` 是整体替换。** `this.ItemFlags = newFlags;` —— 不是按位或。想追加必须自己写 `item.ItemFlags |= x`，但那需要 setter…实际做法是在子类或用 `InitializeTradeGood` 那样的工厂。
- **所有业务属性都是 `{ get; private set; }`。** 外部代码改不了任何字段。想改只能走 `Deserialize` 或那两个 `Initialize*` 静态工厂。
- **`sealed`。** 继承不了。
- **`Name` 只能通过 `internal void SetName` 改。** 而它还有副作用：**若 `WeaponDesign != null`，会连带 `new WeaponDesign(...)` 重建设计**——**改名等于换存档键**（见 [WeaponDesign](../WeaponDesign) 5.3 节）。
- **`GetCraftedItemObjectFromHashedCode` 是 O(n) 线性扫描。** 遍历所有 `ItemObject` 逐个比对。在物品多的存档上调用频繁会明显拖慢。
- **`Deserialize` 是本类的主戏，也是唯一的数据来源。** 三个构造器都不填业务字段。**手工 `new ItemObject()` 得到的是空壳。**
- **`InitializeTradeGood` 强制 `ItemFlags |= Civilian`。** `Civilian = 4194304U`，是整体按位或上去的。造非民用物品时这个标志要去掉，而它的 setter 是 `private`——只能靠另一个 `Initialize*` 工厂或反射。
- **`MaxHolsterSlotCount = 4` 是 const。** `ItemHolsters` 数组的长度不应超过它。

## 跨版本提示

`ItemObject.cs` 在 **1.3.15 起有两个新增成员，且两个构造器签名都变了**——这是本批跨版本差异第二大的类型。

**新增**：
- `public bool IsUniqueItem { get; private set; }`（1.3.15 起有，1.3.0 没有）
- `public bool IsTransferable`（1.3.15 起有，1.3.0 没有）

**签名变更**：
- 1.3.0：`public ItemObject(string stringId) : base(stringId)` / `public ItemObject(ItemObject itemToCopy) : base(itemToCopy)`
- 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3：`public ItemObject(string stringId)` / `public ItemObject(ItemObject itemToCopy)` —— **去掉了显式 `: base(...)` 转发**。这是反编译器在新版上的排版差异，**语义等价，源码调用不受影响**。

字节数：48812（1.3.0）、50356（1.3.15）、49633（1.4.6 / 1.4.7 / 1.5.3）；行数 1369 / 1379 / 1379 / 1379 / 1379。1.4.6 起比 1.3.15 少 723 字节，**同样是私有实现的变化，公开面只少了那两个构造转发**。

`IsUniqueItem` 与 `IsTransferable` 是实打实的功能新增——`IsUniqueItem` 影响物品能否堆叠，`IsTransferable` 影响能否交易/转移。**1.3.0 上写 `if (item.IsUniqueItem)` 会编译失败。** 需要兼容就得用 `#if`，或者自己从 `ItemFlags` 里找等价位。

其余四十几项（所有组件对、所有 `IsXxx` 判定、`Tier` / `Tierf`、`Weapons` / `AddWeapon`、`InitializeTradeGood`、两个 `GetXxxTypeForXxx`、`ItemTypeEnum` 的 26 个值、`MaxHolsterSlotCount`）在五个版本间**形状完全一致**。

结论：**除 `IsUniqueItem` / `IsTransferable` 需条件编译、两个构造器只在反编译文本上有差异外，`ItemObject` 的公开面在 1.3 → 1.5 间稳定**。

## 依赖关系

- 六组件家族：[WeaponComponent](../WeaponComponent) / [ArmorComponent](../ArmorComponent) / [HorseComponent](../HorseComponent) / [SaddleComponent](../SaddleComponent) / [BannerComponent](../BannerComponent) / [TradeItemComponent](../TradeItemComponent) —— `ItemComponent` 的全部可能类型；[ItemComponent](../ItemComponent) 是它们的抽象基类
- 武器数据：[WeaponComponentData](../WeaponComponentData) 是 `Weapons` 列表的元素；`GetItemTypeFromWeaponClass` 返回本类的 `ItemTypeEnum`
- 自制武器：[WeaponDesign](../WeaponDesign) 挂在 `WeaponDesign` 属性上，`IsCraftedWeapon` 判它非空，`HashedCode` 当存档键
- 品质词条：[ItemModifierGroup](../ItemModifierGroup) 是 `AddWeapon` 第二个参数，内部装 [ItemModifier](../ItemModifier)
- 价值与档位：[ItemValueModel](../ItemValueModel) 提供 `CalculateTier` 与 `CalculateValue`，由 `Game.Current.BasicModels` 转出——`Tierf` 的唯一依赖
- 数据字段的来源：[BasicCultureObject](../BasicCultureObject)（`Culture`）、[ItemCategory](../ItemCategory)（`ItemCategory`）、[SkillObject](../SkillObject)（`RelevantSkill`）
- 列表类型：[MBReadOnlyList](../MBReadOnlyList) 是 `Weapons` 的返回类型
- 桶首页：[core-extra API 分区](../)