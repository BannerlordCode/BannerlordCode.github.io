---
title: "BattleSpawnLogic"
description: "44 行的场景清理逻辑：开局第一个 tick 找到选中的出生点集，把其余 spawnpoint_set 全从场景里删掉。四个 tag 常量实测零引用，代码里用的全是字符串字面量。"
---

# BattleSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BattleSpawnLogic.cs`

## 概述

一句话职责：**场景里通常同时摆着好几套出生点（普通攻城的一套、夺城的一套、解围的一套），这个类在开局第一个 tick 挑中其中一套，把其余的整块从场景里删掉。** 全文 44 行、一个 `override`、三句实际动作。

删的动作是 `item.Remove(76)`（`BattleSpawnLogic.cs:39`），作用在 `FindWeakEntitiesWithTag("spawnpoint_set")`（`BattleSpawnLogic.cs:35`）列出来的实体上。选中的那套用 `FindWeakEntityWithTag(_selectedSpawnPointSetTag)`（`BattleSpawnLogic.cs:32`）找出来，从待删列表里剔除（`BattleSpawnLogic.cs:36`），然后剩下的全删。

它有两个调用来源。一是 [BannerlordMissions](../BannerlordMissions/) 的攻城任务构造方法 OpenSiegeMissionWithDeployment，那里按 `isSallyOut` / `isReliefForceAttack` 挑 tag 传进去（`BannerlordMissions.cs:185`）。二是 [SandBoxMissions](../../campaign-ext/SandBoxMissions/) 里的 6 处直接 `new BattleSpawnLogic("battle_set")`（`SandBoxMissions.cs:715`）。

## 心智模型

把它当成**「开局清场，只留一套出生点」的一次性开关**，而不是持续行为。四条推论：

第一，**它只跑一次，靠 `_isScenePrepared` 自锁。** 钩子是 `OnPreMissionTick`（`BattleSpawnLogic.cs:26`，虚声明在 `MissionBehavior.cs:138`），第一行就是 `if (_isScenePrepared) return;`（`BattleSpawnLogic.cs:28-31`）。这意味着**它在第一个 mission tick 就把活干完了，之后整个 mission 生命周期内都不会再动。** 任何「战斗中动态增删出生点集」的想法在这里是无效的。

第二，**「找不到就不删，而且还不重试」——这是本类最坑的一条。** `_isScenePrepared = true` 在 `BattleSpawnLogic.cs:42`，**位于 `if (weakGameEntity != null)` 这个 if 块之外**（那个块在 `:33` 开、`:41` 闭）。所以只要 tag 拼错或场景里没这一套，if 不进、什么都没删，但「已处理」标记照样置上。**结果是：全场所有 `spawnpoint_set` 都留在场景里，游戏不报错，你只会看到两套出生点并存导致的 AI 异常。**

第三，**它不创建任何东西，只删东西。** 选中的那套出生点是由别人（[BattleSpawnLogic](../BattleSpawnLogic/) 之外的 mission 构造流程）摆进场景的。这个类只是「留哪套、删其余」。**所以传进去的 tag 必须是场景里已经存在的标签字符串，不是「我想用哪套」。**

第四，**四个 tag 常量一个都没被用。** `BattleTag`（`BattleSpawnLogic.cs:9`）、`SallyOutTag`（`BattleSpawnLogic.cs:11`）、`ReliefForceAttackTag`（`BattleSpawnLogic.cs:13`）、`SpawnPointSetCommonTag`（`BattleSpawnLogic.cs:15`）实测引用数全部为 0。删的时候用的是字面量 `"spawnpoint_set"`（`BattleSpawnLogic.cs:35`），而 7 个调用点传的也全是字面量。更进一步——`"battle_set"` 这个字符串在仓库里有**三处独立定义**：本类 `BattleSpawnLogic.cs:9`、[CampaignData](../../campaign/CampaignData/) 的 `CampaignData.cs:127`、以及 `BannerlordMissions.cs:185` 的字面量。**改 tag 名要同时改三处，编译器不会帮你发现漏了哪一处。**

## 如何使用

**拿法：** `new` 出来加进 mission behavior 列表，必须在 mission 启动前：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

// 官方两种写法之一：SandBoxMissions.cs:715 那种固定 "battle_set"
missionBehaviors.Add(new BattleSpawnLogic("battle_set"));

// 官方另一种：BannerlordMissions.cs:185 那种按任务类型挑
bool isSallyOut = ...;
bool isReliefForceAttack = ...;
missionBehaviors.Add(new BattleSpawnLogic(
    isSallyOut ? "sally_out_set" : (isReliefForceAttack ? "relief_force_attack_set" : "battle_set")));
```

注意**类里有三个公开常量但没人用**——你可以用，但官方不这么做，且改常量名对现有行为零影响：

```csharp
using TaleWorlds.MountAndBlade.Source.Missions;

// 常量声明在 BattleSpawnLogic.cs:9，值是 "battle_set"
string tag = BattleSpawnLogic.BattleTag;

// 想避免字面量散落，用常量是更安全的写法 —— 但要记得
// 实际删除逻辑找的是字面量 "spawnpoint_set"（BattleSpawnLogic.cs:35），
// 那个常量是 private（BattleSpawnLogic.cs:15），外部拿不到。
missionBehaviors.Add(new BattleSpawnLogic(tag));
```

**最容易踩的一条：** 传一个场景里不存在的 tag，然后期待它会重试。不会。`_isScenePrepared` 在 `BattleSpawnLogic.cs:42` 无条件置真，这个类一生只尝试一次。**传错 tag = 所有出生点集全部保留，且没有任何报错。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class BattleSpawnLogic : MissionLogic`（`BattleSpawnLogic.cs:7`） | 命名空间是 `TaleWorlds.MountAndBlade.Source.Missions`（`:5`），是个**第三层子命名空间**。非抽象、可无参之外单参构造，可重复 new。 |
| `BattleTag` | `public const string BattleTag = "battle_set"`（`BattleSpawnLogic.cs:9`） | 普通攻城出生点集的标签。**实测引用数 0**——`BannerlordMissions.cs:185` 与 `SandBoxMissions.cs` 的 4 处都写的是字面量。 |
| `SallyOutTag` | `public const string SallyOutTag = "sally_out_set"`（`BattleSpawnLogic.cs:11`） | 夺城战出生点集标签。**实测引用数 0**，同上游。 |
| `ReliefForceAttackTag` | `public const string ReliefForceAttackTag = "relief_force_attack_set"`（`BattleSpawnLogic.cs:13`） | 解围军出生点集标签。**实测引用数 0**，同上游。 |
| `SpawnPointSetCommonTag` | `private const string SpawnPointSetCommonTag = "spawnpoint_set"`（`BattleSpawnLogic.cs:15`） | **private**，外部不可见。更讽刺的是删实体时**没有用它**，用的是字面量（`BattleSpawnLogic.cs:35`）。**改这个常量对行为零影响。** |
| `_selectedSpawnPointSetTag` | `private readonly string _selectedSpawnPointSetTag`（`BattleSpawnLogic.cs:17`） | 构造时存进来的 tag（`BattleSpawnLogic.cs:23`），只在 `BattleSpawnLogic.cs:32` 用一次。**readonly，内容不会被校验。** |
| `_isScenePrepared` | `private bool _isScenePrepared`（`BattleSpawnLogic.cs:19`） | 自锁标志。守卫在 `BattleSpawnLogic.cs:28`，置真在 `BattleSpawnLogic.cs:42`——**在 if 块外**。这是「不重试」的直接原因。 |
| 构造函数 | `public BattleSpawnLogic(string selectedSpawnPointSetTag)`（`BattleSpawnLogic.cs:21`） | 唯一构造。**不做任何校验**：传 null、传空串、传不存在的标签，构造都成功，问题延后到 `BattleSpawnLogic.cs:32` 才暴露成「静默不删」。 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)`（`BattleSpawnLogic.cs:26`） | 唯一的 behavior 钩子，虚声明在 `MissionBehavior.cs:138`。**`dt` 形参在函数体里一次都没用**——它不是逐帧逻辑，是「第一个 tick 跑一次」的一次性动作。 |

删实体那一段的三个动作（都在同一个 `if` 块内）：

| 步骤 | 行 | 动作 |
| --- | --- | --- |
| 找选中集 | `BattleSpawnLogic.cs:32` | `FindWeakEntityWithTag(_selectedSpawnPointSetTag)`，null 就整段跳过 |
| 收集全集 | `BattleSpawnLogic.cs:35` | `FindWeakEntitiesWithTag("spawnpoint_set").ToList()` —— **注意是字面量，不是那个 private 常量** |
| 剔除选中集 | `BattleSpawnLogic.cs:36` | `list.Remove(weakGameEntity)`，保证自己不被自己删掉 |
| 逐个删除 | `BattleSpawnLogic.cs:39` | `item.Remove(76)` |

## 真实示例

按官方写法挂进去（三选一，和 `BannerlordMissions.cs:185` 语义一致）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;

public static void AttachSpawnCleanup(List<MissionBehavior> behaviors,
                                      bool isSallyOut,
                                      bool isReliefForceAttack)
{
    // 与 BannerlordMissions.cs:185 的三元表达式逐字对齐
    string tag = isSallyOut
        ? "sally_out_set"
        : (isReliefForceAttack ? "relief_force_attack_set" : "battle_set");

    behaviors.Add(new BattleSpawnLogic(tag));
}
```

自查「到底删掉了没有」——这一段能在运行时直接看出不重试陷阱：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Source.Missions;
using System.Linq;

public static void VerifySpawnCleanup(string selectedTag)
{
    // 先看选中的那套在不在
    WeakGameEntity selected = Mission.Current.Scene.FindWeakEntityWithTag(selectedTag);

    // 再数全场还剩几个 spawnpoint_set
    int remaining = Mission.Current.Scene
        .FindWeakEntitiesWithTag("spawnpoint_set")
        .Count();

    Debug.Print("selectedTag=" + selectedTag
              + " found=" + (selected != null)
              + " remainingSets=" + remaining, 0);

    // selected == null 且 remaining > 1
    //   => 就是「tag 拼错 -> 静默不删」：BattleSpawnLogic.cs:33 的 if 没进，
    //      但 BattleSpawnLogic.cs:42 已经把 _isScenePrepared 置真，不会重来。
}
```

不用本类、自己做同样的清理（能看清删除码的含义）：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using System.Collections.Generic;
using System.Linq;

public static void ManualSpawnCleanup(string keepTag)
{
    List<WeakGameEntity> all = Mission.Current.Scene
        .FindWeakEntitiesWithTag("spawnpoint_set")
        .ToList();

    WeakGameEntity keep = Mission.Current.Scene.FindWeakEntityWithTag(keepTag);

    foreach (WeakGameEntity e in all)
    {
        if (e != keep)
        {
            // WeakGameEntity.Remove(int removeReason) 的签名在 WeakGameEntity.cs:652。
            // 官方用的是 76；同族代码另有 Mission.cs:1948 的 75 与
            // SiegeMissionPreparationHandler.cs:90 的 77。这三个数字在托管树里
            // 没有对应的公开枚举，含义 UNRESOLVED —— 沿用 76 最安全。
            e.Remove(76);
        }
    }
}
```

## 风险与边界

- **只跑一次，不重试。** 标志在 `BattleSpawnLogic.cs:42` 无条件置真；守卫在 `BattleSpawnLogic.cs:28`。
- **找不到选中集 = 静默不删。** `if` 在 `BattleSpawnLogic.cs:33`，不报错、不打日志。
- **四个 tag 常量零引用。** 引用它们不会让行为改变；真正的删除依据是 `BattleSpawnLogic.cs:35` 的字面量 `"spawnpoint_set"`。
- **私有常量 `SpawnPointSetCommonTag`（`BattleSpawnLogic.cs:15`）改了没用。** 代码不用它。
- **`"battle_set"` 在仓库里有三处独立定义**（`BattleSpawnLogic.cs:9`、`CampaignData.cs:127`、`BannerlordMissions.cs:185`）。**改名要三处同改。**
- **构造函数零校验。** null / 空串 / 不存在的 tag 都会成功构造。
- **`dt` 形参未使用。** 别把它当逐帧逻辑。
- **`Remove(76)` 的语义 UNRESOLVED。** 托管树里没有对应的公开枚举；同族另有 75（`Mission.cs:1948`）与 77（`SiegeMissionPreparationHandler.cs:90`）。**没有阳性证据，不要猜。**
- **它只删不建。** 选中的那套必须已经由别的流程摆进场景。
- **命名空间是 `TaleWorlds.MountAndBlade.Source.Missions`**，用的时候别漏 `using`。

## 依赖关系

- 本类：`BattleSpawnLogic.cs:7` 类头、`:9`/`:11`/`:13` 三个 tag 常量、`:15` 私有常量、`:17`/`:19` 两个字段、`:21` 构造、`:26` 唯一的 hook、`:28` 守卫、`:32` 找选中集、`:35` 收集全集、`:36` 剔除、`:39` 删除、`:42` 置位
- 基类：[MissionLogic](../MissionLogic/)；hook 的虚声明在 `MissionBehavior.cs:138`
- 场景查询：[Scene](../../engine/Scene/) 的 `FindWeakEntityWithTag`（`Scene.cs:1484`）与 `FindWeakEntitiesWithTag`（`Scene.cs:1479`），返回 [WeakGameEntity](../../engine/WeakGameEntity/)
- 删除动作：`WeakGameEntity.cs:652` 的 `public void Remove(int removeReason)`；同族码 75 在 `Mission.cs:1948`、77 在 `SiegeMissionPreparationHandler.cs:90`
- 7 个构造点：`BannerlordMissions.cs:185`、`SandBoxMissions.cs:715`、`SandBoxMissions.cs:826`、`SandBoxMissions.cs:983`、`SandBoxMissions.cs:1076`、`SandBoxMissions.cs:1435`、`SandBoxMissions.cs:1572`
- 同名标签的第三处定义：[CampaignData](../../campaign/CampaignData/) 的 `CampaignData.cs:127`
- 与刷兵分配的分工：[BattleSpawnModel](../BattleSpawnModel/) 决定「谁进哪支阵型」，本类只管「场景里留哪套出生点」
- 桶首页：[mission-ext API 分区](../)