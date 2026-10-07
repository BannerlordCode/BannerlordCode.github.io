---
title: "战役事件系统"
description: "Campaign 层 pub/sub 事件总线的心智模型：CampaignEvents / CampaignEventDispatcher / CampaignEventReceiver 三类协作，mod 如何在 CampaignBehaviorBase 中安全订阅、退订与响应世界变化。"
---

# 战役事件系统

> 事件系统回答 mod 的第二个核心问题：**世界变了，我怎么知道？** 答案是：不要轮询，订阅 `CampaignEvents` 的静态事件，当英雄死亡、据点易主、开战、存档发生时，游戏会主动通知你。

## 一句话定位

`CampaignEvents` 是战役层的**中央发布/订阅（pub/sub）事件总线**——它把「世界里发生了一件重要的事」翻译成一次带载荷的广播，让 mod 无需每秒扫描整个世界就能对变化做出反应。

## 心智模型

### 三类协作：一个喇叭、一个分发器、一份契约

```
游戏内核 *Action / Campaign tick
        │
        ▼
CampaignEventDispatcher.Instance.OnXxx(args)   ← 分发器：扇出给所有 receiver
        │
        ├──→ CampaignEvents（中央 hub）           ← 喇叭：Invoke 底层 MbEvent
        │         │
        │         ▼
        │    IMbEvent<T>.Invoke(args)            ← 触发所有已注册的 lambda
        │         │
        │         ▼
        │    mod 的 handler 被调用                 ← 你的代码在这里运行
        │
        ├──→ IssueManager（原生 receiver）
        └──→ QuestManager（原生 receiver）
```

| 类 | 角色 | 谁持有 | mod 怎么用 | 声明处 |
|----|------|--------|------------|--------|
| `CampaignEventReceiver` | **契约**：定义全部 `OnXxx` 虚方法 + `RemoveListeners` | — | 继承它来写自定义 receiver（少见） | `CampaignEventReceiver.cs:32` |
| `CampaignEventDispatcher` | **分发器**：把每次 `OnXxx` 扇出给所有已注册 receiver | `Campaign.Current.CampaignEventDispatcher` | 不直接用；游戏内核通过它调用 | `CampaignEventDispatcher.cs:33` |
| `CampaignEvents` | **中央 hub**：持有 ~274 个 `IMbEvent<T>` 静态属性 + 转发逻辑 | `Campaign.Current.CampaignEvents` | **订阅它的静态事件属性** | `CampaignEvents.cs:32` |

### 关键事实

1. **你永远不会 `new CampaignEvents()`**。它没有公共构造函数。mod 直接访问 `CampaignEvents.HeroKilledEvent` 这样的**静态属性**即可。实例由 `Campaign` 持有（`Campaign.cs:611`）。
2. **事件不是序列化的**。`AddNonSerializedListener` 注册的 lambda 闭包不写入存档。但承载它的 `CampaignBehaviorBase` 是战役对象的一部分——读档后 `CampaignBehaviorManager` 会重建行为并再次调用 `RegisterEvents()`，lambda 重新挂上。
3. **事件是同步的**。handler 跑在触发它的那次战役 tick 内，抛异常会打断整条 tick 链路。
4. **事件是通知，不是入口**。改变世界要走对应的 `*Action.Apply`，而不是在 handler 里直接改字段。

### 生命周期：从启动到存档

```
Campaign 创建
  └─ CreateCampaignEvents()（`Campaign.cs:1197`）
       ├─ new CampaignEvents()
       ├─ new CampaignEventDispatcher({ CampaignEvents, IssueManager, QuestManager })
       └─ Campaign.Current.CampaignEvents = 实例

游戏运行
  └─ 内核调用 CampaignEventDispatcher.Instance.OnXxx()
       └─ 扇出到 CampaignEvents → Invoke IMbEvent → mod handler 执行

读档
  └─ CampaignBehaviorManager 重建行为 → 再次调用 RegisterEvents() → lambda 重新订阅

存档
  └─ OnBeforeSaveEvent → OnSaveStartedEvent → OnSaveOverEvent
```

## 怎么用：mod 的真实接入方式

### 1. 在 CampaignBehaviorBase 中订阅（标准做法）

```csharp
using TaleWorlds.CampaignSystem;

namespace MyMod;

public class MyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 订阅英雄死亡事件
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
        // 订阅每日 tick
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
        // 订阅存档完成
        CampaignEvents.OnSaveOverEvent.AddNonSerializedListener(this, OnSaveOver);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 事件闭包不序列化；这里只存自定义数据
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // 安全做法：读取状态、记日志、调用 *Action 改变世界
        // 危险做法：直接改 victim 的字段、做耗时操作
    }

    private void OnDailyTick()
    {
        // 轻量逻辑：更新自定义数值、检查条件
    }

    private void OnSaveOver(bool isSuccessful, string saveName)
    {
        if (isSuccessful)
        {
            // 存档成功后的清理或通知
        }
    }
}
```

### 2. 退订：RemoveListeners

```csharp
// 在行为卸载时清除本 owner 的全部监听
public override void RemoveListeners(object obj)
{
    CampaignEvents.HeroKilledEvent.ClearListeners(obj);
    CampaignEvents.DailyTickEvent.ClearListeners(obj);
    CampaignEvents.OnSaveOverEvent.ClearListeners(obj);
}
```

> **去重技巧**：`RegisterEvents()` 可能在会话中被多次调用（如运行期 `AddBehavior`）。在开头用 `CampaignEvents.XEvent.ClearListeners(this)` 先清后加，避免重复订阅。

### 3. 引用型事件（Can-* 事件）

`ReferenceIMBEvent<T, bool>` 允许监听者**投票或改写返回值**：

```csharp
CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, OnCanHeroDie);

private void OnCanHeroDie(Hero hero, ref bool result)
{
    // result 是引擎算出的默认值；你可以覆盖它
    if (hero == Hero.MainHero && _isInvincible)
    {
        result = false; // 阻止主角死亡
    }
}
```

### 4. Tick 事件：最高频的钩子

| 事件 | 载荷 | 触发频率 | 典型用途 |
|------|------|----------|----------|
| `TickEvent` | `float dt` | 每帧 | 需要帧级更新的逻辑（极少用） |
| `QuarterHourlyTickEvent` | 无 | 每 15 游戏分钟 | 轻量周期检查 |
| `HourlyTickEvent` | 无 | 每游戏小时 | 中等频率逻辑 |
| `DailyTickEvent` | 无 | 每游戏日 | 每日结算、条件检查 |
| `WeeklyTickEvent` | 无 | 每游戏周 | 低频汇总 |
| `DailyTickPartyEvent` | `MobileParty` | 每游戏日（每支部队） | 部队相关每日逻辑 |
| `DailyTickHeroEvent` | `Hero` | 每游戏日（每个英雄） | 英雄相关每日逻辑 |
| `DailyTickSettlementEvent` | `Settlement` | 每游戏日（每个据点） | 据点相关每日逻辑 |

> **性能铁律**：tick handler 必须轻量。它在同步 tick 链路中执行，耗时操作会卡住整个战役循环。

## 存档事件：三个钩子

```csharp
// 存档前：可以准备数据、阻止存档
CampaignEvents.OnBeforeSaveEvent.AddNonSerializedListener(this, OnBeforeSave);

// 存档开始：可以显示 UI、暂停逻辑
CampaignEvents.OnSaveStartedEvent.AddNonSerializedListener(this, OnSaveStarted);

// 存档完成：可以清理临时状态、通知玩家
CampaignEvents.OnSaveOverEvent.AddNonSerializedListener(this, OnSaveOver);
```

`OnSaveOver` 的载荷是 `(bool isSuccessful, string saveName)`——检查 `isSuccessful` 再决定是否做清理。

## 依赖图（可点击）

**上游（谁触发 / 谁持有）**

- [Campaign](../../api/campaign/Campaign/) — 持有 `CampaignEvents` 与 `CampaignEventDispatcher` 的唯一实例
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — 扇出分发器
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — 契约基类
- 各类 `*Action`（如 `KillCharacterAction`、`ChangeOwnerOfSettlementAction`、`DeclareWarAction`）— 改完状态后触发事件

**下游（谁消费）**

- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod 行为在 `RegisterEvents()` 里订阅
- [SaveManager](../../api/save-system/SaveManager/) — 存档点：行为随档重建，事件闭包不序列化

**相关类型**

- [MbEvent](../../api/campaign-ext/MbEvent/) / [IMbEvent](../../api/campaign-ext/IMbEvent/) — 底层委托容器
- [ReferenceMBEvent](../../api/campaign-ext/ReferenceMBEvent/) — 引用型事件（Can-* 系列）
- [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — 注册行为的入口

## ⚠ 风险与崩溃边界

| 风险 | 后果 | 正确做法 |
|------|------|----------|
| handler 内抛未捕获异常 | 打断整条 tick 链路，可能坏档 | handler 内 try/catch 关键路径 |
| 在 handler 里做耗时操作 | 卡住整个战役循环 | 保持轻量；耗时逻辑放异步或延后 |
| 闭包捕获已销毁的 MBObject | 读档后 NullReferenceException | handler 内现取现用，先判空 |
| 重复订阅 | 同一逻辑被触发多次 | `RegisterEvents()` 开头 `ClearListeners(this)` |
| 在 handler 内增删同一事件监听 | 跳过或重复执行 | 不要在回调里订阅/退订自己 |
| 把事件当改变世界的入口 | 绕过一致性检查，破坏其他系统 | 改变世界走 `*Action.Apply` |
| 在 `RegisterEvents()` 里访问未就绪的世界 | 空引用或数据不完整 | 等 `OnNewGameCreated` / `OnGameLoaded` 后再访问 |

## 何时用 / 何时不要用

**用事件**：当 X 发生时做某事——弹通知、记日志、调整关联数值、解锁功能、触发自定义逻辑。

**不要用事件**：
- 不要轮询代替订阅（「每小时扫描所有 Hero 看谁死了」）
- 不要手动触发事件来骗过其他系统（没有公共 `Fire` API）
- 不要在 handler 里直接改字段来改变世界（走 `*Action`）

## 完整事件索引

全部 ~274 个事件的载荷类型、触发时机与订阅片段，见 API 参考页：
- [CampaignEvents API 参考](../../api/campaign-ext/CampaignEvents/) — 按领域分类的完整事件索引
- [CampaignEventDispatcher API 参考](../../api/campaign-ext/CampaignEventDispatcher/) — 分发器机制
- [CampaignEventReceiver API 参考](../../api/campaign-ext/CampaignEventReceiver/) — 契约基类

---

## ↑ 上级导航

- [架构总览](./) — 返回架构地图
- [模块系统](../module-system) — `CampaignBehaviorBase` 生命周期
- [存档系统](../save-system) — 存档原理与事件的关系

## ↔ 同级导航

| 页面 | 内容 |
|------|------|
| [模块系统](../module-system) | `MBSubModuleBase` 与 `CampaignBehaviorBase` 生命周期 |
| [存档系统](../save-system) | `SaveManager` 与存档钩子 |
| [SDK 总览](../sdk-overview) | 54 模块分层地图 |
| [崩溃与存档边界](../crash-boundaries) | 8 类必崩/坏档模式 |
| [战役事件总线](../campaign-events) | 事件总线机械原理 + 接入手册（分工：本页 = 三类协作心智模型；该页 = 机械原理与接入） |

## ↓ 相关 API 页面

- [CampaignEvents](../../api/campaign-ext/CampaignEvents/) — 完整事件索引与深潜
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — 分发器
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — 契约基类
- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod 行为基类
