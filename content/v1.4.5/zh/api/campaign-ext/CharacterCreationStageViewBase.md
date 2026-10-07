---
title: "CharacterCreationStageViewBase"
description: "角色创建各阶段界面的抽象基类：持有七个回指 CharacterCreationManager 的委托包装，提供撤退菜单、阶段跳转与每帧转发等默认实现。"
---

# CharacterCreationStageViewBase

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**Base:** 无（直接实现 `ICharacterCreationStageListener`）
**File:** `SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs`

## 概述

这是角色创建里**每个阶段界面的基类**。它自己不画任何东西——真正的 GauntletMovie、`Scene`、角色预览都在 `SandBox.GauntletUI.CharacterCreation` 下的七个具体视图里。它提供的是两样东西：一是**七个被构造函数注入的委托包装**（`ControlCharacterCreationStage` / `ControlCharacterCreationStageReturnInt` / `ControlCharacterCreationStageWithInt`），它们由 [CharacterCreationScreen](../CharacterCreationScreen) 在 `Activator.CreateInstance` 时传入，最终落到 [CharacterCreationManager](../CharacterCreationManager) 的 `NextStage` / `PreviousStage` / `GetIndexOfCurrentStage` / `GetTotalStagesCount` / `GetFurthestIndex` / `GoToStage`；二是**撤退菜单与生命周期的一整套默认实现**，`HandleEscapeMenu` 与 `GetEscapeMenuItems` 就是官方建在基类上的复用点。

派生类只需关心六个抽象成员：`GetLayers()`、`NextStage()`、`PreviousStage()`、`GetVirtualStageCount()`、`LoadEscapeMenuMovie()`、`ReleaseEscapeMenuMovie()`，外加 `GetDebugInfo()`。其中 `NextStage` / `PreviousStage` 的官方实现全都是一行 `_affirmativeAction.Invoke()` / `_negativeAction.Invoke()`——**按钮文案由基类字段之外的 `TextObject` 单独传给派生类**，按钮的跳转行为则完全由基类兜住。

## 心智模型

把它当成「**流程遥控器 + 撤退菜单的公共实现**」，而不是「一个可以少写点代码的 Screen 基类」。理解它的关键是分清两类成员：一类是**注入进来的委托**（七个 `_*Action` 字段），它们是通往 `CharacterCreationManager` 的唯一通道，基类只提供 `_refreshAction.Invoke()` 和 `_goToIndexAction.Invoke(index)` 两个默认转发；另一类是**必须由派生类实现的抽象成员**，基类给不了。

由此推出四条实操结论。第一，**构造函数没有无参重载**，派生类的构造签名必须与 `CharacterCreationScreen.OnStageCreated` 里 `Activator.CreateInstance` 传的那 10 个实参逐位对齐，否则该阶段在运行时以 `MissingMethodException` 失败。第二，**基类的默认实现大多是空的但不是无用**：`SetGenericScene` / `Tick` / `OnFinalize` / `OnRefresh` 都是 `virtual` 空体，基类版本里 `OnRefresh` 唯一步动作是 `_refreshAction.Invoke()`，`SetGenericScene` 与 `Tick` 则什么都不做——需要 3D 预览的阶段（叙事、选项、审阅三例）才覆盖 `SetGenericScene`。第三，**`_cameraPosition` 是可以直接白嫖的**：`protected readonly Vec3 _cameraPosition = new Vec3(6.45f, 4.35f, 1.6f, -1f)`，`CharacterCreationNarrativeStageView` / `CharacterCreationOptionsStageView` / `CharacterCreationReviewStageView` 三家都是 `BodyGeneratorView.InitCamera(_camera, _cameraPosition)`，自己再写一份只会和官方面孔对不上。第四，**`_isEscapeOpen` 是私有状态，没有任何读取入口**：`HandleEscapeMenu` 用它决定是开还是关，但外部拿不到，所以别指望能从外面查询菜单是否已展开。

一个必须写进心里的坑：`GetVirtualStageCount()` 在 1.4.5 的全部 8,583 个 `.cs` 里**只有七个 override 和一个抽象声明，没有任何调用点**。它是死成员——返回什么值都不会影响流程。派发逻辑实际走的是注入的 `_getTotalStageCountAction`（转调 `CharacterCreationManager.GetTotalStagesCount`）。写自定义视图时返回一个合理值即可，但别指望改它能改变步进条。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_affirmativeAction` | `protected readonly ControlCharacterCreationStage affirmativeAction` | 「下一步 / 确定」按钮的回指。基类不消费它，**所有七个官方视图的 `NextStage()` 都是它的 `Invoke()`**。委托在屏幕构造时绑定到 `CharacterCreationManager.NextStage`，所以在视图里调它等价于推进流程。 |
| `_negativeAction` | `protected readonly ControlCharacterCreationStage negativeAction` | 「上一步 / 取消」按钮的回指，绑定 `CharacterCreationManager.PreviousStage`。同上，官方 `PreviousStage()` 全是它的 `Invoke()`。 |
| `_refreshAction` | `protected readonly ControlCharacterCreationStage refreshAction` | 绑定 `CharacterCreationState.Refresh`（不是 Manager 上的方法）。它是**基类 `OnRefresh` 唯一会做的事**：`OnRefresh()` 默认实现就一行 `_refreshAction.Invoke()`，派生类覆盖时记得 `base.OnRefresh()`，否则刷新链路断掉。 |
| `_goToIndexAction` | `protected readonly ControlCharacterCreationStageWithInt goToIndexAction` | 步进条上的「第 N 步」跳转，最终落到 `CharacterCreationManager.GoToStage(int)`。基类 `GoToIndex` 已经替你转调；只有需要做动画或拦截的视图（如 `CharacterCreationBannerEditorView` 转发给内部 `BannerEditorView.GoToIndex`）才覆盖它。 |
| `_getCurrentStageIndexAction` / `_getTotalStageCountAction` / `_getFurthestIndexAction` | `protected readonly ControlCharacterCreationStageReturnInt ...` | 三个只读回指，分别绑到 `CharacterCreationManager.GetIndexOfCurrentStage` / `GetTotalStagesCount` / `GetFurthestIndex`。**基类从不读它们**，纯粹是给派生类算「3 / 7」这类进度显示用的；步进条的总数应从 `_getTotalStageCountAction()` 拿，而不是从 `GetVirtualStageCount()`。 |
| `_cameraPosition` | `protected readonly Vec3 _cameraPosition = new Vec3(6.45f, 4.35f, 1.6f, -1f)` | 角色预览的默认机位（x/y/z/fov）。三个官方视图直接 `BodyGeneratorView.InitCamera(_camera, _cameraPosition)`。`readonly` 且无 setter，想换机位只能在 `SetGenericScene` 里自己 `InitCamera` 传别的 `Vec3`。 |
| `SetGenericScene` | `public virtual void SetGenericScene(Scene scene)` | 由 `CharacterCreationScreen.OnStageCreated` 在视图建好之后立刻调用，把屏幕持有的通用渲染 Scene 交给视图。**基类实现是空的**，因为只有要在 3D 场景里摆角色的阶段才需要它；不覆盖就是「本阶段不用那张 Scene」，完全合法。 |
| `OnRefresh` | `protected virtual void OnRefresh()` | 刷新钩子，默认 `_refreshAction.Invoke()`。派生类通常先重建自己的 Gauntlet 数据源再 `base.OnRefresh()`，让屏幕重挂层。 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 阶段结束清理钩子，**唯一入口是 `ICharacterCreationStageListener.OnStageFinalize()`**（该方法被 `CharacterCreationStageBase.OnFinalize()` 转发）。七个官方视图全部覆盖它做 native Scene / Movie / 角色实体的释放。基类版本为空。 |
| `Tick` | `public virtual void Tick(float dt)` | 每帧回调，入口是 `CharacterCreationScreen.OnFrameTick` 里的 `_currentStageView?.Tick(dt)`。基类为空；需要动画或状态机的阶段覆盖它。**不要在这里做重活**，每帧都会跑。 |
| `GoToIndex` | `public virtual void GoToIndex(int index)` | 步进条跳转的默认实现：`_goToIndexAction.Invoke(index)`。想加前置校验（越界、阶段未解锁）就在覆盖里先判再 `base.GoToIndex(index)`。 |
| `HandleEscapeMenu` | `public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)` | 撤退菜单的**开关**。监听 `screenLayer.Input.IsHotKeyReleased("ToggleEscapeMenu")`，已开则 `RemoveEscapeMenu(view)`，未开则 `OpenEscapeMenu(view)`。**必须传 `this`**（官方七个视图都是 `HandleEscapeMenu(this, ...)`），因为它需要 `view.LoadEscapeMenuMovie()` / `ReleaseEscapeMenuMovie()` 这对抽象成员来配对 movie 资源。 |
| `GetEscapeMenuItems` | `public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)` | 造出 8 项撤退菜单。`Resume` 与 `Exit to Main Menu` 可点，其余六项（Campaign Options / Options / Save / Save As / Load / Save And Exit）**一律置灰**，灰字理由统一来自 `GameTexts.FindText("str_pause_menu_disabled_hint", "CharacterCreation")`。`Exit to Main Menu` 的执行体是 `RemoveEscapeMenu(view)` → `view.OnFinalize()` → `MBGameManager.EndGame()`。同样必须传 `this`。 |
| `GetLayers` / `NextStage` / `PreviousStage` / `GetVirtualStageCount` / `LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie` / `GetDebugInfo` | `public abstract` | 七个必须实现的抽象成员。前三个对应「交出界面层」与「前进/后退」，`GetDebugInfo()` 只在调试路径上被读，`LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie` 是 `HandleEscapeMenu` 配对调用的对象。 |

## 死成员与陷阱

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---|---|---|---|
| `GetVirtualStageCount` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:76` | 7 | 0 | MEASURED | 基类声明为 `public abstract`，7 个类 override 它，而**全树 8,583 个 `.cs` 里没有任何调用点**。返回什么值，游戏自身都不会读。 |
| `_cameraPosition` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:31` | 0 | 3 次（3 行） | UNSUPPORTED | 工具报「0 调用点」，`grep -o -w` 实测**3 次活跃引用（3 行）**——类内无点前缀的访问。提取口径盲区，不是死成员。 |
| `_refreshAction` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:21` | 0 | 2 次（2 行） | UNSUPPORTED | 同上：工具报 0，实测**2 次活跃引用（2 行）**。提取口径盲区，不是死成员。 |

口径：源码树 `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`，8,583 个 `.cs`（含 `bin/`）。调用点数是**出现次数**（`grep -o -w`）。只有 `MEASURED` 行可以当结论读。

> override 数的口径：`:76` 是 `public abstract`，**不是** `public override`。7 个 override 分别在 `CharacterCreationBannerEditorView.cs`、`CharacterCreationClanNamingStageView.cs`、`CharacterCreationCultureStageView.cs`、`CharacterCreationFaceGeneratorView.cs`、`CharacterCreationNarrativeStageView.cs`、`CharacterCreationOptionsStageView.cs`、`CharacterCreationReviewStageView.cs`。早前「8 override」的说法是把抽象声明也数进去了。

## 真实示例

最小的自定义阶段视图：只交出一个 Gauntlet 层，前进/后退直接转调基类注入的委托，撤退菜单白嫖基类实现。

```csharp
[CharacterCreationStageView(typeof(MyOriginStage))]
public class MyOriginStageView : CharacterCreationStageViewBase
{
    private GauntletLayer _layer;
    private EscapeMenuVM _escapeMenuDatasource;
    private GauntletMovieIdentifier _escapeMenuMovie;
    private SceneLayer _characterLayer;
    private Camera _camera;
    private float _elapsed;

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
    }

    public override IEnumerable<ScreenLayer> GetLayers()
    {
        yield return _layer;
    }

    public override void NextStage()
    {
        _affirmativeAction.Invoke();
    }

    public override void PreviousStage()
    {
        _negativeAction.Invoke();
    }

    // 注意：这个值在 1.4.5 里没有任何调用点，步进条实际读的是 _getTotalStageCountAction()
    public override int GetVirtualStageCount()
    {
        return 1;
    }

    public override void LoadEscapeMenuMovie()
    {
        _escapeMenuDatasource = new EscapeMenuVM(GetEscapeMenuItems(this), null);
        _escapeMenuMovie = _layer.LoadMovie("EscapeMenu", _escapeMenuDatasource);
    }

    public override void ReleaseEscapeMenuMovie()
    {
        _layer.ReleaseMovie(_escapeMenuMovie);
        _escapeMenuDatasource = null;
        _escapeMenuMovie = null;
    }

    public override string GetDebugInfo()
    {
        return "MyOriginStageView";
    }
}
```

在 `Tick` 里驱动每帧逻辑，并在 `OnFinalize` 里释放资源——这两个钩子都由基类转发到正确时机（`Tick` 来自屏幕每帧，`OnFinalize` 来自 `CharacterCreationStageBase.OnFinalize()` 转发的 `ICharacterCreationStageListener.OnStageFinalize()`）：

```csharp
protected override void OnFinalize()
{
    base.OnFinalize();
    if (_escapeMenuMovie != null)
    {
        _layer.ReleaseMovie(_escapeMenuMovie);
        _escapeMenuMovie = null;
    }
    _characterLayer.ClearAll();
    _layer = null;
}

public override void Tick(float dt)
{
    _elapsed += dt;
}
```

显示阶段进度与「可跳过的最远步」——三个只读回指的正确用法：

```csharp
int current = _getCurrentStageIndexAction();
int total = _getTotalStageCountAction();
int furthest = _getFurthestIndexAction();

if (current < furthest)
{
    GoToIndex(furthest);
}
```

用基类机位初始化角色预览相机（官方三例的写法，`SetGenericScene` 在视图构造完成后才被屏幕调用）：

```csharp
public override void SetGenericScene(Scene scene)
{
    scene.SetShadow(true);
    _camera = Camera.CreateCamera();
    BodyGeneratorView.InitCamera(_camera, _cameraPosition);
    _characterLayer = new SceneLayer(false, true);
    _characterLayer.SetScene(scene);
    _characterLayer.SetCamera(_camera);
}
```

## 风险与边界

- **构造函数形状不可协商。** 七个参数的具体顺序由 `CharacterCreationScreen.OnStageCreated` 的 `Activator.CreateInstance` 实参顺序锁死：`manager, affirmative, affirmativeActionText, negative, negativeActionText, refresh, currentIndex, totalCount, furthestIndex, goToIndex`。注意第 3、5 位是 `TextObject`（按钮文案），基类构造并不收它们，派生类要自己存。
- **`GetVirtualStageCount()` 是死成员。** 1.4.5 全树零调用点。改它不会改变步进条或流程。
- **`SetGenericScene` / `Tick` / `OnFinalize` 的基类实现全是空的。** 不覆盖等于放弃这个能力，不是 bug。
- **覆盖 `OnRefresh` 时必须 `base.OnRefresh()`。** 否则 `_refreshAction.Invoke()` 丢失，屏幕侧的层重挂链路断掉。
- **`HandleEscapeMenu` / `GetEscapeMenuItems` 的第一个参数必须传 `this`。** 它们靠这个参数回调 `LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie` / `OnFinalize` 这三个（抽象或 protected）成员，传别的实例会在非本视图的状态上操作。
- **六项撤退菜单是硬编码置灰的。** 想要 Save / Load / Options，得覆盖 `GetEscapeMenuItems` 整个重写，不能只改一项。
- **`Exit to Main Menu` 会调 `view.OnFinalize()` 然后 `MBGameManager.EndGame()`。** `OnFinalize` 因此**不是只能调一次**——官方路径里它会在正常结束和退出到主菜单两种情况下各走一次，自定义视图的释放逻辑要能承受重复调用（官方七例都是这样写的）。
- **`_cameraPosition` 只读。** 想换机位就在 `SetGenericScene` 里自己构造 `Vec3` 传给 `InitCamera`。
- **视图对象随阶段重建。** `OnStageCreated` 每次都 `Activator.CreateInstance`，跨阶段缓存到静态字段的引用会指向已被换掉的旧层。
- **无参构造不存在。** `Activator.CreateInstance(type, args...)` 带参，任何试图 `new` 一个视图的代码都要照抄那 10 个参数。

## 跨版本提示

本类的公开表面（4 个 `public virtual`、3 个 `public`、7 个 `public abstract`、1 个 `protected virtual` ×2、7 个 `protected readonly` 委托字段、1 个 `protected readonly Vec3`）在 1.4.5 是「file-scoped namespace + 原始源码」形态，行号与 1.4.6 的反编译产物不可直接比对。**跨版本结论：判断不了** —— 卡在没拿到 `bannerlord-1.4.6/TaleWorlds.Core.ViewModelCollection/` 侧的对应基类（`SandBox.View` 在 1.4.6 的目录布局里是否仍叫这个名字），需要 Lead 指定 1.4.6 的对照文件路径后才能给出行级差异。

## 依赖关系

- 装配方：[CharacterCreationScreen](../CharacterCreationScreen) 是唯一实例化本类派生类的地方，也是七个委托实参的来源
- 装配标记：[CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute) 决定哪个阶段类型会映射到你的视图
- 跳转落点：[CharacterCreationManager](../CharacterCreationManager) 的 `NextStage` / `PreviousStage` / `GoToStage` / `GetIndexOfCurrentStage` / `GetTotalStagesCount` / `GetFurthestIndex` 是七个委托的最终目标
- 刷新落点：[CharacterCreationState](../CharacterCreationState) 的 `Refresh()` 是 `_refreshAction` 的唯一目标（注意它在状态对象上，不在 Manager 上）
- 结束回调：[ICharacterCreationStageListener](../ICharacterCreationStageListener) 只有一个 `OnStageFinalize()`，本类以显式实现把它转到 `protected virtual OnFinalize()`
- 阶段数据侧：[CharacterCreationStageBase](../CharacterCreationStageBase) 的 `Listener` 属性就是本类实例的落点
- 委托类型：`ControlCharacterCreationStage` 与同族的 `ControlCharacterCreationStageReturnInt` / `ControlCharacterCreationStageWithInt` 定义在 `TaleWorlds.Core.ViewModelCollection`（本项目文档库暂无这三个委托的页面，所以只列类型名不链接）
- 撤退菜单：[EscapeMenuItemVM](../../mission-ext/EscapeMenuItemVM) 是 `GetEscapeMenuItems` 的返回元素类型
- 屏幕层：[ScreenBase](../ScreenBase) 负责把 `GetLayers()` 的结果挂上屏
- 桶首页：[campaign-ext API 分区](../)
