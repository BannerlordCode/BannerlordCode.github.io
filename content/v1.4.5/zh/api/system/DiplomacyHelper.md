---
title: "DiplomacyHelper"
description: "读取战争原因、派系关系、战争日志、囚犯归属与主角攻击限制，不直接修改外交状态。"
---
# DiplomacyHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class DiplomacyHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## 一句话职责

`DiplomacyHelper` 查询当前 Campaign 的派系关系与战争历史，并把战争原因、联盟、囚犯与主角攻击限制转换成可供 UI、quest 和 behavior 使用的结果；它不会宣战、媾和、建立联盟，也不会改变囚禁状态。

## 心智模型

这是一个建立在实时 Campaign 状态之上的只读查询层。调用方传入 `IFaction`、`StanceLink` 或宣战事件携带的 `DeclareWarDetail`，helper 应用一条明确的游戏规则，返回布尔值、新列表或本地化解释文本。真正持有状态的是 [Campaign](../../campaign/Campaign)、[IFaction](../../campaign/IFaction)、`FactionManager`、战争 `StanceLink` 与各个 Campaign behavior。

当你需要复用游戏对“同一未消灭派系”“王国联盟”“玩家导致的战争”或“某派系当前抓住的领主”的定义时使用它。不要把它当作外交 mutation API：宣战与媾和应走 [DeclareWarAction](../../campaign-ext/DeclareWarAction) 及对应的和平 Action；外交分数和阈值计算应读取活动的外交 [Model](../../campaign/DiplomacyModel)。这些系统负责事件派发和持久化，而本 helper 完全不触碰它们。

## 什么时候使用，什么时候不要使用

- **适合：** 在 `CampaignEvents.WarDeclared` 监听器、外交 UI 查询、quest 条件或其他已经持有目标派系的 Campaign 代码中使用。
- **适合：** 从 [StanceLink](../../campaign/StanceLink) 展示战争时间线，或从当前 `AliveLords` 中筛选仍被某派系囚禁的领主。
- **不要：** 用它开始/结束战争、提出联盟、改变 crime rating 或释放囚犯；这些都应交给对应的 Action 或 Campaign behavior。
- **不要：** 在 Campaign 尚未运行时把它当成通用派系比较器。部分方法会直接读取 `Hero.MainHero`、`Campaign.Current` 或派系拥有的集合，没有阶段保护。

## 公开入口

### 判断战争是否由玩家导致

```csharp
public static bool IsWarCausedByPlayer(
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail declareWarDetail)
```

结果由宣战原因枚举决定，而不是普通关系判断：

- `CausedByPlayerHostility` 返回 `true`。
- `CausedByKingdomDecision` 只有在 `faction1` 是主角派系且主角是该派系领袖时返回 `true`。
- `CausedByCrimeRatingChange` 只有在 `faction2` 是主角派系，且 `faction1.MainHeroCrimeRating` 超过活动 `CrimeModel.DeclareWarCrimeRatingThreshold` 时返回 `true`。
- `CausedByKingdomCreation` 只有在 `faction1` 是主角派系时返回 `true`。
- 其他枚举值都返回 `false`。

这是供 quest 或通知逻辑分类使用的 helper，不会读取或改变战争 stance。

### 比较未消灭的同一派系

```csharp
public static bool IsSameFactionAndNotEliminated(
    IFaction faction1,
    IFaction faction2)
```

任一输入为 null 时返回 `false`。方法要求两个引用指向同一个派系对象，并且该派系未被消灭。地图/nameplate、AI、据点和百科代码都用它判断一个派系是否仍应被视为有效盟友。

### 收集一场战争相关的日志

```csharp
public static List<(LogEntry, IFaction, IFaction)> GetLogsForWar(StanceLink stance)
```

helper 读取 `stance.WarStartDate`，从最新到最旧倒序遍历 `Campaign.Current.LogEntryHistory.GameActionLogs`，保留游戏时间不早于战争开始、且 `IWarLog.IsRelatedToWar` 接受该 stance 的日志。每个 tuple 依次包含日志、施事派系和受影响派系。返回的是新建列表，不会增删历史记录。

方法没有“战争结束时间”的上界。展示旧战争时，调用方必须让 stance 与当前日志历史保持一致，再自行决定如何呈现返回 tuple。原版 `KingdomWarItemVM` 使用它，保留实现 `IEncyclopediaLog` 的条目，并创建 `KingdomWarLogItemVM` 行。

### 查询某派系当前抓住的活着的领主

```csharp
public static List<Hero> GetPrisonersOfWarTakenByFaction(
    IFaction capturerFaction,
    IFaction prisonerFaction)
```

方法遍历 `prisonerFaction.AliveLords`，筛选 `IsPrisoner` 为 true 且 `PartyBelongedToAsPrisoner?.MapFaction == capturerFaction` 的领主。它查询的是当前状态：不会包含已死亡领主，不会推断历史抓捕，也不会修改 Hero 的囚禁状态。返回的是新列表。

### 查询主角是否暂时不能攻击派系

```csharp
public static bool DidMainHeroSwornNotToAttackFaction(
    IFaction faction,
    out TextObject explanation)
```

当 `faction.NotAttackableByPlayerUntilTime.IsFuture` 为 true 时，返回 `true`，并把 `explanation` 设为本地化文本 `str_enemy_not_attackable_tooltip`。否则把 `explanation` 设为 `null` 并返回 `false`。Encounter 和 conversation menu 会用这一对结果禁用敌对操作并显示 tooltip；helper 不会删除或缩短限制。

### 查询王国联盟

```csharp
public static bool HasAllianceWithFaction(
    IFaction faction1,
    IFaction faction2)
```

null、相同、已消灭以及非王国派系都返回 `false`。通过这些保护后，方法把两个值转为 `Kingdom` 并返回 `Kingdom.IsAllyWith`。因此它查询的是当前王国联盟关系，不是待提议联盟，也不是泛化的“友好”关系。`KingdomTruceItemVM`、王国外交 UI 与百科页面使用这一查询。

## 真实 Campaign 用法

### 从宣战事件参数判断玩家原因

源码用下面的三参数 `CampaignEvents.WarDeclared` 事件注册监听器。Campaign behavior 可以在同一边界复用 helper，而不必再次调用 Action：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

CampaignEvents.WarDeclared.AddNonSerializedListener(this, OnWarDeclared);

private void OnWarDeclared(
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail detail)
{
    bool causedByPlayer = DiplomacyHelper.IsWarCausedByPlayer(
        faction1,
        faction2,
        detail);
}
```

这个回调观察的是游戏已经选定宣战原因之后的事件。不要在监听器里再次调用 `DeclareWarAction.Apply` 来“让结果生效”；Action 已经完成状态变更并派发事件。

### 读取实时派系关系与战争日志

`IFaction.GetStanceWith` 是取得 `StanceLink` 的真实路径：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

IFaction playerFaction = Hero.MainHero?.MapFaction;
IFaction targetFaction = Settlement.CurrentSettlement?.MapFaction;

if (playerFaction != null && targetFaction != null)
{
    bool sameActiveFaction = DiplomacyHelper.IsSameFactionAndNotEliminated(
        playerFaction,
        targetFaction);
    bool alliedKingdoms = DiplomacyHelper.HasAllianceWithFaction(
        playerFaction,
        targetFaction);

    StanceLink stance = playerFaction.GetStanceWith(targetFaction);
    if (stance != null && stance.IsAtWar)
    {
        foreach (var (entry, effector, effected) in DiplomacyHelper.GetLogsForWar(stance))
        {
            LogEntry warLog = entry;
            IFaction sourceFaction = effector;
            IFaction destinationFaction = effected;
        }
    }
}
```

null 检查覆盖了 menu 切换期间或可玩 Campaign 尚未建立主角/当前据点的阶段。helper 仍然读取实时状态，不是存档快照。

## 依赖

- [IFaction](../../campaign/IFaction) 提供派系身份、消灭状态、王国标志、crime rating、囚犯领主和 stance 访问。
- [Campaign](../../campaign/Campaign) 提供活动 `CrimeModel`、`LogEntryHistory` 以及战争原因/日志查询所需的 Campaign 生命周期。
- [DeclareWarAction](../../campaign-ext/DeclareWarAction) 拥有宣战状态变更并发布 [CampaignEvents](../../campaign/CampaignEvents)；`DiplomacyHelper` 只分类事件参数。
- [StanceLink](../../campaign/StanceLink) 提供 `GetLogsForWar` 使用的战争开始日期和当前关系。
- [Hero](../../campaign/Hero)、[Kingdom](../../campaign/Kingdom)、[LogEntry](../../campaign/LogEntry)、[CampaignTime](../../campaign/CampaignTime) 与 [TextObject](../../localization/TextObject) 是读取或返回的状态类型。
- [FactionManager](../../campaign/FactionManager) 与活动外交 [Model](../../campaign/DiplomacyModel) 负责更广泛的 stance 存储和计算；本 helper 不是它们的替代品。

## 风险与版本边界

- `IsWarCausedByPlayer` 会直接读取 `Hero.MainHero.MapFaction`，crime 分支还会读取 `Campaign.Current.Models.CrimeModel`。应从运行中的 Campaign 事件或有保护的 Campaign 代码调用，不要在启动阶段把它当通用工具。
- `GetLogsForWar` 不检查 `stance`、`Campaign.Current`、`LogEntryHistory` 或遍历中的日志项是否为 null。应传入由 `IFaction.GetStanceWith` 取得的实时 stance，并在 Campaign 状态有效时使用。
- `GetPrisonersOfWarTakenByFaction` 在枚举 `AliveLords` 前不检查 `prisonerFaction`。lord 囚禁队伍上的 null 条件运算符不能保护输入派系本身。
- `DidMainHeroSwornNotToAttackFaction` 不检查 `faction`；否定结果会有意返回 `explanation = null`。调用方必须先判断布尔值，再决定是否展示 explanation。
- `HasAllianceWithFaction` 对 null 安全，也拒绝非王国派系，但不会创建联盟或保存决策。需要 mutation 时应走联盟 behavior/decision 流程。
- 这些方法都不拥有存档数据，也不改变世界状态。在存档加载、派系消灭、抓捕或 stance 变更后缓存它们的结果，会造成过期 UI 或错误 quest 决策。

## 版本注记

本页按 v1.4.5 `DiplomacyHelper.cs` 编写。公开面是 6 个只读查询；它不替代 `DeclareWarAction`、和平/联盟 Action、`FactionManager` 或活动外交 Model。

## 导航

- [↑ API 系统索引](../)
- [相关：IFaction](../../campaign/IFaction)
- [相关：DeclareWarAction](../../campaign-ext/DeclareWarAction)
- [相关：StanceLink](../../campaign/StanceLink)
- [相关：Campaign](../../campaign/Campaign)
- [相关：CampaignEvents](../../campaign/CampaignEvents)
