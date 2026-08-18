---
title: "IssueState"
description: "IssueBase 内部定义的 internal 枚举，标记一个问题（Issue）在生命周期中的当前阶段：已提出尚未接取、经典任务解法、派兵备选解、领主解法；由 IssueBase 自身方法推进，mod 应读其公开布尔访问器而非枚举本身。"
---
# IssueState

**命名空间：** `TaleWorlds.CampaignSystem.Issues`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `internal enum IssueState`（定义于 `IssueBase.cs` 内，不属于公开 API 表面）
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueBase.cs`

## 一句话职责

`IssueState` 是 `IssueBase` 内部用来记录某个问题（Issue）当前处于「被提出 → 被解决」生命周期哪一阶段的枚举，它只有四个取值，分别描述「尚未接取」「经典任务解法」「派兵备选解」「领主解法」四种阶段；整个枚举由 `IssueBase` 的 `Start*` 方法在推进解法时赋值，并通过 `IsOngoingWithoutQuest` / `IsSolvingWithQuest` / `IsSolvingWithAlternative` / `IsSolvingWithLordSolution` 四个公开布尔属性对外暴露，供 `IssueManager`、各 `CampaignBehavior` 与对话系统判断该问题此刻该走哪条逻辑分支。

## 心智模型

把 `IssueState` 想成贴在每张「问题卡片」上的进度标签，而不是你能直接拨动的开关。它处在 Campaign 层 Issues 子系统内部（`TaleWorlds.CampaignSystem.Issues`），由 `IssueBase` 私有持有，在问题被某个贵族 / 名流创建时初始化为 `Ongoing`，之后只能由 `IssueBase.StartIssueWithQuest` / `StartIssueWithAlternativeSolution` / `StartIssueWithLordSolution` 向前推进到对应的解法阶段；问题收尾（`CompleteIssue*` 系列）不会把状态改回某个枚举值，而是直接由 `IssueManager.DeactivateIssue` 把它从活动集合里移除。因此它本质是「只读进度指示」：mod 永远不该自己给它赋值，也读不到枚举类型本身（它是 `internal`），正确做法是读取 `IssueBase` 上那四个公开布尔属性来判断阶段；要改变阶段，只能调用玩家接取 / 派兵 / 领主解法等公开入口，让 `IssueBase` 自己切换状态。一个常见误区是假设四种取值构成严格的线性顺序并拿整数比较大小——实际上它们只代表不同的分支路径，应当用命名的布尔属性而不要假定顺序。

## 何时使用 / 何时不要使用

- **使用**：在 `CampaignBehavior`、对话条件或 UI 中，用 `issue.IsOngoingWithoutQuest` / `issue.IsSolvingWithQuest` / `issue.IsSolvingWithAlternative` / `issue.IsSolvingWithLordSolution` 判断某问题当前阶段，从而决定是否展示某个对话选项、是否触发关系变化、是否提示部队正在返回。
- **使用**：遍历 `Campaign.Current.IssueManager.Issues` 时按阶段做分类统计或条件处理（如仅对仍处于 `Ongoing` 的问题做超时检查）。
- **不要使用**：不要自行给状态赋值，也没有公开属性让你写回；要推进阶段必须走 `IssueBase` 的 `StartIssueWith*` / `CompleteIssueWith*` 等公开方法，让 `IssueManager` 同步活动集合与事件。
- **不要使用**：不要直接引用 `IssueState` 枚举类型本身（`internal`，跨程序集不可见）；也不要对四个布尔属性做 `== true/false` 之外的「枚举比较」或缓存整数值。旧存档 / 跨版本场景下，直接依赖枚举的整数底层值会在成员重排或重命名后映射到错误阶段。
- **不要使用**：不要假设问题收尾后还会停留在一个 `Resolved` / `Completed` 状态——枚举里没有这种取值，收尾即被 `DeactivateIssue` 移出活动集合；用 `switch` 枚举四个阶段时必须用 `default` 兼容「已不在活动集合」的情况。

## 依赖图

- 上游 / 持有者：
  - [IssueBase](../IssueBase) 私有持有 `_issueState` 字段，并在构造与 `Start*` 方法中赋值；四个公开布尔属性是它的唯一受支持读出口。
  - [Campaign](../Campaign) 通过 `Campaign.Current.IssueManager` 持有全部活动问题，是读取阶段的总入口。
- 下游 / 变更与消费点：
  - [IssueManager](../IssueManager) 在每帧 / 超时检查里读取 `IsOngoingWithoutQuest` 与 `IsSolvingWithAlternative` / `IsSolvingWithLordSolution`，驱动问题取消、超时移除与部队返回（`DeactivateIssue`、`TryToMakeTroopsReturn`）。
  - [IssuesCampaignBehavior](../IssuesCampaignBehavior) 读取 `IsOngoingWithoutQuest`（AI 接取候选）与 `IsSolvingWithQuest`（决定关系变化取自 `IssueQuest` 还是 `IssueOwner`）。
  - [LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) 在对话条件里用 `IsOngoingWithoutQuest` / `IsSolvingWithAlternative` / `IsSolvingWithLordSolution` 决定能向玩家展示哪种解法选项。
  - [Hero](../Hero) 是问题的提出者（`IssueOwner`），`Hero.Issue` 让你拿到该英雄挂着的 `IssueBase` 从而读取阶段；[Settlement](../Settlement) 经 `IssueSettlement` 关联到问题的发生地。
  - [QuestBase](../QuestBase)（`IssueQuest`）在 `SolvingWithQuestSolution` 阶段被生成并挂到问题上；[CampaignEvents](../CampaignEvents) / `CampaignEventDispatcher.OnIssueUpdated` 在阶段切换时广播 `IssueUpdateDetails`。

## 风险边界

- **内部枚举不可直接引用**：`IssueState` 是 `internal`，外部 mod 既读不到类型也写不进状态。若用反射去读 `_issueState` 或缓存其整数，版本更新（成员重排 / 重命名 / 增删）会让同一整数映射到不同阶段，造成问题「卡在错误解法」或无法正常收尾。一律走四个公开布尔属性。
- **没有「已收尾」状态**：枚举只有四个「进行中 / 解法中」取值，问题一旦 `CompleteIssue*` 就被 `DeactivateIssue` 移出 `IssueManager.Issues`。用 `switch` 枚举四阶段时若无 `default`，一个已解决的问题（不在活动集合里）会被当成未覆盖分支，逻辑漏判。
- **状态只进不退**：四个取值只能从 `Ongoing` 向前推进到某一种解法阶段，没有任何回退路径。若 mod 在阶段不匹配时误调用 `Start*`（`StartIssueWithAlternativeSolution` 在已经 `SolvingWithQuestSolution` 时再调）会造成阶段不一致、活动集合与 `IssueQuest` 状态错位。
- **不要假设线性顺序**：四个取值不构成严格递增的进度等级，不能用整数比较判断「谁更晚」；应基于语义布尔属性分别判断，否则跨解法分支（经典任务 vs 派兵 vs 领主）会被错误排序。
- **存档底层是枚举整数**：状态以枚举的整数底层值参与序列化，旧存档依赖成员顺序。未来版本若重排或重命名 `IssueState` 成员，旧档整数值可能反序列化为错误阶段，表现为问题永远停在某种解法、部队永不返回或关系变化取错对象。

## 成员说明

`IssueState` 共四个成员，全部由 `IssueBase` 内部赋值；外部只能通过 `IssueBase` 的公开布尔属性间接读取。

| 成员 | 含义 | 谁设置它 | 设置后触发的行为 |
| --- | --- | --- | --- |
| `Ongoing` | 问题已被名流 / 贵族提出、尚未被玩家接取或选择任何解法。这是问题的初始阶段，代表「等待玩家响应」。 | `IssueBase` 构造函数在创建问题时设置：`_issueState = IssueState.Ongoing`（`IssueBase.cs:499`）。 | 该阶段问题可被对话系统展示给玩家；`IssueManager` 每帧检查 `IssueStayAliveConditions()`，不满足则 `CompleteIssueWithCancel`，且 `IssueDueTime` 过期时有概率（约 20%）自动移除；`LordConversationsCampaignBehavior` 用 `IsOngoingWithoutQuest` 决定是否显示接取选项。 |
| `SolvingWithQuestSolution` | 玩家选择了「经典任务解法」，问题已转成一个 `QuestBase` 任务在推进。 | `IssueBase.StartIssueWithQuest()` 设置（`IssueBase.cs:587`）。 | 生成并挂接 `IssueQuest = GenerateIssueQuest(...)`，`IssueDueTime` 置为 `CampaignTime.Never`，`IsTriedToSolveBefore = true`，并广播 `IssueUpdateDetails.PlayerStartedIssueQuestClassicSolution`。此后 `IssuesCampaignBehavior` 用 `IsSolvingWithQuest` 决定关系变化取自 `IssueQuest.QuestGiver` 而非 `IssueOwner`。 |
| `SolvingWithAlternativeSolution` | 玩家选择了「派兵备选解」，已把部队交给名流的同伴去处理。 | `IssueBase.StartIssueWithAlternativeSolution()` 设置（`IssueBase.cs:610`）。 | 计算失败率 / 伤亡数 / 同伴技能奖励，设定部队返回时间 `AlternativeSolutionReturnTimeForTroops` 与效果清除时间，禁用同伴英雄，并广播 `IssueUpdateDetails.PlayerSentTroopsToQuest`。`IssueManager` 在其后通过 `TryToMakeTroopsReturn` 让部队返回，对话系统据此改变可显示选项。 |
| `SolvingWithLordSolution` | 玩家选择了「领主解法」，用影响力请另一位领主代为解决。 | `IssueBase.StartIssueWithLordSolution()` 设置（`IssueBase.cs:798`）。 | 记录已尝试解开，`IsTriedToSolveBefore = true`，注册 `BeforeGameMenuOpened` 监听；若涉及 `CounterOfferHero` 会触发还价对话，否则直接以拒绝还价路径收尾（`CompleteIssueWithLordSolutionWithRefuseCounterOffer`）。 |

> 对应的公开读接口（mod 实际该用的）：`IsOngoingWithoutQuest`（`== Ongoing`）、`IsSolvingWithQuest`（`== SolvingWithQuestSolution`）、`IsSolvingWithAlternative`（`== SolvingWithAlternativeSolution`）、`IsSolvingWithLordSolution`（`== SolvingWithLordSolution`）。它们都直接比较私有 `_issueState` 字段，是枚举安全的对外窗口。

## 真实示例

### 示例 1：遍历活动问题并按阶段分类处理

`Campaign.Current.IssueManager.Issues` 是 `Dictionary<Hero, IssueBase>` 的真实来源；读取问题阶段必须用四个公开布尔属性，而非内部枚举。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

// 真实集合：IssueManager.Issues（键是提出问题的英雄，值是 IssueBase）
foreach (KeyValuePair<Hero, IssueBase> pair in Campaign.Current.IssueManager.Issues)
{
    IssueBase issue = pair.Value;

    if (issue.IsOngoingWithoutQuest)
    {
        // 仍处于「已提出、未被接取」阶段：可继续向玩家展示 / 推进
    }
    else if (issue.IsSolvingWithAlternative)
    {
        // 玩家已派兵处理：相关部队正在返回，可提示进度
    }
    else if (issue.IsSolvingWithLordSolution)
    {
        // 玩家走了领主解法：可能涉及 CounterOfferHero 还价对话
    }
}
```

`IsOngoingWithoutQuest` / `IsSolvingWithAlternative` / `IsSolvingWithLordSolution` 均已在 v1.4.5 源码中验证（`IssueBase.cs:263/267/269`）。枚举本身是 `internal`，此处刻意不引用 `IssueState` 类型。

### 示例 2：在对话条件里判断问题是否仍可接取

对话系统用 `IsOngoingWithoutQuest` 决定「接取」选项是否出现（`LordConversationsCampaignBehavior.cs:1907` 的真实写法）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

// 取当前一对一对话英雄挂着的问题
IssueBase issue = Hero.OneToOneConversationHero?.Issue;
if (issue != null && issue.IsOngoingWithoutQuest && issue.IsThereAlternativeSolution)
{
    // 问题仍 Ongoing 且支持派兵解：可显示「派遣部队」对话选项
}
```

`Hero.OneToOneConversationHero` 与 `IssueBase.IsThereAlternativeSolution` 均为公开 API；阶段判断只用 `IsOngoingWithoutQuest`，避免在对话里向已处于解法阶段的问题重复提供接取入口。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.Issues/IssueBase.cs` 中 `internal enum IssueState` 的四个成员及其赋值点（`IssueBase.cs:499/587/610/798`）为准，并交叉核对 `IssueManager`、`IssuesCampaignBehavior`、`LordConversationsCampaignBehavior` 的真实调用点。跨版本使用时重新核对：枚举成员是否被重排 / 重命名（影响旧存档整数映射）、四个公开布尔属性是否仍一一对应、`Start*` / `CompleteIssue*` 的推进路径是否变化。

## 导航

- ↑ 父级：[Campaign API 索引](../)
- ↔ 同级：[IssueBase](../IssueBase) · [IssueManager](../IssueManager) · [IssuesCampaignBehavior](../IssuesCampaignBehavior) · [LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) · [IssueUpdateDetails](../IssueUpdateDetails) · [QuestBase](../QuestBase) · [JournalLog](../JournalLog)
- 相关实体与系统：[Campaign](../Campaign) · [Hero](../Hero) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [CampaignEvents](../CampaignEvents)
