---
title: "AgentBehaviorManager"
description: "IAgentBehaviorManager 的沙盒实现：十三个「按角色类型挂行为」的方法，除两个外全是显式接口实现，全部转发给静态类 BehaviorSets。"
---

# AgentBehaviorManager

**Namespace:** `SandBox.AI`
**Module:** `SandBox`
**Type:** `public class AgentBehaviorManager : IAgentBehaviorManager`
**Base:** 无（实现 `TaleWorlds.CampaignSystem.IAgentBehaviorManager`）
**File:** `SandBox.AI/AgentBehaviorManager.cs`

## 概述

这个类没有字段、没有构造函数、没有状态——它是一层**纯转发壳**，把 `IAgentBehaviorManager` 的十三个 `Add*Behaviors(IAgent)` 方法逐一转给静态类 `BehaviorSets` 的同名静态方法。类体 52 行，十三个方法，每个方法体恰好一行。

它存在的唯一理由是**装配点**：`SandBoxSubModule.cs:102` 与 `:153` 两处写着 `sandBoxManager.AgentBehaviorManager = (IAgentBehaviorManager)new AgentBehaviorManager();`，把这个壳装进 [SandBoxManager](../SandBoxManager) 的 `IAgentBehaviorManager AgentBehaviorManager { get; set; }` 属性。装上之后，沙盒战役里的每个 `LocationCharacter`（城镇里的站桩 NPC、商店学徒、领主厅里的人、竞技场大师……）在创建时都会拿到一个「按角色类型挂哪些行为」的委托，而这些委托全部来自这个类。

因此它在 1.4.5 里的真正价值是「**角色类型 → 行为清单**」这张表的索引。要知道某个 NPC 到底会挂哪些行为，读这个壳没用，得去读 `BehaviorSets` 里对应的那十三个静态方法。

## 心智模型

把它当成「**一张按角色类型命名的方法目录**」，而不是一个可复用的管理器。三个必须记住的事实。

第一，**十三个方法里只有两个是普通 `public`，其余十一个是显式接口实现**。`AddQuestCharacterBehaviors(IAgent agent)` 与 `AddFirstCompanionBehavior(IAgent agent)` 写成 `public void ...`，而另外十一个写成 `void IAgentBehaviorManager.XxxBehaviors(IAgent agent)`。后果是：**静态类型写成 `AgentBehaviorManager` 时，十一个方法访问不到**；而 `SandBoxManager.AgentBehaviorManager` 的静态类型恰恰是接口 `IAgentBehaviorManager`，所以实际调用全部经由接口，十三个都能用。想用具体类调用就必须自己转型。

第二，**转发目标里有一个方法名不一致**。`AddStealthAgentBehaviors` 转的是 `BehaviorSets.StealthAgentBehaviors(agent)`——**少了 `Add` 前缀**。其余十二个都保留了 `Add`。这不是笔误的推测，而是源码里的实际写法；如果你自己写 `BehaviorSets` 的替换实现，必须照这个实际名字写。

第三，**它的接口方法名与 `BehaviorSets` 的静态方法名一一对应但不完全同形**，且**参数统一是 `IAgent` 而不是 `Agent`**。`IAgent` 是 agent 的窄接口（`TaleWorlds.Core`），只暴露被行为装配需要的那部分成员。想在里面读 `Agent` 的完整能力得转型。

第四点值得强调：**它没有任何状态，也没有防重复调用的机制**。同一个 agent 被调两次 `AddCompanionBehaviors`，会发生什么完全取决于 `BehaviorSets` 里的实现——这个壳不拦。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AddQuestCharacterBehaviors` | `public void AddQuestCharacterBehaviors(IAgent agent)` | 任务角色的行为清单。**十三个里唯一既是 `public` 又被官方以方法组形式直接引用的两个之一**——`HeroAgentSpawnCampaignBehavior` 那一带的 `LocationCharacter` 构造会把它当委托传进去。转发 `BehaviorSets.AddQuestCharacterBehaviors`。 |
| `AddFirstCompanionBehavior` | `public void AddFirstCompanionBehavior(IAgent agent)` | 「第一个同伴」专用清单——通常只挂一条行为（跟着玩家）。同样既是 `public` 又被直接引用。转发 `BehaviorSets.AddFirstCompanionBehavior`。 |
| `AddWandererBehaviors` | `void IAgentBehaviorManager.AddWandererBehaviors(IAgent agent)` | 通用游荡者（城镇里走来走去的平民）。**显式实现，只能经接口调**。`NotableHelperCharacterCampaignBehavior.cs:77` 与 `WorkshopsCharactersCampaignBehavior.cs:73` 都把它作为 `LocationCharacter` 的构造委托传入。 |
| `AddOutdoorWandererBehaviors` | `void IAgentBehaviorManager.AddOutdoorWandererBehaviors(IAgent agent)` | 室外游荡者。显式实现。与上一项的差别由 `BehaviorSets` 里的具体挂载决定，这个壳不解释。 |
| `AddIndoorWandererBehaviors` | `void IAgentBehaviorManager.AddIndoorWandererBehaviors(IAgent agent)` | 室内游荡者。显式实现。 |
| `AddFixedCharacterBehaviors` | `void IAgentBehaviorManager.AddFixedCharacterBehaviors(IAgent agent)` | 固定站桩角色。显式实现。`HeroAgentSpawnCampaignBehavior.cs:120` 按 `HeroLocationDetail` 二选一（`PlayerClanMember` / `MainPartyCompanion` 走同伴清单，否则走这一项），`LordsNeedsTutorIssueBehavior.cs:642` 也用它。 |
| `AddPatrollingThugBehaviors` | `void IAgentBehaviorManager.AddPatrollingThugBehaviors(IAgent agent)` | 巡逻打手。显式实现。 |
| `AddStandGuardBehaviors` | `void IAgentBehaviorManager.AddStandGuardBehaviors(IAgent agent)` | 站岗卫兵。显式实现。 |
| `AddFixedGuardBehaviors` | `void IAgentBehaviorManager.AddFixedGuardBehaviors(IAgent agent)` | 固定卫兵。显式实现。 |
| `AddStealthAgentBehaviors` | `void IAgentBehaviorManager.AddStealthAgentBehaviors(IAgent agent)` | 潜行单位。显式实现。**转发目标叫 `BehaviorSets.StealthAgentBehaviors`，没有 `Add` 前缀**——十三个里唯一名字不对齐的一个。 |
| `AddPatrollingGuardBehaviors` | `void IAgentBehaviorManager.AddPatrollingGuardBehaviors(IAgent agent)` | 巡逻卫兵。显式实现。 |
| `AddCompanionBehaviors` | `void IAgentBehaviorManager.AddCompanionBehaviors(IAgent agent)` | 玩家同伴的完整行为清单。显式实现。 |
| `AddBodyguardBehaviors` | `void IAgentBehaviorManager.AddBodyguardBehaviors(IAgent agent)` | 护卫。显式实现。 |

## 真实示例

从装配点读出这个管理器并调用——**注意静态类型是接口，十一个显式实现的方法才能访问到**：

```csharp
IAgentBehaviorManager manager = SandBoxManager.Instance.AgentBehaviorManager;
if (manager == null)
{
    Debug.Print("sandbox module did not install a behavior manager", 0);
    return;
}

// 官方用法是把这些方法作为方法组转成委托塞进 LocationCharacter
// （见 NotableHelperCharacterCampaignBehavior.cs:77 与
//   WorkshopsCharactersCampaignBehavior.cs:73）
LocationCharacter.AddBehaviorsDelegate companionBehaviors = manager.AddCompanionBehaviors;
LocationCharacter.AddBehaviorsDelegate wandererBehaviors = manager.AddWandererBehaviors;

Debug.Print("delegate acquired = " + (companionBehaviors != null && wandererBehaviors != null), 0);
```

用具体类调用时，十一个显式实现的方法访问不到，必须走接口或转型：

```csharp
public static void CallViaInterface(SandBoxManager sandBoxManager)
{
    // 静态类型写成 AgentBehaviorManager 时，只有这两个 public 方法可见
    AgentBehaviorManager concrete = new AgentBehaviorManager();
    concrete.AddQuestCharacterBehaviors(null);
    concrete.AddFirstCompanionBehavior(null);

    // 其余十一个必须转成接口
    IAgentBehaviorManager asInterface = concrete;
    asInterface.AddWandererBehaviors(null);
    asInterface.AddStandGuardBehaviors(null);
    asInterface.AddStealthAgentBehaviors(null);
}
```

自己实现一个只覆盖几种角色的版本（十三个方法必须全实现，接口不允许部分实现）：

```csharp
public class MyAgentBehaviorManager : IAgentBehaviorManager
{
    public void AddQuestCharacterBehaviors(IAgent agent)
    {
    }

    public void AddFirstCompanionBehavior(IAgent agent)
    {
    }

    // 这五个在官方实现里是显式的，在这里写成普通 public 一样合法
    public void AddWandererBehaviors(IAgent agent)
    {
    }

    public void AddOutdoorWandererBehaviors(IAgent agent)
    {
    }

    public void AddIndoorWandererBehaviors(IAgent agent)
    {
    }

    public void AddFixedCharacterBehaviors(IAgent agent)
    {
    }

    public void AddPatrollingThugBehaviors(IAgent agent)
    {
    }

    public void AddStandGuardBehaviors(IAgent agent)
    {
    }

    public void AddFixedGuardBehaviors(IAgent agent)
    {
    }

    // 官方实现里转发的是 BehaviorSets.StealthAgentBehaviors，少一个 Add
    public void AddStealthAgentBehaviors(IAgent agent)
    {
    }

    public void AddPatrollingGuardBehaviors(IAgent agent)
    {
    }

    public void AddCompanionBehaviors(IAgent agent)
    {
    }

    public void AddBodyguardBehaviors(IAgent agent)
    {
    }
}
```

替换成自己的实现——这是这个类唯一真正有意义的用法：

```csharp
public class MySandboxSubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);

        SandBoxManager sandBoxManager = SandBoxManager.Instance;
        if (sandBoxManager != null)
        {
            sandBoxManager.AgentBehaviorManager = new MyAgentBehaviorManager();
        }
    }
}
```

## 风险与边界

- **十一个方法是显式接口实现。** 用具体类当静态类型访问不到它们，只能走 `IAgentBehaviorManager`。
- **转发目标名字不统一。** `AddStealthAgentBehaviors` → `BehaviorSets.StealthAgentBehaviors`，少 `Add` 前缀；其余十二个保留。
- **本类不含任何行为清单。** 想知道某个 NPC 挂什么行为，必须去读 `BehaviorSets` 里对应的静态方法——这里十三个方法体都是一行转发。
- **参数是 `IAgent` 而不是 `Agent`。** 窄接口里能做的事有限，要完整能力得转型。
- **无状态、无防重。** 同一 agent 重复调会发生什么完全由 `BehaviorSets` 的实现决定，这个壳不拦。
- **`SandBoxManager.Instance.AgentBehaviorManager` 可能为 null。** `SandBoxSubModule` 在两处（`:102` 与 `:153`）装它，但不是所有代码路径都会走到那两行；调用前必须判空。
- **装配点是 submodule 的 `InitializeGameStarter`。** 装晚了（角色已创建之后）不会有任何效果，且不会报错。
- **不参与存档。** 行为清单是 mission/场景级的临时状态。
- **`BehaviorSets` 是 `public class` 但方法全是 `static`。** 它同样没有实例状态——想换行为清单，要么换 `BehaviorSets` 的静态方法（做不到，它们不是 virtual），要么换本类这个接口实现。

## 依赖关系

- 接口契约：[IAgentBehaviorManager](../../campaign/IAgentBehaviorManager) 的十三个方法签名由它定义，本类是沙盒侧的唯一实现；`SandBoxManager.AgentBehaviorManager` 属性的静态类型就是它
- 真正的实现体：[BehaviorSets](BehaviorSets) 的十三个同名静态方法是本类每个方法体的转发目标，行为清单的真相全在那里
- 装配点：`Modules.SandBox/SandBox/Sandbox/SandBoxSubModule.cs:102` 与 `:153` 两处 `sandBoxManager.AgentBehaviorManager = new AgentBehaviorManager()` 是本类进入运行时的唯一途径
- 参数类型：`TaleWorlds.Core.IAgent` 是十三个方法的统一入参，`Agent` 是它的实现类型之一
- 消费方：`HeroAgentSpawnCampaignBehavior.cs:120`（同伴 vs 固定角色二选一）、`NotableHelperCharacterCampaignBehavior.cs:77`、`WorkshopsCharactersCampaignBehavior.cs:73`、`LordsNeedsTutorIssueBehavior.cs:642`、`ArenaMasterCampaignBehavior.cs:187` 是 1.4.5 里通过接口调用本类的代表性位置
- 行为本体：被挂载的行为都派生自 [AgentBehavior](AgentBehavior)，由 `BehaviorSets` 调 `AgentBehaviorGroup.AddBehavior<T>()` 实例化
- 宿主容器：[SandBoxManager](../SandBoxManager) 只存一个 `IAgentBehaviorManager` 引用，不关心是谁实现的
- 桶首页：[campaign-ext API 分区](../)
