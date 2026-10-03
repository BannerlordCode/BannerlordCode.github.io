---
title: "CharacterCreationScreen"
description: "开局角色创建界面的 ScreenBase 实现：反射收集各阶段视图，按 CharacterCreationState 的回调换层，并独占一张用于预览角色外观的渲染 Scene。"
---

# CharacterCreationScreen

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public class CharacterCreationScreen : ScreenBase, ICharacterCreationStateHandler, IGameStateListener`
**Base:** `TaleWorlds.ScreenSystem.ScreenBase`
**File:** `SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs`

## 概述

这个类承担角色创建流程里「壳」的那一环：真正的阶段逻辑在 [CharacterCreationState](../CharacterCreationState) 和 [CharacterCreationManager](../CharacterCreationManager) 里，界面长什么样在各个 `CharacterCreationXxxStageView` 里，本类只做三件事——**建一张通用渲染 Scene**、**把阶段类型映射到视图类型**、**在状态回调到达时把旧层的 `ScreenLayer` 拆下来换成新层的**。它同时实现 `ICharacterCreationStateHandler`（由状态对象回调）和 `IGameStateListener`（由 [GameStateManager](../../core-extra/GameStateManager) 驱动生命周期），而类头部的 `[GameStateScreen(typeof(CharacterCreationState))]` 就是让前者把该 `GameState` 自动绑定到这个屏幕的声明式开关。

因为它是**在构造函数里就把副作用做完**的类型——构造即建 Scene、构造即起环境音、构造即扫描程序集——它没有也不打算提供第二个构造路径。想换掉角色创建界面，正确做法是换掉某个阶段的视图类，而不是继承并复用这个类。

## 心智模型

把它理解成「一个阶段视图的**装配器**加一个**层播放器**」，而不是一个可继承的 Screen 基类。核心是构造函数里那个 `CollectUnorderedStages()`：它取 `CharacterCreationStageViewAttribute` 所在的程序集，再用 `Extensions.GetActiveReferencingGameAssembliesSafe` 拿到所有「正在引用本程序集」的 mod 程序集，对两者逐个 `CollectStagesFromAssembly`，把「派生自 `CharacterCreationStageViewBase` 且带 `[CharacterCreationStageView(typeof(某Stage))]`」的类型塞进 `_stageViews` 字典。**注意那个 `CollectStagesFromAssembly` 的覆盖语义**：`if (_stageViews.ContainsKey(...)) { _stageViews[StageType] = item; } else { _stageViews.Add(...) }`——同键重复不是忽略而是**直接替换**，所以加载顺序决定了谁赢，mod 与官方撞同一个 StageType 时没有任何警告。

由此推出三条实操结论。第一，**这个屏幕不要手动 `new`**：全源码树里 `new CharacterCreationScreen(` 零命中，它只由 `GameStateScreen` 特性在游戏状态切换时实例化；mod 想进角色创建流程应该去推 `CharacterCreationState`，而不是塞屏幕。第二，**视图对象是每次换阶段都重建的**：`OnStageCreated` 里 `Activator.CreateInstance(value, ...)` 传 10 个构造参数（`CharacterCreationManager`、7 个委托包装、两个 `TextObject` 按钮文案），所以视图类**不能缓存到字段里跨阶段复用**，也没有无参构造可用。第三，**找不到视图类型不等于崩**：`else { _currentStageView = null; }` 之后 `OnFrameTick` 里的 `_currentStageView?.Tick(dt)` 是空安全的，结果是这一步**什么都不显示**——阶段被静默吞掉，没有异常。这是最容易踩的坑：给自定义 Stage 加了新类型却忘了写视图类，游戏只会表现为「某一步点下一步之后界面卡住」。

最后一个锚点：`OnFinalize` 是唯一做收尾的地方，顺序严格是 `StopSound()` → `MBAgentRendererSceneController.DestructAgentRendererSceneController(...)` → `_genericScene.ClearAll()` → `_genericScene.ManualInvalidate()` → 置 null。这条链断在任何一环都是 native 资源泄漏，而 `ManualInvalidate` 之后对象就不可用了，重复调 `OnFinalize` 会直接空引用。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public CharacterCreationScreen(CharacterCreationState characterCreationState)` | **唯一构造路径，且带副作用**：把自己注册成 `characterCreationState.Handler`（`ICharacterCreationStateHandler`），扫程序集填 `_stageViews`，`SoundEvent.CreateEventFromString("event:/mission/ambient/special/charactercreation", null)` 后立刻 `Play()`，最后 `CreateGenericScene()` 读入 `character_menu_new` 这张 prefab 并建 `MBAgentRendererSceneController`。mod 无法绕过它去造一个「干净的」实例。 |
| `OnStageCreated` | `void ICharacterCreationStateHandler.OnStageCreated(CharacterCreationStageBase stage)` | 由 `CharacterCreationState.OnStageActivated` 调进来，是**阶段切换的唯一挂钩**。用 `stage.GetType()` 当键查 `_stageViews`，命中就 `Activator.CreateInstance` 出视图、把 `stage.Listener` 指向视图、`SetGenericScene(_genericScene)` 把那张通用 Scene 交给它用；未命中就把 `_currentStageView` 置 null（静默失败）。 |
| `OnRefresh` | `void ICharacterCreationStateHandler.OnRefresh()` | **层的播放器**。先把上一轮缓存的 `_shownLayers` 逐个 `RemoveLayer`，再从当前视图 `GetLayers()` 重新取一份 `AddLayer`。所以视图的 `GetLayers()` 每次返回的应当是同一批层对象；返回一个全新构造的层会让旧层留在屏幕上。 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 每帧入口。`LoadingWindow.IsLoadingWindowActive` 为真时先 `DisableGlobalLoadingWindow()`（`OnCharacterCreationFinalized` 里打开的全局加载窗就是靠这一行关掉的），然后把 `dt` 转发给 `_currentStageView?.Tick(dt)`。**这是视图唯一稳定的每帧回调**。 |
| `OnFinalize` | `void IGameStateListener.OnFinalize()` | native 资源回收链：`base.OnFinalize()` → `StopSound()` → `DestructAgentRendererSceneController` → `ClearAll()` → `ManualInvalidate()` → 置 null。全流程唯一允许碰 `_genericScene` 的销毁点，不可重复调用。 |
| `OnCharacterCreationFinalized` | `void ICharacterCreationStateHandler.OnCharacterCreationFinalized()` | 玩家按完「开始游戏」时由 `CharacterCreationState.FinalizeCharacterCreationState()` 调进来，只做一件事 `LoadingWindow.EnableGlobalLoadingWindow()`。真正的地图切换在状态对象那边已经完成了，这里只是接住后续加载。 |
| `CreateGenericScene` | `private void CreateGenericScene()` | 建 `_genericScene` 并 `Read("character_menu_new", ...)`，其中 `SceneInitializationData.InitPhysicsWorld = false`——**这张 Scene 不跑物理**。随后建角色渲染控制器供各阶段预览 3D 人物用。它是私有方法，mod 无法替换 Scene 内容，只能通过视图的 `SetGenericScene` 拿到引用后自己往里加实体。 |
| `CollectUnorderedStages` | `private void CollectUnorderedStages()` | 反射扫描的调度者：先扫本程序集，再扫所有「引用了本程序集」的已加载 mod 程序集。函数名里的 `Unordered` 就是给下游一个暗示——**字典的填充顺序不保证，冲突时胜者不确定**。 |
| `CollectStagesFromAssembly` | `private void CollectStagesFromAssembly(Assembly assembly)` | 单程序集扫描，`GetTypesSafe` + `IsAssignableFrom` + `GetCustomAttributesSafe(...).FirstOrDefault()`。**同键覆盖而非跳过**，见上文心智模型。 |
| `StopSound` | `private void StopSound()` | `SoundManager.SetGlobalParameter("MissionCulture", 0f)` 并停掉环境音、把 `_cultureAmbientSoundEvent` 置 null。与 `CultureParameterId = "MissionCulture"` 常量对应——**常量声明了但从未被读**，实际用的是 `StopSound` 里硬编码的同一个字符串。 |

## 真实示例

进角色创建流程的正确入口是推 `GameState`，屏幕由 `[GameStateScreen]` 自动挂上（不要手动 `PushScreen`，全树没有手动构造它的路径）：

```csharp
CharacterCreationState state = Game.Current.GameStateManager.CreateState<CharacterCreationState>();
Game.Current.GameStateManager.PushState(state);
state.CharacterCreationManager.StartNarrativeStage();
```

往流程里插一个自定义阶段，并让它有界面（视图类型必须带特性，否则 `OnStageCreated` 会静默置空）：

```csharp
// 阶段数据侧：CharacterCreationStageBase 的子类
public class MyOriginStage : CharacterCreationStageBase
{
    public void Finish()
    {
        this.Listener?.OnStageFinalize();
    }
}

// 注册：CharacterCreationManager.AddStage 接受任意 CharacterCreationStageBase
Game.Current.GameStateManager.CreateState<CharacterCreationState>()
    .CharacterCreationManager.AddStage(new MyOriginStage());
```

自定义阶段视图。**构造签名必须与 `Activator.CreateInstance` 传入的 10 个参数逐位对齐**，否则这个阶段会在运行时以 `MissingMethodException` 失败：

```csharp
[CharacterCreationStageView(typeof(MyOriginStage))]
public class MyOriginStageView : CharacterCreationStageViewBase
{
    private GauntletLayer _layer;

    public MyOriginStageView(
        CharacterCreationManager characterCreationManager,
        ControlCharacterCreationStage affirmativeAction,
        TextObject affirmativeActionText,
        ControlCharacterCreationStage negativeAction,
        TextObject negativeActionText,
        ControlCharacterCreationStage refreshAction,
        ControlCharacterCreationStageReturnInt getCurrentStageIndexAction,
        ControlCharacterCreationStageReturnInt getTotalStageCountAction,
        ControlCharacterCreationStageReturnInt getFurthestIndexAction,
        ControlCharacterCreationStageWithInt goToIndexAction)
        : base(affirmativeAction, negativeAction, refreshAction,
               getCurrentStageIndexAction, getTotalStageCountAction,
               getFurthestIndexAction, goToIndexAction)
    {
        _layer = new GauntletLayer("MyOriginStage", 1, false);
        ScreenManager.TrySetFocus(_layer);
    }

    public override IEnumerable<ScreenLayer> GetLayers()
    {
        yield return _layer;
    }

    // 前进/后退直接触发基类构造时注入的委托，绕回 CharacterCreationManager
    public override void NextStage()
    {
        _affirmativeAction.Invoke();
    }

    public override void PreviousStage()
    {
        _negativeAction.Invoke();
    }

    public override int GetVirtualStageCount()
    {
        return 1;
    }

    public override string GetDebugInfo()
    {
        return "MyOriginStageView";
    }
}
```

读阶段进度、跳到玩家已到达的最远阶段（`GoToIndex` 的基类实现就是转调 `goToIndexAction`，最终落到 `CharacterCreationManager.GoToStage`）：

```csharp
CharacterCreationManager manager = state.CharacterCreationManager;
Debug.Print("stage " + manager.GetIndexOfCurrentStage() + " / " + manager.GetTotalStagesCount(), 0);
if (manager.GetIndexOfCurrentStage() < manager.GetFurthestIndex())
{
    manager.GoToStage(manager.GetFurthestIndex());
}
```

## 风险与边界

- **构造函数不可绕过。** 副作用（注册 `Handler`、起环境音、建 native Scene）全在构造里。测试或工具代码想造一个实例出来单独调，会连带启动声音循环与 Scene 加载。
- **视图查找失败是静默的。** `_stageViews` 未命中 → `_currentStageView = null`，没有异常、没有日志。表现是阶段推进后界面空白但流程仍在走。调试时先确认 `[CharacterCreationStageView(typeof(X))]` 的 `typeof(X)` 与运行时 `stage.GetType()` **完全一致**（含命名空间）。
- **同 StageType 后写覆盖先写，且顺序不保证。** `CollectUnorderedStages` 的名字不是玩笑。mod 覆盖官方阶段视图属于「能跑但随时会崩」的做法。
- **native Scene 只能回收一次。** `OnFinalize` 里 `ManualInvalidate()` 之后 `_genericScene = null`；重复 finalize 会在 `ClearAll`/`ManualInvalidate` 上空引用崩溃。`_agentRendererSceneController` 同理。
- **`Scene` 不跑物理。** `InitPhysicsWorld = false`，别指望在这张 Scene 里做碰撞相关的事。
- **`GetLayers()` 的返回值被缓存并反复 Add/Remove。** 每次返回新实例的层会让旧层残留在屏幕上，且 `ScreenManager` 的焦点可能落在已卸载的层上。
- **环境音是全局的。** `_cultureAmbientSoundEvent` 播放的是固定 prefab 路径，且 `StopSound` 会把 `MissionCulture` 全局参数清零——自己在别处设过这个 SoundManager 参数的话会被它抹掉。
- **`CultureParameterId` 常量是死的。** 声明为 `"MissionCulture"` 但全类从未引用，别指望通过常量改名来切换。
- **不要 `new CharacterCreationScreen`。** 它是 `[GameStateScreen]` 的自动绑定目标，手工构造会与游戏状态管理器持有的实例并存，出现两个 `_genericScene`。

## 依赖关系

- 宿主状态：[CharacterCreationState](../CharacterCreationState) 在构造时把自己的 `Handler` 设成本类，并在 `OnStageActivated` / `Refresh` / `FinalizeCharacterCreationState` 三处回调过来
- 流程控制：[CharacterCreationManager](../CharacterCreationManager) 是阶段列表与 Next/Previous/GoToStage 的真正持有者，本类只是把它的方法包成委托注入视图
- 视图基类：[CharacterCreationStageViewBase](CharacterCreationStageViewBase) 是本类 `Activator.CreateInstance` 的目标类型，视图的层从这里来
- 装配标记：[CharacterCreationStageViewAttribute](CharacterCreationStageViewAttribute) 是 `CollectStagesFromAssembly` 唯一认的键来源
- 回调接口：[ICharacterCreationStateHandler](../ICharacterCreationStateHandler) 定义了 `OnRefresh` / `OnStageCreated` / `OnCharacterCreationFinalized` 三个方法，本类以显式实现方式提供，**不能从外部按具体类型调用**
- 同流程页面：[CharacterCreationManager](../CharacterCreationManager) 与 [CharacterCreationState](../CharacterCreationState) 是理解本类时必须并排读的两页
- 生命周期宿主：[ScreenBase](../ScreenBase) 的 `AddLayer` / `RemoveLayer` / `OnFrameTick` 是本类换层与每帧转发的全部依托
- 阶段数据侧：[CharacterCreationStageBase](../CharacterCreationStageBase) 是 `OnStageCreated` 的入参类型，它只有一个 `Listener` 属性和 `OnFinalize()`
- 桶首页：[campaign-ext API 分区](../)
