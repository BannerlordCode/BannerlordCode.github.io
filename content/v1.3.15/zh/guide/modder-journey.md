---
title: Mod 作者路线
description: 从确定目标、选择入口到测试发布的 Bannerlord Mod 学习路线。
---
# Mod 作者路线

## 心智模型

把这页当作一条可回退的开发路线：先决定要改哪一层，再找到该层的入口类，最后通过 `SubModule` 把代码接入正确生命周期。目标不是记住所有 API，而是能从任务目标定位到模块、入口、依赖和验证手段。

## 开始前

本文假设你拥有 Mount & Blade II: Bannerlord，建议以 v1.3.15 为起点，已经安装 Visual Studio 2022 和 .NET desktop workload，并具备基本 C# 与 XML 能力。如果还没有创建过 `SubModule`，先读[入门指南](../)。

## 目录

1. [确定要改什么](#确定要改什么)
2. [找到入口类](#找到入口类)
3. [搭建 SubModule 骨架](#搭建-submodule-骨架)
4. [添加第一个行为或数据](#添加第一个行为或数据)
5. [测试与存档](#测试与存档)

---

## 确定要改什么

先问一个问题：你要改变游戏的哪一部分？大多数入门项目可以归到下面四类。

| 类型 | 常见目标 | 推荐起点 |
|------|----------|----------|
| UI 调整 | 添加菜单按钮或显示通知 | [Gauntlet UI 系统](../gauntlet-ui/) |
| 战役行为 | 添加事件或改变世界地图逻辑 | [战役系统](../campaign-system/) |
| 任务逻辑 | 自定义战斗规则、AI 或胜负条件 | [任务系统](../mission-system/) |
| 物品或角色数据 | 添加武器、护甲或 NPC | [资源管线](../asset-pipeline/) 与 XML |

如果只是调整一个数值，例如让弓造成更多伤害，通常 XML 就够了，不需要 C#。如果要监听每个 Agent 的生成和移除，需要使用 [`MissionBehavior`](../../api/mission/MissionBehavior/)。如果要在世界地图每天执行逻辑，应使用 [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/)。先选对层，再看它的注册点，能避免把战役状态误写进一次性任务对象。

## 找到入口类

每类修改都有对应的钩子类。大多数 Mod 从这些入口之一开始：

- Mod 的根入口是 [`MBSubModuleBase`](../../api/core/MBSubModuleBase/)，负责模块加载和游戏启动生命周期。
- 任务层使用 [`Mission`](../../api/mission/Mission/) 与 [`MissionBehavior`](../../api/mission/MissionBehavior/)，战斗、竞技场和攻城都在任务上下文中运行。
- 战役层使用 [`Campaign`](../../api/campaign/Campaign/) 与 [`CampaignBehaviorBase`](../../api/campaign-ext/CampaignBehaviorBase/)，世界地图、氏族、王国和定居点都属于这一层。
- UI 层从 [`GauntletMovie`](../../api/gui/GauntletMovie/) 与 [`ViewModel`](../../api/core-extra/ViewModel/) 开始。

战役世界中的关键对象还包括 [`Hero`](../../../../versions/Hero/)、[`MobileParty`](../../../../versions/MobileParty/)、[`Settlement`](../../../../versions/Settlement/)、[`Town`](../../../../versions/Town/) 和 [`Village`](../../../../versions/Village/)。找到入口类后，再确认实例的获取方式和可覆盖方法；这两点共同决定代码应该放在哪里以及何时可以安全访问状态。

## 搭建 SubModule 骨架

所有 Mod 类型最终都通过 `MBSubModuleBase` 的子类注册。下面的骨架处理模块加载、战役启动和任务启动三个常见钩子：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

namespace MyModule
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            // 在这里加载模块级资源或注册全局事件
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarter)
        {
            base.OnGameStart(game, gameStarter);

            if (gameStarter is CampaignGameStarter campaignStarter)
            {
                campaignStarter.AddBehavior(new MyCampaignBehavior());
            }
        }

        public override void OnMissionBehaviorInitialize(Mission mission)
        {
            base.OnMissionBehaviorInitialize(mission);
            mission.AddMissionBehavior(new MyMissionLogic());
        }
    }
}
```

`SubModule.xml` 的 `<SubModuleClassType>` 必须指向这个类的完整限定名。模块级初始化、战役行为和任务行为有不同生命周期；不要把只能在 `Mission` 存在时访问的状态放到 `OnSubModuleLoad`，也不要把跨存档状态只放在 `MissionBehavior` 的字段里。

## 添加第一个行为或数据

### 战役行为

下面的行为每天给玩家队伍增加一点士气：

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(
            this,
            OnDailyTickParty
        );
    }

    private void OnDailyTickParty(MobileParty party)
    {
        if (party == MobileParty.MainParty)
        {
            party.Morale += 1f;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 如果有自定义状态，在这里同步
    }
}
```

事件订阅应在 `RegisterEvents`，而自定义持久状态应通过 `SyncData`。`AddNonSerializedListener` 只表达事件监听关系，不会自动保存你的字段；需要保存时，还要为字段选择稳定的 SaveSystem 编号并阅读[存档系统指南](../save-system-guide/)。

### 任务逻辑

如果要在战斗开始时给玩家英雄增加少量生命值，可以使用 `MissionBehavior`：

```csharp
public class MyMissionLogic : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionStart()
    {
        base.OnMissionStart();

        foreach (Agent agent in Mission.Current.Agents)
        {
            if (agent.IsHero && agent.Team == Mission.Current.PlayerTeam)
            {
                agent.Health = Math.Min(agent.Health + 10f, agent.HealthLimit);
            }
        }
    }

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
        // 在这里记录击杀或触发额外逻辑
    }
}
```

`Mission.Current` 只能在任务生命周期内使用；不要把它缓存到战役行为或任务结束后继续访问。处理 Agent 移除时也要允许 `affectorAgent` 为空，因为并非每次移除都有有效攻击者。

### UI 通知

最轻量的 UI 修改是显示一条消息，可以放在任何已经正确注册的行为中：

```csharp
MBInformationManager.AddQuickInformation(
    new InformationMessage("My mod is loaded", Colors.Green)
);
```

复杂界面再阅读 [Gauntlet UI 系统](../gauntlet-ui/)，其中使用 `GauntletMovie` 和 `ScreenManager`。UI 的 ViewModel 生命周期由界面控制，不要让 ViewModel 持有已经结束的任务或战役状态引用。

### 数据修改

如果只是增加一把剑，通常不需要 C#。在 `ModuleData/items.xml` 中加入物品定义，并确保 `SubModule.xml` 加载该 XML 文件：

```xml
<Item id="my_steel_sword"
      name="{=my_steel_sword}Steel Sword"
      is_merchandise="true"
      value="200"
      weight="1.2"
      type="Item"
      subtype="one_handed_sword">
    <Weapon ... />
</Item>
```

完整格式见[资源管线](../asset-pipeline/)。[`ItemObject`](../../../../versions/ItemObject/) 是运行时的物品表示；XML 定义和运行时对象不是同一个生命周期，必须先确认 XML 已被模块加载，再在代码中查找对象。

## 测试与存档

按下面顺序验证：

1. 编译 DLL 并修复编译错误。
2. 将整个模块目录复制到游戏的 `Modules/`，或把 Visual Studio 输出目录直接配置到那里。
3. 启动游戏，在主菜单打开 `Modules`，启用 Mod 并开始游戏。
4. 在游戏中按 `F12` 打开 Module Manager，确认模块已加载。
5. 在代码中加入 `Debug.Print("MyMod: loaded", 0, Debug.DebugColor.Green, 17592186044416UL);`，然后在 `rgl_log.txt` 中确认输出。

如果修改了战役数据，必须考虑存档兼容性。v1.3.15 使用独立的 `TaleWorlds.SaveSystem`；用 `[SaveableClass]` 标记可保存类，用 `[SaveableField]` 标记字段。不要在已发布存档上复用旧字段编号，也不要把运行时缓存当作存档来源。

## 参见与下一步

- [入门指南](../)：环境和第一个 `SubModule`
- [常见模式](../common-patterns/)：代码组织、生命周期和事件
- [游戏系统概述](../game-systems-overview/)：选择可扩展的系统
- [SDK 概览](../../architecture/sdk-overview/)：SDK 分层图
- [`MBSubModuleBase` 参考](../../api/core/MBSubModuleBase/)：模块入口
- [`Campaign` 参考](../../api/campaign/Campaign/)：战役系统入口
- [`MissionBehavior` 参考](../../api/mission/MissionBehavior/)：任务行为基类
- [`GauntletMovie` 参考](../../api/gui/GauntletMovie/)：UI 入口
- [任务系统](../mission-system/)：在 `Mission` 和 `MissionBehavior` 中实现战斗逻辑

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [版本首页](../)
- [入门指南](./)

## ↓ 同级与相关页面

- [常见模式](../common-patterns)
- [游戏系统概述](../game-systems-overview)
- [SDK 概览](../../architecture/sdk-overview)
- [任务系统](../mission-system)
- [存档系统指南](../save-system-guide)

<!-- END SECTION INDEX -->
