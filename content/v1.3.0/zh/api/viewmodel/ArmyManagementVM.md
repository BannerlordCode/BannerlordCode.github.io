---
title: "ArmyManagementVM"
description: "军队管理界面本体：一个 Action 回调进构造、48 个绑定属性出，全靠 OnRefresh 一次重算；ExecuteDone 是唯一真正改动 Campaign 的地方，而 ExecuteCancel / ExecuteReset 靠影响力差值回滚。"
---

# ArmyManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs`（全文 1660 行）

## 概述

这是本批最大的一个类：**48 个绑定属性 + 10 个 public 方法 + 1 个 public 字段 + 1 个嵌套比较器类**。但它的内部结构是高度收敛的——**所有派生状态都由一个 `private void OnRefresh()` 计算**，`ExecuteDone` / `ExecuteCancel` / `ExecuteReset` 三个出口各自改 Campaign，别的都是重算。

构造器（第 22–74 行）按顺序做的事，值得当 checklist 读：

1. 存 `Action onClose`；
2. `new ManagementItemComparer()`；
3. 建三个列表：`PartyList`（可加入的队伍）、`PartiesInCart`（已选中的）、`_partiesToRemove`（本次要移出的）；
4. 建 `_currentParties = new List<MobileParty>()`；
5. 建六个提示 VM（`CohesionHint` / `FoodHint` / `MoraleHint` / `BoostCohesionHint` / `DisbandArmyHint` / `DoneHint`）；
6. `new ElementNotificationVM()` 给 `TutorialNotification`；
7. `CanAffordInfluenceCost = true`；
8. `PlayerHasArmy = (MobileParty.MainParty.Army != null)`；
9. **遍历 `MobileParty.All`**，把「有领袖、`MapFaction == Hero.MainHero.MapFaction`、领袖不是主角、不是商队」的队伍全塞进 `PartyList`，每行 `new ArmyManagementItemVM(OnAddToCart, OnRemove, OnFocus, mobileParty)`；
10. **单独 new 一行 `_mainPartyItem`**：三个回调全传 `null`，队伍是 `Hero.MainHero.PartyBelongedTo`，然后用对象初始化器写 `IsAlreadyWithPlayer = true; IsMainHero = true; IsInCart = true;`；
11. 把已经在玩家军队里的队伍标记为 `Cost = 0 / IsAlreadyWithPlayer = true / IsInCart = true` 并塞进 `PartiesInCart`；
12. 若已有军队，`CohesionBoostCost = ArmyManagementCalculationModel.GetCohesionBoostInfluenceCost(MainParty.Army, 10)`；
13. `_initialInfluence = Hero.MainHero.Clan.Influence`；
14. `OnRefresh()`；
15. 发 `TutorialContextChangedEvent(TutorialContexts.ArmyManagement)`；
16. `SortControllerVM = new ArmyManagementSortControllerVM(this._partyList)`；
17. 注册 `TutorialNotificationElementChangeEvent`；
18. `RefreshValues()`。

**第 10 步的「回调全传 null」是理解本类的前提**：`_mainPartyItem` 是玩家自己的队伍，`ExecuteAction()` 在它上面会走 `OnRemove` 分支，而 `OnRemove` 里有 `if (!this.IsMainHero)` 保护——**所以这一行怎么点都不会把玩家自己移出军队。**

## 心智模型

**把它想成「一个事务编辑器：玩家在一份草稿列表上勾选，`ExecuteDone` 提交，`ExecuteCancel` 回滚，`ExecuteReset` 清空重来」。**

**第一步，`OnRefresh()` 是唯一的状态来源。** 它（ 198–274 行）重算：遍历 `PartiesInCart` 累计人数（`EstimatedStrength`）、已经在编的队伍数、其 `Food` 与 `Morale` 之和；拼五段文案；算 `CanCreateArmy`（`TotalCost <= Influence && 队伍数 > 1`）、`PlayerHasArmy`、`CanBoostCohesion`、`MoraleText` / `FoodText`；调 `UpdateTooltips()`；`PartiesInCart.Sort(this._itemComparer)`；最后算 `CanDisbandArmy` 与它的提示。

`ManagementItemComparer` 只有五行，但规则很特殊：

```csharp
public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)
{
    if (x.IsMainHero) { return -1; }
    return y.IsAlreadyWithPlayer.CompareTo(x.IsAlreadyWithPlayer);
}
```

**主角那一行永远排最前**（`x` 是主角就直接 `-1`），其余按「已经在编的优先」。这个比较器没有方向状态，也不接受 `_isAscending`——**它是固定规则，不是可切换排序。**

**第二步，`ExecuteDone()` 是唯一真正改 Campaign 的地方**，顺序极重要：

```csharp
if (this.CanAffordInfluenceCost)
{
    if (this.NewCohesion > this.Cohesion) { this.ApplyCohesionChange(); }          // 先提升凝聚力
    if (this.PartiesInCart.Count > 1 && MobileParty.MainParty.MapFaction.IsKingdomFaction)
    {
        if (MobileParty.MainParty.Army == null) { ((Kingdom)MainParty.MapFaction).CreateArmy(...); }  // 再按需建军
        foreach (item in PartiesInCart) { if (item.Party != MainParty) { item.Party.Army = MainParty.Army; } }
        ChangeClanInfluenceAction.Apply(Clan.PlayerClan, (float)(-(float)(this.TotalCost - this._influenceSpentForCohesionBoosting)));
    }
    if (this._partiesToRemove.Count > 0) { /* 逐个把 Party.Army 置 null */ }
    this._onClose();
    CampaignEventDispatcher.Instance.OnArmyOverlaySetDirty();
}
```

**第三步，`ExecuteCancel()` 的回滚靠差值：** `ChangeClanInfluenceAction.Apply(Clan.PlayerClan, this._initialInfluence - Clan.PlayerClan.Influence)`。`_initialInfluence` 是构造器里存下的快照。**所以在取消之前不要自己动 `Clan.PlayerClan.Influence`，否则差值算错。**

**第四步，`ExecuteReset()` 把影响力也一起回滚**，然后 `TotalCost = 0`、`_boostedCohesion = 0`、`_influenceSpentForCohesionBoosting = 0`、`_partiesToRemove.Clear()`。

**第五步，`CanCreateArmy` 与 `CanAffordInfluenceCost` 是两回事。** 前者是「勾完之后有没有意义」（人数 > 1 且影响力够），后者是 `ExecuteDone` 的总闸——构造器里硬置 `true`，`UpdateTooltips()` 里通过 `DoneHint.HintText = new TextObject("{=!}" + (CanAffordInfluenceCost ? null : _playerDoesntHaveEnoughInfluenceStr), null)` 表达。

## 关键成员

### 四个执行入口

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ExecuteDone` | `public void ExecuteDone()` | 提交。整段包在 `if (CanAffordInfluenceCost)` 里。**顺序：提升凝聚力 → 按需建军队 → 逐行挂 `Party.Army` → 扣影响力（`TotalCost - _influenceSpentForCohesionBoosting`，即不重复扣提升那部分）→ 移出 `_partiesToRemove` → `_onClose()` → `OnArmyOverlaySetDirty()`。** 无返回值；`CanAffordInfluenceCost` 为 false 时**什么都不做也不提示**。 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 回滚影响力到 `_initialInfluence`，然后 `_onClose()`。**不恢复军队构成**——`Party.Army` 在这个界面里从不提前改动，所以不需要恢复。 |
| `ExecuteReset` | `public void ExecuteReset()` | 把 `PartiesInCart` 清空重建（先逐个 `OnRemove` + `UpdateEligibility`，再塞回 `_mainPartyItem` 与所有 `IsAlreadyWithPlayer` 的行），`NewCohesion = Cohesion`，回滚影响力，`TotalCost = 0`，三个私有计数器清零，最后 `OnRefresh()`。 |
| `ExecuteDisbandArmy` | `public void ExecuteDisbandArmy()` | `CanDisbandArmy` 为 false 时**静默 return**；为 true 时弹一个 `InformationManager.ShowInquiry` 的 Yes/No，对话标题 "Disband Army"，确认动作是私有 `DisbandArmy()`。 |
| `ExecuteBoostCohesionManual` | `public void ExecuteBoostCohesionManual()` | 调 `OnBoostCohesion()`（内部判 `CanBoostCohesion`，则 `TotalCost += CohesionBoostCost`、`_boostedCohesion += 10`、`_influenceSpentForCohesionBoosting += CohesionBoostCost`、`OnRefresh()`），**然后无论 `CanBoostCohesion` 是否为真都发 `ArmyCohesionBoostedByPlayerEvent`**。 |

### 三个生命周期方法

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | 重刷 13 段文案 + `TotalInfluence` / `CohesionBoostAmountText`（用 `GameTexts.SetVariable` 注入），最后 `PartyList.ApplyActionOnAllItems(x => x.RefreshValues())` 与 `PartiesInCart` 同款。 |
| `OnFinalize` | `public override void OnFinalize()` | 先 `base.OnFinalize()`；`UnregisterEvent<TutorialNotificationElementChangeEvent>`；**逐个判空后调四个 `InputKeyItemVM` 的 `OnFinalize()`**（`CancelInputKey` / `DoneInputKey` / `ResetInputKey` / `RemoveInputKey`）。 |
| `Compare` | `public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)` | **这是嵌套类 `ManagementItemComparer` 的方法，不是本类的。** 见下文说明。 |

### 四个热键绑定

`SetResetInputKey(HotKey hotKey)` / `SetCancelInputKey(HotKey)` / `SetDoneInputKey(HotKey)` / `SetRemoveInputKey(HotKey)` —— 每个都是单行 `this.XxxInputKey = InputKeyItemVM.CreateFromHotKey(hotKey, true);`。**第二个参数 `true` 是「需要显示文本」**。它们由界面层（`GauntletKingdomScreen` 等）在初始化时调用。

### 核心绑定属性（节选）

- **两个列表**：`PartyList`（可加入的全部队伍）与 `PartiesInCart`（当前选中）都是 `MBBindingList<ArmyManagementItemVM>`；
- **三个数字**：`TotalStrength`（`(int)EstimatedStrength` 之和）、`TotalCost`、`Cohesion` / `NewCohesion` / `CohesionBoostCost`；
- **四个开关**：`CanCreateArmy` / `CanBoostCohesion` / `CanDisbandArmy` / `CanAffordInfluenceCost` / `PlayerHasArmy`；
- **`SortControllerVM`**（`ArmyManagementSortControllerVM`）与 **`FocusedItem`**（`ArmyManagementItemVM`，由 `OnFocus` 写，是 `null` 化的）；
- **六个提示 VM**：`CohesionHint`（`BasicTooltipViewModel`，每次 `UpdateTooltips` 都 new）与五个 `HintViewModel`；
- **`TutorialNotification`**（`ElementNotificationVM`）；
- **四个 `InputKeyItemVM`** + 它们的 `Set*` 方法；
- 二十余个文案属性（`TitleText` / `BoostTitleText` / `DisbandArmyText` / `DistanceText` / `CostText` / `OwnerText` / `StrengthText` / `ShipCountText` / `LordsText` / `TotalInfluence` / `TotalLords` / `CohesionBoostAmountText` / `TotalStrengthText` / `TotalCostText` / `TotalCostNumbersText` / `CohesionText` / `MoraleText` / `FoodText` / `ClanText` / `NameText` / `CancelText` / `DoneText`）。

### 嵌套类型

`public class ManagementItemComparer : IComparer<ArmyManagementItemVM>` —— 只有一个 `public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`。**它没有方向状态**，`x` 是主角就返回 `-1`，否则按 `IsAlreadyWithPlayer` 降序。**不要把它和 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的六个可切换比较器搞混——那六个才是绑定在表头上的。**

## 真实示例

宿主是界面层：`GauntletKingdomScreen`、`GauntletMapOverlayView`、`GauntletMapBarGlobalLayer` 三处各自 `new ArmyManagementVM(new Action(this.CloseArmyManagement))`。下面是「自己开一个、提交、再回滚」的完整形状：

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.InputSystem;
using TaleWorlds.Library;

public class MyArmyManagementHost
{
    private ArmyManagementVM _vm;

    public void Open()
    {
        // 唯一参数是「关闭时的回调」，其余状态全部从 Campaign 读。
        this._vm = new ArmyManagementVM(new Action(this.Close));

        // 排序状态机和总代价都在 VM 上，读它们来更新自己的 UI。
        MBDebug.Print("总兵力 " + this._vm.TotalStrength
            + " 总代价 " + this._vm.TotalCost
            + " 能否建军 " + this._vm.CanCreateArmy);
    }

    // 四个热键靠 Set*InputKey 灌，第二个参数在 InputKeyItemVM 内部固定为 true。
    // 热键本体从 HotKeyManager.GetCategory(categoryName) 拿到的 GameKeyContext 上取。
    public void BindHotKeys(string categoryName, string doneHotKeyId)
    {
        GameKeyContext category = HotKeyManager.GetCategory(categoryName);
        if (category == null)
        {
            return;
        }

        HotKey done = category.GetHotKey(doneHotKeyId);
        if (done != null)
        {
            this._vm.SetDoneInputKey(done);
        }
    }

    public void Select(ArmyManagementItemVM row)
    {
        // 行的 ExecuteAction 会回调 VM 的 OnAddToCart / OnRemove，
        // 那边会重算 TotalCost 并重新 Sort PartiesInCart。
        row.ExecuteAction();
        MBDebug.Print("已选 " + this._vm.PartiesInCart.Count + " 支队伍");
    }

    public void Commit()
    {
        // ExecuteDone 里唯一真正改 Campaign：建军队、挂 Party.Army、扣影响力。
        this._vm.ExecuteDone();
    }

    public void Rollback()
    {
        // ExecuteCancel 把 Clan.PlayerClan.Influence 差值回滚到构造时的快照。
        this._vm.ExecuteCancel();
    }

    private void Close()
    {
        this._vm = null;
    }
}
```

核心结论：**构造器只吃一个 `Action`，其余全部从 Campaign 现场读；热键是构造完之后单独灌的**，官方也是这样分两步做的。`HotKey` / `GameKeyContext` / `HotKeyManager` 的形状见 [HotKey](../../campaign-ext/HotKey)。

## 风险与边界

- **`_onClose` 为 null 时 `ExecuteDone` / `ExecuteCancel` 在最后一步 NRE。** 前面的 Campaign 改动已经生效了，所以是「改了一半崩了」——构造器传 null 一定要知道后果。
- **`CanAffordInfluenceCost` 构造器里硬置 `true`，没有任何代码把它置回 false。** 在 1.3.0 里 `ExecuteDone` 的 `if (this.CanAffordInfluenceCost)` **恒为真**。想做「影响力不够就拦住」必须自己写这个字段。
- **`ExecuteBoostCohesionManual` 无条件发教程事件。** 即使 `CanBoostCohesion` 为 false、内部 `OnBoostCohesion()` 什么都没做，`ArmyCohesionBoostedByPlayerEvent` 照样发出去。这是 1.3.0 的实际行为。
- **`ExecuteDisbandArmy` 在 `CanDisbandArmy` 为 false 时静默 return。** 原因存在 `DisbandArmyHint.HintText` 里，得靠 UI 提示才看得到。
- **`ExecuteCancel` 的回滚是差值。** 若在取消前你改了 `Clan.PlayerClan.Influence`，回滚会算错。
- **`UpdateTooltips()` 里 `PartyBase.MainParty.MobileParty.Army.RecalculateArmyMorale();`** ——它在 `PlayerHasArmy` 分支里裸调。**每次 `OnRefresh` 都会重算一次军队士气**，这是有实际成本的一笔。
- **`UpdateTooltips` 里 `MBTextManager.SetTextVariable(...)` 循环遍历 `MobileParty.MainParty.Army.Parties`** ——同样是全局文本变量 + O(队伍数) 循环。
- **`UpdateProperties` 那侧的 `CohesionHint` 每次 new 一个 `BasicTooltipViewModel`**，频繁 `Refresh` 会持续分配。
- **`GetCanDisbandArmyWithReason` 有四条否决线**：无军队 / `MainParty.MapEvent != null` / `PlayerSiege.PlayerSiegeEvent != null` / `!CampaignUIHelper.GetMapScreenActionIsEnabledWithReason`。**攻城战期间不能解散。**
- **`ExecuteDone` 里 `((Kingdom)MobileParty.MainParty.MapFaction).CreateArmy(...)` 是硬转。** 前面已经判了 `MapFaction.IsKingdomFaction`，所以转型安全——但这个顺序依赖一旦调乱就会 `InvalidCastException`。
- **移动画面上的军队进行中不要开这个界面。** 构造函数一次性遍历 `MobileParty.All` 并算好每行的 `DistInTime`，界面开着不动。
- **`PartyList` 与 `SortControllerVM` 绑的是私有 `_partyList` 字段。** 属性 `PartyList` 与它同引用，替换属性值不会改变排序器排的那个对象。
- **`_tutorialNotification` 是 public 字段**（第 1632 行 `public ElementNotificationVM _tutorialNotification;`），**和同名的 `TutorialNotification` 属性是两个东西**。后者才是绑定的。

## 跨版本提示

**public 面在五棵源码树里完全一致**：13 个 public 签名（构造器 + `RefreshValues` / `ExecuteDone` / `ExecuteCancel` / `ExecuteReset` / `ExecuteDisbandArmy` / `ExecuteBoostCohesionManual` / `OnFinalize` / 四个 `Set*InputKey`）加上 48 个绑定属性与嵌套类的 `Compare`。

**行数在变**：1661（1.3.0 / 1.3.15）→ **1717（1.4.6 / 1.4.7 / 1.5.3）**。多出的 56 行是私有逻辑与新分支，public 面一字未动。

**跨版本风险在三个上游 API 上：**

- `Army.BoostCohesionWithInfluence(float, int)`（[Army](../../campaign/Army) 第 342 行）——`ApplyCohesionChange` 调它；
- `ArmyManagementCalculationModel` 的 `GetCohesionBoostInfluenceCost` / `CalculatePartyInfluenceCost` / `CalculateNewCohesion` / `CheckPartyEligibility`（[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel)）——**你覆写这个模型就会牵动这里**；
- `Kingdom.CreateArmy(Hero, Settlement, Army.ArmyTypes, ...)` 与 `ChangeClanInfluenceAction.Apply(Clan, float)`（[ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)）。

**这五棵树的 public API 完全一致，所以本页代码跨 1.3 → 1.5 可编译。** 1.4.6 起新增的私有分支属于游戏自己的特性增强，不影响 mod 侧。

## 依赖关系

- UI 底座：[ViewModel](../../core-extra/ViewModel) 提供 48 个属性的通知与 `ExecuteCommand` 派发
- 三处宿主：`GauntletKingdomScreen` / `GauntletMapOverlayView` / `GauntletMapBarGlobalLayer`，各自 `new ArmyManagementVM(new Action(this.CloseArmyManagement))`
- 入口覆盖层：[ArmyMenuOverlayVM](../ArmyMenuOverlayVM) 的 `OpenArmyManagement` 字段与 `ExecuteOpenArmyManagement()`
- 行 VM 与排序：[ArmyManagementItemVM](../ArmyManagementItemVM)（21 个绑定属性 / `Party` / `CanJoinBackWithoutCost`）与 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)（六个表头）
- 提升行：[ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)；教程信号 [ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- 集合容器：[MBBindingList](../../core-extra/MBBindingList)（`ApplyActionOnAllItems` / `Sort` / `ToList`）
- 军队计算：[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel)；写入 [Army](../../campaign/Army)（`BoostCohesionWithInfluence` / `RecalculateArmyMorale` / `Cohesion` / `Morale` / `Parties`）
- 队伍与派系：[MobileParty](../../campaign/MobileParty)（`All` / `MainParty` / `Army` / `MapFaction` / `MapEvent` / `Food` / `Morale`）· [Clan](../../campaign/Clan)（`Influence`）· [Kingdom](../../campaign/Kingdom)（`CreateArmy`）· [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)
- 禁用条件：[PlayerSiege](../../campaign/PlayerSiege) 与 [CampaignUIHelper](../CampaignUIHelper) 的 `GetMapScreenActionIsEnabledWithReason`
- 提示与文本：[BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel) · [HintViewModel](../../core-extra/HintViewModel) · [ElementNotificationVM](../../core-extra/ElementNotificationVM) · [InformationManager](../../core-extra/InformationManager) · [GameTexts](../../core-extra/GameTexts) · [MBTextManager](../../localization/MBTextManager) · [InputKeyItemVM](../../campaign-ext/InputKeyItemVM)
- 教程：[TutorialContexts](../../core-extra/TutorialContexts) · [EventManager](../../core-extra/EventManager)；脏标记 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
- 桶首页：[viewmodel API 分区](../)
