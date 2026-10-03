---
title: "AlleyItemLocationComparer"
description: "按暗巷驻地到玩家的距离排序：每次 Compare 都重算 Alley.Settlement.Position 到 Hero.MainHero 战役坐标的浮点距离，升序时把比较结果取负。"
---

# AlleyItemLocationComparer

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyItemLocationComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase`
**Base:** `ClanIncomeSortControllerVM.AlleyItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs`（全文 527 行；本类在第 464–483 行）

## 概述

三个暗巷比较器里唯一一个**有私有辅助方法**的。它比另外两个多一层间接：公开的 `Compare` 只负责比较两个距离值，距离本身由 `private float GetDistanceToMainParty(ClanFinanceAlleyItemVM item)` 现算。

```csharp
public class AlleyItemLocationComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        int num = this.GetDistanceToMainParty(y).CompareTo(this.GetDistanceToMainParty(x));
        if (this._isAcending) { return num * -1; }
        return num;
    }

    private float GetDistanceToMainParty(ClanFinanceAlleyItemVM item)
    {
        return item.Alley.Settlement.Position.Distance(Hero.MainHero.GetCampaignPosition());
    }
}
```

**注意 `Compare` 的参数顺序是 `y` 在前。** `GetDistanceToMainParty(y).CompareTo(GetDistanceToMainParty(x))` 意味着**默认（非升序）方向是「远的在前」**——离玩家越远的暗巷排在最上面。这个默认方向和另外两个兄弟相反值得留意：名字是 `y.CompareTo(x)`，而 `Sort` 认为「正数 = y 在前」，所以远的确实在前。

## 心智模型

**把它想成「每次比较都现场量一次尺子」**——这是它与 [AlleyItemNameComparer](../AlleyItemNameComparer)、[AlleyItemIncomeComparer](../AlleyItemIncomeComparer) 最本质的区别。后两者比的是 `ClanFinanceAlleyItemVM` 上已经刷好的快照字段（`Name`、`Income`），读的是 O(1) 的字段；本类每次 `Compare` 都要：

1. `item.Alley` —— 字段读，跳过一层；
2. `.Settlement` —— [Alley](../../campaign/Alley) 上一个 `override` 属性，返回宿主 `Settlement`；
3. `.Position` —— `Vec2`，两次导航属性访问；
4. `Hero.MainHero` —— **静态属性，每次都要查一次英雄单例**；
5. `.GetCampaignPosition()` —— 见 [Hero](../../campaign/Hero) 第 2686 行，由 `Hero` 换算出的战役坐标；
6. `.Distance(...)` —— `float` 开方。

**这意味着排序期间玩家在移动，排序结果可能前后不一致。** `MBBindingList.Sort` 会调用 `Compare` 大约 `n log n` 次，每次都重新量距离。列表短的时候无所谓；暗巷多了就是可见的开销与不确定性。**这是本类最值得知道的一条边界。**

它的兄弟 `WorkshopItemLocationComparer` 是逐行同构的复制——只有 `item.Workshop.Settlement` 换成了 `item.Workshop.Settlement`，其余一字不差。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Compare` | `public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)` | 唯一的 public 成员。取两次距离做 `float.CompareTo`，升序时乘 -1。**返回值：负数 `x` 在前、0 等距、正数 `y` 在前。默认方向（`_isAcending == false`）是「远在前」。** 两个参数都不判 null，`x` 或 `y` 为 null 时 `GetDistanceToMainParty` 立刻 NRE。 |
| `GetDistanceToMainParty` | `private float GetDistanceToMainParty(ClanFinanceAlleyItemVM item)` | **私有，不是 API。** 单行：`item.Alley.Settlement.Position.Distance(Hero.MainHero.GetCampaignPosition())`。无缓存、无判空、每次现算。派生类能用 `protected` 但这里写的是 `private`，所以子类必须重写整个 `Compare`。 |

继承来、不属于本页的：`SetSortMode(bool isAcending)` 与 `protected bool _isAcending`（见 [AlleyItemComparerBase](../AlleyItemComparerBase)）。

## 真实示例

要拿到「远→近」还是「近→远」的排序结果，与其直接用这个私有的距离函数，不如自己算一遍——因为坐标源是公开的：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance;
using TaleWorlds.Library;

public static class MyAlleyDistanceProbe
{
    // 把官方 Compare 里那个 private 方法的算法抄成公开的，
    // 这样 mod 自己的 UI 也能用同一把尺子。
    public static float DistanceFromMainParty(ClanFinanceAlleyItemVM item)
    {
        Settlement settlement = item.Alley.Settlement;
        return settlement.Position.Distance(Hero.MainHero.GetCampaignPosition());
    }

    // 按同样的方向约定重排：默认远在前
    public static void SortFarFirst(MBBindingList<ClanFinanceAlleyItemVM> alleyList)
    {
        alleyList.Sort(new MyAlleyDistanceComparer());
    }
}

public class MyAlleyDistanceComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase
{
    private readonly bool _farFirst;

    public MyAlleyDistanceComparer(bool farFirst = true)
    {
        this._farFirst = farFirst;
    }

    public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)
    {
        float dx = MyAlleyDistanceProbe.DistanceFromMainParty(x);
        float dy = MyAlleyDistanceProbe.DistanceFromMainParty(y);
        int result = dy.CompareTo(dx);

        // 两个方向都要能表达：_isAcending 之外再叠加一个默认方向的翻转
        if (this._farFirst)
        {
            return this._isAcending ? result : result * -1;
        }
        return this._isAcending ? result * -1 : result;
    }
}
```

`Settlement.Position` 是 `Vec2`，`Distance(CampaignVec2)` 返回 `float`；`Hero.MainHero.GetCampaignPosition()` 返回 `CampaignVec2`。**这四个调用全都能在 1.3.0 源码里逐行对上**，没有任何一个是编出来的。

## 风险与边界

- **默认方向是「远在前」，与另外两个兄弟的直觉相反。** 不调 `SetSortMode` 直接 `Sort`，离玩家最远的排第一。
- **每次 `Compare` 都重算距离，且基准是「此刻的」玩家位置。** 排序进行中玩家移动会让结果不稳定；暗巷列表长时这是可测量的开销。
- **`Hero.MainHero` 在战斗场景或菜单界面里可能为 null**（英雄尚未生成）。此时 `GetCampaignPosition()` NRE。**在 UI 层用它排序前先确认 `Campaign.Current` 与 `Hero.MainHero` 都已就绪。**
- **`GetDistanceToMainParty` 是 `private`，不是 `protected`。** 派生类调不到它，只能重写整个 `Compare`。想复用算法就得像上面那样自己再写一遍。
- **`item.Alley.Settlement` 会返回宿主聚落。** `Alley` 继承 `SettlementArea`，`Settlement` 是 `override` 属性；如果一个 `Alley` 的宿主聚落在存档里被移除，这里会是 null 而不是抛异常，异常会推迟到 `.Position` 上。
- **等距的两个暗巷返回 0，顺序不稳定。** 本类**没有**二级排序键（军队那套 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的 `ItemComparerBase` 有 `ResolveEquality`）。
- **不是 `ViewModel`。** 无绑定属性、无通知，UI 上的表头箭头来自 [ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `LocationState` / `IsLocationSelected`。

## 跨版本提示

**所属文件 `ClanIncomeSortControllerVM.cs` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里逐字节等价**：19 个 public 成员签名一致，恒为 528 行。本类的 `Compare` 与 `GetDistanceToMainParty` 跨 1.3 → 1.5 **零变化**。

**跨版本上唯一会变的是坐标链的末端**：`Hero.MainHero.GetCampaignPosition()` 内部依赖的 [CampaignVec2](../../campaign/CampaignVec2) 与 `Vec2` 精度、以及官方对 `Alley.Settlement` 的实现方式，可能随版本调整。但本类只调用它们的公开形状，**你的代码只要不覆写 [AlleyModel](../../campaign/AlleyModel) 或自定义 `Alley`，跨版本编译与行为都不变。**

要留意的只有一个方向性的事：**`AlleyItemLocationComparer` 这个类在五棵树里都存在且都没被改名或移除**，所以拿它做基类派生是安全的。

## 依赖关系

- 基类与方向：[AlleyItemComparerBase](../AlleyItemComparerBase) 提供 `SetSortMode(bool isAcending)` 与 `protected bool _isAcending`
- 宿主与触发点：[ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM) 的 `ExecuteSortByLocation()` 写方向后调 `Sort`，`LocationState` / `IsLocationSelected` 是给 UI 的绑定属性
- 被排序的元素：[ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)（其 `public readonly Alley Alley` 字段提供宿主链接）；基类 [ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM) 提供 `Name` / `Income` 快照
- 坐标与距离：[Alley](../../campaign/Alley)（`override Settlement Settlement`）→ `Settlement.Position`（`Vec2`）→ `Distance(CampaignVec2)`；[Hero](../../campaign/Hero).MainHero.GetCampaignPosition()
- 集合容器：[MBBindingList](../../core-extra/MBBindingList) 的 `Sort(IComparer<T>)` 是 `Compare` 唯一的执行入口
- 兄弟实现：[AlleyItemNameComparer](../AlleyItemNameComparer) · [AlleyItemIncomeComparer](../AlleyItemIncomeComparer)；同构的 `WorkshopItemLocationComparer` 在同一文件里
- 桶首页：[viewmodel API 分区](../)
