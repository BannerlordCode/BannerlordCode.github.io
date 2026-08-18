---
title: "EquipmentElement"
description: "描述一个装备槽位里“某件具体物品 + 其武器/护甲修饰 + 物品修饰”的组合值类型，由 Equipment 的每个槽位持有，用于在物品栏、角色装备与 tooltip 中表达“带修饰的单个物品”及其计算后的护甲、伤害、速度与价格。"
---

# EquipmentElement

**命名空间：** TaleWorlds.Core
**模块：** TaleWorlds.Core
**类型：** public struct EquipmentElement
**源文件：** Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/EquipmentElement.cs

## 概述

`EquipmentElement` 并非某种裁决系统或模型，而是一个轻量值类型：它代表“装备里某一个槽位当前装着什么”。具体地说，它把三样东西打包在一起——一个 [`ItemObject`](../../core/ItemObject)（槽位里的基础物品）、一个可选的 [`ItemModifier`](../ItemModifier)（叠加在物品上的修饰，比如价格倍率、护甲/坐骑属性增减），以及一个可选的 `CosmeticItem`（仅用于外观、不参与数值计算的替代模型）。此外还有 `IsQuestItem` 标记，表示它是否属于某条任务线、因而不能被卖出或丢弃。

它最常见的栖身之处是 [`Equipment`](../Equipment)：每个 `EquipmentIndex` 槽位（武器 0/1、头盔、身体、坐骑、马具……）都存放一个 `EquipmentElement`。物品栏（`ItemRoster`）、锻造预览、以及 tooltip 比较武器时，也都以它为最小单位去读取“这件东西在叠加修饰之后到底有多少护甲、多少伤害”。

## 心智模型

把 `EquipmentElement` 理解为一张“贴了标签的物品卡片”会更准确：卡片正面是 `Item`（基础物品，决定了它有武器组件还是护甲组件、基础数值多少），卡片背面贴着 `ItemModifier`（按规则改写正面数值——护甲值经过 `ItemModifier.ModifyArmor`、坐骑属性经过 `ModifyMountXxx`、价格乘以 `PriceMultiplier`）。它本身是 `struct`，所以当你从某个 [`Equipment`](../Equipment) 槽位取出它时拿到的是一份**拷贝**，而不是槽位里的原件。所有 `GetModifiedXxx` 系列方法都是“只读”的：它们先读 `Item` 上的基础组件值，再交 `ItemModifier` 改写后返回，绝不会改动 `Item` 或 `ItemModifier` 自身。使用时，你要么直接读这些修饰后的数值，要么用 `SetModifier` 改修饰、用 `Clear` 清空，然后记得把改完的拷贝**写回**原槽位；不要把它当成持有世界状态的引用对象，也不要在 `Item` 为 `null` 时调用任何依赖组件的 `GetModifiedXxx`。

## 何时使用 / 何时不要使用

- **使用**：需要表达或读取“带修饰的单个物品”时——例如遍历角色 [`Equipment`](../Equipment) 计算每件武器的实际伤害、读取某件护甲叠加修饰后的各部位护甲值、比较两件武器在 tooltip 里的挥砍/穿刺伤害、或构造一个 `ItemRoster` 条目与任务物品。直接读取 `Item`、`ItemModifier`、`IsEmpty` 以及各 `GetModifiedXxx(...)` 方法即可。
- **不要使用**：不要把它当成引用类型去“就地修改期望影响原槽位”——因为它是 `struct`，`element.SetModifier(...)` 只改了你的局部拷贝。要让 [`Equipment`](../Equipment) 槽位真正变化，必须把改动后的 `EquipmentElement` 重新赋值回对应 `EquipmentIndex`。也不要在不确定 `Item` 非空时直接调用 `GetModifiedXxxForUsage` / `GetModifiedMountXxx`，这些方法是围绕 `Item.WeaponComponent` / `Item.HorseComponent` 工作的，空引用会直接抛异常。

## 依赖图

上游类型与组件（本结构读取或组合的对象）：

- [ItemObject](../../core/ItemObject) —— 槽位里的基础物品，提供价值、重量以及 `WeaponComponent` / `ArmorComponent` / `HorseComponent` 等组件。
- [WeaponComponent](../WeaponComponent) —— 经 `Item.WeaponComponent` 读取武器用法（`WeaponComponentData`）与基础伤害、速度、操控。
- [ArmorComponent](../ArmorComponent) —— 经 `Item.ArmorComponent` 读取头/身/腿/臂护甲与潜行因子。
- [ItemModifier](../ItemModifier) —— 叠加在物品上的修饰，决定价格倍率与各护甲、坐骑属性的增减方式。
- [HorseComponent](../HorseComponent) —— 经 `Item.HorseComponent` 读取坐骑的机动/速度/冲锋/生命值基础值。
- [Crafting](../Crafting) —— 玩家锻造产出的物品作为 `Item` 进入本结构，是它最常见的来源之一。

下游与协同类型（持有或消费本结构的对象）：

- [Equipment](../Equipment) —— 每个 `EquipmentIndex` 槽位持有一个 `EquipmentElement`，是本结构最主要的容器。
- [EquipmentIndex](../EquipmentIndex) —— 槽位枚举，用于在 [`Equipment`](../Equipment) 中定位某个具体的 `EquipmentElement`。
- [ItemRosterElement](../ItemRosterElement) —— 物品花名册元素内部持有 `EquipmentElement`，并复用 `IsEqualTo` 与相等比较来判定是否为同一物品条目。

## 风险

- **`struct` 拷贝陷阱**：`EquipmentElement` 是值类型。从 [`Equipment`](../Equipment) 取出来的是副本，`element.SetModifier(...)` 或 `element.Clear()` 只改本地副本，原槽位不变。要让槽位真正生效，必须把修改后的副本重新赋值回 `equipment[EquipmentIndex.X]`。忘记写回是新手最常踩的坑。
- **`Item` 为 `null` 时调用依赖组件的方法**：`IsEmpty` 在 `Item == null` 时返回 `true`，但 `GetModifiedSwingDamageForUsage`、`GetModifiedThrustDamageForUsage`、`GetModifiedMaximumHitPointsForUsage`、`GetModifiedMountCharge` 等方法都会直接访问 `Item.WeaponComponent` / `Item.HorseComponent` 并取 `usageIndex` 对应的武器用法，对空 `Item` 调用会抛空引用异常。读取前务必先判 `IsEmpty`。
- **`static Invalid` 哨兵的语义**：`EquipmentElement.Invalid` 是 `new EquipmentElement(null)`，`IsInvalid()` 通过比较 `Item` 与 `ItemModifier` 是否都等于 `Invalid` 的成员来判断。它只代表“显式无效”哨兵，并不等价于 `IsEmpty`；一个 `Item == null` 但 `ItemModifier != null` 的实例 `IsEmpty` 为真、`IsInvalid` 却为假。
- **修饰叠加的假设**：所有 `GetModifiedXxx` 都假设 `ItemModifier` 已经代表了“最终应叠加的那一层修饰”。游戏里一把武器通常只有一层 `ItemModifier`，本结构不会替你做多层叠加或去重；若你自行多次 `SetModifier` 只会用最后一次覆盖前一次，而不是叠加。
- **`CosmeticItem` 不参与数值**：`CosmeticItem` 仅用于外观替换，读取护甲/伤害/价格时完全忽略它；不要期望改 `CosmeticItem` 会影响 `ItemValue` 或任何 `GetModifiedXxx` 的返回值。
- **`GetModifiedItemName` 的命名约定**：它会在 `ItemModifier != null` 时把修饰名里的 `ITEMNAME` 文本变量替换为 `Item.Name` 来生成显示名；若你依赖本地化占位符，需确保对应 `ItemModifier` 的 `Name` 文本正确配置了 `{ITEMNAME}`。

## 成员说明

### 核心组合字段

- **`Item`**（属性，返回 `ItemObject`）
  - 用途：槽位里的基础物品，决定该元素有没有武器/护甲/坐骑组件，以及基础数值与外观。取值为 `null` 即代表“空槽位”。
  - 副作用：无，纯读取；该属性为私有 set，只能通过构造函数或整体替换 `EquipmentElement` 来变更。
  - 调用时机：几乎每个 `GetModifiedXxx` 方法内部首先读取它来定位组件；调用方在判空、取物品名、取物品类型前都应先读它。

- **`ItemModifier`**（属性，返回 `ItemModifier`）
  - 用途：叠加在物品上的修饰（如精良/粗劣/附魔），在读取护甲、坐骑属性、价格时被 `GetModifiedXxx` 与 `ItemValue` 用作改写因子。
  - 副作用：无，纯读取；只有通过 `SetModifier` 才能改动。
  - 调用时机：`GetModifiedHeadArmor`、`GetModifiedMountCharge`、`GetBaseValue` 等方法内部读取；判断“是否带修饰”时直接读它是否为 `null`。

- **`CosmeticItem`**（字段，返回 `ItemObject`）
  - 用途：仅用于外观的替代物品模型，不参与任何数值计算（护甲/伤害/价格都忽略它）。
  - 副作用：无；由构造函数第四参数直接赋值。
  - 调用时机：渲染层（如角色外观、物品视觉）读取；数值/规则层一般不应依赖它。

- **`IsQuestItem`**（属性，返回 `bool`）
  - 用途：标记该元素是否属于任务物品，从而决定它能否被卖出、丢弃或用于合成。
  - 副作用：无；由构造函数第四参数设置。
  - 调用时机：物品栏与商人交易逻辑在判断“能否移除该物品”时读取。

### 空与有效性

- **`IsEmpty`**（属性，返回 `bool`）
  - 用途：当 `Item == null` 时返回 `true`，代表这是一个空槽位。是对外判断“有没有装着东西”最快捷的入口。
  - 副作用：无。
  - 调用时机：任何准备读取 `Item` 或其组件之前都应先判 `IsEmpty`，避免空引用。

- **`IsVisualEmpty`**（属性，返回 `bool`）
  - 用途：在 `IsEmpty` 为真的前提下进一步要求 `CosmeticItem == null` 才返回 `true`，即“既无实物也无外观替代”才视为视觉空。
  - 副作用：无。
  - 调用时机：渲染层决定“是否还要画一个外观模型”时使用。

- **`IsInvalid()`**（方法，返回 `bool`）
  - 用途：判断该元素是否等于静态哨兵 `EquipmentElement.Invalid`（即 `Item` 与 `ItemModifier` 都与 `Invalid` 的成员一致），用于表达“显式无效”而非普通空槽。
  - 副作用：无。
  - 调用时机：序列化/反序列化或集合查找时区分“未初始化”与“明确无效”的元素。

- **`IsEqualTo(EquipmentElement other)`**（方法，返回 `bool`）
  - 用途：仅比较 `Item` 与 `ItemModifier` 是否都引用相等（不比较 `CosmeticItem`、`IsQuestItem`），判定两个元素是否为“同一件带同一修饰的物品”。
  - 副作用：无。
  - 调用时机：由 `Equals(object)` 与 [`ItemRosterElement`](../ItemRosterElement) 的相等比较复用；物品栏去重、合并数量时常用。

### 价值与重量

- **`ItemValue`**（属性，返回 `int`）
  - 用途：返回该元素的实际价值：`Item.Value`，若带 `ItemModifier` 则再乘以 `ItemModifier.PriceMultiplier` 并四舍五入。空 `Item` 时返回 `0`。
  - 副作用：无；`GetBaseValue()` 是它的“不取整/不四舍五入”近似版本，但此处保持 `MathF.Round` 结果。
  - 调用时机：物品栏估值、交易定价、tooltip 显示价格时读取。

- **`Weight`**（属性，返回 `float`）
  - 用途：返回物品重量（`Item.Weight`），空 `Item` 时为 `0f`。
  - 副作用：无。
  - 调用时机：计算角色/队伍负重前读取；注意它是单件重量，消耗品还需乘堆叠数（见 `GetEquipmentElementWeight`）。

- **`GetBaseValue()`**（方法，返回 `int`）
  - 用途：返回 `Item.Value` 经 `ItemModifier.PriceMultiplier` 缩放后的价格，与 `ItemValue` 不同它不做 `MathF.Round` 取整。
  - 副作用：无。
  - 调用时机：需要未取整价格参与更精确计算时调用。

- **`GetEquipmentElementWeight()`**（方法，返回 `float`）
  - 用途：返回该元素计入负重的实际重量：普通物品即 `Weight`；若为消耗品（`PrimaryWeapon.IsConsumable`），则再乘以 `GetModifiedStackCountForUsage(0)` 的堆叠数。
  - 副作用：无。
  - 调用时机：队伍/角色总负重统计时对每个元素调用。

### 护甲与属性修饰

- **`GetModifiedHeadArmor()` / `GetModifiedBodyArmor()` / `GetModifiedLegArmor()` / `GetModifiedArmArmor()`**（方法，返回 `int`）
  - 用途：返回对应部位经 `ItemModifier.ModifyArmor` 改写后的护甲值（基础取 `Item.ArmorComponent` 的对应字段；空或 `num <= 0` 时返回 `0`）。`GetModifiedBodyArmor` 对马具（`HorseHarness`）类型物品返回 `0`，而 `GetModifiedMountBodyArmor` 恰相反——只对马具返回身体护甲。
  - 副作用：无。
  - 调用时机：角色总护甲、tooltip 护甲分解、AI 选甲逻辑读取。

- **`GetModifiedStealthFactor()`**（方法，返回 `int`）
  - 用途：返回经 `ItemModifier` 改写的潜行因子（来自 `Item.ArmorComponent.StealthFactor`）。
  - 副作用：无。
  - 调用时机：潜行/侦测相关规则读取护甲带来的隐蔽惩罚时调用。

- **`GetModifiedItemName()`**（方法，返回 `TextObject`）
  - 用途：返回该元素的显示名：若没有 `ItemModifier` 或是玩家锻造物（`Item.IsCraftedByPlayer`），直接返回 `Item.Name`；否则用 `ItemModifier.Name` 并把其中的 `ITEMNAME` 文本变量替换为 `Item.Name`，得到“修饰 + 物品”的组合名。
  - 副作用：无；会改写返回 `TextObject` 上的文本变量（返回的是可复用的 `ItemModifier.Name` 对象，注意不要在多处共享后互相覆盖变量）。
  - 调用时机：物品 tooltip、商人界面、物品栏列表展示物品名称时调用。

### 武器伤害 / 速度 / 操控

- **`GetModifiedThrustDamageForUsage(int usageIndex)`**（方法，返回 `int`）
  - 用途：返回第 `usageIndex` 个武器用法下，经 `ItemModifier` 改写的穿刺伤害。内部取 `Item.GetWeaponWithUsageIndex(usageIndex).GetModifiedThrustDamage(ItemModifier)`。
  - 副作用：无；要求 `Item` 非空且存在对应用法，否则空引用。
  - 调用时机：`ItemMenuVM` 比较两把武器、tooltip 显示伤害时调用（见 `bannerlord-1.4.5` 中 `ItemMenuVM.cs` 与 `TooltipRefresherCollection.cs` 的真实调用）。

- **`GetModifiedSwingDamageForUsage(int usageIndex)`**（方法，返回 `int`）
  - 用途：返回第 `usageIndex` 个武器用法下，经 `ItemModifier` 改写的挥砍伤害；与上面的穿刺版对称。
  - 副作用：无。
  - 调用时机：同 `GetModifiedThrustDamageForUsage`，是物品对比 tooltip 的高频调用（`ItemMenuVM.cs` 第 1024、1028 行附近）。

- **`GetModifiedMissileDamageForUsage(int usageIndex)`**（方法，返回 `int`）
  - 用途：返回弓/弩/抛射类武器在第 `usageIndex` 用法下经 `ItemModifier` 改写的抛射伤害。
  - 副作用：无。
  - 调用时机：远程武器 tooltip 与伤害预览读取。

- **`GetModifiedThrustSpeedForUsage` / `GetModifiedSwingSpeedForUsage` / `GetModifiedMissileSpeedForUsage`（方法，返回 `int`）**
  - 用途：返回对应用法下经 `ItemModifier` 改写的攻击速度（影响挥砍/射击节奏）。
  - 副作用：无。
  - 调用时机：武器数值面板、战斗前属性预估读取。

- **`GetModifiedHandlingForUsage(int usageIndex)`**（方法，返回 `int`）
  - 用途：返回对应用法下经 `ItemModifier` 改写的操控值（影响瞄准/稳定）。
  - 副作用：无。
  - 调用时机：武器对比与操控相关规则读取。

- **`GetModifiedStackCountForUsage(int usageIndex)`**（方法，返回 `short`）
  - 用途：返回对应用法下经 `ItemModifier` 改写的堆叠数量（消耗品有意义）。
  - 副作用：无。
  - 调用时机：`GetEquipmentElementWeight` 对消耗品乘此值计算总负重。

- **`GetModifiedMaximumHitPointsForUsage(int usageIndex)`**（方法，返回 `short`）
  - 用途：返回对应用法下经 `ItemModifier` 改写的武器最大耐久（`MaximumHitPoints`）。
  - 副作用：无。
  - 调用时机：耐久显示与“武器是否还能用”的判定读取。

### 坐骑相关

- **`GetModifiedMountCharge(in EquipmentElement harness)`**（方法，返回 `int`）
  - 用途：返回坐骑在叠加马具（`harness`）后的冲锋伤害：基础取 `Item.HorseComponent.ChargeDamage` 加上马具 `ArmorComponent.ChargeBonus`，再依次经本元素 `ItemModifier` 与马具 `ItemModifier` 的 `ModifyMountCharge` 改写；`Item` 为空时返回 `0`。
  - 副作用：无；`harness` 以 `in` 传参，仅读取不修改。
  - 调用时机：骑兵冲锋伤害、坐骑属性面板、tooltip 在同时装备马与马具时调用（多来自坐骑/装备计算层）。

- **`GetModifiedMountSpeed(in EquipmentElement harness)` / `GetModifiedMountManeuver(in EquipmentElement harness)`**
  - 用途：与冲锋版对称，分别返回叠加马具后的移动速度与机动值（基础来自 `HorseComponent.Speed`/`Maneuver` + 马具 `SpeedBonus`/`ManeuverBonus`）。
  - 副作用：无。
  - 调用时机：坐骑移动/机动相关规则与界面读取。

- **`GetModifiedMountHitPoints()`**（方法，返回 `int`）
  - 用途：返回坐骑生命值（`HorseComponent.HitPoints + HitPointBonus`）经 `ItemModifier.ModifyMountHitPoints` 改写后的结果；`Item` 为空或结果 `<= 0` 时返回 `0`。
  - 副作用：无。
  - 调用时机：坐骑血量、战场单位初始化读取。

### 修改、清理与相等

- **`SetModifier(ItemModifier itemModifier)`**（方法）
  - 用途：把本元素的 `ItemModifier` 替换为传入的修饰，从而改变后续所有 `GetModifiedXxx` 的计算结果。
  - 副作用：直接改写当前 `EquipmentElement` 的 `ItemModifier` 字段。**注意它是 `struct`**：只有你手上这份拷贝被改，必须把它写回 [`Equipment`](../Equipment) 槽位才会真正生效。
  - 调用时机：给物品附魔/降级、任务赋予修饰物品时调用。

- **`Clear()`**（方法）
  - 用途：把 `Item` 与 `ItemModifier` 都置为 `null`，使该元素变为空。
  - 副作用：清空当前拷贝的 `Item`/`ItemModifier`；同样因为是 `struct`，需写回原槽位才生效。
  - 调用时机：卸下槽位、移除物品条目时调用。

- **`Invalid`**（静态只读字段，`EquipmentElement`）
  - 用途：`public static readonly EquipmentElement Invalid = new EquipmentElement(null)`，作为“显式无效”哨兵供 `IsInvalid()` 比较。
  - 副作用：无。
  - 调用时机：集合初始化、查找失败返回值、序列化默认值。

- **`GetHashCode()` / `ToString()` / `Equals(...)`**
  - 用途：`GetHashCode` 将 `Item` 与 `ItemModifier` 的哈希组合，便于放入字典/哈希集合；`ToString` 返回 `Item` 的字符串表示（空时为空串）；`Equals` 重载经 `IsEqualTo` 比较，另有接受 `ItemRosterElement` 的重载以便与物品花名册条目互比。
  - 副作用：无。
  - 调用时机：作为字典键、集合去重、`ItemRoster` 合并数量等场景。

## 示例

遍历角色 [`Equipment`](../Equipment) 的武器槽，读取叠加修饰后的实际挥砍与穿刺伤害（注意先判 `IsEmpty`，避免对空槽访问组件）：

```csharp
// 逐槽读取武器伤害：swing / thrust 已含 ItemModifier 的改写
foreach (EquipmentElement element in character.Equipment)
{
    if (!element.IsEmpty && element.Item.HasWeaponComponent)
    {
        int swing  = element.GetModifiedSwingDamageForUsage(0);
        int thrust = element.GetModifiedThrustDamageForUsage(0);
        // 用 swing / thrust 构造 tooltip 文本或横向比较两把武器
    }
}
```

计算坐骑在装备马具后的冲锋与速度：马身取 `Horse` 槽、马具取 `HorseHarness` 槽，二者以 `in` 传入（直接读取，不修改原槽位）：

```csharp
// 坐骑与马具分属两个槽位，charge / speed 由二者共同决定
if (!character.Equipment[EquipmentIndex.Horse].IsEmpty)
{
    int charge = character.Equipment[EquipmentIndex.Horse]
        .GetModifiedMountCharge(in character.Equipment[EquipmentIndex.HorseHarness]);
    int speed  = character.Equipment[EquipmentIndex.Horse]
        .GetModifiedMountSpeed(in character.Equipment[EquipmentIndex.HorseHarness]);
}
```

## 参见

- ↑ 父级：[Core-extra API 索引](../)
- ↔ 相关：[Equipment](../Equipment) · [ItemObject](../../core/ItemObject) · [ItemModifier](../ItemModifier) · [WeaponComponent](../WeaponComponent) · [ArmorComponent](../ArmorComponent) · [HorseComponent](../HorseComponent) · [EquipmentIndex](../EquipmentIndex) · [ItemRosterElement](../ItemRosterElement) · [Crafting](../Crafting)
