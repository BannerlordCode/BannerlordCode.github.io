---
title: "ArmyManagementVM"
description: "军队管理面板的主视图模型，1451 行里最大的一环。它维护两个队伍列表、实时算凝聚力与花费、并在 ExecuteDone 里真正创建/解散军队与扣除影响力。构造函数一次性把整个面板搭起来，而 Influence 的增减分布在确定、取消、重置三条路径上，语义各不相同。"
---
# ArmyManagementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementVM.cs`

## 概述

这是本目录最大的一个视图模型，也是唯一一个**真的会改变战役状态**的：`ExecuteDone()` 会创建军队、把部队挂进军队、扣影响力、解散军队。它是地图上"军队管理"按钮背后那个面板。

它内部的状态分四组：

- **三个列表**：`PartyList`（全部候选部队）、`PartiesInCart`（已勾选）、`_partiesToRemove`（勾选时被移除的，私有、不绑定）。
- **两个汇总计算**：`OnRefresh()`（`:1167-1226`）一次遍历购物车算总兵力/总花费/总领主数/士气/食物，然后连锁调用 `CalculateCohesion()`、`GetCanDisbandArmyWithReason()`、`UpdateCanConfirm()`、`UpdateTooltips()`。**整个面板的刷新都收敛到这一个私有方法上。**
- **一个排序控制器**：`SortControllerVM`（构造函数第 1021 行创建，传的就是 `_partyList`）。
- **凝聚力的三段记账**：`_boostedCohesion`（玩家点了几次 +10）、`_influenceSpentForCohesionBoosting`（为此花了多少影响力）、以及派生展示值 `NewCohesion`。

## 🔴 影响力的三条路径，语义完全不同

这是本类型最需要小心的地方。同一个 `ChangeClanInfluenceAction.Apply` 在三处以**不同符号、不同含义**出现：

| 方法 | 那一行 | 含义 |
| --- | --- | --- |
| `ExecuteDone`（`:1313`） | `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, -(TotalCost - _influenceSpentForCohesionBoosting));` | **真扣钱**。注意减掉了凝聚力那部分——因为那部分由 `Army.BoostCohesionWithInfluence` 自己扣。 |
| `ExecuteCancel`（`:1345`） | `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, _initialInfluence - Clan.PlayerClan.Influence);` | **补回差额**。所以"取消"不是无操作——它把影响力恢复到打开面板时的值。 |
| `ExecuteReset`（`:1367`） | 同上 | **同样补回差额**，外加清空三个列表与三段凝聚力记账。 |

**推论**：如果不走 `ExecuteDone` 而直接关掉面板（比如宿主没调 `ExecuteCancel`），影响力就既没扣也没退——不变。**如果 `ExecuteCancel` 被调用两次，第二次会重复加钱**，因为 `_initialInfluence` 是常数而当前影响力已经变过了。

## 心智模型

把它读成**「一个两阶段编辑器：勾选阶段只改本地列表并预演数值，确定阶段才真正动战役」**：

- **谁 new 它**：**全树没有 `new ArmyManagementVM(...)`。** 只在它自己的文件里出现（第 972 行的构造函数）。它由 `GauntletViewModelBinder` 按 XML 里的类名反射构造——**这是本目录里唯一靠 prefab 名字而非特性或字典表绑定的视图模型**。也正因如此，`OpenArmyManagement` 那条接缝（见 [ArmyMenuOverlayVM](../ArmyMenuOverlayVM)）才必须由外部注入。
- **谁持引用**：军队管理屏幕。`ArmyMenuOverlayVM.OpenArmyManagement` 那个委托通常指向"创建本类并 push 屏幕"的闭包。
- **绑定到哪个 View 属性**：三十多个 `Text` / `int` / `bool` / `MBBindingList` / `HintViewModel` / `InputKeyItemVM`，全部标了 `[DataSourceProperty]`。
- **什么时候 Dispose**：**覆写了 `OnFinalize`**（`:1422-1430`），做两件事：`UnregisterEvent<TutorialNotificationElementChangeEvent>(...)` 解绑教学事件，以及对四个 `InputKeyItemVM` 逐个 `?.OnFinalize()`。**解绑是完整的。**
- 🔴 **构造函数把整个面板一次搭完。**（`:972-1024`）它遍历 `MobileParty.All` 建候选列表、**把玩家主队单独 new 一份并塞进购物车**、遍历现有军队成员补进购物车、按 10 点算凝聚力花费、记下 `_initialInfluence`、调 `OnRefresh()`、触发 `TutorialContextChangedEvent`、建排序控制器、注册教学事件监听、调 `RefreshValues()`。**没有分阶段初始化。**
- 🔴 **`_mainPartyItem` 是给主队单独造的条目**，三个回调全传 null（`:997-1002`），并手工设 `IsAlreadyWithPlayer = true; IsMainHero = true; IsInCart = true`。`ManagementItemComparer.Compare` 对 `x.IsMainHero` 直接 `return -1`——**主队永远排第一，且不与其它行比较。**
- 🔴 **`TotalCost` 的 setter 带副作用**（`:383`）：`CanAffordInfluenceCost = TotalCost <= 0 || (float)TotalCost <= Hero.MainHero.Clan.Influence;`。**注意 `Hero.MainHero.Clan` 没有 null 检查**——主队不在任何家族里时这里 NRE。而 `TotalCost` 在 `OnAddToCart` / `OnRemove` / `OnBoostCohesion` 里被频繁写入。
- 🔴 **`RemoveInputKey` 的 setter 会向下传播**（`:965-968`）：赋一次值就遍历整个 `PartyList`，把每个条目的 `RemoveInputKey` 也设成同一个值。
- **`ExecuteDone` 里军队的创建有前提**：只有 `PartiesInCart.Count > 1 && MobileParty.MainParty.MapFaction.IsKingdomFaction` 才建军队/挂部队/扣钱。**单支部队或非王国身份时，`ExecuteDone` 只是关闭窗口，什么都没加。**
- 🔴 **解散走的是同一条路。** `ExecuteDisbandArmy()` 弹确认框，确认回调里 `DisbandArmy()` **把购物车逐条 `OnRemove` 后调 `ExecuteDone()`**。所以"解散"= "把所有人移出购物车再确定"。它只在 `CanDisbandArmy` 为真时弹框。
- **`UpdateCanConfirm` 的三段逻辑**（`:1122-1145`）：影响力不够 → `CanConfirm = false` 并给 `DoneHint` 写原因；购物车里只有主队一支 → `CanConfirm = CanDisbandArmy`（即只剩"解散"这一个可用动作）；否则 `CanConfirm = true`。
- **死代码：`OnCloseBoost()`（`:1401-1404`）无调用点。** 它只做 `Game.Current.EventManager.TriggerEvent(new TutorialContextChangedEvent(TutorialContexts.ArmyManagement));`，而构造函数第 1020 行已经做了一次同样的事——**所以打开面板时会触发两次教学上下文变更事件。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public ArmyManagementVM(Action onClose)`（`:972-1024`） | **唯一创建路径（由 `GauntletViewModelBinder` 按 prefab 类名反射调用）**。一次搭完整面板：遍历 `MobileParty.All` 建候选、单独 new 主队条目、合并现有军队成员、算凝聚力花费、记 `_initialInfluence`、`OnRefresh()`、`TriggerEvent(TutorialContextChangedEvent)`、建 `ArmyManagementSortControllerVM(_partyList)`、`RegisterEvent<TutorialNotificationElementChangeEvent>`、`RefreshValues()`。 |
| `ExecuteDone` | `public void ExecuteDone()`（`:1285-1341`） | **唯一真正改变战役状态的方法**。影响力不足直接 return；购物车只剩主队则转 `ExecuteDisbandArmy`；`NewCohesion > Cohesion` 则 `ApplyCohesionChange()`；然后建军队/挂部队/`ChangeClanInfluenceAction.Apply` 扣钱、处理 `_partiesToRemove`、`_onClose()`、`CampaignEventDispatcher.Instance.OnArmyOverlaySetDirty()`。 |
| `ExecuteCancel` | `public void ExecuteCancel()`（`:1343-1347`） | **不是无操作**：`_initialInfluence - Clan.PlayerClan.Influence` 补回差额，再 `_onClose()`。**连调两次会重复加钱。** |
| `ExecuteReset` | `public void ExecuteReset()`（`:1349-1373`） | 把购物车逐条 `OnRemove`、重放主队与原属部队、补回影响力差额、`TotalCost = 0`、三段凝聚力记账归零、清 `_partiesToRemove`，最后 `OnRefresh()`。 |
| `ExecuteDisbandArmy` | `public void ExecuteDisbandArmy()`（`:1375-1384`） | `CanDisbandArmy` 为真才弹 `InformationManager.ShowInquiry` 确认框，确认回调 → `DisbandArmy()`（`:1392-1399`：逐条 `OnRemove` 后 `ExecuteDone()`）。 |
| `ExecuteBoostCohesionManual` | `public void ExecuteBoostCohesionManual()`（`:1386-1390`） | 先 `OnBoostCohesion()` 再 `TriggerEvent(new ArmyCohesionBoostedByPlayerEvent())`。**触发点在 `if (CanBoostCohesion)` 之外，且此刻凝聚力尚未真正加上**——见 [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)。 |
| `OnRefresh` | `private void OnRefresh()`（`:1167-1226`） | **整个面板的刷新收敛点。** 遍历购物车算总兵力/领主数/士气/食物 → 设 `TotalStrength` / 三个 `Text` / `CanCreateArmy` / `PlayerHasArmy` → `CalculateCohesion()` → `CanBoostCohesion` + 提示 → `PartiesInCart.Sort(_itemComparer)` → `GetCanDisbandArmyWithReason()` → `UpdateCanConfirm()` → `UpdateTooltips()`。 |
| `OnAddToCart` / `OnRemove` | `private void ...(ArmyManagementItemVM)`（`:1086-1120`） | 勾选/取消。`OnAddToCart` 触发 `PartyAddedToArmyByPlayerEvent`、从 `_partiesToRemove` 移除、`CanJoinBackWithoutCost = false`（原本已随军）、`TotalCost += Cost`；`OnRemove` 反向并设 `CanJoinBackWithoutCost = true`。两者结尾都 `OnRefresh()`。 |
| `ApplyCohesionChange` | `private void ApplyCohesionChange()`（`:1147-1154`） | 真正的凝聚力结算：`MobileParty.MainParty.Army.BoostCohesionWithInfluence(NewCohesion - Cohesion, _influenceSpentForCohesionBoosting)`。**只在 `ExecuteDone` 里、当 `NewCohesion > Cohesion` 时被调。** |
| `GetCanDisbandArmyWithReason` | `private bool ...(out TextObject disabledReason)`（`:1228-1252`） | 四段判定：无军队 / 在 MapEvent 中 / 攻城战（`PlayerSiege.PlayerSiegeEvent != null`）/ `CampaignUIHelper.GetMapScreenActionIsEnabledWithReason`。每段失败都带一条可读原因。 |
| `OnFinalize` | `public override void OnFinalize()`（`:1422-1430`） | **解绑完整**：`UnregisterEvent<TutorialNotificationElementChangeEvent>(OnTutorialNotificationElementIDChange)`，再对四个 `InputKeyItemVM` 逐个 `?.OnFinalize()`。 |
| `ManagementItemComparer`（嵌套） | `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>`（`:20-30`） | **只排购物车，不排候选列表。** `x.IsMainHero` 直接 `return -1`（主队排第一且不与他人比较）；否则 `y.IsAlreadyWithPlayer.CompareTo(x.IsAlreadyWithPlayer)`（原已在军的排前）。**只有两个键。** |
| `TotalCost` | `[DataSourceProperty] public int TotalCost`（`:371-387`） | **setter 带副作用**：每次赋值都重算 `CanAffordInfluenceCost = TotalCost <= 0 \|\| (float)TotalCost <= Hero.MainHero.Clan.Influence;`。**`Hero.MainHero.Clan` 无 null 检查**，且该属性在勾选/取消/提升凝聚力时被频繁写入。 |
| `RemoveInputKey` | `[DataSourceProperty] public InputKeyItemVM RemoveInputKey`（`:950-970`） | **setter 向下传播**：赋一次值就遍历整个 `PartyList`，把每个条目的 `RemoveInputKey` 也设成同一个值（`:965-968`）。 |
| `OnCloseBoost` 🔴 | `private void OnCloseBoost()`（`:1401-1404`） | **死代码**，无调用点。它只 `TriggerEvent(new TutorialContextChangedEvent(...))`——而构造函数第 1020 行已经做过一次，**所以打开面板会触发两次教学上下文变更。** |
| `_cohesionBoostAmount` | `private const int _cohesionBoostAmount = 10`（`:44`） | 每次提升的凝聚力点数。**硬编码常量**，`RefreshValues` 里还用它填 `GameTexts.SetVariable("NUMBER", 10)`。模组无法调整。 |
| `SortControllerVM` | `[DataSourceProperty] public ArmyManagementSortControllerVM`（`:167-182`） | 构造时创建，传的是 `_partyList`——**所以它排的是候选列表，不是购物车**。见 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)。 |

## 真实示例

复刻两条影响力路径——**确定是扣，取消是补**：

```csharp
using TaleWorlds.CampaignSystem.Actions;

public void CommitArmyCost(int totalCost, int influenceSpentForCohesionBoosting)
{
    // 与 ExecuteDone:1313 同形：扣钱时减去凝聚力那部分，
    // 因为那部分已由 Army.BoostCohesionWithInfluence 自己扣掉了。
    ChangeClanInfluenceAction.Apply(
        Clan.PlayerClan,
        -(totalCost - influenceSpentForCohesionBoosting));
}

public void RefundArmyCost(float initialInfluence)
{
    // 与 ExecuteCancel:1345 同形：补回差额。
    // 因此「取消」不是无操作；连调两次会重复加钱。
    ChangeClanInfluenceAction.Apply(
        Clan.PlayerClan,
        initialInfluence - Clan.PlayerClan.Influence);
}
```

复刻解散的判定与原因：

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Localization;

public bool CanDisbandWithReason(out TextObject reason)
{
    // 与 GetCanDisbandArmyWithReason (:1228-1252) 同样的四段判定
    if (MobileParty.MainParty.Army == null)
    {
        reason = new TextObject("{=iSZTOeYH}No army to disband.");
        return false;
    }

    if (MobileParty.MainParty.MapEvent != null)
    {
        reason = new TextObject("{=uipNpzVw}Cannot disband the army right now.");
        return false;
    }

    if (PlayerSiege.PlayerSiegeEvent != null)
    {
        reason = GameTexts.FindText("str_action_disabled_reason_siege");
        return false;
    }

    if (!CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(out reason))
    {
        return false;
    }

    reason = TextObject.GetEmpty();
    return true;
}
```

复刻购物车的排序规则——**注意只有两个键，且主队短路**：

```csharp
public int CompareCartItems(ArmyManagementItemVM x, ArmyManagementItemVM y)
{
    // 与 ManagementItemComparer.Compare (:20-30) 逐行相同：
    // 主队直接返回 -1，永远第一，且不与其它行比较。
    if (x.IsMainHero)
    {
        return -1;
    }

    return y.IsAlreadyWithPlayer.CompareTo(x.IsAlreadyWithPlayer);
}
```

计算"确认后还会剩多少凝聚力"：

```csharp
using TaleWorlds.CampaignSystem.Party;

public int ProjectCohesionAfterJoining(Army army, List<ArmyManagementItemVM> cart, int currentBoost)
{
    if (army == null)
    {
        return 0;
    }

    // 与 CalculateCohesion (:1058-1079) 同样的算法
    int newCohesion = Math.Min((int)army.Cohesion + currentBoost, 100);

    ArmyManagementCalculationModel model = Campaign.Current.Models.ArmyManagementCalculationModel;

    for (int i = 0; i < cart.Count; i++)
    {
        ArmyManagementItemVM item = cart[i];
        if (item.Party.IsMainParty)
        {
            continue;
        }

        if (!item.IsAlreadyWithPlayer)
        {
            newCohesion = model.CalculateNewCohesion(army, item.Party.Party, newCohesion, 1);
        }
    }

    return newCohesion;
}
```

自己算"确认按钮是否可用"，顺带避开 `Hero.MainHero.Clan` 的裸解引用：

```csharp
public bool ComputeCanConfirm(int totalCost, int cartCount, bool onlyMainHero, bool canDisband)
{
    // 与 UpdateCanConfirm (:1122-1145) 同构，但用 null 安全的写法
    // —— 原版在 TotalCost 的 setter 里裸取 Hero.MainHero.Clan。
    Clan playerClan = Clan.PlayerClan;
    int influence = playerClan != null ? playerClan.Influence : 0;
    bool canAfford = totalCost <= 0 || totalCost <= influence;

    if (!canAfford)
    {
        return false;
    }

    if (cartCount == 1 && onlyMainHero)
    {
        return canDisband;
    }

    return true;
}
```

## 风险与边界

- 🔴 **没有代码创建入口。** 全树只在本文件出现（第 972 行构造函数），由 `GauntletViewModelBinder` 按 XML 里的类名反射构造。**要替换它必须改 prefab 里的类名，而不是改调用代码。**
- 🔴 **`ExecuteCancel` 与 `ExecuteReset` 都会补钱。** `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, _initialInfluence - Clan.PlayerClan.Influence)` —— 因为 `_initialInfluence` 是开面板时的常数，**连调两次就会把影响力加回两次**。宿主必须保证"确定 / 取消 / 关闭"三条路径互斥。
- 🔴 **`ExecuteCancel` 不是无操作。** 很多宿主以为"取消 = 什么都不做"，实际上它**会写影响力**。若面板被强杀（不调 Cancel 也不调 Done），影响力保持不变——**三种退出方式留下三种不同结果。**
- 🔴 **`TotalCost` 的 setter 裸取 `Hero.MainHero.Clan`**（`:383`）。主队不属于任何家族时 NRE。而 `TotalCost` 在 `OnAddToCart`、`OnRemove`、`OnBoostCohesion`、`ExecuteReset` 里都被写，**一次简单勾选就可能触发。**
- 🔴 **教学上下文事件被触发两次。** 构造函数第 1020 行触发一次，而死方法 `OnCloseBoost()` 做的是同一件事却没有调用点——**当前实际只触发一次，但那段代码的存在说明设计上本应有第二次（关闭提升面板时）而未接上。** 依赖该事件计数的 mod 需自行验证。
- **`ArmyCohesionBoostedByPlayerEvent` 时机错配。** `ExecuteBoostCohesionManual` 只做账面记账（`OnBoostCohesion`），真正的 `Army.BoostCohesionWithInfluence` 要等 `ExecuteDone` 里 `ApplyCohesionChange()`。**玩家点三次再取消 = 事件三次、凝聚力零次。**
- 🔴 **军队创建有前提。** `PartiesInCart.Count > 1 && MobileParty.MainParty.MapFaction.IsKingdomFaction` 才建军队并挂部队。**单支部队或非王国身份时 `ExecuteDone` 只是关闭窗口。**
- **`ManagementItemComparer` 只排购物车**，而 `SortControllerVM` 排的是 `_partyList`。**两个排序器作用在不同列表上**，不要混淆。且前者只有"主队优先"和"原已在军优先"两个键——**没有任何数值排序。**
- **三个 `TextObject` 提示靠 `GameTexts` 变量拼装**（`TotalCostText` / `TotalStrengthText` / `TotalCostNumbersText` 用 `LEFT` / `RIGHT` / `NUM` / `TOTAL_INFLUENCE`）。`GameTexts` 变量槽全局共享，**别在本类之外并行做同样的 `SetVariable` 拼装。**
- **`UpdateTooltips` 里有一处无副作用的表达式**（`:1260`）：`TaleWorlds.Library.MathF.Round(PartyBase.MainParty.MobileParty.Army.Morale, 1).ToString("0.0");` —— **算完就丢弃**，没有赋给任何变量。是原版遗留。
- **解绑完整。** `OnFinalize` 解绑教学事件并对四个 `InputKeyItemVM` 逐个 `?.OnFinalize()`。**`?.` 意味着它们可能为 null 且那是合法的**——宿主没设过按键提示就关闭面板不会崩。
- **大量裸解引用 `MobileParty.MainParty`**（`CalculateCohesion`、`OnRefresh`、`ExecuteDone`、`ApplyCohesionChange` 等十几处）。**无头环境或战役未完全初始化时崩在这里。**
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。但**面板的结果会写进战役**——`item.Party.Army`、`ChangeClanInfluenceAction.Apply`、`Army.BoostCohesionWithInfluence`、`Kingdom.CreateArmy`。**这是本目录里唯一有存档可见副作用的视图模型。**
- **`RefreshValues` 里 `TutorialNotification.RefreshValues();`（`:1055`）没有 `?.`。** 而同结构的 [ArmyMenuOverlayVM](../ArmyMenuOverlayVM) 用的是 `TutorialNotification?.RefreshValues()`。本类因为构造函数第 986 行必定 new 了它，所以安全——**但子类若跳过基类构造就 NRE。**
- **native 边界**：纯托管，但下游大量触及 native——`Army` 的凝聚力/士气重算、`Kingdom.CreateArmy`、编队与影响力写入。
- **跨版本**：`TutorialContexts.ArmyManagement`、`PartyAddedToArmyByPlayerEvent`、`ArmyManagementCalculationModel` 的三个方法（`GetCohesionBoostInfluenceCost` / `CalculateNewCohesion` / `CheckPartyEligibility`）、`Army.BoostCohesionWithInfluence(int, int)` 的两参签名（见 `ArmyManagementVM.cs:1152`）、`Kingdom.CreateArmy(Hero, Settlement, Army.ArmyTypes)`（见 `:1304`），以及 `_cohesionBoostAmount = 10` 都是 v1.4.5 的形状。

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 属性变更通知与 `OnFinalize` 契约
- ↔ 同级：[ArmyManagementItemVM](../ArmyManagementItemVM) —— **三个列表里的条目类型**，`ManagementItemComparer` 与 `CalculateCohesion` 都直接读它的属性
- ↔ 同级：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) —— 排序 `_partyList` 的六个比较器
- ↔ 同级：[ArmyMenuOverlayVM](../ArmyMenuOverlayVM) —— **通过 `OpenArmyManagement` 委托打开本面板**的只读覆层
- ↔ 同级：[ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent) —— 由 `ExecuteBoostCohesionManual` 触发的信标事件
- ↔ 同级：[ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM) —— 同界面的扩展点，原版未使用
- → 计算模型：[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel)
- → 派生物：[Army](../../campaign-ext/Army)、[MobileParty](../../campaign/MobileParty)、[Clan](../../campaign/Clan)、[Kingdom](../../campaign/Kingdom)、[Hero](../../campaign/Hero)
- → 动作与派发：[ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)、[CampaignEvents](../../campaign-ext/CampaignEvents)
- → 提示与教学：[HintViewModel](../HintViewModel)、[BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel)、[ElementNotificationVM](../../core-extra/ElementNotificationVM)、[TutorialContexts](../../core-extra/TutorialContexts)
- → 绑定：[MBBindingList](../../core-extra/MBBindingList)、[GameTextManager](../../core-extra/GameTextManager)
