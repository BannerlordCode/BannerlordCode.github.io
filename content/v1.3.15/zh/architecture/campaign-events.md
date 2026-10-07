---
title: "战役事件总线：订阅、时机与生命周期"
description: "CampaignEvents 事件总线的机械原理与 mod 接入手册：MbEvent<T> 监听链表如何工作、Behavior 如何在 RegisterEvents/RemoveListeners 中订阅与退订、tick/Action/存档/读档四条触发链的时机，以及 HeroKilled、OnClanDestroyed 等常见事件的真实签名与触发点。"
---

# 战役事件总线：订阅、时机与生命周期

> 上一页 [战役事件系统](../campaign-event-system) 讲清了「三个类如何协作」；本页回答更工程化的问题：**监听器在底层怎么存、订阅代码怎么写、事件在什么时机触发、哪些事件可以订阅**。读完本页你应该能独立写出一个不会重复订阅、不会漏退订、知道每个事件何时触发的 Behavior。

## 一句话定位

`CampaignEvents` 是战役层的**静态事件门面（facade）**：mod 通过 `CampaignEvents.XxxEvent.AddNonSerializedListener(this, handler)` 订阅，游戏内核通过 `CampaignEventDispatcher.Instance.OnXxx()` 触发；底层每个事件是一条按 owner 组织的监听器链表。

## 心智模型

### 底层机制：一条按 owner 组织的监听器链表

每个「事件」在底层是 `MbEvent<T>` 实例——它不存业务数据，只存一条**单向链表**，链表节点是 `EventHandlerRec<T> { object Owner; Action<T> Action; EventHandlerRec<T> Next }`：

```
CampaignEvents.HeroKilledEvent  (static 属性)
        │  get { return CampaignEvents.Instance._heroKilled; }
        ▼
MbEvent<T> _heroKilled  (实例字段，随 Campaign 创建)
        │
        ▼  _nonSerializedListenerList (头节点)
   ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
   │ Owner = 你的Behavior │ → │ Owner = 你的Behavior │ → │ Owner = 原生Behavior │ → null
   │ Action = OnHeroKilled │    │ Action = OnDailyTick  │    │ Action = 内核handler │
   └─────────────────┘    └─────────────────┘    └─────────────────┘
```

三个关键操作（`MbEvent<T>` 源码语义）：

| 操作 | 底层行为 | mod 什么时候用 |
|------|----------|----------------|
| `AddNonSerializedListener(owner, action)` | **头插法**新建节点：`newRec.Next = _head; _head = newRec` | 在 `RegisterEvents()` 里订阅 |
| `Invoke(args)` | 从头节点开始**顺序遍历**链表，逐个调用 `Action(args)` | 游戏内核触发事件时（你不直接调） |
| `ClearListeners(owner)` | 遍历链表，**摘除所有 `Owner == owner` 的节点** | 退订、去重、行为卸载时 |

> **推论 1**：同一个 owner 对同一事件多次 `AddNonSerializedListener` 会插入多个节点——handler 会被调用多次。所以 `RegisterEvents()` 里要先 `ClearListeners(this)` 再订阅。
>
> **推论 2**：`Invoke` 是同步顺序执行，没有异常隔离——一个 handler 抛异常，链表后续 handler 全部中断，且异常会沿 tick 链上抛。
>
> **推论 3**：监听器存在 `CampaignEvents` 实例的字段里，**不写入存档**。读档后 `CampaignBehaviorManager` 重建行为并再次调用 `RegisterEvents()`，链表重新挂上。

### 订阅/退订：mod 的唯一正确姿势

```
MBSubModuleBase.OnSubModuleLoad
  └─ CampaignBehaviorManager.AddBehavior(new MyBehavior())   ← 自动调用 RegisterEvents()
       └─ MyBehavior.RegisterEvents()
            ├─ CampaignEvents.HeroKilledEvent.ClearListeners(this)   ← 去重（可选但推荐）
            └─ CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled)

运行期卸载
  └─ CampaignBehaviorManager.RemoveBehavior<MyBehavior>()
       └─ CampaignEventDispatcher.Instance.RemoveListeners(t)   ← 自动退订该 behavior 的全部监听

读档
  └─ CampaignBehaviorManager.RegisterEvents()   ← 对所有行为重新调用 RegisterEvents()，链表重建
```

**关键事实**：`RemoveBehavior<T>()` 会自动调 `CampaignEventDispatcher.Instance.RemoveListeners(t)`——它扇出到包括 `CampaignEvents` 在内的所有 receiver，把你挂在该 behavior 上的**所有**监听一次性摘掉。所以正常通过 `AddBehavior`/`RemoveBehavior` 管理的行为，不需要手写 `RemoveListeners`；只有长期存活、需要手动管理订阅的行为才需要。

### 事件时机：四条触发链

事件不是凭空触发的——每条事件都能追溯到一条具体的调用链：

**1. Tick 链（周期事件）**

```
CampaignPeriodicEventManager（按游戏时间触发）
  └─ Campaign.DailyTick()                        [Campaign.cs:951]
       ├─ CampaignEventDispatcher.Instance.DailyTick()   → CampaignEvents.DailyTickEvent
       └─ 每 7 天：CampaignEventDispatcher.Instance.WeeklyTick()  → WeeklyTickEvent
  └─ Campaign.HourlyTick()  [Campaign.cs:933]  → HourlyTickEvent
  └─ Campaign.QuarterHourlyTick() [Campaign.cs:945] → QuarterHourlyTickEvent
  └─ 每帧：Campaign.TickEvent
```

**2. Action 链（世界变更事件）**——改世界走 `*Action.Apply`，Action 内部触发事件：

```
KillCharacterAction.Apply(...)                         [KillCharacterAction.cs:149]
  └─ CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
       └─ CampaignEvents.HeroKilledEvent.Invoke(...)

DestroyClanAction.Apply(...)                           [DestroyClanAction.cs:66]
  └─ CampaignEventDispatcher.Instance.OnClanDestroyed(destroyedClan)

ChangeOwnerOfSettlementAction.Apply(...)               [ChangeOwnerOfSettlementAction.cs:84]
  └─ CampaignEventDispatcher.Instance.OnSettlementOwnerChanged(settlement, openToClaim, newOwner, oldOwner, capturerHero, detail)
```

**3. 存档链**——`SaveHandler` 在存档流程的三个点上广播：

```
SaveHandler.Save(...)
  ├─ OnSaveStarted()                    [SaveHandler.cs:174]
  │    ├─ Campaign.Current.WaitAsyncTasks()      ← 先等异步任务跑完
  │    └─ CampaignEventDispatcher.Instance.OnSaveStarted()
  ├─ CampaignEventDispatcher.Instance.OnBeforeSave()   [SaveHandler.cs:126]
  └─ OnSaveEnded(isSaveSuccessful, name)  [SaveHandler.cs:183]
       └─ CampaignEventDispatcher.Instance.OnSaveOver(isSaveSuccessful, name)
```

**4. 开局/读档链**：

```
Campaign 创建 / 读档完成
  ├─ Campaign.cs:2120  CampaignEventDispatcher.Instance.OnNewGameCreated(gameStarter)
  └─ Campaign.cs:848   CampaignEventDispatcher.Instance.OnGameLoaded(starter)
       └─ 之后：OnGameLoadFinishedEvent
```

> **时机铁律**：`OnNewGameCreated` / `OnGameLoaded` 是访问世界数据的**最早安全点**——此时 `Campaign.Current` 已就绪、行为已注册。在 `RegisterEvents()` 里直接访问 `Hero.MainHero` 等世界状态是危险的（可能尚未创建）。

## 常见事件目录（1.3.15 已核实签名）

以下签名全部核对自 `bannerlord-1.3.15` 源码 `CampaignEvents.cs`。

### 英雄生死

| 事件 | 签名 | 触发点 | 典型用途 |
|------|------|--------|----------|
| `HeroKilledEvent` | `IMbEvent<Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification>` | `KillCharacterAction.cs:149` | 死亡结算、继承处理、通知 |
| `BeforeHeroKilledEvent` | 同上 | `KillCharacterAction`（死亡前） | 死亡前干预、记录 |
| `CanHeroDieEvent` | `ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | 死亡判定 | **投票/改写**：`ref bool result` 可阻止死亡 |
| `HeroWounded` | `IMbEvent<Hero>` | 受伤时 | 受伤后处理 |

### 家族（Clan）

| 事件 | 签名 | 触发点 | 典型用途 |
|------|------|--------|----------|
| `OnClanCreatedEvent` | `IMbEvent<Clan, bool isCompanion>` | `RebellionsCampaignBehavior.cs:296` 等 | 新家族初始化 |
| `OnClanDestroyedEvent` | `IMbEvent<Clan>` | `DestroyClanAction.cs:66` | 家族灭亡清理 |
| `OnClanLeaderChangedEvent` | `IMbEvent<Hero, Clan>` | 领袖变更 | 权力交接逻辑 |
| `OnClanChangedKingdomEvent` | `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool>` | 阵营变更 | 外交关系重算 |

### 据点（Settlement）

| 事件 | 签名 | 触发点 | 典型用途 |
|------|------|--------|----------|
| `OnSettlementOwnerChangedEvent` | `IMbEvent<Settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail>` | `ChangeOwnerOfSettlementAction.cs:84` | **据点易主**（征服/授予/叛乱） |
| `SettlementEntered` | `IMbEvent<MobileParty, Settlement, Hero>` | 部队进入据点 | 进入后处理 |
| `BeforeSettlementEnteredEvent` | `IMbEvent<MobileParty, Settlement, Hero>` | 进入前 | 拦截进入 |
| `SiegeCompletedEvent` | `IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes>` | 围城结束 | 围城结算 |

> ⚠️ **1.3.15 没有 `SettlementCaptured` 事件。** 如果你在旧教程或 1.4.x 文档里看到它，在 1.3.15 中请改用 `OnSettlementOwnerChangedEvent`——它覆盖了征服、授予、叛乱等全部易主路径，载荷里的 `ChangeOwnerOfSettlementDetail` 区分具体原因。

### Tick 事件（最高频）

| 事件 | 签名 | 频率 | 典型用途 |
|------|------|------|----------|
| `TickEvent` | `IMbEvent<float>` | 每帧 | 帧级更新（极少用） |
| `QuarterHourlyTickEvent` | `IMbEvent` | 每 15 游戏分钟 | 轻量周期检查 |
| `HourlyTickEvent` | `IMbEvent` | 每游戏小时 | 中等频率逻辑 |
| `DailyTickEvent` | `IMbEvent` | 每游戏日 | 每日结算、条件检查 |
| `WeeklyTickEvent` | `IMbEvent` | 每 7 游戏日 | 低频汇总 |
| `DailyTickPartyEvent` | `IMbEvent<MobileParty>` | 每游戏日（每支部队） | 部队每日逻辑 |
| `DailyTickHeroEvent` | `IMbEvent<Hero>` | 每游戏日（每个英雄） | 英雄每日逻辑 |
| `DailyTickSettlementEvent` | `IMbEvent<Settlement>` | 每游戏日（每个据点） | 据点每日逻辑 |
| `DailyTickClanEvent` | `IMbEvent<Clan>` | 每游戏日（每个家族） | 家族每日逻辑 |

### 存档与开局

| 事件 | 签名 | 触发点 | 典型用途 |
|------|------|--------|----------|
| `OnBeforeSaveEvent` | `IMbEvent` | `SaveHandler.cs:126` | 存档前准备 |
| `OnSaveStartedEvent` | `IMbEvent` | `SaveHandler.cs:177` | 存档开始（UI 提示） |
| `OnSaveOverEvent` | `IMbEvent<bool isSuccessful, string saveName>` | `SaveHandler.cs:189` | 存档完成清理 |
| `OnNewGameCreatedEvent` | `IMbEvent<CampaignGameStarter>` | `Campaign.cs:2120` | 新游戏初始化 |
| `OnGameLoadedEvent` | `IMbEvent<CampaignGameStarter>` | `Campaign.cs:848` | 读档后恢复 |
| `OnGameLoadFinishedEvent` | `IMbEvent` | 读档流程末尾 | 读档完全就绪 |

> 全部 273 个事件的完整索引见 [CampaignEvents API 参考](../../api/campaign-ext/CampaignEvents/)。

## 怎么用：完整 Behavior 示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

namespace MyMod;

public class MyBehavior : CampaignBehaviorBase
{
    private int _deathCount;

    public override void RegisterEvents()
    {
        // 1) 先清后加：防止运行期 AddBehavior 导致重复订阅
        CampaignEvents.HeroKilledEvent.ClearListeners(this);
        CampaignEvents.OnClanDestroyedEvent.ClearListeners(this);
        CampaignEvents.DailyTickEvent.ClearListeners(this);

        // 2) 订阅（owner = this，退订时按 owner 摘除）
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
        CampaignEvents.OnClanDestroyedEvent.AddNonSerializedListener(this, OnClanDestroyed);
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 事件闭包不序列化；只存自定义数据
        dataStore.SyncData(ref _deathCount, "myMod_deathCount");
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // 安全：读取状态、记日志、累计数值
        _deathCount++;
        // 危险：直接改 victim 字段、做耗时操作、抛异常
    }

    private void OnClanDestroyed(Clan destroyedClan)
    {
        // 家族灭亡后的清理
    }

    private void OnDailyTick()
    {
        // 轻量逻辑：检查条件、更新自定义数值
    }
}
```

注册入口（在 `MBSubModuleBase` 子类中）：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        // AddBehavior 内部会自动调用 RegisterEvents()
        CampaignBehaviorManager.AddBehavior(new MyBehavior());
    }
}
```

### 引用型事件（Can-* 系列）：投票与改写

`ReferenceIMBEvent<T, bool>` 的 handler 带 `ref bool result`——引擎算出默认值后，每个监听者都能覆盖它：

```csharp
CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, OnCanHeroDie);

private void OnCanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
{
    if (hero == Hero.MainHero && _isInvincible)
    {
        result = false; // 阻止主角死亡
    }
}
```

## 依赖图（可点击）

**上游（谁触发 / 谁持有）**

- [Campaign](../../api/campaign/Campaign/) — 创建并持有 `CampaignEvents` 与 `CampaignEventDispatcher` 实例
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — 扇出分发器，内核通过它调用
- [CampaignBehaviorManager](../../api/campaign-ext/CampaignBehaviorManager/) — 管理行为集合，`AddBehavior`/`RemoveBehavior` 自动订阅/退订
- 各类 `*Action`（`KillCharacterAction`、`DestroyClanAction`、`ChangeOwnerOfSettlementAction`）— 改完状态后触发事件
- `SaveHandler` — 存档三钩子的触发者
- `CampaignPeriodicEventManager` — tick 事件的定时器

**下游（谁消费）**

- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod 行为在 `RegisterEvents()` 里订阅
- [SaveManager](../../api/save-system/SaveManager/) — 存档点：行为随档重建，事件闭包不序列化

**相关类型**

- [MbEvent](../../api/campaign-ext/MbEvent/) / [IMbEvent](../../api/campaign-ext/IMbEvent/) — 底层委托容器与链表节点
- [ReferenceIMBEvent](../../api/campaign-ext/ReferenceIMBEvent/) — 引用型事件（Can-* 系列）
- [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — 开局/读档事件的载荷

## ⚠ 风险与崩溃边界

| 风险 | 后果 | 正确做法 |
|------|------|----------|
| handler 内抛未捕获异常 | 沿 tick 链上抛，打断整条链，可能坏档 | handler 内 try/catch 关键路径 |
| 同一 owner 重复订阅 | handler 被触发多次 | `RegisterEvents()` 开头 `ClearListeners(this)` |
| 在 `RegisterEvents()` 里访问世界状态 | 世界未就绪，空引用 | 等 `OnNewGameCreated` / `OnGameLoaded` 后再访问 |
| 闭包捕获已销毁的 MBObject | 读档后 NullReferenceException | handler 内现取现用，先判空 |
| 在 handler 里做耗时操作 | 卡住整个战役循环（同步链） | 保持轻量；耗时逻辑延后到 tick |
| 在 handler 内增删同一事件监听 | 链表遍历中被修改，跳过或重复执行 | 不要在回调里订阅/退订自己 |
| 把事件当改变世界的入口 | 绕过一致性检查，破坏其他系统 | 改变世界走 `*Action.Apply` |
| 手动触发事件 | 没有公共 `Fire` API，做不到 | 事件是通知，不是入口 |

## 何时用 / 何时不要用

**用事件**：当 X 发生时做某事——弹通知、记日志、调整关联数值、解锁功能、触发自定义逻辑。

**不要用事件**：
- 不要轮询代替订阅（「每小时扫描所有 Hero 看谁死了」）
- 不要在 handler 里直接改字段来改变世界（走 `*Action`）
- 不要依赖事件触发顺序——链表顺序是插入顺序，不应作为业务依赖

## 完整事件索引

全部 273 个事件的载荷类型、触发时机与订阅片段，见 API 参考页：
- [CampaignEvents API 参考](../../api/campaign-ext/CampaignEvents/) — 按领域分类的完整事件索引
- [CampaignEventDispatcher API 参考](../../api/campaign-ext/CampaignEventDispatcher/) — 分发器机制
- [CampaignEventReceiver API 参考](../../api/campaign-ext/CampaignEventReceiver/) — 契约基类

---

## ↑ 上级导航

- [架构总览](./) — 返回架构地图
- [战役事件系统](../campaign-event-system) — 三类协作的心智模型（先读那页再读本页）

## ↔ 同级导航

| 页面 | 内容 |
|------|------|
| [战役事件系统](../campaign-event-system) | CampaignEvents / Dispatcher / Receiver 三类协作 |
| [模块系统](../module-system) | `MBSubModuleBase` 与 `CampaignBehaviorBase` 生命周期 |
| [存档系统](../save-system) | `SaveManager` 与存档钩子 |
| [崩溃与存档边界](../crash-boundaries) | 8 类必崩/坏档模式 |
| [SDK 总览](../sdk-overview) | 54 模块分层地图 |

## ↓ 相关 API 页面

- [CampaignEvents](../../api/campaign-ext/CampaignEvents/) — 完整事件索引与深潜
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — 分发器
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — 契约基类
- [MbEvent](../../api/campaign-ext/MbEvent/) — 监听器链表底层
- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod 行为基类
- [CampaignBehaviorManager](../../api/campaign-ext/CampaignBehaviorManager/) — 行为注册与自动退订
