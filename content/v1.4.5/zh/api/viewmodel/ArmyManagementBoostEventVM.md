---
title: "ArmyManagementBoostEventVM"
description: "军队管理界面里「买凝聚力」按钮的视图模型：一个嵌套的 BoostCurrency 枚举、六个绑定属性，以及一个把 self 传回调用方的执行委托。它的 ExecuteEvent 是私有的，且在原版源码树里从未被构造——和 ArmyCohesionBoostedByPlayerEvent 一样是留给模组的扩展点。"
---
# ArmyManagementBoostEventVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementBoostEventVM.cs`

## 概述

军队管理界面允许玩家花钱提升军队凝聚力。这个类型描述其中**一个可购买的选项**：花多少、涨多少、用什么货币买。它把「按 N 点买凝聚力」这件事抽象成一个可重复使用的行，而不是把逻辑写死在 `ArmyManagementVM` 里。

构造签名把三件事一次性定死：

```csharp
public ArmyManagementBoostEventVM(BoostCurrency currencyToPayForCohesion, int amountToPay,
    int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)
```

四个参数：**用什么货币**、**花多少**、**涨多少凝聚力**、**玩家点了之后回调谁**。注意最后那个回调把 `this` 传回去（`Action<ArmyManagementBoostEventVM>`），所以宿主能从参数对象上读回 `AmountToPay`、`AmountOfCohesionToGain` 等已填好的属性。

类内还嵌了一个两值枚举：

```csharp
public enum BoostCurrency { Gold, Influence }
```

以及六个 `[DataSourceProperty]`：`IsEnabled`、`AmountToPay`、`CurrencyType`、`AmountOfCohesionToGain`、`SpendText`、`GainText`。注意 `CurrencyType` 是 **`int`**，而 `CurrencyToPayForCohesion` 是**只读的 `BoostCurrency`**——两套表示并存，前者是给 widget 用的，后者是给 C# 用的。

## 谁在用它

🔴 **原版一个都没有。** 全树检索 `new ArmyManagementBoostEventVM` 命中 0 处；该类型名在整棵树里只出现在自己的文件里（类声明、字段 `private readonly Action<ArmyManagementBoostEventVM> _onExecuteEvent`、构造函数）。**没有任何 `ExecuteBoostCohesion` 或类似调用点构造它。** 它是一个纯粹留给模组的扩展点。

原版在 `ArmyManagementVM` 里用的是**硬编码**的那一套：`private const int _cohesionBoostAmount = 10;`、一个 `int CohesionBoostCost`、以及 `ExecuteBoostCohesionManual()`。换句话说，**这个类是为"可配置多个购买选项"准备的抽象，而原版只用了它能表达的那一个选项，并且是手写的。**

## 心智模型

把它读成**「一份不可变的购买选项描述 + 一个把决定权交还宿主的回调」**：

- **谁 new 它**：**模组。** 原版不构造。若要接入，你得自己 new 一份并把 `onExecuteEvent` 指向你自己的处理逻辑。
- **谁持引用**：你决定。没有任何全局列表会自动收纳它——它不在 `ArmyManagementVM` 的任何 `MBBindingList` 里。要让 widget 看到它，得由你把它放进某个绑定集合。
- **绑定到哪个 View 属性**：六个 `[DataSourceProperty]`。其中 `SpendText` / `GainText` 是已经转好的显示字符串（由 `RefreshValues` 生成），`AmountToPay` / `AmountOfCohesionToGain` / `CurrencyType` 是给 prefab 做数值或图标选择的，`IsEnabled` 控制按钮可用态。
- **什么时候 Dispose**：**没有 Dispose。** 它不覆写 `OnFinalize`，不注册任何 `CampaignEvents` 或 `Game.Current.EventManager`。它唯一持有的东西是一个 `Action` 委托——而那个委托通常捕获宿主，于是**你自己的生命周期管理就是唯一的泄漏防线**。
- 🔴 **`ExecuteEvent()` 是私有的。** 和 `ActionOptionDataVM.ExecuteAction` 一样，它靠 Gauntlet 按名称绑定来触发，C# 侧没有公开入口。想从代码里触发，只能通过构造时传入的那个 `onExecuteEvent` 委托反向操作，或者用反射。
- 🔴 **`RefreshValues()` 用 `GameTexts.SetVariable` 设置的是全局变量。** 它依次设 `AMOUNT` 再取 `str_cohesion_boost_spend`，设 `GAIN_AMOUNT` 再取 `str_cohesion_boost_gain`。**多个实例会互相踩**——`GameTexts` 的变量槽是共享的，两个并排的购买选项中，后一个 `RefreshValues()` 会覆盖前一个刚设好的变量。两个实例必须依次刷新、立即取用，不能交错。
- **`CurrencyType` 与 `CurrencyToPayForCohesion` 是同一件事的两种类型。** 构造函数第 140 行 `CurrencyType = (int)currencyToPayForCohesion;`。给 C# 代码用后者，给 widget 用前者。`BoostCurrency` 是嵌套在本类里的枚举，**外部要引用得写全 `ArmyManagementBoostEventVM.BoostCurrency`**。
- **`IsEnabled` 在构造函数里被硬设为 `true`**，且此后**没有任何代码修改它**（原版里）。它留给你自己控制。
- **常见误用**：以为它会自动生效。它只是描述 + 回调；真正扣钱、加凝聚力是你在 `onExecuteEvent` 里自己做的。原版的 `ArmyManagementVM` 是自己在 `ApplyCohesionChange()` 里调 `Army.BoostCohesionWithInfluence` 的。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `BoostCurrency`（嵌套枚举） | `public enum BoostCurrency { Gold, Influence }`（`ArmyManagementBoostEventVM.cs:9-13`） | 两种货币。原版军队管理里只用到 `Influence`。因为是嵌套类型，外部引用必须写全 `ArmyManagementBoostEventVM.BoostCurrency`。 |
| `CurrencyToPayForCohesion` | `public BoostCurrency BoostCurrency CurrencyToPayForCohesion { get; }`（`:29`） | **只读**，构造时定型。给 C# 代码用的强类型表示。 |
| `CurrencyType` | `[DataSourceProperty] public int CurrencyType`（`:65-80`） | **同一个值的 `int` 表示**，构造函数第 140 行由 `(int)currencyToPayForCohesion` 赋值。给 widget 按整数选图标/分支用。**两者必须保持同步——只有构造函数会同步它们。** |
| `AmountToPay` | `[DataSourceProperty] public int AmountToPay`（`:48-63`） | 价格。`RefreshValues` 用它填 `GameTexts` 的 `AMOUNT` 变量后生成 `SpendText`。 |
| `AmountOfCohesionToGain` | `[DataSourceProperty] public int AmountOfCohesionToGain`（`:82-97`） | 购买带来的凝聚力增量。同样被 `RefreshValues` 用于 `GAIN_AMOUNT` 变量。 |
| `SpendText` / `GainText` | `[DataSourceProperty] public string SpendText` / `GainText`（`:99-131`） | 已生成好的显示文案，来自 `str_cohesion_boost_spend` 与 `str_cohesion_boost_gain`。**是快照，语言切换后需重新 `RefreshValues()`。** |
| `IsEnabled` | `[DataSourceProperty] public bool IsEnabled`（`:31-46`） | 按钮可用态。构造函数第 135 行硬设为 `true`，此后原版无任何代码修改它——留给你控制。 |
| 构造函数 | `public ArmyManagementBoostEventVM(BoostCurrency, int amountToPay, int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)`（`:133-142`） | 定死货币、价格、增量、回调四件事，同步 `CurrencyType`，然后**主动调一次 `RefreshValues()`** 让文案立刻可用。 |
| `RefreshValues` | `public override void RefreshValues()`（`:144-151`） | 用 `GameTexts.SetVariable` 依次设 `AMOUNT` / `GAIN_AMOUNT` 并生成两段文案。**注意变量槽全局共享，多实例并行刷新会互相覆盖。** |
| `ExecuteEvent` | `private void ExecuteEvent()`（`:153-156`） | 唯一行为：`_onExecuteEvent(this)`。**私有，靠 Gauntlet 按名称绑定触发**，C# 侧无公开入口。 |
| `_onExecuteEvent` | `private readonly Action<ArmyManagementBoostEventVM>`（`:15`） | 构造时传入的回调。**它捕获的宿主生命周期不受本类管理**——这是唯一的泄漏可能。 |

## 真实示例

构造一个购买选项并接上自己的结算逻辑：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library;

public class MyCohesionPurchaseOption
{
    private readonly ArmyManagementBoostEventVM _option;
    private readonly int _influenceCost;

    public MyCohesionPurchaseOption(int influenceCost, int cohesionGain)
    {
        _influenceCost = influenceCost;

        _option = new ArmyManagementBoostEventVM(
            ArmyManagementBoostEventVM.BoostCurrency.Influence,
            influenceCost,
            cohesionGain,
            OnPurchased);
    }

    public ArmyManagementBoostEventVM ViewModel => _option;

    private void OnPurchased(ArmyManagementBoostEventVM option)
    {
        // 回调把 self 传回来，所以可以直接读已填好的属性。
        Clan.PlayerClan.Influence -= option.AmountToPay;

        Army army = MobileParty.MainParty.Army;
        if (army != null)
        {
            army.BoostCohesionWithInfluence(option.AmountOfCohesionToGain, option.AmountToPay);
        }
    }
}
```

生成并读取文案——注意必须紧跟 `RefreshValues`，因为 `GameTexts` 变量槽是共享的：

```csharp
public string[] ReadBoostTexts(ArmyManagementBoostEventVM option)
{
    option.RefreshValues();

    // 紧接着读。另一个实例在此刻调用 RefreshValues() 会覆盖
    // GameTexts 里的 AMOUNT / GAIN_AMOUNT，所以不要把这一步缓存下来延后用。
    return new[] { option.SpendText, option.GainText };
}
```

做可用性判定并写回 `IsEnabled`——因为构造函数把它硬设成了 `true`：

```csharp
public void UpdateAvailability(ArmyManagementBoostEventVM option)
{
    Army army = MobileParty.MainParty.Army;

    bool canBuy = army != null
                  && army.Cohesion + option.AmountOfCohesionToGain <= 100f
                  && Clan.PlayerClan.Influence >= option.AmountToPay;

    option.IsEnabled = canBuy;
}
```

用枚举而不是 int 来做分支，避免依赖魔数：

```csharp
public string DescribeCurrency(ArmyManagementBoostEventVM option)
{
    // 用强类型的 CurrencyToPayForCohesion，而不是猜 CurrencyType 的整数含义。
    if (option.CurrencyToPayForCohesion == ArmyManagementBoostEventVM.BoostCurrency.Influence)
    {
        return "influence";
    }

    return "gold";
}
```

## 风险与边界

- 🔴 **`GameTexts` 变量槽是全局共享的。** `RefreshValues()` 用 `GameTexts.SetVariable("AMOUNT", ...)` / `SetVariable("GAIN_AMOUNT", ...)` 这种**无作用域**的写法。两个购买选项并排显示时，后一次刷新会覆盖前一次设入的值。**必须"刷新后立刻取用"，不可交错。** 这是本类型最容易踩的坑。
- 🔴 **`ExecuteEvent()` 私有。** C# 侧无公开触发路径，只能靠 Gauntlet 绑定。想从代码触发就必须在构造时保留一份自己的委托。
- **它什么都不做。** 不扣钱、不加凝聚力、不改任何战役状态。全部副作用都在你传入的 `onExecuteEvent` 里。把它接进界面而不写回调 = 一个点了没反应的按钮。
- **`IsEnabled` 是摆设**。构造函数硬设 `true`，原版无任何代码改它。它不会自动反映影响力是否够、凝聚力是否已满。**可用性判定必须由你实现。**
- **委托捕获 = 唯一的泄漏点**。`_onExecuteEvent` 通常捕获你的宿主对象，而本类不管理它的生命周期。若你把这个选项缓存在静态字段或比界面更长寿的地方，你的宿主也跟着长寿。mod 实现里优先传 `static` 方法。
- **`CurrencyType` 不会自动同步。** 它只在构造函数里被赋值一次。如果你反射改了 `CurrencyToPayForCohesion`（不可能，它是 get-only）或继承了本类重写它，两者就会不一致。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。购买选项的持久化由你自己的回调负责。
- **无 `OnFinalize` 覆写、无事件注册**，所以本类自身**不产生泄漏**。
- **`SpendText` / `GainText` 是快照**。语言切换后需显式再调 `RefreshValues()`，而全局变量槽问题在此时会再次出现。
- **native 边界**：无。纯托管。
- **跨版本**：`BoostCurrency` 的两个取值、`str_cohesion_boost_spend` / `str_cohesion_boost_gain` 两个文本键、以及原版 `ArmyManagementVM` 里 `_cohesionBoostAmount = 10` 这个硬编码常量，都是 v1.4.5 的形状。本类**原版未被使用**，因此它的行为完全由 Taleworlds 是否保留这个扩展点决定，跨版本稳定性无保证。

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 属性变更通知与 `RefreshValues` 契约来自这里
- ↔ 同级：[ArmyManagementVM](../ArmyManagementVM) —— 同一界面的宿主；**它没有使用本类**，而是硬编码了等价的单一选项（`_cohesionBoostAmount = 10` 与 `ExecuteBoostCohesionManual()`）
- ↔ 同级：[ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent) —— 同界面的另一个扩展点，同样在原版里无人使用
- ↔ 同级：[ArmyManagementItemVM](../ArmyManagementItemVM) —— 同界面的条目视图模型，持有真正的战役状态引用，可与本页的"无状态选项描述"对照
- → 文本系统：[GameTextManager](../../core-extra/GameTextManager) —— `SetVariable` / `FindText` 的宿主，全局变量槽问题源于此
- → 列表容器：[MBBindingList](../../core-extra/MBBindingList) —— 若要把本类接入绑定集合
- → 派生物：[Army](../../campaign-ext/Army)、[MobileParty](../../campaign/MobileParty)、[Clan](../../campaign/Clan)
