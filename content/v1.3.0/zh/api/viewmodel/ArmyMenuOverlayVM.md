---
title: "ArmyMenuOverlayVM"
description: "地图覆盖层的军队面板：OnFrameTick 每帧刷新 CanManageArmy 与每个队伍的任务标记，Refresh 做列表差分同步，IssueList 是全 1.3.0 都没人填过的只读懒列表。"
---

# ArmyMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs`（全文 622 行）

## 概述

这是地图界面右侧「军队」覆盖层的 VM，带 `[MenuOverlay("ArmyMenuOverlay")]` 特性——**由 [GameMenuOverlayFactory](../GameMenuOverlayFactory) 按字符串 id 反射创建，构造器无参**（`GauntletMapOverlayView` 里是 `return new ArmyMenuOverlayVM();`）。

它有 **12 个绑定属性 + 1 个只读属性 + 1 个 public 字段**，以及 **5 个 public/protected 方法**。构造器（第 40–61 行）做了九件事，其中最值得注意的是**它在构造器里就调了一次 `this.Refresh()`**：

```csharp
public ArmyMenuOverlayVM()
{
    this.PartyList = new MBBindingList<GameMenuPartyItemVM>();
    base.CurrentOverlayType = 2;
    base.IsInitializationOver = false;
    this._army = (MobileParty.MainParty.Army ?? MobileParty.MainParty.TargetParty.Army);
    this._savedPartyList = new List<MobileParty>();
    this.CohesionHint = new BasicTooltipViewModel();
    this.ManCountHint = new BasicTooltipViewModel();
    this.FoodHint = new BasicTooltipViewModel();
    this.TutorialNotification = new ElementNotificationVM();
    this.ManageArmyHint = new HintViewModel();
    this.Refresh();
    this._contextMenuItem = null;
    CampaignEvents.ArmyOverlaySetDirtyEvent.AddNonSerializedListener(this, new Action(this.Refresh));
    CampaignEvents.PartyAttachedAnotherParty.AddNonSerializedListener(this, new Action<MobileParty>(this.OnPartyAttachedAnotherParty));
    CampaignEvents.OnTroopRecruitedEvent.AddNonSerializedListener(this, new Action<Hero, Settlement, Hero, CharacterObject, int>(this.OnTroopRecruited));
    Game.Current.EventManager.RegisterEvent<TutorialNotificationElementChangeEvent>(new Action<TutorialNotificationElementChangeEvent>(this.OnTutorialNotificationElementIDChange));
    this._cohesionConceptObj = Concept.All.SingleOrDefault(c => c.StringId == "str_game_objects_army_cohesion");
    base.IsInitializationOver = true;
}
```

`IsInitializationOver` 被显式设了两次：`false` 在 `Refresh()` 之前，`true` 在一切挂完之后。**这是基类 [GameMenuOverlay](../GameMenuOverlay) 的「初始化期间不渲染」开关**——`Refresh()` 内部也要翻这个开关（`Refresh` 里也有 `IsInitializationOver = false` → 跑完 → `true`）。

## 心智模型

**把它想成「一个每帧被问一次『军队现在什么样』的只读面板，而不是一个持有军队的对象」。**

**第一步，理解 `Refresh()` 是差分同步而不是重建。** 它把 `IsInitializationOver` 压成 false、调两个私有方法、再抬回 true：

- `UpdateLists()`（第 184–224 行）用 `_army.Parties.Except(_savedPartyList)` 与 `_savedPartyList.Except(_army.Parties)` 求出「新增」和「消失」两个列表，只对差集做 `Add` / `RemoveAt`。**然后它单独处理领袖队伍**：如果领袖不在列表第 0 位且已在列表里，就先 `RemoveAt` 再 `new GameMenuPartyItemVM(...) { IsLeader = true }` `Insert(0, ...)`。**所以领袖永远在第一行。**
- `UpdateProperties()`（第 165–182 行）重算 `Food`（领袖队伍 + 所有附加队伍的 `Food` 之和）、`Cohesion`（`(int)MobileParty.MainParty.Army.Cohesion`）、`ManCountText`（`CampaignUIHelper.GetPartyNameplateText`）、三个 `BasicTooltipViewModel` 的内容工厂、`IsCohesionWarningEnabled`（`Cohesion <= 30f`，常量 `CohesionWarningMin = 30f`）、`IsPlayerArmyLeader`。

**第二步，理解 `OnFrameTick(float dt)` 是本类唯一的每帧入口。** 它调 `base.OnFrameTick(dt)`，然后：

```csharp
TextObject hintText;
this.CanManageArmy = CampaignUIHelper.GetCanManageCurrentArmyWithReason(out hintText);
this.ManageArmyHint.HintText = hintText;
for (int i = 0; i < this.PartyList.Count; i++) { this.PartyList[i].RefreshQuestStatus(); }
if (this._isVisualsDirty) { this.RefreshVisualsOfItems(); this._isVisualsDirty = false; }
```

**每帧遍历整个 `PartyList` 调 `RefreshQuestStatus()`** 是这里最重的一笔开销。而 `_isVisualsDirty` 是一个**节流标志**：只有真的需要重画视觉时才走 `RefreshVisualsOfItems()` 逐行 `RefreshVisual()`。

`_isVisualsDirty` 只由 `OnPartyAttachedAnotherParty` 置 true——**条件是「有队伍附加到玩家军队上」**。注意这个回调有三次判空链：`party.AttachedTo != null` → `party.AttachedTo.Army != null` → `party.AttachedTo.Army == MobileParty.MainParty.Army`。**这是纯引用比较，官方没做优化。**

**第三步，理解 `IssueList` 是一个真正的死属性。** 它的 getter 是懒建的：

```csharp
[DataSourceProperty]
public MBBindingList<StringItemWithHintVM> IssueList
{
    get
    {
        if (this._issueList == null) { this._issueList = new MBBindingList<StringItemWithHintVM>(); }
        return this._issueList;
    }
}
```

**只读、无 setter，全 1.3.0 源码树里没有任何一处往它 `Add`。** 对照 [SettlementMenuOverlayVM](../SettlementMenuOverlayVM) 第 38、97、150 行——那边有 `new` / `Clear()` / `Add(new StringItemWithHintVM(...))` 三处，本类一处都没有。**所以这行在界面上永远是空的。** 这是一个可以从源码逐行核对的事实，不是猜测。

**第四步，理解 `OpenArmyManagement` 是 public 字段而不是方法。** `ExecuteOpenArmyManagement()` 判三层：主队伍有军队 → 军队有领袖队伍 → 领袖是主队伍，然后调 `this.OpenArmyManagement?.Invoke()`。**宿主 [ArmyManagementVM](../ArmyManagementVM) 的构造器收一个 `Action onClose`，而这个字段是进入它的入口**（`GauntletKingdomScreen` / `GauntletMapOverlayView` / `GauntletMapBarGlobalLayer` 三个地方各自 `new ArmyManagementVM(new Action(this.CloseArmyManagement))`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public ArmyMenuOverlayVM()` | **无参**，因为反射按 `[MenuOverlay("ArmyMenuOverlay")]` 创建。第 43 行 `MobileParty.MainParty.TargetParty.Army` 是裸访问——`TargetParty` 为 null 时 NRE。 |
| `RefreshValues` | `public override void RefreshValues()` | 先刷 `TutorialNotification`（判空），再调 `this.Refresh()`。**返回 void。** |
| `OnFinalize` | `public override void OnFinalize()` | 先 `base.OnFinalize()`，再逐个 `ClearListeners(this)` 清三个 `CampaignEvents`，最后 `UnregisterEvent<TutorialNotificationElementChangeEvent>`。**这是本类唯一被外部间接调用的清理钩子。** |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` | **每帧被基类调用**（见 [GameMenuOverlay](../GameMenuOverlay) 第 308 行）。`dt` 参数**完全没用**（源码没读它）。刷 `CanManageArmy` / `ManageArmyHint` / 逐行 `RefreshQuestStatus()` / 条件重画视觉。 |
| `Refresh` | `public sealed override void Refresh()` | **`sealed`**——派生类无法覆写。判 `PartyBase.MainParty.MobileParty.Army != null`，是则重取 `_army` 并 `UpdateLists()` + `UpdateProperties()`。**无返回值。** |
| `ExecuteOpenArmyManagement` | `public void ExecuteOpenArmyManagement()` | 三层判空后调 `OpenArmyManagement` 字段（public `Action`）。**字段为 null 时静默 return。** |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | **`protected`，外部不可调。** 清空并重建右键菜单：可能加「解散」「捐兵」「与领袖对话」「百科」，最后 `CampaignEventDispatcher.Instance.OnCharacterPortraitPopUpOpened(characterObject)`。**队伍没有领袖英雄时 `Debug.FailedAssert` 后直接 return。** |
| `OpenArmyManagement` | `public Action OpenArmyManagement` | **public 字段**，宿主写入。 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` | 教程高亮元素。 |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` | 「管理军队」按钮的悬停提示，`OnFrameTick` 每帧重写 `HintText`。 |
| `Cohesion` | `public int Cohesion { get; set; }` | 军队凝聚力，取自 `MobileParty.MainParty.Army.Cohesion`。 |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` | `<= 30f`（常量 `CohesionWarningMin`）时为 true，UI 据此变红。 |
| `CanManageArmy` | `public bool CanManageArmy { get; set; }` | `GetCanManageCurrentArmyWithReason` 的结果，**每帧重算**。 |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader { get; set; }` | `MobileParty.MainParty.Army.LeaderParty == MobileParty.MainParty`。 |
| `ManCountText` | `public string ManCountText { get; set; }` | `CampaignUIHelper.GetPartyNameplateText(_army.LeaderParty, true)`。 |
| `Food` | `public int Food { get; set; }` | 领袖 + 全部附加队伍的 `Food` 之和（float 累加后 `(int)` 截断）。 |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` | 队伍列表，**领袖恒在索引 0 且 `IsLeader == true`**。 |
| `CohesionHint` / `ManCountHint` / `FoodHint` | `public BasicTooltipViewModel XxxHint { get; set; }` | 三个 `BasicTooltipViewModel`，**每次 `UpdateProperties` 都被 new 一个新的**（内容是 `() => CampaignUIHelper.GetArmyXxxTooltip(_army)` 闭包）。 |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; }` | **只读、懒建、全 1.3.0 无人填充。** 见上文心智模型。 |

私有成员：`_mergedPartiesAndLeaderParty`（一个 `yield return` 迭代器，**源码里 `yield break` 之后还有两行不可达代码，是反编译器残留**）、`_army` / `_savedPartyList` / `_isVisualsDirty` / `_cohesionConceptObj` / `_latestTutorialElementID` / `_tutorialNotification` 等字段，以及 `UpdateProperties()` / `UpdateLists()` / `ExecuteCohesionLink()` / `RefreshVisualsOfItems()` / `OnPartyAttachedAnotherParty` / `OnTroopRecruited` / `OnTutorialNotificationElementIDChange` 七个私有方法。

## 真实示例

要给自己的地图覆盖层加一行「打开军队管理」，要做的全部事情就是挂 `OpenArmyManagement` 字段并调 `ExecuteOpenArmyManagement()`：

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay;
using TaleWorlds.Library;

public class MyArmyOverlayHost
{
    private readonly ArmyMenuOverlayVM _overlay;
    private readonly ArmyManagementVM _management;

    public MyArmyOverlayHost()
    {
        // 覆盖层是无参构造：特性 [MenuOverlay("ArmyMenuOverlay")] 让工厂反射创建它。
        this._overlay = new ArmyMenuOverlayVM();

        // 军队管理 VM 收一个「关掉我自己」的回调；
        // 本例里就是把覆盖层上的这条记录也一起重建。
        this._management = new ArmyManagementVM(new Action(this.OnManagementClosed));

        // ExecuteOpenArmyManagement 会走三层判空后调用这个字段。
        this._overlay.OpenArmyManagement = this.OpenManagement;
    }

    private void OpenManagement()
    {
        // 官方要求玩家自己是军队领袖：
        // MobileParty.MainParty.Army.LeaderParty == MobileParty.MainParty
        MBDebug.Print("打开军队管理");
    }

    private void OnManagementClosed()
    {
        // 关掉管理界面后强制覆盖层重算一遍列表与属性。
        // Refresh 是 sealed override，外部只能这样调，不能覆写。
        this._overlay.Refresh();
    }

    public bool CanOpen()
    {
        return this._overlay.CanManageArmy && this._overlay.IsPlayerArmyLeader;
    }
}
```

`ArmyManagementVM(Action onClose)` 的构造器签名与 `GauntletKingdomScreen` 第 233 行、`GauntletMapOverlayView` 第 222 行、`GauntletMapBarGlobalLayer` 第 287 行的官方调用完全一致。**注意 `new ArmyMenuOverlayVM()` 在主队伍还没有军队时会 NRE**（构造器里 `MobileParty.MainParty.TargetParty.Army` 是裸访问），所以这个 host 只应在地图界面已就绪时构造。

## 风险与边界

- **构造器在 `Campaign.Current` 上下文之外不安全。** 第 43 行 `MobileParty.MainParty.Army ?? MobileParty.MainParty.TargetParty.Army`：主队伍无军队且 `TargetParty` 为 null → NRE。**反射工厂创建它时战役已经跑起来了，手工 new 就未必。**
- **`Refresh` 是 `sealed`。** 派生类不能改刷新逻辑，只能在 `OnFrameTick` / `RefreshValues` 里加东西。
- **`OnFrameTick(float dt)` 忽略 `dt`。** 它是一个固定成本的重活，`dt` 完全没读——**不能靠调帧率来省。**
- **每帧遍历 `PartyList`。** 军队队伍多时 `RefreshQuestStatus()` 的累计成本可见。
- **`CohesionHint` / `ManCountHint` / `FoodHint` 每次刷新都 new。** 每次 `Refresh()` 分配三个 `BasicTooltipViewModel`。频繁 `Refresh` 会持续分配。
- **`IssueList` 永远为空。** 想显示军队相关的问题提示，得自己往里 `Add`，或者去改 [SettlementMenuOverlayVM](../SettlementMenuOverlayVM) 那套写法。
- **`Cohesion` / `IsCohesionWarningEnabled` / `IsPlayerArmyLeader` 读的是 `MobileParty.MainParty.Army`，而 `_army` 可能是 `TargetParty.Army`。** **玩家不在军队里时这两个属性与 `UpdateLists()` 的内容来源不同**——这是一个真实的语义分裂，不是笔误。
- **`_mergedPartiesAndLeaderParty` 是不可达代码。** `yield break` 之后还有 `default(List<MobileParty>.Enumerator)` 和 `yield break`，编译器不会执行到。**别拿它当参考实现。**
- **`ExecuteCohesionLink` 是 `private` 且带 `Debug.FailedAssert`。** `_cohesionConceptObj` 是 `Concept.All.SingleOrDefault(c => c.StringId == "str_game_objects_army_cohesion")`——**语言文件里没这条就永远是 null**，点凝聚力链接会触发断言失败。外部调不到这个方法，所以实际影响面限于 UI 绑定。
- **`TutorialNotification` 在 `RefreshValues` 里判空、在 `OnTutorialNotificationElementIDChange` 里不判。** 事件回调里 `this.TutorialNotification.ElementID = ...` 是裸访问。
- **`_contextMenuItem` 在构造器末尾被显式置 `null`**（在 `Refresh()` 之后）。`Refresh` → `UpdateLists` 不会动它，所以右键菜单拿到的一定是基类在用户点击时写的那个。

## 跨版本提示

**public 面在五棵源码树里零变化**：7 个 public/protected 签名（构造器 / `RefreshValues` / `OnFinalize` / `OnFrameTick` / `Refresh` / `ExecuteOpenArmyManagement` / `ExecuteOnSetAsActiveContextMenuItem`）加 13 个绑定属性与 1 个 public 字段，逐字相同。

**行数与私有实现在变**：622 → 631（1.3.15）→ 631（1.4.6 / 1.4.7）→ **644（1.5.3）**。多出来的行数来自私有逻辑，`Refresh` 仍是 `sealed override`，属性集合未变。

**跨版本上真正会打断编译的是被比较的数据面**：

- `Campaign.Current.Models.EncounterModel.GetEncounterJoiningRadius`（`ExecuteOnSetAsActiveContextMenuItem` 用它算「捐兵」菜单项的可见性）；
- `PartyBase.MainParty.MobileParty.Army` 与 `MobileParty.MainParty.TargetParty.Army` 的形状；
- `CampaignUIHelper.GetArmyCohesionTooltip` / `GetArmyManCountTooltip` / `GetArmyFoodTooltip` / `GetCanManageCurrentArmyWithReason` / `GetPartyNameplateText`。

**这些在五棵树里都保持原样，所以本页代码跨 1.3 → 1.5 可编译。** 唯一确定会变的是 1.5.3 里某个私有分支的增补——不影响 public 面。

## 依赖关系

- 基类与覆盖层协议：[GameMenuOverlay](../GameMenuOverlay) 提供 `IsInitializationOver` / `CurrentOverlayType` / `ContextList` / `OnFrameTick(float)` / `ExecuteOnSetAsActiveContextMenuItem` 的默认实现；其 UI 底座是 [ViewModel](../../core-extra/ViewModel)
- 工厂与特性：[GameMenuOverlayFactory](../GameMenuOverlayFactory) 按 `[MenuOverlay("ArmyMenuOverlay")]` 创建实例；界面侧入口是 `GauntletMapOverlayView`（`return new ArmyMenuOverlayVM();`）
- 打开的管理界面：[ArmyManagementVM](../ArmyManagementVM)（`Action onClose` 构造器），连同其排序器 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 与行 VM [ArmyManagementItemVM](../ArmyManagementItemVM)
- 列表行：[GameMenuPartyItemVM](../GameMenuPartyItemVM)（`RefreshProperties` / `RefreshVisual` / `RefreshQuestStatus`）
- 军队与队伍：[Army](../../campaign/Army)（`LeaderParty` / `Parties` / `Cohesion` / `Morale` / `RecalculateArmyMorale`）与 [MobileParty](../../campaign/MobileParty)（`MainParty` / `TargetParty` / `Food` / `AttachedParties` / `Morale` / `MapEvent` / `CurrentSettlement`）
- 提示容器：[BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel) / [HintViewModel](../../core-extra/HintViewModel) / [ElementNotificationVM](../../core-extra/ElementNotificationVM) / [StringItemWithHintVM](../../core-extra/StringItemWithHintVM)（后者本类只读不填）
- 文案与可用性总闸：[CampaignUIHelper](../CampaignUIHelper) 的 `GetCanManageCurrentArmyWithReason` / `GetMapScreenActionIsEnabledWithReason` / `GetPartyNameplateText` / `GetArmy*Tooltip`
- 失效与脏标记事件：[CampaignEvents](../../campaign/CampaignEvents) 的 `ArmyOverlaySetDirtyEvent` / `PartyAttachedAnotherParty` / `OnTroopRecruitedEvent`；教程事件走 [EventManager](../../core-extra/EventManager)
- 遭遇判定：[PlayerEncounter](../../campaign/PlayerEncounter) 与 [EncounterModel](../../campaign/EncounterModel) 决定「捐兵 / 对话」菜单项
- 桶首页：[viewmodel API 分区](../)
