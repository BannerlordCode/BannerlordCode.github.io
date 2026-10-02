---
title: "BannerComponent"
description: "旗帜组件：继承 WeaponComponent 而非直接继承 ItemComponent，在武器形态之上叠加旗帜等级与 BannerEffect 效果引用。"
---

# BannerComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BannerComponent : WeaponComponent`
**Base:** `TaleWorlds.Core.WeaponComponent`
**File:** `TaleWorlds.Core/BannerComponent.cs`

## 概述

`BannerComponent` 是六个 [ItemComponent](../ItemComponent) 派生实现里**唯一继承链不是直连基类**的一个：它继承 [WeaponComponent](../WeaponComponent)，而后者继承 `ItemComponent`。所以一件旗帜同时具备武器组件的全部能力（`_weaponList` 武器形态列表、`Weapons`、`PrimaryWeapon`、`AddWeapon`）和旗帜专有的两项数据：`BannerLevel`（1–3 级）与 `BannerEffect`（效果定义引用）。加成的算法不在本类型里，而在 `BannerEffect.GetBonusAtLevel(int)`——本类型只提供一个转发。它由 XML 的 `<ItemComponent><Banner banner_level="..." effect="..."/></ItemComponent>` 装配。

## 心智模型

**先接受「旗帜是一种武器」这个前提，一切就顺了。** 继承 `WeaponComponent` 意味着：旗帜挂上去以后，`ItemObject.HasWeaponComponent` 为 true，`PrimaryWeapon` 有值，`GetWeaponWithUsageIndex(0)` 不 NRE。旗杆在战斗里就是要被握、被掷、被格挡的实体，不是纯视觉物。所以做 mod 判定时，**旗帜不是「非武器物品」**——任何 `if (!item.HasWeaponComponent)` 的分支都会把旗帜放进去。

第二个推论是**它和 `<Weapon>` 抢同一个槽，而且抢法不对称**。`ItemObject.Deserialize` 里 `<Banner>` 分支写的是 `itemComponent = new BannerComponent(this);`——**总是新建**，不像 `<Weapon>` 分支写 `this.ItemComponent ?? new WeaponComponent(this)` 那样先复用。于是：一份 XML 里同时写 `<Banner>` 和 `<Weapon>`，谁在后谁赢；若 `<Banner>` 在后，它把已有的 `WeaponComponent` 整个替换掉，之前累积的武器形态全丢；若 `<Weapon>` 在后，`this.ItemComponent` 已经是 `BannerComponent`（它是 `WeaponComponent` 的子类，所以 `??` 命中它），于是**第二条武器形态被 Add 进了 BannerComponent 内部的 `_weaponList`**。这两种顺序产生完全不同的结果，且都不报错。

第三个是 **`BannerEffect` 是必填引用，没有兜底**。`Deserialize` 里 `this.BannerEffect = MBObjectManager.Instance.GetObject<BannerEffect>(node.Attributes["effect"].Value);`——**直接取 `node.Attributes["effect"].Value`，属性缺失时先 NRE（Attributes 索引器抛），`GetObject` 返回 null 时 `BannerEffect` 就是 null。** 之后调 `GetBannerEffectBonus()` 会在 `this.BannerEffect.GetBonusAtLevel(...)` 上 NRE。相比之下 `BannerLevel` 有兜底（`int.Parse(...)` 否则 1）。

第四个是 **`BannerLevel` 的合法区间由被调用方兜**。`BannerLevel` 本身是 `private set` 的 int，XML 写 0 或 99 都能加载。但 `BannerEffect.GetBonusAtLevel(int)` 的实现是 `MBMath.ClampIndex(bannerLevel - 1, 0, this._levelBonuses.Length)`，`_levelBonuses` 是 `new float[3]`——**所以等级被钳到下标 0..3，而数组只有 0..2**。`ClampIndex` 若上界包含端点则下标 3 会越界；实际表现是等级 ≥ 4 与等级 3 同值（这是上游的实际行为，不要依赖）。**安全区间是 1..3。**

第五个是 **`GetCopy()` 比父类完整**。`BannerComponent.GetCopy()` 返回 `new BannerComponent(this.Item) { BannerLevel, BannerEffect }`——**显式带了 `this.Item`**，父类 `WeaponComponent.GetCopy()` 只是 `new WeaponComponent(base.Item)`。但它同样**不拷 `_weaponList`**（所以副本没有武器形态，`PrimaryWeapon` 会因 `_weaponList[0]` 越界抛）。

第六个是 **父类 `Deserialize` 里有一段死代码**。`WeaponComponent.Deserialize` 在 `base.Deserialize(...)`（也就是 `ItemComponent.Deserialize`，它已经正确解析了 `modifier_group`）之后，又自己读了一遍：

```csharp
XmlAttribute xmlAttribute = node.Attributes["modifier_group"];
if (xmlAttribute != null)
{
    string value = xmlAttribute.Value;
}
```

`value` 被赋值后**再也没被使用**。所以词缀组仍然由基类正确设置，这段只是冗余——不是功能缺失，但读源码时很容易误以为父类接管了这件事。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BannerLevel` | `public int BannerLevel { get; private set; }` | 旗帜等级。XML 属性 `banner_level`，**缺失时默认 1**。合法区间 1–3，超出部分由 `BannerEffect.GetBonusAtLevel` 钳位。`private set`，只能由 `Deserialize` 与 `GetCopy` 的对象初始化器写。 |
| `BannerEffect` | `public BannerEffect BannerEffect { get; private set; }` | 效果定义引用（`TaleWorlds.Core` 的 `sealed class BannerEffect : PropertyObject`，本机尚无对应深写页）。由 XML 属性 `effect` 经 `MBObjectManager.Instance.GetObject<BannerEffect>(stringId)` 解析。**属性缺失时 `node.Attributes["effect"]` 先抛 NRE；id 不存在时该字段为 null。** |
| `.ctor` | `public BannerComponent(ItemObject item) : base(item)` | 只做 `base(item)`，最终落到 `WeaponComponent(ItemObject)` 的 `base.Item = item`。**会正确填充 `Item`，这与 `HorseComponent` / `TradeItemComponent` 的无参构造不同。** |
| `GetCopy` | `public override ItemComponent GetCopy()` | `new BannerComponent(this.Item) { BannerLevel, BannerEffect }`。**带上了 `Item`（父类 `GetCopy` 也带），但不拷 `_weaponList`，也不拷 `ItemModifierGroup`。** 全树只被 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 调用。 |
| `GetBannerEffectBonus` | `public float GetBannerEffectBonus()` | 转发 `this.BannerEffect.GetBonusAtLevel(this.BannerLevel)`。**`BannerEffect` 为 null 时 NRE。** 这是本类型唯一的方法，也是全部功能。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | `base.Deserialize(...)`（→ `WeaponComponent.Deserialize` → `ItemComponent.Deserialize`，链上会正常建出一条 `WeaponComponentData` 并解析 `modifier_group`），然后读 `banner_level`（默认 1）与 `effect`（无兜底）。 |
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }`（继承） | 继承自 [WeaponComponent](../WeaponComponent)，返回 `_weaponList`。**旗帜也有这个列表**，由 `WeaponComponent.Deserialize` 填入一条。 |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }`（继承） | 继承自父类，硬索引 `_weaponList[0]`。**副本（`GetCopy()` 结果）没有列表，取它会越界抛。** |
| `AddWeapon` | `public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)`（继承） | 继承自父类，往 `_weaponList` 追加并 `base.ItemModifierGroup = itemModifierGroup`。**对 `BannerComponent` 调它会给旗帜加武器形态。** |
| `GetItemType` | `public ItemObject.ItemTypeEnum GetItemType()`（继承） | 继承自父类，`WeaponComponentData.GetItemTypeFromWeaponClass(_weaponList[0].WeaponClass)`。**不返回 `ItemTypeEnum.Banner`**——`ItemObject.IsBannerItem` 读的是 `ItemType` 字段，不是这个方法。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)`（覆盖） | 实现只调 `base`，新增的 `BannerEffect` 引用**不进 `collectedObjects`**。 |

## 真实示例

读旗帜等级与加成（**先判 `BannerEffect` 非空**）：

```csharp
ItemObject bannerItem = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0).Item;
if (bannerItem == null || !bannerItem.HasBannerComponent)
{
    Debug.Print("no banner equipped", 0);
    return;
}

BannerComponent banner = bannerItem.BannerComponent;
Debug.Print("banner level = " + banner.BannerLevel, 0);

if (banner.BannerEffect != null)
{
    float bonus = banner.GetBannerEffectBonus();
    Debug.Print("banner bonus = " + bonus, 0);
}
```

注意旗帜也是武器组件——**判「是不是武器」时它会命中**：

```csharp
ItemObject bannerItem = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0).Item;
if (bannerItem != null && bannerItem.HasWeaponComponent)
{
    WeaponComponentData primary = bannerItem.PrimaryWeapon;
    Debug.Print("item type enum = " + bannerItem.ItemType, 0);
    Debug.Print("inferred type = " + bannerItem.WeaponComponent.GetItemType(), 0);
    Debug.Print("weapon flags = " + primary.WeaponFlags, 0);
}
```

按等级查效果说明（`BannerEffect` 的 `GetDescription(int)` 会 `SetTextVariable("BONUS_AMOUNT", ...)`）：

```csharp
BannerComponent banner = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0).Item.BannerComponent;
if (banner != null && banner.BannerEffect != null)
{
    for (int level = 1; level <= 3; level++)
    {
        Debug.Print("level " + level + " -> " + banner.BannerEffect.GetDescription(level), 0);
    }
}
```

按 XML id 直接取一个 `BannerEffect` 定义（它是 `PropertyObject` 的子类，因此有 `Name` / `Description`）：

```csharp
BannerEffect effect = MBObjectManager.Instance.GetObject<BannerEffect>("my_banner_effect");
if (effect != null)
{
    Debug.Print("name = " + effect.GetName(), 0);
    Debug.Print("at level 2 = " + effect.GetBonusAtLevel(2), 0);
    Debug.Print("increment type = " + effect.IncrementType, 0);
}
```

## 风险与边界

- **`BannerEffect` 是必填引用，两段都会炸。** XML 缺 `effect` 属性 → `node.Attributes["effect"]` NRE；id 不存在 → 字段为 null → `GetBannerEffectBonus()` NRE。
- **`BannerLevel` 合法区间是 1–3。** `BannerEffect._levelBonuses` 是 `new float[3]`，`GetBonusAtLevel` 用 `MBMath.ClampIndex(bannerLevel - 1, 0, _levelBonuses.Length)`。写 0 或 99 都会加载，但结果不可依赖。
- **`GetCopy()` 不拷 `_weaponList`。** 副本的 `PrimaryWeapon` 会因 `_weaponList[0]` 越界抛，`GetItemType()` 同理。
- **`GetCopy()` 不拷 `ItemModifierGroup`。** 副本的品质词缀组为 null。
- **继承链是 `WeaponComponent` 而不是 `ItemComponent`。** 写 `if (component is ItemComponent c)` 能命中，写 `if (component is WeaponComponent w)` 也能命中；但**不能**假设「`WeaponComponent` 的实例就一定是 `WeaponComponent` 类」——`BannerComponent` 是它的子类，反过来不成立。做类型分派时 `BannerComponent` 必须排在 `WeaponComponent` 之前，否则被吃掉。
- **和 `<Weapon>` 抢单槽，顺序敏感。** `<Banner>` 在后 → 替换掉武器形态列表；`<Weapon>` 在后 → 形态被 Add 进 `BannerComponent`。**两种顺序都不报错，结果不同。**
- **父类 `Deserialize` 有一段死代码。** `WeaponComponent.Deserialize` 读 `modifier_group` 到一个未使用的局部变量 `value`；真正生效的是 `ItemComponent.Deserialize` 里的解析。别把这段当成功能。
- **`BannerComponent` 占用 [ItemObject](../ItemObject) 的单槽。** 写 `<Banner>` 就不能同时写 `<Armor>` / `<Horse>` / `<Trade>`。
- **`GetItemType()` 不返回 `Banner`。** 它返回的是 `WeaponClass` 反推出的武器类型。`ItemObject.IsBannerItem` 读的是 XML 里的 `type` 属性（`ItemTypeEnum.Banner`），两者是不同的判定路径。
- **不进存档。** 组件随物品 XML 重建。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/BannerComponent.cs` 公开表面**完全一致**（7 个公开成员，含继承自 `WeaponComponent` 的 5 个与自有 2 个）。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BannerComponent.cs`（49 行）与 `bannerlord-1.4.6/TaleWorlds.Core/BannerComponent.cs`（64 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 7 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 49 行、1.4.6 是 64 行，差的 15 行是反编译注释与 namespace 换行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 基类：[WeaponComponent](../WeaponComponent) 提供 `Weapons` / `PrimaryWeapon` / `AddWeapon` / `GetItemType` 与 `_weaponList`；它再继承 [ItemComponent](../ItemComponent) 提供 `Item` 与 `modifier_group` 解析
- 祖先：[ItemComponent](../ItemComponent) 声明 `GetCopy()` 抽象契约与 `Item` / `ItemModifierGroup`
- 效果：`BannerEffect`（`TaleWorlds.Core`，`sealed class BannerEffect : PropertyObject`，本机尚无对应深写页）提供 `GetBonusAtLevel` / `GetBonusStringAtLevel` / `GetDescription` / `IncrementType`
- 效果之基类：[PropertyObject](../PropertyObject) 是 `BannerEffect` 的直接基类，提供 `Name` / `Description` / `Initialize`
- 宿主与取值：[ItemObject](../ItemObject) 的 `HasBannerComponent` / `BannerComponent`（`as` 转型）/ `IsBannerItem`；旗帜的 UI 与编排在 [Banner](../Banner)
- 槽位：[EquipmentIndex](../EquipmentIndex) 的 `Weapon0`（0）等武器段槽位
- 词缀：[ItemModifierGroup](../ItemModifierGroup) 由 `ItemComponent.Deserialize` 从 `modifier_group` 属性解析
- 组件同族：[SaddleComponent](../SaddleComponent) 与 [TradeItemComponent](../TradeItemComponent) 是直连 `ItemComponent` 的两条分支，可拿来对比本类型「跨一层继承」的差异
- 桶首页：[core-extra API 分区](../)