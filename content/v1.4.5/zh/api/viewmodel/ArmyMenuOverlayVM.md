---
title: "ArmyMenuOverlayVM"
description: "军队菜单覆层（点主菜单时的军队面板）。它带 [MenuOverlay(\"ArmyMenuOverlay\")] 特性由工厂反射创建，每帧 OnFrameTick 刷新可管理状态，靠四个 CampaignEvents 事件保持最新，并暴露一个公开的 OpenArmyManagement 委托供外部接管跳转。"
---
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`  
**Base:** `GameMenuOverlay`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/ArmyMenuOverlayVM.cs`

## 概述

在地图上打开主菜单、切到军队页，右侧那一栏就是本类。它是 `GameMenuOverlay` 的子类，顶部带着一个特性：

```csharp
[MenuOverlay("ArmyMenuOverlay")]
public class ArmyMenuOverlayVM : GameMenuOverlay
```

🔴 **全树检索 6,222 个 `.cs` 文件，没有任何一处 `new ArmyMenuOverlayVM()`。** 它由游戏菜单的覆层工厂按 `[MenuOverlay]` 特性反射创建——就像地图通知那批条目一样，**无法从代码替换**。区别在于地图通知用一张私有 `Dictionary<Type,Type>`，而覆层用的是特性 + 扫描。

它与 `ArmyManagementVM` 是**两件不同的事**：本类是**只读的信息面板**（凝聚力、兵力、食物、成员列表、当前问题），`ArmyManagementVM` 是**编辑面板**（勾选部队、花影响力）。两者的桥梁是那个公开委托：

```csharp
public Action OpenArmyManagement;
```

以及：

```csharp
public void ExecuteOpenArmyManagement()
{
    Army armyToUse = ArmyToUse;
    if (armyToUse != null && GetIsPlayerArmyLeader(armyToUse))
    {
        OpenArmyManagement?.Invoke();
    }
}
```

**`OpenArmyManagement` 是 public 字段，`?.Invoke()`。** 也就是说外部可以把自己打开 `ArmyManagementVM` 的逻辑挂上去。**这个字段就是两者的接缝。**

## 心智模型

把它读成**「一个每帧自检、按事件增量刷新的只读面板，外加一个可被外部接管的跳转出口」**：

- **谁 new 它**：**没有人手写 new。** 由游戏菜单覆层工厂按 `[MenuOverlay("ArmyMenuOverlay")]` 特性反射创建。
- **谁持引用**：游戏菜单的覆层集合；`OnFinalize` 时由工厂销毁。
- **绑到哪个 View 属性**：十二个。`Cohesion`、`Food`、`ManCountText` 是三个汇总值；`IsCohesionWarningEnabled`（`army.Cohesion <= 30f`，`CohesionWarningMin = 30f` 常量）、`IsPlayerArmyLeader`、`CanManageArmy` 是三个状态位；`PartyList` / `IssueList` 是两个列表；`CohesionHint` / `ManCountHint` / `FoodHint` / `ManageArmyHint` 是四个提示；`TutorialNotification` 是教学通知。
- **什么时候 Dispose**：**覆写了 `OnFinalize`，且解绑完整**（`:322-329`）：

  ```csharp
  CampaignEvents.ArmyOverlaySetDirtyEvent.ClearListeners(this);
  CampaignEvents.PartyAttachedAnotherParty.ClearListeners(this);
  CampaignEvents.OnTroopRecruitedEvent.ClearListeners(this);
  Game.Current.EventManager.UnregisterEvent<TutorialNotificationElementChangeEvent>(OnTutorialNotificationElementIDChange);
  ```

  **三个事件 + 一个 EventManager 订阅，逐个清掉。** 这是本目录里解绑最规范的写法之一——与 `AlleyUnderAttackMapNotificationItemVM`（注册了却不覆写）正好是两个极端。**继承本类时新增任何监听，都必须在这里补上对应解绑。**

- 🔴 **`ArmyToUse` 有回退逻辑，会看目标队伍。**（`:55-76`）

  ```csharp
  object obj = MobileParty.MainParty?.Army;
  if (obj == null)
  {
      MobileParty mainParty = MobileParty.MainParty;
      if (mainParty == null) { return null; }
      MobileParty targetParty = mainParty.TargetParty;
      if (targetParty == null) { return null; }
      obj = targetParty.Army;
  }
  return (Army)obj;
  ```

  **主队没军队时，会去看主队正在交战的目标队伍的军队。** 这意味着这个面板可能在"你还没加入军队"时显示**别人的**军队。`CanManageArmy` 另外由 `CampaignUIHelper.GetCanManageCurrentArmyWithReason` 每帧独立判断。

- 🔴 **`Refresh()` 在 `ArmyToUse == null` 时什么都不做**（`:382-391`），连 `IsInitializationOver` 都不动。而 `UpdateLists` / `UpdateProperties` 内部各有一次 `Debug.FailedAssert("Army is null...")`——**那两处在正常路径下不可达**，因为 `Refresh` 已经先判过 null。它们是防御性重复检查。
- **事件驱动是"标脏"而非"全刷"。** `ArmyOverlaySetDirtyEvent` → `Refresh()`（全刷）；`PartyAttachedAnotherParty` → 只设 `_isVisualsDirty = true`，由 `OnFrameTick` 在下一帧调 `RefreshVisualsOfItems()`；`OnTroopRecruitedEvent` → 只刷新那一个队伍条目。**三种粒度不同，是有意的性能设计。**
- **`OnFrameTick(float dt)` 每帧做三件事**（`:366-380`）：刷 `CanManageArmy` 与其原因、逐条 `PartyList[i].RefreshQuestStatus()`、若 `_isVisualsDirty` 则刷视觉并清标志。**这是本类唯一的每帧成本。**
- **`ExecuteOnSetAsActiveContextMenuItem` 在四层嵌套的 if 里构建右键菜单**：解散部队（仅当玩家是军团长、不在 MapEvent、且不是军团长本人队伍）、赠送部队、与领袖对话、查看百科。最后若队伍无领袖则 `Debug.FailedAssert`。
- 🔴 **死代码：`ExecuteCohesionLink()`（`:468-478`）没有任何调用点。** 本文件内 `ExecuteCohesionLink` 出现 2 次：`:468` 的定义，和 `:476` 那句 `Debug.FailedAssert` 的**字符串字面量**里。**它想跳转到凝聚力百科页，但没有任何代码调它**——要么 prefab 用别的名字绑，要么就是遗留。`_cohesionConceptObj`（`:311` 构造时用 `Concept.All.SingleOrDefault(c => c.StringId == "str_game_objects_army_cohesion")` 查出来的）因此也只被这个死方法使用。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `[MenuOverlay]` 特性 | `[MenuOverlay("ArmyMenuOverlay")]`（`:16`） | **唯一的创建路径**。全树无 `new ArmyMenuOverlayVM()`，由游戏菜单覆层工厂按此特性反射构造。**因此无法从代码替换实现。** |
| `OpenArmyManagement` | `public Action OpenArmyManagement`（`:21`） | **public 字段，不是属性。** 本类与 `ArmyManagementVM` 之间的接缝——外部可赋值以接管"打开军队管理"的跳转。`ExecuteOpenArmyManagement` 用 `?.Invoke()` 调用它。 |
| `ExecuteOpenArmyManagement` | `public void ExecuteOpenArmyManagement()`（`:459-466`） | 先判 `ArmyToUse != null` **且** `GetIsPlayerArmyLeader(armyToUse)`，才 `OpenArmyManagement?.Invoke()`。**不是军团长则点了没反应。** |
| `ArmyToUse` | `private Army ArmyToUse`（`:55-76`） | **带目标队伍回退**的军队解析：主队没军队时看 `mainParty.TargetParty?.Army`。所以面板可能显示**敌对方的军队**。两处 null 检查逐级收窄。 |
| `Cohesion` / `Food` / `ManCountText` | `[DataSourceProperty]`（`:112/197/180`） | 三个汇总值。`Food` 把军团长队伍**与所有 AttachedParties 的食物累加**（`:402-407`）；`ManCountText` 走 `CampaignUIHelper.GetPartyNameplateText(..., includeAttachedParties: true)`。 |
| `IsCohesionWarningEnabled` | `[DataSourceProperty] public bool`（`:129-144`） | `army.Cohesion <= 30f`，阈值来自 `private const float CohesionWarningMin = 30f;`（`:19`）。**是硬编码常量，不可配置。** |
| `IsPlayerArmyLeader` | `[DataSourceProperty] public bool`（`:163-178`） | 由 `GetIsPlayerArmyLeader(army)` 得出（`:528-535`）：军团长是主队、或主队正在作为目标交战。**它把"主队去打这支军队"也算作玩家军团长。** |
| `CanManageArmy` | `[DataSourceProperty] public bool`（`:146-161`） | **每帧**由 `CampaignUIHelper.GetCanManageCurrentArmyWithReason(out reason)` 重算，原因写进 `ManageArmyHint.HintText`。 |
| `PartyList` | `[DataSourceProperty] public MBBindingList<GameMenuPartyItemVM>`（`:214-229`） | 军队成员列表。`UpdateLists`（`:417-457`）做**双向差分**：先移除已不在军队里的，再把新增的插到队首（军团长）或末尾。 |
| `IssueList` | `[DataSourceProperty] public MBBindingList<StringItemWithHintVM>`（`:282-293`） | **唯一 getter 内有副作用的绑定属性**：getter 遇 null 就当场 `new MBBindingList<StringItemWithHintVM>()`。**所以读它会在你没赋值的情况下创建对象。** |
| `CohesionHint` / `ManCountHint` / `FoodHint` | `[DataSourceProperty] public BasicTooltipViewModel`（`:231/248/265`） | 三个提示，**每次 `UpdateProperties` 都 `new` 一遍**（`:410-412`），闭包捕获当前 `army`。**反复分配。** |
| `OnFrameTick` | `public override void OnFrameTick(float dt)`（`:366-380`） | 每帧：刷 `CanManageArmy` + 原因；逐条 `PartyList[i].RefreshQuestStatus()`；若 `_isVisualsDirty` 则 `RefreshVisualsOfItems()` 并清标志。**本类唯一的每帧成本。** |
| `Refresh` | `public sealed override void Refresh()`（`:382-391`） | `ArmyToUse == null` 时**整个方法直接返回**；否则用 `IsInitializationOver` 夹住 `UpdateLists()` + `UpdateProperties()`。 |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)`（`:331-364`） | 四层嵌套条件下构建右键菜单项：解散部队 / 赠送部队 / 与领袖对话 / 百科。末尾若队伍无领袖则 `Debug.FailedAssert`。 |
| `OnFinalize` | `public override void OnFinalize()`（`:322-329`） | **解绑完整**：三个 `CampaignEvents` 各 `ClearListeners(this)`，加 `UnregisterEvent<TutorialNotificationElementChangeEvent>`。**本目录解绑规范写法之一。** |
| `ExecuteCohesionLink` 🔴 | `private void ExecuteCohesionLink()`（`:468-478`） | **死代码**。本文件内出现 2 次：`:468` 定义 + `:476` 断言字符串里的名字。**无任何调用点。** 它引用的 `_cohesionConceptObj` 因此也只服务于它。 |
| `CohesionWarningMin` | `private const float CohesionWarningMin = 30f`（`:19`） | 凝聚力警告阈值。**硬编码私有常量**，模组无法调整。 |

## 真实示例

解析"该显示哪支军队"——**注意目标队伍回退**：

```csharp
using TaleWorlds.CampaignSystem.Party;

public Army ResolveArmyToShow()
{
    // 与 ArmyToUse (ArmyMenuOverlayVM.cs:55-76) 同一条路径
    Army own = MobileParty.MainParty?.Army;
    if (own != null)
    {
        return own;
    }

    if (MobileParty.MainParty == null)
    {
        return null;
    }

    MobileParty target = MobileParty.MainParty.TargetParty;
    if (target == null)
    {
        return null;
    }

    // 主队没军队时会显示正在交战的目标的军队。
    return target.Army;
}
```

接管"打开军队管理"的跳转——**这是两面板之间的接缝**：

```csharp
using TaleWorlds.CampaignSystem.Party;

public class MyArmyOverlayHost
{
    public void Attach(ArmyMenuOverlayVM overlay, System.Action openManagement)
    {
        // public 字段，直接赋值即可接管跳转。
        overlay.OpenArmyManagement = () =>
        {
            if (MobileParty.MainParty.Army != null)
            {
                openManagement();
            }
        };
    }
}
```

自己算一个可配置版警告阈值——**原版的 30f 是私有常量**：

```csharp
public bool ShouldWarnAboutCohesion(Army army, float warningThreshold)
{
    if (army == null)
    {
        return false;
    }

    // 原版用 private const float CohesionWarningMin = 30f（不可配置），
    // 这里把阈值变成可调参数。
    return army.Cohesion <= warningThreshold;
}
```

把队伍列表的差分逻辑复刻成你自己的工具方法：

```csharp
public List<MobileParty> DiffParties(Army army, List<MobileParty> currentRows)
{
    List<MobileParty> result = new List<MobileParty>();

    for (int i = 0; i < army.Parties.Count; i++)
    {
        MobileParty party = army.Parties[i];
        bool present = false;

        for (int j = 0; j < currentRows.Count; j++)
        {
            if (currentRows[j] == party)
            {
                present = true;
                break;
            }
        }

        if (!present)
        {
            result.Add(party);
        }
    }

    return result;
}
```

复刻"军团长插到队首"的插入规则：

```csharp
using TaleWorlds.CampaignSystem.Party;

public bool ShouldInsertAtFront(MobileParty party, Army army)
{
    // UpdateLists (:443-450) 的规则：军团长的队伍插到索引 0，其余追加。
    return party == army.LeaderParty;
}
```

## 风险与边界

- 🔴 **无代码创建入口。** 全树无 `new ArmyMenuOverlayVM()`；由 `[MenuOverlay("ArmyMenuOverlay")]` 特性反射构造。**想替换实现必须动特性扫描机制**，而不是改一行调用。
- 🔴 **`ArmyToUse` 会显示别人的军队。** 主队无军队时回退到 `MainParty.TargetParty?.Army`。**"我不在军队里"时这个面板可能正显示敌对方的军队数据**——读 `Cohesion` / `PartyList` 时务必先确认 `IsPlayerArmyLeader`。
- 🔴 **`ExecuteCohesionLink` 是死代码。** 本文件内 `ExecuteCohesionLink` 仅出现于 `:468`（定义）与 `:476`（断言字符串）。**没有任何代码调用它**，`_cohesionConceptObj` 也只被它使用。**不要照它写"跳转到百科"的示例——那条路是断的。**
- 🔴 **`IssueList` 的 getter 有副作用。** getter 在 `_issueList == null` 时**当场 new 一个**并返回。**读一次就等于赋值一次**——它与其它绑定属性的"只读"语义不同。
- **`Refresh()` 在无军队时完全空转。** 连 `IsInitializationOver` 都不动，所以初始化指示会停在未完成态。`UpdateLists` / `UpdateProperties` 里那两处 `Debug.FailedAssert("Army is null...")` 在正常路径上**不可达**，属防御性重复。
- **三个 `BasicTooltipViewModel` 每次 `UpdateProperties` 都重新 `new`**（`:410-412`），各自闭包捕获当前 `army`。事件密集触发时会有可测量的分配压力。
- **每帧成本固定。** `OnFrameTick` 逐条 `RefreshQuestStatus()`，队伍多时是 O(n) 每帧。
- **解绑是完整的**——三个 `CampaignEvents` + 一个 `EventManager` 订阅，逐个清掉。**这是本目录的规范写法**；继承时新增监听必须同步在 `OnFinalize` 补解绑。
- **`OpenArmyManagement` 是 public 字段。** 可随时被外部改写或置 null。**它可能在你不知情时被别人接管。**
- **`_contextMenuItem` 是基类的 protected 字段**，被 `ExecuteOnSetAsActiveContextMenuItem` 大量使用且**无 null 检查**（`:335` 起）。若在它被设置之前触发就是 NRE。
- **`ExecuteOnSetAsActiveContextMenuItem` 末尾有 `Debug.FailedAssert`**（`:358`）——队伍无领袖时触发。**开发版会中断，发布版行为取决于断言实现。**
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。面板是纯 UI 态。
- **`_cohesionConceptObj` 查不到就是 null。** 构造函数用 `Concept.All.SingleOrDefault(...)`（`:311`）——**`SingleOrDefault` 在有重复匹配时会抛异常**，不只是返回默认值。
- **native 边界**：本类纯托管。但 `MobileParty.MainParty.TargetParty`、`army.Parties`、百科跳转的下游会触及战役与展示层。
- **跨版本**：`[MenuOverlay]` 特性的字符串 id `"ArmyMenuOverlay"`、`MenuOverlayContextList.ArmyDismiss` / `DonateTroops` / `ConverseWithLeader` / `Encyclopedia` 四个枚举值、`CampaignUIHelper.GetArmyCohesionTooltip` / `GetArmyFoodTooltip` / `GetArmyManCountTooltip` 三个方法，以及 `CohesionWarningMin = 30f` 都是 v1.4.5 的形状。**特性字符串改了会静默导致覆层不再被创建。**

## 依赖关系

- ↑ 父类：[GameMenuOverlay](../GameMenuOverlay) —— 提供 `CurrentOverlayType`、`IsInitializationOver`、`_contextMenuItem`、`ContextList`、`OnFrameTick`、`Refresh`
- ↔ 同级：[ArmyManagementVM](../ArmyManagementVM) —— **通过 `OpenArmyManagement` 委托相连**的编辑面板；两者读同一批战役对象
- ↔ 同级：[ArmyManagementItemVM](../ArmyManagementItemVM) —— 编辑面板里的部队条目；本类的 `PartyList` 用的是另一套 `GameMenuPartyItemVM`
- ↔ 同级：[GameMenu](../../campaign/GameMenu) —— 持有覆层集合的父菜单
- ↔ 同级：[GameMenuPartyItemVM](../GameMenuPartyItemVM) —— 列表条目类型，`RefreshQuestStatus` / `RefreshVisual` / `RefreshProperties` 都在它上面
- → 军队与队伍：[Army](../../campaign-ext/Army)、[MobileParty](../../campaign/MobileParty)、[Hero](../../campaign/Hero)、[Settlement](../../campaign/Settlement)
- → 提示：[BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel)、[HintViewModel](../HintViewModel)、[ElementNotificationVM](../../core-extra/ElementNotificationVM)
- → 事件源：[CampaignEvents](../../campaign-ext/CampaignEvents) —— 三个监听的来源
- → 百科：[Concept](../../campaign/Concept)、[EncyclopediaManager](../../campaign/EncyclopediaManager)
