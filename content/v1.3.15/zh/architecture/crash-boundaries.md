---
title: "崩溃与存档边界"
description: "Bannerlord 模组最常见的离奇崩溃与坏档，按所属架构层归为 8 类失败模式。每类给出现象、触发代码、正确做法与可深入的类页——写代码前对照自查。"
---
# 崩溃与存档边界

## 一句话定位

大多数「只有我的 mod 崩溃 / 打开旧档就坏」并不是引擎 bug，而是**对生命周期与序列化契约的误用**。本页把高频失败模式按它所属的架构层归类，每条都给可对照的真实代码片段，是类页「风险」段的总索引。

## 心智模型：崩溃与坏档分两类，落在不同层

```text
坏档（serialization / 加载）        崩溃（null / 生命周期 / 线程）
─────────────────────────        ─────────────────────────────
1. 存档：SyncData vs SaveableField  →  Foundation / Save
2. 世界变更不走 *Action            →  Campaign（数据不同步→坏档）
3. Campaign 事件时机 vs Mission    →  Campaign ↔ Mission 边界
4. Agent / Mission 生命周期         →  Mission（null / 悬空引用）
5. MBObjectManager 注册            →  Foundation（未注册对象被引用）
6. SubModule 加载阶段              →  Foundation（访问未初始化服务）
7. Model 替换                      →  Campaign（空替换→行为丢失）
8. UI / ViewModel 寿命             →  UI（跨屏持有 / 错线程更新）
```

判断方法：打开旧档才出问题 → 看 1/2/5；进场景或战斗瞬间崩 → 看 3/4/6；换 UI 或切屏后崩 → 看 8；数值算不对或行为消失 → 看 2/7。

## 1. 存档：SyncData vs SaveableField、加载顺序、自定义字段坏档

**现象**：能存不能读、读档报定义错误、旧档一开就崩，或 mod 自定义数据每次读档都丢失。

**触发代码模式**（CampaignBehavior 里的持久化钩子）：

```csharp
public override void SyncData(IDataStore dataStore)
{
    // 正确：瞬态/自定义状态走 SyncData，键名稳定
    dataStore.SyncData("myGold", ref _myGold);
}

// 错误：在加载早期就假设派生对象已就绪
if (Campaign.Current == null || !Campaign.Current.GameStarted) return;
var hero = Campaign.Current.CampaignObjectManager.Find<Hero>("lord_derthert"); // 可能尚为 null
```

**正确做法**：
- 可序列化字段用 `[SaveableField]` / `[SaveableProperty]` 标注；Behavior 的瞬态数据在 `SyncData(IDataStore)` 里读写，键名保持稳定。
- 新增会被多个对象引用的类时，必须配 `SaveableTypeDefiner` 与类型/成员 ID，否则 `SaveManager` 的定义检查会失败、保存直接返回错误。
- 不要用 try/catch 吞掉 `SaveManager` 的定义错误后继续发布；加载不兼容时不要把半加载对象送进战役 tick。

**链出**：[SaveManager](../../api/save-system/SaveManager/)

## 2. 世界变更必须走 *Action.Apply（直接改字段 → 坏档 / 不同步）

**现象**：界面不刷新、AI 不反应、读档后数值回滚或错乱；严重时旧档逻辑与新代码不一致导致坏档。

**触发代码模式**：

```csharp
// 错误：直接改字段，跳过事件级联、AI/UI/存档同步
// hero.Gold += 1000;
// settlement.Owner = newClan;
// hero.ChangeRelation(hatedHero, -50);

// 正确：一律走对应的 *Action
GiveGoldAction.ApplyForSettlement(hero, null, 1000);
KillCharacterAction.Apply(hero, ...);
ChangeKingdomAction.ApplyByKingdomLeader(...);
```

**正确做法**：所有「世界变更」通过 `XxxAction.Apply(...)` 完成。`Action` 会广播 `CampaignEvents`、刷新相关系统并进入存档图。直接改 `Hero` / `Settlement` / `Clan` 的字段等于绕过了引擎的真相来源。

**链出**：[Hero](../../api/campaign/Hero/)（说明为何不能直接改字段）；Action 家族见战役系统文档（进行中）。

## 3. Campaign 事件时机 vs Mission 内外（Mission 里读 Campaign 状态的风险）

**现象**：在战斗回调里读到的经济/关系数值「还是上一帧」，或战斗结束后写回的数据没生效。

**触发代码模式**：

```csharp
// 在 MissionBehavior 回调里
Mission mission = Mission.Current;
if (mission != null)
{
    // 风险：此时 Campaign 的每日/每小时 tick 不一定已经发生，
    // 读到的 Models 结果可能是上一帧的
    float score = Campaign.Current.Models.DiplomacyModel....
}
```

**正确做法**：区分 `Campaign.Current` 与 `Mission.Current` 的生命周期。跨层数据交换通过事件（`CampaignEvents`）和 `*Action`：战斗开始用 `OnMissionStarted` 读取战役状态，战斗结束用 `*Action` 把结果写回战役层，不要在 Mission 回调里假设 Campaign tick 已跑过。

**链出**：[Campaign](../../api/campaign/Campaign/) · [Mission](../../api/mission/Mission/)

## 4. Agent / Mission 生命周期（Mission.Current == null、Agent 死后引用、teardown 后访问）

**现象**：进入菜单/大地图后访问 `Mission` 崩；Agent 死亡后仍持有其引用导致悬空；Mission 结束后读取 `Scene` / `Team` 崩。

**触发代码模式**：

```csharp
Mission mission = Mission.Current;        // 菜单/大地图/加载阶段都可能为 null
if (mission == null || mission.CurrentState != Mission.State.Continuing)
    return;

Agent agent = mission.MainAgent;          // 可能已死亡 / 已 removed
if (agent == null || !agent.IsActive())
    return;

// 在 OnAgentRemoved 中：立即读取需要的身份/阵营信息，
// 不要把被移除的 agent 存为长期状态
```

**正确做法**：每次访问前先判 `Mission.Current == null` 且 `CurrentState == Continuing`；Agent 死亡处理订阅事件并当场读取所需字段；Mission 结束/teardown 后释放所有 `Agent` / `Team` / `Formation` / `Scene` 引用，不要交给下一场 Mission。

**链出**：[Mission](../../api/mission/Mission/) · [Agent](../../api/mission/Agent/)

## 5. MBObjectManager 注册（未注册对象被引用 → 崩溃）

**现象**：`new` 出来的对象被存档引用，读档后变成 null 或崩溃；跨场景用引用找回对象失败。

**触发代码模式**：

```csharp
// 错误：直接 new 子类却不注册，引用无法恢复
var item = new ItemObject("my_item");

// 正确：所有 MBObjectBase 派生对象经 MBObjectManager 注册，
// 之后用 MBGUID / id 取回，而非保存引用
MBObjectManager.Instance.Register(item); // 对象管理器，文档进行中
```

**正确做法**：任何 `MBObjectBase` 派生对象都要经 `MBObjectManager` 注册；保存与取回靠 `MBGUID` / id，不要依赖对象引用跨存档存活。

**链出**：`MBObjectManager` 属对象管理器（campaign-ext），文档进行中。

## 6. SubModule 加载阶段（错误阶段 new Game / 访问未初始化服务）

**现象**：游戏刚启动就崩，或首次进入战役前访问服务得到 null。

**触发代码模式**：

```csharp
protected override void OnSubModuleLoad()
{
    // 错误：此时 Campaign / Game 尚未初始化
    // Campaign.Current.Models....   // null 崩溃
}

// 正确：静态注册放 OnSubModuleLoad，运行时接入放 OnGameStart / OnCampaignStart
protected override void OnGameStart(Game game)
{
    if (game is CampaignGameStarter starter)
    {
        starter.AddBehavior(new MyCampaignBehavior());
        starter.AddModel(new MyModel());
    }
}
```

**正确做法**：`OnSubModuleLoad` 只做静态注册（事件、自定义类型 definer）；访问 `Campaign` / `Game` / `Models` 必须在 `OnGameStart` / `OnCampaignStart` 或之后的事件回调里。Behavior 通过 `CampaignGameStarter.AddBehavior` 注册，不要过早 `new Game`。

**链出**：[MBSubModuleBase](../../api/core/MBSubModuleBase/)

## 7. Model 替换（空替换 / 错误阶段替换 → 行为丢失）

**现象**：替换模型后相关数值算错、行为消失，或原模型逻辑被整段覆盖。

**触发代码模式**：

```csharp
// 错误：直接 new 并期望引擎自动合并，或返回 null 导致计算崩溃
starter.AddModel(new MyPartySpeedModel()); // 若需保留原逻辑，应包装而非覆盖

// 正确：经 CampaignGameStarter.AddModel 登记；
// 若要复用原模型，用 AddModel<T>(MBGameModel<T>) 包装
if (starterObject is CampaignGameStarter starter)
{
    starter.AddModel(new MyCustomDiplomacyModel());
}
```

**正确做法**：自定义 `GameModel` 通过 `CampaignGameStarter.AddModel` 登记，并在启动阶段完成；模型是算法，不要在里面塞可变状态。需要保留原行为时包装原模型，不要返回 `null`。

**链出**：见战役模型簇（Models），文档进行中。

## 8. UI / ViewModel 寿命（跨 Mission 持有 VM、错误线程更新）

**现象**：切屏或退出战斗后访问 VM 崩溃；界面卡死或数据不刷新。

**触发代码模式**：

```csharp
// 错误：把 VM 当成单例跨 Mission / 跨 Screen 持有
_myViewModel.Gold = value; // 场景已销毁 → 悬空

// 正确：VM 随 Screen 生命周期创建与释放；
// 数据更新发生在 UI 线程
protected override void OnFrameTick(float dt)
{
    // 仅在 Screen 存活时更新
}
```

**正确做法**：`ViewModel` 跟随 `Screen`（`GauntletLayer`）创建与销毁，不要跨 `Mission` / 跨 `Screen` 共享；所有 `DataSource` 更新在主线程进行，避免在非 UI 线程改 VM 属性。

**链出**：[ViewModel](../../api/core-extra/ViewModel/)

## 导航

- [↑ 架构总览](../)
- [↔ 开发者路线图](../developer-roadmap/) · [↔ SDK 总览](../sdk-overview/) · [↔ 模块系统](../module-system/)
- 相关类页：[MBSubModuleBase](../../api/core/MBSubModuleBase/) · [SaveManager](../../api/save-system/SaveManager/) · [Campaign](../../api/campaign/Campaign/) · [Hero](../../api/campaign/Hero/) · [Mission](../../api/mission/Mission/) · [Agent](../../api/mission/Agent/) · [MissionBehavior](../../api/mission/MissionBehavior/) · [ViewModel](../../api/core-extra/ViewModel/)
