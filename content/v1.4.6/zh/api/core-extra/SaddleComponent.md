---
title: "SaddleComponent"
description: "鞍具标记组件：20 行源码、零成员、零 XML 标签入口的唯一价值是让类型判定成立，是全树最短的 ItemComponent 派生类。"
---

# SaddleComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class SaddleComponent : ItemComponent`
**Base:** `TaleWorlds.Core.ItemComponent`
**File:** `TaleWorlds.Core/SaddleComponent.cs`

## 概述

`SaddleComponent` 全部源码 20 行，去掉反编译留下的 token 注释后只剩一个构造函数和一个 `GetCopy()` 覆写，**没有任何属性、字段或 `Deserialize` 覆写**。它的全部语义就是「存在性」：[ItemObject](../ItemObject) 的 `HasSaddleComponent` 读 `SaddleComponent != null`，而 `SaddleComponent` 是 `this.ItemComponent as SaddleComponent`。作为对照，[TradeItemComponent](../TradeItemComponent) 至少还有一个 `MoraleBonus`，[BannerComponent](../BannerComponent) 有 `BannerLevel` 与 `BannerEffect`，[HorseComponent](../HorseComponent) 有二十多个成员。所以它是这套「组件即标签」设计里最纯粹的标签实现——**它存在的唯一理由是让 `is SaddleComponent` 这个判定能成立。**

## 心智模型

**先接受「这个类型在 1.4.6 的官方 XML 里走不到」这个事实，再谈怎么用。** `ItemObject.Deserialize` 的标签分支表只有六个名字：`<Armor>`、`<Weapon>`、`<Horse>`、`<Trade>`、`<Food>`（已废弃，走 `Debug.FailedAssert` 并置 null）、`<Banner>`，其余一律 `throw new Exception("Wrong ItemComponent type.")`。**表里没有 `<Saddle>`。** 全树 11,385 个 `.cs` 里 `new SaddleComponent(` 只出现在本文件自己的 `GetCopy()` 里，`new ArmorComponent` / `new HorseComponent` / `new TradeItemComponent` / `new BannerComponent` 都至少出现在 `ItemObject.cs` 里各一次——**只有鞍具是零外部构造点**。同时 `ItemObject.ItemComponent` 是 `private set`，`AddWeapon` 只能装 `WeaponComponent`，`InitializeTradeGood` 只能装 `TradeItemComponent`。**结论：用官方 API 无法让一件物品挂上 `SaddleComponent`**，除非反射写私有属性、或者直接改 `ItemObject` 的分支表。

那它为什么还在树里、还被人引用？因为**类型判定仍然有效**——历史物品数据里可能存在过鞍具定义，而 `DefaultItemCategorySelector` 与 `DefaultItemValueModel` 里留着对它的判定分支（见下文）。mod 要做兼容，就得知道这两处判定在等一个永远不会来的对象。

第二个心智锚点是**它没有 `Deserialize` 覆写，所以走基类**。`ItemComponent.Deserialize` 会先 `Initialize()` 再读 `modifier_group` 属性并 `Game.Current.ObjectManager.GetObject<ItemModifierGroup>(text)`。也就是说**如果**你通过反射挂上了一个 `SaddleComponent`，它仍然能正确解析品质词缀组——这一点上它比 [TradeItemComponent](../TradeItemComponent)（直接调 `this.Initialize()` 绕过基类）更"正确"。

第三个是**两个构造函数都不填 `Item`**。`public SaddleComponent(SaddleComponent saddleComponent) { }` 的**方法体是空的**——参数读了不用，`base.Item` 保持 null，`ItemModifierGroup` 也保持 null。所以 `saddleComponent.Item` 与 `saddleComponent.ItemModifierGroup` 在 1.4.6 恒为 null。而 `GetCopy()` 就是 `return new SaddleComponent(this)`，于是**副本和原对象的字段完全一致（都为空），它既不是深拷贝也不是浅拷贝，只是新建了一个空壳**。和 [ArmorComponent](../ArmorComponent)（漏拷 `IsNoSlim`）与 [HorseComponent](../HorseComponent)（只拷四个 int）的残缺不同，这里的残缺是"拷贝了零个字段"。

第四个是**它没有任何数据，所以调它的任何方法都没有意义**。没有 `GetXxx()`、没有数值、没有外观属性。想让鞍具有数值，只能自己派生：

```csharp
public class MySaddleComponent : SaddleComponent
{
    public int RideComfort { get; private set; }

    public override ItemComponent GetCopy()
    {
        MySaddleComponent copy = new MySaddleComponent();
        copy.RideComfort = this.RideComfort;
        return copy;
    }
}
```

但要注意 `SaddleComponent` 唯一能用的构造器是 `SaddleComponent(SaddleComponent)`，**子类必须转发它**，否则 `new MySaddleComponent()` 无参构造不成立——基类没有无参构造器。

最后是**两条消费路径，以及它们的后果**。全树只有三个文件提到 `SaddleComponent`：本文件、`ItemObject.cs`（两个 `as` 访问器）、以及下面这两个模型类。第一条是 `DefaultItemCategorySelector`：`if (itemObject.HasSaddleComponent) return DefaultItemCategories.HorseEquipment;`——这是**分类回退的最后一级**，写在「按 `Tier` 决定护甲/衣物分类」全部落空之后的 `else` 分支里。第二条是 `DefaultItemValueModel`：既有 `CalculateSaddleTier(SaddleComponent)` **无条件 `return 0f`**，也有定价路径里的 `else if (item.ItemComponent is SaddleComponent) { num2 = 100f; }`。前者导致 `ItemObject.Tierf` 恒为 0，进而 `Tier` 计算出 `(ItemObject.ItemTiers)(MBMath.ClampInt(0f, 0, 6) - 1)` = **枚举下标 -1，超出 `ItemTiers` 的合法范围**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public SaddleComponent(SaddleComponent saddleComponent)` | **唯一构造器，方法体为空。** 参数 `saddleComponent` 读了不用；`base.Item` 与 `base.ItemModifierGroup` 都保持 null。**没有无参构造器、没有 `(ItemObject)` 构造器。** |
| `GetCopy` | `public override ItemComponent GetCopy()` | `return new SaddleComponent(this);`。**拷贝零个字段**（结果与原对象字段完全相同，因为两者都为空）。与 [ArmorComponent](../ArmorComponent) 的「漏拷一个属性」和 [HorseComponent](../HorseComponent) 的「只拷四个 int」都不同——这里是「一个都不拷」。全树只被 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 调用。 |
| 继承的 `Item` | `public ItemObject Item { get; set; }`（来自 [ItemComponent](../ItemComponent)） | **在本类型实例上恒为 null**，因为唯一构造器不写它。 |
| 继承的 `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; protected set; }`（来自 [ItemComponent](../ItemComponent)） | **在没有覆写 `Deserialize` 的情况下**由 `ItemComponent.Deserialize` 的 `modifier_group` 属性解析。构造器不填，所以手工 `new` 出来的实例上是 null。 |
| 继承的 `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)`（来自 [ItemComponent](../ItemComponent)） | **本类型不覆写**，所以走基类：`Initialize()` + 解析 `modifier_group`。**依赖 `Game.Current`。** |

## 真实示例

判定物品是不是鞍具（官方唯一用途）：

```csharp
ItemObject item = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.HorseHarness).Item;
if (item == null)
{
    Debug.Print("horse harness slot is empty", 0);
}
else if (item.HasSaddleComponent)
{
    Debug.Print("harness carries a SaddleComponent", 0);
}
else
{
    Debug.Print("no SaddleComponent; component type = " + (item.ItemComponent == null ? "none" : item.ItemComponent.GetType().Name), 0);
}
```

用 `is` 做类型判定（这是本类型唯一可靠的语义）：

```csharp
ItemObject item = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.HorseHarness).Item;
if (item != null && item.ItemComponent is SaddleComponent)
{
    Debug.Print("saddle marker present", 0);
}
```

演示「组件单槽」的代价：`InitializeTradeGood` 装的是 `TradeItemComponent`，再调 `AddWeapon` 会把它换掉：

```csharp
ItemCategory myCategory = new ItemCategory("my_good_category");
myCategory.InitializeObject(isTradeGood: true, baseDemand: 5);

ItemObject good = new ItemObject();
ItemObject.InitializeTradeGood(
    good,
    new TextObject("{=my_good}My Good"),
    "my_good_mesh",
    myCategory,
    value: 100,
    weight: 1f,
    itemType: ItemObject.ItemTypeEnum.Goods,
    isFood: false);

Debug.Print("component after trade factory = " + good.ItemComponent.GetType().Name, 0);

good.AddWeapon(new WeaponComponentData(good, WeaponClass.OneHanded, WeaponFlags.None), good.ItemModifierGroup);
Debug.Print("component after AddWeapon      = " + good.ItemComponent.GetType().Name, 0);
```

自定义带数据的鞍具组件（**必须转发基类的唯一构造器**）：

```csharp
public class MySaddleComponent : SaddleComponent
{
    public int RideComfort { get; private set; }

    public MySaddleComponent(SaddleComponent source)
        : base(source)
    {
    }

    public override ItemComponent GetCopy()
    {
        MySaddleComponent copy = new MySaddleComponent(this);
        copy.RideComfort = this.RideComfort;
        return copy;
    }

    public void ApplyComfort(Hero rider)
    {
        rider.AddSkillXp(DefaultSkills.Riding, 5f);
    }
}
```

## 风险与边界

- **XML 走不到。** `ItemObject.Deserialize` 的标签分支表没有 `<Saddle>`，写上去得到 `throw new Exception("Wrong ItemComponent type.")`；全树也没有第二个 `new SaddleComponent(` 调用点。
- **官方 API 无法挂载。** `ItemObject.ItemComponent` 是 `private set`，`AddWeapon` 只能装 `WeaponComponent`，`InitializeTradeGood` 只能装 `TradeItemComponent`。**只能反射或改分支表。**
- **构造器方法体为空。** `Item` 与 `ItemModifierGroup` 恒为 null。派生类想读宿主物品必须自己去拿 `ItemObject`，基类不会帮你。
- **`GetCopy()` 拷贝零个字段。** 别当成深拷贝语义。
- **继承本类型时受唯一构造器约束。** 基类没有无参构造器，派生类必须提供 `SaddleComponent(SaddleComponent)` 的转发。
- **`DefaultItemValueModel.CalculateSaddleTier` 无条件返回 0f。** 于是 `ItemObject.Tierf` 恒为 0，`ItemObject.Tier` 计算出 `(ItemTiers)(-1)`——**枚举下标越界**。任何按 `Tier` switch 的代码都拿不到匹配分支。
- **`DefaultItemCategorySelector` 的分类回退链末端是 `HorseEquipment`。** 它挂在一个长 else 链的末尾，只有前面全部落空才会命中。
- **占用 [ItemObject](../ItemObject) 的单槽。** 挂上它就不能再有护甲 / 马匹 / 武器 / 贸易品组件——而这恰恰让「鞍具同时带护甲」这种常见设计无法实现。
- **不 `sealed`，可继承。** 但继承它并不能解决挂载问题。
- **不进存档。**

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/SaddleComponent.cs` **逐字节结构一致**（20 行、3 个公开成员、无任何属性）。它从 1.3.x 到 1.4.6 一直是这个状态——**这不是 1.4.6 的回归，是一个长期存在的空壳**。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/SaddleComponent.cs`（14 行）与 `bannerlord-1.4.6/TaleWorlds.Core/SaddleComponent.cs`（20 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 1 个成员、0 个属性，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 14 行、1.3.15 与 1.4.6 各 20 行；差的 6 行是 `using System;`、namespace 块括号与 `// Token:` 注释 —— **本段上文说的「逐字节结构一致」不准确**：三份文件的字节不同，**一致的是 public 表面**（都是那个拷贝构造器加一个 `GetCopy()` 覆盖）。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 提供 `Item` / `ItemModifierGroup` / `Deserialize`（`modifier_group` 解析）与抽象 `GetCopy()`
- 祖先：[MBObjectBase](../../campaign-ext/MBObjectBase) 间接提供 `StringId` / `Id` / `Initialize()`
- 宿主判定：[ItemObject](../ItemObject) 的 `SaddleComponent`（`this.ItemComponent as SaddleComponent`）与 `HasSaddleComponent`
- 消费方（全树仅两处）：`DefaultItemCategorySelector` 的 `HasSaddleComponent → DefaultItemCategories.HorseEquipment`，与 `DefaultItemValueModel` 的 `CalculateSaddleTier`（恒 0）与定价分支（`num2 = 100f`）
- 槽位：[EquipmentIndex](../EquipmentIndex) 的 `HorseHarness`（11）是鞍具的实际落位处
- 兄弟分支：[TradeItemComponent](../TradeItemComponent) 是直连 `ItemComponent` 且有数据的最小实现，[BannerComponent](../BannerComponent) 是跨一层继承的实现——三者合起来覆盖了「单槽组件」的两种极端
- 桶首页：[core-extra API 分区](../)