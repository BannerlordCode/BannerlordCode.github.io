---
title: "QuestManager"
description: "战役中运行中所有任务（Quest）的中央登记器与每刻驱动器：通过 CampaignEventReceiver 监听任务开始/结束事件来维护任务列表与追踪对象，并把每小时/每日/每周的 tick、英雄行为否决与菜单位置查询转发给每个进行中的任务。"
---
# QuestManager

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class QuestManager : CampaignEventReceiver`  
**Base:** `CampaignEventReceiver`  
**File:** `TaleWorlds.CampaignSystem/QuestManager.cs`

## 一句话职责

维护“当前战役里所有已开始、尚未结束的任务”这一权威集合，并在每个时间刻、玩家换族长、读档等节点把通用逻辑转发给每一个进行中的 `QuestBase`。

## 心智模型

把 `QuestManager` 想成**战役任务系统的“总名册 + 调度台”**，而不是一个你直接 new 出来用的工具类：

- 它是 `Campaign` 在启动时 `new` 出来的单例，挂在 `Campaign.Current.QuestManager` 上；不要自己 `new QuestManager()`，也不要在 SubModule 里新建第二个。
- 它本身**不负责创建或结束任务**。一个任务要进入名册，必须走 `QuestBase.StartQuest()`：后者先把自己标记为 `Ongoing`、注册事件、把发布者加入追踪对象，最后调用 `CampaignEventDispatcher.Instance.OnQuestStarted(this)`。`QuestManager` 作为 `CampaignEventReceiver` 之一收到这个事件，在 `OnQuestStarted` 里把任务 `Add` 进内部的 `_quests` 列表。结束同理——`QuestBase.CompleteQuestWith*()` 内部调用 `OnQuestFinalized`，管理器再 `Remove`。所以**你永远不该直接调用 `QuestManager.OnQuestStarted` / `OnQuestFinalized`**，那是事件回调。
- 名册里的每一项都是 `QuestBase`；管理器在每个 `HourlyTick / DailyTick / WeeklyTick` 里遍历名册，把 tick 转发给任务的 `...WithQuestManager` 重载，并在超时时调用 `CompleteQuestWithTimeOut`。也就是说，任务里那些“每过一天检查一下条件”的逻辑，实际是由管理器按固定节奏推动的。
- 它还持有 `TrackedObjects`：一张“可被追踪的战役对象（英雄、部队、据点…）→ 正在追踪它的任务列表”的映射。它驱动地图标记/小地图上的任务指示点，由 `VisualTrackerManager` 消费。
- 它与 Issues 系统分工明确：**[IssueManager](../IssueManager/)** 管“谁手上有可接的任务委托（Issue）”，**QuestManager** 管“已经接下、正在做的任务（Quest）”。玩家从某个 Issue 选择经典解法时，`IssueBase.StartIssueWithQuest()` 生成一个 `QuestBase` 子类实例，再由对应的 IssueBehavior 调 `StartQuest()` 把它登记进本管理器。
- 整个对象可存档（`_quests`、`_trackedObjects` 都标了 `[SaveableField]`），读档时由 `OnGameLoaded` 重新把每个任务接回上下文。

## 何时用 / 何时不要用

**用 QuestManager 当：**
- 你想查询运行态：现在有没有某类任务在进行、某英雄是不是任务发布者、某据点/家族是否牵扯某个任务。
- 你想在自定义 `CampaignBehaviorBase` 里读名册，做与任务相关的全局判定（例如在对话条件里检查 `IsQuestGiver`）。
- 你想给某个任务登记/注销“追踪对象”，让它在地图上显示指示点。

**不要：**
- 不要直接调 `OnQuestStarted` / `OnQuestFinalized` 来“加/删任务”——用 `QuestBase.StartQuest()` 与 `CompleteQuestWithSuccess/Fail/Cancel/TimeOut`。直接改内部列表会跳过事件，导致 UI、日志、依赖系统全部失同步。
- 不要绕过任务对象去改某个 `QuestBase` 的字段或状态；任务的生命周期由它自己的 `OnTick` / 完成逻辑驱动，外部硬改字段会在下一次 tick 或读档时被覆盖或引发断言。
- 不要为了“发一个任务”而去操作管理器——任务是 `QuestBase` 的实例，由 IssueBehavior 或你自己的 behavior 创建并 `StartQuest()`。
- 不要把 `IssueManager` 和 `QuestManager` 混用：前者查“可接的委托”，后者查“已接的任务”。

## 依赖图

- 上游（持有/创建）：[Campaign](../../campaign/Campaign/) 在构造时 `new QuestManager()`，并在 `CampaignEventDispatcher` 的事件接收器数组里注册本管理器，使 `OnQuestStarted` 等回调能收到 `QuestBase` 抛出的事件。
- 名册内容：[QuestBase](../QuestBase/) 及其子类（每个 IssueBehavior 内含一个 `QuestBase` 子类，如 `ArmyNeedsSuppliesIssueQuest`），任务的子步骤见 [QuestTaskBase](../QuestTaskBase/)。
- 关联系统：[IssueManager](../IssueManager/)（任务大多由 Issue 演化而来）、[Hero](../../campaign/Hero/)（任务发布者与追踪对象）、[Settlement](../../campaign/Settlement/)（任务地点与追踪对象）。
- 下游消费者：[VisualTrackerManager](../VisualTrackerManager/) 读取 `TrackedObjects` 渲染地图指示点；UI 的 `QuestsVM` 等读取 `Quests` 填充任务面板。
- 存档点：本管理器随 [Campaign 存档](../../../architecture/save-system/) 序列化 `_quests` 与 `_trackedObjects`；读档由 `OnGameLoaded` 重新初始化每个任务。

## 主要成员

### 获取与名册登记（生命周期）

#### `public MBReadOnlyList<QuestBase> Quests { get; }`
当前战役里所有“已开始且尚未结束”的任务的只读视图。注意它包含进行中（`IsOngoing`）的任务；任务一旦 `Finalize` 就会从列表移除。遍历它做查询很常见，但**不要在遍历过程中直接移除元素**——改用任务的 `CompleteQuestWith*()`，管理器会在 `OnQuestFinalized` 里安全移除。

#### `public bool QuestDebugMode { get; set; }`
调试开关，开启后任务相关逻辑会输出更详细的日志，用于排查任务卡死或条件不触发的问题。生产 mod 一般保持默认 `false`。

#### `public MBReadOnlyDictionary<ITrackableCampaignObject, List<QuestBase>> TrackedObjects { get; private set; }`
“可被追踪对象 → 正在追踪它的任务”的只读映射，驱动地图/小地图上的任务指示点。发布者英雄、目标据点等会被登记进来；查询某个英雄当前牵扯哪些任务、或某据点是否有任务指示点，都走这里。

#### `public override void OnQuestStarted(QuestBase quest)`
**事件回调，不要手动调用。** 当任意 `QuestBase` 调 `StartQuest()` 并抛出 `OnQuestStarted` 事件时，管理器在这里执行 `_quests.Add(quest)`，把任务正式登记进名册。

#### `public void OnQuestFinalized(QuestBase quest)`
**事件回调，不要手动调用。** `QuestBase` 在 `FinalizeQuest()` 末尾调用它，管理器执行 `_quests.Remove(quest)`，把任务从名册摘掉。

#### `public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`
读档完成后由 `CampaignEventDispatcher` 触发。对名册里每个未结束的任务：若它挂着某个仍存活的 Issue（`IssueManager.Issues` 中存在 `IssueQuest == 此任务`）或本身是 `IsSpecialQuest`，就调 `InitializeQuestOnLoadWithQuestManager()` 把任务接回事件与对话；**否则直接 `CompleteQuestWithCancel` 取消它**（源码里会 `Debug.FailedAssert` 提示“没有对应的 active issue”）。同时清理 `TrackedObjects` 中 `IsReady` 为 `false` 的键。

### 查询进行中的任务

#### `public bool IsThereActiveQuestWithType(Type type)`
名册中是否存在类型等于 `type` 或继承自 `type` 且 `IsOngoing` 的任务。典型用途是避免重复发放同类任务。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

QuestManager qm = Campaign.Current.QuestManager;
if (qm.IsThereActiveQuestWithType(typeof(ArmyNeedsSuppliesIssueQuest)))
{
    // 已存在同族任务，先不要再次发放
}
```

#### `public bool IsQuestGiver(Hero offeringHero)`
名册中是否有进行中且 `QuestGiver == offeringHero` 的任务。常用于对话条件：只有对方是当前任务的发布者时才显示“讨论任务”选项。

#### `public IEnumerable<QuestBase> GetQuestGiverQuests(Hero hero)`
返回 `hero` 作为发布者的所有进行中任务，常用于任务面板或对话里列举该领主交给玩家的任务。

```csharp
using TaleWorlds.CampaignSystem;

Hero lord = Hero.OneToOneConversationHero;
if (lord != null && Campaign.Current.QuestManager.IsQuestGiver(lord))
{
    foreach (QuestBase q in Campaign.Current.QuestManager.GetQuestGiverQuests(lord))
    {
        InformationManager.DisplayMessage(new InformationMessage(q.Title.ToString()));
    }
}
```

#### `public static bool QuestExistInSettlementNotables(QuestBase questBase, Settlement settlement)`
静态辅助：任务的发布者是否属于 `settlement` 的 notable 列表。用于决定某个据点是否能触发该任务的对话/菜单。

#### `public static bool QuestExistInClan(QuestBase questBase, Clan clan)`
静态辅助：任务的发布者是否属于 `clan` 的存活领主。用于家族层面的任务判定。

### 每刻驱动（tick 转发）

这些 `CampaignEventReceiver` 回调由 `CampaignEventDispatcher` 在对应时间刻调用，管理器遍历名册把 tick 转发给每个任务：

#### `public override void HourlyTick()`
先收集所有 `IsOngoing` 且截止时间 `QuestDueTime.IsPast` 的任务放进临时列表，对其逐个调 `CompleteQuestWithTimeOut`；随后对名册里每个任务调 `HourlyTickWithQuestManager()`。这是任务超时与每小时检查的总开关。

#### `public override void HourlyTickParty(MobileParty mobileParty)`
对名册里每个任务调 `HourlyTickPartyWithQuestManager(mobileParty)`，让任务针对特定部队做每小时检查（例如护送任务检测目标部队位置）。

#### `public override void DailyTick()` / `public override void WeeklyTick()`
分别转发 `DailyTickWithQuestManager()` / `WeeklyTickWithQuestManager()` 给每个任务，承载每日/每周的任务进度逻辑。

#### `public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`
会话开始时注册 `CampaignEvents.MapEventStarted` 的非序列化监听器，使任务能在战斗开始时收到回调。

### 与菜单 / 据点位置集成

#### `public GameMenuOption.IssueQuestFlags CheckQuestForMenuLocations(List<Location> currentLocations)`
`MenuHelper.SetIssueAndQuestDataForLocations` 在给菜单项附加任务/委托标记时调用。它遍历 `currentLocations` 里的每个角色：若某英雄是进行中任务的发布者，按是否 `IsSpecialQuest` 置 `QuestGiver` / `SpecialQuestGiver` 标志；若某英雄被任务 `IsTracked`，置 `QuestWithIssue` / `SpecialQuestWithIssue` 标志；再叠加各任务对位置的 `IsLocationTrackedByQuest` 结果，返回给菜单系统决定显示哪些“任务相关”选项。

### 英雄行为限制（来自任务的否决）

以下回调都是 `ref bool result` 形参：管理器遍历名册，把请求逐个转发给对应任务的 `OnHeroCan*InfoIsRequested`，只要**任一任务**把 `result` 置 `false` 就立即停止并维持 `false`。即“只要有一个进行中的任务不允许，该行为就被否决”。

| 回调 | 转发到的任务方法 | 语义 |
|------|----------------|------|
| `public override void CanHaveCampaignIssues(Hero hero, ref bool result)` | `OnHeroCanHaveCampaignIssuesInfoIsRequested` | 该英雄能否再接 Issue 委托 |
| `public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)` | `OnHeroCanDieInfoIsRequested` | 该英雄能否死亡 |
| `public override void CanHeroBecomePrisoner(Hero hero, ref bool result)` | `OnHeroCanBecomePrisonerInfoIsRequested` | 能否成为俘虏 |
| `public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)` | `OnHeroCanBeSelectedInInventoryInfoIsRequested` | 装备能否被改动 |
| `public override void CanHeroLeadParty(Hero hero, ref bool result)` | `OnHeroCanLeadPartyInfoIsRequested` | 能否领军 |
| `public override void CanHeroMarry(Hero hero, ref bool result)` | `OnHeroCanMarryInfoIsRequested` | 能否结婚 |
| `public override void CanMoveToSettlement(Hero hero, ref bool result)` | `OnHeroCanMoveToSettlementInfoIsRequested` | 能否移居据点 |
| `public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)` | `OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested` | 能否当总督/有部队职务 |

#### `public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`
当玩家家族的族长易主时触发：名册里所有 `IsOngoing` 且**非** `IsSpecialQuest` 的任务都会被 `CompleteQuestWithCancel`（取消原因文案为“原族长已不再是族长”）。`IsSpecialQuest` 的任务（如主线/特殊任务）豁免。

### 追踪对象（地图标记）

#### `public void AddTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`
把一个可追踪对象（英雄、部队、据点等）登记为 `relatedQuest` 的追踪目标；若该对象已存在则追加任务（重复追加会 `Debug.FailedAssert`）。`QuestBase.StartQuest()` 内部已自动把 `QuestGiver` 加进来，通常你只需为任务的额外目标对象显式调用。

#### `public void RemoveTrackedObjectForQuest(ITrackableCampaignObject trackedObject, QuestBase relatedQuest)`
移除某对象对某个任务的追踪；当该对象不再被任何任务追踪时，会一并调 `Campaign.Current.VisualTrackerManager.RemoveTrackedObject` 清掉地图指示点。对象从未被该任务追踪时触发断言。

#### `public void RemoveAllTrackedObjectsForQuest(QuestBase quest)`
任务结束时（`AfterFinalize` 内）调用，移除该任务登记的全部追踪对象与地图标记。一般不用你手动调。

#### `public List<ITrackableCampaignObject> GetAllTrackedObjectsOfAQuest(QuestBase quest)`
返回某任务当前追踪的所有对象，用于 UI 或诊断。

## 最小真实示例

### 示例 1：自定义任务经管理器登记（标准 mod 路径）

任务对象本身是 `QuestBase` 子类；由你的 `CampaignBehaviorBase` 在玩家接受时 `new` 出来并调 `StartQuest()`，管理器通过事件自动登记——你从不直接碰 `QuestManager.OnQuestStarted`。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

// 自定义任务：护送某英雄抵达指定据点
public class EscortNobleQuest : QuestBase
{
    private readonly Hero _escortTarget;
    private readonly Settlement _destination;

    public EscortNobleQuest(string questId, Hero questGiver, Hero escortTarget,
                            Settlement destination, CampaignTime dueTime, int rewardGold)
        : base(questId, questGiver, dueTime, rewardGold)
    {
        _escortTarget = escortTarget;
        _destination = destination;
    }

    protected override void OnStartQuest()
    {
        // 注册对话、子目标、日志等
    }
}

// 在你的 CampaignBehaviorBase 里，玩家接受时：
var quest = new EscortNobleQuest(
    "my_mod_escort_" + Hero.MainHero.StringId,
    questGiver,
    escortTarget,
    destination,
    CampaignTime.DaysFromNow(20f),
    1000);
quest.StartQuest(); // 抛出 OnQuestStarted → QuestManager 自动 Add，并在地图上标记发布者

// 之后随时可查询名册
bool active = Campaign.Current.QuestManager
    .IsThereActiveQuestWithType(typeof(EscortNobleQuest));
```

### 示例 2：只读查询进行中的任务（最常见用法）

```csharp
using TaleWorlds.CampaignSystem;

QuestManager qm = Campaign.Current.QuestManager;

// 当前对话对象是不是某进行中任务的发布者？
Hero lord = Hero.OneToOneConversationHero;
if (lord != null && qm.IsQuestGiver(lord))
{
    foreach (QuestBase q in qm.GetQuestGiverQuests(lord))
    {
        InformationManager.DisplayMessage(new InformationMessage(q.Title.ToString()));
    }
}

// 避免与进行中的同类任务重复发放
if (qm.IsThereActiveQuestWithType(typeof(ArmyNeedsSuppliesIssueQuest)))
{
    // 已存在同族任务，跳过发放逻辑
}
```

## 风险段

- **不要把管理器当任务的增删入口。** 直接调 `OnQuestStarted` / `OnQuestFinalized` 会绕过 `CampaignEventDispatcher` 的事件链，导致任务日志、UI、依赖系统（菜单标记、英雄行为否决）全部失同步。永远用 `QuestBase.StartQuest()` / `CompleteQuestWith*()`。
- **自定义任务必须挂在一个 Issue 上，或标记为 `IsSpecialQuest`。** `OnGameLoaded` 会取消所有“没有对应活跃 Issue 且不是 `IsSpecialQuest`”的已登记任务。如果你的任务是独立发放、不来自 IssueManager，务必让它的 `SpecialQuestType` 非空（从而 `IsSpecialQuest == true`），否则玩家读档后任务会神秘消失——这是最典型的“坏档/丢任务”陷阱。
- **换族长会批量取消普通任务。** `OnPlayerCharacterChanged` 在族长易主时取消所有 `IsOngoing` 且非 special 的任务。设计跨族长持久任务时要标 `IsSpecialQuest`，或自行在 behavior 里重建。
- **不要在遍历 `Quests` 时从列表移除。** 管理器的 tick 会遍历名册；若你在自己的回调里直接改 `_quests`/调用 `Remove`，会破坏遍历一致性。要结束任务就用 `CompleteQuestWith*()`，让 `OnQuestFinalized` 统一移除。
- **读档后任务实例会被重建，别长期持有旧引用。** 存档只序列化字段，读档后 `QuestBase` 是新建实例。跨会话引用某个任务对象时，应通过 `Quests` 集合按 `StringId`/类型重新查找，而不是缓存旧引用。
- **一个任务就能否决英雄行为。** `CanHeroDie` / `CanHeroMarry` 等是 `ref bool` 累积否决：只要名册里任一进行中任务说“不行”，结果就是 `false`。任务里若误写了无条件的否决，会导致该英雄永远无法死亡/结婚/被俘虏，牵连其他系统。
- **`TrackedObjects` 会在读档时清理失效键。** `OnGameLoaded` 会移除 `IsReady == false` 的追踪对象；若你的任务追踪了一个中途失效的对象，地图标记会静默消失，需在自己的任务里处理对象失效。

## 跨版本提示

- 本页 API 以 `bannerlord-1.4.5` 源码为准（该版本 `QuestManager.cs` 的方法集如上）。`1.3.15` 运行时使用的同一套 `QuestManager` 公共接口与此一致；行为上要特别注意 `OnGameLoaded` 对“无活跃 Issue 且非 special”任务的取消逻辑在 `1.3.x` 已存在，跨版本 mod 都需遵守 `IsSpecialQuest` 约定。
- `1.3.0` 源码目录未包含独立的 `QuestManager.cs` 供比对；如要支持更早版本，建议以 `Campaign.Current.QuestManager` 这一访问路径为准（该路径在 `1.3.15` 与 `1.4.5` 均稳定）。

## 导航

- ↑ 父级：[Campaign 扩展模块目录](../)
- ↔ 同级：[IssueManager](../IssueManager/) · [QuestBase](../QuestBase/) · [QuestTaskBase](../QuestTaskBase/) · [VisualTrackerManager](../VisualTrackerManager/) · [CampaignBehaviorBase](../CampaignBehaviorBase/)
- 相关类：[Campaign](../../campaign/Campaign/)（持有 `QuestManager`）· [Hero](../../campaign/Hero/)（任务发布者）· [Settlement](../../campaign/Settlement/)（任务地点）· [存档系统](../../../architecture/save-system/)
