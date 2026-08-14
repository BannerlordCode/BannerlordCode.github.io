---
title: "SandBox 扩展实战 — 写一个能存盘的自定义 Behavior（v1.3.15）"
description: "端到端可运行范例：从 MBSubModuleBase.OnGameStart 注册，到 CampaignBehaviorBase 订阅战役事件、走 *Action.Apply 改世界状态、用 IDataStore.SyncData 持久化自定义字段。每步链回真实枢纽类页，并标注会坏档/崩溃的写法。"
---
# SandBox 扩展实战 — 写一个能存盘的自定义 Behavior

> 本页是 [SandBox 阅读政策](../../architecture/sandbox-native-policy/) 的「动手版」。政策页告诉你「该读什么」，本页给你一条**完整跑通**的链路：注册 SubModule → 加 Behavior → 订阅事件 → 安全地改世界 → 把状态存进存档。所有 API 都来自真实源码（v1.3.15），不是示意伪代码。

## 一句话职责

如果你想在战役里「每隔一段时间做点事、记住自己做了多少次、并且读档后不丢」，你要写的就是一个 `CampaignBehaviorBase` 子类 + 在 `MBSubModuleBase.OnGameStart` 里把它注册进去——本页就是这个最小可运行模板。

## 心智模型

```
MBSubModuleBase.OnGameStart           ← 你的 mod 入口，战役/场景启动时各调用一次
        │  gameStarterObject is CampaignGameStarter
        ▼
CampaignGameStarter.AddBehavior(new YourBehavior())   ← 只注册一次
        │
        ▼
YourBehavior : CampaignBehaviorBase
   ├─ RegisterEvents()     订阅 CampaignEvents.*（每局战役调用）
   ├─ 事件处理方法          真正干活（改世界必须走 *Action.Apply）
   └─ SyncData(IDataStore) 读写自定义字段，存档/读档自动触发
```

- **谁创建/持有**：Behavior 实例由你的 SubModule 创建并交给 `CampaignGameStarter`；之后由 `CampaignBehaviorManager` 持有，并在每局新战役时**重新 new 一份**。所以**不要**把 Behavior 实例塞进静态字段指望跨局复用。
- **所在层**：Campaign 层（战役逻辑），不是 Mission 层也不是 UI 层。
- **何时用**：需要在战役地图 tick、事件、对话、菜单上挂自定义逻辑，或保存自定义状态。
- **何时不要用**：纯 UI 改 `GauntletLayer`/`ViewModel`（那是 [UI 模式](../gauntlet-ui/)）；纯场景战斗逻辑改 `MissionBehavior`（那是 [Mission 系统](../mission-system/)）。这两者都不该写在 CampaignBehavior 里。
- **正确替代**：任何「改世界状态」（给钱、杀人、改关系、换据点归属）都必须走 `*Action.Apply`，**不要**直接改 `Hero.Gold`、`Settlement.OwnerClan` 等字段——直接改会跳过事件级联，导致 AI 失同步、坏档、或读档后状态不一致（见 [崩溃边界 · 世界变更须走 Action](../../architecture/crash-boundaries/)）。

## 最小可运行范例

下方代码可直接放进你的 mod 工程（命名空间自取）。`using` 与签名均对照 v1.3.15 源码。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;   // GiveGoldAction
using TaleWorlds.Core;                      // IGameStarter, IDataStore
using TaleWorlds.MountAndBlade;             // MBSubModuleBase

// 1) SubModule 入口：战役启动时注册行为（每局战役调用一次）
public class MySubModule : MBSubModuleBase
{
    protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        // 只有战役场景才有 CampaignGameStarter；场景/其他模式不要强转
        if (gameStarterObject is CampaignGameStarter starter)
        {
            starter.AddBehavior(new DailyGoldBehavior());
        }
    }
}

// 2) 行为本身：订阅每日 tick，安全地给主角发钱，并持久化计数器
public class DailyGoldBehavior : CampaignBehaviorBase
{
    private int _daysPaid; // 自定义状态——必须走 SyncData 才能存盘，否则读档归零

    public override void RegisterEvents()
    {
        // 真实事件名来自 CampaignEvents；用 AddNonSerializedListener 挂 this + handler
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, new Action(OnDailyTick));
    }

    private void OnDailyTick()
    {
        // 永远走 *Action.Apply 改世界状态，不要直接写 Hero.Gold
        Hero giver = (Hero.MainHero.Clan != null) ? Hero.MainHero.Clan.Leader : Hero.MainHero;
        GiveGoldAction.ApplyBetweenCharacters(giver, Hero.MainHero, 100, disableNotification: false);
        _daysPaid++;
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 键名一旦发布就要稳定；改名会导致旧档读不到、字段丢值
        dataStore.SyncData<int>("_daysPaid", ref _daysPaid);
    }
}
```

### 为什么这样写（对照契约）

| 步骤 | 真实 API | 错写法（会坏档/崩溃） |
|------|----------|----------------------|
| 注册 | `CampaignGameStarter.AddBehavior(new DailyGoldBehavior())` | `AddBehavior<T>()`（1.3.15 没有泛型重载，只有接收实例的版本） |
| 订阅 | `CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, new Action(...))` | 在 `RegisterEvents` 外缓存事件委托、或用序列化 `AddListener` 却没处理存盘 |
| 改钱 | `GiveGoldAction.ApplyBetweenCharacters(giver, Hero.MainHero, 100, false)` | `Hero.MainHero.ChangeHeroGold(100)` 直接改字段，跳过事件级联 |
| 存盘 | `dataStore.SyncData<int>("_daysPaid", ref _daysPaid)` | 用普通字段存、或键名带随机后缀 |

## 依赖关系（可点击）

- **上游 / 入口**
  - [MBSubModuleBase](../../api/core/MBSubModuleBase/) — `OnGameStart` 是你的 mod 生命周期起点
  - [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — `AddBehavior` 的唯一正确落点；`OnGameStart` 第二个参数 `gameStarterObject` 在战役场景下就是这个类型（其接口 `IGameStarter` 位于 `TaleWorlds.Core`，本版未单列页，按约定强转即可）
- **本页主角**
  - [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — `RegisterEvents` / `SyncData` 契约与寿命
  - [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — 事件订阅的基类语义
- **下游 / 系统**
  - [CampaignEvents](../../api/campaign-ext/CampaignEvents/) — 全部可订阅事件的总索引
  - [Actions 总则](../../api/campaign-ext/actions/) — `GiveGoldAction` 等「改世界」家族（含 `KillCharacterAction` / `ChangeRelationAction` 高风险成员）
  - [Hero](../../api/campaign/Hero/) — `MainHero`、金流与关系实体
  - [SaveManager](../../api/save-system/SaveManager/) 与 [IDataStore](../../api/campaign-ext/IDataStore/) — 存档机制与 `SyncData` 契约
- **若你要替换数值计算**（而非加行为）：走 [GameModels](../../api/campaign-ext/GameModels/) + [Models 家族手册](../../api/campaign-ext/models/)，不要自己 `new` 模型。

## 风险段（触达即必读）

1. **不要在 `OnGameStart` 里读 `Campaign.Current`**。此时战役对象尚未完全初始化；行为的方法里（`RegisterEvents` 之后、tick 回调里）才安全。
2. **`SyncData` 键名要保持稳定**。`dataStore.SyncData<T>(key, ref data)` 的 `key` 字符串一旦随版本改名，旧存档里同 key 的旧值就读不到，字段回退默认值；严重的会造成坏档或读档异常。
3. **不要直接改字段代替 `*Action.Apply`**。直接改 `Hero.Gold` / `Settlement.OwnerClan` / 关系值会跳过事件级联与 AI 同步，是「读档后世界状态错乱、派系逻辑崩坏」的头号来源。
4. **Behavior 实例不要塞静态字段**。`CampaignGameStarter.AddBehavior` 每局新战役会再调一次 `OnGameStart`，行为被重新实例化；静态引用会指向上一局的死对象。
5. **事件用 `AddNonSerializedListener` 而非 `AddListener`**，除非你明确需要把委托本身序列化进存档。绝大多数行为用前者即可，避免存盘体积膨胀与反序列化陷阱。
6. **注册只做一次**。`OnGameStart` 可能被多次调用（新游戏/继续游戏路径不同），重复 `AddBehavior` 同一类型会导致行为被多次触发——用实例去重或幂等处理。

## 导航

- ↑ 父级：[指南总览](../)
- ↔ 同级：[模组开发者之旅](../modder-journey/) · [Campaign 系统](../campaign-system/) · [SandBox/StoryMode/Native 阅读政策](../../architecture/sandbox-native-policy/)
- ↓ 相关 API：[CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) · [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) · [Actions 总则](../../api/campaign-ext/actions/) · [SaveManager](../../api/save-system/SaveManager/)
- 🔀 任务索引：[开发者任务路线图 · 任务 1（注册 SubModule 并加 Behavior）](../../architecture/developer-roadmap/)
