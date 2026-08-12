---
title: "ItemCategory"
description: "Bannerlord 里“商品/物品类别”这条数据的本体：每种交易品（谷物、铁、马、武器、盔甲等）背后都挂着一个 ItemCategory，记录它是不是贸易货、是不是牲畜、基础/奢侈需求系数、以及缺货时能拿什么替代。它和 ItemObject 是“一对多”的归属关系，读经济模型、物品菜单、贸易与产线时都要先拿到它。"
---

# ItemCategory

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public sealed class ItemCategory : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.Core/TaleWorlds.Core/ItemCategory.cs`

## 概述

`ItemCategory` 是**一件物品在“经济/贸易”维度上的归类标签**：游戏里每个 `ItemObject`（剑、马、谷物……）都通过 `ItemObject.ItemCategory` 指向唯一一个 `ItemCategory`。这个类别本身带一组经济参数——它算不算“贸易货”、是不是活畜、基础需求与奢侈需求系数、所属时给城镇带来哪种繁荣加成（`Property`），以及当地缺货时可以用哪个类别来替代（`CanSubstitute` + `SubstitutionFactor`）。

类别是**注册式的定义对象**，不是你 new 出来用的服务。整个游戏的全部类别由 `DefaultItemCategories` 在启动时通过 `MBObjectManager` 注册并用 `InitializeObject` 一次性填好参数（例如 `"horse"` 就是 `IsAnimal = true`、`BaseDemand = 140 * 0.001f`）。你通常只**读**它，或按 `StringId` / 枚举出来的全表去**查**它，几乎永远不该自己 `new ItemCategory()` 再 `InitializeObject`。

## 心智模型

把它想成**“贴在物品身上的经济身份证”**，而不是流程或组件：

- **它是什么**：一个 `MBObjectBase` 派生对象，靠 `StringId`（如 `"grain"`、`"horse"`、`"melee_weapons"`）在对象管理器里唯一定位。除了 8 个经济属性，它几乎不携带行为。
- **生命周期**：游戏启动时由 `DefaultItemCategories` 构造 → `MBObjectManager.RegisterPresumedObject` 注册 → `InitializeObject(...)` 填参数。注册且 `AfterInitialized` 后 `IsReady` 才置 `true`。之后整局游戏基本是只读的。
- **所在层**：属于 `TaleWorlds.Core`，是 Foundation（基础数据）层，被战役的经济/贸易/产线模型与物品 UI 共同消费。
- **谁持有它**：`MBObjectManager` 持有全部已注册实例；`ItemObject` 持有自己指向的那个。
- **何时用**：需要判断一个物品是不是贸易货/活畜、读它的需求系数、按类别批量遍历物品、或拿到“马”这种内置类别去比对时。
- **何时不要用**：
  - 想给英雄/库存增删物品 → 用 `ItemRoster` / `ItemRosterElement`，不是改类别。
  - 想“按文化/概率挑一件武器” → 用 `ItemCategorySelector.GetItemCategoryForItem`（见 [ItemCategorySelector](../ItemCategorySelector/)），别自己硬编码类别分支。
  - 想新建一种物品 → 用 `ItemObject.InitializeTradeGood` 等，由对象系统接管注册；别 `new ItemCategory()` 后长期自己保管，它不会进 `MBObjectManager` 的注册表。
- **依赖**：`ItemObject.ItemCategory` 指向它；经济模型（如 `ItemValueModel`、`DefaultItemCategorySelector`）按它做估值与归类；名称来自 `GameTexts.FindText("str_item_category", StringId)`。
- **出错会怎样**：在 `MBObjectManager` 就绪前查类别会拿到 `null`；`GetObject<ItemCategory>(...)` 找不到也会返回 `null`；`BaseDemand`/`LuxuryDemand` 是“原始整数 × 0.001f”后的系数，并非原始配置值；`IsValid == false` 的类别（如 `"unassigned"`）不应参与经济计算。

## 如何获取 ItemCategory

```csharp
// 路径 1：从物品直接读它的类别（最常见）
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("iron_sword_a");
ItemCategory cat = sword.ItemCategory;            // 该物品所属的商品类别

// 路径 2：枚举对象管理器里全部已注册类别
foreach (ItemCategory category in MBObjectManager.Instance.GetObjectTypeList<ItemCategory>())
{
    // 跳过未启用的类别（如 "unassigned"）
    if (!category.IsValid)
        continue;
}

// 路径 3：直接取游戏内置的类别常量（DefaultItemCategories 静态属性）
ItemCategory horseCat = DefaultItemCategories.Horse;   // 等价于 StringId == "horse"
```

## 成员说明

### 标识与命名

| 成员 | 类型 / 签名 | 说明 | 副作用 / 注意 |
|------|------------|------|--------------|
| `StringId` | `string`（继承自 `MBObjectBase`） | 类别的唯一字符串键，如 `"grain"`、`"horse"`、`"unassigned"`。 | 注册后即为查表主键；`MBObjectManager.GetObject<ItemCategory>(stringId)` 就靠它。 |
| `GetName()` | `public override TextObject GetName()` | 返回本地化显示名，内部是 `GameTexts.FindText("str_item_category", StringId)`。 | 若该 `StringId` 没有对应文本，返回空 `TextObject`；这是 UI 显示的入口。 |
| `ToString()` | `public override string ToString()` | 直接返回 `StringId`。 | 仅作调试/日志标识，不含中文名等本地化信息。 |

### 贸易与经济属性

这些属性全部由 `InitializeObject` 在加载期一次性写入，之后游戏运行时基本只读。

| 属性 | 类型 | 说明 | 副作用 / 注意 |
|------|------|------|--------------|
| `IsTradeGood` | `bool` | 是否作为“贸易货”参与城镇供需/价格。 | `false` 的物品（武器、盔甲、旗帜、未分配）不走贸易货定价逻辑。 |
| `IsAnimal` | `bool` | 是否为活畜（绵羊、牛、猪、马、驮马）。 | 活畜在产线/补给里有特殊处理；`DefaultItemCategories` 里只有 `*Horse`/`Sheep`/`Cow`/`Hog`/`PackAnimal` 置 `true`。 |
| `IsValid` | `bool` | 该类别是否“有效/参与经济”。 | `"unassigned"` 类别被显式初始化为 `false`，遍历经济类别时应跳过。 |
| `BaseDemand` | `float` | 基础需求系数。 | **注意缩放**：内部是 `(float)baseDemand * 0.001f`，原始配置 140 → 0.14。读到的已是系数而非整数配置值。 |
| `LuxuryDemand` | `float` | 奢侈需求系数，同上缩放（`luxuryDemand * 0.001f`）。 | 用于区分“日常品”与“奢侈品”的需求曲线。 |
| `Properties` | `ItemCategory.Property` | 该类别给城镇带来的繁荣/产出加成类型。 | 见下方嵌套枚举；`None` 表示无加成。 |
| `CanSubstitute` | `ItemCategory` | 缺货时可作为替代的类别（如 `grain` 的替代品是 `fish`）。 | 可能为 `null`（马、弩等没有替代物）。遍历替代链时注意终止条件，避免自己构造环。 |
| `SubstitutionFactor` | `float` | 替代时的换算系数（如 `0.9f` 表示 0.9 单位替代品抵 1 单位原品）。 | `CanSubstitute == null` 时恒为 `0f`，无意义。 |

### 嵌套枚举 `ItemCategory.Property`

`Properties` 的取值，描述该类别在城镇经济里提供哪种加成：

| 值 | 含义 |
|----|------|
| `None` | 无加成（多数武器/盔甲） |
| `BonusToProduction` | 提升产出（如 `tools`） |
| `BonusToFoodStores` | 提升粮食储备（谷物、肉、酒、鱼等） |
| `BonusToProsperity` | 提升繁荣度（毛皮、马、驮马） |
| `BonusToLoyalty` | 提升忠诚度（天鹅绒、酒、珠宝） |
| `BonusToMilitia` | 提升民兵 |
| `BonusToGarrison` | 提升驻军（战马、贵族马） |
| `BonusToTax` | 提升税收（盐、银） |

### 初始化

| 成员 | 签名 | 说明 | 副作用 / 注意 |
|------|------|------|--------------|
| 构造函数 | `public ItemCategory()` / `public ItemCategory(string stringId)` | 创建空类别；带 `stringId` 的版本同时设好 `StringId`。 | 仅构造**不会**注册到 `MBObjectManager`，也不会填任何经济属性（全为默认值）。 |
| `InitializeObject(...)` | `public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, ItemCategory.Property properties = ItemCategory.Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)` | 一次性写入全部经济参数，调用 `base.Initialize()` 与 `AfterInitialized()`，并返回 `this`（链式调用友好）。 | **会改写已有字段**：对一个已注册/已初始化的类别再次调用等于覆盖参数，可能破坏经济平衡。`BaseDemand`/`LuxuryDemand` 在内部乘 `0.001f`。一般只在加载期由 `DefaultItemCategories` 调用，mod 不应在运行时重调。 |

## 典型用法示例

### 示例 1：判断物品是不是贸易货并读需求系数

```csharp
// 真实获取路径：先取物品，再读它的类别
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("grain");
ItemCategory cat = item.ItemCategory;
if (cat != null && cat.IsTradeGood)
{
    // BaseDemand 已是缩放后的系数（140 * 0.001f = 0.14）
    float demand = cat.BaseDemand;
    // 缺货时，城镇可用 fish 按 0.9 的换算比例替代
    ItemCategory substitute = cat.CanSubstitute;   // fish
    float factor = cat.SubstitutionFactor;         // 0.9f
    TextObject name = cat.GetName();               // 本地化显示名
}
```

### 示例 2：按类别批量遍历全部物品

```csharp
// 真实获取路径：枚举对象管理器里注册的类别
MBReadOnlyList<ItemCategory> allCats =
    MBObjectManager.Instance.GetObjectTypeList<ItemCategory>();

// 统计所有“活畜”类别
int animalCount = 0;
foreach (ItemCategory category in allCats)
{
    if (!category.IsValid)
        continue;                       // 跳过 "unassigned" 等无效类别
    if (category.IsAnimal)
        animalCount++;
}
```

### 示例 3：用内置常量比对类别（避免硬编码 StringId）

```csharp
// 真实获取路径：DefaultItemCategories 暴露了全部内置类别的静态属性
ItemCategory horseCat = DefaultItemCategories.Horse;   // StringId == "horse"
bool isLivestock = horseCat.IsAnimal;                  // true
bool hasSubstitute = horseCat.CanSubstitute != null;   // false，马没有替代物
ItemCategory.Property bonus = horseCat.Properties;     // BonusToProsperity
```

## 依赖图

- 上游（谁创建 / 注册 / 持有）
  - [MBObjectManager](../../campaign-ext/MBObjectManager/) — 持有全部已注册 `ItemCategory` 实例；通过 `GetObjectTypeList<ItemCategory>()` / `GetObject<ItemCategory>(stringId)` 查表。
  - [MBObjectBase](../../campaign-ext/MBObjectBase/) — 基类，提供 `StringId` / `Id` / `IsReady` / `IsRegistered` 等注册状态字段。
  - [DefaultItemCategories](../DefaultItemCategories/) — 游戏启动时登记约 70 个内置类别并调用 `InitializeObject` 填参数。
- 下游（消费类别的子系统）
  - [ItemObject](../ItemObject/) — 每个物品通过 `ItemCategory` 属性指向唯一类别；这是拿到类别的最常见入口。
  - [ItemCategorySelector](../ItemCategorySelector/) 与 [DefaultItemCategorySelector](../DefaultItemCategorySelector/) — 决定某物品归入哪个类别（如 Crafting 产物）。
  - [ItemComponent](../ItemComponent/) — 物品组件层，配合类别做估值/归类。
- 兄弟类型与工具
  - [MBObjectManagerExtensions](../MBObjectManagerExtensions/) — 对象管理器的扩展辅助方法。
  - [核心扩展模块索引](../) — 本 bucket 的入口。

## 风险段（崩溃 / 经济错误 / 表现异常）

1. **对象系统未就绪就查类别**：`MBObjectManager.Instance.GetObject<ItemCategory>(...)` / `GetObjectTypeList<ItemCategory>()` 都依赖 `MBObjectManager` 已加载。若在 `MBSubModuleBase.OnSubModuleLoad` 早期、或 `Game` 尚未启动处调用，取到 `null` 后继续访问 `.IsTradeGood` 会抛 `NullReferenceException`。**必须在战役/游戏已加载后调用。**
2. **查不到的类别返回 `null`**：`GetObject<ItemCategory>("不存在的id")` 找不到时返回 `null`，不是异常。任何取类别的路径都应做 `if (cat != null)` 判空，尤其是 mod 自定义物品未走标准注册流程时。
3. **运行时重调 `InitializeObject` 会覆盖参数**：`InitializeObject` 是写字段方法，不是幂等的“安全刷新”。对已经注册、经济模型正在用的类别再次调用，会改写 `BaseDemand`/`Properties`/`CanSubstitute` 等，导致价格与产线异常。**类别参数只在加载期由 `DefaultItemCategories` 设定一次。**
4. **需求系数已被缩放**：`BaseDemand` / `LuxuryDemand` 是原始整数 `× 0.001f` 后的结果（配置 140 → 0.14）。若你在 mod 里想“还原配置值”而直接乘 1000，要清楚它本来就是系数而非整数；把它当原始配置值使用会严重偏离预期。
5. **忽略 `IsValid` 会算进无效类别**：`"unassigned"` 类别 `IsValid == false`，它本就不参与经济。遍历全表做供需/价格统计时务必 `if (!category.IsValid) continue;`，否则会把“未归类”物品混进经济计算。
6. **`CanSubstitute` 替代链可能成环**：替代关系是数据驱动的（`grain`→`fish`，`fish`→`grain`）。若你在 mod 里遍历“一直到无替代物为止”，必须记录已访问集合，否则两个互替类别会死循环。

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5：本类型的**公开 API 完全一致**——8 个经济属性、`InitializeObject` 的 8 参签名、`GetName` / `ToString` 行为、`Property` 枚举的 8 个值均相同。本文以 1.4.5 权威源码为准，两个旧版本的 `.cs` 路径在各自 `TaleWorlds.Core/ItemCategory.cs`（非 `bin/` 布局），语义无差异。
- `ItemCategory` 是 `sealed class`，不能再派生；与 `ItemObject` 的关系是**组合**（每个物品持有一个类别引用），不是继承。
- 类别数量与参数由 `DefaultItemCategories` 决定，mod 新增类别应走 `Game.Current.ObjectManager.RegisterPresumedObject(new ItemCategory(stringId))` + `InitializeObject`，而不是直接改写现有内置类别。

## 参见

- [ItemObject](../ItemObject/) — 持有 `ItemCategory` 属性、最常用的类别入口
- [DefaultItemCategories](../DefaultItemCategories/) — 全部内置类别的常量与初始化参数
- [ItemCategorySelector](../ItemCategorySelector/) — 决定物品归类的抽象模型
- [DefaultItemCategorySelector](../DefaultItemCategorySelector/) — 其默认实现
- [ItemComponent](../ItemComponent/) — 物品组件层，配合类别做估值
- [MBObjectManagerExtensions](../MBObjectManagerExtensions/) — 对象管理器扩展方法
- [MBObjectBase](../../campaign-ext/MBObjectBase/) — 基类：注册状态与 `StringId`
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — 持有全部已注册类别

## 导航

- ↑ 父级：[核心扩展模块索引](../)
- ↔ 同级：[ItemObject](../ItemObject/) · [ItemCategorySelector](../ItemCategorySelector/) · [DefaultItemCategories](../DefaultItemCategories/) · [DefaultItemCategorySelector](../DefaultItemCategorySelector/) · [ItemComponent](../ItemComponent/) · [MBObjectManagerExtensions](../MBObjectManagerExtensions/) · [Equipment](../Equipment/)
- 相关类型：[MBObjectBase](../../campaign-ext/MBObjectBase/) · [MBObjectManager](../../campaign-ext/MBObjectManager/)
