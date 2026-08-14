---
title: "验收场景 E — 仅靠文档能否完成五个典型 mod 任务"
description: "最终验收 §8 E 项的证据：五个开发者真实任务场景下，仅依靠本站文档即可指出正确入口类、关键方法、风险与链出页，无需打开 IDE 猜测。"
---

# 验收场景 E — 仅靠文档完成五个典型 mod 任务

> 本页是 [`文档契约`](../doc-contract) 与最终验收 [`§8 E`](../crash-boundaries) 的实测证据。
> 目标：证明一个**未参与写作的开发者**，只靠本站文档就能回答以下五个任务「该碰哪个类、调哪个方法、错在哪、下一步读哪页」。
> 每个场景的「答案要点」都链接到对应手写深页 / 族页，且这些页均含心智模型、风险段与真实示例。

---

## 场景 1 — 如何注册 SubModule 并在战役里加 Behavior？依赖哪些类？

**问题**：我要让 mod 在游戏启动后给战役地图加一段「每周给主角发工资」的逻辑。入口在哪？要依赖哪些类？

**答案要点（仅文档即可定位）**：

1. **入口是 `MBSubModuleBase`**，不是自己 `new` 一个状态对象。派生类重写 [`MBSubModuleBase.OnGameStart(Game, IGameStarter)`](../../api/core/MBSubModuleBase/)，把传入的 `starterObject` 转型为 `CampaignGameStarter` 后调用 `AddBehavior`。
   - 关键：早期钩子（`OnSubModuleLoad`）里 `Campaign.Current` / `Game.Current` 仍为空，访问会 `NullReferenceException`（见该页「风险 1」）。
2. **登记簿是 `CampaignGameStarter`**：它只在战役启动那一小段时间有效，引擎创建并分发给各 SubModule；你**不要自己 `new`**。用 `AddBehavior(new MyBehavior())` 把行为挂进去（[`CampaignGameStarter`](../../api/campaign-ext/CampaignGameStarter/)「如何注册 Behavior」）。
   - 若行为在**读档**时也要存在，用 `InitializeGameStarter` 而非 `OnCampaignStart`（`OnCampaignStart` 只在非读档开局触发）。
3. **你的行为继承 `CampaignBehaviorBase`**，必须实现两个抽象方法：`RegisterEvents()`（订阅 [`CampaignEvents`](../../api/campaign-ext/CampaignEvents)）与 `SyncData(IDataStore)`（跨存档保存字段）。见 [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/)「核心成员」。
4. **运行期取用 / 动态增删**走 `Campaign.Current.CampaignBehaviorManager`：[`CampaignBehaviorManager`](../../api/campaign-ext/CampaignBehaviorManager/)（`GetBehavior<T>()` 找不到返回 `null`，务必判空；`ClearBehaviors()` 不清事件监听，会留悬空监听器）。

**依赖链（文档互链已讲清）**：

```
SubModule.xml → Module.CurrentModule → MBSubModuleBase.OnGameStart
        → CampaignGameStarter.AddBehavior(new MyBehavior())
        → Campaign 构造 CampaignBehaviorManager
        → CampaignBehaviorBase.RegisterEvents() / SyncData()
        → CampaignEvents 分发
```

**下一步**：读 [模块系统](../module-system) 与 [开发者任务路线图](../developer-roadmap)；风险细节见 [崩溃边界](../crash-boundaries)。

---

## 场景 2 — 如何安全给 Hero 金钱 / 杀人 / 改王国（为何不能直接改字段）？

**问题**：我想给主角发钱、处决一个俘虏、让某个家族叛乱。能不能直接写 `hero.Gold = ...` 或 `clan.Kingdom = ...`？

**答案要点（文档明确禁止，并给出正确入口）**：

- **给钱**：用 [`GiveGoldAction.ApplyBetweenCharacters(Hero from, Hero to, int amount)`](../../api/campaign-ext/GiveGoldAction/)。它按资金两端同步余额、通知、交易文本与经济事件。直接写 `Gold` 字段会绕过经济副作用与日志；调用前校验支付方余额与 `Campaign.Current != null`。
- **杀人**：用 [`KillCharacterAction.ApplyByExecution(victim, killer, showNotification)`](../../api/campaign-ext/KillCharacterAction/)（处决）或 `ApplyByBattle`（战斗结算）。「死亡」不是 `hero.IsAlive = false`——Action 内部处理 Party / Clan / 继承 / 关系 / 事件级联。直接改字段会跳过囚禁、家族领导权与存档引用更新。
  - 风险：在 Mission / MapEvent 尚未结算时杀英雄会让战斗双方与死亡日志半完成；在 `HeroKilled` 回调里再次杀同一英雄会重复触发继承与事件。
- **改王国 / 外交**：家族变动用 [`ChangeKingdomAction.ApplyByLeaveWithRebellionAgainstKingdom(clan, showNotification)`](../../api/campaign-ext/ChangeKingdomAction/)；宣战用 [`DeclareWarAction.ApplyByKingdomDecision(f1, f2)`](../../api/campaign-ext/DeclareWarAction/)；停战用 [`MakePeaceAction.Apply(ally, opponent)`](../../api/campaign-ext/MakePeaceAction/)。
  - 注意：`ChangeKingdomAction` 的叛乱分支内部会继续调用 `DeclareWarAction`，**不要在外层再手动宣战**，否则重复事件与日志。

**为什么不能直接改字段（文档核心立场）**：所有 `*Action` 是「世界变更的唯一正当入口」——它们同步双向列表、战争表、继承、关系、通知和**存档一致性**。直接赋值字段跳过事件派发，导致读档后状态错位、AI 误判甚至坏档。见各 Action 页的「风险」段与 [`崩溃边界`](../crash-boundaries)「世界变更必须走 Action.Apply」。

**下一步**：浏览 [Actions 总览](../../api/campaign-ext/actions/) 找其它入口；关系变更见 `ChangeRelationAction`。

---

## 场景 3 — 如何加自定义存档字段且不坏档？

**问题**：我的 mod 要记住「入侵已激活多少天」。怎么存进存档，又不会让老存档读不出来？

**答案要点（文档给出两条互斥路线）**：

- **路线 A — 行为私有字段（最常见）**：在 `CampaignBehaviorBase` 子类里声明私有字段，在 `SyncData(IDataStore)` 中登记：
  ```csharp
  [SaveableField(0)] private MyData _data = new MyData();
  public override void SyncData(IDataStore dataStore)
      => dataStore.SyncData("MyInvasionData", ref _data);
  ```
  见 [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/)「`SyncData`」与 [`SaveManager`](../../api/save-system/SaveManager/)（行为字段**不需要**额外 `[SaveableField]` 之外的对象图契约）。
- **路线 B — 新类进入存档对象图**：若你新增一个会被多个对象引用的类，才需要 [`SaveableTypeDefiner`](../../api/save-system/SaveableTypeDefiner/)：在 definer 里 `AddClassDefinition(typeof(T), localId)` 并配套 `[SaveableField]` / `[SaveableProperty]`，容器类型还要 `ConstructContainerDefinition`。

**防坏档要点（文档逐条列出）**：
1. **不要直接替换 `ISaveDriver` 或手动调 `SaveManager.Save`**——它是引擎存档管线，不是 Behavior 状态的替代 API（[`SaveManager`](../../api/save-system/SaveManager/)「概述」）。
2. **`saveBaseId` / `LocalSaveId` 是永久契约**：两个 mod 范围重叠会产生相同 SaveId → 定义冲突；发布后不要重排 `LocalSaveId`。
3. **遗漏容器定义**会让 `DefinitionContext` 报「未定义类型」，保存直接失败——不要把异常吞掉后继续发布。
4. **改签名 / 删类 / 换 resolver 影响旧档**：需要兼容 resolver 或迁移策略。
5. `Define*` 阶段**不要访问 `Campaign.Current` 或触发事件**——那些对象可能尚未初始化。

**下一步**：读 [存档系统](../save-system) 与 [崩溃边界](../crash-boundaries)「存档」专题；确认 definer 模式见 [`SaveableTypeDefiner`](../../api/save-system/SaveableTypeDefiner/) 的真实原生示例。

---

## 场景 4 — 如何加 MissionBehavior 并在 Agent 死亡时处理？

**问题**：我要在战斗里统计「玩家击杀了多少英雄」，并在某个英雄阵亡时弹提示。怎么挂行为？Agent 死亡时怎么安全取数据？

**答案要点（文档给出注册方式与死亡时序）**：

- **入口**：派生 [`MissionBehavior`](../../api/mission/MissionBehavior/)（需要做结束裁决时派生 `MissionLogic`），实现 `BehaviorType` 并重写 `OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`。
- **注册**：
  - 新开场景：通过 `MissionState.OpenNew(...)` 的委托返回 behavior 数组（源码 `SandBoxMissions` 模式，[`MissionBehavior`](../../api/mission/MissionBehavior/)「真实注册方式」）。
  - 已存在的 Mission：`Mission.Current.AddMissionBehavior(new MyBehavior())`——但**只触发 `OnCreated`，不会补跑** `OnBehaviorInitialize` / `EarlyStart` / `AfterStart`。
  - 注意：**没有 `MissionGameStarter` 类型**，不要照抄 Campaign 的 `CampaignGameStarter`。
- **Agent 死亡时序（关键）**：Mission 先设 `State`、把 Agent 从 Team 活动集合停用，再通知 `OnEarlyAgentRemoved` / `OnAgentRemoved`，最后 `OnRemove` / `OnDelete`。所以在 `OnAgentRemoved` 里：
  - **立即抽取值**（`Index`、`IsHero`、`Team?.Side`、`affectorAgent?.IsMainAgent`），不要持有 `Agent` 引用带出 Mission；
  - `affectedAgent.Team` 此时仍可用作即时分类，但 Team 已把它移出活动列表；
  - 不要在同一回调里对同对象重入调用 `Die`。
- **风险**：`Mission.Current == null` 时 tick；`OnAgentRemoved` 之后访问 native 状态；`OnRemoveBehavior` 后仍接收外部事件；把 Mission 层对象写进存档——都会导致空引用 / 无效 native handle / 坏档。

**下一步**：[`Agent`](../../api/mission/Agent/) 详述 `State` / `IsActive()` / `Health` 边界；与战役层对照见 [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/)。

---

## 场景 5 — 想改党派战争得分，该找 Model 还是 Action？

**问题**：我想让某个家族更容易被 AI 判定为「应该宣战」。是去改 `DiplomacyModel` 还是直接调 `DeclareWarAction`？

**答案要点（文档清晰区分「评估」与「应用」）**：

- **战争得分是「算出来的」，由 Model 负责**：[`DiplomacyModel`](../../api/campaign-ext/DiplomacyModel/)（接口）/ [`DefaultDiplomacyModel`](../../api/campaign-ext/DefaultDiplomacyModel/)（默认实现）只**返回分数 / 阈值 / 成本 / 关系**，本身不宣战、不和平、不改变关系。相关方法：`GetScoreOfDeclaringWar` / `GetWarProgressScore` / `GetInfluenceCostOf*` / `GetScoreOfClanToJoinKingdom`。
  - 它是**纯评估、无副作用**的两阶段流程的第一阶段；界面与 AI 会**重复调用**这些方法，所以绝不能在里面改战争或影响力状态。
- **真正改变外交状态的是 Action**：要落地「宣战 / 和平 / 加离王国」，用 [`DeclareWarAction`](../../api/campaign-ext/DeclareWarAction/) / [`MakePeaceAction`](../../api/campaign-ext/MakePeaceAction/) / [`ChangeKingdomAction`](../../api/campaign-ext/ChangeKingdomAction/)。Action 才负责更新 `FactionManager`、战争表、通知、`OnWarDeclared` 事件与存档一致性。
- **正确做法**：
  1. **调分**：派生自己的 `DiplomacyModel`（继承 `DefaultDiplomacyModel`），在 `CampaignGameStarter` 里 `AddModel<DefaultDiplomacyModel>(new MyDiplomacyModel())`——复用默认值再改写评分。
  2. **落地**：由 KingdomDecision / 玩家操作调用对应的 `*Action.Apply*`。
  3. **禁止**：直接改 `StanceLink`、写 `IsAtWarWith`、或只调 `FactionManager.DeclareWar`——会漏掉政治停滞、地图图标刷新与事件副作用。

**一句话**：**调分找 Model，落地找 Action**；Model 回答「值不值 / 要多少」，Action 负责「改世界 + 存档一致」。

**下一步**：浏览 [Models 总览](../../api/campaign-ext/models/) 找其它可调模型；外交决策链见 [`DiplomacyModel`](../../api/campaign-ext/DiplomacyModel/) 的上下游表。

---

## 结论

| 场景 | 仅靠文档可定位的入口类 | 关键方法 | 风险页 |
|------|------------------------|----------|--------|
| 1 注册 SubModule + Behavior | `MBSubModuleBase` · `CampaignGameStarter` · `CampaignBehaviorBase` · `CampaignBehaviorManager` | `OnGameStart` / `AddBehavior` / `RegisterEvents` / `SyncData` | [崩溃边界](../crash-boundaries) |
| 2 安全改 Hero 状态 | `GiveGoldAction` · `KillCharacterAction` · `ChangeKingdomAction` · `DeclareWarAction` · `MakePeaceAction` | `ApplyBetweenCharacters` / `ApplyByExecution` / `ApplyByLeaveWithRebellionAgainstKingdom` / `ApplyByKingdomDecision` / `Apply` | [Actions 总览](../../api/campaign-ext/actions/) |
| 3 自定义存档 | `CampaignBehaviorBase.SyncData` · `SaveableTypeDefiner` · `SaveManager` | `dataStore.SyncData` / `AddClassDefinition` / `ConstructContainerDefinition` | [存档系统](../save-system) |
| 4 MissionBehavior + Agent 死亡 | `MissionBehavior` · `Agent` · `MissionLogic` | `OnAgentRemoved` / `AddMissionBehavior` / `MissionState.OpenNew` | [MissionBehavior](../../api/mission/MissionBehavior/) |
| 5 战争得分 Model vs Action | `DiplomacyModel` · `DefaultDiplomacyModel` · `DeclareWarAction` · `MakePeaceAction` | `GetScoreOfDeclaringWar` / `AddModel<DefaultDiplomacyModel>` / `ApplyByKingdomDecision` | [Models 总览](../../api/campaign-ext/models/) |

五个场景对应的深页均存在且达标（心智模型 + 风险段 + 真实示例 + 双向导航），无需打开 IDE 即可完成正确接入。

## 导航

- ↑ 上级：[架构总览](../)
- ↔ 同级：[文档契约](../doc-contract) · [崩溃边界](../crash-boundaries) · [模块系统](../module-system) · [开发者路线图](../developer-roadmap)
- 相关：[SDK 总览](../sdk-overview) · [存档系统](../save-system)
