---
title: "ArmyCohesionStep2Tutorial"
description: "教程项：军队管理界面里「先加凝聚力再说话」的两步提示第二步。构造函数写死三个 UI 属性；激活条件是五个与的硬门（context==ArmyManagement 且无菜单 且玩家是军队长 且凝聚力<30）。"
---

# ArmyCohesionStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `[Tutorial("ArmyCohesionStep2")] public class ArmyCohesionStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`（→ `../TutorialItemBase`）
**File:** `StoryMode.GauntletUI/Tutorial/ArmyCohesionStep2Tutorial.cs`（51 行，全文如下）

```csharp
[Tutorial("ArmyCohesionStep2")]
public class ArmyCohesionStep2Tutorial : TutorialItemBase
{
    public ArmyCohesionStep2Tutorial()
    {
        base.Placement = TutorialItemVM.ItemPlacements.Right;
        base.HighlightedVisualElementID = "ArmyManagementBoostCohesionButton";
        base.MouseRequired = true;
    }

    public override bool IsConditionsMetForCompletion() => this._playerBoostedCohesion;
    public override void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj) { this._playerBoostedCohesion = true; }
    public override TutorialContexts GetTutorialsRelevantContext() => 10;
    public override bool IsConditionsMetForActivation()
        => TutorialHelper.CurrentContext == 10
        && Campaign.Current.CurrentMenuContext == null
        && MobileParty.MainParty.Army != null
        && MobileParty.MainParty.Army.LeaderParty == MobileParty.MainParty
        && MobileParty.MainParty.Army.Cohesion < TutorialHelper.MaxCohesionForCohesionTutorial;
}
```

## 概述

教程系统里的一小格。整个类只有 51 行，实质内容是：**一个 bool 标志 + 一组 UI 属性 + 五个硬门激活条件**。

三个 UI 属性在构造函数里写死，全部来自 [TutorialItemBase](../TutorialItemBase) 的 `protected set` 属性：

| 属性 | 值 | 作用 |
| --- | --- | --- |
| `Placement` | `TutorialItemVM.ItemPlacements.Right` | 提示框停靠屏幕右侧 |
| `HighlightedVisualElementID` | `"ArmyManagementBoostCohesionButton"` | 高亮的那个按钮的 XML id —— 就是「增加凝聚力」按钮 |
| `MouseRequired` | `true` | 需要玩家动鼠标（纯手柄无法完成这一步） |

`GetTutorialsRelevantContext()` 返回 **`10`**，而 [TutorialContexts](../../core-extra/TutorialContexts) 的第 11 个成员是 `ArmyManagement`（`None=0, PartyScreen=1, InventoryScreen=2, CharacterScreen=3, MapWindow=4, RecruitmentWindow=5, ClanScreen=6, KingdomScreen=7, Mission=8, EncyclopediaWindow=9, ArmyManagement=10`）。**这里写的是裸字面量 `10`，不是枚举名**——同文件 `IsConditionsMetForActivation` 里的 `TutorialHelper.CurrentContext == 10` 也是裸字面量。

## 心智模型

**把它当成「一个由事件驱动的置位标志 + 一个每次重新求值的激活门」。**

数据流非常简单：

```
激活条件（每次被问时重新求值，不缓存）
   TutorialHelper.CurrentContext == 10 (ArmyManagement)
   && Campaign.Current.CurrentMenuContext == null
   && MainParty.Army != null
   && MainParty.Army.LeaderParty == MainParty      ← 玩家必须是军队长
   && MainParty.Army.Cohesion < 30f                ← TutorialHelper.MaxCohesionForCohesionTutorial
        │
        ▼  满足
   教程激活，高亮 "ArmyManagementBoostCohesionButton"，提示框在右侧
        │
        ▼  玩家点了那个按钮
   OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent)
        │  this._playerBoostedCohesion = true;      ← 唯一写入点
        ▼
   IsConditionsMetForCompletion() 返回 true → 教程关闭
```

三点心智模型要点：

**一、激活条件里有三个「零值访问」没有守卫。** `Campaign.Current`、`MobileParty.MainParty`、`TutorialHelper.CurrentContext` 都是直接解引用。`Campaign.Current` 在 campaign 之前是 null，`MobileParty.MainParty` 在没有主队时也是 null。**引擎调用 `IsConditionsMetForActivation` 的时机决定了它会不会炸**——因为教程项通常是在教程 VM 初始化时才被枚举，那已经在 campaign 之后了。

**二、`_playerBoostedCohesion` 一旦置位永不复位。** 只有 setter，没有在任何地方 `= false`。**这个教程项实例的生命周期内它单调递增。** 对比同族的 [ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial) 之类——step1 的完成条件是即时的（检查当前状态），step2 必须等事件。

**三、`Cohesion < 30f` 这个门在激活后就不再被检查。** `IsConditionsMetForActivation` 只在「要不要激活」时被问；一旦激活，教程靠 `IsConditionsMetForCompletion` 结束。所以玩家激活后即使凝聚力涨到 100，教程也不会提前消失——**必须真的点一次按钮**。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public ArmyCohesionStep2Tutorial()`（`:20`） | 只设三个属性，**没有任何状态初始化**（`_playerBoostedCohesion` 靠字段默认 `false`）。**无参构造**——教程系统需要能自己 new 它。 |
| `IsConditionsMetForCompletion` | `public override bool`（`:27`） | 直接返回 `_playerBoostedCohesion`。**不做任何额外检查**——不看玩家是不是还满足激活条件。 |
| `OnArmyCohesionByPlayerBoosted` | `public override void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`（`:32`） | 唯一的行为：**无脑置 true，事件参数 `obj` 完全不用**。这是整个类里唯一被调用的写入路径。 |
| `GetTutorialsRelevantContext` | `public override TutorialContexts`（`:37`） | `return 10;` —— 返回类型是 [TutorialContexts](../../core-extra/TutorialContexts) 但**返回的是 int 字面量**，编译器隐式转换。语义是 `ArmyManagement`。 |
| `IsConditionsMetForActivation` | `public override bool`（`:43`） | 五个 `&&`。**三个成员访问零守卫**（`Campaign.Current` / `MainParty` 三次 / `TutorialHelper.CurrentContext`）。**没有「已完成就不再激活」的短路**——只有 `_playerBoostedCohesion` 会被完成判定读，激活判定不看它。 |
| `_playerBoostedCohesion` | `private bool`（`:50`） | **唯一字段**，**没有 `[SaveableField]`、没有序列化**。存档读回后教程系统会重新 new 一个实例，这个标志归零。 |
| （类级特性） | `[Tutorial("ArmyCohesionStep2")]`（`:18`） | [TutorialAttribute](../TutorialAttribute)（`SandBox.GauntletUI.Tutorial`），只有一个 `readonly string TutorialIdentifier` 字段。**教程的稳定标识 —— 存档、UI 文案、依赖排序都靠这个字符串。** |

## 真实示例

判断「这一刻该不该激活」（这与引擎的写法等价，但加了守卫）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

private static bool ShouldShowCohesionStep2()
{
    if (Campaign.Current == null)                 // 引擎没查：:44
    {
        return false;
    }
    MobileParty main = MobileParty.MainParty;
    if (main == null || main.Army == null)         // 引擎查了 Army，但没查 MainParty 本身
    {
        return false;
    }
    return main.Army.LeaderParty == main
        && main.Army.Cohesion < 30f;               // 30f = TutorialHelper.MaxCohesionForCohesionTutorial
}
```

写一个自己的教程项（同族 step3，形状完全照抄）：

```csharp
using SandBox.GauntletUI.Tutorial;
using TaleWorlds.Core;

[Tutorial("MyModArmyStep3")]
public class MyModArmyStep3Tutorial : TutorialItemBase
{
    private bool _done;

    public MyModArmyStep3Tutorial()
    {
        this.Placement = TutorialItemVM.ItemPlacements.Right;
        this.HighlightedVisualElementID = "ArmyManagementRaiseMoraleButton";
        this.MouseRequired = true;
    }

    public override bool IsConditionsMetForCompletion() => this._done;

    public override void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)
    {
        this._done = true;
    }

    public override TutorialContexts GetTutorialsRelevantContext()
    {
        return TutorialContexts.ArmyManagement;     // 写枚举名，别写 10
    }

    public override bool IsConditionsMetForActivation()
    {
        MobileParty main = MobileParty.MainParty;
        return TutorialHelper.CurrentContext == TutorialContexts.ArmyManagement
            && main?.Army != null
            && main.Army.LeaderParty == main;
    }
}
```

## 风险与边界

- **`Campaign.Current` / `MobileParty.MainParty` 零守卫。** `:44-48` 连续解引用三次 `MobileParty.MainParty` 和一次 `Campaign.Current`。`Campaign.Current == null` 时第一个 `&&` 就 NRE。**如果你在自己 mod 的更早阶段（campaign 启动前）主动遍历教程项，这里会炸**——引擎自己的调用时机在 campaign 之后所以没暴露。
- **裸字面量 `10` 而不是 `TutorialContexts.ArmyManagement`。** `:39` 与 `:44` 各一处。**如果上游往 `TutorialContexts` 中间插入新成员，`ArmyManagement` 的序号会变，而这个教程项会静默指向错误的 context** ——激活条件永远为 false，教程再也不出现，且没有任何日志。
- **`_playerBoostedCohesion` 不参与存档。** 它是 private bool，没有 `[SaveableField]`。存档读回后教程系统重建实例 → 标志归零 → **一个「已经加过凝聚力但教程还没被关掉」的存档会重新触发教程**。反过来，玩家激活教程后立刻存档，读档后教程会重新激活。
- **`Cohesion < 30f` 只在激活时求值一次。** 玩家激活教程、还没点按钮就把凝聚力灌满——教程不会自己消失，也不会因为条件不再满足而失效。**这是设计如此，不是 bug，但要知道「这个门只管进入，不管停留」。**
- **激活条件里没有「已完成就不激活」。** `IsConditionsMetForActivation` 不知道 `_playerBoostedCohesion` 的存在。所以玩家已经加过凝聚力、但**在 flag 为 false 的时候**（例如读档后 flag 归零），只要凝聚力和位置条件满足，教程还会再激活一次。
- **`OnArmyCohesionByPlayerBoosted` 不检查事件来源。** 事件参数 `obj` 完全不用。**任何来源的「玩家提升凝聚力」事件（包括 AI 盟友军队提升凝聚力，如果那个事件也走这条）都会把教程标记完成** ——类名说的是 "ByPlayer"，但判断逻辑完全依赖调用方传对了事件。
- **同族 step1 / step2 的分工是硬编码的两个教程项。** `ArmyCohesionStep1Tutorial` 的激活条件是 `TutorialHelper.CurrentContext == 4`（`MapWindow`）+ 军队长 + `Cohesion < 30f`；step2 是 `== 10`（`ArmyManagement`）+ 多一个 `CurrentMenuContext == null`。**两个教程项在条件上高度重叠（都要求军队长 + 凝聚力<30），只是 context 不同。** 这就是为什么 step2 多了一个 `CurrentMenuContext == null` —— 军队管理界面通常以菜单形式打开，不查这个会两个教程同时弹。
- **`MouseRequired = true` 是硬编码的。** 手柄玩家无法完成这一步（点不了按钮），教程会一直挂着。

## 怎么用

### 怎么拿到它

和 [ArmyCohesionStep1Tutorial](../ArmyCohesionStep1Tutorial) 同理，**不要 new，也不要注册**——它同样靠反射被自动发现。特性是 `[Tutorial("ArmyCohesionStep2")]`（`StoryMode.GauntletUI/Tutorial/ArmyCohesionStep2Tutorial.cs:12`），类声明在 `:13`，无参构造在 `:16`。

发现链完全一样，位置在 `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs` 的 `RegisterTutorialTypes()`（`:605`）：读特性（`:611`）→ 取无参构造（`:618`）→ 反射调用（`:625`）→ 用特性里的字符串做 key 存入（`:633`）。

**两页的区别在回调**：Step1 没有 `OnArmyCohesionByPlayerBoosted`，而 Step2 有这个覆写（`ArmyCohesionStep2Tutorial.cs:30`）。也就是说 **Step1 是「先激活、再看条件」，Step2 是「等事件来推动」**。

### 典型用法

写同族的下一条教程项：

```csharp
using SandBox.GauntletUI.Tutorial;

[Tutorial("MyMod_Step2")]                       // 无参构造 + 特性，两个缺一不可
public class MyModStep2Tutorial : TutorialItemBase
{
    private bool _isActivated;

    public MyModStep2Tutorial()
    {
        // 只设字段，不要碰 Campaign.Current（反射调用发生在 :625）。
        this.HighlightedVisualElementID = "SomeRealElementId";
    }

    public override TutorialContexts GetTutorialsRelevantContext()
    {
        return TutorialContexts.MapWindow;
    }

    public override bool IsConditionsMetForActivation()
    {
        // 把结果粘滞进字段，回调里才能读到「本轮是否激活」。
        this._isActivated = TutorialHelper.CurrentContext == TutorialContexts.MapWindow;
        return this._isActivated;
    }

    public override void OnArmyCohesionByPlayerBoosted(
        ArmyCohesionBoostedByPlayerEvent obj)
    {
        // 只有激活期间才算数，否则激活前发生的事件也会被计进去。
        if (this._isActivated)
        {
            OnTutorialEnd();
        }
    }
}
```

### 最容易踩的坑

**在事件回调里不判「本轮是否激活」就累加。** `OnArmyCohesionByPlayerBoosted`（`:30`）这类回调**在整个教程会话期间都会被调用**，激活与否由 `IsConditionsMetForActivation`（`:42`）决定，而不是由回调本身决定。后果：在教程激活之前发生的那些事件**也会被你计数**，等教程激活时进度已经领先一步——玩家看到的是「我什么都没干/tutorial 就已经完成了」。所以官方那种「先算完存进字段，回调里读同一个字段」的写法不是风格问题，是必需的。

第二个坑是构造函数里访问 campaign 对象。`:625` 是 `constructor.Invoke(new object[0])`，在教程系统初始化时就执行。后果：`Campaign.Current` 为 null，**空引用异常发生在启动阶段**，堆栈顶是引擎的反射调用而不是你的类名。

第三个坑和 Step1 一样：`[Tutorial("...")]` 标识符写错不会报错，只是**这条教程永远不被实例化**（`GauntletTutorialSystem.cs:611-615` 只断言并跳过）。

## 跨版本提示

- **本文件在 1.3.15 与 1.4.5 两棵残缺树里不存在**（缺 `StoryMode.GauntletUI/Tutorial/`）。在 1.3.0 / 1.4.6 / 1.4.7 / 1.5.3 三棵树上，**8 条 public/protected 声明（类 + 无参构造 + 4 个 override）逐字相同**，`[Tutorial("ArmyCohesionStep2")]`、`Placement = Right`、`HighlightedVisualElementID = "ArmyManagementBoostCohesionButton"`、`MouseRequired = true`、以及 `IsConditionsMetForActivation` 的五段 `&&` **全部一致**。
- **两个裸字面量 `10` 在所有版本里都没被换成枚举名。** `TutorialContexts` 本身在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 上成员集合没变（`None` 到 `EscapeMenu` 共 17 个），所以 `ArmyManagement` 一直是 10——**但这个一致性没有编译期保证，升级时应该重新核对**。
- **`TutorialHelper.MaxCohesionForCohesionTutorial` 恒返回 `30f`**（`SandBox.GauntletUI/Tutorial/TutorialHelper.cs:638`），各版本未变。
- **对 mod 的实际含义：** 这个教程项的形状在 1.3 → 1.5 完全稳定，你可以放心地照抄它写自己的教程项（并记得把裸字面量换成枚举名）。反过来，**它不会随版本变化更新**——如果某个版本想给这一步加新条件，你得自己补。

## 依赖关系

- 基类：[TutorialItemBase](../TutorialItemBase)（`SandBox.GauntletUI.Tutorial`）——3 个 `protected set` 属性（`Placement` / `MouseRequired` / `HighlightedVisualElementID`）、3 个 abstract（`IsConditionsMetForActivation` / `IsConditionsMetForCompletion` / `GetTutorialsRelevantContext`）和几十个 `virtual void OnXxx(...)` 事件回调
- 注册方式：类级 `[Tutorial("ArmyCohesionStep2")]`（[TutorialAttribute](../TutorialAttribute)），教程系统按这个字符串发现它
- 上下文：[TutorialContexts](../../core-extra/TutorialContexts)（`10` = `ArmyManagement`）与 `TutorialHelper.CurrentContext` / `TutorialHelper.MaxCohesionForCohesionTutorial`（[TutorialHelper](../TutorialHelper)）
- 地图状态：[Campaign](../../campaign/Campaign) 的 `CurrentMenuContext`、[MobileParty](../../campaign/MobileParty) 的 `MainParty` / `Army` / `Army.LeaderParty` / `Army.Cohesion`
- 事件源：`ArmyCohesionBoostedByPlayerEvent`（`TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，本仓库 `api/` 下无对应页面）
- UI 绑定：`HighlightedVisualElementID` 指向军队管理界面的 `ArmyManagementBoostCohesionButton`；提示框位置由 `TutorialItemVM.ItemPlacements` 决定
- 同族：`ArmyCohesionStep1Tutorial`（`StoryMode.GauntletUI/Tutorial/`，context 是 `MapWindow = 4`）
- 桶首页：[campaign-ext API 分区](../)
