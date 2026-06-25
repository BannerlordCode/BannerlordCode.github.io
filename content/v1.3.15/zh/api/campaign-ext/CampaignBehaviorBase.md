---
title: "CampaignBehaviorBase"
description: "战役模块扩展的根类：注册事件、保存数据、注入每日 tick 与任务逻辑。"
---
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## 概述

`CampaignBehaviorBase` 是 Bannerlord 战役 mod 最重要的扩展点之一。你可以把它理解为**“挂载在战役世界上的一个长期服务”**：游戏启动时创建，战役运行期间一直存活，直到战役结束或读档。

通过继承它并重写两个抽象方法，你可以：

- **响应战役事件**：每日 tick、部队移动、战斗结束、任务状态变化、关系变化等。
- **持久化自定义数据**：通过 `SyncData` 把 mod 数据写进存档。
- **创建周期性逻辑**：在 `RegisterEvents` 里订阅 `CampaignEvents` 的各种 tick 事件。

## 心智模型

把 `CampaignBehaviorBase` 当作**“战役世界的后台服务”**：

- 不要把它和 `MissionBehavior` 混淆：`MissionBehavior` 只在战斗/场景里活一次；`CampaignBehaviorBase` 在战役地图里长期存在。
- 它不会自动创建；你需要在 `CampaignGameStarter.AddBehavior(...)` 里注册。
- 一个 mod 通常有**一个主 Behavior** 就够了，复杂 mod 可以拆成多个（如经济 Behavior、事件 Behavior、UI Behavior）。
- `SyncData` 是跨存档保存 mod 数据的**唯一推荐入口**。

## 核心成员

| 成员 | 说明 |
|------|------|
| `StringId` | 行为唯一标识；用于 `GetCampaignBehavior<T>()` 查找。 |
| `RegisterEvents()` | 抽象方法；在此订阅 `CampaignEvents`。 |
| `SyncData(IDataStore dataStore)` | 抽象方法；在此保存/恢复 mod 数据。 |
| `static T GetCampaignBehavior<T>()` | 按类型获取已注册的行为实例。 |

## 如何注册一个 CampaignBehavior

通常在 `CampaignGameStarter`（或 `MbSubModuleBase` 的 `OnGameStart`）里注册：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
    }

    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        base.OnGameStart(game, starterObject);

        if (starterObject is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new MyCampaignBehavior());
        }
    }
}
```

## 主要方法

### `public abstract void RegisterEvents()`
订阅战役事件。常见事件包括 `DailyTickEvent`、`HourlyTickEvent`、`OnSettlementEntered`、`OnMissionEnded`、`MobilePartyDestroyed` 等。

```csharp
public override void RegisterEvents()
{
    CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    CampaignEvents.OnSettlementEnteredEvent.AddNonSerializedListener(this, OnSettlementEntered);
}

private void OnDailyTick()
{
    // 每天执行一次
}

private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, MapEvent mapEvent)
{
    // 某个英雄死亡
}

private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
{
    // 进入据点
}
```

### `public abstract void SyncData(IDataStore dataStore)`
序列化/反序列化 mod 数据。dataStore 在保存时写入，在读档时读取。

```csharp
[SaveableField(0)]
private int _totalKills;

[SaveableField(1)]
private List<string> _unlockedBosses = new List<string>();

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("MyModTotalKills", ref _totalKills);
    dataStore.SyncData("MyModUnlockedBosses", ref _unlockedBosses);
}
```

> `SyncData` 的字段必须标记 `[SaveableField]` 或 `[SaveableProperty]`，否则保存系统不会识别。

### `public static T GetCampaignBehavior<T>()`
在运行时按类型找到已注册的行为。适合在别处调用行为的公共方法。

```csharp
var myBehavior = CampaignBehaviorBase.GetCampaignBehavior<MyCampaignBehavior>();
myBehavior?.ForceEvent("invasion");
```

## 典型用法示例

### 示例 1：每日给玩家部队加少量经验

```csharp
public class DailyXpBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyTickParty);
    }

    private void OnDailyTickParty(MobileParty party)
    {
        if (party == MobileParty.MainParty)
        {
            foreach (TroopRosterElement element in party.MemberRoster.GetTroopRoster())
            {
                if (element.Character.IsHero)
                {
                    element.Character.HeroObject.AddSkillXp(DefaultSkills.Leadership, 10f);
                }
            }
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

### 示例 2：保存/恢复自定义数据结构

```csharp
public class MyCampaignData
{
    [SaveableField(0)]
    public int DaysSinceInvasion;

    [SaveableField(1)]
    public bool InvasionActive;
}

public class InvasionBehavior : CampaignBehaviorBase
{
    [SaveableField(0)]
    private MyCampaignData _data = new MyCampaignData();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("MyInvasionData", ref _data);
    }

    private void OnDailyTick()
    {
        _data.DaysSinceInvasion++;
        if (_data.DaysSinceInvasion > 30 && !_data.InvasionActive)
        {
            StartInvasion();
            _data.InvasionActive = true;
        }
    }
}
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5：`CampaignBehaviorBase` 抽象接口非常稳定；`RegisterEvents` + `SyncData` 是跨版本最可靠的扩展方式。
- v1.4.5 对 `CampaignGameStarter` 做了细化拆分，但 `AddBehavior(...)` 方法保持不变。
- 跨版本兼容建议：使用条件编译或反射处理不同版本的 `CampaignEvents` 签名差异。

## 参见

- [Campaign](../../campaign/Campaign/) — 战役世界的入口
- [CampaignEvents](../CampaignEvents/) — 事件总线
- [CampaignGameStarter](../CampaignGameStarter/) — 注册 Behavior 与 Model
- [SaveManager](../../save-system/SaveManager/) — `SyncData` 底层序列化
- [QuestBase](../QuestBase/) — 创建任务
- [IssueBase](../../campaign/IssueBase/) — 创建问题/委托
