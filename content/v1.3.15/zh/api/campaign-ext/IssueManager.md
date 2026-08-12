---
title: "IssueManager"
description: "战役任务（Issue）的总调度器：登记候选任务、落地并激活 IssueBase 实例、管理冷却与替代方案部队，并响应英雄死亡/入狱/据点易主等事件。"
---
# IssueManager

**Namespace:** `TaleWorlds.CampaignSystem.Issues`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class IssueManager : CampaignEventReceiver`  
**Base:** `CampaignEventReceiver`  
**Source:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueManager.cs`

## 一句话职责

它负责在整张战役地图上把"某个英雄手里有一个待办任务"这件事实登记、创建、推进和关闭，并在英雄死亡、入狱、据点易主时统一处理任务的下场。

## 概述

`IssueManager` 是 Campaign 层的**任务调度中枢**，不是任务本身、也不是可单独实例化的服务。战役里所有"名流/领主主动找你帮忙"的支线都经过它：

- 模组的 `IssueBehavior`（一个 `CampaignBehavior`）在 `OnCheckForIssue` 事件里把候选任务写成 `PotentialIssueData` 交给它；
- 引擎按频率与权重选中候选后，调用 `CreateNewIssue` 把候选落地为一个 `IssueBase` 实例；
- 玩家在对话里接下任务时，`StartIssueQuest` 把 `IssueBase` 升级为一个 `QuestBase`；
- 每日/每小时 tick、英雄事件（死亡、入狱、结婚、易主）由它监听并推进或收尾。

绝大多数 mod 不会去 `new IssueManager`，而是读取 `Campaign.Current.IssueManager` 来查询、派发或善后任务。

## 心智模型

把 `IssueManager` 当作**战役任务的总调度员**来理解，而不是一张数据表：

- **所在层**：Campaign 层。它随 `Campaign` 一起创建，挂在 `Campaign.Current.IssueManager`；战役结束后随之消失，不跨场景存活。
- **谁创建/持有**：`Campaign` 在启动新战役时 `new IssueManager()`。模组不要自己实例化，也不要缓存为静态单例跨战役持有。
- **它协调的三段流**：`PotentialIssueData`（候选数据）→ `CreateNewIssue`（落地为 `IssueBase`）→ `StartIssueQuest`（升级为 `QuestBase`）。`Issues` 属性是已落地任务的只读视图，键是任务拥有者 `Hero`。
- **它驱动 / 被驱动**：`IssuesCampaignBehavior`（位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`）在每日/每小时检查里调用 `CheckForIssues` 和 `CreateNewIssue`；`IssueManager` 自己订阅 `CampaignEventDispatcher` 的事件（英雄死亡、据点进入/离开、据点易主等）来推进或取消任务。
- **状态边界**：`Campaign.Current.IssueManager` 在战役初始化完成前为 `null`；在存档加载的 `OnLoad`/`InitializeForSavedGame` 阶段，只读视图 `Issues` 才被重建。

## 何时用 / 何时不要用

**用 `IssueManager` 当：**

- 查询某英雄、某据点、某家族当前有哪些任务，避免重复派发（`IsThereActiveIssueWithTypeInSettlement`、`GetNumOfAvailableIssuesInSettlement`、`GetIssuesInSettlement`）。
- 在自定义 `IssueBehavior` 里给对话对象登记候选任务（`AddPotentialIssueData` + `OnCheckForIssue`）。
- 想绕过每日刷新、立刻把一个自定义任务落地给某个英雄（`CreateNewIssue`）。
- 读取任务计数用于 UI/日志（`FillIssueCountsPerSettlement`、`FillIssueCountsPerClan`）。

**不要用 `IssueManager` 当：**

- 不要自己 `new IssueBase` 然后手写进内部字典——内部 `_issues` 是私有的，且只读视图 `Issues` 不会自动感知；必须走 `CreateNewIssue` 让字符串 ID、追踪对象、事件一起就位。
- 不要只靠 `issues.xml` 凭空"假"出任务——没有对应 `IssueBase` 子类与 `PotentialIssueData` 时，`OnStartIssue` 为 `null` 的候选无法实例化。正确组合是：**XML 或代码里提供一个 `PotentialIssueData` + 一个 `IssueBase` 子类**，并在 `OnCheckForIssue` 中 `AddPotentialIssueData`。
- 不要在战役未就绪（存档加载进行中、或 `Campaign.Current` 为 `null`）时调用 `CreateNewIssue`，否则会得到错乱或重复的任务。
- 不要把 `Issues` 的 `IssueBase` 引用长期缓存跨事件持有——任务可能被 `DailyTick`/事件自动完成，缓存引用会变成"已完成实例"。

## 依赖图

`IssueManager` 不持有任务的具体逻辑；它把候选、实体、事件和模型组织在一起：

- 上游：[Campaign](../../campaign/Campaign/) 创建并持有本管理器；[CampaignEventDispatcher](../CampaignEventDispatcher/) 触发 `OnCheckForIssue`、`OnNewIssueCreated`、`OnQuestCompleted`、`OnIssueOwnerChanged` 等事件。
- 下游实体：[IssueBase](../IssueBase/) 是任务实体，[QuestBase](../QuestBase/) 由 `StartIssueQuest` 启动；[PotentialIssueData](../PotentialIssueData/) 是候选数据，[IssueCoolDownData](../IssueCoolDownData/) 记录派发冷却。
- 驱动行为：`IssuesCampaignBehavior`（在 `TaleWorlds.CampaignSystem.CampaignBehaviors` 中）负责每日/每小时巡检并调用 `CreateNewIssue`。
- 关联模型：[IssueModel](../IssueModel/) 决定替代方案部队能否返回等规则。
- 关联战役对象：[Hero](../../campaign/Hero/) 是任务拥有者/给予者，[Settlement](../../campaign/Settlement/) 是任务关联据点，[Clan](../../campaign/Clan/) 用于家族维度的任务计数。
- 存档点：字段以 `[SaveableField]` 持久化；`OnLoad` 与 `InitializeForSavedGame` 重建只读视图并执行失效校验。

## 风险与崩溃面

1. **空入口风险**：在战役初始化完成前、`Campaign.Current` 为 `null` 时访问 `Campaign.Current.IssueManager` 会崩溃。任何任务操作前先确认 `Campaign.Current != null` 且 `Campaign.Current.IssueManager != null`。
2. **直接写入内部字典**：`Issues` 是 `_issues` 的只读包装。不要试图 `new IssueBase` 后手动塞入——字符串 ID、追踪对象注册、`OnIssueCreatedForHero` 回调和 `OnNewIssueCreated` 事件都不会触发，任务会"看得见却跑不动"。一律走 `CreateNewIssue`。
3. **创建时机错误**：在存档加载尚未完成（`InitializeForSavedGame` 之前）调用 `CreateNewIssue`，会导致只读视图与内部字典不一致、任务重复或 `IssueOwner` 断言失败。派发任务应放在战役运行期或 `OnCheckForIssue` 回调里。
4. **缓存已失效的 `IssueBase`**：`DailyTick`/`HourlyTick` 以及英雄死亡、据点易主等事件会调用 `CompleteIssueWith*` 把任务收尾并从字典移除。跨回调长期持有 `IssueBase` 引用，可能读到一个已被完成的实例；每次使用前重新从 `Issues` 按 `Hero` 取。
5. **`PotentialIssueData` 与类型不匹配**：`OnStartIssue` 为 `null` 的候选（仅靠 `Type` 构造）依赖 XML/反射实例化具体 `IssueBase`；若 XML 缺对应定义会失败。自写 `StartIssueDelegate` 最稳妥。
6. **冷却数据只增不清**：`AddIssueCoolDownData` 不会自动过期，依赖 `DailyTick` → `ExpireInvalidData` 清除失效项。在高频派发场景下若 `IssueCoolDownData.IsValid()` 永远为 `true`，任务会被永久冷却挡住。

## 成员说明

下面按主题给出 mod 真正会调用的公共成员。每个成员标注**用途 / 副作用 / 调用时机**；事件回调（以 `On*`/`Can*` 开头的 `CampaignEventReceiver` 重写）由引擎通过 `CampaignEventDispatcher` 触发，模组通常**不要手动调用**，只在调试或自定义行为里订阅语义时关心。

**查询与计数**

#### `public MBReadOnlyDictionary<Hero, IssueBase> Issues { get; }`
已落地任务的只读视图，键为任务拥有者 `Hero`。**用途**：遍历或按拥有者查任务。**副作用**：只读，不可增删；增删只通过 `CreateNewIssue`/`DeactivateIssue`。**调用时机**：需要拿到某英雄当前任务时，用 `Issues.TryGetValue(hero, out IssueBase issue)` 或 `Issues.ContainsKey(hero)`。

#### `public IEnumerable<Hero> IssueSolvingCompanionList { get; }`
正在用"替代方案"解决任务的同伴英雄集合。**用途**：排查哪些英雄被任务占用、不应被谋杀/俘虏/调走。**副作用**：无。**调用时机**：在自定义 `CanHeroDie`/`CanHeroBecomePrisoner` 一类判定里判断某英雄是否被任务占用。

#### `public bool IsThereActiveIssueWithTypeInSettlement(Type type, Settlement settlement)`
判断某据点是否存在指定类型的活动任务。**用途**：避免同一据点重复派发同类任务。**副作用**：无。**调用时机**：登记候选前先查重。

#### `public int GetNumOfAvailableIssuesInSettlement(Settlement settlement)`
返回该据点当前"可接但未接"的任务数；顺带把不满足存活条件的任务直接收尾。**用途**：UI 任务标记、据点忙碌度。**副作用**：可能调用 `CompleteIssueWithStayAliveConditionsFailed` 清理失效任务。**调用时机**：进入据点菜单、需要刷新任务徽标时。

#### `public int GetNumOfActiveIssuesInSettlement(Settlement settlement, bool includeQuests)`
返回该据点正在推进（含替代方案/领主方案/任务）的任务数；`includeQuests` 控制是否只统计带 `QuestBase` 的。**用途**：据点任务计数、派发频率控制。**副作用**：无。**调用时机**：计算可派发名额时。

#### `public static IEnumerable<IssueBase> GetIssuesInSettlement(Settlement settlement, bool onlyNotables = true)`
静态遍历某据点的任务（默认只看名流）。**用途**：据点维度的任务枚举，不受 `IssueManager` 实例持有关系影响。**副作用**：无。**调用时机**：需要一次性列出某据点全部任务时。

#### `public static IssueBase GetIssueOfQuest(QuestBase quest)`
根据任务反查其来源 `IssueBase`。**用途**：在 `QuestBase` 完成回调里拿到原始 Issue。**副作用**：无，找不到返回 `null`。**调用时机**：自定义任务完成逻辑需要回写 Issue 状态时。

#### `public static void FillIssueCountsPerSettlement(Dictionary<Settlement, int> issueCountPerSettlement)`
把每个据点的任务数填进传入字典。**用途**：地图/日志聚合。**副作用**：写入传入字典。**调用时机**：UI 或统计快照。

#### `public static void FillIssueCountsPerClan(Dictionary<Clan, int> issueCountPerClan, IEnumerable<Clan> clans)`
按家族统计任务数。**用途**：家族面板聚合。**副作用**：写入传入字典。**调用时机**：家族 UI 刷新。

**候选登记与创建**

#### `public void AddPotentialIssueData(Hero hero, PotentialIssueData issueData)`
把一个候选任务登记到指定英雄。**用途**：在 `OnCheckForIssue` 回调里声明"这位英雄可以提供一个任务"。**副作用**：仅写入内部候选缓存；真正落地要等引擎选中或你手动 `CreateNewIssue`。**调用时机**：你的 `IssueBehavior` 响应 `CampaignEventDispatcher.Instance.OnCheckForIssue(hero)` 时。

#### `public List<PotentialIssueData> CheckForIssues(Hero issueOwner)`
触发 `OnCheckForIssue` 事件并清空/重建该英雄的候选列表，返回候选。**用途**：主动让某英雄重新评估可派任务。**副作用**：先 `PrepareIssueArguments` 清空旧候选，再广播 `OnCheckForIssue`；若英雄已有任务则不重复广播。**调用时机**：想立即刷新某英雄候选时（日常流程由 `IssuesCampaignBehavior` 自动调用）。

#### `public bool CreateNewIssue(in PotentialIssueData pid, Hero issueOwner)`
把候选落地为一个真正的 `IssueBase` 实例并登记。**用途**：立刻给 `issueOwner` 创建一个任务，跳过每日加权抽样。**副作用**：分配 `issue_*` 唯一 ID、调用 `AfterCreation()`、把拥有者绑定到任务、若拥有者有部队则登记追踪对象、广播 `OnNewIssueCreated`。**调用时机**：你想在事件/对话里确定性地派发任务时。注意 `pid.OnStartIssue` 必须非 `null`（即用一个带 `StartIssueDelegate` 的 `PotentialIssueData` 构造），否则无法实例化具体 `IssueBase`。

#### `public bool StartIssueQuest(Hero issueOwner)`
把该英雄的"可接任务"正式转为 `QuestBase`。**用途**：玩家在对话里接下任务时调用。**副作用**：调用 `IssueBase.StartIssueWithQuest()`；若该任务已不满足存活/接取条件则改走 `CompleteIssueWithStayAliveConditionsFailed` 并返回 `false`。**调用时机**：对话选项"接受任务"对应的逻辑里（游戏内置 `IssuesCampaignBehavior` 已接线，自定义对话可显式调用）。

#### `public void DeactivateIssue(IssueBase issue)`
停用/收尾一个任务。**用途**：英雄死亡、背叛、或你想手动取消时。**副作用**：若任务已带 `QuestBase` 则 `CompleteQuestWithCancel()`；否则通知拥有者 `OnIssueDeactivatedForHero`、移除对话行、并从内部字典删除。**调用时机**：任务需要立即撤销且不能走自然完成时。

#### `public void ChangeIssueOwner(IssueBase issue, Hero newOwner)`
把任务从原拥有者转移到新英雄。**用途**：剧情需要把任务交接给另一个角色。**副作用**：原拥有者去绑定、新拥有者绑定、更新 `IssueBase.IssueOwner`、在字典里搬家、广播 `OnIssueOwnerChanged`。**调用时机**：交接剧情触发时。

**替代方案部队**

#### `public void TryToMakeTroopsReturn(IssueBase issue)`
尝试让替代方案派出的部队回到主队。**用途**：任务完成后回收部队。**副作用**：若 `IssueModel.CanTroopsReturnFromAlternativeSolution()` 允许则直接归队（`MobileParty.MainParty.MemberRoster`），否则暂存进 `_awaitingAlternativeSolutionTroops` 等玩家移动时弹窗回收。**调用时机**：替代方案结算、或玩家在地图上移动需要回收部队时。

**冷却控制**

#### `public void AddIssueCoolDownData(Type type, IssueCoolDownData data)`
为某任务类型登记一条冷却数据。**用途**：防止同类任务短时间内重复派发给同一英雄。**副作用**：写入 `_issuesCoolDownData`，键为 `type.Name`。**调用时机**：任务完成/取消后，由 `IssueBase` 的冷却逻辑调用（你一般不需要手动调）。

#### `public bool HasIssueCoolDown(Type type, Hero hero)`
判断某类型任务对指定英雄是否仍在冷却。**用途**：派发前挡掉冷却中的组合。**副作用**：无。**调用时机**：登记候选或 `CreateNewIssue` 前做预检。

**杂项**

#### `public void ToggleAllIssueTracks(bool enableTrack)`
统一开关所有任务的地图追踪对象。**用途**：UI 上的"追踪全部任务"。**副作用**：逐一调用 `IssueBase.ToggleTrackedObjects`。**调用时机**：玩家在任务列表切换全追踪时。

#### `public GameMenuOption.IssueQuestFlags CheckIssueForMenuLocations(List<Location> currentLocations, bool getIssuesWithoutAQuest = false)`
检查当前场景位置里是否有英雄带着任务/任务，返回 `AvailableIssue` / `ActiveIssue` 标志位。**用途**：城镇菜单判断是否显示"讨论任务"选项。**副作用**：无。**调用时机**：进入城镇位置、刷新菜单选项时。

**生命周期与事件回调（引擎驱动，勿手动调用）**

`InitializeForSavedGame()` 在读取存档后重建只读视图、校验 `IssueOwner` 一致性并清理失效数据；`DailyTick()` 与 `HourlyTick()` 推进替代方案进度、超时与失效任务；`OnHeroKilled` / `OnHeroUnregistered` / `OnSettlementEntered` / `OnSettlementLeft` / `OnSettlementOwnerChanged` / `OnCharacterPortraitPopUpOpened` 在对应战役事件发生时推进或取消任务；`CanHaveCampaignIssues` / `CanHeroDie` / `CanHeroBecomePrisoner` / `CanHeroMarry` / `CanHeroLeadParty` / `CanMoveToSettlement` / `CanBeGovernorOrHavePartyRole` / `CanHeroEquipmentBeChanged` / `IsSettlementBusy` 是引擎用来询问"某英雄能否做某事"的拦截钩子，`IssueManager` 会把问题转发给每个活动的 `IssueBase` 让其表态。这些方法是 `CampaignEventReceiver` 的重写，模组只应在自定义行为里理解其语义，不要直接调用。

## 最小真实示例

### 示例 1：为当前名流登记候选任务，并在需要时直接落地

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

// IssueBehavior 里响应"检查任务"事件，给当前名流登记一个候选
private void OnCheckForIssue(Hero issueGiver)
{
    Settlement related = issueGiver.CurrentSettlement;
    Campaign.Current.IssueManager.AddPotentialIssueData(
        issueGiver,
        new PotentialIssueData(OnStartMyIssue, typeof(MyCustomIssue), IssueBase.IssueFrequency.Common, related));
}

// 引擎选中候选时回调，返回一个 IssueBase 实例
private static IssueBase OnStartMyIssue(in PotentialIssueData pid, Hero issueOwner)
{
    return new MyCustomIssue(issueOwner, pid.RelatedObject as Settlement);
}

// 也可以不依赖每日加权抽样，立即给某英雄派发任务
PotentialIssueData pid = new PotentialIssueData(OnStartMyIssue, typeof(MyCustomIssue), IssueBase.IssueFrequency.Rare, settlement);
bool created = Campaign.Current.IssueManager.CreateNewIssue(in pid, issueOwner);
```

### 示例 2：查询、接取与善后

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

IssueManager mgr = Campaign.Current.IssueManager;
if (mgr == null || issueOwner == null)
{
    return;
}

// 按拥有者取出当前任务
if (mgr.Issues.TryGetValue(issueOwner, out IssueBase issue))
{
    // 把"可接任务"升级为正式 QuestBase
    mgr.StartIssueQuest(issueOwner);

    // 派发前先查重，避免同据点同类任务堆积
    bool alreadyThere = mgr.IsThereActiveIssueWithTypeInSettlement(typeof(MyCustomIssue), settlement);

    // 英雄死亡/背叛后手动收尾
    if (mustCancel)
    {
        mgr.DeactivateIssue(issue);
    }
}
```

## 跨版本提示

- 1.3.15 与 1.4.5 的 `IssueManager` 公共 API（`CreateNewIssue`、`StartIssueQuest`、`CheckForIssues`、`DeactivateIssue`、`Issues` 等）保持一致；推荐使用 `Campaign.Current.IssueManager` 作为唯一获取入口。
- 1.4.5 的 `InitializeForSavedGame` 明确校验 `IssueOwner` 与字典键一致，并对早于 `v1.3.0` 的存档重建替代方案部队名册；跨版本 mod 不要假设旧存档里这些字段已存在。
- 业务代码应依赖公开的 `IssueManager` / `IssueBase` API，不要读取反编译文件中的私有字段（如 `_issues`、`_issueArgs`）。

## 导航

- [↑ 任务扩展模块目录](../)
- [↔ IssueBase](../IssueBase/) · [QuestBase](../QuestBase/) · [BarterManager](../BarterManager/) · [SettlementComponent](../SettlementComponent/)
- [↔ PotentialIssueData](../PotentialIssueData/) · [IssueCoolDownData](../IssueCoolDownData/) · [IssueModel](../IssueModel/)
- [相关类：Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/) · [Clan](../../campaign/Clan/) · [Campaign](../../campaign/Campaign/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
