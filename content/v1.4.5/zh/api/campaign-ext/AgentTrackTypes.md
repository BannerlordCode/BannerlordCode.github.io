---
title: "AgentTrackTypes"
description: "追踪标记类别的「声明了但从未接线」的嵌套枚举：嵌在 VisualTrackerMissionBehavior 内部，五个取值（AvailableIssue/ActiveIssue/ActiveStoryQuest/TrackedIssue/TrackedStoryQuest）照抄了任务系统的 IssueQuestFlags 词汇，但全源码树没有任何代码读取它——真正的追踪链路走 TrackedObject + TargetIconType.Flag_A。"
---
# AgentTrackTypes

**命名空间：** `SandBox.Missions.MissionLogics`  
**模块：** `SandBox.Missions`  
**类型：** `public enum AgentTrackTypes`  
**源文件：** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/VisualTrackerMissionBehavior.cs`（109 行）

## 概述

`AgentTrackTypes` 是 `VisualTrackerMissionBehavior`（`VisualTrackerMissionBehavior.cs:13`）的**内部嵌套枚举**，没有独立源文件。声明在 `VisualTrackerMissionBehavior.cs:15`，5 个取值全是隐式序号：

| 取值 | 数值 | 名义含义 |
|------|------|----------|
| `AvailableIssue` | `0` | 可接的任务（悬赏还没被接） |
| `ActiveIssue` | `1` | 已接、进行中的任务 |
| `ActiveStoryQuest` | `2` | 进行中的主线/剧情任务 |
| `TrackedIssue` | `3` | 正在被玩家追踪标记的任务 |
| `TrackedStoryQuest` | `4` | 正在被追踪的剧情任务 |

这 5 个名字**不是随手起的**：它们与 `CampaignUIHelper.IssueQuestFlags`（`CampaignUIHelper.cs:39`，取值 `CampaignUIHelper.cs:42`–`CampaignUIHelper.cs:46`）以及 `GameMenuOption.IssueQuestFlags`（`GameMenuOption.cs:67`）逐字对应。区别在于那两个枚举带 `[Flags]`，值是位（1、2、4、8、16）；而本枚举是**普通顺序枚举（0–4）**，位语义已经丢失。

★ **本页最重要的事实：这个枚举在整棵源码树里没有任何引用。** 对 `Bannerlord.Source` 全量搜索 `AgentTrackTypes` 只命中声明本身（`VisualTrackerMissionBehavior.cs:15`），没有任何读写点。它是「词汇被切出来了、但接线没做完」的遗留物。因此本页的「怎么用」部分讲的是它**周围那条真正在跑的追踪链路**，而不是它自己。

## 心智模型

把它理解成**一块刻好了名字、但没插进电路板上的开关面板**。

**它本该属于谁。** 宿主类 `VisualTrackerMissionBehavior` 是一个 `MissionLogic`（`VisualTrackerMissionBehavior.cs:13`），职责是把战役层的「被追踪对象」翻译成任务里可见的罗盘/名牌标记。这类标记天然需要一个「这是任务、还是剧情任务、还是普通任务」的类别标签，`AgentTrackTypes` 就是这个标签的词表。它被嵌在宿主类内部而不是提升到命名空间顶层，说明设计者只打算让宿主类自己用——但最终宿主类一次都没用它。

**谁本该产生它。** 战役层确实有一套「任务 ↔ 被追踪对象」的登记：`QuestBase.AddTrackedObject`（`QuestBase.cs:407`）在 `IsTrackEnabled`（`QuestBase.cs:410`）为真时把对象交给 `Campaign.Current.VisualTrackerManager.RegisterObject`（`QuestBase.cs:412`）；开关追踪走 `QuestBase.ToggleTrackedObjects`（`QuestBase.cs:430`），内部也是 `RegisterObject` / `RemoveTrackedObject`。登记表本身在 `QuestManager.TrackedObjects`（`QuestManager.cs:42`），写入点是 `QuestManager.AddTrackedObjectForQuest`（`QuestManager.cs:395`）。这套系统**知道**每个被追踪对象属于哪个任务，但登记时并没有把类别传下去——`VisualTrackerManager.RegisterObject`（`VisualTrackerManager.cs:68`）只收一个 `ITrackableCampaignObject`，不分类别。

**真正在跑的链路（这才是宿主类的实际行为）。**

1. **登记 + 版本号。** `VisualTrackerManager` 用一个单调递增的 `TrackedObjectsVersion`（`VisualTrackerManager.cs:15`）当变更信号。`RegisterObject` 在新增对象时 `TrackedObjectsVersion++`（`VisualTrackerManager.cs:80`、`VisualTrackerManager.cs:81`）；`RemoveTrackedObject`（`VisualTrackerManager.cs:89`）和 `SetDirty`（`VisualTrackerManager.cs:113`）也会递增。查询接口是 `CheckTracked`（`VisualTrackerManager.cs:84`）。
2. **任务侧轮询。** `VisualTrackerMissionBehavior.OnMissionTick`（`VisualTrackerMissionBehavior.cs:39`）每帧比较 `_visualTrackerManager.TrackedObjectsVersion != _trackedObjectsVersion`（`VisualTrackerMissionBehavior.cs:42`），不等就调 `Refresh()`（`VisualTrackerMissionBehavior.cs:44`）。缓存字段 `_trackedObjectsVersion` 初始为 `-1`（`VisualTrackerMissionBehavior.cs:26`），所以进任务后的第一帧一定会刷新一次。
3. **刷新。** `Refresh()`（`VisualTrackerMissionBehavior.cs:48`）在 `PlayerEncounter.LocationEncounter != null` 时调 `RefreshCommonAreas()`（`VisualTrackerMissionBehavior.cs:50`、`VisualTrackerMissionBehavior.cs:52`），最后把版本号抄回来（`VisualTrackerMissionBehavior.cs:54`）。`RefreshCommonAreas()`（`VisualTrackerMissionBehavior.cs:71`）遍历任务里的 `CommonAreaMarker`（`VisualTrackerMissionBehavior.cs:74`），把 `AreaIndex` 落在聚落小巷数量范围内的标记登记为本地对象（`VisualTrackerMissionBehavior.cs:76`、`VisualTrackerMissionBehavior.cs:78`）。
4. **任务内登记。** 另一条入口是 `MissionAgentHandler`：当 `locationCharacter.IsVisualTracked`（`MissionAgentHandler.cs:726`）为真时，通过 `Mission.Current.GetMissionBehavior<VisualTrackerMissionBehavior>()?.RegisterLocalOnlyObject(...)`（`MissionAgentHandler.cs:728`）登记 agent。`RegisterLocalOnlyObject`（`VisualTrackerMissionBehavior.cs:57`）做去重后塞进 `_currentTrackedObjects`（`VisualTrackerMissionBehavior.cs:68`）。
5. **消费。** 唯一读取 `_currentTrackedObjects` 的地方是 `GetCompassTargets()`（`VisualTrackerMissionBehavior.cs:83`），它给每个被追踪对象产出一条 `CompassItemUpdateParams`，图标固定写死为 `(TargetIconType)17`（`VisualTrackerMissionBehavior.cs:90`），而 `TargetIconType` 的第 17 号是 `Flag_A`（`TargetIconType.cs:23`）。移除则靠 `OnAgentRemoved`（`VisualTrackerMissionBehavior.cs:100`）与 `OnAgentDeleted`（`VisualTrackerMissionBehavior.cs:105`）调 `RemoveLocalObject`（`VisualTrackerMissionBehavior.cs:95`、`VisualTrackerMissionBehavior.cs:97`）。

**结论：** 真正的标记只携带「对象 + 位置 + 一个写死的旗子图标」，**没有类别字段**，所以 `AgentTrackTypes` 无处可插。它的词汇已经在上层 UI 侧由 `CampaignUIHelper.IssueQuestFlags` 实际使用（例如 `CampaignUIHelper.cs:3107`、`CampaignUIHelper.cs:3111` 在任务日志里按 `ActiveStoryQuest` / `TrackedStoryQuest` 区分条目），本枚举只是那份词汇的一个「无位语义的副本」。

**为什么位语义丢失很关键。** 如果照着名字把它当位掩码用，`TrackedStoryQuest`（4）会和 `ActiveStoryQuest`（2）… 注意这里是普通枚举，4 与 `CampaignUIHelper.IssueQuestFlags` 里的 4（`ActiveStoryQuest` 的位）含义完全不同。而且它**没有 `None`**，`default(AgentTrackTypes)` 是 `AvailableIssue`（0），也就是「可接任务」——拿未初始化值当「未追踪」会得到完全相反的意思。

## 怎么用

### 怎么拿到

- **源树路径：** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/VisualTrackerMissionBehavior.cs`（共 109 行）
- **声明处：** `VisualTrackerMissionBehavior.cs:15`（`public enum AgentTrackTypes`），取值在 `VisualTrackerMissionBehavior.cs:17`–`VisualTrackerMissionBehavior.cs:21`。
- **入口：** 因为没有任何 API 返回或接收它，**你无法从引擎里「拿到」一个实例**，只能自己构造。宿主行为本身可以这样取：`Mission.Current.GetMissionBehavior<VisualTrackerMissionBehavior>()`——这正是 `MissionAgentHandler.cs:728` 的取法。
- **跨类型写引用时：** 它是嵌套类型，C# 里必须写成 `VisualTrackerMissionBehavior.AgentTrackTypes.TrackedIssue`，不能写成顶层 `AgentTrackTypes`。
- **想真正做分类：** 用 `CampaignUIHelper.IssueQuestFlags`（`CampaignUIHelper.cs:39`）——它有 `[Flags]`、有 `None`、且是真正被 UI 消费的那一份。

### 典型用法

- **登记一个任务内的追踪对象（本地、不存档）：** 取到行为后调 `RegisterLocalOnlyObject`（`VisualTrackerMissionBehavior.cs:57`），传任意 `ITrackableBase`；它会用 `TrackedObject` 包一层塞进 `_currentTrackedObjects`（`VisualTrackerMissionBehavior.cs:68`）。
- **读罗盘会画出什么：** 调 `GetCompassTargets()`（`VisualTrackerMissionBehavior.cs:83`），得到的是 `CompassItemUpdateParams` 列表，图标一律是 `Flag_A`（`TargetIconType.cs:23`）。
- **自己检测「追踪集合变了」：** 照抄 `OnMissionTick` 的写法（`VisualTrackerMissionBehavior.cs:42`）——缓存上一次的 `VisualTrackerManager.TrackedObjectsVersion`（`VisualTrackerManager.cs:15`），不等时再做重活。**不要每帧无条件重算。**
- **在战役层开关追踪：** 走 `QuestBase.AddTrackedObject`（`QuestBase.cs:407`）与 `QuestBase.ToggleTrackedObjects`（`QuestBase.cs:430`），不要直接操作 `VisualTrackerManager`，否则 `QuestManager.TrackedObjects`（`QuestManager.cs:42`）里的任务归属会不一致。
- **要区分「任务」和「剧情任务」：** 用 `CampaignUIHelper.IssueQuestFlags.ActiveStoryQuest` / `TrackedStoryQuest` 那套位，而不是本枚举。

### 坑

- **它是死枚举。** 全源码树搜索 `AgentTrackTypes` 只有 `VisualTrackerMissionBehavior.cs:15` 一处命中。任何依赖它的分支都不会被引擎触发——包括你自己写完之后发现没人调用。
- **没有 `None`，`default` 是 `AvailableIssue`。** `default(AgentTrackTypes)` == `AvailableIssue`（`VisualTrackerMissionBehavior.cs:17`），语义是「可接任务」。把未初始化值当「无类别」是反向语义，会静默出错。
- **名字撞车，但语义不同。** `CampaignUIHelper.IssueQuestFlags`（`CampaignUIHelper.cs:39`）和 `GameMenuOption.IssueQuestFlags`（`GameMenuOption.cs:67`）有同样的 5 个成员名，但它们是 `[Flags]` 位（1/2/4/8/16），本枚举是 0–4。跨枚举赋值必须显式转换，且转换后数值含义会变。
- **它不在保存数据里。** 本枚举既不进存档也不被序列化；`VisualTrackerManager` 的存档字段只有 `_trackedObjects`（`VisualTrackerManager.cs:12`）。别指望跨存档保留「类别」。
- **`_currentTrackedObjects` 只增不减是常态。** `RegisterLocalOnlyObject`（`VisualTrackerMissionBehavior.cs:57`）只在重复时提前返回，正常情况一直 `Add`（`VisualTrackerMissionBehavior.cs:68`）；清理只发生在 `OnAgentRemoved`（`VisualTrackerMissionBehavior.cs:100`）与 `OnAgentDeleted`（`VisualTrackerMissionBehavior.cs:105`）。非 agent 对象（如 `CommonAreaMarker`）进来后不会被这两条路径清掉。
- **`RefreshCommonAreas` 的边界是 `>=`。** 判据写成 `settlement.Alleys.Count >= ((AreaMarker)item).AreaIndex`（`VisualTrackerMissionBehavior.cs:76`），是「小巷数量大于等于索引」而不是「索引在范围内」；照抄时注意保持同样的口径，否则你会得到和原版不同的标记集合。
- **版本号是唯一的刷新触发。** 如果你绕开 `VisualTrackerManager`（`VisualTrackerManager.cs:68`）直接改内部字典，`TrackedObjectsVersion` 不会递增，任务里的标记就不会刷新——这是最容易踩的「改了没反应」的坑。必要时调 `SetDirty()`（`VisualTrackerManager.cs:113`）。

## 关键成员

### `AvailableIssue`（`VisualTrackerMissionBehavior.cs:17`）
序号 0，名义上是「可接任务」。它同时是 `default(AgentTrackTypes)` 的落点，所以也是「未初始化」的实际值。

### `ActiveIssue`（`VisualTrackerMissionBehavior.cs:18`）
序号 1，名义上是「已接、进行中的任务」。在 `CampaignUIHelper.IssueQuestFlags` 里对应的成员是位 `2`（`CampaignUIHelper.cs:43`），两者数值不同。

### `ActiveStoryQuest`（`VisualTrackerMissionBehavior.cs:19`）
序号 2，名义上是「进行中的剧情任务」。对应 `CampaignUIHelper.IssueQuestFlags.ActiveStoryQuest` 的位 `4`（`CampaignUIHelper.cs:44`）。

### `TrackedIssue`（`VisualTrackerMissionBehavior.cs:20`）
序号 3，名义上是「正在被追踪标记的任务」。对应 `CampaignUIHelper.IssueQuestFlags.TrackedIssue` 的位 `8`（`CampaignUIHelper.cs:45`）。

### `TrackedStoryQuest`（`VisualTrackerMissionBehavior.cs:21`）
序号 4，名义上是「正在被追踪的剧情任务」。对应 `CampaignUIHelper.IssueQuestFlags.TrackedStoryQuest` 的位 `16`（`CampaignUIHelper.cs:46`）。它没有尾部逗号，是枚举的最后一个成员。

### `_currentTrackedObjects`（`VisualTrackerMissionBehavior.cs:24`）
宿主行为的私有列表，装着任务内实际要画标记的对象（`TrackedObject` 包装）。它是本枚举「本该被读取」的那个集合，但实际读取者只有 `GetCompassTargets()`。

### `_trackedObjectsVersion`（`VisualTrackerMissionBehavior.cs:26`）
缓存的版本号，初始 `-1`（`VisualTrackerMissionBehavior.cs:26`）。它保证第一帧必定刷新，也是「集合变了才重算」这个优化的关键。

### `_visualTrackerManager`（`VisualTrackerMissionBehavior.cs:28`）
只读字段，指向 `Campaign.Current.VisualTrackerManager`。所有版本号比较都通过它进行（`VisualTrackerMissionBehavior.cs:42`、`VisualTrackerMissionBehavior.cs:54`）。

### `RegisterLocalOnlyObject`（`VisualTrackerMissionBehavior.cs:57`）
公开方法，把一个 `ITrackableBase` 登记为「仅本任务可见」的追踪对象。先去重（`VisualTrackerMissionBehavior.cs:61`），再 `Add`（`VisualTrackerMissionBehavior.cs:68`）。它是 `MissionAgentHandler.cs:728` 唯一的调用目标。

### `Refresh`（`VisualTrackerMissionBehavior.cs:48`）
版本变化时的重算入口。它自己不产生标记，只负责在聚落遭遇里调 `RefreshCommonAreas()`（`VisualTrackerMissionBehavior.cs:52`）并抄回版本号（`VisualTrackerMissionBehavior.cs:54`）。

### `RefreshCommonAreas`（`VisualTrackerMissionBehavior.cs:71`）
把任务场景里的 `CommonAreaMarker`（`VisualTrackerMissionBehavior.cs:74`）按小巷数量过滤后登记（`VisualTrackerMissionBehavior.cs:76`、`VisualTrackerMissionBehavior.cs:78`）。这是本枚举唯一可能「有类别」的地方（小巷 vs 任务），但它也没分类别。

### `GetCompassTargets`（`VisualTrackerMissionBehavior.cs:83`）
唯一的消费者。为每个追踪对象产出一条罗盘条目，图标写死为 `(TargetIconType)17`（`VisualTrackerMissionBehavior.cs:90`），即 `Flag_A`（`TargetIconType.cs:23`）。

## 真实示例

取到宿主行为、登记一个本地追踪对象，并读回罗盘会显示什么：

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 从当前任务取行为（与 MissionAgentHandler 相同的取法）
VisualTrackerMissionBehavior tracker =
    Mission.Current.GetMissionBehavior<VisualTrackerMissionBehavior>();

if (tracker != null && someTrackable is ITrackableBase trackable)
{
    // 登记为「仅本任务可见」的追踪对象；内部会去重后 Add 进 _currentTrackedObjects
    tracker.RegisterLocalOnlyObject(trackable);

    // 读回罗盘条目：图标固定是 Flag_A
    foreach (CompassItemUpdateParams item in tracker.GetCompassTargets())
    {
        InformationManager.DisplayMessage(new InformationMessage("compass target added"));
    }
}
```

如果你想按类别区分追踪对象，**不要**用 `AgentTrackTypes`——它在引擎里没有读写点。用真正在跑的位标志枚举：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;

// CampaignUIHelper.IssueQuestFlags 是 [Flags]，有 None，且被任务日志真正消费
CampaignUIHelper.IssueQuestFlags flags = CampaignUIHelper.IssueQuestFlags.None;
flags |= CampaignUIHelper.IssueQuestFlags.TrackedIssue;
flags |= CampaignUIHelper.IssueQuestFlags.TrackedStoryQuest;

bool trackedStory = (flags & CampaignUIHelper.IssueQuestFlags.TrackedStoryQuest) != 0;
```

「集合变了才重算」是宿主行为的核心写法，照抄它可以避免每帧重扫任务对象：

```csharp
private int _cachedVersion = -1;

public override void OnMissionTick(float dt)
{
    // 与 VisualTrackerMissionBehavior.OnMissionTick 同构：只在版本号变化时做重活
    if (Campaign.Current.VisualTrackerManager.TrackedObjectsVersion != _cachedVersion)
    {
        RebuildMarkers();
        _cachedVersion = Campaign.Current.VisualTrackerManager.TrackedObjectsVersion;
    }
}
```

## 参见

- [VisualTrackerMissionBehavior](../VisualTrackerMissionBehavior) — 宿主类，本枚举嵌在它内部；真正的追踪/罗盘链路也全在这里
- [VisualTrackerManager](../VisualTrackerManager) — 战役层登记表与 `TrackedObjectsVersion` 变更信号的生产者
- [TrackedObject](../TrackedObject) — 任务内追踪对象的包装类型，`_currentTrackedObjects` 的元素
- [CampaignUIHelper](../CampaignUIHelper) — 真正在用的 `IssueQuestFlags` 位标志枚举，本枚举词汇的来源
- [QuestBase](../../campaign/QuestBase) — 战役层开关追踪的入口（`AddTrackedObject` / `ToggleTrackedObjects`）
- [MissionAgentHandler](../MissionAgentHandler) — 任务内登记 `IsVisualTracked` agent 的调用点
- [TargetIconType](../../mission-ext/TargetIconType) — 罗盘图标枚举，`GetCompassTargets` 写死用的 `Flag_A`
- [Agent](../../mission/Agent) — 常见的被追踪对象类型

## 导航

- [本区域目录](../)
- **父级：** [VisualTrackerMissionBehavior](../VisualTrackerMissionBehavior)
- **同类：** [VisualTrackerManager](../VisualTrackerManager) · [TrackedObject](../TrackedObject)
- **上游：** [QuestBase](../../campaign/QuestBase) · [MissionAgentHandler](../MissionAgentHandler)
- **词汇对照：** [CampaignUIHelper](../CampaignUIHelper)
