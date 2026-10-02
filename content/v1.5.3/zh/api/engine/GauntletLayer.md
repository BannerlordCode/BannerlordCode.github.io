---
title: "GauntletLayer"
description: "GauntletUI 的图层实现：加载 prefab movie 到 UIContext、处理输入命中与手柄导航，并参与全局 order 排序。写 mod 界面的必经层。"
---

# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine.GauntletUI
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `ScreenLayer`（TaleWorlds.ScreenSystem）
**Source:** `bannerlord-1.5.3/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## 概述

`GauntletLayer` 是 [ScreenBase](../../gui/ScreenBase) 挂载的**实际渲染与输入图层**：它持有一个 `UIContext`（把 XML prefab 渲染成控件树）、一个 `IGamepadNavigationContext`（手柄焦点导航），并实现命中测试、按键分发与 2D（TextMeshPro）绘制。它只管图层这一层，不懂界面业务——业务在 ViewModel 里。

## 心智模型

```
ScreenBase
  └ Layers: ScreenLayer[]
       └ GauntletLayer(name, localOrder, shouldClear)
            ├─ UIContext            // 控件树 + 渲染
            ├─ GamepadNavigationContext // 手柄焦点
            └─ Movie                // LoadMovie(name, ViewModel) 加载的 prefab 实例
```

每帧由 [ScreenManager](../../gui/ScreenManager) 调用 `Tick` → `LateUpdate` → `RenderTick` → `Update(lastKeysPressed)` → `ProcessEvents`；命中顺序由 `HitTest(Vector2)` / `HitTest()` / `FocusTest()` 参与竞争，`IsFocusedOnInput()` 决定当前层是否吃按键。

**常见误用与坑**

1. **`LoadMovie` 不配对 `ReleaseMovie`**。每次 `LoadMovie` 都会在 UIContext 里新建一棵控件树，不释放会持续累积显存。释放时机是 `ScreenBase.OnFinalize`。
2. **电影名（movie name）写错不报错**：`LoadMovie` 找不到对应 prefab 时得到一个空 movie，界面一片空白且无异常。写完 UI 后先肉眼验证。
3. **`localOrder` 与全局 order 混淆**。`localOrder` 只决定同一界面内的相对顺序，最终渲染顺序由 `RefreshGlobalOrder` 计算。跨界面遮挡问题查全局顺序，不是查 localOrder。
4. **在 `Update` 里改控件树**。输入分发过程中改树会当帧不一致。UI 更新放 ViewModel 的 tick，交给下一帧渲染。
5. **`shouldClear` 语义**：构造时决定是否清空底层渲染目标。半透明叠加层用 `true` 会把下层内容清掉。

## 成员与调用时机

**构造与资源**

- `GauntletLayer(string name, int localOrder, bool shouldClear = false)`：在 `ScreenBase.OnInitialize` 里创建。
- `GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`：加载 prefab 并绑定 ViewModel。返回句柄供后续释放。
- `GauntletMovieIdentifier GetMovieIdentifier(string movieName)`：取已加载 movie 的句柄（用于 `ReleaseMovie`）。
- `void ReleaseMovie(GauntletMovieIdentifier identifier)`：释放 movie。**必须与 `LoadMovie` 配对**。
- `void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)` / `OnResourceRefreshEnd(...)`：资源热重载时保存/恢复已加载 movie。调试 mod UI 时很有用。

**上下文**

- `UIContext UIContext`：控件树与渲染上下文。想直接改控件属性从这里进。
- `IGamepadNavigationContext GamepadNavigationContext`：手柄焦点导航。手柄操作异常的排查起点。
- `bool GetIsAvailableForGamepadNavigation()`：当前是否可被手柄导航。

**继承自 ScreenLayer 的覆写**

- `protected override void OnActivate()` / `OnDeactivate()` / `OnFinalize()`：生命周期。
- `protected override void Tick(float dt)` / `LateUpdate(float dt)` / `RenderTick(float dt)`：三段帧更新。`RenderTick` 负责绘制。
- `protected override void Update(IReadOnlyList<int> lastKeysPressed)`：按键分发。
- `public override void ProcessEvents()`：事件队列处理。
- `public override bool HitTest(Vector2 position)` / `HitTest()` / `FocusTest()` / `IsFocusedOnInput()`：命中与焦点竞争。
- `protected override void OnLoseFocus()`：失焦回调。
- `public override void UpdateLayout()`：布局重算。
- `protected override void RefreshGlobalOrder(ref int currentOrder)`：参与全局 order 计算。

**其他**

- `public override void OnOnScreenKeyboardDone(string inputText)` / `OnOnScreenKeyboardCanceled()`：平台软键盘回调。
- `public override void DrawDebugInfo()`：调试绘制。
- `readonly TwoDimensionView TwoDimensionView` / `readonly ITwoDimensionPlatform TwoDimensionPlatform`：2D 绘制（TextMeshPro 文字）支撑。

## 真实示例

```csharp
// 在自定义 ScreenBase 里创建图层、加载 UI、正确释放
public class MySupplyScreen : ScreenBase
{
    private GauntletLayer _layer;
    private GauntletMovieIdentifier _movie;

    protected override void OnInitialize()
    {
        _layer = new GauntletLayer("supply", 100);          // localOrder 100
        _movie = _layer.LoadMovie("supply_screen_ui", new SupplyVM());
        AddLayer(_layer);
    }

    protected override void OnFinalize()
    {
        if (_layer != null && _movie != null)
            _layer.ReleaseMovie(_movie);                   // 必须配对释放
        _layer = null;
        _movie = null;
        base.OnFinalize();
    }

    protected override void OnFrameTick(float dt)
    {
        base.OnFrameTick(dt);
        // 手柄导航是否可用（调试输入问题）
        if (_layer != null && !_layer.GetIsAvailableForGamepadNavigation())
            Debug.Print("gamepad navigation unavailable");
    }
}
```

## 风险与边界

- **资源生命周期是主要风险**：不 `ReleaseMovie` 会在反复开关界面后累积显存泄漏，表现为长时间游戏后的帧率下降。
- **movie 名与 prefab 强绑定**：prefab 在模块的 `Prefab.xmls` 里被声明，名字写错得到空树。跨版本升级时 prefab 路径/名可能变，属于需要人工复核的破坏性变更。
- **输入竞争**：`HitTest` 与 `FocusTest` 决定按键去哪。多层叠加时如果上层没有正确返回 `IsFocusedOnInput()`，按键会被下层吃掉。
- **线程约束**：图层的所有操作都在主线程。不要从异步 AI 任务里改 UIContext。
- **跨域方向**：Engine.GauntletUI 在最上层，可引用 ScreenSystem 与 ViewModel；CampaignSystem / Mission 层**不能**反向引用它——界面桥接要通过事件。

## 依赖关系

- [ScreenBase](../../gui/ScreenBase) — 图层的宿主，管理 `Layers` 列表与生命周期
- [ScreenManager](../../gui/ScreenManager) — 每帧调用本层的 Tick/Update/HitTest，并计算全局 order