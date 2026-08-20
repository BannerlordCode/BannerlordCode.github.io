---
title: "开发者路线图"
description: "想用 Bannerlord 做某件模组开发任务却不知道该读哪个类？这张任务地图按真实开发场景分层，给出入口类、依赖链与避坑提示，是 mod 开发者的首选入口。"
---
# 开发者路线图

## 一句话定位

这是 Bannerlord 模组开发者的**任务入口地图**：你脑海里通常是「我想做 X」，而不是「我想读 `Hero` 类」。本页把常见任务映射到它所在的**架构层**、该用的**入口类**、可深入的具体页面，以及**最容易踩的坑**。先在这里定位，再顺着链接下沉到类页。不要从 A–Z 类列表里盲找——类页没有上下文，而本页有。

## 心智模型 / 大局观：模组活在哪 5 层

一个 mod 的代码永远落在下面某一层。先认层，再写代码，否则会把短寿命对象当持久状态、或把世界变更写成了引擎不认识的样子。

```text
Foundation  基础层   MBSubModuleBase · Game · MBObjectManager · SaveManager
   │ 启动游戏、注册对象身份、提供存档通道
   ▼
Campaign    战役层   Campaign · Hero · Clan · Settlement · MobileParty · *Action · CampaignBehaviorBase · GameModels
   │ 持有策略地图上的持久世界状态，按日/时 tick 推进
   ▼ （进入战斗时）
Mission     战斗层   Mission · Agent · Team · Formation · MissionBehavior
   │ 持有单场场景的短寿命运行时；结束后结果写回战役层
   ▼ （叠加在任意层之上）
UI          表现层   ViewModel · GauntletLayer / Screen
      读取各层状态并展示，不拥有游戏状态
```

### 各层负责什么、状态归谁

- **Foundation（基础层）**：引擎启动、对象身份（`MBObjectManager` 用 `MBGUID` 找回对象）、存档通道（`SaveManager`）。这一层你通常只「接入」和「注册」，不在这里写游戏逻辑。
- **Campaign（战役层）**：策略地图上**长期存在**的世界状态——英雄、家族、聚落、部队、王国、经济、外交。`Campaign.Current` 是绝大多数战役 mod 的第一个调用。世界变更必须走 `*Action`，因为 `Action` 会触发事件级联、刷新 AI/UI、并进入存档图。
- **Mission（战斗层）**：单场战斗/场景的**短寿命**运行时。`Mission.Current` 只在场景存活期间有意义，结束即销毁。需要跨场景保留的数据必须写回战役对象或存档，不能挂在 `Mission` 上。
- **UI（表现层）**：`ViewModel` + `Gauntlet` 把状态画出来。它跟随 `Screen` 生命周期，不要跨 `Mission`/跨 `Screen` 持有。

### 为什么必须知道自己站在哪一层

1. **不要把持久状态放在 Mission 上。** `Mission` 会被销毁，`Agent`/`Team`/`Formation` 也会随 teardown 清空。战斗中产生的、需要下次还能读到的数据——金币、关系、进度——要写回 `Campaign` 实体或 `SyncData`。
2. **不要直接改 Campaign 字段。** `hero.Gold += 1000` 跳过了事件、AI、UI 与存档同步，轻则界面不同步，重则坏档。一律用 `GiveGoldAction.Apply` 这类 `*Action`。
3. **Model 是算法不是状态。** `GameModels` 里的模型算「分数/速度/战损」，不要在模型里塞可变状态并指望它被保存。
4. **UI 不拥有真相。** `ViewModel` 读各层状态；它的生命周期由 `Screen` 管，别把它当单例跨场景持有。

## 任务地图（核心）：我想做 X → 入口类 → 页面 → 风险

| # | 任务 | 入口类 / 簇 | 相关页面 | 关键风险 |
|---|---|---|---|---|
| 1 | 注册 SubModule 并在战役加 Behavior | `MBSubModuleBase` + `CampaignBehaviorBase` | [MBSubModuleBase](../../api/core/MBSubModuleBase/)（注：`CampaignBehaviorBase` 属战役系统，文档进行中） | 在错误加载阶段访问 `Campaign`/`Game`；见 `crash-boundaries` 第 6 条 |
| 2 | 安全给 Hero 加钱 / 杀人 / 改王国 | `*Action`：`GiveGoldAction` / `KillCharacterAction` / `ChangeKingdomAction` | [Hero](../../api/campaign/Hero/) | **绝不直接改字段**（`hero.Gold += ...`）；见 `crash-boundaries` 第 2 条 |
| 3 | 读取 / 修改存档字段 | `SaveManager` + `[SaveableField]` / `SyncData(IDataStore)` | [SaveManager](../../api/save-system/SaveManager/) | 自定义类型缺 definer 会阻止保存；见 `crash-boundaries` 第 1 条 |
| 4 | 进入战斗并加 `MissionBehavior` | `Mission` + `MissionBehavior` | [Mission](../../api/mission/Mission/) · [MissionBehavior](../../api/mission/MissionBehavior/) | `Mission.Current` 可能为 `null`；行为应在 `OpenNew` 工厂注册 |
| 5 | Agent 死亡时处理 | `Mission` / `Agent` 生命周期 | [Agent](../../api/mission/Agent/) | 不要在 `OnAgentRemoved` 之后长期持有已死 Agent 引用 |
| 6 | 改党派战争得分 / 经济数值 | `GameModels` 中的 `PartyBase`/外交等 **Model**（不是 Action） | 见战役模型簇（Models），文档进行中 | Model 替换要经 `CampaignGameStarter.AddModel`；返回 `null` 会崩 |
| 7 | 加自定义 UI | `ViewModel` + `Gauntlet` | [ViewModel](../../api/core-extra/ViewModel/) | 跨 `Mission` 持有 VM、非 UI 线程更新；见 `crash-boundaries` 第 8 条 |
| 8 | 读取本地化文本 | `TextObject` / `MBTextManager` | [MBTextManager](../../api/localization/MBTextManager/) | 本地化字符串走 `TextObject`，不要硬编码拼接 |
| 9 | 查询实体（家族 / 聚落 / 队伍） | `Clan` / `Settlement` / `MobileParty` | [Clan](../../api/campaign/Clan/) · [Settlement](../../api/campaign/Settlement/) · [MobileParty](../../api/campaign/MobileParty/) | 遍历时检查 `IsEliminated` 等状态；结果可能跨帧失效 |

> 任务 2 展开：`*Action` 是 Bannerlord 给「世界变更」的统一入口。下面这样才是引擎认可的做法——事件、AI、UI、存档都会跟着更新：

```csharp
// 错误：直接改字段，跳过全部同步
// hero.Gold += 1000;

// 正确：走 Action，引擎统一广播并更新
GiveGoldAction.ApplyForSettlement(hero, null, 1000);
KillCharacterAction.Apply(hero, ...);
// 改王国归属 / 关系也同理走 ChangeKingdomAction / ChangeRelationAction
```

> 任务 9 展开：实体查询几乎都从 `Campaign.Current` 出发（`List<Hero>`、`List<Clan>` 这类集合在 `Hero.AllHeroes` / `Clan.AllClans` 上，不要在 Mission 作用域里把它们当持久句柄缓存）。

## 推荐阅读顺序（按层）

1. **基础层**：[MBSubModuleBase](../../api/core/MBSubModuleBase/) → [Game](../../api/core-extra/Game/)（理解 SubModule 生命周期与游戏实例如何诞生）。
2. **存档层**：[SaveManager](../../api/save-system/SaveManager/)（理解对象图如何被序列化，第 3 条任务的前置）。
3. **战役层**：[Campaign](../../api/campaign/Campaign/) → [Hero](../../api/campaign/Hero/) → [Clan](../../api/campaign/Clan/) → [Settlement](../../api/campaign/Settlement/) → [MobileParty](../../api/campaign/MobileParty/)（策略地图的持久世界都在这里）。
4. **战斗层**：[Mission](../../api/mission/Mission/) → [Agent](../../api/mission/Agent/) → [MissionBehavior](../../api/mission/MissionBehavior/)（单场场景的短寿命运行时）。
5. **表现层**：[ViewModel](../../api/core-extra/ViewModel/)（UI 与数据绑定）。
6. **本地化**：[MBTextManager](../../api/localization/MBTextManager/)（取多语言文本）。

读的时候记住：战役层文档是「持久真相」，Mission 层文档是「当前场景」，两者不要混用。

## 枢纽入口

- [架构总览](../) — 本架构区的索引与导航。
- [SDK 总览](../sdk-overview/) — 引擎命名空间、模块与 API 边界的总图。
- [崩溃与存档边界](../crash-boundaries/) — 8 类必崩 / 坏档模式，写代码前必读。
- [模块系统](../module-system/) — 官方模块与依赖关系。

## 导航

- [↑ 架构总览](../)
- [↔ SDK 总览](../sdk-overview/) · [↔ 崩溃与存档边界](../crash-boundaries/) · [↔ 模块系统](../module-system/)
- 相关类页：[MBSubModuleBase](../../api/core/MBSubModuleBase/) · [Game](../../api/core-extra/Game/) · [SaveManager](../../api/save-system/SaveManager/) · [Campaign](../../api/campaign/Campaign/) · [Hero](../../api/campaign/Hero/) · [Mission](../../api/mission/Mission/) · [Agent](../../api/mission/Agent/) · [MissionBehavior](../../api/mission/MissionBehavior/) · [ViewModel](../../api/core-extra/ViewModel/) · [MBTextManager](../../api/localization/MBTextManager/)
