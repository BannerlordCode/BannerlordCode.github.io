---
title: "MissionLogic"
description: "Mission 的纯玩法逻辑层：承载胜负判定、撤退/投降、额外装备与自动部署等规则；是 BehaviorType=Logic 的 MissionBehavior 子类，自动进入 Mission.MissionLogics 并被引擎轮询。"
---
# MissionLogic

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MissionLogic : MissionBehavior`  
**Base:** `MissionBehavior`  
**File:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## 概述

`MissionLogic` 是挂在 `Mission`（战斗/场景实例）上的**纯玩法规则层**。它本质上是一个 `MissionBehavior`（因此能监听所有 Agent/Team/对象事件、每帧 Tick），但它的 `BehaviorType` 被强制固定为 `MissionBehaviorType.Logic`——这使得引擎在注册时把它额外收进 `Mission.MissionLogics` 列表，并在特定时机**专门轮询**这一批逻辑：

- 谁来判定战斗结束？（`MissionEnded`）
- 战斗结果是什么？（`OnMissionResultReady` / `ShowBattleResults`）
- 玩家点了“离开”时能不能走？（`OnEndMissionRequest`）
- 撤退 / 投降时做什么？（`OnRetreatMission` / `OnSurrenderMission`）
- 角色生成时有没有额外装备？（`GetExtraEquipmentElementsForCharacter`）
- 队伍是否自动部署？（`OnAutoDeployTeam`）

换句话说，`MissionBehavior` 是“场景里能挂的所有插件”，而 `MissionLogic` 是其中被引擎当作**规则裁决者**来对待的子集。如果你只想加一段游戏性规则、不需要 Gauntlet UI 配对，就继承 `MissionLogic` 而不是 `MissionBehavior`。

## 心智模型

把 `MissionLogic` 当作**“这场战斗的规则裁判”**：

- 它是 `MissionBehavior` 的子类，生命周期与所在 `Mission` 完全绑定：进场景时注册、出场景时随 `Mission` 一起销毁。
- 不要自己 `new MissionLogic()` 然后当普通对象用——它的 `Mission` 属性在 `AddMissionBehavior` 之前是 `null`，很多逻辑会因 `Mission == null` 崩。
- 注册后，引擎会把它同时放进两个集合：通用列表 `Mission.MissionBehaviors`（每帧/每事件都轮询）和专用列表 `Mission.MissionLogics`（只在裁决类时机轮询）。
- 一个 `Mission` 里可以挂多个 `MissionLogic`，它们之间没有直接顺序保证，但引擎对 `MissionLogics` 的轮询永远是“第一个返回终止条件者胜”（见 `CheckMissionEnded`）。

### 它和 MissionBehavior / Mission 的区别

| 类型 | 角色 | 关键区别 |
|------|------|----------|
| `Mission` | 场景本身（世界对象） | 持有 Agents/Teams/MissionObjects，调用并轮询 Behavior/Logic。你是它的**使用者**，不是它的子类。 |
| `MissionBehavior` | 通用场景插件基类 | 所有事件/ Tick 都能接；`BehaviorType` 由你决定（`Other`/`Logic`/`Battle` 等）。 |
| `MissionLogic` | `BehaviorType=Logic` 的专用插件 | 继承 `MissionBehavior`，但 `BehaviorType` 被锁成 `Logic`，自动进入 `MissionLogics` 被裁决轮询。 |

> 想加 UI 层（Gauntlet 面板）请用 `MissionView` / `MissionGauntletScreen` 体系，而不是把 UI 塞进 `MissionLogic`。`MissionLogic` 的本职是“规则”，不是“界面”。

## 如何注册与获取

`MissionLogic` 是通过 `MissionGameStarter.AddBehavior(...)` 在游戏启动时登记、由引擎在进入 Mission 时统一初始化的——和注册普通 `MissionBehavior` 是**同一条路径**，区别仅在类型：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);
        if (starterObject is MissionGameStarter missionStarter)
        {
            // 注册一个自定义 MissionLogic；引擎会把它放进 MissionLogics
            missionStarter.AddBehavior(new CaptureFlagLogic());
        }
    }
}
```

引擎内部流程（`MissionState.AddBehaviorsToMission` → `Mission.InitializeStartingBehaviors` → `Mission.AddMissionBehavior`）：

1. 所有 `MissionBehavior` 按 `OfType<MissionLogic>()` / `MissionNetwork` / 其它 分成三类；
2. `AddMissionBehavior` 把每个 behavior 加进 `MissionBehaviors`，并因 `BehaviorType == Logic` 同时加进 `MissionLogics`（`Mission.cs:4603`）；
3. 若中途想动态添加，也可在另一个已挂载的 logic/behavior 里调用：

```csharp
// 在某个已初始化的 MissionBehavior/Logic 中，运行时挂一个新逻辑
Mission.Current.AddMissionBehavior(new ReinforcementLogic());
```

获取已存在的 logic（用基类 `MissionBehavior` 提供的泛型查询）：

```csharp
CaptureFlagLogic logic = Mission.Current.GetMissionBehavior<CaptureFlagLogic>();
logic?.RegisterCapture();
```

`Mission.MissionLogics`（`public List<MissionLogic>`，`Mission.cs:1325`）也可直接遍历，但多数情况用 `GetMissionBehavior<T>()` 更稳。

## 生命周期与调用时机

`MissionLogic` 的完整生命周期来自基类 `MissionBehavior`。引擎在 `Mission.AfterStart()`（`Mission.cs:3791`）和 `EndMissionInternal()`（`Mission.cs:4561`）里按下述顺序调用钩子。**注意：`MissionBehaviors` 的 Tick 是按反向顺序（`Count-1`→`0`）遍历的**（`Mission.cs:3724`、`3733`），所以“最后注册的逻辑先 Tick”。

### 启动阶段（AfterStart 内，正向顺序）

| 钩子 | 何时触发 |
|------|----------|
| `OnBehaviorInitialize()` | 每个 behavior 初始化（此时 `Mission` 已就绪，但场景还没正式开始）。 |
| `EarlyStart()` | 紧接着调用，仍属“开场前”。 |
| `AfterStart()` | 场景正式开始、状态切到 `State.Continuing` 之前调用。 |

### 运行阶段（每帧）

| 钩子 | 何时触发 |
|------|----------|
| `OnPreDisplayMissionTick(float dt)` | 显示前 Tick。 |
| `OnMissionTick(float dt)` | 主 Tick，每帧一次；做规则检测、计时、条件判定都放这。 |
| `OnFixedMissionTick(float fixedDt)` | 固定步长 Tick（物理/确定性逻辑）。 |

`MissionLogic` 还继承了所有 Agent/Team/对象事件钩子（`OnAgentRemoved`、`OnAgentHit`、`OnAddTeam` 等），用法与 `MissionBehavior` 完全一致。

### 裁决阶段（仅 MissionLogics 会被轮询）

这些是 `MissionLogic` 自己的成员，引擎只在 `MissionLogics` 列表上调用：

| 钩子 | 引擎调用点 | 作用 |
|------|-----------|------|
| `bool MissionEnded(ref MissionResult missionResult)` | `CheckMissionEnded`（`Mission.cs:4742`）每帧轮询 | 返回 `true` 即宣告战斗结束；需自行构造 `MissionResult`。第一个返回 `true` 的 logic 决定结果。 |
| `OnMissionResultReady(MissionResult missionResult)` | `MissionResultReady`（`Mission.cs:4759`） | 某 logic 结束战斗后立即回调，用来读结果/做结算。 |
| `ShowBattleResults()` | `CheckMissionEnd`（`Mission.cs:4786`） | 战斗结束后展示战报。 |
| `OnBattleEnded()` | `OnEndMissionResult`（`Mission.cs:4684`） | 战斗结束的统一入口。 |
| `OnEndMissionRequest(out bool canLeave)` | 玩家按离开键（`OnEndMissionRequest`，`Mission.cs:3830`） | 返回 `canLeave = false` 可阻止离开（如任务未完成）；返回 `InquiryData` 可弹确认框。 |
| `OnRetreatMission()` / `OnSurrenderMission()` | `RetreatMission()` / `SurrenderMission()`（`Mission.cs:2849`、`2865`） | 撤退/投降时回调。 |
| `OnAutoDeployTeam(Team team)` | 自动部署阶段 | 队伍自动部署时回调。 |
| `List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)` | `Mission.GetExtraEquipmentElementsForCharacter`（`Mission.cs:4728`） | 给角色叠加额外装备；不叠加时返回 `null`。 |

### 清理阶段（EndMissionInternal 内，正向顺序）

| 钩子 | 何时触发 |
|------|----------|
| `OnEndMissionInternal()` → `OnEndMission()` | 所有 Agent/Team 被销毁**之前**调用，是释放你自定义资源、解订阅事件的正确位置。 |
| `OnRemoveBehavior()` | 被 `RemoveMissionBehavior` 移除时调用（动态卸载时）。 |

## 核心成员说明

### 结束控制的三个钩子（最常用）

- **`MissionEnded(ref MissionResult missionResult)`**：每帧被 `CheckMissionEnded` 轮询。返回 `true` 并把结果写进 `ref` 参数即可结束战斗。典型实现是“判断某方是否全灭 / 目标是否达成”。注意：多个 logic 都返回 `true` 时，只有**先被轮询到的那个**生效（`CheckMissionEnded` 一命中就 `return`）。
- **`OnEndMissionRequest(out bool canLeave)`**：玩家尝试离场时轮询全部 logic。若返回 `canLeave = false`，离场被取消——务必同时给玩家提示，否则看起来像“按键失灵”。返回 `InquiryData` 会弹出确认对话框并暂停游戏。
- **`OnMissionResultReady` / `ShowBattleResults` / `OnBattleEnded`**：战斗真正结束后的结算链，适合写战报、发奖励、触发剧情。

### 装备与部署

- **`GetExtraEquipmentElementsForCharacter`**：引擎在生成角色时聚合所有 logic 的返回值，叠加额外装备。无额外装备必须返回 `null`（基类默认即返回 `null`），不要返回空列表以外的值去“覆盖”别人的装备。
- **`OnAutoDeployTeam`**：自动部署阶段回调，可在此改写某队的部署。

### 继承自 MissionBehavior 的关键钩子（同样可用）

`MissionLogic` 完全继承 `MissionBehavior` 的事件体系，常用：`OnAgentRemoved`、`OnAgentCreated`、`OnAgentHit`、`OnAddTeam`、`OnMissionTick`、`OnMissionModeChange`。详细事件列表见 [MissionBehavior](../mission/MissionBehavior/)。

## 何时用 / 何时不要用

**用 `MissionLogic` 当：**
- 你需要**裁决战斗胜负/结果**（自定义胜利条件、护送目标、限时生存）。
- 你需要接管**撤退/投降/离场**逻辑。
- 你需要给生成的单位**追加装备**或控制**自动部署**。
- 你想写一段纯粹的玩法规则，不需要 Gauntlet UI。

**不要用 `MissionLogic` 当（改用正确替代）：**
- 你需要一个**Gauntlet/UI 面板** → 用 `MissionView` / `MissionGauntletScreen`，把 UI 留在视图层，`MissionLogic` 只负责数据。
- 你只是想**监听 Agent 事件做记录/统计**，且完全不涉及胜负裁决 → 普通 `MissionBehavior`（`BehaviorType.Other`）足够，不必进 `MissionLogics` 列表。
- 你想**跨多场 Mission 长期存在**（如战役级追踪）→ 这是 `CampaignBehaviorBase` 的活，见 [CampaignBehaviorBase](../campaign-ext/CampaignBehaviorBase/)。`MissionLogic` 只活在一场 Mission 内。
- 你直接 `new MissionLogic()` 当普通对象用 → 它的 `Mission` 为 `null`，必须经由 `AddMissionBehavior` 注册。

## 依赖图（可点击）

**上游（谁创建/驱动它）**
- [Mission](../mission/Mission/) — 持有并轮询 `MissionLogics`，在 `AfterStart`/`CheckMissionEnded`/`EndMissionInternal` 中调用其钩子。
- [MissionBehavior](../mission/MissionBehavior/) — 直接基类，提供全部事件与 Tick 钩子。
- `MBSubModuleBase` / `MissionGameStarter` — 注册入口（见 [MBSubModuleBase](../core/MBSubModuleBase/)）。

**下游（它操作/查询的对象）**
- [Agent](../mission/Agent/) — 通过 `Mission.Agents` 读取/操控单位。
- [Team](../mission/Team/) / [Formation](../mission/Formation/) — 阵营与编队状态。
- `MissionResult`（引擎类型，无独立页）— `MissionEnded` 写入的结果对象。
- [MissionObject](./MissionObject/) — 场景交互物，可监听其事件。

**相关 Events · Models · 存档**
- 事件钩子：`OnAgentRemoved`、`OnAddTeam`、`OnMissionModeChange` 等（继承自 `MissionBehavior`）。
- 结果展示：`ShowBattleResults` 通常配合 `MissionResult` 与战斗结算 UI。
- 装备：`GetExtraEquipmentElementsForCharacter` 与 `MissionGameModels` 的装备/角色生成模型协作。
- 存档：`MissionLogic` 本身**不入战役存档**；若需保存跨场进度，必须把状态写进战役层（[Campaign](../campaign/Campaign/) 或 `CampaignBehaviorBase`），不要指望 logic 实例被持久化。

## 风险（可能导致崩溃 / 坏档的用法）

1. **Mission 结束后还持有 Agent/Team/Formation 引用**：`EndMissionInternal` 会 `Agents` 清空、`Teams.Clear()`（`Mission.cs:4575-4584`）。在 `OnEndMission` 之后、或在离场回调里缓存的 `Agent` 引用再去访问 `agent.Health`、`.Team`，会命中已销毁对象 → `NullReferenceException` 或读到野数据。**规则：进入 `OnEndMission` 就停止一切对场景对象的访问。**
2. **在 Mission 作用域外访问 Mission 状态**：`Mission.Current == null` 时（大地图、菜单）任何 `Mission.Current.X` 都会崩。所有 logic 代码必须 `if (Mission.Current == null) return;` 兜底。
3. **运行时动态增删 logic 会跳过初始化钩子**：`AddMissionBehavior` 只调用 `OnCreated()`，不会补跑 `OnBehaviorInitialize`/`EarlyStart`/`AfterStart`。动态加进来的 logic 若依赖这些钩子会处于半初始化状态。同理 `RemoveMissionBehavior` 会立即调用 `OnRemoveBehavior` 并把 `Mission` 置 `null`——别在它自己的钩子里再访问 `this.Mission`。
4. **在 Tick/事件中修改 MissionLogics 集合本身**：`OnMissionTick` 是反向遍历 `MissionBehaviors` 的，若在 Tick 内 `AddMissionBehavior` 会改列表长度，可能让新逻辑在同帧被 Tick（甚至递归）；移除自己更危险。需要增删时，攒到 `OnEndMission` 之后或下一帧再操作。
5. **`MissionEnded` 误返回 true**：一旦某个 logic 返回 `true`，战斗立即结束并进入结算。条件判断不严谨（比如把“敌方暂无人”误判为“敌方全灭”）会导致战斗瞬间结束。
6. **`OnEndMissionRequest` 返回 `canLeave=false` 却不给反馈**：玩家按离开没反应，像卡死。要么放行，要么弹 `InquiryData` 说明原因。
7. **从 Mission 内直接改战役数据**：在 logic 里直接动 `Campaign.Current` 的地图状态可能破坏存档一致性。需要影响战役时，走 `CampaignEventDispatcher` 或在 `OnEndMission` 里回调战役层，避免边打边改世界状态。

## 最小真实示例

### 示例 1：注册一个自定义 MissionLogic（真实获取路径）

```csharp
// SubModule 中登记；引擎进入任意 Mission 时都会挂上它
public class CaptureTheFlagSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);
        if (starterObject is MissionGameStarter missionStarter)
        {
            missionStarter.AddBehavior(new CaptureFlagLogic());
        }
    }
}

// 自定义逻辑：夺旗胜利 + 禁止未完成时离场
public class CaptureFlagLogic : MissionLogic
{
    private bool _flagCaptured;

    public override void OnMissionTick(float dt)
    {
        if (_flagCaptured) return;
        // 真实判定：玩家队拿到了旗子（这里简化成按帧检测某个 MissionObject 状态）
        var flag = Mission.Current.GetMissionBehavior<FlagHolderBehavior>();
        if (flag != null && flag.HeldByPlayerTeam)
        {
            _flagCaptured = true;
        }
    }

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (_flagCaptured)
        {
            missionResult = MissionResult.CreateSuccessful(Mission.Current);
            return true;
        }
        return false;
    }

    public override InquiryData OnEndMissionRequest(out bool canLeave)
    {
        if (!_flagCaptured)
        {
            canLeave = false;
            return new InquiryData(
                "夺旗未完成",
                "必须先夺取旗帜才能离开战斗。",
                true,
                false,
                "继续战斗",
                null,
                null,
                null);
        }
        canLeave = true;
        return null;
    }
}
```

### 示例 2：在另一逻辑里给角色追加装备并订阅战斗结束

```csharp
public class EliteGearLogic : MissionLogic
{
    public override List<EquipmentElement> GetExtraEquipmentElementsForCharacter(
        BasicCharacterObject character, bool getAllEquipments = false)
    {
        // 仅给玩家队角色追加一件装备；无额外装备返回 null（不能返回空列表覆盖他人）
        if (Mission.Current.PlayerTeam != null &&
            character is CharacterObject co && co.IsPlayerCharacter)
        {
            var item = MBObjectManager.Instance.GetObject<ItemObject>("empire_sword_2");
            return new List<EquipmentElement> { new EquipmentElement(item) };
        }
        return null;
    }

    public override void OnMissionResultReady(MissionResult missionResult)
    {
        if (missionResult.PlayerVictory)
        {
            InformationManager.DisplayMessage(
                new InformationMessage("战斗胜利，结算奖励。"));
        }
    }
}
```

> 两个示例里用到的 `MissionResult.CreateSuccessful`、`InquiryData`、`MBObjectManager.Instance.GetObject<ItemObject>`、`InformationManager.DisplayMessage` 均为引擎真实 API；`FlagHolderBehavior` 仅作占位示意（替换为你的真实 behavior 类型）。示例中不含 `// ...`、假数据或错误类型名。

## 跨版本提示

- `MissionLogic` 类在 v1.3.0 / v1.3.15 / v1.4.5 中**完全一致**：同样是 `abstract class MissionLogic : MissionBehavior`，`BehaviorType` 锁 `Logic`，同样的 9 个裁决钩子签名未变。
- **API 误区纠正（重要）**：
  - 本版本**没有** `Mission.AddMissionLogic(...)` 这个方法。注册逻辑统一走 `Mission.AddMissionBehavior(...)`（或 `MissionGameStarter.AddBehavior(...)`）；因为 `MissionLogic.BehaviorType == Logic`，引擎会自动把它加进 `MissionLogics`。
  - 本版本**没有** `MissionLogicCollection` 这个类。所谓“逻辑集合”就是 `Mission` 上的 `public List<MissionLogic> MissionLogics` 属性——直接遍历它即可，不要去寻找一个不存在的类。
- v1.4.5 对 behavior 的创建/销毁顺序更严格：避免在 `MissionLogic` 构造函数里访问 `Mission.Current`（`Mission` 此时还是 `null`，要到 `OnBehaviorInitialize` 之后才就绪）。

## 参见

- ↑ 父级：[Mission 桶索引](../)
- ↔ 同级：[Mission](../mission/Mission/) · [MissionBehavior](../mission/MissionBehavior/) · [Agent](../mission/Agent/) · [Team](../mission/Team/) · [Formation](../mission/Formation/)
- 相关类：[MissionObject](./MissionObject/) · [MissionObjective](./MissionObjective/) · [MBSubModuleBase](../core/MBSubModuleBase/) · [CampaignBehaviorBase](../campaign-ext/CampaignBehaviorBase/)
