---
title: "HandPose"
description: "仅编辑器可用的骨架摆姿脚本组件：在场景编辑器里给角色实体摆一个手部姿态并冻结动画。OnEditorTick 里有一大段等间隔强制刷新，运行时路径不存在任何调用点。"
---

# HandPose

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HandPose : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/HandPose.cs`

## 概述

全文 114 行，**只在场景编辑器里跑**，运行时没有任何调用点（实测全树 grep `HandPose` 只命中自身声明）。它做的事是：在一个骨架实体上建出动作集、强制推进几帧动画把它摆到某个手部姿态、然后把动画冻结住。

三个字段构成它的全部状态：编辑器专用的 [EditorGameManager](../EditorGameManager/) 引用（`HandPose.cs:9`）、一次性初始化标记（`HandPose.cs:11`，注意拼写是 `_initiliazed` 少一个 `a`）、以及冻结完成标记（`HandPose.cs:13`）。

两个覆写钩子构成它的全部逻辑：`OnEditorInit`（`HandPose.cs:15`）与 `OnEditorTick`（`HandPose.cs:26`）。

## 心智模型

把它当成**「编辑器里摆姿势的一次性烘焙脚本」**，而不是运行期行为。四条推论：

第一，**它只有编辑器路径。** 唯二的钩子是 `OnEditorInit` 与 `OnEditorTick`，二者在游戏运行时都不被调用。**把它挂到运行时实体上不会有任何效果** —— 不是「效果很小」，是零。

第二，**它是「一次性烘焙」，靠两个 bool 分三段推进。** 第一段（`HandPose.cs:67-70`）等编辑器资源加载完，把 `_isFinished` 置真。第二段（`HandPose.cs:72-97`）在 `Game.Current` 存在且还没初始化时，建骨架、拷组件、设动作集、推两帧不同步长的动画、再冻结，然后置 `_initiliazed`。第三段（`HandPose.cs:98-112`）此后每个 tick 都做「解冻 → 推进 0.001 → 设参数 → 标脏 → 冻结」。**所以它是「跑一次烘焙，然后每帧维持冻结」**，不是一个持续的动画播放器。

第三，**姿态是靠一个硬编码的 ActionIndex 实现的。** `HandPose.cs:79` 写的是 `ActionIndexCache.act_tableau_hand_armor_pose`，通道 0、权重 0、第二个参数 `-0.2f`。**这是一个 tableau（立绘）专用的手部持械姿态，不是通用手型。** 想换姿态就得改这一行的常量 —— 而它是 `static readonly` 的 ActionIndex 缓存，你只能整个换掉。

第四，**冻结状态在方法末尾被无条件恢复。** 每次 tick 结束都 `Freeze(true)`（`HandPose.cs:111`）。**这意味着这个组件会持续把骨架锁在冻结态**，任何想在同一实体上播别的动画的代码都会发现动画不动。

还有一条边界：`OnEditorInit` 在 `Game.Current == null` 时才 `new EditorGameManager()`（`HandPose.cs:20-23`）。**也就是说游戏已经启动时进入编辑器，这个组件不会自己建 manager，直接是 null**，后续 tick 被 `HandPose.cs:67` 的判空挡掉。

## 如何使用

**拿法：** 在场景编辑器的实体上挂 `HandPose` 脚本组件。**不要在运行时挂。**

```csharp
using TaleWorlds.MountAndBlade.View.Scripts;
using TaleWorlds.Engine;

// 编辑器内：给一个实体挂上摆姿组件
public static void AttachHandPose(WeakGameEntity entity)
{
    if (entity == null)
    {
        return;
    }

    // ⚠ 运行时调用无效果：OnEditorInit / OnEditorTick 在游戏运行期不会被调用
    entity.AddScriptComponent("HandPose");
}
```

如果想在运行时复用同一套烘焙流程（自己重写，因为本类没有可复用的公开方法）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static class RuntimeHandPoser
{
    public static void BakeHandPose(GameEntity entity, Monster monster, int actionSetCode)
    {
        // 流程照抄 HandPose.cs:74 到 :85 的顺序
        AnimationSystemData anim = MonsterExtensions.FillAnimationSystemData(
            monster, MBActionSet.GetActionSet(actionSetCode), 1f, false);

        GameEntityExtensions.CreateSkeletonWithActionSet(entity, ref anim);

        entity.CopyComponentsToSkeleton();

        // 姿态常量来自 HandPose.cs:79
        entity.Skeleton.SetAgentActionChannel(
            0, ref ActionIndexCache.act_tableau_hand_armor_pose, 0f, -0.2f, true, 0f);

        // 先推进两帧不同步长再冻结 —— 顺序见 HandPose.cs:83 与 :89
        entity.Skeleton.TickAnimationsAndForceUpdate(0.01f, entity.GetGlobalFrame(), true);
        entity.Skeleton.Freeze(false);
        entity.Skeleton.TickAnimationsAndForceUpdate(0.001f, entity.GetGlobalFrame(), false);
        entity.Skeleton.SetAnimationParameterAtChannel(0, 0f);
        entity.Skeleton.SetUptoDate(false);
        entity.Skeleton.Freeze(true);
    }
}
```

照抄它的「维持冻结」循环（注意这会把骨架锁死）：

```csharp
using TaleWorlds.Engine;

// 对应 HandPose.cs:98-112：每次 tick 都解冻 -> 推进 -> 标脏 -> 冻结
public static void KeepFrozenTick(GameEntity entity)
{
    entity.Skeleton.Freeze(false);
    entity.Skeleton.TickAnimationsAndForceUpdate(0.001f, entity.GetGlobalFrame(), false);
    entity.Skeleton.SetAnimationParameterAtChannel(0, 0f);
    entity.Skeleton.SetUptoDate(false);
    entity.Skeleton.Freeze(true);
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class HandPose : ScriptComponentBehavior`（`HandPose.cs:7`） | 非 sealed。命名空间 `TaleWorlds.MountAndBlade.View.Scripts`（`HandPose.cs:5`）—— 注意带 `.Scripts`，是视图模块里的脚本目录。 |
| `_editorGameManager` | `private MBGameManager _editorGameManager`（`HandPose.cs:9`） | 专用类型是 `MBGameManager`（继承 [GameManagerBase](../../core-extra/GameManagerBase/)）。**只在 `Game.Current == null` 时赋值**（`HandPose.cs:20-23`）。判空在 `HandPose.cs:67`。 |
| `_initiliazed` | `private bool _initiliazed`（`HandPose.cs:11`） | **拼写少一个 `a`**（应为 `_initialized`）。控制第二段烘焙只跑一次（判在 `HandPose.cs:72`，置位在 `HandPose.cs:96`）。 |
| `_isFinished` | `private bool _isFinished`（`HandPose.cs:13`） | 等 `DoLoadingForGameManager()` 返回 true 才置真（`HandPose.cs:69`）。**第一段门。** |
| `OnEditorInit` | `protected override void OnEditorInit()`（`HandPose.cs:15`） | 唯一的初始化钩子。调 base（`HandPose.cs:19`）后，只在 `Game.Current == null` 时建 manager（`HandPose.cs:22`）。**游戏已启动时不建。** |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)`（`HandPose.cs:26`） | **唯一的行为钩子**，全文 85 行里最大的一块。三段结构：加载门（`:67`）、烘焙（`:72`）、维持冻结（`:98`）。**`dt` 形参一次都没用** —— 推进步长是写死的 `0.001f` 与 `0.01f`。 |

烘焙段的九个动作，按源码顺序：

| 步骤 | 行 | 动作 |
| --- | --- | --- |
| 装填动画系统数据 | `HandPose.cs:74` | `MonsterExtensions.FillAnimationSystemData` |
| 建骨架 | `HandPose.cs:75` | `GameEntityExtensions.CreateSkeletonWithActionSet` |
| 拷组件 | `HandPose.cs:77` | `CopyComponentsToSkeleton` |
| 设姿态 | `HandPose.cs:79` | 通道 0 + `act_tableau_hand_armor_pose` |
| 首帧推进 | `HandPose.cs:83` | 步长 `0.01f`，`forceUpdate: true` |
| 解冻 | `HandPose.cs:85` | 为第二帧做准备 |
| 次帧推进 | `HandPose.cs:89` | 步长 `0.001f` |
| 烘焙收尾 | `HandPose.cs:91` | 设动画参数 |
| 重新冻结 | `HandPose.cs:95` | 烘焙结束时锁定 |

## 真实示例

看清两段推进的步长差异（这是本类唯一的技术细节）：

```csharp
// HandPose.cs:83 —— 首帧：步长 0.01f，第三个实参 true（强制）
// entity.Skeleton.TickAnimationsAndForceUpdate(0.01f, frame, true);

// HandPose.cs:89 —— 次帧：步长 0.001f，第三个实参 false（不强制）
// entity.Skeleton.TickAnimationsAndForceUpdate(0.001f, frame, false);
//
// 维持段（HandPose.cs:105）—— 永远用 0.001f + false
// entity.Skeleton.TickAnimationsAndForceUpdate(0.001f, frame, false);
//
// 结论：只有烘焙的第一帧是大步长 + 强制更新，之后全程 0.001f 慢速微调。
public static class HandPoseStepSizes
{
    public const float BakeFirstFrameStep = 0.01f;
    public const float BakeSecondFrameStep = 0.001f;
    public const float MaintainStep = 0.001f;
}
```

诊断「为什么编辑器里实体没摆出姿势」（照抄三段门）：

```csharp
using TaleWorlds.Engine;

// 本类的三个字段全是 private（HandPose.cs:9 / :11 / :13），
// 所以外部无法直接读状态，只能通过「烘焙前后的可观测现象」反推。
public static string DiagnoseHandPose(bool hasHandPoseComponent, GameEntity entity)
{
    // 第一段门：Game.Current 必须存在（HandPose.cs:72）
    if (Game.Current == null)
    {
        return "BLOCKED at 烘焙门: Game.Current == null（HandPose.cs:72）";
    }

    if (!hasHandPoseComponent)
    {
        return "组件没挂上：实体上没有 HandPose 脚本组件";
    }

    // 第二段门与第三段门都靠 private bool 驱动（HandPose.cs:67 / :72），
    // 外部读不到。可观测的替代信号是骨架是否被冻结：
    if (entity.Skeleton == null)
    {
        return "BLOCKED at 建骨架步：entity.Skeleton 为 null（HandPose.cs:75 尚未执行或已失败）";
    }

    return "两段门都可能过了；若仍无姿态，检查 HandPose.cs:79 的 ActionIndex 是否被换掉";
}
```

## 风险与边界

- **运行时无效。** 唯二钩子是编辑器钩子，游戏运行期不调用。
- **`dt` 形参未使用**（`HandPose.cs:26`）。步长写死 `0.01f` / `0.001f`。
- **会在每个 tick 结束时把骨架冻结**（`HandPose.cs:111`）。**同一实体上想播别的动画会发现不动。**
- **姿态是硬编码的 tableau 动作索引**（`HandPose.cs:79`）。不是通用手型 API。
- **`Game.Current != null` 时不建 manager**（`HandPose.cs:20`）。**游戏运行中进编辑器 → manager 为 null → 整个组件被 `HandPose.cs:67` 挡掉。**
- **字段名拼写错误 `_initiliazed`**（`HandPose.cs:11`）。**反射改名会直接破坏它。**
- **烘焙要求 `entity` 已有骨架流程入口。** 直接对裸 `GameEntity` 调会 null。
- **无错误处理。** 整个方法没有 try/catch，实体缺 Monster 数据时是直接抛。
- **全树 0 外部引用（实测）。** 没有别的类 new 它或查它。

## 依赖关系

- 本类：`HandPose.cs:7` 类头、`:9` 到 `:13` 三个字段、`:15` 与 `:26` 两个编辑器钩子（这一句指的都是同一个文件）
- 烘焙段的动作序列：`HandPose.cs:74` 到 `HandPose.cs:96`（这一句指的都是同一个文件）
- 维持冻结段：`HandPose.cs:98` 到 `HandPose.cs:112`（这一句指的都是同一个文件）
- 基类：[ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- 编辑器运行时：[EditorGameManager](../EditorGameManager/) 与 [GameManagerBase](../../core-extra/GameManagerBase/)（`DoLoadingForGameManager` 声明在 `GameManagerBase.cs:183`）
- 动画侧：[Skeleton](../../engine/Skeleton/)；动作索引 `ActionIndexCache`（`TaleWorlds.MountAndBlade`）；`MBActionSet` 与 `MonsterExtensions` 同属 `TaleWorlds.Core`
- 脚本目录同族：`TaleWorlds.MountAndBlade.View.Scripts` 命名空间下的其他编辑器脚本
- 动画数据侧：[MBActionSet](../MBActionSet/)、[MonsterExtensions](../MonsterExtensions/)、[ActionIndexCache](../../mission/ActionIndexCache/)
- 桶首页：[mission-ext API 分区](../)