---
title: "ArmyManagementBoostEventVM"
description: "军队管理界面里「+10 凝聚力」那一行的小 VM：构造时把货币种类与两个金额存成绑定属性，RefreshValues 拼 SpendText / GainText，私有的 ExecuteEvent 通过构造器传进来的回调把整行交还给 ArmyManagementVM。"
---

# ArmyManagementBoostEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs`（全文 192 行）

## 概述

它是军队管理界面（[ArmyManagementVM](../ArmyManagementVM)）里一个**只有一行高度的子控件 VM**。职责极窄：显示「花 X（货币）→ 凝聚力 +Y」这一行，并在被点击时回调。

构造器（第 15–24 行）的顺序值得注意——**它先设字段，再调 `RefreshValues()`，而 `RefreshValues()` 用到了其中两个字段**：

```csharp
public ArmyManagementBoostEventVM(BoostCurrency currencyToPayForCohesion, int amountToPay,
    int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)
{
    this.IsEnabled = true;
    this._onExecuteEvent = onExecuteEvent;
    this.AmountToPay = amountToPay;
    this.AmountOfCohesionToGain = amountOfCohesionToGain;
    this.CurrencyToPayForCohesion = currencyToPayForCohesion;
    this.CurrencyType = (int)currencyToPayForCohesion;
    this.RefreshValues();
}
```

`CurrencyType = (int)currencyToPayForCohesion` 是一次**枚举到整数的降级**——为了让 UI 的图片索引能用 `[DataSourceProperty]` 绑一个 int，而不是绑枚举。

## 心智模型

**把它想成「一行带回调的展示物」，不是界面的持有者。**

它与 [ArmyManagementVM](../ArmyManagementVM) 的关系是**反向控制**：VM 造它、把一个 `Action<ArmyManagementBoostEventVM>` 塞进构造器；玩家点了这一行 → `ExecuteEvent()`（**`private`**）→ `_onExecuteEvent(this)` → VM 的 `OnBoostCohesion()` 更新 `TotalCost` / `_boostedCohesion` / `_influenceSpentForCohesionBoosting`。**本类不知道 ArmyManagementVM 的存在，它只把「自己」传回去。**

`RefreshValues()`（第 27–34 行）用 `GameTexts.SetVariable` 做**全局文本变量注入**，这是引擎的老写法：

```csharp
GameTexts.SetVariable("AMOUNT", this.AmountToPay);
this.SpendText = GameTexts.FindText("str_cohesion_boost_spend", null).ToString();
GameTexts.SetVariable("GAIN_AMOUNT", this.AmountOfCohesionToGain);
this.GainText = GameTexts.FindText("str_cohesion_boost_gain", null).ToString();
```

`GameTexts.SetVariable` 是进程级的全局槽位——**两个实例交替刷新会互相踩**。这在「只有一行」的界面里没问题；一旦你要复用本类做多行显示，就得知道这是一个全局副作用。

**`BoostCurrency` 是本类内部的嵌套枚举，只有两个值**：`Gold = 0`、`Influence = 1`。它没有独立的页面，因为嵌套类型在文档工具里通常与外层类合并——所以 `CurrencyToPayForCohesion` 的类型必须写全名 `ArmyManagementBoostEventVM.BoostCurrency`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public ArmyManagementBoostEventVM(BoostCurrency currencyToPayForCohesion, int amountToPay, int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)` | 四个参数全是必填。`onExecuteEvent` **不校验 null**——传 null 的话点击会 NRE（`ExecuteEvent` 里是裸调 `_onExecuteEvent(this)`）。 |
| `CurrencyToPayForCohesion` | `public ArmyManagementBoostEventVM.BoostCurrency CurrencyToPayForCohesion { get; }` | **只读、无 `[DataSourceProperty]`、不发通知。** 唯一的 `public` 枚举属性。值在构造器里一次性写入，之后改 `CurrencyType` 不会同步回它。 |
| `IsEnabled` | `public bool IsEnabled { get; set; }` | 按钮可用性。**构造器里无条件置 `true`**——真正的禁用判断在 [ArmyManagementVM](../ArmyManagementVM) 的 `CanBoostCohesion` 那一侧，宿主决定不点时不会走到这里。 |
| `AmountToPay` | `public int AmountToPay { get; set; }` | 要花的钱。可写且会发通知，但 `RefreshValues()` 之外没有任何代码改它——**改了不重刷 `SpendText` 就会显示旧值**。 |
| `CurrencyType` | `public int CurrencyType { get; set; }` | 货币枚举的整数形式，给 UI 做图标索引用。**注意它与 `CurrencyToPayForCohesion` 是两份独立状态**，setter 不做同步。 |
| `AmountOfCohesionToGain` | `public int AmountOfCohesionToGain { get; set; }` | 要换到的凝聚力。同样可写，同样不自动重刷文案。 |
| `SpendText` | `public string SpendText { get; set; }` | 「花掉」那半句，来自 `str_cohesion_boost_spend`，`{AMOUNT}` 已被替换。 |
| `GainText` | `public string GainText { get; set; }` | 「换到」那半句，来自 `str_cohesion_boost_gain`，`{GAIN_AMOUNT}` 已被替换。 |
| `RefreshValues` | `public override void RefreshValues()` | 唯一的 public 方法。重新注入两个 `GameTexts` 全局变量并重算 `SpendText` / `GainText`。**返回 void，不改 `AmountToPay` 等数值**——它只负责文案。 |
| `BoostCurrency` | `public enum BoostCurrency { Gold, Influence }` | **嵌套枚举**，`Gold = 0`、`Influence = 1`。没有独立页面，引用时要写全名。 |

私有成员：`private void ExecuteEvent()`（第 37–40 行，一行 `this._onExecuteEvent(this)`）与 `readonly Action<ArmyManagementBoostEventVM> _onExecuteEvent`。**`ExecuteEvent` 是 `private`，所以 C# 侧调不到**——但 [ViewModel](../../core-extra/ViewModel) 的 `ExecuteCommand` 反射标志包含 `NonPublic`，所以 XML 绑定里写 `ExecuteEvent` 能派发到它。**这是引擎 VM 的常规用法，不是本类的特例。**

## 真实示例

宿主 [ArmyManagementVM](../ArmyManagementVM) 在构造器里这样造它——这是本类唯一的使用点，也是「谁持有、什么时候构造」的标准答案：

```csharp
using System;
using TaleWorlds.CampaignSystem.ArmyManagement;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library;

public class MyBoostRowBuilder
{
    private readonly Action<ArmyManagementBoostEventVM> _onExecute;

    public MyBoostRowBuilder(Action<ArmyManagementBoostEventVM> onExecute)
    {
        this._onExecute = onExecute;
    }

    // ArmyManagementVM 的做法：用模型算出花费，再 new 一行 VM 把回调塞进去。
    public ArmyManagementBoostEventVM Build(Army army)
    {
        int cost = Campaign.Current.Models.ArmyManagementCalculationModel
            .GetCohesionBoostInfluenceCost(army, 10);

        // 构造器末尾会调 RefreshValues()，所以 SpendText / GainText 立刻就有值。
        var row = new ArmyManagementBoostEventVM(
            ArmyManagementBoostEventVM.BoostCurrency.Influence,
            cost,
            10,
            this._onExecute);

        // IsEnabled 构造器里已是 true；宿主要禁掉就在这里改。
        row.IsEnabled = cost > 0;
        MBDebug.Print("提升一行：花 " + row.AmountToPay + "（货币类型 " + row.CurrencyType + "）");
        return row;
    }
}
```

`CampaignUIHelper` 那条链上的两个 API 都在 1.3.0 源码里逐行对得上：[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel).`GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`（第 75 行）与 `MobileParty.MainParty` 静态单例。

## 风险与边界

- **`ExecuteEvent` 是 `private`。** C# 里 `row.ExecuteEvent()` 编译失败。要触发只有两条路：让宿主自己调宿主的方法，或走 `ViewModel.ExecuteCommand("ExecuteEvent", new object[0])` 的反射派发。
- **`_onExecuteEvent` 不校验 null。** `ExecuteEvent` 是裸调，传 null 的回调会 NRE。
- **`CurrencyToPayForCohesion` 与 `CurrencyType` 是两份状态。** 一个是只读枚举、一个是可写 int，setter 不同步。**改 `CurrencyType` 不会更新枚举属性，反之亦然。**
- **`GameTexts.SetVariable` 是全局副作用。** 多行共存时后一行会覆盖前一行注入的 `{AMOUNT}`。要复用本类做多行，**必须每行构造后立刻用它的属性值，不要缓存 `SpendText` 之外的东西。**
- **改数值属性不会自动重刷文案。** `AmountToPay` 的 setter 只发 `OnPropertyChangedWithValue`，不重跑 `RefreshValues()`。**改完数值必须手动调 `RefreshValues()`。**
- **`IsEnabled` 构造器里硬置 `true`。** 本类不做任何条件判断，禁用逻辑全在宿主。把它单独用（比如放进自己的界面）就会看到一个永远可点的按钮。
- **`BoostCurrency` 只有两个值。** 加第三种货币要改嵌套枚举，而 `CurrencyType` 的整数值是**按声明顺序**自动分配的——**在中间插入新值会让已持久化的整数含义漂移**。1.3.0 没有别的货币，别贸然改。
- **`RefreshValues` 依赖语言文件里的 `str_cohesion_boost_spend` / `str_cohesion_boost_gain`。** 找不到时 `GameTexts.FindText` 会返回一个空 `TextObject`，`ToString()` 得到空串——**不抛异常，只是这一行什么都不显示。**

## 跨版本提示

**所属文件在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里完全等价**：193 行，2 个 public 签名（构造器 + `RefreshValues`）完全相同，行数一模一样。**跨 1.3 → 1.5 零变化。**

**跨版本风险在两个上游 API 上：**

- `ArmyManagementCalculationModel.GetCohesionBoostInfluenceCost(Army, int)` 是抽象方法（[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel) 第 75 行）。**如果你的 mod 覆写了 `ArmyManagementCalculationModel`，签名一变这里就编译不过。**
- `GameTexts.SetVariable(string, ...)` 与 `FindText(string, ...)` 属于 [GameTexts](../../core-extra/GameTexts)，五棵树里稳定。**但文本 key `str_cohesion_boost_spend` / `str_cohesion_boost_gain` 属于语言文件而非代码**，官方改 key 你这边就会拿到空串——而代码照样编译通过。

**结论：本类可以放心当模板派生，跨版本风险极低。**

## 依赖关系

- UI 底座：[ViewModel](../../core-extra/ViewModel) 提供 `OnPropertyChangedWithValue` / `RefreshValues` 虚方法 / `ExecuteCommand` 反射派发
- 宿主与唯一持有者：[ArmyManagementVM](../ArmyManagementVM) 构造它、给它塞回调、决定 `IsEnabled`；界面侧由 `GauntletKingdomScreen` / `GauntletMapOverlayView` / `GauntletMapBarGlobalLayer` 持有着色器层
- 花费与凝聚力的计算：[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel) 的 `GetCohesionBoostInfluenceCost(Army, int)` 与 `CalculateNewCohesion(...)`
- 实际写入：[Army](../../campaign/Army) 的 `BoostCohesionWithInfluence(float, int)`；单位在 [ArmyManagementVM](../ArmyManagementVM) 的 `ApplyCohesionChange()`
- 文案与变量注入：[GameTexts](../../core-extra/GameTexts) 的 `SetVariable` / `FindText`
- 提示条容器：[HintViewModel](../../core-extra/HintViewModel) 与 [BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel)（在宿主那一侧）
- 教程信号：本类被点击后，宿主发 [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- 桶首页：[viewmodel API 分区](../)
