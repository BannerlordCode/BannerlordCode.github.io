---
title: "ArenaPreloadView"
description: "竞技场开场的角色模型预热视图：OnPreMissionTick 只跑一次，把参赛者名单交给 PreloadHelper，OnSceneRenderingStarted 才真正等待网格。"
---

# ArenaPreloadView

**Namespace:** `SandBox.View.Missions.Tournaments`
**Module:** SandBox
**Type:** `internal class ArenaPreloadView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions.Tournaments/ArenaPreloadView.cs`

## 概述

`ArenaPreloadView` 是 57 行、5 个成员的**一次性预热视图**。它继承 [MissionView](../../mission-ext/MissionView/)（进而继承 `MissionBehavior`），在任务开场把即将登场的角色模型预加载进内存，避免竞技场第一回合掉帧。

三个 override 各管一段：`OnPreMissionTick(float dt)`（`:19-44`）**只在第一次**收集名单并调用 `_helperInstance.PreloadCharacters(list)`；`OnSceneRenderingStarted()`（`:46-49`）调 `WaitForMeshesToBeLoaded()` 真正阻塞等待；`OnMissionStateDeactivated()`（`:51-55`）调 `Clear()` 收尾。

名单有两个来源，且**都做存在性判断**：`ArenaPracticeFightMissionController`（练习赛，`:26` 的 `GetMissionBehavior<>` 判空后在 `:28` 取参赛者，并在 `:32` 追加 `CharacterObject.PlayerCharacter`），以及 `TournamentBehavior`（正式比赛，`:34` 判空后在 `:37` 取 `GetAllPossibleParticipants()`）。

## 心智模型

把它当成**「开场三段式」**。三条推论：

第一，**三个回调是一条流水线，顺序不能调。** `_preloadDone` 这个布尔（`:17`）是唯一的闸门：`OnPreMissionTick` 里 `:21-24` 先判它、`:43` 置 true。所以**收集名单只发生一次**，无论 `OnPreMissionTick` 被调多少次。**而 `WaitForMeshesToBeLoaded()` 在渲染开始时才调**——意味着「发起加载」与「等待加载完成」分属两个不同阶段。

第二，**`_helperInstance` 在字段初始化时就 new 好了**（`:15`），不是构造器里。**所以哪怕这个视图被反复创建，每个实例都持有一个独立的 `PreloadHelper`。**

第三,**两个参赛来源是「或」不是「且」。** `:26` 与 `:35` 各自判空——练习赛存在就取练习赛名单，正式比赛存在就取正式名单。**理论上两者可以同时存在，此时名单会被追加成两份**（`:25` 的 `list` 在两段之间复用，没有去重）。

边界：**`internal` 类**，编译期不可引用；且 `MissionView` 的加载机制是「引擎按视图类型自动实例化」，**没有 `AddView` 之类的显式注册 API 可用**。

## 如何使用

**怎么拿到它**：**你不会 `new` 它。** `MissionView` 子类由任务加载时按类型扫描自动创建，`ArenaPreloadView` 全树**没有任何 `new`**。它只在竞技场/斗技场相关任务被加载时挂上。

同样的三段式，手写一个等价视图（注意 `MissionView` 的三个 override 签名）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.ObjectSystem;

public class MyPreloadView : MissionView
{
    private readonly PreloadHelper _helper = new PreloadHelper();
    private bool _preloadDone;

    public override void OnPreMissionTick(float dt)
    {
        if (_preloadDone)
        {
            return;
        }
        var list = new List<BasicCharacterObject> { CharacterObject.PlayerCharacter };
        _helper.PreloadCharacters(list);
        _preloadDone = true;
    }

    public override void OnSceneRenderingStarted()
    {
        _helper.WaitForMeshesToBeLoaded();
    }

    public override void OnMissionStateDeactivated()
    {
        base.OnMissionStateDeactivated();
        _helper.Clear();
    }
}
```

**用它最容易踩的一条**：**`OnMissionStateDeactivated` 里显式调了 `base.OnMissionStateDeactivated()`（`:53`）。** 这不是可选的仪式——`MissionView` 继承自 `MissionBehavior`，基类要在这一阶段退订事件。**省掉它，本类虽然没有订阅任何事件，但基类的清理不会执行，表现为任务里其他依赖该回调的模块状态残留。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_helperInstance` | `private readonly PreloadHelper _helperInstance = new PreloadHelper()` | 字段初始化时即 new（`:15`），**不是构造器里**。三个 override 都用它：`PreloadCharacters`（`:42`）、`WaitForMeshesToBeLoaded`（`:48`）、`Clear`（`:54`）。**`readonly`，生命周期与本视图实例一致。** |
| `_preloadDone` | `private bool _preloadDone` | 一次性闸门。`:21-24` 判它并提前 `return`，`:43` 置 true。**默认 false，无 volatile、无锁**——若引擎在多线程 tick，理论上可能重复进入。**但三个 override 全是主线程回调。** |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 覆盖 `MissionView` 的钩子（`MissionView.cs` 继承链里定义）。**只跑一次**：`:25` 建名单 → `:26` 判 `ArenaPracticeFightMissionController` → `:28` 取参赛者 → `:32` 追加玩家 → `:34` 取 `TournamentBehavior` → `:35` 判空 → `:37` 取全部可能参赛者 → `:42` 预热 → `:43` 置位。**`dt` 参数收下不用。** |
| `OnSceneRenderingStarted` | `public override void OnSceneRenderingStarted()` | 覆盖 `MissionView.cs:44` 的虚成员。**单行 `_helperInstance.WaitForMeshesToBeLoaded();`（`:48`）**——真正阻塞等网格。**这一句是「卡住也不掉帧」的地方，若 helper 没预热到东西，它不会有任何保护。** |
| `OnMissionStateDeactivated` | `public override void OnMissionStateDeactivated()` | 覆盖 `MissionView.cs:60` 的虚成员。`:53` 显式调 `((MissionBehavior)this).OnMissionStateDeactivated()`，`:54` 调 `_helperInstance.Clear()`。**base 调用不能省。** |

## 真实示例

复现它的名单收集逻辑 —— 两个来源都做判空，没有来源时传空列表：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 练习赛存在就带参赛者 + 玩家；正式比赛存在就带全部可能参赛者
List<BasicCharacterObject> roster = new List<BasicCharacterObject>();

if (Mission.Current.GetMissionBehavior<ArenaPracticeFightMissionController>() != null)
{
    foreach (CharacterObject c in ArenaPracticeFightMissionController.GetParticipantCharacters(Settlement.CurrentSettlement))
    {
        roster.Add((BasicCharacterObject)c);
    }
    roster.Add((BasicCharacterObject)CharacterObject.PlayerCharacter);
}

Debug.Print("roster size = " + roster.Count, 0);
Debug.Print("player included = " + roster.Contains((BasicCharacterObject)CharacterObject.PlayerCharacter), 0);
```

## 风险与边界

- **`internal` 类，编译期不可引用。** 且 `MissionView` 子类走自动实例化，**没有显式注册 API**。
- **`base.OnMissionStateDeactivated()` 不能省。** `:53` 显式调用。
- **`Clear()` 在退场时清缓存。** 漏调（派生类覆盖忘记调 base）会让预热的网格常驻。
- **`Settlement.CurrentSettlement` 是静态依赖。** `:28` 取练习赛名单时读的是静态当前聚落，**不是任务里存的那个**。在非竞技场任务里触发这个视图会拿到错的聚落。
- **`GetAllPossibleParticipants()` 返回全部可能参赛者，可能远大于实到人数。** `:37` 会把每个人都预加载一遍——**大型锦标赛的预热开销在这里放大。**
- **两个来源同时存在时名单会重复。** `:25` 的 `list` 被两段共用，没有 `Contains` 去重。
- **`Mission.Current` 静态依赖。** `:26` 与 `:34` 都通过 `Mission.Current` 取 Behavior，**视图本身不持有 mission 引用**。
- **`PreloadHelper` 是 `public` 可复用类。** `Modules.Native/.../PreloadHelper.cs:10`，公开方法有 `PreloadCharacters`（`:20`）、`WaitForMeshesToBeLoaded`（`:58`）、`PreloadEquipments`（`:77`）、`PreloadItems`（`:86`）、`PreloadEntities`（`:165`）、`PreloadMeshesAndPhysics`（`:186`）、`Clear`（`:203`）。**本类只用其中三个。**

## 参见

- 基类与契约：[MissionView](../../mission-ext/MissionView/)（`OnSceneRenderingStarted` `:44`、`OnMissionStateDeactivated` `:60`）、[MissionBehavior](../../mission/MissionBehavior/)
- 预热工具：[PreloadHelper](../../mission-ext/PreloadHelper/)
- 名单来源：[TournamentBehavior](../../campaign-ext/TournamentBehavior/)（`:115` 取参赛者）、`ArenaPracticeFightMissionController.GetParticipantCharacters`（`Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaPracticeFightMissionController.cs:427`）
- 静态入口：[Settlement](../../campaign/Settlement/)（`CurrentSettlement`）、`CharacterObject.PlayerCharacter`、`Mission.Current`
- 同桶：[MapAudioManager](../MapAudioManager/)、[ModuleCheckResult](../ModuleCheckResult/)、[NameplateSize](../NameplateSize/)、[SandBoxEditorMissionTester](../SandBoxEditorMissionTester/)、[DefeatHideoutBossObjective](../DefeatHideoutBossObjective/)
- 桶首页：[gameplay API 分区](../)